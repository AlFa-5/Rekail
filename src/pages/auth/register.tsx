
import { Link } from 'react-router-dom'

function Register() {
    return (
        <div className="min-h-screen flex items-center justify-center p-3 bg-gradient-to-br from-indigo-100 via-slate-50 to-slate-100">

            <div className="w-full max-w-[400px] bg-white rounded-2xl shadow-xl p-5 sm:p-6">

                {/* EN-TÊTE */}
                <header className="text-center mb-4">

                    <div className="flex items-center justify-center">
                        <img
                            src="/logo.png"
                            alt="Logo"
                            className="w-20 h-20 object-contain"
                        />
                    </div>

                    <h1 className="text-xl font-bold text-slate-800">
                        Créer un compte
                    </h1>

                    <p className="text-sm text-slate-500 mt-1">
                        Rejoignez votre messagerie Rekail
                    </p>

                </header>

                {/* FORMULAIRE */}
                <form className="space-y-3">

                    {/* NOM ET PRÉNOM */}
                    <div className="grid grid-cols-2 gap-3">

                        <div>
                            <label htmlFor="nom" className="block mb-1 text-sm font-semibold text-slate-700">
                                Nom
                            </label>

                            <input
                                type="text"
                                id="nom"
                                placeholder="Votre nom"
                                className="w-full px-3 py-2.5 border border-slate-300 rounded-xl text-sm outline-none transition focus:border-indigo-600 focus:ring-4 focus:ring-indigo-100"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="prenom" className="block mb-1 text-sm font-semibold text-slate-700">
                                Prénom
                            </label>

                            <input
                                type="text"
                                id="prenom"
                                placeholder="Votre prénom"
                                className="w-full px-3 py-2.5 border border-slate-300 rounded-xl text-sm outline-none transition focus:border-indigo-600 focus:ring-4 focus:ring-indigo-100"
                                required
                            />
                        </div>

                    </div>

                    {/* EMAIL */}
                    <div>
                        <label htmlFor="email" className="block mb-1 text-sm font-semibold text-slate-700">
                            Adresse e-mail
                        </label>

                        <input
                            type="email"
                            id="email"
                            placeholder="exemple@frederick.mg"
                            className="w-full px-3 py-2.5 border border-slate-300 rounded-xl text-sm outline-none transition focus:border-indigo-600 focus:ring-4 focus:ring-indigo-100"
                            required
                        />
                    </div>

                    {/* MOT DE PASSE */}
                    <div>
                        <label htmlFor="password" className="block mb-1 text-sm font-semibold text-slate-700">
                            Mot de passe
                        </label>

                        <input
                            type="password"
                            id="password"
                            placeholder="Créer un mot de passe"
                            className="w-full px-3 py-2.5 border border-slate-300 rounded-xl text-sm outline-none transition focus:border-indigo-600 focus:ring-4 focus:ring-indigo-100"
                            required
                        />
                    </div>

                    {/* CONFIRMATION */}
                    <div>
                        <label htmlFor="confirmPassword" className="block mb-1 text-sm font-semibold text-slate-700">
                            Confirmer le mot de passe
                        </label>

                        <input
                            type="password"
                            id="confirmPassword"
                            placeholder="Répéter le mot de passe"
                            className="w-full px-3 py-2.5 border border-slate-300 rounded-xl text-sm outline-none transition focus:border-indigo-600 focus:ring-4 focus:ring-indigo-100"
                            required
                        />
                    </div>

                    {/* BOUTON */}
                    <button
                        type="submit"
                        className="w-full py-2.5 px-4 bg-red-900 hover:bg-red-700 text-sm text-white font-semibold rounded-xl transition duration-200"
                    >
                        Créer mon compte
                    </button>

                </form>

                {/* LIEN CONNEXION */}
                <div className="mt-4 pt-4 border-t border-slate-100 text-center">

                    <p className="text-sm text-slate-500">
                        Vous avez déjà un compte ?
                    </p>

                    <Link
                        to="/login"
                        className="inline-block mt-1.5 text-sm font-semibold text-red-900 hover:text-red-700 hover:underline transition"
                    >
                        Se connecter
                    </Link>

                </div>

            </div>
        </div>
    )
}

export default Register
