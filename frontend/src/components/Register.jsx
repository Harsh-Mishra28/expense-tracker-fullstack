
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const paragraph =
  "Join us and take the first step toward a smarter, simpler experience. Register now to get started in just a few seconds.";

const Inputform = ({ setFirstName }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setLocalFirstName] = useState("");

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    localStorage.setItem("firstName", firstName);
    setFirstName(firstName); 
    navigate("/dashboard");
  };

  // animation variants for words
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.07
      }
    }
  };

  const word = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center
      bg-[#f4f1e8] overflow-hidden px-16">

      {/* FLOATING SHAPES — LEFT */}
      <motion.div
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-24 top-40 h-56 w-56
        bg-black/10 rounded-full blur-[100px]"
      />
      <motion.div
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-40 bottom-32 h-40 w-40
        bg-black/10 rounded-full blur-[90px]"
      />

      {/* FLOATING SHAPES — RIGHT */}
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-32 top-32 h-64 w-64
        bg-black/10 rounded-full blur-[110px]"
      />
      <motion.div
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-40 bottom-28 h-44 w-44
        bg-black/10 rounded-full blur-[90px]"
      />

      {/* LEFT TEXT */}
      <div className="relative w-1/2 pr-24 z-10">
        <motion.h1
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-6xl font-extrabold leading-tight text-gray-900"
        >
          Join us and take the
          <span className="block text-gray-700">
            first step forward
          </span>
        </motion.h1>

        {/* WORD BY WORD PARAGRAPH */}
        <motion.p
          variants={container}
          initial="hidden"
          animate="show"
          className="mt-6 text-xl leading-relaxed text-gray-700 max-w-xl"
        >
          {paragraph.split(" ").map((w, i) => (
            <motion.span
              key={i}
              variants={word}
              className="inline-block mr-1"
            >
              {w}
            </motion.span>
          ))}
        </motion.p>
      </div>

      {/* RIGHT FORM */}
      <motion.form
        onSubmit={handleRegister}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative h-[55vh] w-[50vh]
        bg-[#f7f4ec]
        flex flex-col items-center justify-center
        rounded-2xl
        shadow-[0_25px_50px_rgba(0,0,0,0.25)]
        z-10"
      >
        <h2 className="font-bold text-3xl mb-2">
          About You 😊
        </h2>

        <div className="flex flex-col items-center w-full mt-2">
          <input
            required
            type="text"
            value={firstName}
            placeholder="Enter your first name"
            onChange={(e) => setLocalFirstName(e.target.value)}
            className="border rounded p-2 mt-4 w-[80%]
            outline-none focus:ring-2 focus:ring-gray-600 transition"
          />

          <input
            type="text"
            placeholder="Enter your last name"
            className="border rounded p-2 mt-5 w-[80%]
            outline-none focus:ring-2 focus:ring-gray-600 transition"
          />

          <input
            required
            type="email"
            placeholder="Enter your email"
            className="border rounded p-2 mt-5 w-[80%]
            outline-none focus:ring-2 focus:ring-gray-600 transition"
          />

          <div className="relative w-[80%] mt-5">
            <input
              required
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="border rounded p-2 w-full pr-10
              outline-none focus:ring-2 focus:ring-gray-600 transition"
            />
            <span
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="reg-btn mt-6"
        >
          <span>Register</span>
        </motion.button>
      </motion.form>
    </div>
  );
};

export default Inputform;
