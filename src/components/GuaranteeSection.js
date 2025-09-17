import React from "react";

export default function MvProjectPage() {
  return (
    <>
      <div className="mv-page-bg">
        {/* Section 1: 実証済みの技術基盤 */}
        <section className="mv-section">
          <div className="mv-wrap">
            <div className="mv-pill">4. プロジェクト詳細</div>
            <h1 className="mv-h1">実証済みの技術基盤</h1>
            <h2 className="mv-sub mv-sub--green">
              イントロダクション（既存事業の説明）
            </h2>
            <div className="mv-card mv-card--intro">
              <p className="mv-p">
                MOTHER VEGETABLES
                PROJECTの主幹事であるAlgae International
                Berhad（AIB）社は2007年から地球最初の植物である藻類の研究を日本でスタートし、現在世界中に8カ国、70拠点に展開しています。AIB社における藻類の研究はゲノム解析まで完了し培養のメカニズムを確立させ、培養元となる藻類を「マザーベジタブル」と名付けました。
              </p>
              <p className="mv-p">
                豊かに生きられる持続可能な社会を築くためには、限りある化石資源への過度な依存から脱却することが必要です。その鍵として注目されているのが、光合成という営みを通じて太陽エネルギーを効率的に蓄えて多様な有機物を生み出す藻類です。藻類は、そのまま食品や飼料となるだけでなく、抽出した原料から医薬品、燃料、プラスチック、繊維など様々な分野への応用が可能です。さらに、砂漠や荒地のような農業利用が難しい土地でも、太陽光と少量の水で培養でき、陸上植物と比較して物質生産効率が圧倒的に高い特性を持っています。
              </p>
              <div className="mv-note">
                2025年夏日本にて開催されている「2025年日本国際博覧会」（通称「大阪・関西万博」）の「日本館」では藻類の可能性について展示されており、今後世界中で注目される分野です。
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: 核心技術プラットフォーム */}
        <section className="mv-section mv-section--core-tech">
          <div className="mv-wrap">
            <h2 className="mv-sub">核心技術プラットフォーム</h2>
            <div className="mv-card-deep">
              <p className="mv-p">
                主要事業者であるAlgae International
                Berhad（AIB）は、2007年より独自の藻類培養システムを開発してまいりました。18年間にわたる専門的研究を通じて、ゲノム解析を完了し、我々が「マザーベジタブル」技術と呼ぶ培養メカニズムを確立いたしました。
              </p>
            </div>

            <div className="mv-system">
              <h3 className="mv-system__title">MOTHER VEGETABLES 培養システム</h3>

              <div className="mv-system__grid">
                <div className="mv-system__card mv-system__card--blue">
                  <div className="mv-system__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M22 20.0001H18V10.0001H22V20.0001ZM16 20.0001H12V4.00006L4 8.00006V20.0001H2V8.00006L12 2.00006L22 8.00006V9.00006H16V20.0001ZM10 20.0001H6V12.0001H10V20.0001Z"></path>
                    </svg>
                  </div>
                  <div className="mv-system__label">培養施設外観</div>
                  <p className="mv-system__caption">気候制御された透明建物での多層培養システム</p>
                </div>

                <div className="mv-system__card mv-system__card--green">
                  <div className="mv-system__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M14.25 21.0001H12.75V18.0001H9.75C9.33579 18.0001 9 17.6643 9 17.2501C9 16.8359 9.33579 16.5001 9.75 16.5001H12.75V13.5001H11.25C10.8358 13.5001 10.5 13.1643 10.5 12.7501C10.5 12.3359 10.8358 12.0001 11.25 12.0001H14.25V7.50006C14.25 5.29092 16.0409 3.50006 18.25 3.50006C20.4591 3.50006 22.25 5.29092 22.25 7.50006C22.25 9.7092 20.4591 11.5001 18.25 11.5001C17.4042 11.5001 16.6212 11.2435 15.9654 10.8126L13.7154 15.3126C14.0416 15.8207 14.25 16.4023 14.25 17.024V21.0001ZM18.25 10.0001C19.625 10.0001 20.75 8.87506 20.75 7.50006C20.75 6.12506 19.625 5.00006 18.25 5.00006C16.875 5.00006 15.75 6.12506 15.75 7.50006C15.75 8.87506 16.875 10.0001 18.25 10.0001ZM2 21.0001H12.75V19.5001H2V21.0001Z"></path>
                    </svg>
                  </div>
                  <div className="mv-system__label">培養システム内部</div>
                  <p className="mv-system__caption">藻類と野菜の統合生産を可能にする革新的システム</p>
                </div>
              </div>

              <div className="mv-system__note">※ 実際の施設画像は後日追加予定</div>
            </div>

            <div className="mv-columns">
              <h3 className="mv-col__title">市場における地位</h3>
              <div className="mv-card">
                <div className="mv-col__grid">
                  <ul className="mv-list">
                    <li>グローバル展開：8カ国、70の運営施設</li>
                    <li>技術ステータス：24時間365日自律運転による実証済み商業的実用性</li>
                  </ul>
                  <ul className="mv-list">
                    <li>統合システム：太陽光発電および蓄電システムの統合</li>
                    <li>実証データ：安定的かつ効率的なCO₂吸収能力の実証</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: 地球環境への参加機会 */}
        <section className="mv-section">
          <div className="mv-wrap">
            <h2 className="mv-sub">地球環境への参加機会</h2>
            <div className="mv-card-deep">
              <p className="mv-p">
                MOTHER VEGETABLES PROJECTは、環境保全と持続可能な未来を両立させる革新的なプロジェクトです。透明性のある測定可能な環境インパクトを提供しながら、CO₂吸収連動型システムを通じて参加者が地球の健康回復に直接貢献できる仕組みを提供します。
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: プロジェクト概要と成長戦略 */}
        <section className="mv-section">
          <div className="mv-wrap">
            <h2 className="mv-sub">プロジェクト概要と成長戦略</h2>
            <div className="mv-card-deep">
              <p className="mv-p">
                本プロジェクトは、均質化された藻類培養技術を基盤とした生産工場を世界各国に自社拠点として構築・稼働させることで、事業モデルの実証（デモンストレーション）を行います。これらの実証施設が安定稼働することにより、生産システムの信頼性と商業的価値が実証され、グローバル市場における採用・導入の急速な拡大が期待されます。
              </p>
              <p className="mv-p">
                藻類を活用した各種製品の生産工程では、大気中のCO₂を効率的に吸収し、同時にO₂を排出します。当社の均質化生産システムは、CO₂吸収量を安定的かつ継続的に維持でき、24時間365日の稼働を実現します。生産拠点数の増加は、そのままCO₂吸収量の増大へと直結し、環境負荷低減への貢献度を飛躍的に高めます。
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: 資金調達とトークンエコノミクス */}
        <section className="mv-section">
          <div className="mv-wrap">
            <h2 className="mv-sub">資金調達とトークンエコノミクス</h2>
            <div className="mv-double-card__grid">
              <div className="mv-card-deep">
                <h3 className="mv-col__title">資金調達メカニズム</h3>
                <p className="mv-p">
                  当社は、Initial Exchange Offering (IEO)およびトークンの市場流通を通じて資金調達を実施し、その資金を生産拠点の新規建設・拡張に充当します。
                </p>
                <p className="mv-p">
                  保有者は、当プロジェクトが発行する「MOTHER VEGETABLES Token (MVT)」をスマートコントラクトに基づくステーキングプールへ預け入れることで、当社生産施設において実際に吸収されたCO₂量に連動したNFTを受け取ることができます。このNFTは、CO₂吸収の成果をブロックチェーン上で透明性高く証明するデジタルアセットであり、ステーキング参加者へのリワード（返礼）として付与されます。
                </p>
              </div>
              <div className="mv-card-deep">
                <h3 className="mv-col__title">NFTの流通と価値創造</h3>
                <p className="mv-p">
                  発行されるCO₂吸収量連動型NFTは、提携およびオープンなマーケットプレイスにおいて自由に売買可能です。これにより、NFTは単なる環境貢献の証明にとどまらず、二次市場における取引価値を持つ資産として機能します。
                </p>
                <p className="mv-p">
                  本仕組みにより、投資家は環境価値の創出と経済的リターンの双方を享受でき、また当社は資金循環を通じて生産能力を拡大し、地球規模でのCO₂削減効果を加速させます。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: 本プロジェクトが解決する課題 */}
        <section className="mv-section">
          <div className="mv-wrap">
            <h2 className="mv-sub">本プロジェクトが解決する課題</h2>
            <div className="mv-issue-solution__container">
              {/* 1. 社会的課題 */}
              <h3 className="mv-issue-solution__category">1. 社会的課題</h3>
              <div className="mv-issue-solution__grid">
                <div className="mv-issue-solution__card">
                  <h4>【課題】</h4>
                  <ul className="mv-list--issue">
                    <li>気候変動への関心は高まっているものの、個人・企業が直接的にCO₂削減に参加できる仕組みが不足している。</li>
                    <li>環境貢献活動の成果が定量化されず、一般社会に正しく認知されにくい。</li>
                    <li>環境テクノロジーへの投資機会が限定的で、一般投資家の参入障壁が高い。</li>
                  </ul>
                </div>
                <div className="mv-issue-solution__card mv-issue-solution__card--solution">
                  <h4>【解決策】</h4>
                  <ul className="mv-list--solution">
                    <li>ステーキングとNFTを通じて、誰でもCO₂削減活動に経済的に参加できる分散型プラットフォームを提供。</li>
                    <li>ブロックチェーンにCO₂吸収量を記録し、環境貢献を可視化・証明。</li>
                    <li>小口投資から参加可能な形で、環境関連ビジネスへの投資領域を拡大。</li>
                  </ul>
                </div>
              </div>

              {/* 2. 経済的課題 */}
              <h3 className="mv-issue-solution__category">2. 経済的課題</h3>
              <div className="mv-issue-solution__grid">
                <div className="mv-issue-solution__card">
                  <h4>【課題】</h4>
                  <ul className="mv-list--issue">
                    <li>再生可能資源・環境保全技術の普及には多額の初期投資が必要であり、資金調達が課題。</li>
                    <li>環境貢献が直接的な収益モデルに結びつかず、事業の持続可能性が確保しにくい。</li>
                    <li>カーボンクレジット市場は複雑かつ閉鎖的で、小規模事業者や個人が参加しづらい。</li>
                  </ul>
                </div>
                <div className="mv-issue-solution__card mv-issue-solution__card--solution">
                  <h4>【解決策】</h4>
                  <ul className="mv-list--solution">
                    <li>IEOおよびトークンエコノミクスを活用した国際的な資金調達スキームを構築。</li>
                    <li>NFTを活用し、環境価値をデジタル資産として市場取引可能にすることで、持続的な収益基盤を確保。</li>
                    <li>オープンかつ透明性の高いCO₂削減価値取引の仕組みを提供し、広範な市場参加を促進。</li>
                  </ul>
                </div>
              </div>

              {/* 3. 環境的課題 */}
              <h3 className="mv-issue-solution__category">3. 環境的課題</h3>
              <div className="mv-issue-solution__grid">
                <div className="mv-issue-solution__card">
                  <h4>【課題】</h4>
                  <ul className="mv-list--issue">
                    <li>世界的なCO₂排出量増加による地球温暖化の加速。</li>
                    <li>自然環境によるCO₂吸収能力の限界（森林伐採・土地利用変化による吸収源の減少）。</li>
                    <li>既存のCO₂削減プロジェクトは地域限定的で、グローバルスケールでの即効性に欠ける。</li>
                  </ul>
                </div>
                <div className="mv-issue-solution__card mv-issue-solution__card--solution">
                  <h4>【解決策】</h4>
                  <ul className="mv-list--solution">
                    <li>藻類培養技術による24時間365日の安定的なCO₂吸収システムを世界各地に展開。</li>
                    <li>均一化生産システムにより、吸収効率の高い施設を短期間で複数拠点に展開可能。</li>
                    <li>吸収量データをリアルタイムでブロックチェーンに記録し、世界規模で環境効果を可視化。</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: 本プロジェクトの優位性 */}
        <section className="mv-section">
          <div className="mv-wrap">
            <h2 className="mv-sub">本プロジェクトの優位性（強み）</h2>
            <div className="mv-card-deep">
              <p className="mv-p">
                本プロジェクトは、単なる構想段階にとどまらず、すでに実証フェーズを完了し、事業化に向けた基盤を確立しています。具体的には、藻類培養技術を用いた均一化生産システムの構築を先行して完了し、マレーシアにおいて秘密裏にパイロットプラントが稼働中です。当該施設は24時間365日稼働し、CO₂の安定的かつ効率的な吸収を実証済みであり、技術の商業化に向けた確固たるエビデンスを有しています。
              </p>
              <p className="mv-p">
                さらに、ASEAN諸国をはじめとする各国政府機関、ならびに複数の大学・研究機関との戦略的パートナーシップを既に構築済みです。これにより、研究開発から事業展開、規制対応に至るまで、国際的な協力体制が確立されており、他プロジェクトに比して極めて高いスピードスケールでの拡張が可能となっています。
              </p>
              <p className="mv-p">
                この「既に稼働している実証施設」と「国際的な官学連携」という二つの強みは、本プロジェクトの信頼性と実現可能性を裏付ける大きな競争優位性であり、IEO参加者にとっても極めて重要な投資判断材料となります。
              </p>
            </div>

            <div className="mv-double-card__grid">
              <div className="mv-card-deep">
                <h3 className="mv-col__title">運営の卓越性</h3>
                <p className="mv-p">
                  我々の培養施設は太陽光発電および蓄電システムを統合し、完全自律運転を実現しています。この24時間365日の運転能力は、安定的かつ効率的なCO₂吸収を提供することが実証されており、商業的スケーラビリティの具体的証拠を確立しています。
                </p>
              </div>
              <div className="mv-card-deep">
                <h3 className="mv-col__title">環境インパクト</h3>
                <p className="mv-p">
                  各生産施設は大気中のCO₂削減に直接貢献しながら、同時に酸素を生産します。我々の標準化された生産システムは継続運転を通じて一貫したCO₂吸収効率を維持し、運営施設数に直接比例したスケーリングを実現します。
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        /* 背景・装飾は HEX / rgba で明示。テキスト色はすべて HEX 直指定 */
        .mv-page-bg {
          background-color: #0c0a13;
          color: #d7e0ef;           /* デフォルト本文色 */
          font-family: sans-serif;
        }

        .mv-section { padding: 48px 16px; }
        .mv-section--core-tech { padding-top: 0; }
        .mv-wrap { max-width: 900px; margin: 0 auto; }

        .mv-pill {
          display: inline-block;
          font-size: 12px;
          color: #d8ccff;
          background: rgba(178, 140, 255, 0.12);
          border: 1px solid rgba(178, 140, 255, 0.35);
          padding: 6px 10px;
          border-radius: 999px;
          margin-bottom: 18px;
        }

        .mv-h1 {
          font-weight: 800;
          text-align: center;
          font-size: clamp(28px, 4vw, 38px);
          line-height: 1.3;
          margin: 0 auto 48px;
          background: linear-gradient(180deg, #ffffff, #c9d3f3 80%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          max-width: 500px;
        }

        .mv-sub {
          margin: 24px 0 16px;
          font-weight: 700;
          text-align: center;
          font-size: clamp(22px, 3vw, 28px);
          color: #cebfff;           /* 見出し標準色 */
          text-shadow: 0 0 24px rgba(178, 140, 255, 0.35);
        }
        .mv-sub--green {
          color: #7ff2c7;           /* 緑系の強調見出し */
          text-shadow: 0 0 22px rgba(39, 193, 141, 0.45);
        }

        .mv-card,
        .mv-card-deep {
          background: #13111b;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 24px 28px;
          margin-bottom: 24px;
        }
        .mv-card-deep {
          background: #13121d;
          padding: 24px 28px;
          margin-top: 16px;
        }

        .mv-p {
          color: #9fb0c9;           /* 段落テキスト */
          line-height: 1.9;
          margin: 0 0 16px;
          font-size: 15px;
        }
        .mv-p:last-child { margin-bottom: 0; }

        .mv-note {
          margin-top: 24px;
          border-radius: 12px;
          padding: 16px 20px;
          font-size: 14px;
          line-height: 1.8;
          color: #dff8ee;           /* ノートの文字色 */
          background: linear-gradient(135deg, rgba(39,193,141,0.12), rgba(124,108,246,0.12));
          border: 1px solid rgba(39, 193, 141, 0.35);
        }

        .mv-system {
          margin-top: 16px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 18px;
          padding: 22px 18px 14px;
          background: #13111b;
        }
        .mv-system__title {
          text-align: center;
          color: #74ffd9;           /* タイトル色 */
          font-weight: 800;
          margin: 6px 0 24px;
          font-size: clamp(18px, 2.4vw, 22px);
          text-shadow: 0 0 18px rgba(116, 255, 217, 0.3);
        }
        .mv-system__grid { display: grid; grid-template-columns: 1fr; gap: 16px; }
        @media (min-width: 600px) { .mv-system__grid { grid-template-columns: 1fr 1fr; } }

        .mv-system__card {
          border-radius: 14px;
          padding: 28px 18px;
          border: 1px solid rgba(255, 255, 255, 0.06);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
        .mv-system__card--blue {
          background: radial-gradient(circle, rgba(46,107,184,0.25) 0%, rgba(31,78,133,0.15) 100%);
        }
        .mv-system__card--green {
          background: radial-gradient(circle, rgba(39,193,141,0.25) 0%, rgba(26,168,108,0.15) 100%);
        }
        .mv-system__icon { width: 56px; height: 56px; display: grid; place-items: center; margin-bottom: 16px; }
        .mv-system__icon svg { width: 40px; height: 40px; fill: #d8e6ff; }
        .mv-system__label { font-weight: 700; margin-bottom: 6px; font-size: 16px; color: #d7e0ef; }
        .mv-system__caption { font-size: 14px; color: #9fb0c9; line-height: 1.7; margin: 0; max-width: 280px; }
        .mv-system__note { text-align: center; color: #9fb0c9; font-size: 13px; margin-top: 20px; padding-bottom: 8px; }

        .mv-columns { margin-top: 16px; }
        .mv-col__title { margin: 0 0 12px; color: #cebfff; font-weight: 700; font-size: 18px; }
        .mv-col__grid { display: grid; grid-template-columns: 1fr; gap: 0; }
        @media (min-width: 768px) { .mv-col__grid { grid-template-columns: 1fr 1fr; gap: 18px; } }

        .mv-list { list-style: none; padding: 0; margin: 0; }
        .mv-list li {
          position: relative;
          padding-left: 20px;
          color: #d7e0ef;           /* リスト文字色 */
          font-size: 15px;
          line-height: 1.9;
        }
        .mv-list li + li { margin-top: 12px; }
        .mv-list li::before {
          content: "";
          position: absolute;
          left: 4px;
          top: 0.75em;
          transform: translateY(-50%);
          width: 7px; height: 7px; border-radius: 50%;
          background: #a887ff;      /* ドット色 */
          box-shadow: 0 0 10px rgba(162,135,255,0.7);
        }

        .mv-double-card__grid { display: grid; grid-template-columns: 1fr; gap: 24px; margin-top: 16px; }
        @media (min-width: 768px) { .mv-double-card__grid { grid-template-columns: 1fr 1fr; } }
        .mv-double-card__grid > .mv-card-deep { margin: 0; }

        .mv-issue-solution__container { margin-top: 32px; }
        .mv-issue-solution__category {
          color: #d7e0ef;           /* セクション内カテゴリ見出し */
          font-weight: bold;
          font-size: 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          padding-bottom: 12px;
          margin: 48px 0 24px;
        }
        .mv-issue-solution__category:first-of-type { margin-top: 0; }

        .mv-issue-solution__grid { display: grid; grid-template-columns: 1fr; gap: 24px; }
        @media (min-width: 820px) { .mv-issue-solution__grid { grid-template-columns: 1fr 1fr; } }

        .mv-issue-solution__card {
          background: #13121d;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 24px 28px;
        }
        .mv-issue-solution__card h4 { margin: 0 0 16px; font-size: 16px; font-weight: bold; color: #f36653; } /* 課題ラベル */
        .mv-issue-solution__card--solution h4 { color: #27c18d; }                                           /* 解決ラベル */

        .mv-list--issue,
        .mv-list--solution { list-style: none; padding: 0; margin: 0; }

        .mv-list--issue li,
        .mv-list--solution li {
          color: #9fb0c9;           /* 課題/解決の箇条書きテキスト */
          font-size: 15px;
          line-height: 1.9;
          position: relative;
          padding-left: 20px;
        }
        .mv-list--issue li + li,
        .mv-list--solution li + li { margin-top: 16px; }

        .mv-list--issue li::before { content: "▶"; color: #f36653; position: absolute; left: 0; top: 1px; }
        .mv-list--solution li::before { content: "▶"; color: #27c18d; position: absolute; left: 0; top: 1px; }
      `}</style>
    </>
  );
}
