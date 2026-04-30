import Image from 'next/image';
import { Github, Linkedin, ExternalLink, BookOpen } from 'lucide-react';

const PROJECTS = [
  {
    title: "ML for Genomics: 1st Place Solution",
    description:
      "How do you beat 35 teams predicting cancer tumor microenvironments? A deep dive into my VAE-based winning solution for the ETH ML4G course project.",
    tags: ["Genomics", "Machine Learning", "PyTorch"],
    url: "https://open.substack.com/pub/maximusssssssss/p/ml-for-genomics-eth-course-winning",
  },
  {
    title: "How We Won Start Hack 2026",
    description:
      "A full breakdown of how our team won Start Hack 2026: the problem, our approach, and what we built in 36 hours.",
    tags: ["Hackathon", "AI", "Start Hack"],
    url: "https://open.substack.com/pub/maximusssssssss/p/how-we-won-start-hack-2026",
  },
];

const EVENTS = [
  {
    date: "Apr 28, 2026",
    title: "Psychedelics Research Lecture",
    location: "Zurich, CH",
    description:
      "My old lecturer from the psychedelics course I took in my first Master's semester presented his newest research. Super cool to see how that field is evolving.",
  },
  {
    date: "Apr 23, 2026",
    title: "Lightly x Mimic AI Event",
    location: "Zurich, CH",
    description:
      "A joint evening from two Zurich startups, Lightly and Mimic. Had a great time and finally met someone from Cradle in person, one of my favourite companies in the space.",
  },
  {
    date: "Apr 21, 2026",
    title: "Jump Trading Talk at ETH VIS",
    location: "Zurich, CH",
    description:
      "The ETH computer science student organisation hosted an evening talk with Jump Trading. I am not a quant finance person at all, but I had no idea how deep their ML work goes. Genuinely surprised and fascinated.",
  },
  {
    date: "Apr 14, 2026",
    title: "Student Builders & Founders Meetup",
    location: "Zurich, CH",
    description:
      "Spent the evening with student builders and founders. Good conversations.",
  },
  {
    date: "Mar 24, 2026",
    title: "AI Builders Event at Google",
    location: "Zurich, CH",
    description:
      "AI builders evening at the Google office. Absolutely loved it. Got to see Max Buckley again, which was a nice bonus.",
  },
  {
    date: "Mar 18-20, 2026",
    title: "Start Hack 2026",
    location: "St. Gallen, CH",
    description:
      "We won. Full write-up on Substack.",
  },
  {
    date: "Mar 14, 2026",
    title: "Gemini Hackathon Paris",
    location: "Paris, FR",
    description:
      "Built Sharelock over a weekend and walked away with second place and $30,000 in API credits. Paris was a nice backdrop for sleep deprivation.",
  },
  {
    date: "Feb 19, 2026",
    title: "Air Street Meetup Zurich",
    location: "Zurich, CH",
    description:
      "One of the best evenings I have been to. A cofounder of Black Forest Labs gave a talk, I spoke to people from OpenAI and Meta, and the energy in the room was something else.",
  },
  {
    date: "Jan 30, 2026",
    title: "Rapidata Office Party",
    location: "Zurich, CH",
    description:
      "The data startup Rapidata opened their new office and threw a proper party for it. Great talks, great people, great evening.",
  },
  {
    date: "Nov 6, 2025",
    title: "Student Builders Meetup",
    location: "Zurich, CH",
    description:
      "Another student builders event. Always a good crowd at these.",
  },
  {
    date: "...",
    title: "Earlier events",
    location: "",
    description:
      "I was not tracking things properly before this. There were more.",
  },
];

function ProjectCard({
  title,
  description,
  tags,
  url,
}: (typeof PROJECTS)[number]) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-5 lg:p-6 transition-all hover:border-blue-200 hover:shadow-sm"
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-sm lg:text-base font-semibold text-gray-900 group-hover:text-blue-600 transition-colors leading-snug">
          {title}
        </h3>
        <ExternalLink className="mt-0.5 h-4 w-4 shrink-0 text-gray-300 group-hover:text-blue-400 transition-colors" />
      </div>
      <p className="text-sm lg:text-[15px] text-gray-500 leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs lg:text-[13px] font-medium text-blue-600"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}

