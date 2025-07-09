// src/app/page.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const sections = ["about", "education", "skills", "projects", "contact"];

export default function Home() {
  const [theme, setTheme] = useState('dark');
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

  return (
    <main className={`${theme} relative overflow-hidden transition-colors duration-500 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white min-h-screen`}>

      {/* Moving Shadow Background Text */}
      <div className="fixed top-1/2 left-1/2 text-9xl font-black text-white/5 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none animate-pulse">
        MAHISRITH
      </div>

      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className="fixed z-50 w-8 h-8 bg-blue-400/40 backdrop-blur rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 transition-all duration-100"
      ></div>

      {/* Navigation */}
      <nav className="flex justify-between items-center px-6 py-4 bg-black/70 backdrop-blur sticky top-0 z-40">
        <h1 className="text-xl font-bold text-fuchsia-400">Mahisrith</h1>
        <ul className="flex space-x-6 text-sm md:text-base">
          {sections.map((sec) => (
            <li key={sec}>
              <button onClick={() => scrollTo(sec)} className="hover:text-fuchsia-400 transition">
                {sec.charAt(0).toUpperCase() + sec.slice(1)}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="ml-4 text-yellow-400 hover:text-yellow-300"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-32 px-4">
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

      {/* About Section */}
      <motion.section id="about" className="max-w-4xl mx-auto py-20 px-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
        <div className="bg-gray-800/70 p-6 rounded-xl">
          <h2 className="text-4xl font-bold mb-6 text-fuchsia-500 text-center">About Me</h2>
          <p className="text-gray-300 leading-relaxed text-lg text-center">
            Hi, I’m Vemula Sai Mahisrith, a curious and ambitious learner who just completed 12th with an MPC background and secured 97% in my CBSE boards. I’m fascinated by the way engineering, code, and imagination come together to shape the future — whether in the skies, in space, or through software.<br /><br />
            Right now, I’m exploring opportunities in aerospace engineering, while also building a strong foundation in programming, problem-solving, and modern tech. From intelligent flight systems to advanced software tools, I’m drawn to the possibilities where science meets innovation.<br /><br />
            My journey is just beginning — and I’m keeping an open mind. Whether I continue in aerospace or move deeper into computer science, my focus is clear: to learn deeply, build boldly, and contribute meaningfully to the world of technology.<br /><br />
            I’m always looking to connect with inspiring minds, collaborate on ideas, and grow through curiosity and challenge. 🚀💡
          </p>
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section id="education" className="max-w-4xl mx-auto py-20 px-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
        <div className="bg-gray-800/70 p-6 rounded-xl text-center">
          <h2 className="text-4xl font-bold mb-6 text-cyan-400">Education</h2>
          <p className="text-lg text-gray-300">Completed 12th Grade (CBSE) in 2025 with 97% from MPC stream.<br/>Subjects: Mathematics, Physics, Chemistry</p>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section id="skills" className="max-w-4xl mx-auto py-20 px-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
        <div className="bg-gray-800/70 p-6 rounded-xl text-center">
          <h2 className="text-4xl font-bold mb-6 text-indigo-400">Skills</h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-300 text-lg">
            <li>Python</li>
            <li>C++</li>
            <li>Game Dev (Pygame)</li>
            <li>Problem Solving</li>
            <li>HTML/CSS/JS</li>
            <li>Git & GitHub</li>
          </ul>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section id="projects" className="max-w-4xl mx-auto py-20 px-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
        <h2 className="text-4xl font-bold mb-6 text-fuchsia-400 text-center">Projects</h2>
        <div className="bg-gray-800 rounded-xl p-6">
          <h3 className="text-2xl font-semibold mb-2">Zombie Survival Game</h3>
          <p className="text-gray-300">
            A top-down survival horror game built in Python using Pygame. Navigate a huge maze while being chased by animated zombie sprites. Collect keys to unlock the final exit door while avoiding enemies. Features collectible shields that temporarily despawn zombies, a minimap, animated effects, and strategic AI enemy behavior.
          </p>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section id="contact" className="max-w-3xl mx-auto py-20 px-4 text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
        <h2 className="text-4xl font-bold mb-6 text-indigo-500">Get in Touch</h2>
        <p className="text-gray-300 mb-6">
          Want to connect or collaborate? Reach me at <a href="mailto:sai.mahisrithv@outlook.com" className="text-fuchsia-500 underline">sai.mahisrithv@outlook.com</a>
        </p>
        <form action="https://formsubmit.co/sai.mahisrithv@outlook.com" method="POST" className="grid gap-4 text-left">
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="box" />

          <input className="p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400" type="text" name="name" placeholder="Your Name" required />
          <input className="p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400" type="email" name="email" placeholder="Your Email" required />
          <input className="p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400" type="text" name="subject" placeholder="Subject" />
          <textarea className="p-3 h-32 rounded-lg bg-gray-700 text-white placeholder-gray-400" name="message" placeholder="Your Message"></textarea>

          <button type="submit" className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white py-3 rounded-lg font-semibold">
            Send Message
          </button>
        </form>
      </motion.section>
    </main>
  );
}
