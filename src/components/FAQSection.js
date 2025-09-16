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
            MOTHER VEGETABLES Token（MVT）は藻類培養生産施設と直接接続されたユーティリティトークンとして機能し、以下の核心的ユーティリティを提供します：
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
              <span className="coin">＄</span>
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
              <li><span className="dot dot-g" />透明性 <em>— NFT取得を証したブロックチェーン検証CO₂削減証明書。</em></li>
              <li><span className="dot dot-g" />収益機会 <em>— 環境インパクトNFTの二次市場取引機会。</em></li>
              <li><span className="dot dot-g" />成長ポテンシャル <em>— 生産施設拡張およびNFT発行能力増加に連動した価値上昇。</em></li>
            </ul>
          </div>
        </div>

        {/* トークン配布 & 資本配置 */}
        <div className="grid two">
          <div className="card">
            <div className="card-ttl">トークン配布</div>

            <div className="bar-row">
              <div className="bar-k">IEO販売</div>
              <div className="bar"><span style={{width:'10%'}} /></div>
              <div className="bar-v">10%</div>
            </div>

            <div className="bar-row">
              <div className="bar-k">チーム配分</div>
              <div className="bar"><span style={{width:'5%'}} /></div>
              <div className="bar-v">5%</div>
            </div>

            <div className="bar-row">
              <div className="bar-k">アドバイザリープール</div>
              <div className="bar"><span style={{width:'5%'}} /></div>
              <div className="bar-v">5%</div>
            </div>

            <div className="bar-row">
              <div className="bar-k">リザーブファンド</div>
              <div className="bar"><span style={{width:'80%'}} /></div>
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
              <div className="bar"><span style={{width:'60%'}} /></div>
              <div className="bar-v accent">60%</div>
            </div>

            <div className="bar-row">
              <div className="bar-k">システム開発</div>
              <div className="bar"><span style={{width:'20%'}} /></div>
              <div className="bar-v">20%</div>
            </div>

            <div className="bar-row">
              <div className="bar-k">マーケティング・事業開発</div>
              <div className="bar"><span style={{width:'20%'}} /></div>
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
            <div className="ico gold">①</div>
            <div className="step-ttl">1. IEO参加</div>
            <div className="step-txt">投資家がMVTトークンを購入</div>
          </div>
          <div className="step">
            <div className="ico green">②</div>
            <div className="step-ttl">2. 施設建設</div>
            <div className="step-txt">資金で生産施設を建設・拡張</div>
          </div>
          <div className="step">
            <div className="ico blue">③</div>
            <div className="step-ttl">3. CO₂吸収</div>
            <div className="step-txt">施設が24時間365日CO₂を吸収</div>
          </div>
          <div className="step">
            <div className="ico violet">④</div>
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
              <div className="q-txt">IEO実施、トークン配布開始、初期ステーキングプール開設</div>
            </div>
          </div>

          <div className="q">
            <span className="q-badge qb-b">Q2</span>
            <div className="q-body">
              <div className="q-ttl">2025年 第2四半期</div>
              <div className="q-txt">第1期生産施設建設開始、パートナーシップ拡大</div>
            </div>
          </div>

          <div className="q">
            <span className="q-badge qb-v">Q3</span>
            <div className="q-body">
              <div className="q-ttl">2025年 第3四半期</div>
              <div className="q-txt">初期施設稼働開始、CO₂吸収データ記録開始、NFT発行開始</div>
            </div>
          </div>

          <div className="q">
            <span className="q-badge qb-y">Q4</span>
            <div className="q-body">
              <div className="q-ttl">2025年 第4四半期</div>
              <div className="q-txt">NFTマーケットプレイス開設、第2期施設建設計画発表</div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Styles ===== */}
      <style jsx>{`
        :root{
          --black:#000;
          --ink:#e6edf3;
          --ink-dim:#b7c1c8;
          --panel:#0e141b;
          --border:rgba(255,255,255,.06);
          --radius-lg:18px;
          --radius-md:14px;
          --yellow:#facc15;
          --green:#22c55e;
          --cyan:#22d3ee;
          --violet:#a78bfa;
          --blue:#60a5fa;
        }
        .token{background:var(--black); padding:80px 16px;}
        .container{max-width:1200px;margin:0 auto;color:var(--ink);}
        .label{
          display:inline-block;margin:0 auto 10px; color:var(--yellow);
          background:rgba(250,204,21,.12); border:1px solid rgba(250,204,21,.4);
          border-radius:999px; padding:6px 12px; font-size:13px; letter-spacing:.08em;
        }
        .title{text-align:center; font-weight:800; font-size:42px; line-height:1.2; margin:8px 0 24px;}
        @media (min-width:1200px){ .title{font-size:52px;} }
        .subttl{color:var(--yellow); text-align:center; font-weight:700; letter-spacing:.06em; margin-bottom:18px;}

        .panel{
          background:var(--panel); border:1px solid var(--border);
          border-radius:var(--radius-lg); padding:24px; box-shadow:0 10px 28px rgba(0,0,0,.35);
        }
        .panel-lg{margin-bottom:28px;}
        .panel-lead{color:var(--ink); opacity:.9; line-height:1.9; margin:0 0 16px;}
        .panel-txt{color:var(--ink-dim); line-height:1.9; margin:0;}

        .triple{display:grid; grid-template-columns:1fr; gap:14px;}
        @media (min-width:900px){ .triple{grid-template-columns:repeat(3,1fr);} }
        .mini-card{
          background:rgba(255,255,255,.02); border:1px solid var(--border);
          border-radius:var(--radius-md); padding:16px 18px;
        }
        .mini-badge.yellow{
          display:inline-block; background:rgba(250,204,21,.12); border:1px solid rgba(250,204,21,.4);
          color:var(--yellow); border-radius:10px; font-weight:700; font-size:14px; padding:6px 10px; margin-bottom:10px;
        }
        .mini-text{color:var(--ink-dim); line-height:1.8; margin:0;}

        .grid.two{display:grid; grid-template-columns:1fr; gap:18px; margin:28px 0;}
        @media (min-width:900px){ .grid.two{grid-template-columns:1fr 1fr;} }

        .card{
          background:var(--panel); border:1px solid var(--border);
          border-radius:var(--radius-lg); padding:20px 22px; box-shadow:0 10px 24px rgba(0,0,0,.35);
        }
        .card-green{ background:rgba(2,40,20,.8); border-color:rgba(34,197,94,.35); }
        .card-ttl{ font-weight:800; margin-bottom:14px; }
        .coin{
          display:inline-grid; place-items:center; width:28px; height:28px; margin-right:8px;
          background:rgba(250,204,21,.12); border:1px solid rgba(250,204,21,.4); color:var(--yellow); border-radius:50%;
        }

        .info .row{ display:flex; gap:24px; padding:8px 0; border-bottom:1px dashed rgba(255,255,255,.06); }
        .info .row:last-child{ border-bottom:none; }
        .info .k{ width:180px; color:#9aa7b0; }
        .info .v{ flex:1; color:var(--ink); }
        .accent{ color:var(--yellow); }

        .benefits{ list-style:none; margin:0; padding:0; color:var(--ink); }
        .benefits li{ display:flex; align-items:flex-start; gap:8px; margin:10px 0; }
        .benefits em{ color:#cfe4d6; font-style:normal; }
        .dot{ width:10px;height:10px;border-radius:50%;}
        .dot-g{ background:var(--green); }

        .bar-row{ display:grid; grid-template-columns:160px 1fr 60px; align-items:center; gap:12px; margin:10px 0; }
        .bar-k{ color:#c7d0d8; }
        .bar{ height:8px; background:#1b2530; border-radius:999px; overflow:hidden; }
        .bar span{ display:block; height:100%; background:linear-gradient(90deg,#f1f5f9,#9ca3af); }
        .bar-v{ text-align:right; color:#c7d0d8; }
        .note{ color:#93a0aa; font-size:13px; margin-top:12px; }

        .sec-ttl{ text-align:center; font-weight:800; margin:38px 0 14px; }
        .sec-ttl.red{ color:#fb7185; }
        .sec-ttl.purple{ color:var(--violet); }
        .sec-ttl.cyan{ color:var(--cyan); }

        .lock-ttl{ color:#fb7185; font-weight:700; margin-bottom:8px; }

        .flow.card{ display:grid; grid-template-columns:1fr; gap:18px; }
        @media (min-width:900px){ .flow.card{ grid-template-columns:repeat(4,1fr); } }
        .step{text-align:center;}
        .ico{
          width:54px; height:54px; border-radius:50%; display:inline-grid; place-items:center;
          font-weight:800; color:#0b141b; margin-bottom:10px;
        }
        .ico.gold{ background:linear-gradient(135deg,#facc15,#eab308); }
        .ico.green{ background:linear-gradient(135deg,#22c55e,#16a34a); }
        .ico.blue{ background:linear-gradient(135deg,#60a5fa,#3b82f6); }
        .ico.violet{ background:linear-gradient(135deg,#a78bfa,#8b5cf6); }
        .step-ttl{ font-weight:700; margin-bottom:4px; }
        .step-txt{ color:#aeb8c1; }

        .road.card{ display:grid; grid-template-columns:1fr; gap:14px; }
        .q{ display:flex; align-items:center; gap:12px; }
        .q-badge{
          display:inline-grid; place-items:center; width:36px; height:36px; border-radius:50%;
          color:#081017; font-weight:800;
        }
        .qb-g{ background:linear-gradient(135deg,#34d399,#10b981); }
        .qb-b{ background:linear-gradient(135deg,#93c5fd,#60a5fa); }
        .qb-v{ background:linear-gradient(135deg,#c4b5fd,#a78bfa); }
        .qb-y{ background:linear-gradient(135deg,#fde68a,#fbbf24); }
        .q-ttl{ font-weight:800; color:var(--ink); }
        .q-txt{ color:#aeb8c1; }
      `}</style>
    </section>
  )
}
