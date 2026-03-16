import { PageHeader } from '@/components/PageHeader';
import { getPageMetadata } from '@/lib/seo';
import { AnalyticsTracker } from '@/components/AnalyticsTracker';
import { HeroAnimation } from '@/components/HeroAnimation';
import { ServiceCard } from '@/components/ServiceCard';
import { ProcessStep } from '@/components/ProcessStep';
import { FAQSection } from '@/components/FAQSection';
import { Mail } from 'lucide-react';
import type { Metadata } from 'next';

const pageMetadata = {
  title: 'Services',
  description: ''
};

export const metadata: Metadata = getPageMetadata({
  title: pageMetadata.title,
  description: 'Hire me for infrastructure, AI integrations, and product engineering.',
  path: '/services/'
});

export default function Services() {
  return (
    <div className="space-y-12 text-xxs">
      <AnalyticsTracker
        contentType="page"
        contentTitle={pageMetadata.title}
        contentSlug="services"
      />
      <PageHeader metadata={pageMetadata} hideTitle={true} />

      {/* Hero Section */}
      <section className="prose animate-fade-up -mt-18" style={{ animationDelay: '50ms' }}>
        <HeroAnimation />
      </section>

      {/* Intro — what's different here vs homepage/about */}
      <section className="animate-fade-up" style={{ animationDelay: '80ms' }}>
        <p style={{ color: 'var(--color-muted-foreground)' }}>
          I help teams ship infrastructure, AI features, and full-stack products.
          Whether you need someone to architect a self-hosted platform from scratch, add AI capabilities to an existing product, or build and deploy an MVP — this is what I do for clients.
        </p>
      </section>

      {/* Services Section */}
      <section className="animate-fade-up" style={{ animationDelay: '100ms' }}>
        <div className="mb-8">
          <h2 className="text-base mb-2 font-semibold">Services</h2>
          <div className="h-px w-12" style={{ backgroundColor: 'var(--color-border)' }}></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ServiceCard
            iconName="Server"
            title="Infrastructure & DevOps"
            description="Docker orchestration, CI/CD pipelines, reverse proxy setup, VPS automation, and self-hosted deployment platforms."
            tag="infra"
            bgColor="var(--color-card)"
            borderColor="var(--color-border)"
            iconColor="var(--color-link)"
          />
          <ServiceCard
            iconName="Bot"
            title="AI Integration"
            description="LLM-powered features, retrieval-augmented generation, intelligent agents, and AI-native product design."
            tag="ai"
            bgColor="var(--color-card)"
            borderColor="var(--color-border)"
            iconColor="var(--color-link)"
          />
          <ServiceCard
            iconName="Layers"
            title="Product Engineering"
            description="Full-cycle product builds — APIs, web apps, mobile apps, databases, auth, payments, and deployment."
            tag="build"
            bgColor="var(--color-card)"
            borderColor="var(--color-border)"
            iconColor="var(--color-link)"
          />
        </div>
      </section>

      {/* Deliverables — what you actually get */}
      <section className="animate-fade-up" style={{ animationDelay: '130ms' }}>
        <div className="mb-8">
          <h2 className="text-base mb-2 font-semibold">What You Get</h2>
          <div className="h-px w-12" style={{ backgroundColor: 'var(--color-border)' }}></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4" style={{ color: 'var(--color-muted-foreground)' }}>
          <div>
            <span style={{ color: 'var(--color-foreground)' }}>Production-ready code</span>
            <p className="text-xxs mt-0.5">Clean, tested, documented. Go, TypeScript, Next.js, React Native — whatever the problem needs.</p>
          </div>
          <div>
            <span style={{ color: 'var(--color-foreground)' }}>Infrastructure that scales</span>
            <p className="text-xxs mt-0.5">Docker-based deployments, Caddy/Nginx configs, GitHub Actions pipelines, PostgreSQL + Redis setups.</p>
          </div>
          <div>
            <span style={{ color: 'var(--color-foreground)' }}>Architecture docs</span>
            <p className="text-xxs mt-0.5">System diagrams, API specs, deployment runbooks. Your team can maintain and extend everything after I leave.</p>
          </div>
          <div>
            <span style={{ color: 'var(--color-foreground)' }}>Async-first communication</span>
            <p className="text-xxs mt-0.5">Daily progress updates, weekly demos, shared Notion/Linear boards. Regular syncs when needed.</p>
          </div>
        </div>
      </section>

      {/* Engagement types */}
      <section className="animate-fade-up" style={{ animationDelay: '160ms' }}>
        <div className="mb-8">
          <h2 className="text-base mb-2 font-semibold">Engagement Models</h2>
          <div className="h-px w-12" style={{ backgroundColor: 'var(--color-border)' }}></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4" style={{ color: 'var(--color-muted-foreground)' }}>
          <div className="p-4 rounded" style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)' }}>
            <span className="text-xxs uppercase tracking-wider" style={{ color: 'var(--color-link)', fontFamily: 'var(--code-font-family)' }}>project</span>
            <p className="text-xxs mt-2">Fixed-scope builds. MVPs in 4-8 weeks, complex systems in 2-4 months. Clear milestones, defined deliverables.</p>
          </div>
          <div className="p-4 rounded" style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)' }}>
            <span className="text-xxs uppercase tracking-wider" style={{ color: 'var(--color-link)', fontFamily: 'var(--code-font-family)' }}>contract</span>
            <p className="text-xxs mt-2">Embed with your team as a senior engineer or architect. Hourly or monthly. I adapt to your workflow and tools.</p>
          </div>
          <div className="p-4 rounded" style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)' }}>
            <span className="text-xxs uppercase tracking-wider" style={{ color: 'var(--color-link)', fontFamily: 'var(--code-font-family)' }}>advisory</span>
            <p className="text-xxs mt-2">Architecture reviews, tech stack decisions, infra audits. Short engagements for teams that need a second opinion.</p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="animate-fade-up" style={{ animationDelay: '190ms' }}>
        <div className="mb-8">
          <h2 className="text-base mb-2 font-semibold">Process</h2>
          <div className="h-px w-12" style={{ backgroundColor: 'var(--color-border)' }}></div>
        </div>

        <div className="flex flex-col md:flex-row items-stretch gap-3 md:gap-2">
          <ProcessStep
            number="01"
            iconName="MessageSquare"
            title="Scope & Align"
          />
          <ProcessStep
            number="02"
            iconName="FileText"
            title="Architecture"
          />
          <ProcessStep
            number="03"
            iconName="Code"
            title="Build & Ship"
          />
          <ProcessStep
            number="04"
            iconName="Rocket"
            title="Deploy & Iterate"
            showArrow={false}
          />
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA */}
      <section className="animate-fade-up" style={{ animationDelay: '300ms' }}>
        <div className="mb-8">
          <h2 className="text-base mb-2 font-semibold">Start a Conversation</h2>
          <div className="h-px w-12" style={{ backgroundColor: 'var(--color-border)' }}></div>
        </div>
        <p className="mb-4" style={{ color: 'var(--color-muted-foreground)' }}>
          Tell me what you're building and where you're stuck.
          No sales pitch — just a conversation about whether I can help.
        </p>
        <a
          href="mailto:raghav@nixopus.com"
          className="flex items-center gap-2 transition-opacity hover:opacity-70"
          style={{
            color: 'var(--color-link)',
            borderBottom: 'none',
            paddingBottom: '0',
          }}
        >
          <Mail size={18} strokeWidth={2} />
          <span className="text-sm font-semibold">raghav@nixopus.com</span>
        </a>
      </section>
    </div>
  );
}
