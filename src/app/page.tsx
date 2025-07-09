// src/app/page.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const sections = ["about", "education", "skills", "projects", "contact"];

export default function Home() {
  const [tagline, setTagline] = useState('');
  const fullTagline = "Exploring Aerospace & Tech ✈️💻 | Future-Focused Engineer in the Making 🚀 | Blending Code, Curiosity & Creativity | Lifelong Learner";
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let index = 0;
    const typing = setInterval(() => {
      setTagline(fullTagline.slice(0, index));
      index++;
      if (index > fullTagline.length) clearInterval(typing);
    }, 30);

    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px';
        cursorRef.current.style.top = e.clientY + 'px';
      }
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const sectionVariant = {
    hiddenLeft: { opacity: 0, x: -100 },
    hiddenRight: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  const getSectionProps = (direction: 'left' | 'right') => ({
    initial: direction === 'left' ? 'hiddenLeft' : 'hiddenRight',
    whileInView: 'visible',
    transition: { duration: 0.8 },
    viewport: { once: false, amount: 0.5 },
    variants: sectionVariant,
    className: "relative z-10"
  });

  const movingBox = (key: number, delay: number, top: string, reverse?: boolean) => (
    <motion.div
      key={key}
      initial={{ x: reverse ? '100%' : '-100%' }}
      animate={{ x: reverse ? '-100%' : '100%' }}
      transition={{ repeat: Infinity, duration: 20, delay, ease: 'linear' }}
      className="absolute w-[1600px] h-64 bg-white/10 rounded-2xl text-center text-7xl font-extrabold text-fuchsia-400/40 backdrop-blur-sm flex items-center justify-center mx-auto z-0 border-none"
      style={{ top }}
    >
      MAHISRITH
    </motion.div>
  );

  const sectionBoxClass = "bg-fuchsia-900/20 p-6 rounded-3xl shadow-lg backdrop-blur-sm";

  return (
    <main className="relative overflow-hidden transition-colors duration-500 bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white min-h-screen font-sans">
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[0, 1, 2, 3, 4, 5, 6].map((_, i) =>
          movingBox(i, i * 5, `${10 + i * 12}%`, i % 2 === 0)
        )}
      </div>

      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className="fixed z-50 w-3 h-3 bg-fuchsia-400 rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 transition-all duration-75"
      ></div>

      {/* Navigation */}
      <nav className="flex justify-between items-center px-6 py-4 bg-black/70 backdrop-blur sticky top-0 z-40">
        <h1 className="text-xl font-bold text-fuchsia-400">MY_PORTFOLIO</h1>
        <ul className="flex space-x-6 text-sm md:text-base">
          {sections.map((sec) => (
            <li key={sec}>
              <button onClick={() => scrollTo(sec)} className="hover:text-fuchsia-400 transition">
                {sec.charAt(0).toUpperCase() + sec.slice(1)}
              </button>
            </li>
          ))}
          <li>
            <a href="https://github.com/MahiV2007" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 .5C5.7.5.5 5.8.5 12.2c0 5.2 3.4 9.6 8.2 11.2.6.1.8-.2.8-.6v-2.2c-3.3.7-4-.8-4-.8-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.2.1 1.9 1.3 1.9 1.3 1 .1 1.6-.8 1.6-.8.1-.8.4-1.2.6-1.4-2.6-.3-5.3-1.4-5.3-6.2 0-1.4.5-2.6 1.3-3.5-.1-.3-.6-1.5.1-3.1 0 0 1-.3 3.4 1.3a11.7 11.7 0 0 1 6.1 0C17 4.6 18 4.9 18 4.9c.7 1.6.2 2.8.1 3.1.8.9 1.3 2.1 1.3 3.5 0 4.8-2.7 5.9-5.3 6.2.4.3.7.9.7 1.9v2.8c0 .4.2.7.8.6a11.9 11.9 0 0 0 8.2-11.3C23.5 5.8 18.3.5 12 .5z"/>
              </svg>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/sai-mahisrith-vemula-887107364/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M4.98 3.5C4.98 4.9 3.88 6 2.5 6S0 4.9 0 3.5 1.1 1 2.5 1 4.98 2.1 4.98 3.5zM.5 8.5H4.5V24H.5V8.5zM7.5 8.5h3.7v2.1h.1c.5-.9 1.7-1.9 3.5-1.9 3.8 0 4.5 2.5 4.5 5.7V24h-4v-7.8c0-1.9-.1-4.4-2.7-4.4s-3.1 2.1-3.1 4.3V24h-4V8.5z"/>
              </svg>
            </a>
          </li>
        </ul>
      </nav>

      {/* Sections */}
      <section className="flex flex-col items-center justify-center text-center py-32 px-4 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-fuchsia-600"
        >
          Sai Mahisrith Vemula
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-4 max-w-3xl text-lg md:text-xl text-gray-300"
        >
          {tagline}
        </motion.p>
        <a
          href="/Sai_Mahisrith_Resume.pdf"
          download
          className="mt-6 inline-block bg-fuchsia-600 hover:bg-fuchsia-700 transition text-white font-semibold px-6 py-3 rounded-full"
        >
          Download Resume
        </a>
      </section>

      {/* About */}
      <motion.section id="about" {...getSectionProps('left')} className={`max-w-4xl mx-auto py-20 px-4 ${getSectionProps('left').className}`}>
        <div className={sectionBoxClass}>
          <h2 className="text-4xl font-bold mb-6 text-fuchsia-500 text-center">About Me</h2>
          <p className="text-gray-300 leading-relaxed text-lg text-center">
            Hi, I’m Vemula Sai Mahisrith [...] 🚀💡
          </p>
        </div>
      </motion.section>

      {/* Education */}
      <motion.section id="education" {...getSectionProps('right')} className={`max-w-4xl mx-auto py-20 px-4 ${getSectionProps('right').className}`}>
        <div className={sectionBoxClass + " text-center"}>
          <h2 className="text-4xl font-bold mb-6 text-cyan-400">Education</h2>
          <p className="text-lg text-gray-300">Completed 12th Grade (CBSE) in 2025 with 97% [...]</p>
        </div>
      </motion.section>

      {/* Skills */}
      <motion.section id="skills" {...getSectionProps('left')} className={`max-w-4xl mx-auto py-20 px-4 ${getSectionProps('left').className}`}>
        <div className={sectionBoxClass + " text-center"}>
          <h2 className="text-4xl font-bold mb-6 text-indigo-400">Skills</h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-300 text-lg">
            <li>Python</li><li>C++</li><li>Game Dev (Pygame)</li><li>Problem Solving</li><li>HTML/CSS/JS</li><li>Git & GitHub</li>
          </ul>
        </div>
      </motion.section>

      {/* Projects */}
      <motion.section id="projects" {...getSectionProps('right')} className={`max-w-4xl mx-auto py-20 px-4 ${getSectionProps('right').className}`}>
        <h2 className="text-4xl font-bold mb-6 text-fuchsia-400 text-center">Projects</h2>
        <div className={sectionBoxClass}>
          <h3 className="text-2xl font-semibold mb-2">Zombie Survival Game</h3>
          <p className="text-gray-300">A top-down survival horror game built in Python using Pygame [...]</p>
        </div>
      </motion.section>

      {/* Contact */}
      <motion.section id="contact" {...getSectionProps('left')} className={`max-w-3xl mx-auto py-20 px-4 text-center ${getSectionProps('left').className}`}>
        <h2 className="text-4xl font-bold mb-6 text-indigo-500">Get in Touch</h2>
        <p className="text-gray-300 mb-6">Want to connect or collaborate? [...]</p>
        <form action="https://formsubmit.co/sai.mahisrithv@outlook.com" method="POST" className="grid gap-4 text-left">
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="box" />
          <input className="p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400" type="text" name="name" placeholder="Your Name" required />
          <input className="p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400" type="email" name="email" placeholder="Your Email" required />
          <input className="p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400" type="text" name="subject" placeholder="Subject" />
          <textarea className="p-3 h-32 rounded-lg bg-gray-700 text-white placeholder-gray-400" name="message" placeholder="Your Message"></textarea>
          <button type="submit" className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white py-3 rounded-lg font-semibold">Send Message</button>
        </form>
      </motion.section>
    </main>
  );
}
