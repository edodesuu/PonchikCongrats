import { motion } from 'framer-motion';

const titles = ['Здоровье', 'Счастье', 'Ум', 'Удача', 'Любовь'];
const colors = ['#ff4500', '#ffd700', '#00ff88', '#ff69b4', '#8a2be2'];

export default function Cards() {
  return (
    <motion.div
      className="grid gap-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ stagger: 0.1 }}
    >
      {titles.map((title, i) => (
        <motion.div
          key={title}
          className={`p-6 rounded-lg border-2 border-primary text-center transition-transform duration-300`}
          style={{ background: colors[i] }}
          whileHover={{ scale: 1.03 }}
        >
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-lg">{title}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}