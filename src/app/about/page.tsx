import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Ashwin Chandrasekar (Ashhhh) - Creative Developer & Designer",
  description:
    "Learn more about Ashwin Chandrasekar (Ashhhh), a passionate Creative Developer and Designer. Discover my journey, expertise in Next.js, React, Framer Motion, and modern web technologies.",
  keywords: [
    "About Ashwin Chandrasekar",
    "Ashhhh about",
    "Creative Developer",
    "Web Designer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Framer Motion",
    "Portfolio",
    "Web Development",
    "UI/UX Designer",
    "Full Stack Developer",
  ],
  openGraph: {
    title: "About Ashwin Chandrasekar (Ashhhh) - Creative Developer & Designer",
    description:
      "Learn more about Ashwin Chandrasekar (Ashhhh), a passionate Creative Developer and Designer. Discover my journey, expertise in Next.js, React, Framer Motion, and modern web technologies.",
    url: "https://ashhhh-portfolio.vercel.app/about",
  },
};

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* SEO Content - Hidden but accessible to search engines */}
      <div className="sr-only">
        <h1>
          About Ashwin Chandrasekar (Ashhhh) - Creative Developer & Designer
        </h1>
        <p>
          Ashwin Chandrasekar, also known as Ashhhh, is a passionate Creative
          Developer and Designer based in India. With expertise in modern web
          technologies including Next.js, React, Framer Motion, and Tailwind
          CSS, I create innovative digital solutions and exceptional user
          experiences.
        </p>
        <p>
          As a creative developer and designer, I specialize in crafting
          visually striking interfaces, smooth animations, and high-performance
          applications. My work combines technical mastery with creative design
          principles to deliver engaging digital experiences.
        </p>
        <p>
          With a strong foundation in frontend development, UI/UX design, and
          modern web technologies, I help businesses and individuals bring their
          digital visions to life through innovative web solutions.
        </p>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-8">
            About Ashwin Chandrasekar
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-8">
              Passionate Creative Designer and Developer, dedicated to crafting
              innovative solutions and exceptional digital experiences through
              modern technologies.
            </p>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6">Who I Am</h2>
              <p className="text-gray-700 mb-4">
                I'm Ashwin Chandrasekar, a creative developer and designer who
                believes in the power of combining beautiful design with
                powerful functionality. Driven by curiosity and a love for
                design, I create simple, functional, and visually striking
                digital experiences.
              </p>
              <p className="text-gray-700 mb-4">
                As a student, I'm always learning and exploring new ideas,
                pushing the boundaries of what's possible in web development and
                design. The fusion of my passion for design, development, and
                seamless user experiences places me at the intersection of
                creativity and technology in the digital world.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6">
                My Approach
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-black mb-4">
                    01. Designing
                  </h3>
                  <p className="text-gray-700">
                    I craft visually striking, immersive interfaces that don't
                    just look good—they feel alive. Think smooth animations,
                    intuitive layouts, and razor-sharp attention to detail that
                    captivate users and keep them hooked.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-black mb-4">
                    02. Developing
                  </h3>
                  <p className="text-gray-700">
                    I don't just write code—I engineer powerful, high-speed
                    applications that are as smooth as butter. From next-level
                    frontend magic to rock-solid backend systems, I make sure
                    everything runs blazing fast, bug-free, and future-ready.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-black mb-4">
                    03. The Ultimate Blend
                  </h3>
                  <p className="text-gray-700">
                    Why choose between design and development when you can have
                    both at peak performance? I merge UI/UX brilliance with
                    technical mastery, ensuring every project is visually
                    iconic, functionally flawless, and insanely engaging.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6">
                Technologies & Skills
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-black mb-4">
                    Frontend Technologies
                  </h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Next.js & React</li>
                    <li>• TypeScript & JavaScript</li>
                    <li>• Tailwind CSS & SCSS</li>
                    <li>• Framer Motion & GSAP</li>
                    <li>• Lenis Smooth Scrolling</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-4">
                    Design & Tools
                  </h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• UI/UX Design</li>
                    <li>• Figma & Adobe Creative Suite</li>
                    <li>• Responsive Design</li>
                    <li>• Animation & Micro-interactions</li>
                    <li>• Performance Optimization</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6">
                Contact Information
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-bold text-black mb-2">Email</h3>
                    <p className="text-gray-700">its.ashwin.23@gmail.com</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-black mb-2">Phone</h3>
                    <p className="text-gray-700">(+91) 8248669086</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-black mb-2">
                      GitHub
                    </h3>
                    <p className="text-gray-700">github.com/Its-SuperNova</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-black mb-2">
                      Location
                    </h3>
                    <p className="text-gray-700">India</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
