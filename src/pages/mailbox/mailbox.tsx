import { ContactRound, Settings, Clock, LogOut, Inbox as Inboxicon, Send, MailOpen, Trash2 } from 'lucide-react'
import { useState } from 'react'
import Header from '../header/header'
import Message from './message'
import Inbox from './inbox'


function Mailbox() {
    const [selected, setSelected] = useState(1)
    const [chatOpen, setChatOpen] = useState(false)

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#EEF1F8] via-[#F7F8FC] to-[#E9EDF5] text-slate-800">

            {/* EN-TÊTE GLOBAL */}
            <Header />
            {/* CONTENU PRINCIPAL */}
            <main className="flex h-[calc(100vh-76px)] gap-5 px-6 pt-0 pb-4">

                {/* COLONNE GAUCHE */}
                <section className="w-[230px] shrink-0 flex flex-col gap-6 py-5">
                    {/*NOUVEAU MESSAGE*/}

                    <button
                        onClick={() => setChatOpen(true)}
                        className="mb-4 flex items-center gap-3 rounded-xl bg-[#E45B52] px-4 py-3 font-semibold text-white shadow-sm transition hover:bg-[#D94B43]"
                    >
                        <span className="text-xl">+</span>
                        Nouveau message
                    </button>

                    {/* DOSSIERS */}
                    <nav className="flex flex-col gap-2">

                        <button
                            onClick={() => setSelected(1)}
                            className={`flex items-center gap-3 rounded-xl px-4 py-3 text-left transition ${selected === 1
                                ? 'bg-white text-[#E45B52] font-semibold shadow-sm'
                                : 'text-slate-600 hover:bg-white/60'
                                }`}
                        >
                            <Inboxicon size={21} strokeWidth={1.8}/>
                            <span>Inbox</span>
                        </button>

                        <button
                            onClick={() => setSelected(2)}
                            className={`flex items-center gap-3 rounded-xl px-4 py-3 text-left transition ${selected === 2
                                ? 'bg-white text-[#E45B52] font-semibold shadow-sm'
                                : 'text-slate-600 hover:bg-white/60'
                                }`}
                        >
                            <Send size={21} strokeWidth={1.8}/>
                            <span>Messages envoyés</span>
                        </button>

                        <button
                            onClick={() => setSelected(3)}
                            className={`flex items-center gap-3 rounded-xl px-4 py-3 text-left transition ${selected === 3
                                ? 'bg-white text-[#E45B52] font-semibold shadow-sm'
                                : 'text-slate-600 hover:bg-white/60'
                                }`}
                        >
                            <Clock size={21} strokeWidth={1.8}/>
                            <span>Messages en attente</span>
                        </button>

                        <button
                            onClick={() => setSelected(4)}
                            className={`flex items-center gap-3 rounded-xl px-4 py-3 text-left transition ${selected === 4
                                ? 'bg-white text-[#E45B52] font-semibold shadow-sm'
                                : 'text-slate-600 hover:bg-white/60'
                                }`}
                        >
                            <MailOpen size={21} strokeWidth={1.8}/>
                            <span>Messages reçu</span>
                        </button>

                        <button
                            onClick={() => setSelected(5)}
                            className={`flex items-center gap-3 rounded-xl px-4 py-3 text-left transition ${selected === 5
                                ? 'bg-white text-[#E45B52] font-semibold shadow-sm'
                                : 'text-slate-600 hover:bg-white/60'
                                }`}
                        >
                            <Trash2 size={21} strokeWidth={1.8}/>
                            <span>Corbeille</span>
                        </button>

                    </nav>
                    {/* DÉCONNEXION EN BAS */}
                    <button className="mt-auto flex items-center gap-3 rounded-xl px-4 py-3 font-medium text-slate-600 transition hover:bg-red-50 hover:text-red-600">
                        <LogOut size={21} strokeWidth={1.8}/>
                        Déconnexion
                    </button>
                </section>


                {/* ZONE DE DISCUSSION */}
                <section className="flex-1 min-w-0 flex flex-col my-2 mr-2 ml-1 rounded-2xl border border-slate-200/80 bg-white/90 shadow-sm overflow-hidden">

                    {selected === 1 ? (
                        <Inbox />
                    ) : selected === 2 ? (
                        <div className="flex h-full items-center justify-center text-slate-400">
                            Messages envoyés
                        </div>
                    ) : (
                        <div className="flex h-full items-center justify-center text-slate-400">
                            Messages en attente
                        </div>
                    )}

                </section>

                {/* SECTION 3 : OUTILS LATÉRAUX */}
                <section className="w-[20px] shrink-0 flex flex-col items-center gap-4 py-5">

                    <button
                        title="Contacts"
                        className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-500 transition hover:bg-white hover:text-[#E45B52] hover:shadow-sm"
                    >
                        <ContactRound size={21} strokeWidth={1.8} />
                    </button>

                    <button
                        title="Paramètres"
                        className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-500 transition hover:bg-white hover:text-[#E45B52] hover:shadow-sm"
                    >
                        <Settings size={21} strokeWidth={1.8} />
                    </button>

                </section>

            </main>
            {chatOpen && (
                <Message onClose={() => setChatOpen(false)} />
            )}

        </div>
    )
}

export default Mailbox
