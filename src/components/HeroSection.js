'use client'

import Image from 'next/image'

export default function Hero() {
  const scrollToDetails = () => {
    const element = document.getElementById('project-overview')
    if (element) element.scrollIntoView({ behavior: 'smooth' })
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
        <div className="bg-vignette" />
      </div>

      {/* Content */}
      <div className="content">
        {/* Main Title */}
        <h1 className="title">
          <span className="title-accent">MOTHER VEGETABLES</span>
          <br />
          <span className="title-accent thin">PROJECT</span>
        </h1>

        {/* Subtitle */}
        <div className="subtitle">
          <p className="lead-1">地球最初の生命体による</p>
          <p className="lead-2">地球再生プロジェクト</p>

          {/* Intro (glass card) */}
          <div className="intro-box">
            <p>
              <span className="hl">35億年前</span>
              の地球最初の生命体「<span className="hl">マザーベジタブル</span>」を世界各地に展開することで、
            </p>
            <p>
              <span className="hl">CO₂を削減</span>
              しながら<span className="hl">人類と生物の健康を向上</span>させる、
            </p>
            <p>
              作れば作るほど地球を良くしていく
              <span className="hl strong">循環型システム</span>
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
          <span className="version-badge">↻ Version 1.0.0 - 革命的環境技術</span>
        </div>

        {/* Action Buttons */}
        <div className="actions">
          <button onClick={scrollToDetails} className="btn btn-primary">
            <span className="btn-ico">▶</span> プロジェクト詳細を見る
          </button>
          <button
            onClick={() => document.getElementById('token')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn btn-outline"
          >
            <span className="btn-ico">🪙</span> トークン情報
          </button>
          <button onClick={downloadWhitepaper} className="btn btn-outline">
            <span className="btn-ico">⭳</span> ホワイトペーパー
          </button>
        </div>

        {/* Scroll Indicator (link-like, green) */}
        <button className="see-more" onClick={scrollToDetails} aria-label="詳細を見る">
          詳細を見る
          <svg className="see-more-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v14m0 0l-7-7m7 7l7-7" />
          </svg>
        </button>
      </div>

      {/* === Styles (single-file) === */}
      <style jsx>{`
        /* ===== Colors from screenshot ===== */
        :root {
          --green: #22c55e;       /* メインのネオングリーン */
          --green-strong: #16a34a;
          --green-soft: #34d399;
          --bg-deep: #04150e;     /* かなり暗い深緑〜黒 */
          --text: #eaf7ee;        /* 白に近い淡い緑がかった白 */
          --text-dim: #cfe4d6;    /* サブ */
          --card-border: rgba(52, 211, 153, 0.35);
          --card-bg: rgba(4, 21, 14, 0.55);
          --glass-bg: rgba(4, 21, 14, 0.6);
          --overlay: rgba(0, 0, 0, 0.6);
        }

        /* ===== Layout base ===== */
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: var(--bg-deep);
          padding-top: 6.5rem; /* ヘッダー分 + 余白 */
        }

        .bg-wrap {
          position: absolute;
          inset: 0;
          z-index: -1;
        }
        .bg-overlay {
          position: absolute;
          inset: 0;
          background: var(--overlay); /* 背景をしっかり暗く */
        }
        .bg-vignette {
          position: absolute;
          inset: -10%;
          background: radial-gradient(ellipse at center, rgba(34, 197, 94, 0.12), transparent 60%),
            radial-gradient(ellipse at bottom right, rgba(34, 197, 94, 0.18), transparent 45%);
          mix-blend-mode: screen;
        }

        .content {
          position: relative;
          text-align: center;
          padding: 0 1.25rem;
          max-width: 1200px;
          margin: 0 auto;
          color: var(--text);
        }

        /* ===== Title ===== */
        .title {
          margin: 0 0 1.5rem 0;
          line-height: 1.1;
          letter-spacing: 0.02em;
        }
        .title-accent {
          color: var(--green);
          text-shadow: 0 0 18px rgba(34, 197, 94, 0.35);
          font-weight: 800;
          font-size: clamp(40px, 6.5vw, 90px);
        }
        .title .thin {
          font-weight: 750;
        }

        /* ===== Subtitle and intro ===== */
        .subtitle {
          margin-top: 0.5rem;
        }
        .lead-1 {
          color: var(--text);
          font-size: clamp(16px, 2vw, 22px);
          opacity: 0.92;
          margin: 0.5rem 0 0.25rem;
        }
        .lead-2 {
          color: var(--green);
          font-weight: 800;
          font-size: clamp(22px, 2.6vw, 32px);
          margin: 0.25rem 0 1.25rem;
          text-shadow: 0 0 12px rgba(34, 197, 94, 0.35);
        }

        .intro-box {
          margin: 0 auto 1.5rem;
          max-width: 900px;
          background: var(--glass-bg);
          border: 1px solid var(--card-border);
          border-radius: 18px;
          padding: 18px 22px;
          box-shadow: 0 10px 28px rgba(0, 0, 0, 0.35);
          backdrop-filter: blur(6px);
          color: var(--text);
          line-height: 1.85;
          font-size: clamp(14px, 1.6vw, 18px);
        }
        .intro-box p {
          margin: 0.35rem 0;
        }
        .hl {
          color: var(--green);
        }
        .hl.strong {
          font-weight: 800;
        }

        /* ===== Stats ===== */
        .stats {
          margin: 1.25rem auto 1.75rem;
          display: grid;
          grid-template-columns: 1fr;
          gap: 14px;
          max-width: 980px;
        }
        @media (min-width: 640px) {
          .stats { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 900px) {
          .stats { grid-template-columns: repeat(3, 1fr); }
        }
        .stat-card {
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          border-radius: 16px;
          padding: 22px 24px;
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.35);
          text-align: left;
        }
        .stat-number {
          color: var(--green);
          font-weight: 800;
          font-size: clamp(28px, 3.2vw, 44px);
          margin-bottom: 6px;
          text-shadow: 0 0 10px rgba(34, 197, 94, 0.25);
        }
        .stat-labels { color: var(--text); }
        .stat-title { font-weight: 650; }
        .stat-sub { color: var(--text-dim); font-size: 13px; margin-top: 2px; }

        /* ===== Version Badge ===== */
        .version { margin: 10px 0 16px; }
        .version-badge {
          display: inline-block;
          padding: 10px 16px;
          border-radius: 999px;
          background: rgba(6, 30, 18, 0.7);
          border: 1px solid var(--card-border);
          color: var(--text);
          font-size: 14px;
        }
        .version-badge::before { filter: saturate(120%); }

        /* ===== Buttons ===== */
        .actions {
          display: flex;
          flex-direction: column;
          gap: 12px;
          justify-content: center;
          align-items: center;
          margin-top: 8px;
        }
        @media (min-width: 700px) {
          .actions { flex-direction: row; }
        }
        .btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 22px;
          border-radius: 12px;
          font-weight: 700;
          font-size: 15px;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease, border-color 0.2s ease;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
          user-select: none;
        }
        .btn-ico { font-size: 16px; line-height: 1; }
        .btn-primary {
          background: var(--green);
          color: #032110;
          border: 1px solid var(--green);
        }
        .btn-primary:hover {
          transform: translateY(-1px);
          background: var(--green-strong);
          border-color: var(--green-strong);
          box-shadow: 0 14px 28px rgba(34, 197, 94, 0.25);
        }
        .btn-outline {
          background: rgba(3, 17, 12, 0.7);
          color: var(--text);
          border: 1px solid var(--card-border);
        }
        .btn-outline:hover {
          transform: translateY(-1px);
          border-color: var(--green);
          box-shadow: 0 14px 28px rgba(34, 197, 94, 0.22);
        }

        /* ===== See more (bottom link) ===== */
        .see-more {
          margin: 14px auto 6px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          border: none;
          color: var(--green);
          font-size: 14px;
          cursor: pointer;
          padding: 8px 12px;
          opacity: 0.95;
        }
        .see-more:hover { opacity: 1; text-shadow: 0 0 10px rgba(34, 197, 94, 0.35); }
        .see-more-ico { width: 16px; height: 16px; }

      `}</style>
    </section>
  )
}
