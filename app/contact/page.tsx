import { PageHeader } from '@/components/PageHeader';
import { getPageMetadata } from '@/lib/seo';
import { AnalyticsTracker } from '@/components/AnalyticsTracker';
import { 
  Mail, 
  Github, 
  Linkedin, 
  Youtube
} from 'lucide-react';
import type { Metadata } from 'next';

// Brand icon components
function TwitterXIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}


function DevToIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm7.14-7.95h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.58 0-1.64-.01-1.92-.22l-.3-.19v-3.1l.31-.18c.26-.16.35-.17 1.8-.17h1.51v1.28zm3.41 3.45c-.17-.43-.64-.79-1-.79-.18 0-.26.03-.32.12l-.14.19c-.18.43-.01.81.39 1.02.39.2.85.1 1.07-.54z"/>
    </svg>
  );
}


const pageMetadata = {
  title: 'Contact',
  description: 'Get in touch with me.'
};

export const metadata: Metadata = getPageMetadata({
  title: pageMetadata.title,
  description: pageMetadata.description,
  path: '/contact/'
});

interface ContactItem {
  username: string;
  url: string;
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }> | React.ComponentType<{ size?: number }>;
}

const contactItems: ContactItem[] = [
  {
    username: 'raghav@nixopus.com',
    url: 'mailto:raghav@nixopus.com',
    icon: Mail
  },
  {
    username: 'raghavyuva',
    url: 'https://github.com/raghavyuva',
    icon: Github
  },
  {
    username: 'raghavyuva',
    url: 'https://www.linkedin.com/in/raghavyuva/',
    icon: Linkedin
  },
  {
    username: '@raghavyuva',
    url: 'https://x.com/raghavyuva',
    icon: TwitterXIcon
  },
  {
    username: '@nixopus',
    url: 'https://www.youtube.com/@nixopus',
    icon: Youtube
  },
  {
    username: 'raghavyuva',
    url: 'https://dev.to/raghavyuva',
    icon: DevToIcon
  }
];

export default function Contact() {
  return (
    <div className="space-y-4 text-xxs">
      <AnalyticsTracker
        contentType="page"
        contentTitle={pageMetadata.title}
        contentSlug="contact"
      />
      <PageHeader metadata={pageMetadata} hideTitle={true} />

      <div className="animate-fade-up" style={{ animationDelay: '50ms' }}>
        <p 
          className="text-xxs mb-4" 
          style={{ color: 'var(--color-muted-foreground)' }}
        >
          Currently available for freelance projects and consulting engagements. Response time is typically within 24-48 hours.
        </p>
      </div>

      <div className="animate-fade-up space-y-1" style={{ animationDelay: '100ms' }}>
        {contactItems.map((item) => {
          const Icon = item.icon;
          const isBrandIcon = Icon === DevToIcon || Icon === TwitterXIcon;
          
          return (
            <a
              key={item.url}
              href={item.url}
              target={item.url.startsWith('http') ? '_blank' : undefined}
              rel={item.url.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-2 transition-opacity hover:opacity-70"
              style={{
                color: 'var(--color-link)',
                textDecoration: 'none',
                borderBottom: 'none',
                paddingBottom: 0,
              }}
            >
              {isBrandIcon ? (
                <Icon size={14} />
              ) : (
                <Icon size={14} strokeWidth={2} />
              )}
              <span className="text-xxs">{item.username}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
