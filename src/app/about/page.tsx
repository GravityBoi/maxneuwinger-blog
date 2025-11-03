import { BookOpen, School, Github, Linkedin } from 'lucide-react';

type TimelineEntryProps = {
  title: string;
  institution: string;
  date: string;
  details: string[];
};

function TimelineEntry({ title, institution, date, details }: TimelineEntryProps) {
  return (
    <div className="border-l-2 border-gray-200 pl-4">
      <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
      <p className="font-medium text-gray-600">{institution}</p>
      <p className="mb-2 text-sm text-gray-500">{date}</p>
      <ul className="list-inside list-disc space-y-1 text-gray-700">
        {details.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="w-full px-4 py-20">
        <div className="mx-auto max-w-4xl space-y-16">
          <header className="space-y-4 text-center">
            <h1 className="text-5xl font-bold text-gray-900">About Me</h1>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              I&apos;m a Master&apos;s student at ETH Zürich specialising in Machine Intelligence.
              </p>
          </header>

          <section className="space-y-12 py-8">
            <div>
              <h3 className="mb-6 flex items-center gap-3 border-b pb-3 text-2xl font-semibold text-gray-900">
                <School className="h-6 w-6 text-gray-500" />
                Education
              </h3>
              <div className="space-y-8">
                <TimelineEntry
                  title="MSc in Computer Science"
                  institution="ETH Zürich"
                  date="2024 – 2027 (expected)"
                  details={[
                    'Major in Machine Intelligence with a minor in Data Management Systems.',
                  ]}
                />
                <TimelineEntry
                  title="Exchange Semester"
                  institution="University of Southern Denmark (SDU)"
                  date="Winter 2023"
                  details={[
                    'Erasmus Scholarship semester in Odense, Denmark.',
                  ]}
                />
                <TimelineEntry
                  title="BSc in Computer Science"
                  institution="FAU Erlangen-Nürnberg"
                  date="2021 – 2024"
                  details={[
                    'Thesis on numerical integration of local stiffness matrices on sparse grids in C++.',                  ]}
                />
              </div>
            </div>
          </section>

          <section className="space-y-6 border-t border-gray-100 pt-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900">Let&apos;s Connect</h2>
            <p className="text-lg text-gray-600">Feel free to reach out or explore recent work and writing.</p>
            <div className="flex items-center justify-center gap-6 pt-2">
              <a
                href="https://github.com/GravityBoi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 transition-colors duration-200 hover:text-gray-900"
                aria-label="GitHub"
              >
                <Github className="h-8 w-8" />
              </a>
              <a
                href="https://www.linkedin.com/in/max-neuwinger/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 transition-colors duration-200 hover:text-blue-600"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-8 w-8" />
              </a>
              <a
                href="https://orcid.org/0009-0003-3930-700X"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 transition-colors duration-200 hover:text-green-600"
                aria-label="ORCID"
              >
                <BookOpen className="h-8 w-8" />
              </a>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