function EventTimeline() {
  return (
    <div className="relative pl-7 lg:pl-8">
      <div className="absolute left-0 top-2 bottom-2 w-px bg-blue-100" />
      <div className="space-y-8 lg:space-y-10">
        {EVENTS.map((event, i) => (
          <div key={i} className="relative">
            <div className="absolute -left-[1.8125rem] lg:-left-[2.0625rem] top-1.5 h-3 w-3 rounded-full border-2 border-blue-600 bg-white" />
            <span className="text-xs lg:text-sm font-semibold uppercase tracking-wide text-blue-600">
              {event.date}
            </span>
            <div className="mt-0.5 flex items-baseline gap-2">
              <h3 className="text-sm lg:text-base font-semibold text-gray-900">{event.title}</h3>
              {event.location && (
                <span className="text-xs lg:text-sm text-gray-400">{event.location}</span>
              )}
            </div>
            <p className="mt-1 text-sm lg:text-[15px] text-gray-500 leading-relaxed">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-6 lg:px-10 pb-28 lg:pb-36 pt-24 lg:pt-32">

      <section className="flex flex-col gap-10 sm:flex-row sm:items-start sm:gap-12 lg:gap-16">
        <div className="shrink-0">
          <Image
            src="/images/profile.webp"
            alt="Max Neuwinger"
            width={1200}
            height={1600}
            className="w-48 sm:w-60 lg:w-72 rounded-2xl object-cover shadow-sm"
            priority
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Max Neuwinger
          </h1>
          <p className="mt-2 text-base lg:text-lg font-medium text-blue-600">
            M.Sc. Computer Science · ETH Zürich
          </p>
          <div className="mt-5 space-y-4 text-base lg:text-[17px] leading-8 text-gray-600">
            <p>
              I&apos;m a Master&apos;s student at ETH Zürich studying Machine Intelligence, which sounds
              more put-together than it is. Honestly I have no idea what I&apos;m doing most of the
              time, but I&apos;m figuring it out as I go and you&apos;re welcome to follow along.
            </p>
            <p>
              My obsession with machine learning started on some side project in tenth grade, long
              before it was the thing everyone wanted on their CV. So yes, I was weird about this
              before it was cool. Right now what genuinely excites me is the intersection of advanced
              ML and the life sciences: proteins, genomics, cancer biology, that whole world.
              AlphaFold-type breakthroughs, better diagnostics, understanding disease at a molecular
              level. That, to me, is what this technology should be used for. Not for the slop
              flooding the internet right now.
            </p>
            <p>
              Before ETH I did my Bachelor&apos;s in Computer Science at FAU Erlangen-Nürnberg, with
              an exchange semester in Odense, Denmark that I thoroughly enjoyed. I love building
              things, solving problems, and the occasional rabbit hole that turns into a weeks-long
              detour.
            </p>
            <p>
              Outside of CS: I have been meditating for years and have a deep appreciation for Zen
              Buddhism. I have done retreats and spent time in a monastery, and I find the philosophy
              and the practice genuinely fascinating. If I could have dinner with anyone from history,
              it would be Alan Watts, the philosopher and writer, no contest. I am also a huge cold
              exposure and sauna person. Cold shower every morning, jumping into a cold lake whenever
              the opportunity arises. It genuinely does not get better than that.
            </p>
            <p>
              When I&apos;m not working, I&apos;m probably cooking, doing calisthenics
              (my favourite way to move), playing guitar, or riding my motorcycle around. And yapping.
              I yap a lot. If any of those things sound like your kind of thing, let's chat.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="https://github.com/GravityBoi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 hover:border-gray-900 hover:text-gray-900 transition-colors"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/max-neuwinger/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 hover:border-blue-600 hover:text-blue-600 transition-colors"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href="https://orcid.org/0009-0003-3930-700X"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ORCID"
              className="flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 hover:border-green-600 hover:text-green-600 transition-colors"
            >
              <BookOpen className="h-4 w-4" />
              ORCID
            </a>
          </div>
        </div>
      </section>

      <hr className="my-16 lg:my-20 border-gray-100" />

      <section>
        <h2 className="text-xl lg:text-2xl font-bold text-gray-900">Projects</h2>
        <p className="mt-3 text-base lg:text-[17px] leading-7 text-gray-600 max-w-2xl">
          I write technical and personal write-ups about my projects on Substack. Deep dives into
          what I built, what broke, and what I learned. Each card below links directly to the
          post.
        </p>
        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </section>

      <hr className="my-16 lg:my-20 border-gray-100" />

      <section>
        <h2 className="text-xl lg:text-2xl font-bold text-gray-900">Events & Community</h2>
        <p className="mt-3 text-base lg:text-[17px] leading-7 text-gray-600 max-w-2xl">
          Zürich has one of the most vibrant technical communities in Europe, and I try to make the
          most of it. I genuinely love exchanging ideas with others, whether that&apos;s at a hackathon,
          a conference, or an evening meetup. If you&apos;re heading to one of these events too, feel free
          to reach out. I&apos;m always happy to meet for a coffee or find each other there.
        </p>
        <div className="mt-8">
          <EventTimeline />
        </div>
      </section>

    </main>
  );
}
