import { useEffect, useState } from "react";
import { easeIn, easeOut, motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Terminal,
  ChevronDown,
  Code,
  Layers,
  Zap,
  ExternalLink,
  Network,
} from "lucide-react";
import {
  SiVuedotjs,
  SiDotnet,
  SiPython,
  SiCss,
  SiBootstrap,
  SiGit,
  SiReact,
  SiExpress,
  SiTailwindcss,
  SiDocker,
  SiMongodb,
  SiKubernetes,
  SiRedhatopenshift,
} from "react-icons/si";
import { FaDatabase, FaAws, FaTasks, FaHtml5, FaNodeJs } from "react-icons/fa";
import { FiLink } from "react-icons/fi";
import { VscAzure } from "react-icons/vsc";
import biblioTrack from "./assets/biblioTrack.webp";
import biblioTrack1 from "./assets/biblioTrack1.webp";
import hootsChallenge from "./assets/hootsChallenge.webp";
import hootsChallenge1 from "./assets/hootsChallenge1.webp";
import treasureHunt from "./assets/treasureHunt.webp";
import treasureHunt1 from "./assets/treasureHunt1.webp";
const PROJECTS = [
  {
    id: 1,
    title: "Biblio Track",
    description:
      "Full-stack library management system that allows users to browse, reserve, and manage books online with role-based access for admins and visitors. Includes authentication, search, and reservation workflow.",
    tech: [".NET", "Vue.js", "SQL Server", "Pinia"],
    mainImage: biblioTrack,
    secondaryImage: biblioTrack1,
    link: "https://biblio-track-project.vercel.app",
    credentials: (
      <>
        <br />
        Admin: demoAdmin@domain.com / Admin123!
        <br />
        Visitor: demoUser@domain.com / Guest123!
        <br />
        Note: The demo may take a moment to load as it wakes up from sleep mode.
      </>
    ),
  },
  {
    id: 2,
    title: "Hoots Challenge",
    description:
      "Educational web application that helps children practice math and nature science through interactive quizzes. Includes user authentication, progress tracking, difficulty levels, and API-generated questions.",
    tech: ["Flask", "PostgreSQL", "Python", "SQLAlchemy", "REST API"],
    mainImage: hootsChallenge,
    secondaryImage: hootsChallenge1,
    link: "https://hootschallenge.onrender.com",
    credentials: "",
  },
  {
    id: 3,
    title: "AR Treasure Hunt",
    description:
      "Proof-of-concept AR adventure game that combines geolocation and augmented reality to create an interactive outdoor experience. Players follow a hiking route and collect AR clues along the trail to progress through the adventure. The demo is currently configured for the Stikk Ut trail Retiro in Molde.",
    tech: ["JavaScript", "A-Frame", "Web AR", "HTML/CSS"],
    mainImage: treasureHunt,
    secondaryImage: treasureHunt1,
    link: "https://luza83.github.io/AR-TreasureHunt/",
    credentials: "",
  },
];

const SKILLS = [
  {
    name: "SQL (Microsoft SQL Server)",
    icon: FaDatabase,
    category: "Professional Experience",
  },
  {
    name: "Vue.js (JavaScript)",
    icon: SiVuedotjs,
    category: "Professional Experience",
  },
  {
    name: ".Net (C#, VB.NET)",
    icon: SiDotnet,
    category: "Professional Experience",
  },
  { name: "Rest API", icon: FiLink, category: "Professional Experience" },
  { name: "HTML", icon: FaHtml5, category: "Professional Experience" },
  { name: "CSS", icon: SiCss, category: "Professional Experience" },
  { name: "Bootstrap", icon: SiBootstrap, category: "Professional Experience" },
  { name: "Git", icon: SiGit, category: "Professional Experience" },

  // Course Knowledge
  { name: "Python", icon: SiPython, category: "Projects & Coursework" },
  { name: "React", icon: SiReact, category: "Projects & Coursework" },
  { name: "Node.js", icon: FaNodeJs, category: "Projects & Coursework" },
  { name: "Express.js", icon: SiExpress, category: "Projects & Coursework" },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    category: "Projects & Coursework",
  },
  { name: "NoSQL", icon: SiMongodb, category: "Projects & Coursework" },
  {
    name: "Azure App Service",
    icon: VscAzure,
    category: "Projects & Coursework",
  },

  // Familiar With
  { name: "Kubernetes", icon: SiKubernetes, category: "Familiar With" },
  { name: "Docker", icon: SiDocker, category: "Familiar With" },
  { name: "OpenShift", icon: SiRedhatopenshift, category: "Familiar With" },
  { name: "Microservices", icon: Network, category: "Familiar With" },
  { name: "DevOps", icon: FaAws, category: "Familiar With" },
  { name: "Agile", icon: FaTasks, category: "Familiar With" },
];

