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
      {/* ===== 固定ヘッダー ===== */}
      <header className="site-header">
        <div className="nav-inner">
          {/* 画像ロゴ */}
          <Link href="/" className="brand" aria-label="MOTHER VEGETABLES">
            <Image src="/logo-uCgt3dQl.png" alt="MOTHER VEGETABLES" width={132} height={24} priority />
          </Link>

          <nav className="nav" aria-label="primary">
            <a href="#project-overview">プロジェクト概要</a>
            <a href="#team">チーム</a>
            <a href="#partners">パートナー</a>
            <a href="#tech">技術詳細</a>
            <a href="#token">トークン</a>
          </nav>
        </div>
      </header>

      {/* ===== 背景（変更禁止） ===== */}
      <div className="bg-wrap">
        <Image
          src="/Gemini_Generated_Image_cu7xrscu7xrscu7x.png"
          alt="Earth Regeneration"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        {/* 黒のオーバーレイ（94%不透明） */}
        <div className="bg-overlay" />
        {/* 緑のビネット（HEX透過） */}
        <div className="bg-vignette" />
      </div>

      {/* ===== メイン ===== */}
      <div className="content">
        <h1 className="title">
          <span className="title-accent">MOTHER VEGETABLES</span>
          <br />
          <span className="title-accent thin">PROJECT</span>
        </h1>

        <div className="subtitle">
          <p className="lead-1">地球最初の生命体による</p>
          <p className="lead-2">地球再生プロジェクト</p>

          {/* イントロ（ガラス調） */}
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

        {/* 指標カード（黒背景＋緑枠／中央寄せ） */}
        <div className="stats">
          <div className="stat-card">
            <div className="stat-number">700倍</div>
            <div className="stat-title">CO₂吸収効率</div>
            <div className="stat-sub">vs 天然芝</div>
          </div>

          <div className="stat-card">
            <div className="stat-number">24/7</div>
            <div className="stat-title">連続稼働</div>
            <div className="stat-sub">365日間</div>
          </div>

          <div className="stat-card">
            <div className="stat-number">8分野</div>
            <div className="stat-title">産業展開</div>
            <div className="stat-sub">グローバル</div>
          </div>
        </div>

        <div className="version">
          <span className="version-badge">↻ Version 1.0.0 - 革命的環境技術</span>
        </div>

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

        <button className="see-more" onClick={scrollToDetails} aria-label="詳細を見る">
          詳細を見る
          <svg className="see-more-ico" viewBox="0 0 24 24" fill="none" stroke="#24E570">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v14m0 0l-7-7m7 7l7-7" />
          </svg>
        </button>
      </div>

      {/* ===== Styles（色はすべてHEX） ===== */}
      <style jsx>{`
        /* 基本色（参考値）：#24E570, #1FC764, #F4F9F6, #000000 */
        .site-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 64px;
          background: #000000eb;              /* 92%不透明の黒 */
          border-bottom: 1px solid #24e5702e;  /* 薄い緑線 */
          backdrop-filter: saturate(140%) blur(6px);
          z-index: 1000;
        }
        .nav-inner {
          max-width: 1200px;
          margin: 0 auto;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 18px;
        }
        .brand { display: inline-flex; align-items: center; height: 24px; }
        .nav { display: flex; gap: 22px; }
        .nav a { color: #f4f9f6; text-decoration: none; font-size: 14px; opacity: 0.92; }
        .nav a:hover { opacity: 1; text-shadow: 0 0 6px #24e57059; }

        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: #000000;
          padding-top: 6.2rem;
          color: #f4f9f6;
        }

        .bg-wrap { position: absolute; inset: 0; z-index: -1; }
        .bg-overlay { position: absolute; inset: 0; background: #000000f0; } /* 94%黒 */
        .bg-vignette {
          position: absolute; inset: -10%;
          background:
            radial-gradient(ellipse at 60% 40%, #24e5701f, transparent 55%),
            radial-gradient(ellipse at 90% 80%, #24e5702e, transparent 45%);
          mix-blend-mode: screen;
        }

        .content { position: relative; text-align: center; padding: 0 20px; max-width: 1200px; margin: 0 auto; }

        .title { margin: 0 0 16px 0; line-height: 1.06; letter-spacing: 0.02em; font-weight: 900; font-size: clamp(36px, 6vw, 72px); }
        .title-accent { color: #05df72; }
        .title .thin { font-weight: 800; }

        .subtitle { margin-top: 6px; }
        .lead-1 { font-size: clamp(14px, 1.8vw, 18px); opacity: 0.98; color: #ffffff; }
        .lead-2 { font-size: clamp(20px, 2.2vw, 24px); color: #24e570; margin-top: 6px; font-weight: 800; letter-spacing: 0.06em; }

        .intro-box {
          margin: 12px auto 18px;
          max-width: 920px;
          background: #06120cad;               /* 透過ダーク */
          border: 1px solid #24e57059;         /* 薄い緑枠 */
          border-radius: 18px;
          padding: 18px 22px;
          box-shadow: 0 10px 28px #00000061;
          backdrop-filter: blur(6px);
          line-height: 1.9;
          font-size: clamp(14px, 1.6vw, 18px);
          color: #ffffff;
        }
        .intro-box .hl { color: #24e570; }
        .intro-box .strong { font-weight: 900; letter-spacing: 0.06em; margin-left: 4px; }

        /* 指標カード —— 黒背景＋緑枠＋中央寄せ */
        .stats {
          margin: 18px auto 22px;
          display: grid;
          grid-template-columns: 1fr;
          gap: 14px;
          max-width: 980px;
        }
        @media (min-width: 640px) { .stats { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 900px) { .stats { grid-template-columns: repeat(3, 1fr); } }

        .stat-card {
          background: #000000;            /* ← 黒背景 */
          border: 1px solid #24e570;      /* ← 緑枠 */
          border-radius: 16px;
          padding: 22px 24px;
          box-shadow: 0 10px 24px #0000005c;
          text-align: center;
          color: #ffffff;
        }
        .stat-number { color: #05df72; font-size: clamp(28px, 4.2vw, 40px); font-weight: 900; letter-spacing: 0.02em; line-height: 1.1; margin-bottom: 6px; }
        .stat-title { font-size: 16px; font-weight: 800; color: #ffffff; }
        .stat-sub { font-size: 12px; color: #ffffff; opacity: 0.9; margin-top: 2px; }

        .version { margin: 10px 0 16px; }
        .version-badge {
          display: inline-block; padding: 10px 16px; border-radius: 999px;
          background: #06140cc7; border: 1px solid #24e57059;
          font-size: 14px; color: #05df72; font-weight: 800;
        }

        .actions { display: flex; flex-direction: column; gap: 12px; justify-content: center; align-items: center; margin-top: 8px; }
        @media (min-width: 700px) { .actions { flex-direction: row; } }

        .btn {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 12px 22px; border-radius: 12px;
          font-weight: 800; font-size: 15px; cursor: pointer;
          transition: transform .2s ease, box-shadow .2s ease, background .2s ease, border-color .2s ease;
          box-shadow: 0 10px 20px #00000040; user-select: none;
        }
        .btn-ico { font-size: 16px; line-height: 1; }

        .btn-primary { background: #24e570; border: 1px solid #24e570; color: #062412; }
        .btn-primary:hover { transform: translateY(-1px); background: #1fc764; border-color: #1fc764; box-shadow: 0 14px 28px #24e57042; }

        .btn-outline { background: #0a1210; border: 1px solid #24e57059; color: #24e570; }
        .btn-outline:hover { transform: translateY(-1px); border-color: #24e570; box-shadow: 0 14px 28px #24e57038; }

        .see-more { margin: 16px auto 8px; display: inline-flex; align-items: center; gap: 8px; background: transparent; border: none; font-size: 14px; cursor: pointer; padding: 8px 12px; opacity: .98; color: #24e570; }
        .see-more:hover { text-shadow: 0 0 10px #24e57057; }
        .see-more-ico { width: 16px; height: 16px; }
      `}</style>
    </section>
  )
}
