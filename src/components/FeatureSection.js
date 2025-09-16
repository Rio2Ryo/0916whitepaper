"use client";
import React from "react";

export default function FeatureSection() {
  // ====== データ ======
  const govt = [
    {
      logo: "/logos/bionexus.png",
      name: "BioNexus ステータス企業",
      sub: "マレーシア政府認可",
      subColor: "#6fb2ff",
      desc:
        "マレーシア政府認可の特別クラス：バイオテクノロジー企業としての認定により、バイオテクノロジー産業化の加速化のための実質的な財政的インセンティブ、法的柔軟性、制度的サポートへのアクセスを確保しています。",
    },
    {
      logo: "/logos/asean.png",
      name: "ASEAN",
      sub: "東南アジア諸国連合",
      subColor: "#00db6a",
      desc:
        "持続可能な水産養殖および農業セクターにおけるインドネシアからの公式承認および支援により、東南アジア全10か国にわたる環境責任を持ち、実務的に実行可能で、社会的に包括的な食料システムというASEANの共通ビジョンに貢献しています。",
    },
    {
      logo: "/logos/angkasalogo.png",
      name: "ANGKASA",
      sub: "マレーシア政府機関",
      subColor: "#6fb2ff",
      desc:
        "16,000以上の協同組合と730万人の組合員を代表する協同組合の全国最高機関の連携を実現。資産1,596億、収益455億を超える規模を有しており、マレーシアの社会経済開発における「第三セクター」として重要な役割を果たしています。",
    },
    {
      logo: "/logos/invest_selangor.png",
      name: "インベスト・セランゴール",
      sub: "政府機関",
      subColor: "#ffd166",
      desc:
        "セランゴール州政府が提供する産業支援エコシステムのメンバーです。効率的な行政プロセス、カスタマイズされたインセンティブパッケージ、業界別プログラム、ネットワークやインフラへのアクセスが含まれています。",
    },
    {
      logo: "/logos/negeri_pahang.png",
      name: "NEGERI PAHANG",
      sub: "パハン州政府",
      subColor: "#6fb2ff",
      desc:
        "パハン州の投資・産業・科学・技術・イノベーション委員会の委員長が、特に収穫量の増加、効率、生産性向上のための技術に近代的な農業手法の採用を促しており、パハン州の農業セクターの経済発展を強化するエプグリーンズへの投資支援を表明しています。",
    },
    {
      logo: "/logos/ytaa.png",
      name: "YTAA",
      sub: "Yayasan Tengku Abdul Aziz Sultan Abu Bakar",
      subColor: "#00db6a",
      desc:
        "YTAAは社会的影響のチャネルとして機能し、サスクリプションの資金が奨学金開発、教育イニシアチブ、ベカの水田プログラムなどのパイロットプロジェクトに資金を提供することを保証し、地域内の食料安全保障を提供するためにエプグリーンズプロジェクトで協力しています。",
    },
    {
      logo: "/logos/kyudenko.png",
      name: "九州電工",
      sub: "日本の大手電力会社",
      subColor: "#6fb2ff",
      desc:
        "日本の大手電力会社で深場（海藻の群落）を造成することで、魚具類の住処としての機能を高め水質浄化し、さらにCO₂固定機能を活かした藻場再生の実用化研究に2001年度から取り組んでいます。MOTHER VEGETABLESを活用したバイオマスにより生産性の向上を検討しています。",
    },
    {
      logo: "/logos/kuroi_gyokyo.png",
      name: "黒井漁業協同組合",
      sub: "日本の下関市に位置する漁協組合",
      subColor: "#ff6fa9",
      desc:
        "磯焼けによる空巣の大量発生や養殖に対して課題を持っており、MOTHER VEGETABLESを活用することで局所的な磯焼け解決や効率的な養殖を進めています。",
    },
  ];

  const academic = [
    {
      logo: "/logos/nottingham.png",
      name: "ノッティンガム大学",
      sub: "イギリス",
      subColor: "#6fb2ff",
      desc:
        "大学構内におけるエーカの施設設置とエプグリーン事業に提供する戦略的協力体制を構築し、研究開発の発展のため尊敬されるバイオテクノロジーチームによるサポートを受けています。",
    },
    {
      logo: "/logos/nus.png",
      name: "シンガポール国立大学（NUS）",
      sub: "シンガポール",
      subColor: "#6fb2ff",
      desc:
        "農業や水産養殖、生物防除剤、製品開発の分野において、科学的専門知識と革新を提供するパートナーシップを結んでいます。私たちの活動の基盤となる科学を強化し、イニシアチブが最先端の研究に基づいていることを確保しています。",
    },
    {
      logo: "/logos/um.png",
      name: "マラヤ大学（UM）",
      sub: "マレーシア",
      subColor: "#a07cff",
      desc:
        "マレーシアの最古学府であるマラヤ大学と研究開発分野で連携しています。同大学の優れた学術的見識と科学技術の専門性により、私たちの技術革新が大きく前進しています。",
    },
    {
      logo: "/logos/usm.png",
      name: "マレーシア科学大学（USM）",
      sub: "マレーシア",
      subColor: "#a07cff",
      desc:
        "微細藻類研究の分野で国際的に高い評価を受けているマレーシア科学大学と共同研究を実施しています。同大学の専門知識と研究設備を活用し、微細藻類の可能性を最大限に引き出す技術開発を進めています。",
    },
    {
      logo: "/logos/ukm.png",
      name: "マレーシア国民大学（UKM）",
      sub: "マレーシア",
      subColor: "#a07cff",
      desc:
        "エプグリーンズプロジェクトの革新性と持続可能性に高い関心を示していただき、全面的な支援を受けています。現在、大学キャンパス内にエプグリーンズ施設を設置する計画が進行中です。",
    },
    {
      logo: "/logos/mahidol.png",
      name: "マヒドン大学",
      sub: "タイ",
      subColor: "#ffd166",
      desc:
        "タイの各界マヒドン大学と研究開発分野で連携しています。同大学の優れた学術的知見と科学技術の専門性により、私たちの技術革新が大きく前進しています。",
    },
    {
      logo: "/logos/meiji.png",
      name: "明治大学",
      sub: "東京",
      subColor: "#a07cff",
      desc:
        "体育会競技者に対してエプグリーン関連製品を提供するスポンサーシップ協力により、持続可能な栄養ソリューションを通じたスポーツパフォーマンスの支援を実施しています。",
    },
  ];

  const intl = [
    { logo: "/logos/eria.png", name: "ERIA", sub: "東アジア・ASEAN経済研究センター", subColor: "#a07cff",
      desc: "東アジア地域の経済統合と持続可能な発展を推進する国際機関との連携により、地域全体での環境技術の普及と経済発展を支援しています。"},
    { logo: "/logos/jaif.png", name: "JAIF", sub: "日本ASEAN統合基金", subColor: "#00db6a",
      desc: "日本とASEAN諸国の協力関係強化を目的とする基金との連携により、持続可能な技術の地域展開と人材育成を推進しています。"},
    { logo: "/logos/revoganix.png", name: "Revoganix", sub: "バイオテクノロジー企業", subColor: "#00db6a",
      desc: "革新的なバイオテクノロジーソリューションを提供する企業との戦略的パートナーシップにより、藻類技術の商業化と市場展開を加速しています。"},
    { logo: "/logos/bioeconomy.png", name: "Bioeconomy", sub: "バイオエコノミー推進機関", subColor: "#ffd166",
      desc: "持続可能なバイオエコノミーの構築を目指す機関との連携により、循環型経済システムの実現と環境負荷の削減を推進しています。"},
    { logo: "/logos/temasek.png", name: "Temasek", sub: "シンガポール政府系投資会社", subColor: "#6fb2ff",
      desc: "シンガポール政府系投資会社との戦略的パートナーシップにより、持続可能な技術への投資と東南アジア地域での事業展開を支援しています。"},
    { logo: "/logos/aquaculture.png", name: "Aquaculture", sub: "水産養殖技術企業", subColor: "#6fb2ff",
      desc: "先進的な水産養殖技術を持つ企業との連携により、持続可能な水産業の発展と海洋環境の保全を推進しています。"},
    { logo: "/logos/cropabl.png", name: "Cropabl", sub: "農業技術企業", subColor: "#a07cff",
      desc: "革新的な農業技術を提供する企業との協力により、持続可能な農業システムの構築と食料生産の効率化を推進しています。"},
    { logo: "/logos/invest_sabah.png", name: "Invest Sabah", sub: "サバ州投資促進機関", subColor: "#6fb2ff",
      desc: "マレーシア・サバ州の投資促進機関との連携により、地域経済の発展と持続可能な産業の育成を支援しています。"},
  ];

  // ====== UI ======
  return (
    <section style={st.section}>
      <div style={st.container}>
        {/* ヘッダー */}
        <div style={st.header}>
          <span style={st.label}>3. パートナー・提携組織</span>
          <h2 style={st.title}>包括的なパートナーシップ</h2>
        </div>

        {/* 政府・公的機関 */}
        <h3 style={{ ...st.groupTitle, color: "#6fb2ff" }}>政府・公的機関</h3>
        <CardGrid items={govt} />

        {/* 学術・研究機関 */}
        <h3 style={{ ...st.groupTitle, color: "#cfa1ff" }}>学術・研究機関</h3>
        <CardGrid items={academic} />

        {/* 国際機関・その他 */}
        <h3 style={{ ...st.groupTitle, color: "#d892ff" }}>国際機関・その他</h3>
        <CardGrid items={intl} />
      </div>
    </section>
  );
}

