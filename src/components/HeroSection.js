'use client'

import Image from 'next/image'

export default function Hero() {
  const scrollToDetails = () => {
    const element = document.getElementById('project-overview')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const downloadWhitepaper = () => {
    const link = document.createElement('a')
    link.href = '/0912_whitepaper_ja.pdf'
    link.download = 'MOTHER_VEGETABLES_Whitepaper_JP.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden z-base pt-20 md:pt-24">
      {/* Background Image */}
      <div className="absolute inset-0" style={{ zIndex: -1 }}>
        <Image
          src="/hero-earth-regeneration-Dnk2z_VF.png"
          alt="Earth Regeneration"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative text-center px-4 max-w-6xl mx-auto mt-8 md:mt-12" style={{ zIndex: 10 }}>
        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 md:mb-8">
          <span className="text-emerald-400">MOTHER VEGETABLES</span>
          <br />
          <span className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">PROJECT</span>
        </h1>

        {/* Subtitle */}
        <div className="mb-12">
          <p className="text-xl md:text-2xl text-white mb-4">地球最初の生命体による</p>
          <p className="text-2xl md:text-3xl text-emerald-400 font-bold mb-8">地球再生プロジェクト</p>
          
          <div className="max-w-4xl mx-auto space-y-4 text-base sm:text-lg md:text-xl text-gray-200">
            <p>35億年前の地球最初の生命体「マザーベジタブル」を世界各地に展開することで、</p>
            <p>CO₂を削減しながら人類と生物の健康を向上させる、</p>
            <p>作れば作るほど地球を良くしていく<span className="text-emerald-400 font-bold">循環型システム</span></p>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12">
          <div className="bg-black/40 backdrop-blur-md border border-emerald-500/30 rounded-lg p-4 sm:p-5 md:p-6">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-400 mb-2">700倍</div>
            <div className="text-white">
              <div className="font-semibold">CO₂吸収効率</div>
              <div className="text-sm text-gray-300">vs 天然芝</div>
            </div>
          </div>
          
          <div className="bg-black/40 backdrop-blur-md border border-emerald-500/30 rounded-lg p-4 sm:p-5 md:p-6">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-400 mb-2">24/7</div>
            <div className="text-white">
              <div className="font-semibold">連続稼働</div>
              <div className="text-sm text-gray-300">365日間</div>
            </div>
          </div>
          
          <div className="bg-black/40 backdrop-blur-md border border-emerald-500/30 rounded-lg p-4 sm:p-5 md:p-6">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-400 mb-2">8分野</div>
            <div className="text-white">
              <div className="font-semibold">産業展開</div>
              <div className="text-sm text-gray-300">グローバル</div>
            </div>
          </div>
        </div>

        {/* Version Badge */}
        <div className="mb-8">
          <span className="inline-block bg-emerald-500/20 border border-emerald-500/50 text-emerald-400 px-4 py-2 rounded-full text-sm">
            ✨ Version 1.0.0 - 革命的環境技術
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToDetails}
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            ▶ プロジェクト詳細を見る
          </button>
          <button
            onClick={() => document.getElementById('token')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            🪙 トークン情報
          </button>
          <button
            onClick={downloadWhitepaper}
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            📄 ホワイトペーパー
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2" style={{ zIndex: 10 }}>
          <div className="text-white text-center">
            <p className="text-sm mb-2">詳細を見る</p>
            <div className="animate-bounce">
              <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
