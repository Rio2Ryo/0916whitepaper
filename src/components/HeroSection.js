"use client";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <header style={styles.wrap}>
      {/* 背景：宇宙＋地球（右寄せ） */}
      <div style={styles.bg}>
        <div style={styles.bgSpace} />
        <div style={styles.bgStars} />
        <div style={styles.vignette} />
        <div style={styles.bgEarth} aria-hidden />
        <div style={styles.greenAurora} />
        <div style={styles.darkTopBar} />
      </div>

      {/* ナビバー（上部） */}
      <div style={styles.navbar}>
        <div style={styles.logo}>
          <div style={styles.logoMark} />
          <span style={styles.logoText}>MOTHER VEGETABLES</span>
        </div>
        <nav style={styles.navLinks}>
          <a style={styles.navLink}>プロジェクト概要</a>
          <a style={styles.navLink}>チーム</a>
          <a style={styles.navLink}>パートナー</a>
          <a style={styles.navLink}>技術詳細</a>
          <a style={styles.navLink}>トークン</a>
        </nav>
      </div>

      {/* コンテンツ */}
      <div style={styles.container}>
        <div
          style={{
            ...styles.heroBlock,
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(16px)",
          }}
        >
          <h1 style={styles.title}>
            MOTHER VEGETABLES
            <br />
            PROJECT
          </h1>

          <p style={styles.kicker}>地球最初の生命体による</p>
          <p style={styles.projectGreen}>地球再生プロジェクト</p>

          {/* 黒カード説明 */}
          <div style={styles.explainCard}>
            <p style={styles.explainText}>
              <span style={styles.em}>35億年前</span>
              の地球最初の生命体「
              <span style={styles.em}>マザーベジタブル</span>
              」を世界各地に展開することで、<br />
              CO₂を削減しながら
              <span style={styles.em}>人類と生物の健康を向上</span>させる、
              <br />
              作れば作るほど地球を良くしていく
              <span style={styles.emGreen}>循環型システム</span>
            </p>
          </div>

          {/* 指標ボックス */}
          <div style={styles.metrics}>
            <div style={styles.metricBox}>
              <div style={styles.metricNumber}>700倍</div>
              <div style={styles.metricCaption}>
                CO₂吸収効率
                <br />
                <span style={styles.metricSub}>vs 天然藻</span>
              </div>
            </div>
            <div style={styles.metricBox}>
              <div style={styles.metricNumber}>24/7</div>
              <div style={styles.metricCaption}>
                連続稼働
                <br />
                <span style={styles.metricSub}>365日間</span>
              </div>
            </div>
            <div style={styles.metricBox}>
              <div style={styles.metricNumber}>8分野</div>
              <div style={styles.metricCaption}>
                産業展開
                <br />
                <span style={styles.metricSub}>グローバル</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ページ内専用スタイル（アニメ） */}
      <style jsx>{`
        @keyframes floatStars {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-40px);
          }
        }
        @keyframes breathe {
          0% {
            opacity: 0.25;
          }
          50% {
            opacity: 0.6;
          }
          100% {
            opacity: 0.25;
          }
        }
        @media (max-width: 1024px) {
          :global(h1) {
            line-height: 1.15 !important;
          }
        }
      `}</style>
    </header>
  );
}

/* ===== styles ===== */
const GREEN = "#22ff88";
const GREEN_DEEP = "#00db6a";

