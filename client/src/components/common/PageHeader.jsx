import React from 'react'

function PageHeader({ title, subtitle }) {
  return (
    <div className="relative overflow-hidden rounded-2xl mb-8 p-8 sm:p-10 border border-white/10 bg-gradient-to-r from-red-950/70 via-orange-950/40 to-black/60 backdrop-blur-xl shadow-2xl">
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="relative z-10">
        <p className="text-xs font-extrabold uppercase tracking-widest text-[#ffbd59] mb-2 flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-[#ffbd59] animate-ping" />
          Ozilla Festival 2026
        </p>
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-2">
          {title}
        </h1>
        {subtitle && (
          <p className="text-base sm:text-lg text-white/75 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  )
}

export default PageHeader
