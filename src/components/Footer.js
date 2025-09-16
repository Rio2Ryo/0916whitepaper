// LandingSections.jsx
// 3セクション（投資リスク / 参加CTA / フッター）を黒背景でまとめた単一ファイル（CSS-in-JS付き）

export default function LandingSections() {
  return (
    <main className="wrap">
      {/* ===== 1) 投資リスクについて ===== */}
      <section className="risk">
        <div className="container">
          <div className="risk-head">
            <span className="chip">リスク開示</span>
            <h2 className="risk-title">投資リスクについて</h2>
            <p className="risk-intro">
              本ホワイトペーパーに記載された情報は、当該プロジェクトの計画や目標を示すものであり、将来の成果や価値を保証するものではありません。トークン
              の購入・保有・利用には以下のようなリスクが存在することをご理解ください。
            </p>
          </div>

          <div className="risk-grid">
            {/* 行1 */}
            <div className="risk-card red">
              <div className="risk-card-head">
                <span className="iconbox red">↗</span>
                <strong className="risk-k">市場リスク</strong>
              </div>
              <p className="risk-txt">
                暗号資産の価格は市場環境に大きく依存し、需要と供給、取引所の動向、投資家心理、規制の変化などにより急激に変動する可能性があります。トークンの価値が大幅に下
                落する、あるいは無価値となるリスクがあります。
              </p>
            </div>

            <div className="risk-card orange">
              <div className="risk-card-head">
                <span className="iconbox orange">🛡</span>
                <strong className="risk-k">規制・法令リスク</strong>
              </div>
              <p className="risk-txt">
                各国における暗号資産や関連サービスに関する法規制は未整備または流動的であり、将来的な規制強化や新たな規制導入により、トークンの利用や取引、プロジェクト自体が制
                限される可能性があります。
              </p>
            </div>

            {/* 行2 */}
            <div className="risk-card blue">
              <div className="risk-card-head">
                <span className="iconbox blue">⚠</span>
                <strong className="risk-k">技術リスク</strong>
              </div>
              <p className="risk-txt">
                ブロックチェーン技術、スマートコントラクト、その他のシステムにはバグ、脆弱性、攻撃のリス
                クが存在します。これにより、資産の喪失、プロジェクトの停止、利用不能などが発生する可能性があります。
              </p>
            </div>

            <div className="risk-card purple">
              <div className="risk-card-head">
                <span className="iconbox purple">山</span>
                <strong className="risk-k">流動性リスク</strong>
              </div>
              <p className="risk-txt">
                トークンが十分な市場で取引されない場合、希望する価格や数量で売買できない可能性があります。また、上場している取引所の取引停止・廃止などにより流動性が著しく低下
                することがあります。
              </p>
            </div>

            {/* 行3 */}
            <div className="risk-card yellow">
              <div className="risk-card-head">
                <span className="iconbox yellow">👥</span>
                <strong className="risk-k">運営リスク</strong>
              </div>
              <p className="risk-txt">
                本プロジェクトは開発チームの活動継続に依存しており、チームの解散、人材流出、資金調達不
                足などにより、計画通りに進行しない可能性があります。
              </p>
            </div>

            <div className="risk-card cyan">
              <div className="risk-card-head">
                <span className="iconbox cyan">▲</span>
                <strong className="risk-k">不可抗力リスク</strong>
              </div>
              <p className="risk-txt">
                自然災害、戦争、パンデミック、政治的混乱などの不可抗力により、プロジェクトの進行や施設
                の運営が困難になる可能性があります。
              </p>
            </div>
          </div>

          {/* 注意書き枠 */}
          <div className="notice">
            <h4>重要な注意事項</h4>
            <ul>
              <li>本トークンは投資商品ではなく、利益や配当を保証するものではありません。</li>
              <li>投資判断は必ず自己の責任で行い、失っても問題のない範囲での参加をお願いします。</li>
              <li>本ホワイトペーパーの内容は予告なく変更される場合があります。</li>
              <li>法的な問題等が生じた場合、適用される法律および管轄裁判所は各国の法令に従います。</li>
              <li>税務上の取り扱いについては、各国の税法に従い、必要に応じて専門家にご相談ください。</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== 2) 参加CTA（地球の未来…） ===== */}
      <section className="cta">
        <div className="container">
          <h2 className="cta-title">地球の未来を一緒に創りませんか？</h2>
          <p className="cta-lead">
            MOTHER VEGETABLES PROJECTは、環境保全と持続可能な未来を実現する革新的なプロジェクトです。
            あなたの参加が地球の健康回復に直接貢献し、次世代により良い地球を残すことができます。
          </p>

          <div className="cta-actions">
            <a href="#ieo" className="btn btn-green">🔗 IEOに参加する</a>
            <a href="/0912_whitepaper_ja.pdf" download className="btn btn-outline">⬇ ホワイトペーパーをダウンロード</a>
            <a href="#project-overview" className="btn btn-outline-blue">🔎 詳細情報</a>
          </div>

          <div className="cta-stats">
            <div className="stat">
              <div className="num green">700倍</div>
              <div className="cap">天然芝と比較したCO₂吸収効率</div>
            </div>
            <div className="stat">
              <div className="num blue">24/7</div>
              <div className="cap">年中無休のCO₂吸収システム</div>
            </div>
            <div className="stat">
              <div className="num violet">8カ国</div>
              <div className="cap">70拠点での実証済み技術</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 3) フッター ===== */}
      <footer className="footer">
        <div className="container">
          <div className="cols">
            <div className="brand">
              <div className="logo">MOTHER<br />VEGETABLES</div>
              <p className="brand-copy">
                地球最初の生命体による地球再生プロジェクト
              </p>
            </div>

            <div className="col">
              <div className="col-ttl">プロジェクト</div>
              <a href="#overview">プロジェクト概要</a>
              <a href="#team">チーム</a>
              <a href="#partners">パートナー</a>
              <a href="#tech">技術詳細</a>
            </div>

            <div className="col">
              <div className="col-ttl">トークン</div>
              <a href="#token">トークン情報</a>
              <a href="#ieo">IEO参加</a>
              <a href="#staking">ステーキング</a>
              <a href="#nft">NFTマーケット</a>
            </div>

            <div className="col">
              <div className="col-ttl">リソース</div>
              <a href="/0912_whitepaper_ja.pdf" download>ホワイトペーパー</a>
              <a href="#docs">技術文書</a>
              <a href="#faq">FAQ</a>
              <a href="#support">サポート</a>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="copy">© 2025 MOTHER VEGETABLES PROJECT. All rights reserved.</div>
            <div className="policies">
              <a href="#privacy">プライバシーポリシー</a>
              <a href="#terms">利用規約</a>
              <a href="#risk">リスク開示</a>
            </div>
          </div>
        </div>
      </footer>

      {/* ===== Styles (CSS-in-JS) ===== */}
      <style jsx>{`
        :root{
          --black:#000000;
          --ink:#ffffff;              /* 見出し白 */
          --ink-dim:#c9d2da;          /* 説明テキスト淡グレー */
          --panel:#0e151d;            /* 濃紺グレー */
          --border:rgba(255,255,255,.08);
          --radius-lg:18px;
          --radius-md:14px;
          --green:#22c55e;
          --blue:#60a5fa;
          --violet:#a78bfa;
          --red:#ef4444;
          --orange:#f59e0b;
          --yellow:#facc15;
          --cyan:#22d3ee;
        }

        .wrap{ background:var(--black); color:var(--ink); }

        .container{ max-width:1200px; margin:0 auto; padding:0 16px; }

        /* ===== RISK ===== */
        .risk{ padding:72px 0 24px; }
        .risk-head{ text-align:center; max-width:920px; margin:0 auto 24px; }
        .chip{
          display:inline-block; color:#fda4af; border:1px solid rgba(253,164,175,.35);
          background:rgba(253,164,175,.08); border-radius:999px; padding:6px 12px; font-size:13px; margin-bottom:10px;
        }
        .risk-title{ font-weight:900; font-size:40px; letter-spacing:.01em; margin:8px 0 12px; }
        @media (min-width:1200px){ .risk-title{ font-size:48px; } }
        .risk-intro{ color:var(--ink-dim); line-height:1.9; }

        .risk-grid{
          margin-top:24px;
          display:grid; gap:16px;
          grid-template-columns:1fr; 
        }
        @media (min-width:900px){ .risk-grid{ grid-template-columns:1fr 1fr; } }

        .risk-card{
          background:var(--panel);
          border:1px solid var(--border);
          border-radius:var(--radius-lg);
          padding:20px 22px;
          box-shadow:0 10px 26px rgba(0,0,0,.35);
        }
        .risk-card-head{ display:flex; align-items:center; gap:12px; margin-bottom:8px; }
        .iconbox{
          width:36px; height:36px; border-radius:10px; display:inline-grid; place-items:center;
          color:#fff; font-weight:800;
        }
        .risk-k{ font-size:16px; }
        .risk-txt{ color:var(--ink-dim); line-height:1.9; }

        .risk-card.red{    border-color:rgba(239,68,68,.35);   }
        .risk-card.orange{ border-color:rgba(245,158,11,.35);  }
        .risk-card.blue{   border-color:rgba(96,165,250,.35);  }
        .risk-card.purple{ border-color:rgba(167,139,250,.35); }
        .risk-card.yellow{ border-color:rgba(250,204,21,.35);  }
        .risk-card.cyan{   border-color:rgba(34,211,238,.35);  }

        .iconbox.red{    background:linear-gradient(135deg,#7c1d1d,#ef4444); }
        .iconbox.orange{ background:linear-gradient(135deg,#7a4a07,#f59e0b); }
        .iconbox.blue{   background:linear-gradient(135deg,#0f2a52,#60a5fa); }
        .iconbox.purple{ background:linear-gradient(135deg,#2a1f52,#a78bfa); }
        .iconbox.yellow{ background:linear-gradient(135deg,#4a3a03,#facc15); color:#0b0f14; }
        .iconbox.cyan{   background:linear-gradient(135deg,#073b44,#22d3ee); }

        .notice{
          margin-top:26px;
          background:linear-gradient(180deg, rgba(67,0,0,.35), rgba(67,0,0,.15));
          border:1px solid rgba(239,68,68,.35);
          border-radius:var(--radius-lg);
          padding:18px 22px;
        }
        .notice h4{ color:#fb7185; margin:0 0 8px; font-weight:800; }
        .notice ul{ margin:0; padding-left:1rem; color:#f1b5bc; line-height:1.9; }

        /* ===== CTA ===== */
        .cta{ padding:72px 0 56px; background:radial-gradient(1000px 280px at 50% 0, rgba(34,197,94,.08), transparent 60%); }
        .cta-title{ text-align:center; font-weight:900; font-size:40px; margin:0 0 12px; letter-spacing:.01em; }
        @media (min-width:1200px){ .cta-title{ font-size:48px; } }
        .cta-lead{ text-align:center; color:var(--ink-dim); max-width:900px; margin:0 auto 18px; line-height:1.9; }

        .cta-actions{
          display:flex; gap:12px; flex-direction:column; align-items:center; justify-content:center; margin:10px 0 26px;
        }
        @media (min-width:900px){ .cta-actions{ flex-direction:row; } }
        .btn{
          display:inline-flex; align-items:center; gap:8px;
          padding:12px 18px; border-radius:12px; font-weight:800; font-size:15px; text-decoration:none;
          transition:transform .15s ease, box-shadow .2s ease, background .2s ease, border-color .2s ease; 
        }
        .btn:hover{ transform:translateY(-1px); }
        .btn-green{ background:var(--green); color:#062012; border:1px solid var(--green); box-shadow:0 14px 28px rgba(34,197,94,.22); }
        .btn-outline{ background:#0b1310; color:var(--green); border:1px solid rgba(34,197,94,.35); }
        .btn-outline-blue{ background:#0b1116; color:#8fb9ff; border:1px solid rgba(96,165,250,.35); }

        .cta-stats{
          display:grid; grid-template-columns:1fr; gap:22px; text-align:center; max-width:900px; margin:0 auto;
        }
        @media (min-width:900px){ .cta-stats{ grid-template-columns:repeat(3,1fr); } }
        .num{ font-weight:900; font-size:36px; letter-spacing:.02em; }
        .num.green{ color:var(--green); text-shadow:0 0 12px rgba(34,197,94,.28); }
        .num.blue{ color:var(--blue); text-shadow:0 0 12px rgba(96,165,250,.28); }
        .num.violet{ color:var(--violet); text-shadow:0 0 12px rgba(167,139,250,.28); }
        .cap{ color:var(--ink-dim); margin-top:4px; }

        /* ===== FOOTER ===== */
        .footer{ padding:48px 0 40px; border-top:1px solid var(--border); }
        .cols{ display:grid; grid-template-columns:1fr; gap:18px; }
        @media (min-width:900px){ .cols{ grid-template-columns:2fr 1fr 1fr 1fr; } }

        .logo{ font-weight:900; line-height:1.05; color:#a7f3d0; letter-spacing:.02em; }
        .brand-copy{ color:#aab7c1; margin-top:8px; }

        .col{ display:flex; flex-direction:column; gap:8px; }
        .col-ttl{ font-weight:900; margin-bottom:4px; }
        .col a{ color:#aab7c1; text-decoration:none; font-size:15px; }
        .col a:hover{ color:#d8e6ee; }

        .footer-bottom{
          display:flex; flex-direction:column; gap:10px; justify-content:space-between; align-items:flex-start;
          padding-top:16px; margin-top:18px; border-top:1px solid var(--border);
        }
        @media (min-width:900px){ .footer-bottom{ flex-direction:row; align-items:center; } }
        .copy{ color:#9fb0bb; }
        .policies{ display:flex; gap:16px; }
        .policies a{ color:#9fb0bb; text-decoration:none; }
        .policies a:hover{ color:#def; }
      `}</style>
    </main>
  )
}
