import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Courses & Learning - Ashwin Chandrasekar (Ashhhh) Creative Developer",
  description:
    "Explore Ashwin Chandrasekar's courses and learning resources for web development, React, Next.js, and creative design. Learn modern web technologies and development techniques.",
  keywords: [
    "Ashwin Chandrasekar courses",
    "Ashhhh courses",
    "Web development courses",
    "React courses",
    "Next.js courses",
    "Creative development courses",
    "Frontend development courses",
    "UI/UX design courses",
    "Programming courses",
    "Web development tutorials",
    "Coding courses",
    "Design courses",
  ],
  openGraph: {
    title:
      "Courses & Learning - Ashwin Chandrasekar (Ashhhh) Creative Developer",
    description:
      "Explore Ashwin Chandrasekar's courses and learning resources for web development, React, Next.js, and creative design.",
    url: "https://ashhhh-portfolio.vercel.app/course",
  },
};

const CoursePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* SEO Content - Hidden but accessible to search engines */}
      <div className="sr-only">
        <h1>
          Courses & Learning - Ashwin Chandrasekar (Ashhhh) Creative Developer
        </h1>
        <p>
          Discover comprehensive courses and learning resources by Ashwin
          Chandrasekar (Ashhhh) covering web development, React, Next.js, and
          creative design. Learn modern web technologies and development
          techniques from an experienced creative developer.
        </p>
        <p>
          Ashhhh courses provide practical, hands-on learning experiences for
          developers and designers. Master frontend development, UI/UX design,
          and modern web technologies through structured learning paths and
          tutorials.
        </p>
        <p>
          Explore programming courses, design tutorials, and web development
          resources designed to help you build exceptional digital experiences
          and advance your career in creative development.
        </p>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-8">
            Courses & Learning
          </h1>

          <p className="text-xl text-gray-700 mb-12">
            Master modern web development and creative design with comprehensive
            courses designed to take your skills to the next level.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-black mb-4">
                Web Development Fundamentals
              </h2>
              <p className="text-gray-700 mb-4">
                Learn the basics of web development including HTML, CSS,
                JavaScript, and modern frameworks.
              </p>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>• HTML5 & CSS3 Fundamentals</li>
                <li>• JavaScript ES6+ Features</li>
                <li>• Responsive Design Principles</li>
                <li>• Modern CSS with Tailwind</li>
              </ul>
              <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                Coming Soon
              </button>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-black mb-4">
                React & Next.js Mastery
              </h2>
              <p className="text-gray-700 mb-4">
                Build modern, scalable web applications with React and Next.js.
              </p>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>• React Fundamentals & Hooks</li>
                <li>• Next.js App Router</li>
                <li>• TypeScript Integration</li>
                <li>• Performance Optimization</li>
              </ul>
              <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                Coming Soon
              </button>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-black mb-4">
                Creative Design & Animation
              </h2>
              <p className="text-gray-700 mb-4">
                Create stunning animations and interactive experiences with
                Framer Motion and GSAP.
              </p>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>• Framer Motion Basics</li>
                <li>• GSAP Animation Techniques</li>
                <li>• UI/UX Design Principles</li>
                <li>• Interactive Prototyping</li>
              </ul>
              <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                Coming Soon
              </button>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-black mb-4">
                Full-Stack Development
              </h2>
              <p className="text-gray-700 mb-4">
                Build complete web applications with frontend and backend
                integration.
              </p>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>• API Development</li>
                <li>• Database Design</li>
                <li>• Authentication & Security</li>
                <li>• Deployment Strategies</li>
              </ul>
              <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                Coming Soon
              </button>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-black mb-6">
              Ready to Start Learning?
            </h2>
            <p className="text-gray-700 mb-8">
              Join the community of developers and designers learning from
              Ashwin Chandrasekar.
            </p>
            <a
              href="/contact"
              className="inline-block bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
