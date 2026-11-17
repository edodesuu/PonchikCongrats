import { motion } from 'framer-motion';

export default function Clown() {
  return (
    <motion.div
      className="w-64 h-64 rounded-full bg-primary mx-auto"
      initial={{ scale: 0.2, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full text-white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="5" />
        <text x="50%" y="55%" textAnchor="middle" fontSize="40" fontFamily="Circus, cursive">
          🤡
        </text>
      </svg>
    </motion.div>
  );
}