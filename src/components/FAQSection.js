// JSX version + styles updated to match the attached dark token section

export default function FAQSection() {
  const faqs = [
    {
      question: '敏感肌でも使えますか？',
      answer:
        'はい、医薬部外品原料規格をクリアした安全な処方です。敏感肌の方でも安心してお使いいただけます。',
    },
    {
      question: 'いつ使えばいいですか？',
      answer:
        'スキンケアの後、メイクの仕上げまで、どのタイミングでもお使いいただけます。下地の上からでも、ファンデーションの後でも、お好みのタイミングでご使用ください。',
    },
    {
      question: 'どのくらい持ちますか？',
      answer:
        '1日1回の使用で、500mgは約30日、2,000mgは約60日、5,000mgは約150日ご使用いただけます。',
    },
  ]

  return (
    <>
      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.inner}>
            {/* Header */}
            <div style={styles.header}>
              <span style={styles.badge}>5. トークン情報</span>
              <h2 style={styles.title}>MOTHER VEGETABLES Token (MVT)</h2>
              <p style={styles.kihon}>基本構造</p>
            </div>

            {/* Card-like FAQ list (dark panels) */}
            <div style={styles.panel}>
              <div style={styles.panelInner}>
                {faqs.map((faq, i) => (
                  <div key={i} style={styles.faqItem}>
                    <h3 style={styles.question}>
                      <span style={styles.qDot}>Q</span> {faq.question}
                    </h3>
                    <p style={styles.answer}>
                      <span style={styles.aDot}>A</span> {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* responsive font tuning (to mirror screenshot scale) */}
      <style jsx>{`
        @media (min-width: 768px) {
          h2 {
            font-size: 44px !important; /* 大見出し（画像のスケール感） */
            letter-spacing: 0.02em !important;
          }
          .faq-question {
            font-size: 18px !important;
          }
          .faq-answer {
            font-size: 15px !important;
          }
        }
        @media (min-width: 1200px) {
          h2 {
            font-size: 52px !important;
          }
        }
      `}</style>
    </>
  )
}

/* ===== styles (inline objects) ===== */
const styles = {
  /* page */
  section: {
    padding: '84px 16px',
    background: '#000', // 黒背景（スクショ準拠）
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  inner: {
    maxWidth: '1060px',
    margin: '0 auto',
  },

  /* header */
  header: {
    textAlign: 'center',
    margin: '0 auto 36px',
  },
  badge: {
    display: 'inline-block',
    color: '#facc15', // 黄色
    background: 'rgba(250, 204, 21, 0.12)',
    border: '1px solid rgba(250, 204, 21, 0.4)',
    borderRadius: '999px',
    padding: '6px 12px',
    fontSize: 13,
    letterSpacing: '0.08em',
    marginBottom: 14,
  },
  title: {
    margin: '8px 0 10px',
    color: '#fff',
    fontWeight: 800,
    fontSize: 36, // responsiveで上書き
    lineHeight: 1.2,
  },
  kihon: {
    margin: '10px 0 22px',
    color: '#facc15',
    fontWeight: 700,
    fontSize: 18,
    letterSpacing: '0.06em',
  },

  /* panel wrapper like screenshot big cards */
  panel: {
    background: '#0e141b', // 濃紺グレー
    border: '1px solid rgba(255,255,255,0.06)',
    borderRadius: 18,
    padding: 24,
    boxShadow: '0 10px 28px rgba(0,0,0,0.35)',
  },
  panelInner: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: 18,
  },

  /* items */
  faqItem: {
    background: 'rgba(255,255,255,0.02)',
    border: '1px solid rgba(255,255,255,0.05)',
    borderRadius: 14,
    padding: '18px 20px',
  },
  question: {
    fontSize: 17,
    fontWeight: 700,
    color: '#e6edf3', // 明るいグレー（白寄り）
    margin: '0 0 8px',
  },
  answer: {
    fontSize: 14,
    color: '#b7c1c8', // 淡いグレー（本文）
    lineHeight: 1.9,
    margin: 0,
  },

  /* Q/A small chips */
  qDot: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 20,
    height: 20,
    borderRadius: '50%',
    background: 'rgba(250, 204, 21, 0.16)',
    border: '1px solid rgba(250, 204, 21, 0.5)',
    color: '#facc15',
    fontSize: 12,
    marginRight: 8,
  },
  aDot: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 18,
    height: 18,
    borderRadius: '50%',
    background: 'rgba(94, 234, 212, 0.12)',
    border: '1px solid rgba(94, 234, 212, 0.5)',
    color: '#7dd3fc',
    fontSize: 11,
    marginRight: 8,
  },
}
