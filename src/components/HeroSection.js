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
          <Link href="/" className="brand">
            MOTHER<br />VEGETABLES
          </Link>
          <nav className="nav">
            <a href="#team">メンバー</a>
            <a href="#project-overview">プロジェクト詳細</a>
            <a href="#shop">ショップ</a>
            <a href="#token">ホワイトペーパー</a>
          </nav>
        </div>
      </header>

      {/* Background */}
      <div className="bg-wrap">
        <Image
          src="/Gemini_Generated_Image_cu7xrscu7xrscu7x.png"
          alt="Earth Regeneration"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="bg-overlay" />
      </div>

      {/* Content */}
      <div className="content">
        {/* Title */}
        <h1 className="title">
          MOTHER VEGETABLES<br />PROJECT
        </h1>

        {/* Subtitle */}
        <div className="subtitle">
          <p>地球最初の生命体による</p>
          <p className="accent">地球再生プロジェクト</p>

          {/* Intro card */}
          <div className="intro-box">
            <p><span className="hl">35億年前</span>の地球最初の生命体「<span className="hl">マザーベジタブル</span>」を世界各地に展開することで、</p>
            <p><span className="hl">CO₂を削減</span>しながら<span className="hl">人類と生物の健康を向上</span>させる、</p>
            <p>作れば作るほど地球を良くしていく<span className="hl">循環型システム</span></p>
          </div>
        </div>

        {/* Stats */}
        <div className="stats">
          <div className="stat-card">
            <div className="stat-number">700倍</div>
            <div>CO₂吸収効率<br />vs 天然芝</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">24/7</div>
            <div>連続稼働<br />365日間</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">8分野</div>
            <div>産業展開<br />グローバル</div>
          </div>
        </div>

        {/* Version */}
        <div className="version">
          ↻ Version 1.0.0 - 革命的環境技術
        </div>

        {/* Actions */}
        <div className="actions">
          <button onClick={scrollToDetails} className="btn primary">▶ プロジェクト詳細を見る</button>
          <button onClick={() => document.getElementById('token')?.scrollIntoView({ behavior: 'smooth' })} className="btn outline">🪙 トークン情報</button>
          <button onClick={downloadWhitepaper} className="btn outline">⭳ ホワイトペーパー</button>
        </div>

        <button className="see-more" onClick={scrollToDetails}>
          詳細を見る ↓
        </button>
      </div>

      {/* Styles */}
      <style jsx>{`
        :root {
          --green: #21d679;
          --green-dark: #1ab163;
          --text: #fff;
          --dim: #ccc;
          --card-bg: rgba(0,0,0,0.65);
          --border: rgba(33,214,121,0.3);
        }

        .site-header {
          position: fixed; top: 0; left: 0; right: 0;
          height: 60px;
          background: rgba(0,0,0,0.9);
          display: flex; align-items: center;
          z-index: 1000;
          border-bottom: 1px solid var(--border);
        }
        .nav-inner { max-width: 1200px; margin: auto; width: 100%; display: flex; justify-content: space-between; align-items: center; padding: 0 20px; }
        .brand { color: var(--green); font-weight: bold; text-decoration: none; }
        .nav a { color: var(--text); margin-left: 20px; text-decoration: none; font-size: 14px; }

        .bg-wrap { position: absolute; inset: 0; z-index: -1; }
        .bg-overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.85); }

        .content { text-align: center; color: var(--text); padding: 120px 20px 60px; }

        .title { font-size: 48px; font-weight: 800; margin-bottom: 20px; color: var(--green); }
        .subtitle p { margin: 4px 0; }
        .accent { color: var(--green); font-weight: 600; }

        .intro-box {
          margin: 20px auto; padding: 20px;
          max-width: 800px;
          background: var(--card-bg);
          border: 1px solid var(--border);
          border-radius: 12px;
          font-size: 16px;
          line-height: 1.8;
        }
        .hl { color: var(--green); font-weight: 600; }

        .stats { display: flex; justify-content: center; gap: 20px; margin: 30px auto; flex-wrap: wrap; }
        .stat-card {
          flex: 1 1 200px;
          background: var(--card-bg);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 20px;
          font-size: 14px;
        }
        .stat-number { color: var(--green); font-weight: bold; font-size: 24px; margin-bottom: 6px; }

        .version { margin: 20px 0; font-size: 14px; color: var(--green); }

        .actions { display: flex; justify-content: center; gap: 14px; flex-wrap: wrap; margin-top: 20px; }
        .btn {
          padding: 10px 18px;
          border-radius: 8px;
          font-weight: bold;
          cursor: pointer;
          border: none;
        }
        .btn.primary { background: var(--green); color: #000; }
        .btn.primary:hover { background: var(--green-dark); }
        .btn.outline { background: transparent; border: 1px solid var(--green); color: var(--green); }
        .btn.outline:hover { background: rgba(33,214,121,0.1); }

        .see-more { margin-top: 20px; color: var(--green); background: none; border: none; cursor: pointer; font-size: 14px; }
      `}</style>
    </section>
  )
}
