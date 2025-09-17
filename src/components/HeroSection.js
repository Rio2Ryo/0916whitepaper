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
            <a href="#tech">ショップ</a>
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
          <svg className="see-more-ico" viewBox="0 0 24 24" fill="none" stroke="#23d36f">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v14m0 0l-7-7m7 7l7-7" />
          </svg>
        </button>
      </div>

      {/* Styles */}
      <style jsx>{`
        /* ===== 固定ヘッダー ===== */
        .site-header{
          position: fixed; top: 0; left: 0; right: 0; height: 64px;
          background: rgba(0,0,0,0.92);
          border-bottom: 1px solid rgba(35, 211, 111, 0.22);
          backdrop-filter: saturate(140%) blur(6px);
          z-index: 1000;
        }
        .nav-inner{
          max-width: 1200px; margin: 0 auto; height: 100%;
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 18px;
        }
        .brand{ color: #21d679; text-decoration: none; font-weight: 900; line-height: 1; letter-spacing: .02em; }
        .nav{ display: flex; gap: 22px; }
        .nav a{ color: #f4f9f6; text-decoration: none; font-size: 14px; opacity: .92; }
        .nav a:hover{ opacity: 1; text-shadow: 0 0 6px rgba(33,214,121,.35); }

        /* ===== カラーパレット（参考：すべてHEXでテキスト指定、背景は必要箇所のみrgba） ===== */
        .title-accent { color: #05df72; }
        .lead-1 { color: #ffffff; }
        .lead-2 { color: #24e570; }
        .hl { color: #24e570; }
        .intro-box p { color: #ffffff; }
        .stat-number { color: #1fe17a; }
        .stat-title, .stat-sub { color: #e8f3ea; }
        .version-badge { color: #22e06f; }
        .see-more { color: #23d36f; }

        /* ===== ヒーロー土台 ===== */
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: #000000;
          padding-top: 6.2rem;
        }
        .bg-wrap { position: absolute; inset: 0; z-index: -1; }
        .bg-overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.92); }
        .bg-vignette {
          position: absolute; inset: -10%;
          background:
            radial-gradient(ellipse at 60% 40%, rgba(35, 211, 111, 0.14), transparent 55%),
            radial-gradient(ellipse at 90% 80%, rgba(35, 211, 111, 0.18), transparent 45%);
          mix-blend-mode: screen;
        }

        .content { position: relative; text-align: center; padding: 0 20px; max-width: 1200px; margin: 0 auto; }

        /* ===== タイトル ===== */
        .title { margin: 0 0 20px 0; line-height: 1.06; letter-spacing: .02em; }
        .title .thin { font-weight: 760; }

        /* ===== サブタイトル＋イントロカード ===== */
        .subtitle { margin-top: 6px; }
        .intro-box {
          margin: 0 auto 18px; max-width: 980px;
          background: rgba(6, 24, 14, 0.78);
          border: 1px solid #146a3f;                  /* 緑みの枠（スクショ寄せ） */
          border-radius: 18px;
          padding: 22px 28px;
          box-shadow:
            0 10px 28px rgba(0,0,0,0.45),
            inset 0 0 0 1px rgba(35,211,111,0.12);     /* 内側の薄いエッジ */
          line-height: 1.9; font-size: clamp(14px, 1.6vw, 18px);
        }
        .hl.strong { font-weight: 800; }

        /* ===== 統計カード（700倍/24/7/8分野） ===== */
        .stats { margin: 18px auto 22px; display: grid; grid-template-columns: 1fr; gap: 16px; max-width: 980px; }
        @media (min-width: 720px) { .stats { grid-template-columns: repeat(3, 1fr); } }

        .stat-card {
          background: rgba(6, 24, 14, 0.72);          /* 半透明な深緑 */
          border: 1px solid #115c37;                  /* はっきり見える緑枠 */
          border-radius: 16px;
          padding: 28px 30px 22px;
          box-shadow:
            0 10px 24px rgba(0,0,0,0.42),
            0 0 16px rgba(23, 211, 111, 0.1);
          text-align: left;
        }
        .stat-number {
          font-weight: 900;
          font-size: clamp(28px, 3.2vw, 38px);
          margin-bottom: 6px;
          text-shadow: 0 0 10px rgba(35, 211, 111, 0.26);
        }
        .stat-labels { color: #e8f3ea; }
        .stat-title { font-weight: 700; color: #e8f3ea; }
        .stat-sub { color: #a8c3b5; font-size: 13px; margin-top: 2px; }

        /* ===== バージョンバッジ ===== */
        .version { margin: 12px 0 18px; }
        .version-badge {
          display: inline-block; padding: 10px 16px; border-radius: 999px;
          background: #0f2c1d;                        /* 深い緑背景 */
          border: 1px solid #1a7b4b;                  /* 緑枠 */
          font-size: 14px; color: #22e06f;
          box-shadow: 0 8px 22px rgba(0,0,0,0.35);
        }

        /* ===== ボタン行 ===== */
        .actions { display: flex; flex-direction: column; gap: 12px; justify-content: center; align-items: center; margin-top: 10px; }
        @media (min-width: 760px) { .actions { flex-direction: row; } }

        .btn {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 14px 22px; border-radius: 12px;
          font-weight: 800; font-size: 15px; cursor: pointer;
          transition: transform .18s ease, box-shadow .22s ease, background .18s ease, border-color .18s ease;
          user-select: none;
        }
        .btn-ico { font-size: 16px; line-height: 1; }

        /* 左：ソリッド緑（白文字に見える濃いテキスト色で再現） */
        .btn-primary {
          background: #16a34a;                        /* ソリッド緑 */
          border: 1px solid #16a34a;
          color: #eafff2;                             /* 文字 #eafff2 */
          box-shadow: 0 16px 28px rgba(22,163,74,0.28), inset 0 0 0 1px rgba(255,255,255,0.04);
        }
        .btn-primary:hover {
          transform: translateY(-1px);
          background: #139246;
          border-color: #139246;
          box-shadow: 0 18px 34px rgba(22,163,74,0.34);
        }

        /* 右２つ：ダーク背景＋細い緑枠＋緑文字 */
        .btn-outline {
          background: #0b1410;
          border: 1px solid #1b7c4d;                  /* 細めの緑枠 */
          color: #66e5a0;                              /* 緑文字 */
          box-shadow: inset 0 0 0 1px rgba(255,255,255,0.03);
        }
        .btn-outline:hover {
          transform: translateY(-1px);
          border-color: #22c55e;
          color: #8df2be;
          box-shadow: 0 14px 26px rgba(34,197,94,0.22);
        }

        /* 「詳細を見る」 */
        .see-more {
          margin: 16px auto 8px;
          display: inline-flex; align-items: center; gap: 8px;
          background: transparent; border: none; font-size: 14px; cursor: pointer; padding: 8px 12px; opacity: .98;
          color: #23d36f;
        }
        .see-more:hover { text-shadow: 0 0 10px rgba(35,211,111,0.34); }
        .see-more-ico { width: 16px; height: 16px; }

        /* ===== 細かいテキストサイズ ===== */
        .lead-1 { font-size: clamp(18px, 2.2vw, 22px); opacity: .95; margin: 8px 0 4px; }
        .lead-2 {
          font-size: clamp(26px, 3vw, 34px); margin: 2px 0 18px;
          color: #24e570; font-weight: 800; text-shadow: 0 0 12px rgba(35,211,111,0.34);
        }
      `}</style>
    </section>
  )
}
