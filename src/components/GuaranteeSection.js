"use client";
import React from "react";

export default function GuaranteeSection() {
  const points = [
    {
      title: "運営の卓越性",
      color: "#6fb2ff",
      desc: "我々の培養施設は太陽光発電および蓄電システムを統合し、完全自律運転を実現しています。この24時間365日の運転能力は、安定的かつ効率的なCO₂吸収を提供することが実証されており、商業的スケーラビリティの具体的証拠を確立しています。"
    },
    {
      title: "環境インパクト",
      color: "#00db6a",
      desc: "各生産施設は大気中のCO₂削減に直接貢献しながら、同時に酸素を生産します。我々の標準化された生産システムは継続運転を通じて一貫したCO₂吸収率を維持し、運営施設数に直接比例したスケーリングを実現します。"
    }
  ];

  return (
    <section style={s.section}>
      <div style={s.container}>
        <div style={s.header}>
          <span style={s.label}>4. プロジェクト詳細</span>
          <h2 style={s.title}>実証済みの技術基盤</h2>
          <p style={s.subtitle}>イントロダクション（既存事業の説明）</p>
        </div>

        {/* メイン説明カード */}
        <div style={s.mainCard}>
          <p>
            MOTHER VEGETABLES PROJECTの主幹事であるAlgae International Berhad (AIB)社は2007年から藻類の研究を日本でスタートし、現在世界中に8か国、70拠点に展開しています。藻類は医薬品、燃料、プラスチックなど様々な応用が可能であり、高い効率性を持ちます。
          </p>
          <p style={s.note}>
            2025年夏日本で開催されている「2025年日本国際博覧会」通称「大阪・関西万博」の「日本館」では藻類の可能性について展示されており、今後世界中で注目される分野です。
          </p>
        </div>

        {/* 技術プラットフォーム */}
        <h3 style={s.subHeading}>核心技術プラットフォーム</h3>
        <div style={s.subCard}>
          <p>
            AIB社は2007年より独自の藻類培養システムを開発。18年間の研究を通じて、我々が「マザーベジタブル」技術と呼ぶ培養メカニズムを確立しました。
          </p>
          <div style={s.dualBox}>
            <div style={{ ...s.dualItem, background: "rgba(80,140,220,.12)" }}>
              <h4>培養施設外観</h4>
              <p>気候制御された透明建物での多層培養システム</p>
            </div>
            <div style={{ ...s.dualItem, background: "rgba(0,200,120,.12)" }}>
              <h4>培養システム内部</h4>
              <p>藻類と野菜の統合生産を可能にする革新的システム</p>
            </div>
          </div>
        </div>

        {/* ポイントボックス */}
        <h3 style={s.subHeading}>本プロジェクトの優位性（強み）</h3>
        <div style={s.mainCard}>
          <p>
            本プロジェクトは構想段階にとどまらず、すでに実証フェーズを完了。24時間365日稼働し、CO₂の安定的かつ効率的な吸収を裏付け済み。さらにASEAN諸国をはじめとする政府機関や大学と連携し、研究から事業展開、規制対応まで国際的な協力体制を構築しています。
          </p>
        </div>

        {/* 下部2カラム */}
        <div style={s.grid}>
          {points.map((p, i) => (
            <div key={i} style={s.card}>
              <h4 style={{ ...s.cardTitle, color: p.color }}>{p.title}</h4>
              <p style={s.cardText}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===== styles ===== */
const s = {
  section: {
    background: "#0a0f14",
    padding: "6rem 1rem",
    color: "#eaf7ee",
  },
  container: { maxWidth: 1200, margin: "0 auto" },

  header: { textAlign: "center", marginBottom: "2.5rem" },
  label: {
    display: "inline-block",
    padding: "4px 14px",
    borderRadius: 999,
    background: "rgba(255,255,255,.08)",
    color: "#9aa",
    fontSize: 13,
    marginBottom: 12,
  },
  title: {
    fontSize: "2rem",
    fontWeight: 800,
    marginBottom: 8,
  },
  subtitle: { color: "#00db6a", fontWeight: 700, fontSize: 16 },

  mainCard: {
    background: "rgba(20,28,36,0.85)",
    borderRadius: 14,
    padding: "1.8rem",
    marginBottom: "2rem",
    border: "1px solid rgba(200,255,230,.12)",
    lineHeight: 1.8,
  },
  note: {
    background: "rgba(80,60,200,.25)",
    borderRadius: 10,
    padding: "0.8rem 1rem",
    marginTop: 12,
    fontSize: 14,
    color: "#cfdcff",
  },

  subHeading: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: 800,
    margin: "2.2rem 0 1rem",
    color: "#d892ff",
  },
  subCard: {
    background: "rgba(20,28,36,0.85)",
    borderRadius: 14,
    padding: "1.8rem",
    marginBottom: "2rem",
    border: "1px solid rgba(200,255,230,.12)",
  },
  dualBox: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 16,
    marginTop: 18,
  },
  dualItem: {
    borderRadius: 10,
    padding: "1rem",
    textAlign: "center",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 22,
    marginTop: 24,
  },
  card: {
    background: "rgba(20,28,36,0.85)",
    borderRadius: 14,
    padding: "1.5rem",
    border: "1px solid rgba(200,255,230,.12)",
  },
  cardTitle: { fontSize: 16, fontWeight: 800, marginBottom: 8 },
  cardText: { fontSize: 14, lineHeight: 1.7, color: "#cfe2ef" },
};
