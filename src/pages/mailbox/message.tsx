
import { useState } from 'react'

type MessageProps = {
    onClose: () => void
}

function Message({ onClose }: MessageProps) {
    const [recipient, setRecipient] = useState('')
    const [subject, setSubject] = useState('')
    const [content, setContent] = useState('')

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        console.log({ recipient, subject, content })
        alert('Message prêt à être envoyé.')
    }

    return (
        <div className="fixed bottom-5 right-6 z-50 flex h-[580px] max-h-[80vh] w-[520px] max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xl">

            {/* EN-TÊTE */}
            <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
                <h2 className="text-base font-semibold text-slate-700">
                    Nouveau message
                </h2>

                <button
                    type="button"
                    onClick={onClose}
                    className="rounded-lg px-3 py-2 text-slate-400 hover:bg-slate-100"
                >
                    ✕
                </button>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-1 flex-col min-h-0">

                {/* DESTINATAIRE */}
                <div className="flex items-center gap-4 border-b border-slate-100 px-6 py-4">
                    <label className="w-12 text-sm text-slate-500">
                        À
                    </label>

                    <input
                        type="email"
                        required
                        value={recipient}
                        onChange={(e) => setRecipient(e.target.value)}
                        placeholder="Adresse e-mail du destinataire"
                        className="flex-1 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
                    />
                </div>

                {/* OBJET */}
                <div className="flex items-center gap-4 border-b border-slate-100 px-6 py-4">
                    <label className="w-12 text-sm text-slate-500">
                        Objet
                    </label>

                    <input
                        type="text"
                        required
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="Objet du message"
                        className="flex-1 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
                    />
                </div>

                {/* CONTENU */}
                <textarea
                    required
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Écrivez votre message..."
                    className="flex-1 min-h-[200px] resize-none bg-transparent px-6 py-5 text-sm leading-7 text-slate-700 outline-none placeholder:text-slate-400"
                />

                {/* PIED DE PAGE */}
                <div className="flex items-center justify-end border-t border-slate-100 px-6 py-4">
                    <button
                        type="submit"
                        className="flex items-center gap-2 rounded-lg bg-[#E45B52] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#D94B43]"
                    >
                        Envoyer
                        <span>➤</span>
                    </button>
                </div>

            </form>
        </div>
    )
}

export default Message
