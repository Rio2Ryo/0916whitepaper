// TokenSection.jsx — JSX (no Tailwind), single file with styles at bottom

export default function TokenSection() {
  return (
    <section className="token">
      <div className="container">
        {/* 小見出しチップ */}
        <div className="label">5. トークン情報</div>

        {/* 大見出し */}
        <h2 className="title">MOTHER VEGETABLES Token (MVT)</h2>

        {/* 黄色見出し */}
        <div className="subttl">基本構造</div>

        {/* 基本構造パネル */}
        <div className="panel panel-lg">
          <p className="panel-lead">
            MOTHER VEGETABLES
            Token（MVT）は藻類培養生産施設と直接接続されたユーティリティトークンとして機能し、以下の核心的ユーティリティを提供します：
          </p>

          <div className="triple">
            <div className="mini-card">
              <div className="mini-badge yellow">資金調達手段</div>
              <p className="mini-text">
                IEOおよび市場流通により、世界各国での生産拠点構築・拡張資金を調達。
              </p>
            </div>

            <div className="mini-card">
              <div className="mini-badge yellow">ステーキング参加</div>
              <p className="mini-text">
                投資家がMVTトークンを預け入れ、運営施設からの実際のCO₂吸収量に基づくNFT報酬を受け取ることができるスマートコントラクトベースのステーキングプール。
              </p>
            </div>

            <div className="mini-card">
              <div className="mini-badge yellow">NFT取引</div>
              <p className="mini-text">
                CO₂吸収連動NFTはパートナーおよびオープンマーケットプレイスにて自由に取引可能であり、環境貢献検証と二次市場取引による経済的価値の両方を創出します。
              </p>
            </div>
          </div>
        </div>

        {/* 基本情報 & 投資家ベネフィット */}
        <div className="grid two">
          <div className="card">
            <div className="card-ttl">
              <span className="coin">$</span>
              基本情報
            </div>
            <div className="info">
              <div className="row">
                <div className="k">ブロックチェーン</div>
                <div className="v">Ethereum</div>
              </div>
              <div className="row">
                <div className="k">トークン規格</div>
                <div className="v">ERC-20</div>
              </div>
              <div className="row">
                <div className="k">トークン名称</div>
                <div className="v">MOTHER VEGETABLES Token</div>
              </div>
              <div className="row">
                <div className="k">ティッカーシンボル</div>
                <div className="v accent">$MVT</div>
              </div>
              <div className="row">
                <div className="k">総発行量</div>
                <div className="v">10,000,000,000 (10 billion)</div>
              </div>
              <div className="row">
                <div className="k">コントラクトアドレス</div>
                <div className="v">0x●●●●</div>
              </div>
            </div>
          </div>

          <div className="card card-green">
            <div className="card-ttl">投資家ベネフィット</div>
            <ul className="benefits">
              <li>
                <span className="dot" />
                <strong>透明性</strong>
                <p>NFT取得を通じたブロックチェーン検証CO₂削減証明書。</p>
              </li>
              <li>
                <span className="dot" />
                <strong>収益機会</strong>
                <p>環境インパクトNFTの二次市場取引機会。</p>
              </li>
              <li>
                <span className="dot" />
                <strong>成長ポテンシャル</strong>
                <p>生産施設拡張およびNFT発行能力増加に連動した価値上昇。</p>
              </li>
            </ul>
          </div>
        </div>

        {/* トークン配布 & 資本配置 */}
        <div className="grid two">
          <div className="card">
            <div className="card-ttl">トークン配布</div>

            <div className="bar-row">
              <div className="bar-k">IEO販売</div>
              <div className="bar">
                <span style={{ width: "10%" }} />
              </div>
              <div className="bar-v">10%</div>
            </div>
            <div className="bar-row">
              <div className="bar-k">チーム配分</div>
              <div className="bar">
                <span style={{ width: "5%" }} />
              </div>
              <div className="bar-v">5%</div>
            </div>
            <div className="bar-row">
              <div className="bar-k">アドバイザリープール</div>
              <div className="bar">
                <span style={{ width: "5%" }} />
              </div>
              <div className="bar-v">5%</div>
            </div>
            <div className="bar-row">
              <div className="bar-k">リザーブファンド</div>
              <div className="bar">
                <span style={{ width: "80%" }} />
              </div>
              <div className="bar-v">80%</div>
            </div>
            <p className="note">
              一般投資家向け配布／開発・運営チームインセンティブ／戦略的パートナーおよび専門家報酬／将来の事業拡張および戦略的開発
            </p>
          </div>

          <div className="card">
            <div className="card-ttl">資本配置</div>
            <div className="bar-row">
              <div className="bar-k">生産施設建設</div>
              <div className="bar">
                <span className="bar-fill-blue" style={{ width: "60%" }} />
              </div>
              <div className="bar-v accent-blue">60%</div>
            </div>
            <div className="bar-row">
              <div className="bar-k">システム開発</div>
              <div className="bar">
                <span className="bar-fill-blue" style={{ width: "20%" }} />
              </div>
              <div className="bar-v">20%</div>
            </div>
            <div className="bar-row">
              <div className="bar-k">マーケティング・事業開発</div>
              <div className="bar">
                <span className="bar-fill-blue" style={{ width: "20%" }} />
              </div>
              <div className="bar-v">20%</div>
            </div>
            <p className="note">
              新施設開発および既存施設拡張／プラットフォーム強化および技術進歩／グローバル展開および市場浸透
            </p>
          </div>
        </div>

        {/* セキュリティ措置 */}
        <h3 className="sec-ttl red">セキュリティ措置</h3>
        <div className="panel">
          <div className="lock-ttl">ロックアップ期間</div>
          <p className="panel-txt">
            IEO販売トークンは販売完了後6ヶ月間のロックアップ期間の対象となり、価格安定性と長期投資家保護を確保するため、この期間中は取引および送金が禁止されます。
          </p>
        </div>

        {/* エコシステムの循環モデル */}
        <h3 className="sec-ttl purple">エコシステムの循環モデル</h3>
        <div className="flow card">
          <div className="step">
            <div className="ico gold">
              <svg fill="currentColor" viewBox="0 0 20 20"><path d="M12.232 4.232a2.5 2.5 0 0 1 3.536 3.536l-1.225 1.224a.75.75 0 0 0 1.061 1.06l1.224-1.224a4 4 0 0 0-5.656-5.656l-3 3a4 4 0 0 0 .225 5.865.75.75 0 0 0 .977-1.138 2.5 2.5 0 0 1-.142-3.665l3-3Z" /><path d="M8.603 3.799a4.49 4.49 0 0 1 4.49 4.49v.18a4.5 4.5 0 0 1-8.603 1.95.75.75 0 0 0-1.196-.92C3.13 10.42 3.13 12.18 4 13a4 4 0 0 0 5.657 0l3-3a4 4 0 0 0-5.657-5.657l-1.061 1.06a2.5 2.5 0 0 1 3.535 3.535L6.464 12.232a.75.75 0 0 0-1.06 1.06l1.223-1.223a4 4 0 0 0 5.657-5.657l-3-3a4.002 4.002 0 0 0-4.243-.38Z" /></svg>
            </div>
            <div className="step-ttl">1. IEO参加</div>
            <div className="step-txt">投資家がMVTトークンを購入</div>
          </div>
          <div className="step">
            <div className="ico green">
              <svg fill="currentColor" viewBox="0 0 20 20"><path d="M10.75 16.8a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5h1.5Z" /><path fillRule="evenodd" d="M.75 6.162V15.25a3 3 0 0 0 3 3h12.5a3 3 0 0 0 3-3V6.162l-7.952-4.33a.75.75 0 0 0-.596 0L.75 6.162ZM2.25 15.25V7.22l7-3.812 7 3.812v8.03a1.5 1.5 0 0 1-1.5 1.5H3.75a1.5 1.5 0 0 1-1.5-1.5Z" clipRule="evenodd" /></svg>
            </div>
            <div className="step-ttl">2. 施設建設</div>
            <div className="step-txt">資金で生産施設を建設・拡張</div>
          </div>
          <div className="step">
            <div className="ico blue">
              <svg fill="currentColor" viewBox="0 0 20 20"><path d="M15.5 5.133a.75.75 0 0 1 .947.333l.254.582a.75.75 0 0 1-.948.947l-.253-.582a4.5 4.5 0 0 0-8.5 0l-.254.582a.75.75 0 1 1-.947-.947l.253-.582a6 6 0 0 1 10 0Z" /><path d="M15.5 8.133a.75.75 0 0 1 .947.333l.254.582a.75.75 0 0 1-.948.947l-.253-.582a4.5 4.5 0 0 0-8.5 0l-.254.582a.75.75 0 1 1-.947-.947l.253-.582a6 6 0 0 1 10 0Z" /><path d="M15.5 11.133a.75.75 0 0 1 .947.333l.254.582a.75.75 0 0 1-.948.947l-.253-.582a4.5 4.5 0 0 0-8.5 0l-.254.582a.75.75 0 1 1-.947-.947l.253-.582a6 6 0 0 1 10 0Z" /></svg>
            </div>
            <div className="step-ttl">3. CO₂吸収</div>
            <div className="step-txt">施設が24時間365日CO₂を吸収</div>
          </div>
          <div className="step">
            <div className="ico violet">
              <svg fill="currentColor" viewBox="0 0 20 20"><path d="M11.22 8.242a.75.75 0 0 1 0 1.06l-2.243 2.243a.75.75 0 0 1-1.06-1.06l2.242-2.243a.75.75 0 0 1 1.06 0Z" /><path fillRule="evenodd" d="M5.964 1.342a.75.75 0 0 1 .854-.142l8 4.5a.75.75 0 0 1 0 1.39l-8 4.5a.75.75 0 0 1-.854-.143l-4.5-8a.75.75 0 0 1 .142-.853l4.5-8Z" clipRule="evenodd" /></svg>
            </div>
            <div className="step-ttl">4. NFT報酬</div>
            <div className="step-txt">ステーキング参加者にNFTを配布</div>
          </div>
        </div>

        {/* ロードマップ */}
        <h3 className="sec-ttl cyan">ロードマップ</h3>
        <div className="road card">
          <div className="q">
            <span className="q-badge qb-g">Q1</span>
            <div className="q-body">
              <div className="q-ttl">2025年 第1四半期</div>
              <div className="q-txt">
                IEO実施、トークン配布開始、初期ステーキングプール開設
              </div>
            </div>
          </div>

          <div className="q">
            <span className="q-badge qb-b">Q2</span>
            <div className="q-body">
              <div className="q-ttl">2025年 第2四半期</div>
              <div className="q-txt">
                第1期生産施設建設開始、パートナーシップ拡大
              </div>
            </div>
          </div>

          <div className="q">
            <span className="q-badge qb-v">Q3</span>
            <div className="q-body">
              <div className="q-ttl">2025年 第3四半期</div>
              <div className="q-txt">
                初期施設稼働開始、CO₂吸収データ記録開始、NFT発行開始
              </div>
            </div>
          </div>

          <div className="q">
            <span className="q-badge qb-y">Q4</span>
            <div className="q-body">
              <div className="q-ttl">2025年 第4四半期</div>
              <div className="q-txt">
                NFTマーケットプレイス開設、第2期施設建設計画発表
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Styles ===== */}
      <style jsx>{`
        /* === COLOR & FONT VARIABLES === */
        :root {
          --black: #000000;
          --panel: #141414;
          --ink: #ffffff;
          --ink-dim: #a0a0a0;
          --border: rgba(255, 255, 255, 0.12);
          --radius-lg: 16px;
          --radius-md: 12px;
          --yellow: #f5c82e;
          --green: #27c18d;
          --cyan: #39d6e5;
          --violet: #a98aff;
          --blue: #4f96ee;
          --red: #f36653;
        }

        /* === BASE STYLES === */
        .token {
          background: var(--black);
          padding: 80px 16px;
          font-family: sans-serif;
        }
        .container {
          max-width: 900px;
          margin: 0 auto;
          color: var(--ink);
        }

        /* === HEADINGS === */
        .label {
          display: block;
          text-align: center;
          margin: 0 auto 12px;
          width: fit-content;
          color: var(--yellow);
          background: rgba(245, 200, 46, 0.1);
          border: 1px solid rgba(245, 200, 46, 0.3);
          border-radius: 999px;
          padding: 6px 14px;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.05em;
        }
        .title {
          text-align: center;
          font-weight: 800;
          font-size: clamp(32px, 5vw, 44px);
          line-height: 1.2;
          margin: 8px 0 32px;
          color: var(--ink);
        }
        .subttl {
          color: var(--yellow);
          text-align: center;
          font-weight: 700;
          letter-spacing: 0.06em;
          margin-bottom: 16px;
          font-size: 22px;
          text-shadow: 0 0 18px rgba(245, 200, 46, 0.3);
        }
        .sec-ttl {
          text-align: center;
          font-weight: 700;
          font-size: 22px;
          margin: 64px 0 16px;
        }
        .sec-ttl.red {
          color: var(--red);
          text-shadow: 0 0 18px rgba(243, 102, 83, 0.3);
        }
        .sec-ttl.purple {
          color: var(--violet);
          text-shadow: 0 0 18px rgba(169, 138, 255, 0.3);
        }
        .sec-ttl.cyan {
          color: var(--cyan);
          text-shadow: 0 0 18px rgba(57, 214, 229, 0.3);
        }

        /* === PANELS & CARDS === */
        .panel {
          background: var(--panel);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 24px 28px;
        }
        .panel-lg {
          margin-bottom: 32px;
        }
        .card {
          background: var(--panel);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 24px 28px;
        }
        .mini-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 18px 20px;
        }

        /* === GRID LAYOUTS === */
        .triple {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }
        @media (min-width: 768px) {
          .triple {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .grid.two {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
          margin: 32px 0;
        }
        @media (min-width: 768px) {
          .grid.two {
            grid-template-columns: 1fr 1fr;
          }
        }

        /* === TEXT & CONTENT === */
        .panel-lead {
          color: var(--ink);
          line-height: 1.9;
          margin: 0 0 20px;
        }
        .panel-txt {
          color: var(--ink-dim);
          line-height: 1.9;
          margin: 0;
        }
        .mini-badge.yellow {
          color: var(--yellow);
          font-weight: 700;
          font-size: 15px;
          margin-bottom: 10px;
        }
        .mini-text {
          color: var(--ink-dim);
          font-size: 14px;
          line-height: 1.8;
          margin: 0;
        }
        .card-ttl {
          font-weight: 700;
          font-size: 18px;
          margin-bottom: 18px;
          display: flex;
          align-items: center;
          color: var(--ink);
        }
        .accent {
          color: var(--yellow);
          font-weight: bold;
        }
        .accent-blue {
          color: var(--blue);
          font-weight: bold;
        }
        .note {
          color: var(--ink-dim);
          font-size: 13px;
          margin-top: 24px;
          line-height: 1.7;
          border-top: 1px solid var(--border);
          padding-top: 16px;
        }
        
        /* === BASIC INFO CARD === */
        .coin {
          display: inline-grid;
          place-items: center;
          width: 32px;
          height: 32px;
          margin-right: 10px;
          background: var(--yellow);
          color: #000000;
          border-radius: 50%;
          font-weight: 700;
          font-size: 16px;
        }
        .info .row {
          display: flex;
          justify-content: space-between;
          gap: 16px;
          padding: 12px 0;
          border-bottom: 1px solid var(--border);
          font-size: 15px;
        }
        .info .row:last-child {
          border-bottom: none;
        }
        .info .k {
          color: var(--ink-dim);
        }
        .info .v {
          color: var(--ink);
          font-weight: 500;
        }
        
        /* === BENEFITS CARD === */
        .card-green {
          background: rgba(39, 193, 141, 0.07);
          border-color: rgba(39, 193, 141, 0.2);
        }
        .benefits {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .benefits li {
          display: grid;
          grid-template-columns: 16px auto;
          align-items: flex-start;
          gap: 12px;
          margin-top: 16px;
        }
        .benefits li:first-child {
          margin-top: 0;
        }
        .benefits strong {
          font-weight: 700;
          color: var(--ink);
          margin-bottom: 2px;
          display: block;
        }
        .benefits p {
          color: var(--ink-dim);
          line-height: 1.8;
          font-size: 15px;
          margin: 0;
          grid-column: 2 / -1;
        }
        .dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: var(--green);
          margin-top: 7px;
          box-shadow: 0 0 12px rgba(39, 193, 141, 0.7);
        }
        
        /* === ALLOCATION BARS === */
        .bar-row {
          display: grid;
          grid-template-columns: 140px 1fr 50px;
          align-items: center;
          gap: 14px;
          margin: 16px 0;
          font-size: 15px;
        }
        .bar-k {
          color: var(--ink-dim);
        }
        .bar {
          height: 8px;
          background: #333333;
          border-radius: 999px;
          overflow: hidden;
        }
        .bar span {
          display: block;
          height: 100%;
          background: #cccccc;
        }
        .bar span.bar-fill-blue {
          background: var(--blue);
        }
        .bar-v {
          text-align: right;
          color: var(--ink-dim);
          font-weight: 500;
        }
        
        /* === LOCKUP CARD === */
        .lock-ttl {
          color: var(--red);
          font-weight: 700;
          margin-bottom: 8px;
        }

        /* === ECOSYSTEM FLOW === */
        .flow.card {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          padding: 32px;
        }
        @media (min-width: 768px) {
          .flow.card {
            grid-template-columns: repeat(4, 1fr);
          }
        }
        .step {
          text-align: center;
        }
        .ico {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          display: inline-grid;
          place-items: center;
          margin-bottom: 12px;
          padding: 16px;
          color: white;
        }
        .ico.gold {
          background: rgba(164, 131, 51, 0.2);
          border: 1px solid #a48333;
        }
        .ico.green {
          background: rgba(39, 193, 141, 0.2);
          border: 1px solid #27c18d;
        }
        .ico.blue {
          background: rgba(79, 150, 238, 0.2);
          border: 1px solid #4f96ee;
        }
        .ico.violet {
          background: rgba(169, 138, 255, 0.2);
          border: 1px solid #a98aff;
        }
        .step-ttl {
          font-weight: 700;
          margin-bottom: 4px;
          color: var(--ink);
        }
        .step-txt {
          color: var(--ink-dim);
          font-size: 14px;
        }

        /* === ROADMAP === */
        .road.card {
          display: flex;
          flex-direction: column;
          gap: 1px;
          padding: 24px;
        }
        .q {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 12px 0;
        }
        .q-badge {
          flex-shrink: 0;
          display: inline-grid;
          place-items: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          font-weight: 700;
          font-size: 14px;
          border: 1px solid;
        }
        .q-body {
          flex-grow: 1;
        }
        .qb-g {
          background: rgba(39, 193, 141, 0.1);
          border-color: rgba(39, 193, 141, 0.4);
          color: var(--green);
        }
        .qb-b {
          background: rgba(79, 150, 238, 0.1);
          border-color: rgba(79, 150, 238, 0.4);
          color: var(--blue);
        }
        .qb-v {
          background: rgba(169, 138, 255, 0.1);
          border-color: rgba(169, 138, 255, 0.4);
          color: var(--violet);
        }
        .qb-y {
          background: rgba(245, 200, 46, 0.1);
          border-color: rgba(245, 200, 46, 0.4);
          color: var(--yellow);
        }
        .q-ttl {
          font-weight: 700;
          color: var(--ink);
          margin-bottom: 2px;
          font-size: 15px;
        }
        .q-txt {
          color: var(--ink-dim);
          font-size: 14px;
          line-height: 1.6;
        }
      `}</style>
    </section>
  );
}