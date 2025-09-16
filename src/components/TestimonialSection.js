"use client";

export default function TestimonialSection() {
  const members = [
    {
      name: "ジャグ・カウラ（Jag Kaurah）",
      role: "Algae International Berhad 創設者・最高技術責任者",
      color: "#3da2ff",
      image: "/team1.jpg",
      desc: "2006年より微細藻類技術開発に専念し、2008年に業界を変革する画期的特許を取得。同年に Algae International Berhad を設立。藻類バイオマス生産コストの劇的削減を実現し、気候制御透明建物での多層培養システムにより、藻類と野菜の統合生産を可能にしています。"
    },
    {
      name: "エロール・ペレラ（Errol Perera）",
      role: "Revoganix株式会社 代表取締役 / ASEAN持続可能農業アドバイザー",
      color: "#00db6a",
      image: "/team2.jpg",
      desc: "持続可能農業、水産養殖、微生物学分野における35年以上の専門知識を有するペレラ氏は、ASEAN事務局のチーフコンサルタントおよびスリランカ水産大臣の公式アドバイザーを歴任。革新的水産養殖システムと広範囲な経験により、貴重な地域専門知識と政府関係を提供しています。"
    },
    {
      name: "松浦 亮介（Matsuura Ryosuke）",
      role: "Algae International Japan株式会社 代表取締役",
      color: "#c580ff",
      image: "/team3.jpg",
      desc: "京都大学大学院にて数理工学を専攻、大手IT企業での豊富な研究開発経験を経て、デジタルマーケティング分野に転身。現在はサステナビリティとイノベーション分野のイニシアチブをリード。技術的専門性とビジネス手腕の独特な組み合わせにより、環境ソリューションの推進力として位置づけられています。"
    },
    {
      name: "熊木 景（Kumaki Kei）",
      role: "dotpb株式会社 代表取締役",
      color: "#ff9900",
      image: "/team4.jpg",
      desc: "日本のペット教育分野において日本一の実績を獲得。デジタル領域への専門性の拡張に成功し、高度なマーケティングおよびブランディング戦略を適用。複数の産業に新たな価値を創造しています。その実績は専門知識を幅広く市場応用へとスケールする能力を実証しています。"
    }
  ];

  return (
    <section style={s.section}>
      <div style={s.container}>
        {/* ヘッダー */}
        <div style={s.header}>
          <span style={s.label}>2. チームメンバー</span>
          <h2 style={s.title}>世界クラスの専門チーム</h2>
        </div>

        {/* メンバーカード */}
        <div style={s.grid}>
          {members.map((m, i) => (
            <div key={i} style={s.card}>
              <div style={s.avatarWrap}>
                <img
                  src={m.image}
                  alt={m.name}
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: "50%",
                    border: `4px solid ${m.color}`,
                    objectFit: "cover"
                  }}
                />
              </div>
              <h3 style={s.name}>{m.name}</h3>
              <p style={{ ...s.role, color: m.color }}>{m.role}</p>
              <p style={s.desc}>{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 768px) {
          .grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

/* ====== styles ====== */
const s = {
  section: {
    background: "#000",
    padding: "6rem 1rem",
    color: "#e9f9ee"
  },
  container: {
    maxWidth: 1200,
    margin: "0 auto"
  },
  header: {
    textAlign: "center",
    marginBottom: "3rem"
  },
  label: {
    display: "inline-block",
    padding: "4px 14px",
    borderRadius: 999,
    background: "rgba(255,255,255,0.08)",
    color: "#9aa",
    fontSize: 13,
    marginBottom: 12
  },
  title: {
    fontSize: "2rem",
    fontWeight: 800
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)", // 2列
    gap: "2rem"
  },
  card: {
    background: "rgba(20,20,30,0.8)",
    borderRadius: 16,
    padding: "2rem",
    boxShadow: "0 12px 40px rgba(0,0,0,0.35)",
    textAlign: "center"
  },
  avatarWrap: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "1rem"
  },
  name: {
    fontSize: "1.25rem",
    fontWeight: 700,
    marginBottom: "0.5rem"
  },
  role: {
    fontSize: "0.95rem",
    fontWeight: 500,
    marginBottom: "1rem"
  },
  desc: {
    fontSize: "0.9rem",
    color: "#ccc",
    lineHeight: 1.7,
    textAlign: "left"
  }
};
