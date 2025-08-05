import axios from "axios";
import { motion } from "framer-motion";
import {
    ArrowRight,
    Award,
    BarChart3,
    Calculator,
    Camera,
    CheckCircle,
    Clock,
    DollarSign,
    Eye,
    LoaderCircleIcon,
    Mail,
    MapPin,
    Phone,
    Shield,
    TrendingUp,
    UserCheck,
    XCircleIcon,
    Zap,
} from "lucide-react";
import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import Logo from "/favicon.png";
const chatID = import.meta.env.VITE_CHAT_ID;
const bot_token = import.meta.env.VITE_BOT_TOKEN;

interface IUserDataProps {
    email: string;
    message: string;
    name: string;
}

export const Home = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);
    const [userData, setUserData] = useState<IUserDataProps>({
        email: "",
        message: "",
        name: "",
    });
    const [loading, setLoading] = useState<boolean>(false);
    const [finnalyMessage, setFinnalyMessage] = useState<string>("");

    useEffect(() => {
        setIsVisible(true);

        const stepInterval = setInterval(() => {
            setCurrentStep((prev) => (prev + 1) % 4);
        }, 3000);

        return () => {
            clearInterval(stepInterval);
        };
    }, []);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const token = bot_token;
            const chatId = chatID;
            const text = `Sizga yangi xabar keldi:\n\nIsm, Familiya: ${userData.name}\n\nEmail: ${userData.email}\n\nXabar: ${userData.message}`;
            await axios.post(
                `https://api.telegram.org/bot${token}/sendMessage`,
                {
                    chat_id: chatId,
                    text,
                }
            );
            setFinnalyMessage("Xabar muvaffaqiyatli yuborildi");
        } catch (error) {
            setFinnalyMessage("Qanday-dir xatolik yuz berdi");
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setUserData((prev: IUserDataProps) => ({ ...prev, [name]: value }));
    };

    const fadeInUp = {
        initial: { opacity: 0, y: 60 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.4 },
    };

    const fadeInDown = {
        initial: { opacity: 0, y: -60 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.4, ease: "linear" },
    };

    const fadeInLeft = {
        initial: { opacity: 0, x: -60 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.4 },
    };

    const fadeInRight = {
        initial: { opacity: 0, x: 60 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.4, type: "linear" },
    };

    return (
        <div className='min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden'>
            <section className='relative min-h-screen flex items-center justify-center px-6 pt-10'>
                <div className='relative z-10 text-center max-w-5xl mx-auto'>
                    <div>
                        <motion.div
                            variants={fadeInDown}
                            initial='initial'
                            animate='animate'
                            className='inline-flex items-center px-6 py-3 rounded-full bg-blue-500/20 border border-blue-400/40 mb-8 backdrop-blur-sm hover:bg-blue-500/30 hover:border-blue-400/60'>
                            <Eye className='w-5 h-5 text-blue-300 mr-3' />
                            <span className='text-blue-200 font-medium'>
                                FaceID bilan Avtomatik Nazorat
                            </span>
                        </motion.div>

                        <h1 className='text-6xl md:text-8xl font-black mb-8 leading-tight'>
                            <motion.span
                                variants={fadeInLeft}
                                initial='initial'
                                animate='animate'
                                className='inline-block bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent'>
                                Work
                            </motion.span>
                            <motion.span
                                variants={fadeInRight}
                                initial='initial'
                                animate='animate'
                                className='inline-block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 bg-clip-text text-transparent'>
                                Check
                            </motion.span>
                        </h1>

                        <motion.p
                            variants={fadeInUp}
                            initial='initial'
                            animate='animate'
                            className='text-xl md:text-2xl text-slate-300 mb-6 leading-relaxed max-w-4xl mx-auto'>
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
                        </motion.p>

                        <div className='flex flex-col sm:flex-row gap-6 justify-center items-center'>
                            <motion.button
                                initial='initial'
                                animate='animate'
                                variants={fadeInLeft}
                                className='group'>
                                <div className='group-hover:-translate-y-2 transition duration-200 px-10 py-5 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-xl font-bold text-lg hover:shadow-[0_4px_4px_1] hover:shadow-[#48abe9]'>
                                    <span className='flex items-center'>
                                        Dashboard Ko'rish
                                        <ArrowRight className='ml-3 w-6 h-6 transition-transform group-hover:translate-x-2' />
                                    </span>
                                </div>
                            </motion.button>
                        </div>

                        <div className='flex items-center justify-center gap-6 mt-16 max-w-4xl mx-auto'>
                            {[
                                {
                                    number: "100%",
                                    label: "FaceID Aniqligi",
                                    icon: Camera,
                                },
                                {
                                    number: "< 2s",
                                    label: "Tezkor Tanib Olish",
                                    icon: Zap,
                                },
                                {
                                    number: "Auto",
                                    label: "Maosh Hisoblash",
                                    icon: Calculator,
                                },
                            ].map((stat, index) => (
                                <div
                                    key={index}
                                    className={`p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50 backdrop-blur-sm transition-all duration-500 hover:bg-slate-800/50 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/20 transform hover:-translate-y-1`}
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
            </section>

            <section className='py-24 px-6 relative mt-20'>
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
                                        <div
                                            className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl text-xl font-bold mb-6 transition-all duration-500 ${
                                                currentStep === index
                                                    ? "bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg shadow-blue-500/25 scale-110"
                                                    : "bg-slate-700 text-slate-300"
                                            }`}>
                                            {item.step}
                                        </div>

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

                        <div className='order-1 lg:order-2'>
                            <div className='relative'>
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
                        <button className='group px-12 py-6 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-600 rounded-xl font-bold text-xl transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30 transform hover:-translate-y-2 hover:scale-105'>
                            <span className='flex items-center'>
                                Hoziroq Boshlash
                                <ArrowRight className='ml-3 w-6 h-6 transition-transform group-hover:translate-x-2' />
                            </span>
                        </button>

                        <button className='px-12 py-6 border-2 border-slate-600 hover:border-blue-400 rounded-xl font-bold text-xl transition-all duration-300 hover:bg-slate-800/50 backdrop-blur-sm transform hover:-translate-y-1'>
                            Biz Bilan Bog'lanish
                        </button>
                    </div>

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

            <footer className='py-20 px-6 border-t border-slate-800 bg-gradient-to-br from-slate-900 to-slate-800'>
                <div className='max-w-7xl mx-auto'>
                    <div className='grid md:grid-cols-3 gap-12 mb-16'>
                        <div className='col-span-1'>
                            <div className='flex items-center mb-8'>
                                <div className='w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4 shadow-lg shadow-blue-500/25'>
                                    <img src={Logo} alt='Site logo' />
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
                        </div>

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
                        {loading ? (
                            <div className='flex items-center gap-3'>
                                <h1 className='text-2xl'>Yuklanmoqda...</h1>
                                <LoaderCircleIcon className='animate-spin' />
                            </div>
                        ) : finnalyMessage.length > 0 ? (
                            <div className='flex items-center gap-3'>
                                <h1 className='text-2xl'>{finnalyMessage}</h1>
                                {finnalyMessage ==
                                "Xabar muvaffaqiyatli yuborildi" ? (
                                    <CheckCircle className='text-green-600' />
                                ) : (
                                    <XCircleIcon className='text-red-600' />
                                )}
                            </div>
                        ) : (
                            <form
                                onSubmit={handleSubmit}
                                className='flex gap-3 flex-col'>
                                <div className='flex flex-col'>
                                    <label htmlFor='name' className='mb-2'>
                                        Ism, familiya:
                                    </label>
                                    <input
                                        type='text'
                                        name='name'
                                        id='name'
                                        value={userData.name}
                                        onChange={handleChange}
                                        required
                                        maxLength={40}
                                        autoComplete='name'
                                        className='border rounded-lg border-gray-300 dark:border-gray-600 px-3 py-2 text-[15px] outline-none focus:ring-2 ring-blue-400 duration-150 dark:bg-[#181c2a] dark:text-white'
                                    />
                                </div>
                                <div className='flex flex-col'>
                                    <label htmlFor='email' className='mb-2'>
                                        Email:
                                    </label>
                                    <input
                                        type='email'
                                        name='email'
                                        id='email'
                                        value={userData.email}
                                        onChange={handleChange}
                                        required
                                        maxLength={40}
                                        autoComplete='email'
                                        className='border rounded-lg border-gray-300 dark:border-gray-600 px-3 py-2 text-[15px] outline-none focus:ring-2 ring-blue-400 duration-150 dark:bg-[#181c2a] dark:text-white'
                                    />
                                </div>
                                <div className='flex flex-col items-start'>
                                    <label htmlFor='message' className='mb-2'>
                                        Xabar:
                                    </label>
                                    <textarea
                                        name='message'
                                        id='message'
                                        value={userData.message}
                                        onChange={handleChange}
                                        rows={5}
                                        maxLength={100}
                                        className='w-full border rounded-lg border-gray-300 dark:border-gray-600 px-3 py-2 text-[15px] outline-none focus:ring-2 ring-blue-400 duration-150 dark:bg-[#181c2a] dark:text-white'></textarea>
                                </div>
                                <button
                                    type='submit'
                                    className='border rounded-lg border-gray-500/70 p-1.5 px-3 bg-blue-600/80 hover:bg-blue-600 hover:scale-105 text-white active:scale-100 active:bg-blue-700 duration-150 will-change-transform'>
                                    Yuborish
                                </button>
                            </form>
                        )}
                    </div>

                    <div className='pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center'>
                        <p className='text-slate-500 mb-6 md:mb-0 text-lg'>
                            © 2025 WorkCheck. Barcha huquqlar himoyalangan.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};
