import orderModel from './../models/orderModel.js';
import userModel from './../models/userModel.js';
import Stripe from 'stripe'
import { createMollieClient } from '@mollie/api-client'

// global variables
const currency = 'GBP'
const deliveryCharge = 10

// gateway initialize
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
const mollieClient = createMollieClient({ apiKey: process.env.MOLLIE_API_KEY })

// Placing order using COD Method
const placeOrder = async (req, res) => {
    try {
        
        const { userId, items, amount, address } = req.body;

        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod: "COD",
            payment: false,
            date: Date.now()
        }

        const newOrder = new orderModel(orderData)
        await newOrder.save()

        await userModel.findByIdAndUpdate(userId, {cartData:{}})

        res.json({success:true, message: "Order Placed"})

    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

// Placing order using Stripe Method
const PlaceOrderStripe = async (req, res) => {
    try {
        
        const { userId, items, amount, address } = req.body;
        const { origin } = req.headers;

        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod: "Stripe",
            payment: false,
            date: Date.now()
        }

        const newOrder = new orderModel(orderData)
        await newOrder.save()

        const line_items = items.map((item) => ({
            price_data: {
                currency: currency,
                product_data: {
                    name:item.name
                },
                unit_amount: item.price * 100
            },
            quantity: item.quantity
        }))

        line_items.push({
            price_data: {
                currency: currency,
                product_data: {
                    name:'Delivery fee'
                },
                unit_amount: deliveryCharge * 100
            },
            quantity: 1
        })

        const session = await stripe.checkout.sessions.create({
            success_url: `${origin}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url: `${origin}/verify?success=true&orderId=${newOrder._id}`,
            line_items,
            mode: 'payment',
        })

        res.json({success: true, session_url:session.url})
    
    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

// Placing order using Mollie Method
const PlaceOrderMollie = async (req, res) => {
    console.log("Webhook URL:", `${process.env.BACKEND_URL}/api/order/mollie/webhook`);

    try {
        
        const { userId, items, amount, address } = req.body;
        const { origin } = req.headers;

        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod: "Mollie",
            payment: false,
            date: Date.now()
        }

        const newOrder = await new orderModel(orderData).save();

        const molliePayment = await mollieClient.payments.create({
            amount: {
                currency: "EUR",
                value: (amount).toFixed(2),
            },
            description: 'Order from Your Store',
            redirectUrl: `${origin}/verify?success=true&orderId=${newOrder._id}`,
            webhookUrl: `${process.env.BACKEND_URL}/api/order/mollie/webhook`,
            metadata: {
                orderId: newOrder._id.toString(),
                userId,
            }
        });

        res.json({ success: true, session_url: molliePayment._links.checkout.href });
        
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// Verify Stripe
const verifyStripe = async (req, res) => {

    const { orderId, success, userId } = req.body
    
    try {
        if (success === 'true') {
            await orderModel.findByIdAndUpdate(orderId, {payment:true});
            await userModel.findByIdAndUpdate(userId, {cartData: {}})
            res.json({success: true});
        } else {
            await orderModel.findByIdAndDelete(orderId)
            res.json({success:false})
        }

    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

// Verify Mollie
const verifyMollie = async (req, res) => {
    try {
      const payment = await mollieClient.payments.get(req.body.id);
  
      if (payment.isPaid()) {
        const orderId = payment.metadata.orderId;
        const userId = payment.metadata.userId;
  
        await orderModel.findByIdAndUpdate(orderId, { payment: true });
        await userModel.findByIdAndUpdate(userId, { cartData: {} });
  
        res.status(200).send('OK');
      } else {
        res.status(400).send('Payment not completed');
      }
    } catch (error) {
      console.error("Mollie webhook error:", error);
      res.status(500).send('Error verifying Mollie payment');
    }
  };
  

// Placing orders using Razorpay Method
const allOrders = async (req, res) => {
    try {
        
        const orders = await orderModel.find({})
        res.json({success: true, orders})

    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

// User order data for frontend
const userOrders = async (req, res) => {

    try {
        
        const { userId } = req.body

        const orders = await orderModel.find({ userId })
        res.json({success: true, orders})

    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

// update order status from Admin panel
const updateStatus = async (req, res) => {
    try {
        
        const { orderId, status } = req.body
        await orderModel.findByIdAndUpdate(orderId, { status })
        res.json({success: true, message: 'Status Updated'})

    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

export { placeOrder, PlaceOrderStripe, PlaceOrderMollie, allOrders, userOrders, updateStatus, verifyStripe, verifyMollie }