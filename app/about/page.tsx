import { PageHeader } from '@/components/PageHeader';
import { getPageMetadata } from '@/lib/seo';
import { AnalyticsTracker } from '@/components/AnalyticsTracker';
import type { Metadata } from 'next';

const pageMetadata = {
  title: 'About',
  description: 'Learn more about me and what I do.'
};

export const metadata: Metadata = getPageMetadata({
  title: pageMetadata.title,
  description: pageMetadata.description,
  path: '/about/'
});

export default function About() {
  return (
    <div className="space-y-6 text-xxs">
      <AnalyticsTracker
        contentType="page"
        contentTitle={pageMetadata.title}
        contentSlug="about"
      />
      <PageHeader metadata={pageMetadata} hideTitle={true} />

      <section
        className="prose animate-fade-up"
        style={{ animationDelay: '100ms' }}
      >
        <div className="flex items-center gap-4 mb-6">
          <img
            src="/images/raghavyuva-avatar.jpg"
            alt="Raghavendra Bhat"
            width={80}
            height={80}
            className="rounded-full"
            style={{ border: '2px solid var(--color-border)' }}
          />
          <div>
            <h2 className="text-sm mb-0" style={{ marginTop: 0 }}>Raghavendra Bhat</h2>
            <p className="text-xxs mb-0" style={{ color: 'var(--color-muted-foreground)', marginTop: '0.25rem' }}>Senior AI Engineer. Vibe Engineer.</p>
          </div>
        </div>

        <h2 className="text-sm">Background</h2>
        <p className="" style={{ color: 'var(--color-muted-foreground)' }}>
          I am a Senior AI Engineer, Vibe Engineer, and systems-level thinker who has been deep in Linux, open-source infrastructure, and product engineering for over seven years. I build tools that give developers real ownership of their stack — from{' '}
          <a href="https://nixopus.com" target="_blank" rel="noopener noreferrer">Nixopus</a> (1300+ stars, open-source VPS management) to cross-platform apps like{' '}
          <a href="https://github.com/raghavyuva/LucaMail" target="_blank" rel="noopener noreferrer">LucaMail</a>.
        </p>

        <h2 className="text-sm">Linux & Open-Source Roots</h2>
        <p className="" style={{ color: 'var(--color-muted-foreground)' }}>
          I have worked closely with the{' '}
          <a href="https://os-sci.com" target="_blank" rel="noopener noreferrer">Open Source Science Foundation (OS-SCi)</a>{' '}
          on Linux systems and contributed to{' '}
          <a href="https://lomiri.com" target="_blank" rel="noopener noreferrer">Lomiri</a> — the convergent GNU/Linux operating environment (formerly Unity 8) maintained by UBports. Lomiri powers phones, tablets, and desktops with a single open-source codebase built on Qt, QML, Mir, and Wayland.
        </p>
        <p className="" style={{ color: 'var(--color-muted-foreground)' }}>
          I have guided people through Debian packaging workflows, mentored contributors on how distro packaging pipelines work, and spent years across multiple Linux distributions — Ubuntu, Debian, Arch, Fedora, Alpine, and NixOS. I am comfortable at every layer of the stack, from kernel-adjacent tooling to desktop environments.
        </p>

        <h2 className="text-sm">Infrastructure & Virtualization</h2>
        <p className="" style={{ color: 'var(--color-muted-foreground)' }}>
          Infrastructure is where I thrive. My hands-on experience spans containerization (Docker, LXC/LXD, Podman), virtualization (KVM/QEMU, Multipass), reverse proxies (Caddy, Nginx, Traefik), and orchestration (Docker Compose, Swarm). I have built CI/CD pipelines with GitHub Actions, set up self-hosted monitoring stacks, and designed zero-downtime deployment strategies for production systems.
        </p>
        <p className="" style={{ color: 'var(--color-muted-foreground)' }}>
          Nixopus itself is a product of this depth — it bundles Docker orchestration, Caddy reverse proxy, a built-in terminal, file manager, and 150+ extensions into a single self-hosted platform.
        </p>

        <h2 className="text-sm">AI-Native Engineering</h2>
        <p className="" style={{ color: 'var(--color-muted-foreground)' }}>
          I build with AI, not just on top of it. From LLM integrations and retrieval-augmented generation to AI-powered product features and intelligent agents, I design systems where AI is a first-class component — not a bolted-on afterthought. I think about prompt engineering, model orchestration, and how to make AI features reliable at scale.
        </p>

        <h2 className="text-sm">Hackathons & Competitions</h2>
        <p className="" style={{ color: 'var(--color-muted-foreground)' }}>
          I thrive under pressure — hackathons shaped how I think, build, and ship fast. I was building infrastructure tools before I even called myself an infrastructure engineer.
        </p>
        <div className="space-y-4 mt-3">
          <div>
            <div className="flex items-baseline justify-between gap-2">
              <strong style={{ color: 'var(--color-foreground)' }}>Winner — 24-Hour Hackathon @NHCE</strong>
              <span className="text-xxs shrink-0" style={{ fontFamily: 'var(--code-font-family)' }}>2022</span>
            </div>
            <p className="mt-0.5" style={{ color: 'var(--color-muted-foreground)' }}>
              Built a smart infrastructure monitoring system with an analytics dashboard, alerting, and live container status updates — in 24 hours. The seed of what would eventually become Nixopus.
            </p>
          </div>
          <div>
            <div className="flex items-baseline justify-between gap-2">
              <strong style={{ color: 'var(--color-foreground)' }}>1st Prize — 24-Hour Hackathon @BMSE</strong>
              <span className="text-xxs shrink-0" style={{ fontFamily: 'var(--code-font-family)' }}>2022</span>
            </div>
            <p className="mt-0.5" style={{ color: 'var(--color-muted-foreground)' }}>
              Reimagined the Hestia Control Panel UI. Built a modern, responsive server administration interface with React, Tailwind CSS, Three.js, and Chart.js — real-time data visualization and intuitive controls.
            </p>
          </div>
          <div>
            <div className="flex items-baseline justify-between gap-2">
              <strong style={{ color: 'var(--color-foreground)' }}>1st Prize — Inter College Debugging Competition</strong>
              <span className="text-xxs shrink-0" style={{ fontFamily: 'var(--code-font-family)' }}>2022</span>
            </div>
            <p className="mt-0.5" style={{ color: 'var(--color-muted-foreground)' }}>
              Beat 60+ participants across multiple colleges in real-time bug tracing, logic refactoring, and performance fixes under time pressure.
            </p>
          </div>
          <div>
            <div className="flex items-baseline justify-between gap-2">
              <strong style={{ color: 'var(--color-foreground)' }}>Best Project — Inter College Project Exhibition</strong>
              <span className="text-xxs shrink-0" style={{ fontFamily: 'var(--code-font-family)' }}>2023</span>
            </div>
            <p className="mt-0.5" style={{ color: 'var(--color-muted-foreground)' }}>
              Won the best project award at the Inter College Project Exhibition.
            </p>
          </div>
        </div>

        <h2 className="text-sm">What I Use</h2>
        <div className="space-y-1" style={{ color: 'var(--color-muted-foreground)' }}>
          <p><strong style={{ color: 'var(--color-foreground)' }}>Languages:</strong> Rust, Go, TypeScript, Python, Bash</p>
          <p><strong style={{ color: 'var(--color-foreground)' }}>Frontend:</strong> Next.js, React, Tailwind CSS, Framer Motion, React Native, Expo</p>
          <p><strong style={{ color: 'var(--color-foreground)' }}>Desktop:</strong> Tauri, Electron</p>
          <p><strong style={{ color: 'var(--color-foreground)' }}>Backend:</strong> Hono.js, tRPC, Prisma, Zod, WebSockets</p>
          <p><strong style={{ color: 'var(--color-foreground)' }}>Infrastructure:</strong> Docker, LXC/LXD, Podman, KVM/QEMU, Terraform, Ansible, Caddy, Nginx, Traefik, GitHub Actions</p>
          <p><strong style={{ color: 'var(--color-foreground)' }}>Cloud:</strong> AWS, Supabase</p>
          <p><strong style={{ color: 'var(--color-foreground)' }}>Data:</strong> PostgreSQL, MySQL, Redis, SQLite</p>
          <p><strong style={{ color: 'var(--color-foreground)' }}>Linux:</strong> Ubuntu, Debian, Arch, Fedora, Alpine, NixOS</p>
          <p><strong style={{ color: 'var(--color-foreground)' }}>AI:</strong> LLM integration, RAG pipelines, agent frameworks, prompt engineering</p>
        </div>

        <h2 className="text-sm">Get in Touch</h2>
        <p className="" style={{ color: 'var(--color-muted-foreground)' }}>
          Whether you want to talk about Linux packaging, infrastructure automation, open-source strategy, or just nerd out about self-hosting — I am always up for it.
        </p>

        <div className="flex flex-wrap gap-4 mt-4">
          <a
            href="https://github.com/raghavyuva"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-150"
          >
            GitHub
          </a>
          <a
            href="https://x.com/raghavyuva"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-150"
          >
            Twitter
          </a>
          <a
            href="https://linkedin.com/in/raghavyuva"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-150"
          >
            LinkedIn
          </a>
          <a href="mailto:raghav@nixopus.com" className="transition-colors duration-150">
            Email
          </a>
          <span style={{ color: 'var(--color-muted-foreground)' }}>·</span>
          <a href="/feed.xml" className="transition-colors duration-150">
            RSS
          </a>
          <a href="/atom.xml" className="transition-colors duration-150">
            Atom
          </a>
          <a href="/feed.json" className="transition-colors duration-150">
            JSON
          </a>
        </div>
      </section>
    </div>
  );
}
