import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import gsap from 'gsap'

const name = "Harsh Mishra"

const About = () => {

    const navigate = useNavigate()

    function ButtonHandler() {
        navigate('/dashboard')
    }

    useEffect(() => {
        gsap.to(".bg-glow", {
            y: -20,
            duration: 6,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        })

        gsap.to(".particle", {
            y: "random(-20, 20)",
            x: "random(-20, 20)",
            duration: "random(3, 5)",
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
            stagger: 0.2
        })
    }, [])

    const nameContainer = {
        hidden: {},
        show: { transition: { staggerChildren: 0.08 } }
    }

    const letter = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    }

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center bg-[#EEF3F8] p-8 overflow-hidden">

            {/* soft background glows */}
            <div className="bg-glow absolute left-24 top-32 h-96 w-96 bg-gray-300/40 blur-[120px] rounded-full" />
            <div className="absolute right-24 bottom-32 h-80 w-80 bg-amber-200/30 blur-[120px] rounded-full" />

            {/* particles */}
            {[...Array(8)].map((_, i) => (
                <div
                    key={i}
                    className="particle absolute w-2 h-2 bg-gray-500/30 rounded-full"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                />
            ))}

            <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative max-w-6xl w-full rounded-3xl bg-[#FAF7F2]/80 backdrop-blur-xl border border-gray-300 shadow-2xl p-10"
            >

                {/* NAV */}
                <div className="flex justify-between items-center mb-12">

                    <motion.h1
                        variants={nameContainer}
                        initial="hidden"
                        animate="show"
                        className="text-5xl font-extrabold text-gray-800 tracking-wide flex"
                    >
                        {name.split("").map((char, index) => (
                            <motion.span key={index} variants={letter}>
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                    </motion.h1>

                    <motion.button
                        onClick={ButtonHandler}
                        type="button"
                        className="styled-button"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.96 }}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                        <div className="inner-button">
                            <svg
                                viewBox="0 0 32 32"
                                xmlns="http://www.w3.org/2000/svg"
                                height="20"
                                width="20"
                                className="icon"
                            >
                                <defs>
                                    <linearGradient
                                        y2="100%"
                                        x2="100%"
                                        y1="0%"
                                        x1="0%"
                                        id="iconGradient"
                                    >
                                        <stop stopColor="#FFFFFF" offset="0%" />
                                        <stop stopColor="#AAAAAA" offset="100%" />
                                    </linearGradient>
                                </defs>
                                <path
                                    fill="url(#iconGradient)"
                                    d="M28 15a1 1 0 0 1-1 1H7.414l4.293 4.293a1 1 0 0 1-1.414 1.414l-6-6a.99.99 0 0 1-.293-.707c0-.26.105-.52.293-.707l6-6a1 1 0 1 1 1.414 1.414L7.414 14H27a1 1 0 0 1 1 1z"
                                />
                            </svg>
                        </div>

                        <span className="btn-text">Dashboard</span>
                    </motion.button>




                </div>

                {/* HERO */}
                <div className="flex flex-col md:flex-row justify-between gap-10 mb-12">

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex-1 max-w-2xl"
                    >
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">
                            About Me
                        </h2>

                        <div className="flex gap-3 mb-6">
                            {['Web Developer', 'React', 'JavaScript'].map(tag => (
                                <span
                                    key={tag}
                                    className="text-xs uppercase px-3 py-1 rounded-full bg-gray-200 text-gray-700 font-semibold"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <p className="text-lg leading-relaxed text-gray-700">
                            Final-year engineering student focused on building clean,
                            scalable web applications using React and JavaScript.
                            Passionate about UI clarity, performance, and real-world
                            problem solving.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="relative"
                    >
                        <img
                            src="/my-life.jpeg"
                            alt="Harsh Mishra"
                            className="h-80 w-80 rounded-3xl shadow-xl object-cover object-[50%_15%] scale-100 ring-2 ring-gray-300"
                        />
                    </motion.div>

                </div>

                {/* DIVIDER */}
                <div className="h-px bg-gray-300 my-10" />

                {/* CONNECT */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    <div className="bg-[#DDE2E7] rounded-2xl p-6 shadow-md">
                        <h2 className="text-2xl font-bold mb-4 text-gray-800">
                            Connect With Me
                        </h2>
                        <div className="flex gap-6">


                            <a
                                href="https://github.com/Harsh-Mishra28"
                                target="_blank"
                                className="Btn">
                                <span className="svgContainer">
                                    <svg fill="white" viewBox="0 0 496 512" height="1.6em"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
                                </span>
                                <span className="Bg"></span>
                            </a>

                            <a
                                href="https://www.linkedin.com/in/harsh-mishra2816/"
                                target="_blank"
                                className="Btn-1">
                                <span className="svgContainer">
                                    <svg
                                        viewBox="0 0 448 512"
                                        height="1.6em"
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="svgIcon"
                                        fill="white"
                                    >
                                        <path
                                            d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"
                                        ></path>
                                    </svg>
                                </span>
                                <span className="BG"></span>
                            </a>



                        </div>
                    </div>

                    <div className="bg-[#DDE2E7] rounded-2xl p-6 shadow-md">
                        <h2 className="text-2xl font-bold mb-4 text-gray-800">
                            Contact
                        </h2>
                        <p className="text-gray-700 font-medium">📞 9142868951</p>
                        <p className="text-gray-700 font-medium break-all">
                            ✉️ harshmishra8154@gmail.com
                        </p>
                    </div>

                </div>

            </motion.div>
        </div>
    )
}

export default About
