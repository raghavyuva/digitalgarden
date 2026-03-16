import Link from 'next/link';
import { getDefaultMetadata } from '@/lib/seo';
import { AnalyticsTracker } from '@/components/AnalyticsTracker';
import { getAllPosts } from '@/lib/blog';
import { getProjects } from '@/lib/projects';
import { filterDrafts } from '@/lib/plugins/drafts';
import type { Metadata } from 'next';

export const metadata: Metadata = getDefaultMetadata();

export default function Home() {
  const recentPosts = filterDrafts(getAllPosts()).slice(0, 3);
  const featuredProjects = getProjects().slice(0, 3);

  return (
    <main className="space-y-10 text-xxs">
      <AnalyticsTracker
        contentType="page"
        contentTitle="Home"
        contentSlug="home"
      />

      {/* Identity */}
      <article className="animate-fade-in space-y-4">
        <div className="flex items-center gap-4">
          <img
            src="/images/raghavyuva-avatar.jpg"
            alt="Raghavendra Bhat"
            width={64}
            height={64}
            className="rounded-full"
            style={{ border: '2px solid var(--color-border)' }}
          />
          <h1 className="text-sm mb-0">Raghavendra Bhat</h1>
        </div>
        <p className="text-xxs" style={{ color: 'var(--color-muted-foreground)' }}>
          Senior AI Engineer. Vibe Engineer. Open-source builder. Creator of{' '}
          <a href="https://nixopus.com" target="_blank" rel="noopener noreferrer">Nixopus</a>{' '}
          and{' '}
          <a href="https://github.com/raghavyuva/LucaMail" target="_blank" rel="noopener noreferrer">LucaMail</a>.
        </p>
        <p style={{ color: 'var(--color-muted-foreground)' }}>
          I build infrastructure tools that let developers deploy like Vercel while owning their servers.
          Nixopus has grown to 1300+ stars and 500+ beta users — entirely open-source, zero lock-in.
          I write Go and Next.js by day, think about self-hosting and clean abstractions at night.
        </p>
      </article>

      {/* Now */}
      <section className="animate-fade-up" style={{ animationDelay: '80ms' }}>
        <h2 className="text-xs font-medium mb-2" style={{ color: 'var(--color-foreground)' }}>Now</h2>
        <ul className="space-y-1" style={{ color: 'var(--color-muted-foreground)' }}>
          <li>Building <a href="https://nixopus.com" target="_blank" rel="noopener noreferrer">Nixopus</a> — one-click deploys, built-in terminal, file manager, Caddy reverse proxy, 150+ extensions</li>
          <li>Writing about DevOps, Docker workflows, and open-source engineering on <a href="https://dev.to/raghavyuva" target="_blank" rel="noopener noreferrer">dev.to</a></li>
          <li>Exploring Go libraries for server orchestration — see <a href="https://github.com/raghavyuva/caddygo" target="_blank" rel="noopener noreferrer">caddygo</a></li>
        </ul>
      </section>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <section className="animate-fade-up" style={{ animationDelay: '140ms' }}>
          <div className="flex items-baseline justify-between mb-3">
            <h2 className="text-xs font-medium" style={{ color: 'var(--color-foreground)' }}>Projects</h2>
            <Link href="/projects/" className="text-xxs" style={{ color: 'var(--color-muted-foreground)' }}>
              all projects &rarr;
            </Link>
          </div>
          <div className="space-y-3">
            {featuredProjects.map((project) => (
              <a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-opacity hover:opacity-80"
                style={{ textDecoration: 'none', borderBottom: 'none', paddingBottom: 0 }}
              >
                <div className="flex items-baseline justify-between gap-3">
                  <span style={{ color: 'var(--color-foreground)' }}>{project.title}</span>
                  <span className="text-xxs shrink-0" style={{ color: 'var(--color-muted-foreground)', fontFamily: 'var(--code-font-family)' }}>
                    {project.tech.slice(0, 3).join(' · ')}
                  </span>
                </div>
                <p className="text-xxs mt-0.5" style={{ color: 'var(--color-muted-foreground)' }}>
                  {project.description}
                </p>
              </a>
            ))}
          </div>
        </section>
      )}

      {/* Recent Writing */}
      {recentPosts.length > 0 && (
        <section className="animate-fade-up" style={{ animationDelay: '200ms' }}>
          <div className="flex items-baseline justify-between mb-3">
            <h2 className="text-xs font-medium" style={{ color: 'var(--color-foreground)' }}>Recent Writing</h2>
            <Link href="/writing/" className="text-xxs" style={{ color: 'var(--color-muted-foreground)' }}>
              all posts &rarr;
            </Link>
          </div>
          <div className="space-y-2">
            {recentPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blogs/${post.slug}`}
                className="flex items-baseline justify-between gap-4 transition-opacity hover:opacity-80"
                style={{ textDecoration: 'none', borderBottom: 'none', paddingBottom: 0 }}
              >
                <span style={{ color: 'var(--color-foreground)' }}>{post.title}</span>
                {post.date && (
                  <time
                    dateTime={post.date}
                    className="text-xxs shrink-0 tabular-nums"
                    style={{ color: 'var(--color-muted-foreground)', fontFamily: 'var(--code-font-family)' }}
                  >
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                  </time>
                )}
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Colophon */}
      <section className="animate-fade-up" style={{ animationDelay: '260ms' }}>
        <p style={{ color: 'var(--color-muted-foreground)' }}>
          I believe in software that you can own, inspect, and run on your own terms.
          If that resonates, <Link href="/about/">learn more about me</Link>,{' '}
          browse the <Link href="/projects/">full project list</Link>, or reach out at{' '}
          <a href="mailto:raghav@nixopus.com" className="transition-opacity hover:opacity-70">raghav@nixopus.com</a>.
        </p>
      </section>
    </main>
  );
}
