    // {
    //   date: "Expected Jun 2027",
    //   title: "B.Tech in Computer Science Core",
    //   place: "VIT Chennai",
    //   info: "Current CGPA: 9.1",
    // },


// src/app/page.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const sections = ["about", "education", "skills", "projects", "contact"];

export default function Home() {
  const [tagline, setTagline] = useState('');
  const fullTagline = "Exploring Aerospace & Tech ✈️💻 | Future-Focused Engineer in the Making 🚀 | Blending Code, Curiosity & Creativity | Lifelong Learner";
  const cursorRef = useRef<HTMLDivElement>(null);
  const [showTopButton, setShowTopButton] = useState(false);

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

    const toggleTopButton = () => {
      if (window.scrollY > 300) setShowTopButton(true);
      else setShowTopButton(false);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('scroll', toggleTopButton);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('scroll', toggleTopButton);
    };
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
      className="absolute left-0 right-0 w-full h-64 bg-white/10 rounded-2xl text-center text-7xl font-extrabold text-fuchsia-400/40 backdrop-blur-sm flex items-center justify-center z-10 border-none"
      style={{ top }}
    ></motion.div>
  );

  const skills = [
    { name: "Python", icon: "🐍", level: 85 },
    { name: "C++", icon: "💻", level: 35 },
    { name: "Game Dev (Pygame)", icon: "🕹️", level: 80 },
    { name: "HTML & CSS", icon: "🌐", level: 51 },
    { name: "Git & GitHub", icon: "🐙", level: 60 },
    { name: "Problem-Solving", icon: "💡", level: 45 }
  ];


  const sectionBoxClass = "bg-fuchsia-900/20 p-6 rounded-3xl shadow-lg backdrop-blur-sm";

  const eduItems = [
    {
      date: "May 2025",
      title: "CBSE (12th Grade)",
      place: "Sri Sathya Sai Higher Secondary School, Puttaparthi",
      info: "97% overall\nMPC Stream (Mathematics, Physics, Chemistry)\nComputer Science",
    },
    {
      date: "May 2023",
      title: "CBSE (10th Grade)",
      place: "Sri Sathya Sai Higher Secondary School, Puttaparthi",
      info: "91.8% overall\nScience, Mathematics, English, Social Studies, Sanskrit",
    },
  ];

  const features = [
    {
      title: "🧩 Gameplay Features",
      desc: [
        "🔑 Key-Door Logic",
        "🧠 Zombie AI Chase",
        "🛡️ Shield with Cooldown",
        "🗺️ Mini-Map + 1-min Expansion Timer",
        "📷 Smooth Player-Centered Camera",
        "🎮 Main Menu: Play, Store, Quit, +Future Add-ons"
      ],
      symbol: ""
    },
    {
      title: "🧠 Tech Stack",
      desc: [
        "🐍 Language: Python",
        "🕹️ Library: Pygame",
        "🖥️ IDE: VS Code",
        "🧰 Tools: Git, GitHub",
        "🧱 Assets: Custom + Open Source",
        "🎨 UI Ref: Chrome DevTools for inspiration"
      ],
      symbol: ""
    },
    {
      title: "🚀 What I Learned",
      desc: [
        " Game architecture & modular code",
        " Pathfinding logic for enemies",
        " Cooldown timers & interaction states",
        " Building immersive feedback loops"
      ],
      symbol: "✅"
    },
    {
      title: "🎨 Visual Design Systems",
      desc: [
        " Visual ring effects",
        " Zombie detect animation",
        " Shield activation glow",
        " Minimap UI corner layout",
        " Menu transitions (Framer-style feel)"
      ],
      symbol: "💡"
    },
    // more boxes...
  ];


  return (
    <main className="relative overflow-hidden transition-colors duration-500 bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white min-h-screen font-sans">
      <div id="top"></div>
      <Head>
        <title>Sai Mahisrith | Portfolio</title>
        <meta name="description" content="Portfolio of Sai Mahisrith Vemula - Exploring Aerospace, Tech & Innovation" />
        <meta property="og:title" content="Sai Mahisrith | Portfolio" />
        <meta property="og:description" content="Exploring Aerospace & Tech ✈️💻 | Future-Focused Engineer in the Making 🚀" />
      </Head>

      {/* Centered Fullscreen Rotating Rectangle */}
      <motion.div
        className="fixed top-1/2 left-1/2 w-screen h-screen -translate-x-1/2 -translate-y-1/2 z-0"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 100, ease: "linear" }}
      >
        <div className="w-full h-full bg-white/5 rounded-xl"></div>
      </motion.div>

      <div className="absolute inset-0 z-10 overflow-hidden">
        {[0, 1, 2, 3, 4, 5, 6].map((_, i) =>
          movingBox(i, i * 5, `${i * 14}%`, i % 2 === 0)
        )}
      </div>


      <div ref={cursorRef} className="fixed z-50 w-3 h-3 bg-fuchsia-400 rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 transition-all duration-75"></div>

      {showTopButton && (
        <button
          onClick={() => scrollTo('top')}
          className="fixed bottom-6 right-6 bg-fuchsia-600 hover:bg-fuchsia-700 text-white p-3 rounded-full shadow-lg z-60"
        >
          ↑
        </button>
      )}

      {/* Navigation */}
      <nav className="flex justify-between items-center px-6 py-4 bg-black/70 backdrop-blur sticky top-0 z-40">
        <h1 className="text-xl font-bold font-logo text-white">My_Portfolio</h1>
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
          download="Sai Mahisrith Vemula.pdf"
          className="mt-6 inline-block bg-fuchsia-600 hover:bg-fuchsia-700 transition text-white font-semibold px-6 py-3 rounded-full"
        >
          Download Resume
        </a>
      </section>

