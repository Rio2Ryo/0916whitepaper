import React from "react";

export default function GuaranteeSection() {
  return (
    <>
      <section className="mv-tech">
        <div className="mv-wrap">
          {/* 小ラベル */}
          <div className="mv-pill">4. プロジェクト詳細</div>

          {/* メイン見出し */}
          <h1 className="mv-h1">実証済みの技術基盤</h1>

          {/* サブ見出し（緑） */}
          <h2 className="mv-sub mv-sub--green">イントロダクション（既存事業の説明）</h2>

          {/* イントロ本文ボックス */}
          <div className="mv-card mv-card--intro">
            <p className="mv-p">
              MOTHER VEGETABLES PROJECTの主幹事であるAlgae International Berhad（AIB）社は
              2007年から地球最初の植物である藻類の研究を日本でスタートし、現在世界中に8カ国、70拠点に展開しています。
              AIB社における藻類の研究はゲノム解析まで完了し培養のメカニズムを確立させ、培養元となる藻類を「マザーベジタブル」と名付けました。
            </p>
            <p className="mv-p">
              豊かに生きられる持続可能な社会を築くためには、限りある化石資源への過度な依存から脱却することが必要です。
              その鍵として注目されているのが、光合成という営みを通じて太陽エネルギーを効率的に蓄えて多様な有機物を生み出す藻類です。
              藻類は、そのまま食品や飼料となるだけでなく、抽出した原料から医薬品、燃料、プラスチック、繊維など様々な分野への応用が可能です。
              さらに、砂漠や荒地のような農業利用が難しい土地でも、太陽光と少量の水で培養でき、陸上植物と比較して物質生産効率が圧倒的に高い特性を持っています。
            </p>

            <div className="mv-note">
              2025年夏日本にて開催されている「2025年日本国際博覧会」（通称「大阪・関西万博」）の「日本館」では藻類の可能性について展示されており、
              今後世界中で注目される分野です。
            </div>
          </div>

          {/* 見出し：核心技術プラットフォーム */}
          <h2 className="mv-sub">核心技術プラットフォーム</h2>

          {/* 培養システム図 */}
          <div className="mv-system">
            <h3 className="mv-system__title">MOTHER VEGETABLES 培養システム</h3>

            <div className="mv-system__grid">
              {/* 左カード：青 */}
              <div className="mv-system__card mv-system__card--blue">
                <div className="mv-system__icon">
                  {/* 工場アイコン（SVG） */}
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M3 20h18v-8l-5 3V9l-5 3V7L3 9v11zM7 11h2v2H7v-2zm0 4h2v2H7v-2z" />
                  </svg>
                </div>
                <div className="mv-system__label">培養施設外観</div>
                <p className="mv-system__caption">
                  気候制御された透明建物での多層培養システム
                </p>
              </div>

              {/* 右カード：緑 */}
              <div className="mv-system__card mv-system__card--green">
                <div className="mv-system__icon">
                  {/* 顕微鏡アイコン（SVG） */}
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M6 19a2 2 0 0 0 2 2h9v-2H8a2 2 0 0 0-2 2zm4.2-7.6 1.3 1.3-3.9 3.9a3 3 0 0 0 4.3 4.2l3.9-3.9 1.3 1.3 1.4-1.4-6.5-6.5-1.4 1.1zM14 3h2v4h-2zM12 5h6v2h-6z" />
                  </svg>
                </div>
                <div className="mv-system__label">培養システム内部</div>
                <p className="mv-system__caption">
                  藻類と野菜の統合生産を可能にする革新的システム
                </p>
              </div>
            </div>

            <div className="mv-system__note">※ 実際の施設画像は後日追加予定</div>
          </div>

          {/* 市場における地位 */}
          <div className="mv-columns">
            <h3 className="mv-col__title">市場における地位</h3>

            <div className="mv-col__grid">
              <ul className="mv-list">
                <li>グローバル展開：8カ国、70の運営施設</li>
                <li>技術ステータス：24時間365日自律運転による実証済み商業の実用性</li>
              </ul>
              <ul className="mv-list">
                <li>統合システム：太陽光発電および蓄電システムの統合</li>
                <li>実証データ：安定的かつ効率的なCO₂吸収能力の実証</li>
              </ul>
            </div>
          </div>

          {/* 地球環境への参加機会 */}
          <div className="mv-cta">
            <h3 className="mv-col__title">地球環境への参加機会</h3>
            <div className="mv-card mv-card--cta">
              <p className="mv-p">
                MOTHER VEGETABLES PROJECTは、環境保全と持続可能な未来を両立させる革新的なプロジェクトです。
                透明性のある測定可能な環境インパクトを提供しながら、CO₂吸収連動型システムを通じて
                参加者が地球の健康回復に直接貢献できる仕組みを提供します。
              </p>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        :root {
          --bg: #0b0f17;
          --panel: #0f1624;
          --panel-2: #101827;
          --stroke: rgba(255, 255, 255, 0.08);
          --purple: #b28cff; /* 見出しのグラデーション基調 */
          --purple-2: #7c6cf6;
          --green: #27c18d;
          --green-2: #1aa86c;
          --blue: #2e6bb8;
          --blue-2: #1f4e85;
          --text: #d7e0ef;
          --muted: #9fb0c9;
          --dot: #a887ff;
          --note-grad: linear-gradient(135deg, rgba(39, 193, 141, 0.12), rgba(124, 108, 246, 0.12));
        }

        .mv-tech {
          background: var(--bg);
          padding: 72px 16px 96px;
          color: var(--text);
        }
        .mv-wrap {
          max-width: 1100px;
          margin: 0 auto;
        }

        /* ピル */
        .mv-pill {
          display: inline-block;
          font-size: 12px;
          letter-spacing: 0.08em;
          color: #d8ccff;
          background: rgba(178, 140, 255, 0.12);
          border: 1px solid rgba(178, 140, 255, 0.35);
          padding: 6px 10px;
          border-radius: 999px;
          margin-bottom: 18px;
        }

        /* H1 */
        .mv-h1 {
          font-weight: 800;
          text-align: center;
          font-size: clamp(28px, 4vw, 44px);
          line-height: 1.2;
          margin: 0 0 28px;
          background: linear-gradient(180deg, #ffffff, #c9d3f3 60%, #7e8db3);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* サブ見出し */
        .mv-sub {
          margin: 34px 0 16px;
          font-weight: 700;
          font-size: clamp(18px, 2.6vw, 24px);
          color: #cebfff;
          text-shadow: 0 0 24px rgba(178, 140, 255, 0.35);
        }
        .mv-sub--green {
          color: #7ff2c7;
          text-shadow: 0 0 22px rgba(39, 193, 141, 0.45);
        }

        /* カード（共通） */
        .mv-card {
          background: linear-gradient(180deg, var(--panel), var(--panel-2));
          border: 1px solid var(--stroke);
          border-radius: 16px;
          padding: 22px 22px;
        }
        .mv-card--intro {
          padding: 20px 22px 8px;
        }
        .mv-card--cta {
          padding: 18px 22px;
        }

        .mv-p {
          color: var(--muted);
          line-height: 1.9;
          margin: 0 0 16px;
          font-size: 15px;
        }

        /* イントロの注釈帯 */
        .mv-note {
          margin-top: 16px;
          border-radius: 12px;
          padding: 14px 16px;
          font-size: 14px;
          line-height: 1.8;
          color: #dff8ee;
          background: var(--note-grad);
          border: 1px solid rgba(39, 193, 141, 0.35);
        }

        /* 培養システム */
        .mv-system {
          margin-top: 14px;
          border: 1px solid var(--stroke);
          border-radius: 18px;
          padding: 22px 18px 14px;
          background: linear-gradient(180deg, #0f1523, #0f1626 60%, #0e1420);
        }
        .mv-system__title {
          text-align: center;
          color: #74ffd9;
          font-weight: 800;
          letter-spacing: 0.02em;
          margin: 6px 0 18px;
          font-size: clamp(18px, 2.4vw, 22px);
          text-shadow: 0 0 18px rgba(116, 255, 217, 0.3);
        }
        .mv-system__grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }
        @media (min-width: 820px) {
          .mv-system__grid {
            grid-template-columns: 1fr 1fr;
            gap: 18px;
          }
        }

        .mv-system__card {
          border-radius: 14px;
          padding: 22px 18px 18px;
          border: 1px solid rgba(255, 255, 255, 0.06);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          min-height: 150px;
        }
        .mv-system__card--blue {
          background: linear-gradient(180deg, rgba(46, 107, 184, 0.22), rgba(31, 78, 133, 0.2));
        }
        .mv-system__card--green {
          background: linear-gradient(180deg, rgba(39, 193, 141, 0.22), rgba(26, 168, 108, 0.18));
        }

        .mv-system__icon {
          width: 64px;
          height: 64px;
          border-radius: 14px;
          display: grid;
          place-items: center;
          margin-bottom: 12px;
          background: rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.06);
        }
        .mv-system__icon svg {
          width: 34px;
          height: 34px;
          fill: #d8e6ff;
        }

        .mv-system__label {
          font-weight: 700;
          letter-spacing: 0.02em;
          margin-bottom: 6px;
        }
        .mv-system__caption {
          font-size: 14px;
          color: var(--muted);
          line-height: 1.7;
          margin: 0;
        }
        .mv-system__note {
          text-align: center;
          color: #b6c6e7;
          font-size: 13px;
          margin-top: 12px;
        }

        /* 市場における地位（2カラム） */
        .mv-columns {
          margin-top: 24px;
        }
        .mv-col__title {
          margin: 0 0 12px;
          color: #cebfff;
          font-weight: 700;
          font-size: clamp(17px, 2.2vw, 21px);
        }
        .mv-col__grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
        }
        @media (min-width: 780px) {
          .mv-col__grid {
            grid-template-columns: 1fr 1fr;
            gap: 18px;
          }
        }

        .mv-list {
          list-style: none;
          padding: 0;
          margin: 0;
          background: linear-gradient(180deg, var(--panel), var(--panel-2));
          border: 1px solid var(--stroke);
          border-radius: 14px;
          padding: 18px 18px;
        }
        .mv-list li {
          position: relative;
          padding-left: 18px;
          color: var(--text);
          font-size: 15px;
          line-height: 1.9;
        }
        .mv-list li + li {
          margin-top: 6px;
        }
        .mv-list li::before {
          content: "";
          position: absolute;
          left: 4px;
          top: 0.85em;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--dot);
          box-shadow: 0 0 10px rgba(162, 135, 255, 0.6);
        }

        /* 参加機会 */
        .mv-cta {
          margin-top: 22px;
        }
      `}</style>
    </>
  );
}
