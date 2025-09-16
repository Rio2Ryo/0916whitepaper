'use client'

import Image from 'next/image'

export default function Hero() {
  const scrollToDetails = () => {
    const element = document.getElementById('project-overview')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const downloadWhitepaper = () => {
    const link = document.createElement('a')
    link.href = '/0912_whitepaper_ja.pdf'
    link.download = 'MOTHER_VEGETABLES_Whitepaper_JP.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="hero">
      {/* Background Image */}
      <div className="bg-wrap">
        <Image
          src="/hero-earth-regeneration-Dnk2z_VF.png"
          alt="Earth Regeneration"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="bg-overlay" />
      </div>

      {/* Content */}
      <div className="content">
        {/* Main Title */}
        <h1 className="title">
          <span className="title-accent">MOTHER VEGETABLES</span>
          <br />
          <span className="title-sub">PROJECT</span>
        </h1>

        {/* Subtitle */}
        <div className="subtitle">
          <p className="lead-1">地球最初の生命体による</p>
          <p className="lead-2">地球再生プロジェクト</p>

          <div className="desc">
            <p>35億年前の地球最初の生命体「マザーベジタブル」を世界各地に展開することで、</p>
            <p>CO₂を削減しながら人類と生物の健康を向上させる、</p>
            <p>
              作れば作るほど地球を良くしていく
              <span className="desc-accent">循環型システム</span>
            </p>
          </div>
        </div>

        {/* Statistics */}
        <div className="stats">
          <div className="stat-card">
            <div className="stat-number">700倍</div>
            <div className="stat-labels">
              <div className="stat-title">CO₂吸収効率</div>
              <div className="stat-sub">vs 天然芝</div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-number">24/7</div>
            <div className="stat-labels">
              <div className="stat-title">連続稼働</div>
              <div className="stat-sub">365日間</div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-number">8分野</div>
            <div className="stat-labels">
              <div className="stat-title">産業展開</div>
              <div className="stat-sub">グローバル</div>
            </div>
          </div>
        </div>

        {/* Version Badge */}
        <div className="version">
          <span className="version-badge">✨ Version 1.0.0 - 革命的環境技術</span>
        </div>

        {/* Action Buttons */}
        <div className="actions">
          <button onClick={scrollToDetails} className="btn btn-emerald">
            ▶ プロジェクト詳細を見る
          </button>
          <button
            onClick={() => document.getElementById('token')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn btn-orange"
          >
            🪙 トークン情報
          </button>
          <button onClick={downloadWhitepaper} className="btn btn-cyan">
            📄 ホワイトペーパー
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <div className="scroll-inner">
            <p className="scroll-text">詳細を見る</p>
            <div className="bounce">
              <svg className="scroll-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* === Styles (single-file) === */}
      <style jsx>{`
        :root {
          --emerald-400: #34d399;
          --emerald-500: #10b981;
          --emerald-600: #059669;
          --cyan-500: #06b6d4;
          --cyan-600: #0891b2;
          --orange-500: #f97316;
          --orange-600: #ea580c;
          --gray-200: #e5e7eb;
          --gray-300: #d1d5db;
          --white: #ffffff;
          --black: #000000;
        }

        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          z-index: 0;
          padding-top: 5rem; /* ≒ pt-20 */
        }
        @media (min-width: 768px) {
          .hero {
            padding-top: 6rem; /* ≒ md:pt-24 */
          }
        }

        .bg-wrap {
          position: absolute;
          inset: 0;
          z-index: -1;
        }
        .bg-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
        }

        .content {
          position: relative;
          text-align: center;
          padding-left: 1rem;
          padding-right: 1rem;
          max-width: 72rem; /* ≒ max-w-6xl */
          margin: 2rem auto 0;
          z-index: 10;
        }
        @media (min-width: 768px) {
          .content {
            margin-top: 3rem; /* ≒ md:mt-12 */
          }
        }

        .title {
          color: var(--white);
          font-weight: 700;
          margin-bottom: 1.5rem;
          font-size: 2.25rem; /* text-4xl */
          line-height: 1.15;
        }
        @media (min-width: 640px) {
          .title {
            font-size: 3rem; /* sm:text-5xl */
          }
        }
        @media (min-width: 768px) {
          .title {
            font-size: 3.75rem; /* md:text-6xl */
            margin-bottom: 2rem;
          }
        }
        @media (min-width: 1024px) {
          .title {
            font-size: 4.5rem; /* lg:text-7xl */
          }
        }
        @media (min-width: 1280px) {
          .title {
            font-size: 6rem; /* xl:text-8xl */
          }
        }

        .title-accent {
          color: var(--emerald-400);
        }
        .title-sub {
          color: var(--white);
          font-weight: 700;
          font-size: 1.5rem; /* 2xl */
        }
        @media (min-width: 640px) {
          .title-sub {
            font-size: 1.875rem; /* 3xl */
          }
        }
        @media (min-width: 768px) {
          .title-sub {
            font-size: 2.25rem; /* 4xl */
          }
        }
        @media (min-width: 1024px) {
          .title-sub {
            font-size: 3rem; /* 5xl */
          }
        }
        @media (min-width: 1280px) {
          .title-sub {
            font-size: 3.75rem; /* 6xl */
          }
        }

        .subtitle {
          margin-bottom: 3rem;
        }
        .lead-1 {
          color: var(--white);
          font-size: 1.25rem;
          margin-bottom: 1rem;
        }
        @media (min-width: 768px) {
          .lead-1 {
            font-size: 1.5rem;
          }
        }
        .lead-2 {
          color: var(--emerald-400);
          font-weight: 700;
          font-size: 1.5rem;
          margin-bottom: 2rem;
        }
        @media (min-width: 768px) {
          .lead-2 {
            font-size: 1.875rem;
          }
        }

        .desc {
          max-width: 56rem;
          margin: 0 auto;
          display: grid;
          gap: 1rem;
          color: #e5e7eb; /* gray-200-ish */
          font-size: 1rem;
        }
        @media (min-width: 640px) {
          .desc {
            font-size: 1.125rem;
          }
        }
        @media (min-width: 768px) {
          .desc {
            font-size: 1.25rem;
          }
        }
        .desc-accent {
          color: var(--emerald-400);
          font-weight: 700;
          margin-left: 0.25rem;
        }

        .stats {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
          margin-bottom: 3rem;
        }
        @media (min-width: 640px) {
          .stats {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
        }
        @media (min-width: 768px) {
          .stats {
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
          }
        }

        .stat-card {
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(16, 185, 129, 0.3); /* emerald-500/30 */
          border-radius: 0.5rem;
          padding: 1rem;
        }
        @media (min-width: 640px) {
          .stat-card {
            padding: 1.25rem;
          }
        }
        @media (min-width: 768px) {
          .stat-card {
            padding: 1.5rem;
          }
        }
        .stat-number {
          color: var(--emerald-400);
          font-weight: 700;
          margin-bottom: 0.5rem;
          font-size: 1.875rem; /* 3xl */
        }
        @media (min-width: 640px) {
          .stat-number {
            font-size: 2.25rem; /* 4xl */
          }
        }
        @media (min-width: 768px) {
          .stat-number {
            font-size: 3rem; /* 5xl */
          }
        }
        .stat-labels {
          color: var(--white);
        }
        .stat-title {
          font-weight: 600;
        }
        .stat-sub {
          color: #d1d5db;
          font-size: 0.875rem;
        }

        .version {
          margin-bottom: 2rem;
        }
        .version-badge {
          display: inline-block;
          background: rgba(16, 185, 129, 0.2);
          border: 1px solid rgba(16, 185, 129, 0.5);
          color: var(--emerald-400);
          padding: 0.5rem 1rem;
          border-radius: 999px;
          font-size: 0.875rem;
        }

        .actions {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          justify-content: center;
          align-items: center;
        }
        @media (min-width: 640px) {
          .actions {
            flex-direction: row;
          }
        }
        .btn {
          color: var(--white);
          padding: 0.75rem 2rem;
          border-radius: 0.5rem;
          font-weight: 600;
          transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.2s ease;
          box-shadow: 0 0 0 rgba(0, 0, 0, 0);
          will-change: transform;
          border: none;
          cursor: pointer;
        }
        .btn:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 18px rgba(0, 0, 0, 0.2);
        }
        .btn-emerald {
          background: var(--emerald-500);
        }
        .btn-emerald:hover {
          background: var(--emerald-600);
        }
        .btn-orange {
          background: var(--orange-500);
        }
        .btn-orange:hover {
          background: var(--orange-600);
        }
        .btn-cyan {
          background: var(--cyan-500);
        }
        .btn-cyan:hover {
          background: var(--cyan-600);
        }

        .scroll-indicator {
          position: absolute;
          left: 50%;
          bottom: 2rem;
          transform: translateX(-50%);
          z-index: 10;
        }
        .scroll-inner {
          color: var(--white);
          text-align: center;
        }
        .scroll-text {
          font-size: 0.875rem;
          margin-bottom: 0.5rem;
        }
        .scroll-icon {
          width: 1.5rem;
          height: 1.5rem;
          display: block;
          margin: 0 auto;
        }
        .bounce {
          animation: bounce 1.5s infinite;
        }
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }
      `}</style>
    </section>
  )
}