{      /* About Section */}
      <motion.section
        id="about"
        {...getSectionProps("left")}
        className={`w-full max-w-6xl mx-auto py-20 px-4 flex flex-col md:flex-row items-center gap-10 ${getSectionProps("left").className}`}
      >
        {/* Left Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-6 text-cyan-400">About Me</h2>
          <div className="h-1 w-16 mx-auto md:mx-0 mb-8 bg-gradient-to-r from-fuchsia-500 via-purple-400 to-cyan-400 rounded-full"></div>
          <p className="text-gray-300 mb-4 text-lg leading-relaxed">
            Hi, I'm Vemula Sai Mahisrith — a curious and creative mind who enjoys turning ideas into real, working projects. I'm passionate about technology, especially software development, game development, and aerospace. I’ve always been fascinated by how things move — whether it's a character in a game or an aircraft in the sky.
          </p>
          <p className="text-gray-300 mb-6 text-lg leading-relaxed">
            In my free time, I enjoy designing, video editing, and experimenting with code. I've created projects like a zombie survival game with custom enemy AI and this portfolio website you're looking at — all through self-learning, problem-solving, and a lot of trial and error.
          </p>
          <p className="text-gray-300 mb-6 text-lg leading-relaxed">
            I'm still learning and improving every day, and I enjoy the process just as much as the result. My goal is to keep building, keep exploring, and make things that are both fun and meaningful.
            Thanks for visiting my portfolio!
          </p>
          
          {/* Stats Boxes */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            <div className="bg-white/5 p-4 rounded-xl text-center">
              <p className="text-3xl font-bold text-cyan-400">97%</p>
              <p className="text-sm text-white mt-1">CBSE 12th</p>
            </div>
            <div className="bg-white/5 p-4 rounded-xl text-center">
              <p className="text-3xl font-bold text-cyan-400">80+</p>
              <p className="text-sm text-white mt-1">Game Dev Hours</p>
            </div>
            <div className="bg-white/5 p-4 rounded-xl text-center">
              <p className="text-3xl font-bold text-cyan-400">6</p>
              <p className="text-sm text-white mt-1">Skills & Tools</p>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="rounded-full overflow-hidden w-100 h-100 border-4 border-cyan-400 shadow-lg"
          >
            <Image
              src="/Photo.png" // Replace with your image path
              alt="Sai Mahisrith"
              width={320}
              height={320}
              className="object-cover w-full h-full"
            />
          </motion.div>
        </div>
      </motion.section>



      {/* Education */}
      <motion.section id="education" {...getSectionProps('right')} className={`max-w-4xl mx-auto py-20 px-4 ${getSectionProps('right').className}`}>
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-6 text-cyan-400">Education</h2>
          <div className="h-1 w-16 mx-auto mt-2 mb-10 bg-gradient-to-r from-fuchsia-500 via-purple-400 to-cyan-400 rounded-full"></div>
        </div>
        <div className="relative border-l-2 border-cyan-500 ml-4">
          {eduItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="mb-12 ml-6"
            >
              <div className="absolute left-[-0.7rem] top-2 w-4 h-4 bg-cyan-500 rounded-full border-2 border-white"></div>
              <p className="text-sm text-cyan-400 font-medium mb-1">{item.date}</p>
              <div className="bg-white/5 p-4 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-white mb-1">{item.title}</h3>
                <p className="text-gray-300 text-sm mb-1">{item.place}</p>
                <p className="text-gray-400 text-sm whitespace-pre-line">{item.info}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Skills */}
      <motion.section id="skills" {...getSectionProps('left')} className={`w-full px-4 py-20 ${getSectionProps('left').className}`}>
        <div className="relative overflow-hidden rounded-3xl">
          <div className={sectionBoxClass + " text-center max-w-3xl mx-auto px-4"}>


          <h2 className="text-4xl font-bold mb-6 text-indigo-400">Skills</h2>
          <div className="h-1 w-16 mx-auto mt-2 mb-10 bg-gradient-to-r from-fuchsia-500 via-purple-400 to-cyan-400 rounded-full"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-10 place-items-center max-w-[700px] mx-auto">

            {skills.map((skill, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-black/40 text-white rounded-xl p-6 w-72 shadow-md hover:shadow-xl transform transition-transform"
              >
                <div className="text-4xl mb-3">{skill.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-fuchsia-400 to-cyan-400"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>




          </div>
        </div>
      </motion.section>

      <motion.section
        id="projects"
        {...getSectionProps('right')}
        className={`max-w-6xl mx-auto py-20 px-4 text-center ${getSectionProps('right').className}`}
      >
        <h2 className="text-4xl font-bold mb-6 text-fuchsia-400">Projects</h2>
        <div className="h-1 w-16 mx-auto mt-1 mb-10 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400"></div>

        {/* Game Title */}
        <h3 className="text-3xl font-semibold text-indigo-300 mb-2">🧟‍♂️ Zombie Survival Horror Game</h3>
        {/* Subheading */}
        <p className="text-gray-400 text-sm md:text-base mb-10">Top-down survival game built with Python + Pygame| Solo Game Dev Project</p>

        {/* Overview Box */}
        <div className="bg-white/5 text-gray-300 p-6 rounded-2xl mb-12 max-w-3xl mx-auto text-sm md:text-base backdrop-blur-md border border-white/10">
          A fast-paced, top-down maze survival game. Player collects keys to unlock the exit while dodging smart zombies. Shields can temporarily despawn enemies. Smooth camera, enemy AI, minimap — all crafted with custom logic and game feel.
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
              className="bg-black/30 p-6 rounded-xl shadow-md backdrop-blur-md"
            >
              <h4 className="text-lg font-bold text-fuchsia-400 mb-2">{feature.title}</h4>

              <ul className="text-gray-300 space-y-2">
                {feature.desc.map((point, j) => (
                  <motion.li
                    key={j}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: j * 0.15 }}
                    viewport={{ once: true, amount: 0.5 }}
                    className={`flex items-start ${feature.symbol ? 'gap-2' : ''}`}
                  >
                    {feature.symbol && <span className="text-cyan-400 mt-1">{feature.symbol}</span>}
                    <span>{point}</span>
                  </motion.li>
                ))}
              </ul>


            </motion.div>
          ))}

        </div>

        {/* GitHub Button */}
        <div className="pt-12">
          <a
            href="https://github.com/MahiV2007/zombie-survival-maze" // ← Replace if needed
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm bg-fuchsia-600 hover:bg-fuchsia-700 transition text-white py-3 px-8 rounded-full"
          >
            View on GitHub
          </a>
        </div>
      </motion.section>




      {/* Contact */}
      <motion.section id="contact" {...getSectionProps('left')} className={`max-w-3xl mx-auto py-20 px-4 text-center ${getSectionProps('left').className}`}>
        <h2 className="text-4xl font-bold mb-4 text-indigo-500">Get in Touch</h2>
        <div className="h-1 w-16 mx-auto mt-1 mb-10 bg-gradient-to-r from-fuchsia-500 via-purple-400 to-cyan-400 rounded-full"></div>
        <p className="text-gray-300 mb-6">Want to connect or collaborate? Reach me at
