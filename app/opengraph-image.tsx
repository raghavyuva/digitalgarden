import { ImageResponse } from 'next/og';

export const dynamic = 'force-static';
export const alt = 'raghavyuva — Senior AI Engineer, Vibe Engineer';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          backgroundColor: '#0a0a0a',
          padding: '60px 80px',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Top: avatar + domain */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '28px',
                color: 'white',
                fontWeight: 'bold',
              }}
            >
              R
            </div>
            <span
              style={{
                fontSize: '24px',
                color: '#a1a1aa',
                fontWeight: '500',
              }}
            >
              raghavyuva.in
            </span>
          </div>
        </div>

        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          <h1
            style={{
              fontSize: '56px',
              fontWeight: 'bold',
              color: '#fafafa',
              lineHeight: 1.15,
              margin: 0,
            }}
          >
            Raghavendra Bhat
          </h1>
          <p
            style={{
              fontSize: '26px',
              color: '#a1a1aa',
              lineHeight: 1.4,
              margin: 0,
            }}
          >
            Senior AI Engineer · Vibe Engineer · Open-Source Builder
          </p>
          <p
            style={{
              fontSize: '22px',
              color: '#71717a',
              lineHeight: 1.4,
              margin: 0,
              maxWidth: '900px',
            }}
          >
            Creator of Nixopus (1300+ stars) and LucaMail. Infrastructure, AI, and product engineering.
          </p>
        </div>

        {/* Bottom: tech tags */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            flexWrap: 'wrap',
          }}
        >
          {['Go', 'Next.js', 'Docker', 'Rust', 'Linux'].map((tag, index) => (
            <span
              key={index}
              style={{
                fontSize: '16px',
                color: '#8b5cf6',
                backgroundColor: 'rgba(139, 92, 246, 0.1)',
                padding: '8px 16px',
                borderRadius: '9999px',
                border: '1px solid rgba(139, 92, 246, 0.2)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Gradient accent */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, #6366f1 0%, #8b5cf6 50%, #a78bfa 100%)',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
