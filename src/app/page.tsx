import TrueFocus from "@/app/components/reactbits/TrueFocus/TrueFocus";
import Shuffle from "@/app/components/reactbits/Shuffle/Shuffle";
import AboutSection from "./components/AboutSection";
import LogoLoop from "./components/reactbits/LogoLoop/LogoLoop";
import {
  SiPython,
  SiLinux,
  SiKalilinux as SiKaliLinux,
  SiUbuntu,
  SiDocker,
  SiGithub,
  SiGit,
  SiAmazon,
  SiCisco,
  SiVmware,
  SiVirtualbox,
  SiWireshark
} from "react-icons/si";
import { FaMicrosoft, FaMicrosoft as SiMicrosoftoffice, FaWindows as SiWindows } from "react-icons/fa";
import { FaShieldAlt, FaNetworkWired, FaServer, FaLock, FaUserShield, FaFingerprint, FaMobileAlt, FaDatabase, FaLaptopCode, FaMicrosoft as SiVisualstudiocode, FaBug, FaShieldVirus } from "react-icons/fa";

import MagicBento from "./components/reactbits/MagicBento/MagicBento";
import ExperienceTimeline from "./components/ExperienceTimeline";
import ProjectsShowcase from "./components/reactbits/SpotlightCard/ProjectsShowcase";
import ContactSection from "./components/ContactSection";

const techLogos = [
  // Operating Systems
  { node: <SiWindows />, title: "Windows", href: "https://www.microsoft.com/windows" },
  { node: <SiLinux />, title: "Linux", href: "https://www.linux.org/" },
  { node: <SiKaliLinux />, title: "Kali Linux", href: "https://www.kali.org/" },
  { node: <SiUbuntu />, title: "Ubuntu", href: "https://ubuntu.com/" },
  
  // Security Tools
  { node: <FaShieldAlt />, title: "Security Tools", href: "#" },
  { node: <SiWireshark />, title: "Wireshark", href: "https://www.wireshark.org/" },
  { node: <FaBug />, title: "Metasploit", href: "https://www.metasploit.com/" },
  { node: <FaShieldVirus />, title: "Burp Suite", href: "https://portswigger.net/burp" },
  
  // Networking
  { node: <FaNetworkWired />, title: "Networking", href: "#" },
  { node: <SiCisco />, title: "Cisco", href: "https://www.cisco.com/" },
  
  // Virtualization
  { node: <SiVmware />, title: "VMware", href: "https://www.vmware.com/" },
  { node: <SiVirtualbox />, title: "VirtualBox", href: "https://www.virtualbox.org/" },
  
  // Cloud & Infrastructure
  { node: <FaMicrosoft />, title: "Azure", href: "https://azure.microsoft.com/" },
  { node: <SiAmazon />, title: "AWS", href: "https://aws.amazon.com/" },
  
  // Development & Tools
  { node: <SiPython />, title: "Python", href: "https://www.python.org/" },
  { node: <SiDocker />, title: "Docker", href: "https://www.docker.com/" },
  { node: <SiGithub />, title: "GitHub", href: "https://github.com" },
  { node: <SiGit />, title: "Git", href: "https://git-scm.com/" },
  { node: <SiVisualstudiocode />, title: "VS Code", href: "https://code.visualstudio.com/" },
  
  // Security Concepts
  { node: <FaLock />, title: "Encryption", href: "#" },
  { node: <FaUserShield />, title: "Access Control", href: "#" },
  { node: <FaFingerprint />, title: "Authentication", href: "#" },
  
  // Additional Skills
  { node: <FaServer />, title: "Server Administration", href: "#" },
  { node: <FaMobileAlt />, title: "Mobile Security", href: "#" },
  { node: <FaDatabase />, title: "Database Security", href: "#" },
  { node: <FaLaptopCode />, title: "Secure Coding", href: "#" }
];

const certificates = [
  {
    title: 'Cybersecurity Fundamentals',
    summary: 'Information Technology Institute',
    bullets: [
      'Gained a solid foundation in cybersecurity principles, network security, and risk management',
      'Developed skills to identify, assess, and mitigate security threats in IT environments',
      'Focused on practical applications of security controls and best practices'
    ],
    tags: ['Cybersecurity', 'Network Security', 'Risk Management', 'IT Security'],
    date: 'Aug 2025 - Sep 2025',
    link: '#'
  },
  {
    title: 'SprintX Cybersecurity Summer Camp',
    summary: 'Microsoft',
    bullets: [
      'Completed an intensive cybersecurity training program covering ethical hacking and digital forensics',
      'Explored cloud security concepts and modern cyber defense strategies',
      'Gained hands-on experience with security tools and techniques'
    ],
    tags: ['Ethical Hacking', 'Digital Forensics', 'Cloud Security', 'Cyber Defense'],
    date: 'Jun 2024 - Sep 2024',
    link: '#'
  },
  {
    title: 'Security Operations Fundamentals',
    summary: 'Palo Alto Networks Academy',
    bullets: [
      'Earned a strong foundation in threat detection and incident response',
      'Learned security monitoring techniques and SOC operations',
      'Prepared to support secure IT environments and security operations'
    ],
    tags: ['Threat Detection', 'Incident Response', 'Security Monitoring', 'SOC Operations'],
    date: 'Aug 2024 - Sep 2024',
    link: '#'
  }
];

