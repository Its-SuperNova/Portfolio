import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Ashwin Chandrasekar (Ashhhh) - Creative Developer & Designer",
  description:
    "Get in touch with Ashwin Chandrasekar (Ashhhh) for web development projects, design work, and creative digital solutions. Contact via email, phone, or social media.",
  keywords: [
    "Contact Ashwin Chandrasekar",
    "Ashhhh contact",
    "Hire creative developer",
    "Web development services",
    "UI/UX design services",
    "Freelance developer",
    "Contact web designer",
    "Ashwin Chandrasekar email",
    "Creative developer contact",
    "Portfolio contact",
  ],
  openGraph: {
    title:
      "Contact Ashwin Chandrasekar (Ashhhh) - Creative Developer & Designer",
    description:
      "Get in touch with Ashwin Chandrasekar (Ashhhh) for web development projects, design work, and creative digital solutions.",
    url: "https://ashhhh-portfolio.vercel.app/contact",
  },
};

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* SEO Content - Hidden but accessible to search engines */}
      <div className="sr-only">
        <h1>
          Contact Ashwin Chandrasekar (Ashhhh) - Creative Developer & Designer
        </h1>
        <p>
          Get in touch with Ashwin Chandrasekar (Ashhhh) for web development
          projects, UI/UX design services, and creative digital solutions.
          Available for freelance work, collaborations, and innovative projects.
        </p>
        <p>
          Contact me via email at its.ashwin.23@gmail.com or call (+91)
          8248669086. I&apos;m passionate about creating exceptional digital
          experiences and would love to discuss your project requirements.
        </p>
        <p>
          Ashhhh creative developer and designer available for hire. Let&apos;s
          work together to bring your digital vision to life with modern web
          technologies and innovative design solutions.
        </p>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-8">
            Let&apos;s Talk
          </h1>

          <p className="text-xl text-gray-700 mb-12">
            Got a project in mind? I&apos;d love to hear about it. Let&apos;s
            create something amazing together.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-black mb-6">
                Get in touch
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-black mb-2">Email</h3>
                    <p className="text-gray-700">its.ashwin.23@gmail.com</p>
                    <p className="text-sm text-gray-500">
                      I&apos;ll get back to you within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-black mb-2">Phone</h3>
                    <p className="text-gray-700">(+91) 8248669086</p>
                    <p className="text-sm text-gray-500">
                      Available for calls during business hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-black mb-2">
                      Location
                    </h3>
                    <p className="text-gray-700">India</p>
                    <p className="text-sm text-gray-500">
                      Available for remote work worldwide
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-bold text-black mb-4">
                  Connect with me
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/Its-SuperNova"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
                  >
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com/in/ashwin-chandrasekar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
                  >
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com/ashwin_chandrasekar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
                  >
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-black mb-6">
                What I can help you with
              </h2>

              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-black mb-2">Web Development</h3>
                  <p className="text-gray-700 text-sm">
                    Full-stack web applications, e-commerce sites, and custom
                    web solutions
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-black mb-2">UI/UX Design</h3>
                  <p className="text-gray-700 text-sm">
                    User interface design, user experience optimization, and
                    interactive prototypes
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-black mb-2">
                    Frontend Development
                  </h3>
                  <p className="text-gray-700 text-sm">
                    React, Next.js, TypeScript, and modern frontend technologies
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-black mb-2">
                    Creative Solutions
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Innovative digital experiences, animations, and creative web
                    solutions
                  </p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-black text-white rounded-lg">
                <h3 className="text-lg font-bold mb-2">
                  Ready to start your project?
                </h3>
                <p className="text-sm mb-4">
                  Let&apos;s discuss your ideas and create something amazing
                  together.
                </p>
                <a
                  href="mailto:its.ashwin.23@gmail.com"
                  className="inline-block bg-white text-black px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  Start a conversation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
