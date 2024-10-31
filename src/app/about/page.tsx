import Image from 'next/image';
import { BookOpen, Coffee, Code, Brain } from 'lucide-react';

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
              Computer Science Student & Technology Enthusiast
            </p>
          </div>

          {/* Bio Section */}
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed">
              Hi! I'm Max, a Master's student in Computer Science at ETH Zürich. I'm passionate about pushing the boundaries of technology and solving complex problems through innovative solutions.
            </p>
          </div>

          {/* Interests Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Code className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Software Development</h3>
              <p className="text-gray-600">Focusing on building scalable and efficient solutions using modern technologies.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Brain className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Machine Learning</h3>
              <p className="text-gray-600">Exploring the fascinating world of AI and its practical applications.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Coffee className="w-8 h-8 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Problem Solving</h3>
              <p className="text-gray-600">Tackling complex challenges with analytical thinking and creativity.</p>
            </div>
          </div>

          {/* Education Section */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Education</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold">MSc in Computer Science</h3>
                <p className="text-gray-600">ETH Zürich</p>
                <p className="text-gray-500">2023 - Present</p>
              </div>
              {/* Add your previous education here */}
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Get in Touch</h2>
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
    </main>
  );
}