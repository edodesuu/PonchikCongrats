import { MotionContainer } from 'framer-motion';
import Clown from './components/Clown';
import { useState } from 'react';

export default function App() {
  const [word, setWord] = useState('');
  const words = ['КУКЛА', 'ЦИРК', 'КЛАУН', 'ШУМ', 'ПАЛКА'];

  return (
    <MotionContainer initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
      <div className="min-h-screen bg-primary text-white">
        <header className="py-16 px-4 text-center">
          <h1 className="text-4xl font-bold">С днём рождения Ponchik!</h1>
          <p className="text-xl">18 лет яркого цирка</p>
        </header>

        <section className="py-12 px-4">
          <Clown />
        </section>

        <section className="py-12 px-4">
          <h2 className="text-2xl font-semibold mb-4 text-center">Цирковая мини‑игра</h2>
          <p className="text-lg mb-2">Угадай слово цирка:</p>
          <MotionContainer initial={{ x: -20 }} animate={{ x: 0 }} transition={{ type: 'spring', stiffness: 120 }}>
            <div className="flex justify-center mb-4">
              <span className="text-3xl font-bold text-secondary">{word[0]}{word[1]}{word[2]}</span>
            </div>
            <input
              id="guess"
              type="text"
              placeholder="Ваш ответ"
              className="px-4 py-2 rounded-lg w-64 mx-auto"
            />
            <button
              id="check"
              onClick={() => {
                if (word.toUpperCase() === guess.toUpperCase()) {
                  alert('🎉 Угадал! Поздравляю!');
                } else {
                  alert('❌ Неправильно, попробуй ещё');
                }
              }}
              className="px-4 py-2 bg-secondary text-white rounded-lg mt-4"
            >
              Проверить
            </button>
          </MotionContainer>
        </section>

        <section className="py-12 px-4">
          <h2 className="text-2xl font-semibold mb-4 text-center">От меня</h2>
          <p className="text-lg">
            Твоя смех и песня делают цирк волшебным.
          </p>
        </section>

        <footer className="py-8 px-4 text-center bg-secondary text-white">
          <p>🎪 Спасибо, что был с нами! 🎈</p>
        </footer>
      </div>
    </MotionContainer>
  );
}