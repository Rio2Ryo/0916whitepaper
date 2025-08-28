"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

type JsonProduct = {
  name: string;
  slug: string;                 // 例: "trial-1111"
  description?: string;
  originalprice?: string;       // JSONは小文字p
  originalprice2?: string;       // JSONは小文字p
  price?: string;               // 例: "2,000円"
  ItemPic?: string;
  wixProductId?: string;
  url?: string;                 // 取得はするが今回の遷移では未使用
};

export default function ProductSection() {
  const [selectedSize, setSelectedSize] = useState("2,000mg"); // ← 表記に合わせて調整
  const [jsonData, setJsonData] = useState<JsonProduct[] | null>(null);

  const router = useRouter();
  const rawId = router.query?.itemId;
  const itemId = Array.isArray(rawId) ? rawId[0] : rawId;

  // 既存のカード定義（フォールバック値）
  const allProducts = useMemo(
    () => [
      //{
      //  size: "500mg",
      //  slugPrefix: "trial",
      //  title: "お試しサイズ",
      //  description: "500mg - 約30日分",
      //  features: ["マザーベジタブル 500mg配合", "約30日分", "携帯に便利なコンパクトケース"],
      //  originalPrice: "¥3,300",
      //  price: "¥2,200",
      //  popular: false,
      //  fallbackImg: "/item_pic1.jpg",
      //},
      {
        size: "2,000mg",
        slugPrefix: "standard",
        title: "スタンダードサイズ",
        description: "2,000mg - 約60日分",
        features: ["マザーベジタブル 2,000mg配合", "約60日分", "携帯に便利なコンパクトケース"],
        originalPrice: "¥6,600",
        originalPrice2: "¥6,600",
        price: "¥4,400",
        popular: true,
        fallbackImg: "/item_pic2.jpg",
      },
      {
        size: "5,000mg",
        slugPrefix: "large",
        title: "お得な大容量",
        description: "5,000mg - 約150日分",
        features: ["マザーベジタブル 5,000mg配合", "約150日分", "特別な大容量ラグジュアリーケース"],
        originalPrice: "¥11,000",
        originalPrice2: "¥11,000",
        price: "¥8,800",
        popular: false,
        fallbackImg: "/item_pic3.jpg",
      },
    ],
    []
  );

  // JSON読み込み（public/<itemId>_products.json）
  useEffect(() => {
    if (!itemId) return;
    let ignore = false;
    (async () => {
      try {
        const jsonPath = `/${itemId}_products.json`;
        const res = await fetch(jsonPath, { cache: "no-store" });
        if (!res.ok) throw new Error(`failed to load ${jsonPath}`);
        const data: JsonProduct[] = await res.json();
        if (!ignore) setJsonData(data);
      } catch (e) {
        console.error(e);
        if (!ignore) setJsonData([]);
      }
    })();
    return () => { ignore = true; };
  }, [itemId]);

  // JSONをマージして最終表示データを生成
  const products = useMemo(() => {
    if (!itemId) return [];
    return allProducts.map((p) => {
      const slug = `${p.slugPrefix}-${itemId}`;
      const match = (jsonData || []).find((j) => j.slug === slug);
      return {
        ...p,
        slug,
        price: match?.price ?? p.price,
        originalPrice: match?.originalprice ?? p.originalPrice,
        originalPrice2: match?.originalprice2 ?? p.originalPrice2,
        itemPic: match?.ItemPic ?? p.fallbackImg,
      };
    });
  }, [allProducts, jsonData, itemId]);

  return (
    <section id="product" style={{ padding: "5rem 0.01rem 1rem 0.01rem", backgroundColor: "#f9fafb" }}>
      <div style={{ maxWidth: "880px", margin: "0 auto", padding: "0 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p style={{ fontSize: "0.875rem", color: "#b8860b", marginBottom: "1rem", letterSpacing: "0.1em" }}>商品ラインナップ</p>
          <h2 style={{ fontSize: "2rem", fontWeight: "bold", color: "#2d2d2d", marginBottom: "2rem", lineHeight: "1.2" }}>
            Mother Vegetables Confidence<br />MV-Si002 商品ラインナップ
          </h2>
          <div style={{ width: "80px", height: "4px", backgroundColor: "#b8860b", margin: "0 auto" }} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem", marginBottom: "5rem" }}>
          {products.map((product) => {
            // ← ここを常に内部の動的ページに戻しました
            const internalHref = `/item/${itemId}/${product.slug}`;

            return (
              <div
                key={product.size}
                onClick={() => setSelectedSize(product.size)}
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "1rem",
                  padding: "2rem",
                  border: selectedSize === product.size ? "3px solid #b8860b" : product.popular ? "2px solid #b8860b" : "2px solid #e5e7eb",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
                  cursor: "pointer",
                  position: "relative",
                  textAlign: "center"
                }}
              >
                {product.popular && (
                  <div style={{
                    position: "absolute",
                    top: "1rem",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "linear-gradient(to right, #b8860b, #d4c4b0)",
                    padding: "0.5rem 1.5rem",
                    borderRadius: "9999px",
                    fontWeight: "bold",
                    fontSize: "0.875rem",
                    color: "#000",
                    zIndex: 2
                  }}>
                    人気No.1
                  </div>
                )}

                <div style={{ marginBottom: "1.5rem" }}>
                  <img
                    src={product.itemPic}
                    alt={`${product.size} 商品画像`}
                    style={{
                      width: "100%",
                      aspectRatio: "1 / 1",
                      objectFit: "cover",
                      borderRadius: "1rem",
                      backgroundColor: "#f3f4f6"
                    }}
                  />
                </div>

                <h3 style={{ fontSize: "1.25rem", fontWeight: "300", color: "#1f2937", marginBottom: "0.5rem" }}>{product.title}</h3>
                <p style={{ fontSize: "0.875rem", color: "#6b7280", marginBottom: "1rem" }}>{product.description}</p>
                <div style={{ fontSize: "0.875rem", color: "#6b7280", marginBottom: "1.5rem" }}>
                  {product.features.map((f: string, i: number) => (
                    <p key={i} style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "0.5rem" }}>
                      <span style={{ width: "6px", height: "6px", backgroundColor: "#b8860b", borderRadius: "50%" }}></span>
                      {f}
                    </p>
                  ))}
                </div>

                <div style={{ marginBottom: "1rem" }}>
                  {/*<p style={{ fontSize: "0.75rem", color: "#6b7280", marginBottom: "0.25rem" }}>
                     {product.originalPrice}
                  </p>
                  <p style={{ fontSize: "0.75rem", color: "#6b7280", textDecoration: "line-through", marginBottom: "0.25rem" }}>
                    {product.originalPrice2}
                  </p>*/}
                  <p className="price" style={{ fontSize: "2rem", fontWeight: "300", marginBottom: "0.25rem", color: product.popular ? "#b8860b" : "#1f2937" }}>
                    {product.price}
                  </p>
                  <p style={{ fontSize: "0.75rem", color: "#9ca3af" }}>(税込)</p>
                </div>

                {/* ✅ 常に内部の動的ページに遷移 */}
                <Link href={internalHref} style={{ textDecoration: "none" }}>
                  <button style={{
                    width: "100%",
                    padding: "0.75rem 1.5rem",
                    background: product.popular ? "linear-gradient(to right, #b8860b, #d4c4b0)" : "#e5e7eb",
                    color: product.popular ? "#000" : "#1f2937",
                    border: "none",
                    borderRadius: "0",
                    fontSize: "0.875rem",
                    cursor: "pointer"
                  }}>
                    購入する
                  </button>
                </Link>
              </div>
            );
          })}
        </div>
        {/* ▼ 追加：カード直下の説明ブロック（日本語のみ） */}
        <div
          style={{
            backgroundColor: "#ffffff",
            border: "1px solid #ececec",
            borderRadius: "1rem",
            boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
            padding: "2rem",
            lineHeight: 1.9,
            color: "#1f2937",
            marginBottom: "3rem"
          }}
        >
          <h3 className="p-title" style={{ textAlign:"center", fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.75rem", color: "#111827" }}>
            スマートに持ち運べるコンパクトケース
          </h3>
          <p style={{ marginBottom: "0.75rem" }}>
            薄型設計のコンパクトケースで、いつでもどこでも手軽に持ち運び可能。ちょっとした外出時や、電車の中、汗ばむ夏の日でもサッと使えて、20時間続くテカリ改善を実現します。
          </p>
          <p style={{ marginBottom: "0.75rem" }}>
            さらに、マザーベジタブル由来の殺菌作用により、パフやブラシも清潔な状態で使用可能。常に安心してお使いいただけます。
          </p>
          <p>
            デザインはマットブラック仕様。男女問わず手に取りやすく、バッグやデスクに置いても違和感のないスタイリッシュな仕上がりです。
          </p>
        </div>
        {/* ▲ 追加ここまで */}
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          h2 { font-size: 1.45rem !important; }
          .price { font-size: 1.4rem !important; }
          .p-title{font-size:1rem!important;text-align:center!important;}
        }
      `}</style>
    </section>
  );
}
