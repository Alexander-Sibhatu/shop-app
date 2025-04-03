import express from 'express';
import { placeOrder, PlaceOrderStripe, allOrders, userOrders, updateStatus, verifyStripe, verifyMollie, PlaceOrderMollie } from '../controllers/orderController.js'
import adminAuth from './../middleware/adminAuth.js';
import authUser from '../middleware/auth.js';

const orderRouter = express.Router()

// Admin Features
orderRouter.post('/list', adminAuth, allOrders)
.post('/status', adminAuth, updateStatus)

// Payment Features
orderRouter.post('/place', authUser, placeOrder)
.post('/stripe', authUser, PlaceOrderStripe)
.post('/mollie', authUser, PlaceOrderMollie)

// User Feature
orderRouter.post('/userorders', authUser, userOrders)


// verify payment
orderRouter.post('/verifyStripe', authUser, verifyStripe)
orderRouter.post('/order/mollie/webhook', authUser, verifyMollie);


export default orderRouter