export default function Home() {
  return (
    <main className="px-4 sm:px-6 md:px-10 pt-20 sm:pt-24">
      {/* Home Section */}
    <section id="home" className=" relative mx-auto max-w-7xl min-h-[calc(100svh-5rem)] sm:min-h-[calc(100svh-6rem)] flex items-center justify-center px-6 text-center">
      <div className="space-y-3 sm:space-y-4">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight">
          <Shuffle
            tag="span"                         
            text="Ahmed Tamer"
            className="!text-4xl sm:!text-5xl md:!text-7xl !leading-none"
            shuffleDirection="right"
            duration={0.35}
            animationMode="evenodd"
            shuffleTimes={1}
            ease="power3.out"
            stagger={0.03}
            threshold={0.1}
            triggerOnce={true}
            triggerOnHover={true}
            respectReducedMotion={true}
          />
        </h1>

        <div className="mt-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-400">
            <TrueFocus
              sentence="SOC ANALYST"
              manualMode={false}
              blurAmount={5}
              borderColor="cyan"
              animationDuration={0.3}
              pauseBetweenAnimations={1}
              className="!text-2xl sm:!text-3xl md:!text-4xl"
            />
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-400">Cybersecurity Professional</p>
        </div>
      </div>
    </section>

      {/* About Section */}
        <AboutSection />

      {/* Skills Section */}
      <section
        id="skills"
        className={`
          !scroll-mt-[calc(50vh-5rem)]   /* Centers the section when clicked */
          mx-auto 
          w-[96%] sm:w-[94%] md:w-[92%] lg:w-[86%] xl:max-w-[1000px]
          pb-20 sm:pb-24 md:pb-28 lg:pb-32  /* Adds bottom padding */
        `}
      >
        <h2 className="mb-6 sm:mb-8 text-center text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
          Skills
        </h2>

        <LogoLoop
          logos={techLogos}
          speed={50}
          logoHeight={90}
          direction="left"
          pauseOnHover
          scaleOnHover
          fadeOut={false}
          ariaLabel="Technology skills"
          className="
            relative overflow-hidden rounded-2xl border border-white/10 bg-black/30
            py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12
            [--logoloop-logoHeight:80px]
            sm:[--logoloop-logoHeight:120px]
            md:[--logoloop-logoHeight:140px]
            lg:[--logoloop-logoHeight:160px]
            xl:[--logoloop-logoHeight:180px]
            [--logoloop-gap:48px]
            sm:[--logoloop-gap:56px]
            md:[--logoloop-gap:64px]
            lg:[--logoloop-gap:72px]
            xl:[--logoloop-gap:80px]
          "
        />
      </section>


      {/* Certifications Section */}
      <section id="certifications" className="relative mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden hover:border-cyan-400/50 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl hover:shadow-cyan-500/10"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white">{cert.title}</h3>
                  <span className="text-sm bg-cyan-900/30 text-cyan-400 px-3 py-1 rounded-full">
                    {cert.date}
                  </span>
                </div>
                <p className="text-cyan-300 mb-4">{cert.summary}</p>
                
                <ul className="space-y-2 mb-4">
                  {cert.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-cyan-400 mr-2">•</span>
                      <span className="text-gray-300 text-sm">{bullet}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2 mt-4 mb-4">
                  {cert.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="text-xs bg-white/10 text-gray-300 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-medium mt-4 group"
                  >
                    View Certificate
                    <svg
                      className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" 
className="
  min-h-[70vh] sm:min-h-[80vh]
  px-2 sm:px-4
  pt-16 sm:pt-24 md:pt-32
  scroll-mt-[calc(50vh-6rem)]
  sm:scroll-mt-[calc(45vh-5rem)]
  md:scroll-mt-[calc(40vh-4rem)]
"
>
        <h2 className="mb-8 sm:mb-10 text-center text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
          Experience
        </h2>
        <div className="mx-auto max-w-4xl">
          <ExperienceTimeline />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-4 sm:px-6 mt-16 sm:mt-20 md:mt-28 scroll-mt-20 sm:scroll-mt-28 md:scroll-mt-32">
        <div className="mx-auto max-w-6xl min-h-[70vh] sm:min-h-[80vh] flex flex-col items-center justify-center text-center gap-8 sm:gap-10 py-10 sm:py-12 md:py-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
            Projects
          </h2>
          <ProjectsShowcase />
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="px-4 sm:px-6 mt-16 sm:mt-20 md:mt-28 scroll-mt-20 sm:scroll-mt-24 md:scroll-mt-28"
      >
        <div className="mx-auto max-w-6xl min-h-[60vh] sm:min-h-[70vh] flex flex-col items-center justify-center text-center gap-6 sm:gap-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
            Contact
          </h2>
          <ContactSection />
        </div>
      </section>
    </main>
  );
}