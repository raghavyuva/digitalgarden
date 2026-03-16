import { getProjects } from '@/lib/projects';
import { PageHeader } from '@/components/PageHeader';
import { ProjectDescription } from '@/components/ProjectDescription';
import { getPageMetadata } from '@/lib/seo';
import { AnalyticsTracker } from '@/components/AnalyticsTracker';
import type { Metadata } from 'next';

const pageMetadata = {
  title: 'Projects',
  description: 'A selection of projects I have built and contributed to.'
};

export const metadata: Metadata = getPageMetadata({
  title: pageMetadata.title,
  description: pageMetadata.description,
  path: '/projects/'
});

export default function Projects() {
  const projects = getProjects();

  return (
    <div className="space-y-6 text-xxs">
      <AnalyticsTracker
        contentType="page"
        contentTitle={pageMetadata.title}
        contentSlug="projects"
      />
      <PageHeader metadata={pageMetadata} hideTitle={true} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <div className="flex items-start justify-between gap-2 mb-1.5">
              <h3 className="project-title">
                {project.title}
              </h3>
              {project.period && (
                <span className="project-period">{project.period}</span>
              )}
            </div>
            {project.description && (
              <ProjectDescription description={project.description} />
            )}
            <div className="project-tech">
              {project.tech && project.tech.map((tech) => (
                <span key={tech} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
            {project.roles && project.roles.length > 0 && (
              <div className="project-roles">
                {project.roles.join(', ')}
              </div>
            )}
          </a>
        ))}
      </div>

      <section className="pt-4 space-y-2">
        <p style={{ color: 'var(--color-muted-foreground)' }}>
          These are my public projects. I also work on several private and client projects
          across infrastructure, AI tooling, and full-stack applications that are not listed here.
        </p>
        <p style={{ color: 'var(--color-muted-foreground)' }}>
          Interested in what else I am building?{' '}
          <a href="mailto:raghav@nixopus.com">Get in touch</a> or find more on{' '}
          <a href="https://github.com/raghavyuva" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>.
        </p>
      </section>
    </div>
  );
}
