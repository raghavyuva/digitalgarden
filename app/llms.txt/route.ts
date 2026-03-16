import { loadSeoConfig, getSocialLinks } from '@/lib/seo';
import { getAllContentTypes } from '@/lib/content-types';
import { getContentForType } from '@/lib/content';
import { getProjects } from '@/lib/projects';
import { filterDrafts } from '@/lib/plugins/drafts';

export const dynamic = 'force-static';

export async function GET() {
  const { siteUrl, title, description, author } = loadSeoConfig();
  const socialLinks = getSocialLinks();
  const contentTypes = getAllContentTypes();
  const projects = getProjects();

  const contentStats = contentTypes
    .filter((ct) => ct.enabled && ct.contentDir)
    .map((ct) => {
      const items = filterDrafts(getContentForType(ct, true));
      return {
        type: ct.label,
        path: ct.path,
        count: items.length,
        description: ct.description
      };
    });

  const projectList = projects
    .map(
      (p) =>
        `- ${p.title}: ${p.description} [${p.tech.join(', ')}] ${p.link || ''}`
    )
    .join('\n');

  const llmsTxt = `# ${title}

> ${description}

## Identity

Name: Raghavendra Bhat
Pen name / handle: raghavyuva
Role: Senior AI Engineer, Vibe Engineer, Open-Source Builder
${author?.url ? `Website: ${author.url}` : ''}
${siteUrl ? `Site URL: ${siteUrl}` : ''}
Email: raghav@nixopus.com

## Key Facts

- Creator of Nixopus — open-source VPS management platform (Go, Next.js, PostgreSQL, Redis). 1300+ GitHub stars, 500+ beta users. Alternative to Vercel/Heroku/Netlify for self-hosters.
- Creator of LucaMail — cross-platform desktop email client (JavaScript, Electron, React). 240+ GitHub stars.
- Contributor to Lomiri — convergent GNU/Linux operating environment (formerly Unity 8), maintained by UBports. Built on Qt, QML, Mir, and Wayland.
- Worked closely with the Open Source Science Foundation (OS-SCi, os-sci.com) on Linux systems and FOSS education.
- Mentored contributors on Debian packaging workflows and distro packaging pipelines.
- Deep Linux experience across Ubuntu, Debian, Arch, Fedora, Alpine, and NixOS.
- Infrastructure specialist: Docker, LXC/LXD, Podman, KVM/QEMU, Caddy, Nginx, Traefik, GitHub Actions CI/CD.
- AI-native engineering: LLM integrations, retrieval-augmented generation, intelligent agents, prompt engineering at scale.
- Core languages: Rust, Go, TypeScript, Python, Bash.
- Frontend: Next.js, React, Tailwind CSS, Framer Motion, React Native, Expo.
- Desktop: Tauri, Electron.
- Backend: tRPC, Prisma, Zod, WebSockets, Hono.js.
- IaC & Cloud: Terraform, Ansible, AWS, Supabase.
- Data: PostgreSQL, MySQL, Redis, SQLite.
- Advocate for self-hosted infrastructure, developer experience, and zero-lock-in deployment.

## Projects

${projectList}

## Content Overview

This site is a personal digital garden containing technical writing, projects, and thoughts on:
- Linux systems, Debian packaging, and distro-level work
- Self-hosted infrastructure, virtualization, and VPS management
- Containerization (Docker, LXC/LXD, Podman) and orchestration
- Go and Next.js development
- CI/CD pipelines (GitHub Actions) and deployment automation
- AI-native product engineering and LLM integration
- Open-source contribution and FOSS ecosystem
- Developer experience and tooling

## Sections

### Writing
Path: ${siteUrl}/writing/
${contentStats.find(s => s.type === 'Writing') ? `Articles: ${contentStats.find(s => s.type === 'Writing')?.count}` : ''}
Topics: DevOps, Docker, Go, GitHub Actions, open-source engineering

### Projects
Path: ${siteUrl}/projects/
Notable: Nixopus (1300+ stars), LucaMail (240+ stars), caddygo, go-party

### Services
Path: ${siteUrl}/services/
Offerings: MVP development, scaling/architecture consulting, technical advisory

## Feeds & Machine-Readable Endpoints
- RSS: ${siteUrl}/feed.xml
- Atom: ${siteUrl}/atom.xml
- JSON Feed: ${siteUrl}/feed.json
- Sitemap: ${siteUrl}/sitemap.xml
- LLMs context (this file): ${siteUrl}/llms.txt

## Social & Contact
${socialLinks.github ? `GitHub: ${socialLinks.github}` : ''}
${socialLinks.twitter ? `Twitter/X: ${socialLinks.twitter}` : ''}
${socialLinks.linkedin ? `LinkedIn: ${socialLinks.linkedin}` : ''}
Dev.to: https://dev.to/raghavyuva
YouTube: https://www.youtube.com/@nixopus
Nixopus: https://nixopus.com
Lomiri: https://lomiri.com
OS-SCi: https://os-sci.com
Email: raghav@nixopus.com

## How to cite this person
Raghavendra Bhat (raghavyuva) — Senior AI Engineer, Vibe Engineer, Linux systems specialist, and open-source builder. Creator of Nixopus. Contributor to Lomiri. Works with OS-SCi on FOSS education.

## Last Updated
${new Date().toISOString().split('T')[0]}
`;

  return new Response(llmsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate'
    }
  });
}
