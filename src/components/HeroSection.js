'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  const scrollToDetails = () => {
    const el = document.getElementById('project-overview')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const downloadWhitepaper = () => {
    const a = document.createElement('a')
    a.href = '/0912_whitepaper_ja.pdf'
    a.download = 'MOTHER_VEGETABLES_Whitepaper_JP.pdf'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

  return (
    <section className="hero">
      {/* ===== 固定ヘッダー（追加） ===== */}
      <header className="site-header">
        <div className="nav-inner">
          <Link href="/" className="brand">MOTHER<br />VEGETABLES</Link>
          <nav className="nav">
            <a href="#project-overview">プロジェクト概要</a>
            <a href="#team">チーム</a>
            <a href="#partners">パートナー</a>
            <a href="#tech">技術詳細</a>
            <a href="#token">トークン</a>
          </nav>
        </div>
      </header>

      {/* Background (黒ベース) */}
      <div className="bg-wrap">
        <Image
          src="/Gemini_Generated_Image_cu7xrscu7xrscu7x.png" // ここをさらに暗くした画像パスに変更します
          alt="Earth Regeneration"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        {/* 黒を強く出すためのオーバーレイ - さらに暗くするために不透明度を上げました */}
        <div className="bg-overlay" />
        <div className="bg-vignette" />
      </div>

      {/* Content */}
      <div className="content">
        {/* Title */}
        <h1 className="title">
          <span className="title-accent">MOTHER VEGETABLES</span>
          <br />
          <span className="title-accent thin">PROJECT</span>
        </h1>

        {/* Subtitle */}
        <div className="subtitle">
          <p className="lead-1">地球最初の生命体による</p>
          <p className="lead-2">地球再生プロジェクト</p>

          {/* Intro glass card */}
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

        {/* Stats */}
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

        {/* Version */}
        <div className="version">
          <span className="version-badge">↻ Version 1.0.0 - 革命的環境技術</span>
        </div>

        {/* Actions */}
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

        {/* see more */}
        <button className="see-more" onClick={scrollToDetails} aria-label="詳細を見る">
          詳細を見る
          <svg className="see-more-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v14m0 0l-7-7m7 7l7-7" />
          </svg>
        </button>
      </div>

      {/* Styles */}
      <style jsx>{`
        :root {
          --green: #24e570;
          --green-strong: #1fc764;
          --green-soft: #90f7c0;
          --bg-deep: #000000;
          --text: #f5fff8;
          --text-dim: #cfe7d6;
          --card-border: rgba(36, 229, 112, 0.35);
          --card-bg: rgba(4, 18, 10, 0.6);
          --glass-bg: rgba(6, 18, 12, 0.68);
          --overlay: rgba(0, 0, 0, 0.95);
        }
        p{
        color:white;
        }

        /* ====== ヘッダー（追加） ====== */
        .site-header{
          position: fixed; top: 0; left: 0; right: 0;
          height: 64px;
          background: rgba(0,0,0,0.92);
          border-bottom: 1px solid rgba(34,197,94,0.18); /* スクショのような薄いライン */
          backdrop-filter: saturate(140%) blur(6px);
          z-index: 1000;
        }
        .nav-inner{
          max-width: 1200px; margin: 0 auto; height: 100%;
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 18px;
        }
        .brand{
          color: #21d679; text-decoration: none; font-weight: 900; line-height: 1;
          letter-spacing: .02em;
        }
        .nav{ display: flex; gap: 22px; }
        .nav a{
          color: #f4f9f6; text-decoration: none; font-size: 14px; opacity: .92;
        }
        .nav a:hover{ opacity: 1; text-shadow: 0 0 6px rgba(33,214,121,.35); }

        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: var(--bg-deep);
          padding-top: 6.2rem; /* ← 既存のまま：固定ヘッダー分の余白あり */
        }

        .bg-wrap { position: absolute; inset: 0; z-index: -1; }
        .bg-overlay { position: absolute; inset: 0; background: var(--overlay); }
        .bg-vignette {
          position: absolute; inset: -10%;
          background:
            radial-gradient(ellipse at 60% 40%, rgba(36, 229, 112, 0.12), transparent 55%),
            radial-gradient(ellipse at 90% 80%, rgba(36, 229, 112, 0.18), transparent 45%);
          mix-blend-mode: screen;
        }

        .content {
          position: relative;
          text-align: center;
          padding: 0 20px;
          max-width: 1200px;
          margin: 0 auto;
          color: var(--text);
        }

        .title { margin: 0 0 20px 0; line-height: 1.08; letter-spacing: 0.02em; }
        .title-accent {
          color: #05df72;
          font-weight: 400;
          font-size: 70px!important;
          margin-top:60px;
        }
        .title .thin { font-weight: 760; }

        .subtitle { margin-top: 6px; }
        .lead-1 { color: var(--text); font-size: clamp(18px, 2.2vw, 22px); opacity: 0.95; margin: 8px 0 4px; }
        .lead-2 { color: var(--green); font-weight: 800; font-size: clamp(26px, 3vw, 34px); margin: 2px 0 18px; text-shadow: 0 0 12px rgba(36, 229, 112, 0.36); }

        .intro-box {
          margin: 0 auto 18px; max-width: 920px; background: var(--glass-bg);
          border: 1px solid var(--card-border); border-radius: 18px; padding: 18px 22px;
          box-shadow: 0 10px 28px rgba(0, 0, 0, 0.38); backdrop-filter: blur(6px);
          color: var(--text); line-height: 1.9; font-size: clamp(14px, 1.6vw, 18px);
        }
        .intro-box p { margin: 6px 0; }
        .hl { color: var(--green); }
        .hl.strong { font-weight: 800; }

        .stats {
          margin: 16px auto 22px; display: grid; grid-template-columns: 1fr; gap: 14px; max-width: 980px;
        }
        @media (min-width: 640px) { .stats { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 900px) { .stats { grid-template-columns: repeat(3, 1fr); } }

        .stat-card {
          background: var(--card-bg); border: 1px solid var(--card-border); border-radius: 16px;
          padding: 22px 24px; box-shadow: 0 10px 24px rgba(0, 0, 0, 0.36); text-align: left;
        }
        .stat-number {
          color: var(--green); font-weight: 800; font-size: clamp(30px, 3.4vw, 46px);
          margin-bottom: 6px; text-shadow: 0 0 10px rgba(36, 229, 112, 0.28);
        }
        .stat-labels { color: var(--text); }
        .stat-title { font-weight: 650; }
        .stat-sub { color: var(--text-dim); font-size: 13px; margin-top: 2px; }

        .version { margin: 10px 0 16px; }
        .version-badge {
          display: inline-block; padding: 10px 16px; border-radius: 999px;
          background: rgba(6, 20, 12, 0.78); border: 1px solid var(--card-border);
          color: var(--text); font-size: 14px;
        }

        .actions {
          display: flex; flex-direction: column; gap: 12px;
          justify-content: center; align-items: center; margin-top: 8px;
        }
        @media (min-width: 700px) { .actions { flex-direction: row; } }

        .btn {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 12px 22px; border-radius: 12px;
          font-weight: 800; font-size: 15px; cursor: pointer;
          transition: transform .2s ease, box-shadow .2s ease, background .2s ease, border-color .2s ease;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
          user-select: none;
        }
        .btn-ico { font-size: 16px; line-height: 1; }

        .btn-primary { background: var(--green); color: #062412; border: 1px solid var(--green); }
        .btn-primary:hover { transform: translateY(-1px); background: var(--green-strong); border-color: var(--green-strong); box-shadow: 0 14px 28px rgba(36, 229, 112, 0.26); }

        .btn-outline { background: #0a1210; color: var(--green); border: 1px solid var(--card-border); }
        .btn-outline:hover { transform: translateY(-1px); border-color: var(--green); box-shadow: 0 14px 28px rgba(36, 229, 112, 0.22); }

        .see-more {
          margin: 16px auto 8px; display: inline-flex; align-items: center; gap: 8px;
          background: transparent; border: none; color: var(--green);
          font-size: 14px; cursor: pointer; padding: 8px 12px; opacity: .98;
        }
        .see-more:hover { text-shadow: 0 0 10px rgba(36, 229, 112, 0.34); }
        .see-more-ico { width: 16px; height: 16px; }
      `}</style>
    </section>
  )
}
