import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { easeOut } from "framer-motion";

const gridItemAnim = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};

const QuoteOfTheDay = () => {
  const [quote, setQuote] = useState({ quote: '', author: '' });

  useEffect(() => {
    fetch('/quotes.json')
      .then((res) => res.json())
      .then((data) => {
        const random = data[Math.floor(Math.random() * data.length)];
        setQuote(random);
      });
  }, []);

  return (
    <motion.div
      className="col-span-1 bg-white/80 border border-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:scale-[1.01] transition text-gray-800"
      variants={gridItemAnim}
      initial="hidden"
      whileInView="visible"
      custom={6}
    >
      <h2 className="text-lg font-semibold mb-2">Quote of the Day</h2>
      <p className="italic text-md">&quot;{quote.quote}&quot;</p>
      <p className="text-sm font-light mt-2 text-right">— {quote.author}</p>
    </motion.div>
  );
};

export default QuoteOfTheDay;
