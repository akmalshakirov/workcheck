import { BarChart3, Clock, Shield, Users } from "lucide-react";

export const Data = {
    steps: [
        {
            step: "01",
            title: "Ro'yxatdan O'ting",
            description: "Tez va oson ro'yxatdan o'tish jarayoni",
        },
        {
            step: "02",
            title: "Xodimlarni Qo'shing",
            description: "Jamoangizni tizimga qo'shing va sozlang",
        },
        {
            step: "03",
            title: "Nazoratni Boshlang",
            description: "Avtomatik kuzatuv va hisobot olishni boshlang",
        },
    ],

    benefits: [
        "Vaqtni tejash va samaradorlikni oshirish",
        "Xodimlar ishtirokini yaxshilash",
        "Avtomatik hisobot yaratish",
        "Masofadan boshqarish imkoniyati",
    ],

    testimonials: [
        {
            name: "Aziz Karimov",
            company: "Tech Solutions LLC",
            text: "WorkCheck bizning kompaniyamiz uchun juda foydali bo'ldi. Xodimlar nazorati ancha osonlashdi.",
            rating: 5,
        },
        {
            name: "Malika Yusupova",
            company: "Digital Agency",
            text: "Tizim juda qulay va intuitiv. Hisobotlar esa juda batafsil va tushunarli.",
            rating: 5,
        },
        {
            name: "Bobur Rahmonov",
            company: "Construction Group",
            text: "Katta jamoa bilan ishlashda WorkCheck juda yordam beradi. Tavsiya qilaman!",
            rating: 5,
        },
    ],

    pricingPlans: [
        {
            name: "Boshlang'ich",
            price: "199,000",
            period: "/oy",
            features: [
                "10 xodimgacha",
                "Asosiy hisobotlar",
                "Email qo'llab-quvvatlash",
                "Standart xavfsizlik",
            ],
            popular: false,
        },
        {
            name: "Professional",
            price: "399,000",
            period: "/oy",
            features: [
                "50 xodimgacha",
                "Kengaytirilgan hisobotlar",
                "24/7 qo'llab-quvvatlash",
                "Premium xavfsizlik",
                "API integratsiya",
            ],
            popular: true,
        },
        {
            name: "Enterprise",
            price: "Aloqa",
            period: "",
            features: [
                "Cheksiz xodim",
                "Maxsus hisobotlar",
                "Shaxsiy menejer",
                "Maxsus integratsiya",
                "On-premise o'rnatish",
            ],
            popular: false,
        },
    ],
    navLinks: [
        { name: "Bosh sahifa", target: "hero" },
        { name: "Xususiyatlar", target: "features" },
        { name: "Qanday ishlaydi", target: "how-it-works" },
        { name: "Narxlar", target: "pricing" },
        { name: "Aloqa", target: "contact" },
    ],
    features: [
        {
            icon: Clock,
            title: "Avtomatik Nazorat",
            description:
                "Xodimlarning kirish va chiqish vaqtlarini avtomatik kuzatib boring",
        },
        {
            icon: BarChart3,
            title: "Hisobot va Analitika",
            description:
                "Batafsil hisobotlar va statistik ma'lumotlar bilan samaradorlikni oshiring",
        },
        {
            icon: Shield,
            title: "Xavfsizlik",
            description:
                "Ma'lumotlaringiz yuqori darajada himoyalangan va xavfsiz",
        },
        {
            icon: Users,
            title: "Jamoaviy Boshqaruv",
            description: "Katta jamoalarni oson boshqaring va nazorat qiling",
        },
    ],
};
