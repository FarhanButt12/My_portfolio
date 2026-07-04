import React from "react";

export default function ResumePrintView() {
  return (
    <div
      id="resume-print-view"
      className="hidden print:block p-8 bg-white text-black font-sans max-w-[800px] mx-auto text-xs leading-relaxed"
    >
      {/* Header */}
      <div className="text-center border-b border-gray-300 pb-3 mb-4">
        <h1 className="text-2xl font-bold uppercase tracking-wide text-gray-800">
          Muhammad Farhan Mukhtar Butt
        </h1>
        <p className="text-sm font-semibold text-gray-600 mt-1">
          Computer Science Student | App & Web Developer | ML & AI Enthusiast
        </p>
        <div className="flex justify-center flex-wrap gap-4 mt-2 text-[10px] text-gray-500">
          <span>📍 Gujrat, Pakistan</span>
          <span>📞 +92 311 7769001</span>
          <span>✉️ farhanbutt2402@gmail.com</span>
          <span>🔗 linkedin.com/in/farhan-butt-b95ab7337</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Left Column (Skills, Education, Certifications) */}
        <div className="col-span-1 border-r border-gray-200 pr-4 space-y-4">
          
          {/* Education */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-800 border-b border-gray-200 pb-1 mb-2">
              Education
            </h3>
            <div className="space-y-1">
              <p className="font-bold text-gray-700">BS Computer Science</p>
              <p className="text-gray-600">University of Gujrat</p>
              <p className="text-[10px] text-gray-500">2023 – 2027 (Expected)</p>
              <p className="text-[9px] text-gray-500 leading-relaxed mt-1">
                Focused on software engineering principles, algorithms, data structures, and mobile/web development architectures.
              </p>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-800 border-b border-gray-200 pb-1 mb-2">
              Technical Skills
            </h3>
            <div className="space-y-2">
              <div>
                <p className="font-bold text-gray-700 text-[10px]">Languages:</p>
                <p className="text-gray-600 text-[10px]">Dart, Python, C++, JavaScript, HTML5, CSS3</p>
              </div>
              <div>
                <p className="font-bold text-gray-700 text-[10px]">Frameworks & Tools:</p>
                <p className="text-gray-600 text-[10px]">Flutter, Firebase, MongoDB, Android Studio, VS Code, Git</p>
              </div>
              <div>
                <p className="font-bold text-gray-700 text-[10px]">ML Algorithms:</p>
                <p className="text-gray-600 text-[10px]">KNN, Naïve Bayes, SVM, Neural Networks</p>
              </div>
              <div>
                <p className="font-bold text-gray-700 text-[10px]">Areas of Interest:</p>
                <p className="text-gray-600 text-[10px]">App Development, Web Dev, Machine Learning</p>
              </div>
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-800 border-b border-gray-200 pb-1 mb-2">
              Soft Skills
            </h3>
            <ul className="list-disc pl-4 text-gray-600 text-[10px] space-y-1">
              <li>Team Collaboration & Pair Programming</li>
              <li>Problem-Solving & Analytical Thinking</li>
              <li>Time Management & Meeting Deadlines</li>
              <li>Adaptability & Fast Learning</li>
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-800 border-b border-gray-200 pb-1 mb-2">
              Certifications
            </h3>
            <ul className="list-disc pl-4 text-gray-600 text-[10px] space-y-1">
              <li>Complete Web Development Bootcamp (Udemy)</li>
              <li>Google AI + Google AI Essentials (Coursera)</li>
              <li>Google People Management Essentials (Coursera)</li>
            </ul>
          </div>

        </div>

        {/* Right Column (Objective, Projects, Focus, Activities) */}
        <div className="col-span-2 space-y-4">
          
          {/* Objective */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-800 border-b border-gray-200 pb-1 mb-2">
              Objective
            </h3>
            <p className="text-gray-600 text-[10px] leading-relaxed">
              CS undergraduate at the University of Gujrat with a passion for App and Web Development. Adept at building real-world solutions in ML, cross-platform apps, and web tech. Seeking professional opportunities to grow and contribute to an innovative engineering team.
            </p>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-800 border-b border-gray-200 pb-1 mb-2">
              Key Projects
            </h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between items-baseline">
                  <span className="font-bold text-gray-700 text-[11px]">
                    1. AI-Based Cyber Attack Detection System
                  </span>
                  <span className="text-[9px] text-gray-500">Python, Scikit-learn</span>
                </div>
                <ul className="list-disc pl-4 text-gray-600 text-[10px] mt-1 space-y-0.5">
                  <li>Designed and trained a multi-algorithm ML pipeline (KNN, Naïve Bayes, SVM, Neural Networks) to classify network traffic into DoS, DDoS, Phishing, and Normal.</li>
                  <li>Preprocessed and analysed network datasets; compared model performance.</li>
                  <li>Linked ML predictions to real-world attack patterns and threat vectors.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-baseline">
                  <span className="font-bold text-gray-700 text-[11px]">
                    2. Cross-Platform Expense Tracker App
                  </span>
                  <span className="text-[9px] text-gray-500">Flutter, Dart, Firebase</span>
                </div>
                <ul className="list-disc pl-4 text-gray-600 text-[10px] mt-1 space-y-0.5">
                  <li>Built a full CRUD app with category-wise spending analytics, advanced search filters, and alert notifications.</li>
                  <li>Integrated Firebase Cloud Firestore for real-time sync and Firebase Auth for secure login.</li>
                  <li>Designed a clean, responsive single-codebase layout targeting Android and iOS.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-baseline">
                  <span className="font-bold text-gray-700 text-[11px]">
                    3. UOG Official Website Redesign
                  </span>
                  <span className="text-[9px] text-gray-500">HTML5, CSS3, JavaScript</span>
                </div>
                <ul className="list-disc pl-4 text-gray-600 text-[10px] mt-1 space-y-0.5">
                  <li>Audited and redesigned multiple pages, fixing structural, visual, and content issues.</li>
                  <li>Improved navigation flow, layout consistency, and user experience.</li>
                  <li>Applied semantic HTML and CSS best practices for accessibility and clean code.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Development Focus */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-800 border-b border-gray-200 pb-1 mb-2">
              Development Focus
            </h3>
            <p className="text-gray-600 text-[10px]">
              Specializing in mobile application development (Flutter/Dart) and full-stack web development. Passionate about contributing to robust product architectures, participating in agile development workflows, and applying machine learning to real-world datasets.
            </p>
          </div>

          {/* Activities */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-800 border-b border-gray-200 pb-1 mb-2">
              Activities & Leadership
            </h3>
            <ul className="list-disc pl-4 text-gray-600 text-[10px] space-y-0.5">
              <li>Active participant in university societies (tech workshops, events, community drives).</li>
              <li>Competed in multiple university-level coding competitions.</li>
              <li>Led and delivered semester-long team projects (sprint planning, code reviews).</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}