✉️ sai.mahisrithv@outlook.com</p>
        <form action="https://formsubmit.co/sai.mahisrithv@outlook.com" method="POST" className="grid gap-4 text-left">
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="box" />
          
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="bg-white/5 backdrop-blur-md border border-white/20 focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-600/40 rounded-xl p-4 text-white placeholder-white/50 transition duration-300 w-full"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="bg-white/5 backdrop-blur-md border border-white/20 focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-600/40 rounded-xl p-4 text-white placeholder-white/50 transition duration-300 w-full"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="bg-white/5 backdrop-blur-md border border-white/20 focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-600/40 rounded-xl p-4 text-white placeholder-white/50 transition duration-300 w-full"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="bg-white/5 backdrop-blur-md border border-white/20 focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-600/40 rounded-xl p-4 text-white placeholder-white/50 transition duration-300 w-full h-40"
          />
          <button
            type="submit"
            className="bg-fuchsia-600 hover:bg-fuchsia-700 transition text-white py-3 rounded-lg font-semibold"
          >
            Send Message
          </button>
        </form>

      </motion.section>

<footer className="z-50 relative bg-black/50 backdrop-blur p-6">
  <div className="max-w-4xl mx-auto text-center">
    {/* Navigation Links */}
    <div className="flex flex-wrap justify-center gap-6 mb-6 text-sm md:text-base text-white/70">
      {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link, idx) => (
        <button
          key={idx}
          onClick={() => scrollTo(link.toLowerCase())}
          className="hover:text-fuchsia-400 transition"
        >
          {link}
        </button>
      ))}
    </div>

    {/* Social Icons */}
    <div className="flex justify-center gap-5 mb-6">
      <a href="https://github.com/MahiV2007" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-fuchsia-500/30 p-3 rounded-full">
        <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
          <path d="M12 .5C5.7.5.5 5.8.5 12.2c0 5.2 3.4 9.6 8.2 11.2.6.1.8-.2.8-.6v-2.2c-3.3.7-4-.8-4-.8-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.2.1 1.9 1.3 1.9 1.3 1 .1 1.6-.8 1.6-.8.1-.8.4-1.2.6-1.4-2.6-.3-5.3-1.4-5.3-6.2 0-1.4.5-2.6 1.3-3.5-.1-.3-.6-1.5.1-3.1 0 0 1-.3 3.4 1.3a11.7 11.7 0 0 1 6.1 0C17 4.6 18 4.9 18 4.9c.7 1.6.2 2.8.1 3.1.8.9 1.3 2.1 1.3 3.5 0 4.8-2.7 5.9-5.3 6.2.4.3.7.9.7 1.9v2.8c0 .4.2.7.8.6a11.9 11.9 0 0 0 8.2-11.3C23.5 5.8 18.3.5 12 .5z" />
        </svg>
      </a>
      <a href="mailto:sai.mahisrithv@outlook.com" className="bg-white/10 hover:bg-fuchsia-500/30 p-3 rounded-full">
        <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm0 2v.01L12 13 20 6V6H4zm0 2.24l6.76 5.66a1.5 1.5 0 0 0 1.48 0L20 8.24V18H4V8.24z" />
        </svg>
      </a>
      <a href="tel:+919392261474" className="bg-white/10 hover:bg-fuchsia-500/30 p-3 rounded-full">
        <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
          <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.1-.3 1.2.4 2.5.6 3.7.6.6 0 1 .4 1 1v3.6c0 .6-.4 1-1 1C10.3 22.1 1.9 13.7 1.9 3c0-.6.4-1 1-1H6.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.7.1.4 0 .9-.3 1.1L6.6 10.8z" />
        </svg>
      </a>
      <a href="https://www.linkedin.com/in/sai-mahisrith-vemula-887107364/" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-fuchsia-500/30 p-3 rounded-full">
        <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
          <path d="M4.98 3.5C4.98 4.9 3.88 6 2.5 6S0 4.9 0 3.5 1.1 1 2.5 1 4.98 2.1 4.98 3.5zM.5 8.5H4.5V24H.5V8.5zM7.5 8.5h3.7v2.1h.1c.5-.9 1.7-1.9 3.5-1.9 3.8 0 4.5 2.5 4.5 5.7V24h-4v-7.8c0-1.9-.1-4.4-2.7-4.4s-3.1 2.1-3.1 4.3V24h-4V8.5z" />
        </svg>
      </a>
    </div>

    {/* Copyright */}
    <p className="text-sm text-gray-400">&copy; 2025 Sai Mahisrith. All rights reserved.</p>
  </div>
</footer>
    </main>
    
  );
}
