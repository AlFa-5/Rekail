import { ContactRound, Settings, RefreshCw } from 'lucide-react'
import { useState } from 'react'

type Mail = {
    id: number
    sender: string
    email: string
    subject: string
    preview: string
    date: string
    unread: boolean
    starred: boolean
}

const initialMails: Mail[] = [
    {
        id: 1,
        sender: 'Administration',
        email: 'admin@ecole.mg',
        subject: 'Informations concernant les examens',
        preview: 'Nous vous informons que les examens du semestre...',
        date: '10:30',
        unread: true,
        starred: true
    },
    {
        id: 2,
        sender: 'Jean Rakoto',
        email: 'jean@ecole.mg',
        subject: 'Travail de groupe',
        preview: 'Bonjour, voici les informations concernant notre projet...',
        date: 'Hier',
        unread: true,
        starred: false
    },
    {
        id: 3,
        sender: 'Service informatique',
        email: 'informatique@ecole.mg',
        subject: 'Maintenance du réseau',
        preview: 'Une maintenance du réseau informatique est prévue...',
        date: 'Hier',
        unread: false,
        starred: false
    },
    {
        id: 4,
        sender: 'Marie',
        email: 'marie@ecole.mg',
        subject: 'Documents du cours',
        preview: 'Je vous envoie les documents du dernier cours...',
        date: '24 nov.',
        unread: false,
        starred: true
    }
]

function Inbox() {
    const [mails, setMails] = useState(initialMails)
    const [search, setSearch] = useState('')
    const [selectedIds, setSelectedIds] = useState<number[]>([])

    const filteredMails = mails.filter(mail =>
        `${mail.sender} ${mail.subject} ${mail.preview}`
            .toLowerCase()
            .includes(search.toLowerCase())
    )

    const toggleSelect = (id: number) => {
        setSelectedIds(previous =>
            previous.includes(id)
                ? previous.filter(item => item !== id)
                : [...previous, id]
        )
    }

    const toggleAll = () => {
        if (selectedIds.length === filteredMails.length) {
            setSelectedIds([])
        } else {
            setSelectedIds(filteredMails.map(mail => mail.id))
        }
    }

    const deleteSelected = () => {
        setMails(previous =>
            previous.filter(mail => !selectedIds.includes(mail.id))
        )
        setSelectedIds([])
    }

    const archiveSelected = () => {
        setMails(previous =>
            previous.filter(mail => !selectedIds.includes(mail.id))
        )
        setSelectedIds([])
    }

    const markUnread = () => {
        setMails(previous =>
            previous.map(mail =>
                selectedIds.includes(mail.id)
                    ? { ...mail, unread: true }
                    : mail
            )
        )
        setSelectedIds([])
    }

    const toggleStar = (id: number) => {
        setMails(previous =>
            previous.map(mail =>
                mail.id === id
                    ? { ...mail, starred: !mail.starred }
                    : mail
            )
        )
    }

    const refresh = () => {
        setMails([...initialMails])
        setSelectedIds([])
        setSearch('')
    }

    return (
        <div className="flex h-full min-h-0 flex-col bg-white">

            {/* EN-TÊTE */}
            <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">

                {/* TITRE */}
                <div>
                    <h2 className="text-lg font-semibold text-slate-800">
                        Boîte de réception
                    </h2>
                    <p className="mt-1 text-sm text-slate-400">
                        {mails.length} messages
                    </p>
                </div>
                {/*ACTUALISER*/}
                <div className="flex items-center gap-2">

                    <button
                        onClick={refresh}
                        title="Actualiser"
                        className="flex h-10 items-center gap-2 rounded-lg px-3 text-sm text-slate-500 transition hover:text-[#E45B52]"
                    >
                        <RefreshCw size={17} />
                    </button>

                </div>
            </div>

            {/* BARRE D'ACTIONS */}
            <div className="flex items-center gap-3 border-y border-slate-100 px-6 py-3">
                <input
                    type="checkbox"
                    checked={
                        filteredMails.length > 0 &&
                        selectedIds.length === filteredMails.length
                    }
                    onChange={toggleAll}
                    className="h-4 w-4 accent-[#E45B52]"
                    title="Tout sélectionner"
                />

                {selectedIds.length > 0 ? (
                    <>
                        <button
                            onClick={archiveSelected}
                            className="rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-slate-100"
                        >
                            Archiver
                        </button>

                        <button
                            onClick={markUnread}
                            className="rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-slate-100"
                        >
                            Non lu
                        </button>

                        <button
                            onClick={deleteSelected}
                            className="rounded-lg px-3 py-2 text-sm text-red-500 hover:bg-red-50"
                        >
                            Supprimer
                        </button>
                    </>
                ) : (
                    <span className="text-sm text-slate-400">
                        Sélectionnez un message pour afficher les actions
                    </span>
                )}
            </div>

            {/* LISTE DES MESSAGES */}
            <div className="flex-1 overflow-y-auto">

                {filteredMails.length === 0 ? (
                    <div className="flex h-full items-center justify-center text-sm text-slate-400">
                        Aucun message trouvé.
                    </div>
                ) : (
                    filteredMails.map(mail => (
                        <div
                            key={mail.id}
                            className={`flex items-center gap-4 border-b border-slate-100 px-6 py-4 transition hover:bg-slate-50 ${mail.unread ? 'bg-[#FFF9F8]' : 'bg-white'
                                }`}
                        >
                            <input
                                type="checkbox"
                                checked={selectedIds.includes(mail.id)}
                                onChange={() => toggleSelect(mail.id)}
                                className="h-4 w-4 accent-[#E45B52]"
                            />

                            <button
                                onClick={() => toggleStar(mail.id)}
                                className="text-lg text-amber-400"
                                title="Marquer comme important"
                            >
                                {mail.starred ? '★' : '☆'}
                            </button>

                            <div className="min-w-0 flex-1">
                                <div className="flex items-center justify-between gap-4">
                                    <p className={`truncate text-sm ${mail.unread
                                            ? 'font-bold text-slate-800'
                                            : 'font-medium text-slate-600'
                                        }`}>
                                        {mail.sender}
                                    </p>

                                    <span className="shrink-0 text-xs text-slate-400">
                                        {mail.date}
                                    </span>
                                </div>

                                <p className={`mt-1 truncate text-sm ${mail.unread
                                        ? 'font-semibold text-slate-700'
                                        : 'text-slate-600'
                                    }`}>
                                    {mail.subject}
                                </p>

                                <p className="mt-1 truncate text-sm text-slate-400">
                                    {mail.preview}
                                </p>
                            </div>

                            {mail.unread && (
                                <span className="h-2 w-2 shrink-0 rounded-full bg-[#E45B52]" />
                            )}
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default Inbox