const EXPERIENCE = [
  {
    year: "2023 - 2025",
    role: "Junior Full Stack Developer",
    company: "Wise Consulting",
    description:
      "Worked on full-stack development, maintaining and improving an internal web application. Handled backend logic, SQL databases, REST APIs, and frontend features using Vue.js. Gained experience in debugging, problem-solving, and managing real-world projects independently.",
  },
  {
    year: "2020 - 2023",
    role: "Bachelor in IT",
    company: "Molde University College",
    description:
      "Completed a Bachelor’s degree in IT and Digitalizing. Developed a thesis project: an AR-based outdoor app for kids, focusing on front-end, back-end, and interactive design. Learned to plan, develop, and deliver a complete software project.",
  },
];

const COURSES_AND_CERTIFICATIONS = [
  {
    title: "IBM Full-Stack JavaScript Developer",
    provider: "Coursera",
    completionDate: "2026-08-06",
    link: "https://coursera.org/share/35482948bc8c01ab018f2ee837d35828",
    description:
      "Building cloud-native fullstack applications using JavaScript",
  },
  {
    title: "C# Intermediate: Classes, Interfaces and OOP",
    provider: "Udemy",
    completionDate: "2023-06-23",
    link: "https://www.udemy.com/certificate/UC-14df9e73-1a98-4d83-bb43-e3b1f95a0d23/",
    description:
      "Intermediate C# course covering classes, interfaces, and object-oriented programming concepts.",
  },
];
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const item1 = {
  hidden: { opacity: 0, y: -60 },
  show: { opacity: 1, y: 0 },
};
const item2 = {
  hidden: { opacity: 0, x: -100 },
  show: { opacity: 1, x: 0 },
};

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="hidden md:block absolute top-[20%] left-[20%] w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px] mix-blend-screen" />
        <div className="hidden md:block absolute bottom-[20%] right-[20%] w-[600px] h-[600px] rounded-full bg-secondary/20 blur-[150px] mix-blend-screen" />
      </div>

      <div className="container relative z-10 mx-auto px-6 flex flex-col items-center text-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.div
            variants={item1}
            transition={{ duration: 0.8, ease: easeOut }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-200 bg-red-50 text-red-700 mb-8"
          >
            <Terminal size={16} />
            <span className="text-sm font-medium tracking-wide">
              Available for new opportunities
            </span>
          </motion.div>

          <motion.h1
            variants={item1}
            transition={{ duration: 0.8, delay: 0.1, ease: easeOut }}
            className="text-6xl md:text-8xl font-bold tracking-tight mb-6 text-red-700"
          >
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Adriana
            </span>
          </motion.h1>

          <motion.p
            variants={item2}
            transition={{ duration: 0.8, delay: 0.2, ease: easeOut }}
            className="text-xl md:text-2xl text-black max-w-2xl mb-12"
          >
            A junior full-stack developer learning, building, and improving
            through real-world development projects.
          </motion.p>

          <motion.div
            variants={item2}
            transition={{ duration: 0.8, delay: 0.3, ease: easeOut }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#projects"
              className="px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors duration-300 w-full sm:w-auto"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-lg border border-border hover:bg-white/5 transition-colors duration-300 w-full sm:w-auto"
            >
              Let's Talk
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="text-black/70" />
      </motion.div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-red-700">
              Curious by <span className="text-red-700">nature</span>.
              <br />
              Built through <span className="text-red-700">practice</span>.
            </h2>
            <div className="space-y-6 text-lg text-black">
              <p>
                I enjoy building applications that solve real problems and make
                everyday tasks a little easier. Programming allows me to combine
                problem solving, structure, and creativity in one place. I’ve
                developed my skills through hands-on projects, working with
                databases and backend logic, and building clean, functional
                interfaces on top.
              </p>
              <p>
                I’m continuously improving my skills and focused on building
                software that is reliable, clear, and made for real users.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-panel p-6 rounded-2xl"
            >
              <div className="flex items-center gap-2 mb-4">
                <Code className="w-8 h-8 text-primary" />
                <h3 className="font-bold text-xl text-red-700">Clean Code</h3>
              </div>
              <p className="text-sm text-black/80">
                Organized, readable, and maintainable. Clear structure makes it
                easy to understand and extend.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-panel p-6 rounded-2xl"
            >
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-8 h-8 text-red-700" />
                <h3 className="font-bold text-xl text-red-700">Performance</h3>
              </div>
              <p className="text-sm text-black/80">
                Responsive, practical applications. Always improving efficiency.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-panel p-6 rounded-2xl"
            >
              <div className="flex items-center gap-2 mb-4">
                <Layers className="w-8 h-8 text-red-700" />
                <h3 className="font-bold text-xl text-red-700">Architecture</h3>
              </div>
              <p className="text-sm text-black/80">
                Thoughtful, clear system design. Built to scale as projects
                grow.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Skills() {
  const skillCategories = [...new Set(SKILLS.map((skill) => skill.category))];

  return (
    <section id="skills" className="py-32 bg-white/5 border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 text-red-700"
          >
            My Skills
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-black"
          >
            Technologies I have experience with and have used in real-world
            projects, coursework, and personal projects.
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category} className="space-y-6">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="text-xl md:text-2xl font-semibold text-red-700"
              >
                {category}
              </motion.h3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {SKILLS.filter((skill) => skill.category === category).map(
                  (skill, index) => (
                    <motion.div
                      key={`${category}-${skill.name}`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        delay: categoryIndex * 0.1 + index * 0.05,
                      }}
                      className="flex flex-col items-center gap-2 p-4 rounded-lg glass-panel"
                    >
                      <skill.icon className="w-8 h-8 text-red-700" />
                      <span className="text-sm text-center text-black">
                        {skill.name}
                      </span>
                    </motion.div>
                  ),
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
function CoursesAndCertifications() {
  return (
    <section id="courses" className="py-32">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center text-4xl font-bold text-red-700 md:text-5xl"
        >
          Courses & Certifications
        </motion.h2>

        <div className="space-y-12 max-w-4xl mx-auto">
          {COURSES_AND_CERTIFICATIONS.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-4 gap-8">
                <div className="md:text-right md:col-span-1 pt-1">
                  <span className="text-black font-mono font-medium">
                    {new Date(course.completionDate).toLocaleDateString(
                      "en-US",
                      {
                        year: "numeric",
                        month: "long",
                      },
                    )}
                  </span>
                </div>
                <div className="md:col-span-3 relative mt-2 md:mt-0 glass-panel p-8 rounded-2xl">
                  <div className="absolute left-[-39px] md:left-[-25px] top-8 w-4 h-4 rounded-full bg-background border-2 border-black z-10" />
                  {index !== COURSES_AND_CERTIFICATIONS.length - 1 && (
                    <div className="absolute left-[-32px] md:left-[-18px] top-12 bottom-[-80px] w-0.5 bg-border" />
                  )}
                  <h3 className="text-2xl font-bold text-red-700 mb-1">
                    {course.title}
                  </h3>
                  <h4 className="text-lg text-black mb-4">{course.provider}</h4>
                  <p className="text-black leading-relaxed mb-4">
                    Description: {course.description}
                  </p>
                  {course.link && (
                    <a
                      href={course.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex items-center gap-2
                        font-medium text-primary
                        transition-colors hover:text-primary/80
                      "
                    >
                      View Certificate <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
function Projects() {
  return (
    <section id="projects" className="relative py-32">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center text-4xl font-bold text-red-700 md:text-5xl"
        >
          Selected Works
        </motion.h2>

        <div className="space-y-32">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col items-center gap-12 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              <div className="group w-full md:w-1/2">
                <div
                  className="
                    relative aspect-video overflow-hidden rounded-2xl
                    glass-panel isolate
                  "
                  style={{
                    WebkitMaskImage: "-webkit-radial-gradient(white, black)",
                  }}
                >
                  <div
                    className="
                      absolute inset-0 z-20
                      bg-primary/20 opacity-0
                      md:mix-blend-overlay
                      transition-opacity duration-500
                      md:group-hover:opacity-100
                    "
                  />

                  {/* Main Image */}
                  <img
                    src={project.mainImage}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="
                    absolute inset-0 h-full w-full object-cover
                    transition-transform duration-500 ease-out
                    group-hover:scale-105
                  "
                  />
                  <img
                    src={project.secondaryImage}
                    alt={`${project.title} preview`}
                    loading="lazy"
                    decoding="async"
                    className="
                    absolute inset-0 h-full w-full object-cover
                    translate-y-full
                    transition-transform duration-500 ease-out
                    group-hover:translate-y-0
                  "
                  />
                </div>
              </div>

              <div className="w-full space-y-6 md:w-1/2">
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="
                        rounded-full border border-secondary/20
                        bg-secondary/10 px-3 py-1
                        text-xs font-medium text-secondary
                      "
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <h3 className="text-3xl font-bold text-red-700">
                  {project.title}
                </h3>

                <p className="text-lg text-black">{project.description}</p>

                {project.credentials && (
                  <p className="text-sm text-black/80">
                    <strong>Demo Credentials:</strong> {project.credentials}
                  </p>
                )}

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center gap-2
                    font-medium text-primary
                    transition-colors hover:text-primary/80
                  "
                >
                  View Project <ExternalLink size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section
      id="experience"
      className="py-32 bg-white/5 border-y border-white/5"
    >
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center text-red-700"
        >
          My Journey
        </motion.h2>

        <div className="space-y-12">
          {EXPERIENCE.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-4 gap-8">
                <div className="md:text-right md:col-span-1 pt-1">
                  <span className="text-black font-mono font-medium">
                    {exp.year}
                  </span>
                </div>
                <div className="md:col-span-3 relative mt-2 md:mt-0 glass-panel p-8 rounded-2xl">
                  <div className="absolute left-[-39px] md:left-[-25px] top-8 w-4 h-4 rounded-full bg-background border-2 border-black z-10" />
                  {index !== EXPERIENCE.length - 1 && (
                    <div className="absolute left-[-32px] md:left-[-18px] top-12 bottom-[-80px] w-0.5 bg-border" />
                  )}
                  <h3 className="text-2xl font-bold text-red-700 mb-1">
                    {exp.role}
                  </h3>
                  <h4 className="text-lg text-black mb-4">{exp.company}</h4>
                  <p className="text-black leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none hidden md:block">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-t-full bg-primary/10 blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-red-700">
            Let’s Work Together.
          </h2>
          <p className="text-xl text-black mb-12">
            I’m currently open to full-time opportunities and excited to work on
            interesting projects with great people. Don’t hesitate to reach out.
          </p>

          <a
            href="mailto:luzaah@icloud.com"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-lg hover:bg-primary/90 transition-all hover:scale-105 duration-300 mb-16"
            title="luzaah@icloud.com"
          >
            <Mail size={20} />
            Say Hello
          </a>
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/luza83"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full glass-panel text-black/70 hover:text-red-700 hover:border-red-200 transition-colors"
            >
              <Github size={24} />
            </a>
            {/* <a
              href="#"
              className="p-4 rounded-full glass-panel text-black/70 hover:text-red-700 hover:border-red-200 transition-colors"
            >
              <Linkedin size={24} />
            </a> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "py-4 glass-panel border-b-0 rounded-none bg-background/80"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-center">
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-black/70">
          <a href="#home" className="hover:text-black transition-colors">
            Home
          </a>
          <a href="#about" className="hover:text-black transition-colors">
            About
          </a>
          <a href="#skills" className="hover:text-black transition-colors">
            Skills
          </a>
          <a href="#courses" className="hover:text-black transition-colors">
            Courses And Certifications
          </a>
          <a href="#projects" className="hover:text-black transition-colors">
            Projects
          </a>
          <a href="#experience" className="hover:text-black transition-colors">
            Experience
          </a>
          <a href="#contact" className="hover:text-black transition-colors">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default function App() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <CoursesAndCertifications />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer className="py-8 text-center text-sm text-black/70 border-t border-white/5">
        <p>
          &copy; {new Date().getFullYear()} Adriana Acosta. “Experience is the
          name everyone gives to their mistakes.” – Oscar Wilde
        </p>
      </footer>
    </div>
  );
}
