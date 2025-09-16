"use client";
import React from "react";

export default function GuaranteeSection() {
  return (
    <section className="tech-section">
      <div className="container">

        {/* ヘッダー */}
        <div className="header">
          <span className="label">4. プロジェクト詳細</span>
          <h2 className="title">実証済みの技術基盤</h2>
          <p className="subtitle green">イントロダクション（既存事業の説明）</p>
        </div>

        {/* イントロ本文カード（紫コールアウト含む） */}
        <div className="card">
          <p>
            MOTHER VEGETABLES PROJECTの主幹事である
            <b>Algae International Berhad（AIB）</b> 社は
            2007年から地球最初の植物である藻類の研究を日本でスタートし、
            現在世界中に <b>8か国、70拠点</b> に展開しています。
            AIB社における藻類の研究はゲノム解析まで完了し培養のメカニズムを確立、
            培養元となる藻類を<strong>「マザーベジタブル」</strong>と命名しました。
          </p>
          <p>
            豊かに生きられる持続可能な社会を築くためには、限りある化石資源への過度な依存からの脱却が不可欠です。
            その鍵として注目されているのが、光合成という営みを通じて太陽エネルギーを効率的に蓄えて
            多様な有機物を生み出す<strong>藻類</strong>です。
            藻類はそのまま食品や飼料となるだけでなく、抽出した原料から医薬品、燃料、プラスチック、繊維など
            幅広い分野へ応用可能です。さらに、砂漠や荒地のような農業利用が難しい土地でも、
            太陽光と少量の水で培養でき、陸上植物と比して物質生産効率が圧倒的に高い特性を持っています。
          </p>

          <div className="callout">
            2025年夏に日本で開催される「2025年日本国際博覧会（大阪・関西万博）」の
            「日本館」では<strong>藻類の可能性</strong>について展示が予定されており、
            今後世界中で注目される分野です。
          </div>
        </div>

        {/* 核心技術プラットフォーム */}
        <h3 className="section-h purple">核心技術プラットフォーム</h3>
        <div className="card">
          <p>
            主要事業体であるAIBは2007年より独自の藻類培養システムを開発。
            18年間にわたる専門研究を通じて、我々が<strong>「マザーベジタブル技術」</strong>と呼ぶ
            培養メカニズムを確立しました。
          </p>

          <div className="platform">
            <div className="platform-head">MOTHER VEGETABLES 培養システム</div>

            <div className="platform-inner">
              <div className="platform-grid">
                <div className="pla-box blue">
                  <svg viewBox="0 0 24 24" width="36" height="36" aria-hidden>
                    <path fill="currentColor" d="M3 21h18v-2H3v2zm2-4h14V7h-3V5h-2v2H7V5H5v2H3v10h2z"/>
                  </svg>
                  <h4>培養施設外観</h4>
                  <p>気候制御された透明建物での多層培養システム</p>
                </div>
                <div className="pla-box green">
                  <svg viewBox="0 0 24 24" width="36" height="36" aria-hidden>
                    <path fill="currentColor" d="M3 17h6v2H3v-2zm12-2h6v4h-6v-4zM3 5h10v8H3V5zm12 0h6v8h-6V5z"/>
                  </svg>
                  <h4>培養システム内部</h4>
                  <p>藻類と野菜の統合生産を可能にする革新的システム</p>
                </div>
              </div>

              <p className="footnote">※ 実際の施設画像は後日追加予定</p>
            </div>
          </div>
        </div>

        {/* 市場における地位 */}
        <div className="card">
          <h4 className="chip-h">市場における地位</h4>
          <div className="chips">
            <ul className="dot-list">
              <li>グローバル展開：8か国、70の運営施設</li>
              <li>技術ステータス：24時間365日自律運転による実証済み商業的実用性</li>
            </ul>
            <ul className="dot-list">
              <li>統合システム：太陽光発電および蓄電システムの統合</li>
              <li>実証データ：安定的かつ効率的なCO₂吸収能力の実証</li>
            </ul>
          </div>
        </div>

        {/* 地球環境への参加機会 */}
        <div className="card">
          <h4 className="chip-h green">地球環境への参加機会</h4>
          <p>
            MOTHER VEGETABLES PROJECT は、環境保全と持続可能な未来を両立させる革新的なプロジェクトです。
            透明性のある測定可能な環境インパクトを提供しながら、<b>CO₂吸収連動型システム</b>を通じて、
            参加者が地球の健康回復に<strong>直接貢献</strong>できる仕組みを提供します。
          </p>
        </div>

        {/* プロジェクト概要と成長戦略 */}
        <h3 className="section-h green">プロジェクト概要と成長戦略</h3>
        <div className="card">
          <p>
            本プロジェクトは、均質化された藻類培養技術を基盤とした生産工場を世界各国に自社拠点として構築・稼働させることで、
            事業モデルの実証（デモンストレーション）を行います。これらの実証施設が安定稼働することにより、
            生産システムの信頼性と商業的価値が裏付けられ、グローバル市場における採用・導入の急速な拡大が期待されます。
          </p>
          <p>
            藻類を活用した各種製品の生産工程では、大気中のCO₂を効率的に吸収し、同時にCO₂を排出しません。
            当社の均質化生産システムは、CO₂吸収量を安定的かつ継続的に維持でき、24時間365日の稼働を実現します。
            生産拠点数の増加はそのままCO₂吸収総量の増大へと直結し、環境負荷低減への貢献度を飛躍的に高めます。
          </p>
        </div>

        {/* 資金調達とトークンエコノミクス */}
        <h3 className="section-h yellow">資金調達とトークンエコノミクス</h3>
        <div className="two-col">
          <div className="card">
            <h4 className="accent yellow">資金調達メカニズム</h4>
            <p>
              当社は <b>IEO（Initial Exchange Offering）</b> およびトークンの市場流通を通じて資金調達を実施し、
              その資金を生産拠点の新規建設・拡張に充当します。
            </p>
            <p>
              保有者は、当プロジェクトが発行する<strong>MOTHER VEGETABLES Token（MVT）</strong>を
              ステーキングプールへ預け入れることで、当社が実施する施設で<strong>実際に吸収されたCO₂量</strong>に連動した
              <strong>NFT</strong>を受け取ることができます。NFTは透明性高くブロックチェーン上で証明されるデジタルアセットであり、
              ステーキング参加者へのリワード（返礼）として付与されます。
            </p>
          </div>
          <div className="card">
            <h4 className="accent yellow">NFTの流通と価値創造</h4>
            <p>
              発行されたCO₂吸収連動型NFTは、提携およびオープンなマーケットプレイスにおいて自由に売買が可能です。
              環境貢献の証明としての価値にとどまらず、二次市場における取引価値を持つ<strong>資産</strong>として機能します。
            </p>
            <p>
              この仕組みにより、投資家は環境価値の創出と経済的リターンの双方を享受でき、当社は資金循環を通じて
              生産能力を拡大し、<b>地球規模でのCO₂削減効果</b>を加速させます。
            </p>
          </div>
        </div>

        {/* 課題と解決策 */}
        <h3 className="section-h red">本プロジェクトが解決する課題</h3>

        <div className="split card">
          <h4>1. 社会的課題</h4>
          <div className="split-grid">
            <div>
              <p className="tag">【課題】</p>
              <ul className="tri-list">
                <li>気候変動への関心は高まっているものの、個人・企業が直接的にCO₂削減に参加できる仕組みが不足。</li>
                <li>環境貢献活動の成果が定量化されず、一般社会に正しく認知されにくい。</li>
                <li>環境テクノロジーへの投資機会が限定的で、一般投資家の参入障壁が高い。</li>
              </ul>
            </div>
            <div>
              <p className="tag ok">【解決策】</p>
              <ul className="check-list">
                <li>ステーキングとNFTを通じ、誰でもCO₂削減活動に経済的に参加できる分散型プラットフォームを提供。</li>
                <li>ブロックチェーンにCO₂吸収量を記録し、環境貢献を可視化・証明。</li>
                <li>小口投資から参加可能な形で、環境関連ビジネスへの投資領域を拡大。</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="split card">
          <h4>2. 経済的課題</h4>
          <div className="split-grid">
            <div>
              <p className="tag">【課題】</p>
              <ul className="tri-list">
                <li>再生可能資源・環境保全技術の普及には多額の初期投資が必要で、資金調達が課題。</li>
                <li>環境貢献が直接的な収益モデルに結びつかず、事業の持続可能性が確保しにくい。</li>
                <li>カーボンクレジット市場は複雑かつ閉鎖的で、小規模事業者や個人が参加しづらい。</li>
              </ul>
            </div>
            <div>
              <p className="tag ok">【解決策】</p>
              <ul className="check-list">
                <li>IEOおよびトークンエコノミクスを活用した国際的資金調達スキームを構築。</li>
                <li>NFTを活用し、環境価値をデジタル資産として市場取引可能にすることで、持続的な収益確保を実現。</li>
                <li>オープンかつ透明性の高いCO₂削減価値取引の仕組みを提供し、広範な市場参加を促進。</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="split card">
          <h4>3. 環境的課題</h4>
          <div className="split-grid">
            <div>
              <p className="tag">【課題】</p>
              <ul className="tri-list blue">
                <li>世界的なCO₂排出量増加による地球温暖化の加速。</li>
                <li>自然環境によるCO₂吸収能力の限界（森林伐採・土地利用変化による吸収源の減少）。</li>
                <li>既存のCO₂削減プロジェクトは地域限定で、グローバルスケールでの即効性に欠ける。</li>
              </ul>
            </div>
            <div>
              <p className="tag ok">【解決策】</p>
              <ul className="check-list">
                <li>藻類培養技術による<strong>24時間365日</strong>の安定的なCO₂吸収システムを世界各地に展開。</li>
                <li>均一化生産システムにより、吸収効率の高い施設を短期間で複数拠点に展開可能。</li>
                <li>吸収量データをリアルタイムでブロックチェーンに記録し、世界規模で環境効果を可視化。</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 強み */}
        <h3 className="section-h purple">本プロジェクトの優位性（強み）</h3>
        <div className="card">
          <p>
            本プロジェクトは単なる構想段階にとどまらず、実証フェーズを完了し事業化に向けた基盤を確立しています。
            均一化生産システムは<strong>24時間365日稼働</strong>し、CO₂の安定的かつ効率的な吸収を裏付け済み。
            さらにASEAN諸国をはじめ各国政府機関ならびに複数大学・研究機関と戦略的パートナーシップを構築済みで、
            研究開発から事業展開、規制対応に至るまで国際的な協力体制が整っています。
          </p>
          <p>
            既に稼働している実証施設と、国際的な官学連携という二つの強みは、
            本プロジェクトの信頼性と実現可能性を裏付ける<strong>大きな競争優位性</strong>です。
          </p>
        </div>

        {/* 運営の卓越性 / 環境インパクト */}
        <div className="two-col">
          <div className="card">
            <h4 className="accent blue">運営の卓越性</h4>
            <p>
              我々の培養施設は太陽光発電および蓄電システムを統合し、完全自律運転を実現。
              この24時間365日の運転能力は、安定的かつ効率的なCO₂吸収を提供することが実証されており、
              商業的スケーラビリティの具体的証拠を確立しています。
            </p>
          </div>
          <div className="card">
            <h4 className="accent green">環境インパクト</h4>
            <p>
              各生産施設は大気中のCO₂削減に直接貢献しながら、同時に酸素を生産。
              標準化された生産システムは継続運転を通じて一貫したCO₂吸収率を維持し、
              <strong>運営施設数に比例</strong>してスケーリングします。
            </p>
          </div>
        </div>
      </div>

      {/* styles */}
      <style jsx>{`
        :root {
          --bg: #0b1216;
          --card: #141c24;
          --stroke: rgba(200,255,230,.12);
          --text: #eaf7ee;
          --muted: #cfe2ef;
          --green: #00db6a;
          --purple: #d892ff;
          --yellow: #ffd166;
          --blue: #6fb2ff;
          --red: #ff6b6b;
        }
        .tech-section { background: var(--bg); color: var(--text); padding: 6rem 1rem; }
        .container { max-width: 1200px; margin: 0 auto; }
        .header { text-align: center; margin-bottom: 1.2rem; }
        .label { display:inline-block; padding:6px 14px; border-radius:999px; background:rgba(255,255,255,.08); color:#9aa; font-size:13px; margin-bottom:12px; }
        .title { font-size: clamp(28px, 4.2vw, 44px); font-weight: 800; margin: 0 0 6px; }
        .subtitle { font-weight: 800; margin: 0; }
        .subtitle.green { color: var(--green); }

        .section-h { text-align:center; font-size:18px; font-weight:800; margin: 32px 0 14px; }
        .section-h.purple { color: var(--purple); }
        .section-h.green { color: var(--green); }
        .section-h.yellow { color: var(--yellow); }
        .section-h.red { color: var(--red); }

        .card {
          background: rgba(20,28,36,.85);
          border: 1px solid var(--stroke);
          border-radius: 16px;
          padding: 20px 18px;
          line-height: 1.9;
          color: var(--muted);
          margin: 0 auto 22px;
        }
        .card p { margin: 0 0 10px; }

        .callout {
          margin-top: 14px;
          padding: 12px 14px;
          border-radius: 12px;
          background: rgba(120,90,255,.22);
          color: #dfe0ff;
        }

        /* プラットフォーム */
        .platform { margin-top: 12px; }
        .platform-head {
          text-align:center; font-weight: 900; color: var(--green);
          margin-bottom: 12px; letter-spacing: .8px;
        }
        .platform-inner {
          border: 1px solid var(--stroke);
          border-radius: 14px;
          padding: 16px;
          background: rgba(10,16,22,.6);
        }
        .platform-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 16px;
        }
        .pla-box {
          border-radius: 12px; padding: 18px; text-align: center; color: #dfefff;
        }
        .pla-box h4 { margin: 8px 0 6px; font-size: 16px; }
        .pla-box.blue { background: rgba(80,140,220,.15); }
        .pla-box.green { background: rgba(0,200,120,.15); }
        .footnote { text-align:center; margin: 10px 0 0; font-size: 12px; opacity: .9; }

        /* 市場における地位 */
        .chip-h { color: #e8f3ff; font-weight: 800; margin: 0 0 8px; }
        .chip-h.green { color: var(--green); }
        .chips { display:grid; grid-template-columns: 1fr 1fr; gap: 8px 24px; }
        .dot-list { list-style: none; padding:0; margin:0; }
        .dot-list li { position:relative; padding-left:18px; margin: 6px 0; }
        .dot-list li:before {
          content:""; position:absolute; left:0; top:.55em; width:8px; height:8px;
          border-radius:50%; background: #b79dff;
        }

        /* 2カラム汎用 */
        .two-col { display:grid; grid-template-columns: 1fr 1fr; gap: 22px; }

        .accent { font-weight: 900; margin: 0 0 8px; }
        .accent.yellow { color: var(--yellow); }
        .accent.blue { color: var(--blue); }
        .accent.green { color: var(--green); }

        /* 課題split */
        .split h4 { margin: 0 0 10px; color: #fff; }
        .split-grid { display:grid; grid-template-columns: 1fr 1fr; gap: 18px; }
        .tag { font-weight: 800; margin: 0 0 6px; }
        .tag.ok { color: var(--green); }
        .tri-list, .check-list { list-style: none; padding:0; margin:0; }
        .tri-list li, .check-list li { position: relative; padding-left: 20px; margin: 8px 0; }
        .tri-list li:before { content: "▶"; position:absolute; left:0; top:0; color: var(--red); font-size: 12px; }
        .tri-list.blue li:before { color: var(--blue); }
        .check-list li:before { content:"✓"; position:absolute; left:0; top:0; color: var(--green); font-weight:900; }

        /* レスポンシブ */
        @media (max-width: 1024px) {
          .two-col { grid-template-columns: 1fr; }
          .chips { grid-template-columns: 1fr; }
        }
        @media (max-width: 768px) {
          .platform-grid { grid-template-columns: 1fr; }
          .split-grid { grid-template-columns: 1fr; }
          .title { line-height: 1.15; }
        }
      `}</style>
    </section>
  );
}
