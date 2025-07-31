import {
    ArrowRight,
    Award,
    BarChart3,
    Calculator,
    Camera,
    CheckCircle,
    ChevronLeft,
    ChevronRight,
    Clock,
    DollarSign,
    Eye,
    Mail,
    MapPin,
    Phone,
    Play,
    Shield,
    Star,
    TrendingUp,
    UserCheck,
    Users,
    Zap,
} from "lucide-react";
import { useEffect, useState } from "react";

export const Home = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [currentStep, setCurrentStep] = useState(0);

    useEffect(() => {
        setIsVisible(true);

        // Testimonial avtomatik o'zgarishi
        const testimonialInterval = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % 3);
        }, 4000);

        // How it works steps avtomatik o'zgarishi
        const stepInterval = setInterval(() => {
            setCurrentStep((prev) => (prev + 1) % 4);
        }, 3000);

        return () => {
            clearInterval(testimonialInterval);
            clearInterval(stepInterval);
        };
    }, []);

    // Framer-motion animatsiya helper funksiyalari
    // const fadeInUp = {
    //     initial: { opacity: 0, y: 60 },
    //     animate: { opacity: 1, y: 0 },
    //     transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    // };

    // const fadeInLeft = {
    //     initial: { opacity: 0, x: -60 },
    //     animate: { opacity: 1, x: 0 },
    //     transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    // };

    // const fadeInRight = {
    //     initial: { opacity: 0, x: 60 },
    //     animate: { opacity: 1, x: 0 },
    //     transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    // };

    // const staggerChildren = {
    //     animate: {
    //         transition: {
    //             staggerChildren: 0.15,
    //             delayChildren: 0.3,
    //         },
    //     },
    // };

    // const scaleIn = {
    //     initial: { opacity: 0, scale: 0.8 },
    //     animate: { opacity: 1, scale: 1 },
    //     transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    // };

    // const bounceIn = {
    //     initial: { opacity: 0, scale: 0.3 },
    //     animate: { opacity: 1, scale: 1 },
    //     transition: { duration: 0.8, type: "spring", bounce: 0.5 },
    // };

    return (
        <div className='min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden'>
            {/* Hero Section */}
            <section className='relative min-h-screen flex items-center justify-center px-6'>
                <div className='absolute inset-0 opacity-20'>
                    <div className='absolute inset-0 bg-gradient-to-r from-blue-600/30 to-cyan-500/30'></div>
                    <div className='absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse'></div>
                    <div
                        className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse'
                        style={{ animationDelay: "1s" }}></div>
                    <div
                        className='absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-500/15 rounded-full blur-2xl animate-pulse'
                        style={{ animationDelay: "2s" }}></div>
                </div>

                <div className='relative z-10 text-center max-w-5xl mx-auto'>
                    <div
                        className={`transform transition-all duration-1200 ease-out ${
                            isVisible
                                ? "translate-y-0 opacity-100 scale-100"
                                : "translate-y-16 opacity-0 scale-95"
                        }`}>
                        <div className='inline-flex items-center px-6 py-3 rounded-full bg-blue-500/20 border border-blue-400/40 mb-8 backdrop-blur-sm transition-all duration-300 hover:bg-blue-500/30 hover:border-blue-400/60'>
                            <Eye className='w-5 h-5 text-blue-300 mr-3' />
                            <span className='text-blue-200 font-medium'>
                                FaceID bilan Avtomatik Nazorat
                            </span>
                        </div>

                        <h1 className='text-6xl md:text-8xl font-black mb-8 leading-tight'>
                            <span className='bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent'>
                                Work
                            </span>
                            <span className='bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 bg-clip-text text-transparent'>
                                Check
                            </span>
                        </h1>

                        <p className='text-xl md:text-2xl text-slate-300 mb-6 leading-relaxed max-w-4xl mx-auto'>
                            <span className='text-blue-300 font-semibold'>
                                FaceID texnologiyasi
                            </span>{" "}
                            bilan xodimlarni ishga kelish va ketishini kuzatib
                            boring,
                            <span className='text-cyan-300 font-semibold'>
                                {" "}
                                oylik maoshlarni avtomatik
                            </span>{" "}
                            hisoblang
                        </p>

                        <p className='text-lg text-slate-400 mb-10 max-w-3xl mx-auto'>
                            Zamonaviy va ishonchli tizim orqali xodimlar
                            faoliyatini real vaqtda nazorat qiling
                        </p>

                        <div className='flex flex-col sm:flex-row gap-6 justify-center items-center'>
                            <button className='group px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl font-bold text-lg transition-all duration-300 hover:from-blue-500 hover:to-cyan-500 hover:shadow-2xl hover:shadow-blue-500/30 transform hover:-translate-y-2 hover:scale-105'>
                                <span className='flex items-center'>
                                    Dashboard Ko'rish
                                    <ArrowRight className='ml-3 w-6 h-6 transition-transform group-hover:translate-x-2' />
                                </span>
                            </button>

                            <button className='group px-10 py-5 border-2 border-slate-600 hover:border-blue-400 rounded-xl font-bold text-lg transition-all duration-300 hover:bg-slate-800/50 backdrop-blur-sm flex items-center transform hover:-translate-y-1'>
                                <Play className='w-6 h-6 mr-3 text-blue-400 transition-colors group-hover:text-cyan-400' />
                                Live Demo
                            </button>
                        </div>

                        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto'>
                            {[
                                {
                                    number: "99.9%",
                                    label: "FaceID Aniqligi",
                                    icon: Camera,
                                },
                                {
                                    number: "< 2s",
                                    label: "Tezkor Tanib Olish",
                                    icon: Zap,
                                },
                                {
                                    number: "500+",
                                    label: "Faol Kompaniyalar",
                                    icon: Users,
                                },
                                {
                                    number: "Auto",
                                    label: "Maosh Hisoblash",
                                    icon: Calculator,
                                },
                            ].map((stat, index) => (
                                <div
                                    key={index}
                                    className={`p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50 backdrop-blur-sm transition-all duration-500 hover:bg-slate-800/50 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/20 transform hover:-translate-y-1 ${
                                        isVisible
                                            ? "animate-slideInUp"
                                            : "opacity-0"
                                    }`}
                                    style={{
                                        animationDelay: `${index * 0.15}s`,
                                    }}>
                                    <stat.icon className='w-8 h-8 text-blue-400 mb-3 mx-auto' />
                                    <div className='text-2xl md:text-3xl font-bold text-white mb-1'>
                                        {stat.number}
                                    </div>
                                    <div className='text-slate-400 text-sm font-medium'>
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2'>
                    <div className='animate-bounce'>
                        <div className='w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center opacity-75'>
                            <div className='w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse'></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Xususiyatlar Section */}
            <section className='py-24 px-6 relative'>
                <div className='absolute inset-0 opacity-5'>
                    <div
                        className='absolute inset-0'
                        style={{
                            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(6, 182, 212, 0.3) 0%, transparent 50%)`,
                        }}></div>
                </div>

                <div className='max-w-7xl mx-auto relative z-10'>
                    <div className='text-center mb-20'>
                        <h2 className='text-5xl md:text-6xl font-black mb-8'>
                            <span className='bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent'>
                                Nima Uchun
                            </span>
                            <br />
                            <span className='text-white'>WorkCheck?</span>
                        </h2>
                        <p className='text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed'>
                            Sun'iy intellekt va zamonaviy texnologiyalar bilan
                            xodimlar faoliyatini nazorat qilishning eng ilg'or
                            usuli
                        </p>
                    </div>

                    <div className='grid lg:grid-cols-3 gap-10'>
                        {[
                            {
                                icon: Camera,
                                title: "FaceID Texnologiyasi",
                                description:
                                    "Ilg'or yuz tanib olish texnologiyasi orqali xodimlarni avtomatik identifikatsiya qiladi. 99.9% aniqlik bilan har bir xodimni bir soniyadan kamroq vaqtda tanib oladi.",
                                features: [
                                    "Bir soniyada tanib olish",
                                    "99.9% aniqlik",
                                    "Qorong'ida ham ishlaydi",
                                    "Real-time monitoring",
                                ],
                            },
                            {
                                icon: Calculator,
                                title: "Avtomatik Maosh Hisoblash",
                                description:
                                    "Xodimlarni ishga kelish va ketish vaqtlariga asoslanib oylik maoshlarni avtomatik hisoblaydi. Ortiqcha ishlash, kechikish va boshqa omillarni hisobga oladi.",
                                features: [
                                    "Avtomatik hisoblash",
                                    "Ortiqcha ish vaqti",
                                    "Bonuslar hisobi",
                                    "Kechikish jarimalari",
                                ],
                            },
                            {
                                icon: TrendingUp,
                                title: "Real-time Analytics",
                                description:
                                    "Jonli hisobotlar va chuqur tahlillar orqali xodimlar samaradorligini kuzatib boring. Grafik va diagrammalar bilan ma'lumotlarni vizual ko'ring.",
                                features: [
                                    "Jonli hisobotlar",
                                    "Grafik tahlillar",
                                    "Excel export",
                                    "Mobil ilovalar",
                                ],
                            },
                        ].map((feature, index) => (
                            <div
                                key={index}
                                className={`group relative p-8 rounded-3xl bg-slate-800/20 border border-slate-700/50 backdrop-blur-sm transition-all duration-500 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 transform hover:-translate-y-3 hover:scale-105 ${
                                    isVisible
                                        ? "animate-slideInUp"
                                        : "opacity-0"
                                }`}
                                style={{ animationDelay: `${index * 0.2}s` }}>
                                <div
                                    className={`w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl flex items-center justify-center mb-8 shadow-lg shadow-blue-500/25 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                                    <feature.icon className='w-10 h-10 text-white' />
                                </div>

                                <h3 className='text-2xl md:text-3xl font-bold mb-6 text-white group-hover:text-blue-100 transition-colors duration-300'>
                                    {feature.title}
                                </h3>

                                <p className='text-slate-400 leading-relaxed text-lg mb-6 group-hover:text-slate-300 transition-colors duration-300'>
                                    {feature.description}
                                </p>

                                <div className='space-y-3'>
                                    {feature.features.map((item, idx) => (
                                        <div
                                            key={idx}
                                            className='flex items-center text-slate-300'>
                                            <CheckCircle className='w-4 h-4 text-blue-400 mr-3 flex-shrink-0' />
                                            <span className='text-sm'>
                                                {item}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Qanday Ishlaydi Section */}
            <section className='py-24 px-6 bg-gradient-to-r from-slate-900/50 to-blue-900/30 relative'>
                <div className='max-w-6xl mx-auto'>
                    <div className='text-center mb-20'>
                        <h2 className='text-5xl md:text-6xl font-black mb-8'>
                            Qanday{" "}
                            <span className='bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent'>
                                Ishlaydi
                            </span>
                            ?
                        </h2>
                        <p className='text-xl text-slate-400 max-w-2xl mx-auto'>
                            Faqat 4 oddiy bosqichda tizimni ishga tushiring va
                            avtomatik nazoratdan foydalaning
                        </p>
                    </div>

                    <div className='relative'>
                        {/* Progress line */}
                        <div className='hidden lg:block absolute top-24 left-0 right-0 h-1 bg-slate-700'>
                            <div
                                className='h-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-1000 ease-out'
                                style={{
                                    width: `${((currentStep + 1) / 4) * 100}%`,
                                }}></div>
                        </div>

                        <div className='grid lg:grid-cols-4 gap-8'>
                            {[
                                {
                                    step: "01",
                                    title: "Ro'yxatdan O'ting",
                                    description:
                                        "Tizimga ro'yxatdan o'ting va kompaniya ma'lumotlarini kiriting. Barcha xodimlar ro'yxatini yuklab oling.",
                                    icon: UserCheck,
                                    details: [
                                        "Kompaniya profili",
                                        "Xodimlar ma'lumotlari",
                                        "Tizim sozlamalari",
                                    ],
                                },
                                {
                                    step: "02",
                                    title: "FaceID O'rnating",
                                    description:
                                        "Har bir xodim uchun yuz ma'lumotlarini tizimga kiritib, FaceID ni faollashtiring.",
                                    icon: Camera,
                                    details: [
                                        "Yuz skanerlash",
                                        "Ma'lumot saqlash",
                                        "Xavfsizlik sozlamalari",
                                    ],
                                },
                                {
                                    step: "03",
                                    title: "Ish Vaqtini Sozlang",
                                    description:
                                        "Ish kunlari, vaqtlar va maosh me'yorlarini o'rnatib, avtomatik hisoblashni yoqing.",
                                    icon: Clock,
                                    details: [
                                        "Ish jadvali",
                                        "Maosh me'yorlari",
                                        "Bonus tizimi",
                                    ],
                                },
                                {
                                    step: "04",
                                    title: "Nazorat Qiling",
                                    description:
                                        "Tizim avtomatik ishlay boshlaydi. Real-time hisobotlar va statistikalarni kuzatib boring.",
                                    icon: BarChart3,
                                    details: [
                                        "Jonli monitoring",
                                        "Hisobotlar",
                                        "Analytics",
                                    ],
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className={`relative transition-all duration-500 ${
                                        currentStep === index
                                            ? "scale-105"
                                            : "scale-100"
                                    }`}>
                                    <div
                                        className={`p-8 rounded-3xl transition-all duration-500 ${
                                            currentStep === index
                                                ? "bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border-2 border-blue-400/50 shadow-2xl shadow-blue-500/25"
                                                : "bg-slate-800/30 border border-slate-700/50 hover:border-blue-500/30"
                                        } backdrop-blur-sm`}>
                                        {/* Step number */}
                                        <div
                                            className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl text-xl font-bold mb-6 transition-all duration-500 ${
                                                currentStep === index
                                                    ? "bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg shadow-blue-500/25 scale-110"
                                                    : "bg-slate-700 text-slate-300"
                                            }`}>
                                            {item.step}
                                        </div>

                                        {/* Icon */}
                                        <div
                                            className={`w-12 h-12 mb-6 transition-all duration-500 ${
                                                currentStep === index
                                                    ? "text-blue-300 scale-110"
                                                    : "text-slate-400"
                                            }`}>
                                            <item.icon className='w-full h-full' />
                                        </div>

                                        <h3
                                            className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                                                currentStep === index
                                                    ? "text-white"
                                                    : "text-slate-200"
                                            }`}>
                                            {item.title}
                                        </h3>

                                        <p
                                            className={`leading-relaxed mb-6 transition-colors duration-300 ${
                                                currentStep === index
                                                    ? "text-slate-200"
                                                    : "text-slate-400"
                                            }`}>
                                            {item.description}
                                        </p>

                                        {/* Details */}
                                        <div className='space-y-2'>
                                            {item.details.map((detail, idx) => (
                                                <div
                                                    key={idx}
                                                    className={`flex items-center transition-colors duration-300 ${
                                                        currentStep === index
                                                            ? "text-blue-200"
                                                            : "text-slate-500"
                                                    }`}>
                                                    <div
                                                        className={`w-1.5 h-1.5 rounded-full mr-3 ${
                                                            currentStep ===
                                                            index
                                                                ? "bg-blue-400"
                                                                : "bg-slate-600"
                                                        }`}></div>
                                                    <span className='text-sm'>
                                                        {detail}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Foydalar Section */}
            <section className='py-24 px-6'>
                <div className='max-w-7xl mx-auto'>
                    <div className='text-center mb-20'>
                        <h2 className='text-5xl md:text-6xl font-black mb-8'>
                            Biznes Uchun{" "}
                            <span className='bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent'>
                                Foydalar
                            </span>
                        </h2>
                        <p className='text-xl text-slate-400 max-w-3xl mx-auto'>
                            WorkCheck tizimi biznesingizga qanday samaradorlik
                            va tejamkorlik olib kelishini ko'ring
                        </p>
                    </div>

                    <div className='grid lg:grid-cols-2 gap-16 items-center'>
                        {/* Chap tomon - matn */}
                        <div className='order-2 lg:order-1'>
                            <div className='space-y-8'>
                                {[
                                    {
                                        icon: DollarSign,
                                        title: "70% Vaqt Tejash",
                                        description:
                                            "Manual nazorat va hisob-kitoblardan voz kechib, muhim ishlarga ko'proq vaqt ajrating",
                                    },
                                    {
                                        icon: Shield,
                                        title: "99.9% Aniqlik",
                                        description:
                                            "FaceID texnologiyasi orqali xato va manipulyatsiya imkoni butunlay yo'qoladi",
                                    },
                                    {
                                        icon: TrendingUp,
                                        title: "40% Samaradorlik O'sishi",
                                        description:
                                            "Xodimlar ishga o'z vaqtida kelishi va samaradorlik sezilarli darajada oshadi",
                                    },
                                    {
                                        icon: Award,
                                        title: "100% Shaffoflik",
                                        description:
                                            "Barcha jarayonlar ochiq va aniq, har qanday nizolarni oldini oladi",
                                    },
                                ].map((benefit, index) => (
                                    <div
                                        key={index}
                                        className={`flex items-start space-x-6 p-6 rounded-2xl transition-all duration-500 hover:bg-slate-800/30 hover:transform hover:-translate-y-1 ${
                                            isVisible
                                                ? "animate-slideInLeft"
                                                : "opacity-0"
                                        }`}
                                        style={{
                                            animationDelay: `${index * 0.2}s`,
                                        }}>
                                        <div className='flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25'>
                                            <benefit.icon className='w-8 h-8 text-white' />
                                        </div>
                                        <div>
                                            <h3 className='text-2xl font-bold text-white mb-3'>
                                                {benefit.title}
                                            </h3>
                                            <p className='text-slate-400 leading-relaxed'>
                                                {benefit.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* O'ng tomon - statistika */}
                        <div className='order-1 lg:order-2'>
                            <div className='relative'>
                                {/* Central circle */}
                                <div className='relative w-80 h-80 mx-auto'>
                                    <div className='absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full border-2 border-blue-400/30 flex items-center justify-center backdrop-blur-sm'>
                                        <div className='text-center'>
                                            <div className='text-5xl font-black text-white mb-2'>
                                                85%
                                            </div>
                                            <div className='text-blue-300 font-semibold'>
                                                Mijozlar Mamnuniyati
                                            </div>
                                        </div>
                                    </div>

                                    {/* Floating stats */}
                                    {[
                                        {
                                            value: "500+",
                                            label: "Kompaniyalar",
                                            position:
                                                "top-0 left-1/2 -translate-x-1/2 -translate-y-8",
                                        },
                                        {
                                            value: "50K+",
                                            label: "Xodimlar",
                                            position:
                                                "top-1/2 -right-8 -translate-y-1/2",
                                        },
                                        {
                                            value: "99.9%",
                                            label: "Uptime",
                                            position:
                                                "bottom-0 left-1/2 -translate-x-1/2 translate-y-8",
                                        },
                                        {
                                            value: "24/7",
                                            label: "Support",
                                            position:
                                                "top-1/2 -left-8 -translate-y-1/2",
                                        },
                                    ].map((stat, index) => (
                                        <div
                                            key={index}
                                            className={`absolute ${
                                                stat.position
                                            } p-4 bg-slate-800/50 border border-slate-700/50 rounded-xl backdrop-blur-sm transition-all duration-500 hover:scale-110 hover:border-blue-500/50 ${
                                                isVisible
                                                    ? "animate-bounceIn"
                                                    : "opacity-0"
                                            }`}
                                            style={{
                                                animationDelay: `${
                                                    index * 0.3
                                                }s`,
                                            }}>
                                            <div className='text-center'>
                                                <div className='text-2xl font-bold text-blue-300'>
                                                    {stat.value}
                                                </div>
                                                <div className='text-xs text-slate-400'>
                                                    {stat.label}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className='py-24 px-6 bg-gradient-to-r from-slate-900/30 to-blue-900/20 relative overflow-hidden'>
                <div className='max-w-6xl mx-auto'>
                    <div className='text-center mb-20'>
                        <h2 className='text-5xl md:text-6xl font-black mb-8'>
                            Mijozlar{" "}
                            <span className='bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent'>
                                Fikrlari
                            </span>
                        </h2>
                        <p className='text-xl text-slate-400'>
                            WorkCheck ishlatgan kompaniyalar rahbarlari fikrlari
                        </p>
                    </div>

                    <div className='relative'>
                        {/* Testimonial cards container */}
                        <div className='relative h-80 overflow-hidden'>
                            {[
                                {
                                    name: "Aziz Karimov",
                                    position: "HR Meneger, TechCorp",
                                    text: "WorkCheck bizga xodimlar vaqtini boshqarishda katta yordam berdi. FaceID texnologiyasi juda aniq ishlaydi va maosh hisoblamalari avtomatik bo'ldi. Juda mamnunmiz!",
                                    rating: 5,
                                    company: "TechCorp",
                                },
                                {
                                    name: "Dilnoza Usmonova",
                                    position: "Direktor, StartupUZ",
                                    text: "Avtomatik hisobotlar va real-time monitoring ajoyib. Bizning 200 nafar xodimimizni nazorat qilish endi juda oson. Vaqt tejash imkoniyati zo'r!",
                                    rating: 5,
                                    company: "StartupUZ",
                                },
                                {
                                    name: "Bobur Rajabov",
                                    position: "IT Manager, InnovateTech",
                                    text: "Tizim juda ishonchli va foydalanish uchun qulay. 6 oydan beri ishlatmoqdamiz, hech qanday muammo yo'q. Barcha kompaniyalarga tavsiya qilaman!",
                                    rating: 5,
                                    company: "InnovateTech",
                                },
                            ].map((testimonial, index) => (
                                <div
                                    key={index}
                                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                                        currentTestimonial === index
                                            ? "opacity-100 transform translate-x-0 scale-100"
                                            : index < currentTestimonial
                                            ? "opacity-0 transform -translate-x-full scale-95"
                                            : "opacity-0 transform translate-x-full scale-95"
                                    }`}>
                                    <div className='max-w-4xl mx-auto'>
                                        <div className='p-10 rounded-3xl bg-gradient-to-br from-slate-800/40 to-blue-900/20 border border-slate-700/40 backdrop-blur-sm text-center'>
                                            {/* Stars */}
                                            <div className='flex justify-center items-center mb-8'>
                                                {[
                                                    ...Array(
                                                        testimonial.rating
                                                    ),
                                                ].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className='w-6 h-6 text-yellow-400 fill-current mx-1'
                                                    />
                                                ))}
                                            </div>

                                            {/* Quote */}
                                            <blockquote className='text-2xl md:text-3xl text-slate-200 mb-10 leading-relaxed italic font-light'>
                                                "{testimonial.text}"
                                            </blockquote>

                                            {/* Author info */}
                                            <div className='flex items-center justify-center space-x-4'>
                                                <div className='w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xl'>
                                                    {testimonial.name
                                                        .split(" ")
                                                        .map((n) => n[0])
                                                        .join("")}
                                                </div>
                                                <div className='text-left'>
                                                    <div className='text-xl font-bold text-white'>
                                                        {testimonial.name}
                                                    </div>
                                                    <div className='text-blue-300 font-medium'>
                                                        {testimonial.position}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Navigation */}
                        <div className='flex justify-center items-center mt-12 space-x-4'>
                            <button
                                onClick={() =>
                                    setCurrentTestimonial((prev) =>
                                        prev === 0 ? 2 : prev - 1
                                    )
                                }
                                className='w-12 h-12 bg-slate-800/50 border border-slate-700 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-blue-500/20 hover:border-blue-500'>
                                <ChevronLeft className='w-6 h-6 text-slate-400 hover:text-blue-300' />
                            </button>

                            <div className='flex space-x-2'>
                                {[0, 1, 2].map((index) => (
                                    <button
                                        key={index}
                                        onClick={() =>
                                            setCurrentTestimonial(index)
                                        }
                                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                            currentTestimonial === index
                                                ? "bg-blue-500 scale-125"
                                                : "bg-slate-600 hover:bg-slate-500"
                                        }`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={() =>
                                    setCurrentTestimonial(
                                        (prev) => (prev + 1) % 3
                                    )
                                }
                                className='w-12 h-12 bg-slate-800/50 border border-slate-700 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-blue-500/20 hover:border-blue-500'>
                                <ChevronRight className='w-6 h-6 text-slate-400 hover:text-blue-300' />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className='py-24 px-6 relative'>
                <div className='absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-500/10'></div>
                <div className='absolute inset-0 opacity-10'>
                    <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse'></div>
                    <div
                        className='absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse'
                        style={{ animationDelay: "1.5s" }}></div>
                </div>

                <div className='relative z-10 max-w-5xl mx-auto text-center'>
                    <h2 className='text-5xl md:text-7xl font-black mb-8'>
                        <span className='bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent'>
                            Biznes
                        </span>
                        <span className='bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent'>
                            ingizni
                        </span>
                        <br />
                        <span className='bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent'>
                            Rivojlantiring
                        </span>
                    </h2>

                    <p className='text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed'>
                        WorkCheck bilan xodimlar nazoratini avtomatlashtiring va
                        biznesingizni yangi samaradorlik darajasiga olib chiqing
                    </p>

                    <div className='flex flex-col sm:flex-row gap-6 justify-center items-center mb-12'>
                        <button className='group px-12 py-6 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl font-bold text-xl transition-all duration-300 hover:from-blue-500 hover:to-cyan-500 hover:shadow-2xl hover:shadow-blue-500/30 transform hover:-translate-y-2 hover:scale-105'>
                            <span className='flex items-center'>
                                Hoziroq Boshlash
                                <ArrowRight className='ml-3 w-6 h-6 transition-transform group-hover:translate-x-2' />
                            </span>
                        </button>

                        <button className='px-12 py-6 border-2 border-slate-600 hover:border-blue-400 rounded-xl font-bold text-xl transition-all duration-300 hover:bg-slate-800/50 backdrop-blur-sm transform hover:-translate-y-1'>
                            Biz Bilan Bog'lanish
                        </button>
                    </div>

                    {/* Trust indicators */}
                    <div className='flex flex-wrap justify-center items-center gap-8 text-slate-500'>
                        <div className='flex items-center space-x-2'>
                            <Shield className='w-5 h-5' />
                            <span>SSL Himoyalangan</span>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <CheckCircle className='w-5 h-5' />
                            <span>ISO 27001</span>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <Award className='w-5 h-5' />
                            <span>5 Yil Kafolat</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className='py-20 px-6 border-t border-slate-800 bg-gradient-to-br from-slate-900 to-slate-800'>
                <div className='max-w-7xl mx-auto'>
                    <div className='grid md:grid-cols-4 gap-12 mb-16'>
                        {/* Logo va tavsif */}
                        <div className='md:col-span-2'>
                            <div className='flex items-center mb-8'>
                                <div className='w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4 shadow-lg shadow-blue-500/25'>
                                    <Clock className='w-7 h-7 text-white' />
                                </div>
                                <span className='text-3xl font-black text-white'>
                                    WorkCheck
                                </span>
                            </div>
                            <p className='text-slate-400 mb-8 max-w-md leading-relaxed text-lg'>
                                Xodimlar vaqtini nazorat qilishning eng
                                zamonaviy va qulay usuli. FaceID texnologiyasi
                                bilan biznesingizni avtomatlashtiring.
                            </p>

                            {/* Social media */}
                            <div className='flex space-x-4'>
                                {["Telegram", "Instagram", "LinkedIn"].map(
                                    (social, index) => (
                                        <div
                                            key={index}
                                            className='w-12 h-12 bg-slate-800 border border-slate-700 rounded-xl flex items-center justify-center transition-all duration-300 hover:bg-blue-500 hover:border-blue-500 hover:scale-110 cursor-pointer group'>
                                            <span className='text-sm font-bold text-slate-400 group-hover:text-white transition-colors'>
                                                {social[0]}
                                            </span>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>

                        {/* Xizmatlar */}
                        <div>
                            <h4 className='text-2xl font-bold mb-8 text-blue-300'>
                                Xizmatlar
                            </h4>
                            <ul className='space-y-4 text-slate-400'>
                                {[
                                    "FaceID Nazorat",
                                    "Avtomatik Hisoblash",
                                    "Real-time Hisobotlar",
                                    "Mobil Ilovalar",
                                    "Cloud Integration",
                                    "API Access",
                                ].map((service, index) => (
                                    <li key={index}>
                                        <a
                                            href='#'
                                            className='hover:text-white transition-colors duration-300 flex items-center group'>
                                            <ArrowRight className='w-4 h-4 mr-2 text-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0' />
                                            {service}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Bog'lanish */}
                        <div>
                            <h4 className='text-2xl font-bold mb-8 text-blue-300'>
                                Bog'lanish
                            </h4>
                            <div className='space-y-6 text-slate-400'>
                                <div className='flex items-center group hover:text-white transition-colors duration-300'>
                                    <div className='w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-500 transition-colors duration-300'>
                                        <Mail className='w-5 h-5 text-blue-400 group-hover:text-white' />
                                    </div>
                                    <span>info@workcheck.uz</span>
                                </div>
                                <div className='flex items-center group hover:text-white transition-colors duration-300'>
                                    <div className='w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-500 transition-colors duration-300'>
                                        <Phone className='w-5 h-5 text-blue-400 group-hover:text-white' />
                                    </div>
                                    <span>+998 90 123 45 67</span>
                                </div>
                                <div className='flex items-center group hover:text-white transition-colors duration-300'>
                                    <div className='w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-500 transition-colors duration-300'>
                                        <MapPin className='w-5 h-5 text-blue-400 group-hover:text-white' />
                                    </div>
                                    <span>Toshkent, O'zbekiston</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom footer */}
                    <div className='pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center'>
                        <p className='text-slate-500 mb-6 md:mb-0 text-lg'>
                            © 2025 WorkCheck. Barcha huquqlar himoyalangan.
                        </p>
                        <div className='flex space-x-8 text-slate-500'>
                            {[
                                "Maxfiylik Siyosati",
                                "Foydalanish Shartlari",
                                "Yordam Markazi",
                            ].map((link, index) => (
                                <a
                                    key={index}
                                    href='#'
                                    className='hover:text-white transition-colors duration-300 relative group'>
                                    {link}
                                    <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full'></span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </footer>

            {/* CSS Animations */}
            <style>{`
                @keyframes slideInUp {
                    from {
                        opacity: 0;
                        transform: translateY(40px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes slideInLeft {
                    from {
                        opacity: 0;
                        transform: translateX(-40px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                @keyframes bounceIn {
                    0% {
                        opacity: 0;
                        transform: scale(0.3);
                    }
                    50% {
                        transform: scale(1.05);
                    }
                    70% {
                        transform: scale(0.9);
                    }
                    100% {
                        opacity: 1;
                        transform: scale(1);
                    }
                }

                .animate-slideInUp {
                    animation: slideInUp 0.8s ease-out forwards;
                    opacity: 0;
                }

                .animate-slideInLeft {
                    animation: slideInLeft 0.8s ease-out forwards;
                    opacity: 0;
                }

                .animate-bounceIn {
                    animation: bounceIn 0.8s ease-out forwards;
                    opacity: 0;
                }
            `}</style>
        </div>
    );
};
