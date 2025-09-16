"use client";

export default function ConceptSection() {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        {/* ラベル */}
        <p style={styles.topLabel}>1. エグゼクティブサマリー</p>

        {/* 見出し */}
        <h2 style={styles.title}>プロジェクトの根本使命</h2>
        <p style={styles.subtitle}>
          MOTHER VEGETABLES PROJECTは、地球と全ての生命の健康回復を目指す革命的な環境再生プロジェクトです。
        </p>

        {/* カード：地球再生の仕組み */}
        <div style={styles.card}>
          <h3 style={styles.cardHeading}>地球再生の仕組み</h3>
          <p style={styles.cardText}>
            MOTHER VEGETABLES施設を世界各地に展開することで、マザーベジタブルを生産し、8つの産業分野に供給します。
            このプロセスにおいて、各施設は24時間365日CO₂を吸収し酸素を生成することで大気を浄化し、
            同時に生産される藻類製品は人間と生物の健康向上に直接貢献します。
          </p>

          {/* サブカード：驚異的な効率性 */}
          <div style={styles.subCard}>
            <h4 style={styles.subHeading}>驚異的な効率性</h4>
            <p style={styles.cardText}>
              MOTHER VEGETABLESのCO₂吸収効率は天然芝と比較すると
              <span style={styles.highlight}>およそ700倍</span>
              となるため、世界中に建設できれば地球温暖化問題を急速に解決できる可能性を秘めています。
            </p>
          </div>

          {/* リスト */}
          <h4 style={styles.subHeading}>建設すればするほど地球が健康になる</h4>
          <ul style={styles.list}>
            <li>1つの施設 = 24時間365日のCO₂吸収・酸素生成</li>
            <li>100施設 = 10倍の環境改善効果</li>
            <li>1000施設 = 地域全体の空気質向上</li>
            <li>10000施設 = 地球規模の環境再生</li>
          </ul>
        </div>

        {/* セクション：人類への恩恵 */}
        <div style={styles.card}>
          <h3 style={styles.cardHeadingPink}>人類への恩恵の拡大プロセス</h3>
          <p style={styles.cardText}>
            マザーベジタブル技術を核とした藻類培養施設が世界各地に建設されることで、8つの産業分野への展開が可能となります。
            これらすべての産業展開により、地球全体の健康向上が実現されます。
          </p>

          <div style={styles.benefitGrid}>
            <div style={styles.benefitItem}>
              <div style={{ ...styles.iconCircle, color: "#3fc1ff" }}>🌊</div>
              <h4 style={styles.benefitTitleBlue}>大気質の改善</h4>
              <p style={styles.benefitCaption}>CO₂削減と酸素生成</p>
            </div>
            <div style={styles.benefitItem}>
              <div style={{ ...styles.iconCircle, color: "#00db6a" }}>🌱</div>
              <h4 style={styles.benefitTitleGreen}>生物多様性の回復</h4>
              <p style={styles.benefitCaption}>自然環境の再生</p>
            </div>
            <div style={styles.benefitItem}>
              <div style={{ ...styles.iconCircle, color: "#ff5f7e" }}>❤️</div>
              <h4 style={styles.benefitTitleRed}>人類の健康増進</h4>
              <p style={styles.benefitCaption}>栄養価の高い食品</p>
            </div>
            <div style={styles.benefitItem}>
              <div style={{ ...styles.iconCircle, color: "#ffcc33" }}>📈</div>
              <h4 style={styles.benefitTitleYellow}>持続可能な経済発展</h4>
              <p style={styles.benefitCaption}>新産業の創出</p>
            </div>
          </div>
        </div>

        {/* ビジョンステートメント */}
        <div style={styles.visionCard}>
          <h3 style={styles.visionHeading}>ビジョンステートメント</h3>
          <p style={styles.cardText}>
            環境保全のパラダイムをコスト中心型から収益創出型へと転換し、実証済みの藻類培養技術により
            地球と投資家の双方に利益をもたらす自立持続型エコシステムを構築することが我々の使命です。
          </p>
        </div>
      </div>
    </section>
  );
}

/* ====== styles ====== */
const styles = {
  section: {
    padding: "6rem 1rem",
    background: "linear-gradient(to bottom, #000, #050a10)",
    color: "#e9f9ee",
  },
  container: {
    maxWidth: "72rem",
    margin: "0 auto",
  },
  topLabel: {
    display: "inline-block",
    padding: "0.25rem 0.75rem",
    borderRadius: "9999px",
    background: "rgba(0,255,140,0.15)",
    color: "#00db6a",
    fontSize: "0.875rem",
    marginBottom: "1rem",
  },
  title: {
    fontSize: "2rem",
    fontWeight: 700,
    textAlign: "center",
    marginBottom: "0.5rem",
  },
  subtitle: {
    fontSize: "1rem",
    textAlign: "center",
    color: "#aaa",
    marginBottom: "2.5rem",
  },
  card: {
    background: "rgba(20,25,30,0.8)",
    border: "1px solid rgba(200,255,230,0.1)",
    borderRadius: "12px",
    padding: "2rem",
    marginBottom: "2.5rem",
  },
  cardHeading: {
    fontSize: "1.25rem",
    color: "#00db6a",
    fontWeight: 700,
    marginBottom: "1rem",
  },
  cardHeadingPink: {
    fontSize: "1.25rem",
    color: "#e66cff",
    fontWeight: 700,
    marginBottom: "1rem",
    textAlign: "center",
  },
  subHeading: {
    fontSize: "1.1rem",
    fontWeight: 600,
    marginTop: "1.5rem",
    marginBottom: "0.75rem",
    color: "#00db6a",
  },
  cardText: {
    lineHeight: 1.8,
    color: "#cfeee0",
    fontSize: "1rem",
  },
  subCard: {
    background: "rgba(0,255,140,0.08)",
    border: "1px solid rgba(0,255,140,0.3)",
    borderRadius: "10px",
    padding: "1rem",
    marginTop: "1.5rem",
  },
  highlight: {
    color: "#00db6a",
    fontWeight: 700,
  },
  list: {
    listStyle: "none",
    paddingLeft: 0,
    color: "#cfeee0",
    lineHeight: 1.7,
  },
  benefitGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "1.5rem",
    marginTop: "1.5rem",
    textAlign: "center",
  },
  benefitItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0.5rem",
  },
  iconCircle: {
    fontSize: "1.5rem",
    width: "3rem",
    height: "3rem",
    borderRadius: "50%",
    background: "rgba(255,255,255,0.05)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "0.5rem",
  },
  benefitTitleBlue: { color: "#3fc1ff", fontWeight: 600 },
  benefitTitleGreen: { color: "#00db6a", fontWeight: 600 },
  benefitTitleRed: { color: "#ff5f7e", fontWeight: 600 },
  benefitTitleYellow: { color: "#ffcc33", fontWeight: 600 },
  benefitCaption: { fontSize: "0.875rem", color: "#bbb" },

  visionCard: {
    background: "linear-gradient(90deg, rgba(80,0,130,0.3), rgba(130,0,180,0.3))",
    border: "1px solid rgba(200,150,255,0.3)",
    borderRadius: "12px",
    padding: "2rem",
    textAlign: "center",
  },
  visionHeading: {
    fontSize: "1.25rem",
    fontWeight: 700,
    color: "#d080ff",
    marginBottom: "1rem",
  },
};
