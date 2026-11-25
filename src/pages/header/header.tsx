
import { Search, Bell } from 'lucide-react'

function Header() {
  return (
    <header className="h-[76px] bg-[#EEF1F8] px-6 flex items-center gap-5">

      {/* LOGO */}
      <div className="flex w-[230px] shrink-0 items-center gap-3">
        <img
          src="/logo.png"
          alt="Logo"
          className="h-14 w-14 object-contain"
        />
        <h1 className="text-xl font-bold text-slate-800">
          Rekail
        </h1>
      </div>
      {/* BARRE DE RECHERCHE */}
      <div className="flex flex-1 justify-start">
        <div className="flex w-full max-w-[480px] items-center gap-3 rounded-xl border border-slate-200/80 bg-white px-4 py-2.5 transition focus-within:border-[#E45B52] focus-within:ring-2 focus-within:ring-[#E45B52]/10">
          <Search size={19} className="shrink-0 text-slate-400" />

          <input
            type="text"
            placeholder="Rechercher un message, un contact..."
            className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
          />
        </div>
      </div>

      {/* UTILISATEUR ET NOTIFICATIONS */}
      <div className="flex items-center gap-5">

        <button
          title="Notifications"
          className="relative flex h-10 w-10 items-center justify-center rounded-full text-slate-500 transition hover:bg-white hover:text-[#E45B52]"
        >
          <Bell size={21} strokeWidth={1.8} />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[#E45B52] ring-2 ring-[#EEF1F8]" />
        </button>

        <div className="h-9 w-px bg-slate-200" />

        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FCE7E5] font-semibold text-[#D94B43]">
            U
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-700">
              Utilisateur
            </p>
            <p className="text-xs text-emerald-600">
              Connecté
            </p>
          </div>
        </div>

      </div>

    </header>
  )
}

export default Header
