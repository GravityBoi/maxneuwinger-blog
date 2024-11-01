import { BookOpen, Coffee, Code, Brain, Award, School, FlaskConical } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="w-full px-4 py-20">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header Section */}
          <div className="text-center space-y-6">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h1>
            <p className="text-xl text-gray-600">
              Computer Science Student & AI Enthusiast
            </p>
          </div>

          {/* Bio Section */}
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed">
              Hi! I&apos;m Max, a Master&apos;s student in Computer Science at ETH Zürich, specializing in Machine Intelligence with a minor in Data Management Systems. My journey in programming began in 8th grade, where I taught myself the basics and quickly became fascinated with Neural Networks. This early passion led me to pursue advanced studies in Computer Science and AI.
            </p>
          </div>

          {/* Highlights Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Brain className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">AI & Machine Learning</h3>
              <p className="text-gray-600">Specialized in Computer Vision and Deep Learning, with hands-on experience in PyTorch and YOLO models.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Code className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Software Development</h3>
              <p className="text-gray-600">Proficient in Python, C++, and various web technologies, focusing on scalable solutions.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <FlaskConical className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Research Experience</h3>
              <p className="text-gray-600">Active in academic research, including co-authoring papers and participating in international competitions.</p>
            </div>
          </div>

          {/* Education & Achievement Section */}
          <div className="bg-white p-8 rounded-lg shadow-md space-y-8">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <School className="w-6 h-6" />
              Education & Achievements
            </h2>
            
            {/* Education */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold border-b pb-2">Education</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold">MSc in Computer Science</h4>
                  <p className="text-gray-600">ETH Zürich | 2024 - 2026</p>
                  <p className="text-gray-500">Major in Machine Intelligence, Minor in Data Management Systems</p>
                  <ul className="text-gray-600 list-disc ml-4 mt-2">
                    <li>Relevant Coursework: Probabilistic AI, Algorithms Lab, Big Data</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold">Exchange Semester</h4>
                  <p className="text-gray-600">University of Southern Denmark (SDU) | Winter 2023</p>
                  <p className="text-gray-500">Erasmus Scholarship Exchange Semester in Odense, Denmark</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold">BSc in Computer Science</h4>
                  <p className="text-gray-600">Friedrich-Alexander University Erlangen-Nürnberg | 2021 - 2024</p>
                  <ul className="text-gray-600 list-disc ml-4 mt-2">
                    <li>Co-authored research paper with Prof. Dr. Riehle on programming mistakes in Data Engineering</li>
                    <li>Key courses: Algorithms and Data Structures, Software Development in Large Projects</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Professional Experience */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold border-b pb-2">Professional Experience</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold">Student Researcher</h4>
                  <p className="text-gray-600">Fraunhofer IISB | 2024</p>
                  <ul className="text-gray-600 list-disc ml-4 mt-2">
                    <li>Developed website for remote control and livestreaming of Evolonic drone base station</li>
                    <li>Technologies: Python, React, MQTT, Express.js, Authentication</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold">Computer Vision Specialist</h4>
                  <p className="text-gray-600">Evolonic | 2021 - 2024</p>
                  <ul className="text-gray-600 list-disc ml-4 mt-2">
                    <li>Enhanced YOLO-based smoke detection models for early forest fire detection</li>
                    <li>Developed award-winning ground-target detection models</li>
                    <li>Implemented multi-fire tracking system for simultaneous monitoring</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Awards & Recognition */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold border-b pb-2">Awards & Recognition</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold">German Academic Scholarship Foundation</h4>
                  <p className="text-gray-600">2024 - 2026</p>
                  <ul className="text-gray-600 list-disc ml-4 mt-2">
                    <li>Prestigious scholarship awarded to top 0.4% of German students</li>
                    <li>Attended intensive NLP course in Ljubljana during summer academy</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold">FAU Unitag Program</h4>
                  <p className="text-gray-600">2019 - 2020</p>
                  <ul className="text-gray-600 list-disc ml-4 mt-2">
                    <li>Selected for elite Bavaria-wide program for top-performing students</li>
                    <li>Engaged in advanced research methodologies and analytical skills development</li>
                    <li>Personal mentoring from University President Prof. Dr. Joachim Hornegger</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center space-y-6">
            <a 
                href="/cv.pdf" 
                target="_blank"
                className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-700 hover:to-purple-700 transform transition-all duration-200 hover:scale-105 shadow-md hover:shadow-lg"
              >
                <Award className="w-5 h-5 mr-2" />
                View Full CV
            </a>

            <h2 className="text-2xl font-bold text-gray-800">Let&apos;s Connect</h2>
            <div className="flex flex-col items-center gap-6">
              <div className="flex justify-center gap-6">
                <a
                  href="https://github.com/GravityBoi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  aria-label="GitHub"
                >
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/max-neuwinger/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="https://orcid.org/0009-0003-3930-700X"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  aria-label="ORCID"
                >
                  <BookOpen className="w-8 h-8" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}