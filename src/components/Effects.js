"use client";

export default function EffectsSection() {
  const items = [
    {
      no: "1.",
      title: "食品分野",
      accent: "生命力の向上",
      icon: "leaf",
      text: [
        "スピルリナ等の高栄養スーパーフードにより人類の栄養状態を根本から改善します。",
        "機能性食品原材料は病気予防と健康寿命の延伸に貢献します。"
      ],
    },
    {
      no: "2.",
      title: "医薬品分野",
      accent: "自然治癒力の支援",
      icon: "shield",
      text: [
        "フコイダン、フコイグナン、アスタキサンチン、EPA・DHA などの天然由来の治療成分を生産します。",
        "副作用の少ない治療選択肢により、身体に負担をかけない医療の実現を目指します。"
      ],
    },
    {
      no: "3.",
      title: "工業品分野",
      accent: "地球に優しい製造",
      icon: "wrench",
      text: [
        "バイオプラスチックや新素材の開発により石油依存からの脱却を実現します。",
        "持続可能な生産手段により環境負荷の少ない工業製品を生産します。"
      ],
    },
    {
      no: "4.",
      title: "養殖分野",
      accent: "海洋環境の回復",
      icon: "waves",
      text: [
        "水質浄化システムにより汚染された水域の自然回復を促進します。",
        "天然飼料により化学飼料に依存しない健全的な養殖を実現します。"
      ],
    },
    {
      no: "5.",
      title: "農業分野",
      accent: "土壌の再生",
      icon: "sprout",
      text: [
        "バイオスティミュラントにより化学肥料を使わない豊かな土壌作りを推進します。",
        "土壌改良剤により劣化した大地の自然回復力を向上させます。"
      ],
    },
    {
      no: "6.",
      title: "バイオマス分野",
      accent: "グリーンエネルギー",
      icon: "tank",
      text: [
        "バイオディーゼル、バイオエタノール、バイオガスの生産により化石燃料からの完全脱却を目指します。",
        "カーボンニュートラルにより CO₂ 排出量実質ゼロを実現します。"
      ],
    },
    {
      no: "7.",
      title: "エネルギー分野",
      accent: "持続可能な未来",
      icon: "bolt",
      text: [
        "液体・気体燃料、電力生成により再生可能エネルギーの安定供給を実現します。",
        "エネルギー自給化により地域でのエネルギー独立を後押しします。"
      ],
    },
    {
      no: "8.",
      title: "FMCG 分野",
      accent: "日常生活の革新",
      icon: "pack",
      text: [
        "洗剤、シャンプー、化粧品、衛生用品において環境負荷を最小限に抑えた生分解性の高い日用品を提供。",
        "持続可能な消費行動により、人と地球に優しい毎日を実現します。"
      ],
    },
  ];

  return (
    <section style={s.section}>
      <div style={s.wrap}>

        {/* ラベル・見出し・サブ */}
        <div style={s.head}>
          <span style={s.label}>産業展開</span>
          <h2 style={s.title}>地球再生の8つの産業アプローチ</h2>
          <p style={s.sub}>
            AIB社の「マザーベジタブル」は多様な産業応用が期待されており、以下の 8 つの分野にて展開が始まっています。
          </p>
        </div>

        {/* 8つのカード */}
        <div style={s.grid}>
          {items.map((it, i) => (
            <div key={i} style={s.card}>
              <div style={s.iconBadge}>{renderIcon(it.icon)}</div>

              <h3 style={s.cardTitle}>
                {it.no} {it.title}
              </h3>
              <p style={s.accent}>{it.accent}</p>

              {it.text.map((t, idx) => (
                <p key={idx} style={s.cardText}>{t}</p>
              ))}
            </div>
          ))}
        </div>

        {/* 最下部の説明カード */}
        <div style={s.bottomCard}>
          <h3 style={s.bottomHeading}>施設数と環境改善効果の関係</h3>
          <p style={s.bottomText}>
            藻類培養技術を用いた均一化生産システムの施設は太陽光発電および蓄電システムを有しており、自社エネルギーで 24 時間 365 日稼働し、CO₂ の安定的かつ効率的な吸収を実証済みであり、技術の商業化に向けた確固たるエビデンスを有しています。
          </p>
          <p style={s.bottomText}>
            MOTHER VEGETABLES 施設の建設数と地球の健康改善効果は完全に比例関係にあります。1 つの施設が年間 X トンの CO₂ 削減を実現する場合、10 の施設では 10 倍、100 の施設では 100 倍、1000 の施設では 1000 倍の効果が得られます。この数学的な比例関係により、施設を建設すればするほど大気中 CO₂ 濃度が低下し、酸素濃度が向上します。
          </p>
        </div>
      </div>

      {/* レスポンシブ */}
      <style jsx>{`
        @media (max-width: 1024px) {
          :global(.effects-grid) { grid-template-columns: repeat(2, minmax(0,1fr)) !important; }
        }
        @media (max-width: 720px) {
          :global(.effects-grid) { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

/* ===== helpers ===== */
function renderIcon(kind) {
  const base = { width: 22, height: 22, fill: "currentColor" };
  switch (kind) {
    case "leaf":
      return (
        <svg viewBox="0 0 24 24" {...base}>
          <path d="M5 21c8 0 14-6 14-14V3h-4C7 3 3 7 3 15v6h2z" />
        </svg>
      );
    case "shield":
      return (
        <svg viewBox="0 0 24 24" {...base}>
          <path d="M12 2l7 4v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-4z" />
        </svg>
      );
    case "wrench":
      return (
        <svg viewBox="0 0 24 24" {...base}>
          <path d="M22 19l-6.3-6.3a6 6 0 01-7.6-7.6L9 7l3-3 2.9 1.9A6 6 0 0115.7 12L22 18.3 22 19zM2 22l6-6" />
        </svg>
      );
    case "waves":
      return (
        <svg viewBox="0 0 24 24" {...base}>
          <path d="M3 12c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2M3 17c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2" />
        </svg>
      );
    case "sprout":
      return (
        <svg viewBox="0 0 24 24" {...base}>
          <path d="M12 22v-8M5 9c0-3 2.5-5 7-5-1 3-3 5-7 5zm14 0c-4 0-6-2-7-5 4.5 0 7 2 7 5z" />
        </svg>
      );
    case "tank":
      return (
        <svg viewBox="0 0 24 24" {...base}>
          <path d="M7 2h10l2 5v15H5V7l2-5zm0 5h10" />
        </svg>
      );
    case "bolt":
      return (
        <svg viewBox="0 0 24 24" {...base}>
          <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
        </svg>
      );
    case "pack":
      return (
        <svg viewBox="0 0 24 24" {...base}>
          <path d="M7 2h10l2 4v16H5V6l2-4zm0 4h10M7 10h10M7 14h10" />
        </svg>
      );
    default:
      return null;
  }
}

/* ===== styles ===== */
const GREEN = "#13d563";
const EDGE = "rgba(19, 213, 99, 0.28)";

const s = {
  section: {
    background: "#080b08",
    padding: "6rem 1rem 5rem",
  },
  wrap: { maxWidth: 1200, margin: "0 auto" },

  head: { textAlign: "center", marginBottom: 36 },
  label: {
    display: "inline-block",
    padding: "6px 14px",
    borderRadius: 999,
    background: "rgba(19,213,99,.12)",
    color: GREEN,
    fontSize: 13,
    letterSpacing: 1.2,
    marginBottom: 12,
    border: `1px solid ${EDGE}`,
  },
  title: {
    color: "#eaf7ee",
    fontSize: "clamp(26px, 3.6vw, 44px)",
    lineHeight: 1.15,
    margin: "6px 0 10px",
    fontWeight: 800,
  },
  sub: {
    color: "#cfeee0",
    opacity: 0.85,
    fontSize: 14,
    maxWidth: 860,
    margin: "0 auto",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, minmax(0,1fr))",
    gap: 22,
    marginTop: 28,
  },

  card: {
    position: "relative",
    background: "rgba(6, 12, 8, 0.55)",
    border: `1px solid ${EDGE}`,
    borderRadius: 16,
    padding: "22px 20px 16px",
    boxShadow: "0 20px 60px rgba(0,0,0,.25)",
    backdropFilter: "blur(2px)",
  },
  iconBadge: {
    width: 42,
    height: 42,
    borderRadius: 12,
    background: "rgba(19,213,99,.12)",
    color: GREEN,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 14,
    border: `1px solid ${EDGE}`,
  },
  cardTitle: {
    color: "#eaf7ee",
    fontWeight: 700,
    fontSize: 18,
    marginBottom: 6,
  },
  accent: {
    color: GREEN,
    fontSize: 14,
    fontWeight: 700,
    marginBottom: 12,
  },
  cardText: {
    color: "#cfeee0",
    opacity: 0.9,
    fontSize: 14,
    lineHeight: 1.7,
    marginBottom: 8,
  },

  bottomCard: {
    marginTop: 34,
    background: "rgba(12, 18, 24, 0.85)",
    border: "1px solid rgba(200,255,230,.12)",
    borderRadius: 16,
    padding: "26px 24px",
    color: "#dfeff0",
    textAlign: "center",
  },
  bottomHeading: {
    fontSize: 20,
    fontWeight: 800,
    marginBottom: 12,
  },
  bottomText: {
    fontSize: 14,
    lineHeight: 1.9,
    color: "#cfeee0",
    maxWidth: 980,
    margin: "0 auto 8px",
  },
};

/* 画面幅に応じた列数を CSS-in-JS で補助（古いブラウザ向けフォールバック不要なら省略可） */
if (typeof window !== "undefined") {
  const mq2 = window.matchMedia("(max-width: 1024px)");
  const mq1 = window.matchMedia("(max-width: 720px)");
  const applyCols = () => {
    s.grid.gridTemplateColumns = mq1.matches
      ? "1fr"
      : mq2.matches
      ? "repeat(2, minmax(0,1fr))"
      : "repeat(4, minmax(0,1fr))";
  };
  applyCols();
  mq1.addEventListener?.("change", applyCols);
  mq2.addEventListener?.("change", applyCols);
}
