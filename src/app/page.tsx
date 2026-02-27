import Link from 'next/link';
import Image from 'next/image';
import { getPostsByCategory } from '@/utils/blogUtils';
import type { BlogListItem } from '@/types/blog';

type SocialLinkConfig = {
  href: string;
  label: string;
  icon: string;
};

type QuickFact = {
  label: string;
  value: string;
};

const SOCIAL_LINKS: SocialLinkConfig[] = [
  { href: 'https://github.com/GravityBoi', label: 'GitHub', icon: '/refinedgithub.svg' },
  { href: 'https://www.linkedin.com/in/max-neuwinger/', label: 'LinkedIn', icon: '/linkedin-round-svgrepo-com.svg' },
  { href: 'https://orcid.org/0009-0003-3930-700X', label: 'ORCID', icon: '/orcid.svg' },
];

function ProjectCard({ project }: { project: BlogListItem }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block rounded-xl border border-gray-100 bg-white p-6 transition-all duration-200 hover:border-gray-200 hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-wide text-gray-400">Project</p>
          <h3 className="mt-2 text-base font-semibold text-gray-900 transition-colors group-hover:text-blue-600">
            {project.title}
          </h3>
        </div>
      </div>
      <p className="mt-3 text-sm text-gray-500 line-clamp-3">{project.description}</p>
      {project.technologies && project.technologies.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span key={tech} className="rounded-full bg-gray-50 px-2.5 py-0.5 text-xs font-medium text-gray-500 ring-1 ring-gray-200">
              {tech}
            </span>
          ))}
        </div>
      )}
    </Link>
  );
}

function QuickInfoPanel({ facts }: { facts: QuickFact[] }) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-6">
      <h3 className="text-sm font-semibold text-gray-900">Currently</h3>
      <ul className="mt-4 space-y-3 text-sm">
        {facts.map(({ label, value }) => (
          <li key={label} className="flex items-start justify-between gap-4">
            <span className="text-gray-400">{label}</span>
            <span className="text-right font-medium text-gray-700">{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default async function HomePage() {
  const allProjects = getPostsByCategory('projects');
  const featuredProjects = allProjects.filter((project) => project.featured);
  const showcaseProjects = (featuredProjects.length > 0 ? featuredProjects : allProjects.slice(0, 3));
  const recentProjects = allProjects
    .filter((project) => !showcaseProjects.some((featured) => featured.slug === project.slug))
    .slice(0, 3);

  const quickFacts: QuickFact[] = [
    { label: 'Role', value: 'M.Sc. CS @ ETH Zurich' },
    { label: 'Location', value: 'Zurich' },
    { label: 'Current interest', value: 'ML in Bioinformatics' },
  ];

  return (
    <main className="min-h-screen bg-white">
      <section className="border-b border-gray-200 bg-white px-4 py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.7fr_1fr] lg:items-center">
          <div>
            <h1 className="mt-4 text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl md:text-7xl">
              <span className="font-serif">Max Neuwinger</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base text-gray-500 sm:text-lg">
              M.Sc. Computer Science at ETH Zurich focused on machine intelligence.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              {SOCIAL_LINKS.map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 transition-transform duration-200 hover:-translate-y-0.5 hover:border-gray-300"
                >
                  <Image src={icon} alt={`${label} icon`} width={26} height={26} priority />
                </a>
              ))}
              <Link
                href="/projects"
                className="inline-flex h-11 items-center rounded-full border border-gray-900 px-6 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
              >
                View work
              </Link>
            </div>
          </div>
          <QuickInfoPanel facts={quickFacts} />
        </div>
      </section>

      <section className="px-4 py-14 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">Featured projects</h2>
          </div>
          {showcaseProjects.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-3">
              {showcaseProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-12 text-center text-sm text-gray-500">
              No featured projects yet. Check back soon.
            </div>
          )}
          <div className="mt-8 text-center">
            <Link href="/projects" className="text-sm font-semibold text-blue-600 hover:underline">
              See all projects →
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
