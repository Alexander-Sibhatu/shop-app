import c_top1 from './c_top1.jpg'
import c_top2 from './c_top2.jpg'
import c_top3 from './c_top3.jpg'
import c_top4 from './c_top4.jpg'
import c_top5 from './c_top5.jpg'
import c_top6 from './c_top6.jpg'
import c_top7 from './c_top7.jpg'
import c_top8 from './c_top8.jpg'
import c_top9 from './c_top9.jpg'
import c_top10 from './c_top10.jpg'
import c_top11 from './c_top11.jpg'
import c_top12 from './c_top12.jpg'
import c_top13 from './c_top13.jpg'
import c_top14 from './c_top14.jpg'
import m_top1 from './m_top1.jpg'
import m_top2 from './m_top2.jpg'
import m_top3 from './m_top3.jpg'
import m_top4 from './m_top4.jpg'
import m_top5 from './m_top5.jpg'
import m_trouser1 from './m_trouser1.jpg'
import m_trouser2 from './m_trouser2.jpg'
import m_trouser3 from './m_trouser3.jpg'
import m_trouser4 from './m_trouser4.jpg'
import m_trouser5 from './m_trouser5.jpg'
import m_trouser6 from './m_trouser6.jpg'
import m_trouser7 from './m_trouser7.jpg'
import m_trouser8 from './m_trouser8.jpg'
import w_top1 from './w_top1.jpg'
import w_top2 from './w_top2.jpg'
import w_top3 from './w_top3.jpg'
import w_top4 from './w_top4.jpg'
import w_top5 from './w_top5.jpg'
import w_top6 from './w_top6.jpg'
import w_top7 from './w_top7.jpg'
import w_top8 from './w_top8.jpg'
import w_top9 from './w_top9.jpg'
import w_top10 from './w_top10.jpg'
import w_top11 from './w_top11.jpg'
import w_top12 from './w_top12.jpg'
import w_top13 from './w_top13.jpg'
import w_top14 from './w_top14.jpg'
import w_top15 from './w_top15.jpg'
import w_top16 from './w_top16.jpg'
import w_top17 from './w_top17.jpg'
import w_top18 from './w_top18.jpg'
import w_top19 from './w_top19.jpg'
import w_top20 from './w_top20.jpg'
import w_top21 from './w_top21.jpg'
import w_top22 from './w_top22.jpg'
import w_top23 from './w_top23.jpg'
import w_top24 from './w_top24.jpg'
import w_trouser1 from './w_trouser1.jpg'
import w_trouser2 from './w_trouser2.jpg'
import w_trouser3 from './w_trouser3.jpg'
import w_trouser4 from './w_trouser4.jpg'
import w_trouser5 from './w_trouser5.jpg'
import w_trouser6 from './w_trouser6.jpg'
import w_trouser7 from './w_trouser7.jpg'
import w_trouser8 from './w_trouser8.jpg'
import w_trouser9 from './w_trouser9.jpg'
import w_trouser10 from './w_trouser10.jpg'
import w_trouser11 from './w_trouser11.jpg'
import w_trouser12 from './w_trouser12.jpg'
import w_trouser13 from './w_trouser13.jpg'
import w_trouser14 from './w_trouser14.jpg'
import logo from './showUp.svg'
import profile_icon from './profiling_icon.svg'
import search_icon from './searching_icon.svg'
import cart_icon from './cart1_icon.svg'
import menu_icon from './menu_icon.svg'
import dropdown_icon from './dropdown_icon.svg'