/* ====== サブコンポーネント ====== */
function CardGrid({ items }) {
  return (
    <div style={st.grid}>
      {items.map((it, i) => (
        <div key={i} style={st.card}>
          <div style={st.logoWrap}>
            <img
              src={it.logo}
              alt={it.name}
              style={{ width: 56, height: 56, objectFit: "contain", borderRadius: 12, background: "#fff" }}
            />
          </div>
          <h4 style={st.cardTitle}>{it.name}</h4>
          <p style={{ ...st.cardSub, color: it.subColor }}>{it.sub}</p>
          <p style={st.cardDesc}>{it.desc}</p>
        </div>
      ))}
    </div>
  );
}

/* ====== styles ====== */
const st = {
  section: {
    background: "linear-gradient(180deg, #0b1219 0%, #0b1216 100%)",
    padding: "6rem 1rem",
    color: "#eaf7ee",
  },
  container: { maxWidth: 1200, margin: "0 auto" },

  header: { textAlign: "center", marginBottom: 34 },
  label: {
    display: "inline-block",
    padding: "6px 14px",
    borderRadius: 999,
    background: "rgba(255,255,255,.08)",
    color: "#a8b7c9",
    fontSize: 13,
    marginBottom: 12,
  },
  title: {
    fontSize: "clamp(28px, 4.2vw, 44px)",
    fontWeight: 800,
    letterSpacing: 1.0,
  },

  groupTitle: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: 800,
    margin: "34px 0 18px",
    letterSpacing: 1.2,
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0,1fr))",
    gap: 22,
    marginBottom: 32,
  },

  card: {
    background: "rgba(16, 22, 30, .85)",
    border: "1px solid rgba(160, 200, 255, .15)",
    borderRadius: 16,
    padding: "20px 18px",
    boxShadow: "0 16px 50px rgba(0,0,0,.35)",
  },
  logoWrap: {
    width: 64,
    height: 64,
    borderRadius: 14,
    background: "rgba(255,255,255,.06)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 800,
    color: "#e9f3ff",
    marginBottom: 6,
  },
  cardSub: { fontSize: 13, fontWeight: 700, marginBottom: 12 },
  cardDesc: {
    fontSize: 14,
    lineHeight: 1.8,
    color: "#cfe2ef",
    opacity: 0.95,
  },
};

/* レスポンシブ補助（タブレット2列・スマホ1列） */
if (typeof window !== "undefined") {
  const mq2 = window.matchMedia("(max-width: 1024px)");
  const mq1 = window.matchMedia("(max-width: 720px)");
  const applyCols = () => {
    st.grid.gridTemplateColumns = mq1.matches
      ? "1fr"
      : mq2.matches
      ? "repeat(2, minmax(0,1fr))"
      : "repeat(3, minmax(0,1fr))";
  };
  applyCols();
  mq1.addEventListener?.("change", applyCols);
  mq2.addEventListener?.("change", applyCols);
}