const styles = {
  wrap: {
    position: "relative",
    minHeight: "100vh",
    overflow: "hidden",
    background: "#000",
    color: "#e9f9ee",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,"Noto Sans JP","Hiragino Kaku Gothic ProN","Yu Gothic",Meiryo,sans-serif',
  },

  /* 背景 */
  bg: { position: "absolute", inset: 0, zIndex: 0 },
  bgSpace: {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(1200px 800px at 30% 20%, #0b1b12 0%, #050b08 45%, #000 70%)",
  },
  bgStars: {
    position: "absolute",
    inset: 0,
    backgroundImage:
      "radial-gradient(1px 1px at 20% 30%, rgba(255,255,255,.25) 50%, transparent 51%), radial-gradient(1px 1px at 70% 10%, rgba(255,255,255,.35) 50%, transparent 51%), radial-gradient(1px 1px at 80% 60%, rgba(255,255,255,.2) 50%, transparent 51%), radial-gradient(1px 1px at 40% 80%, rgba(255,255,255,.28) 50%, transparent 51%)",
    backgroundRepeat: "repeat",
    backgroundSize: "700px 700px, 900px 900px, 800px 800px, 1000px 1000px",
    opacity: 0.5,
    animation: "floatStars 18s linear infinite",
  },
  vignette: {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(80% 80% at 50% 50%, rgba(0,0,0,0) 60%, rgba(0,0,0,.55) 100%)",
    pointerEvents: "none",
  },
  bgEarth: {
    position: "absolute",
    right: "-6vw",
    top: "5vh",
    width: "70vw",
    maxWidth: 980,
    aspectRatio: "1 / 1",
    borderRadius: "50%",
    backgroundImage:
      // ここを public/earth-hero.jpg などに差し替え可能
      "radial-gradient(closest-side, rgba(0,0,0,0) 68%, rgba(0,0,0,.45) 72%, rgba(0,0,0,.8) 100%), radial-gradient(100% 100% at 30% 25%, rgba(34,255,136,.35) 0%, rgba(34,255,136,0) 55%)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    boxShadow:
      "inset -120px -80px 180px rgba(0,0,0,.6), 0 0 120px rgba(34,255,136,.15)",
    filter: "saturate(0.9) contrast(1.05)",
  },
  greenAurora: {
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    width: "60vw",
    background:
      "radial-gradient(60% 60% at 80% 30%, rgba(0,255,140,.18) 0%, rgba(0,255,140,0) 70%)",
    mixBlendMode: "screen",
    animation: "breathe 8s ease-in-out infinite",
    pointerEvents: "none",
  },
  darkTopBar: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 72,
    background:
      "linear-gradient(180deg, rgba(0,0,0,.75) 0%, rgba(0,0,0,.25) 80%, rgba(0,0,0,0) 100%)",
    backdropFilter: "blur(4px)",
  },

  /* ナビ */
  navbar: {
    position: "relative",
    zIndex: 2,
    height: 72,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 28px",
  },
  logo: { display: "flex", alignItems: "center", gap: 10 },
  logoMark: {
    width: 18,
    height: 18,
    borderRadius: 4,
    background:
      "conic-gradient(from 180deg, #19ff86, #27de86, #19ff86, #19ff86)",
    boxShadow: "0 0 10px rgba(34,255,136,.6)",
  },
  logoText: {
    fontSize: 14,
    letterSpacing: 1.4,
    color: "#baf5d3",
    fontWeight: 700,
  },
  navLinks: { display: "flex", alignItems: "center", gap: 22 },
  navLink: {
    color: "#cfeee0",
    fontSize: 13,
    opacity: 0.85,
    cursor: "pointer",
    textDecoration: "none",
    whiteSpace: "nowrap",
  },

  /* 本文 */
  container: {
    position: "relative",
    zIndex: 1,
    minHeight: "calc(100vh - 72px)",
    display: "grid",
    alignItems: "center",
    padding: "24px 28px 64px",
  },
  heroBlock: {
    maxWidth: 980,
    margin: "0 auto",
    transition: "300ms ease",
    textAlign: "left",
  },
  title: {
    fontSize: "clamp(36px, 6.6vw, 86px)",
    lineHeight: 1.05,
    letterSpacing: 1.2,
    margin: "10vh 0 24px",
    fontWeight: 800,
    color: GREEN,
    textShadow:
      "0 0 20px rgba(34,255,136,.18), 0 0 60px rgba(34,255,136,.12)",
  },
  kicker: {
    fontSize: "clamp(14px, 1.7vw, 18px)",
    color: "#cfeee0",
    opacity: 0.9,
    margin: "6px 0 2px",
  },
  projectGreen: {
    fontSize: "clamp(18px, 2.1vw, 22px)",
    color: GREEN,
    fontWeight: 700,
    letterSpacing: 1.6,
    marginBottom: 18,
  },

  explainCard: {
    marginTop: 16,
    background:
      "linear-gradient(180deg, rgba(0,0,0,.65), rgba(0,0,0,.55))",
    border: "1px solid rgba(180,255,220,.14)",
    boxShadow: "0 30px 80px rgba(0,0,0,.35)",
    borderRadius: 14,
    padding: "22px 26px",
    maxWidth: 860,
  },
  explainText: {
    fontSize: "clamp(14px, 1.7vw, 18px)",
    lineHeight: 1.9,
    color: "#e7f7ee",
  },
  em: { color: "#e2fff2", fontWeight: 700 },
  emGreen: { color: GREEN_DEEP, fontWeight: 800 },

  metrics: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: 18,
    marginTop: 26,
    maxWidth: 780,
  },
  metricBox: {
    background: "rgba(0,0,0,.55)",
    border: "1px solid rgba(180,255,220,.16)",
    borderRadius: 12,
    padding: "18px 16px",
    boxShadow: "0 18px 50px rgba(0,0,0,.3)",
    backdropFilter: "blur(2px)",
  },
  metricNumber: {
    fontSize: "clamp(22px, 4.2vw, 34px)",
    color: GREEN,
    fontWeight: 800,
    marginBottom: 4,
    textShadow: "0 0 18px rgba(34,255,136,.2)",
  },
  metricCaption: {
    color: "#cfeee0",
    fontSize: "clamp(12px, 1.7vw, 15px)",
    lineHeight: 1.5,
  },
  metricSub: {
    color: "#a5cdbb",
    fontSize: "0.95em",
  },

  /* レスポンシブ */
  "@media (maxWidth: 900px)": {},
};