export const assets = {
    dropdown_icon,
    menu_icon,
    cart_icon,
    search_icon,
    profile_icon,
    logo,
    c_top1,
    c_top2,
    c_top3,
    c_top4,
    c_top5,
    c_top6,
    c_top7,
    c_top8,
    c_top9,
    c_top10,
    c_top11,
    c_top12,
    c_top13,
    c_top14,
    m_top1,
    m_top2,
    m_top3,
    m_top4,
    m_top5,
    m_trouser1,
    m_trouser2,
    m_trouser3,
    m_trouser4,
    m_trouser5,
    m_trouser6,
    m_trouser7,
    m_trouser8,
    w_top1,
    w_top2,
    w_top3,
    w_top4,
    w_top5,
    w_top6,
    w_top7,
    w_top8,
    w_top9,
    w_top10,
    w_top11,
    w_top12,
    w_top13,
    w_top14,
    w_top15,
    w_top16,
    w_top17,
    w_top18,
    w_top19,
    w_top20,
    w_top21,
    w_top22,
    w_top23,
    w_top24,
    w_trouser1,
    w_trouser2,
    w_trouser3,
    w_trouser4,
    w_trouser5,
    w_trouser6,
    w_trouser7,
    w_trouser8,
    w_trouser9,
    w_trouser10,
    w_trouser11,
    w_trouser12,
    w_trouser13,
    w_trouser14
}

export const products = [
    {
        _id: "aaaaa",
        name: "Kids Designed Top",
        description: "A lightweigh, usually knitted by hand, pullover shirt, close_fitting and with suitable texture",
        price: 100,
        image: [
            c_top1, c_top2, 
            c_top3, c_top4, 
            c_top5, c_top6,
            c_top7, c_top8,
            c_top9, c_top10,
            c_top11, c_top12,
            c_top13, c_top14
        ],
        category: "Children",
        subCategory: "Topwear",
        sizes: ["S", "M", "L"],
        date: 1716634345448,
        bestseller: true,
    },
    {
        _id: 'aaaab',
        name: 'Men top Round Neck Cotton Top',
        description: " men's top is crafted from high-quality cotton, designed with a comfortable round neck for a relaxed and stylish fit.",
        price: 84,
        image: [
            m_top1, m_top2,
            m_top3, m_top4,
            m_top5
        ],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["XS", "S", "M", "L", "XL"],
        date: 1716634345449,
        bestseller: true,
    },
    {
        _id: 'aaaac',
        name: 'Men Trouser Cotton Top',
        description: "Men’s trousers are designed for both style and comfort, crafted from premium, breathable fabric.",
        price: 84,
        image: [
            m_trouser1, m_trouser2,
            m_trouser3, m_trouser4,
            m_trouser5, m_trouser6,
            m_trouser7, m_trouser8
        ],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["XS", "S", "M", "L", "XL"],
        date: 1716634345450,
        bestseller: true,
    },
    {
        _id: 'aaaad',
        name: "Women's Top",
        description: "Featuring a chic design and flattering fit, it pairs effortlessly with jeans, skirts, or trousers for a versatile look.",
        price: 84,
        image: [
            w_top1, w_top2,
            w_top3, w_top4,
            w_top5, w_top6,
            w_top7, w_top8,
            w_top9, w_top10,
            w_top11, w_top12,
            w_top13, w_top14,
            w_top15, w_top16,
            w_top17, w_top18,
            w_top19, w_top20,
            w_top21, w_top22,
            w_top23, w_top24
        ],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["XS", "S", "M", "L", "XL"],
        date: 1716634345451,
        bestseller: true,
    },
    {
        _id: 'aaaae',
        name: "Women's bottomwear",
        description: "Designed for style and comfort, this women’s bottomwear is crafted from premium, breathable fabric that offers a perfect fit and ease of movement.",
        price: 60,
        image: [
            w_trouser1, w_trouser2,
            w_trouser3, w_trouser4,
            w_trouser5, w_trouser6,
            w_trouser7, w_trouser8,
            w_trouser9, w_trouser10,
            w_trouser11, w_trouser12,
            w_trouser13, w_trouser14
        ],
        category: "Women",
        subCategory: "Bottomwear",
        sizes: ["XS", "S", "M", "L", "XL"],
        date: 1716634345452,
        bestseller: true,
    },

]