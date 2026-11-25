
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-indigo-100 via-slate-50 to-slate-100">

            <div className="w-full max-w-[380px] bg-white rounded-2xl shadow-xl p-5 sm:p-6">

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
                        Rekail
                    </h1>

                    <p className="text-sm text-slate-500 mt-1">
                        Connectez-vous à votre messagerie
                    </p>

                </header>

                {/* FORMULAIRE */}
                <form className="space-y-4">

                    {/* EMAIL */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block mb-1.5 text-sm font-semibold text-slate-700"
                        >
                            Adresse e-mail
                        </label>

                        <input
                            type="email"
                            id="email"
                            placeholder="exemple@frederick.mg"
                            className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm outline-none transition focus:border-indigo-600 focus:ring-4 focus:ring-indigo-100"
                            required
                        />
                    </div>

                    {/* MOT DE PASSE */}
                    <div>
                        <label
                            htmlFor="password"
                            className="block mb-1.5 text-sm font-semibold text-slate-700"
                        >
                            Mot de passe
                        </label>

                        <input
                            type="password"
                            id="password"
                            placeholder="Votre mot de passe"
                            className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm outline-none transition focus:border-indigo-600 focus:ring-4 focus:ring-indigo-100"
                            required
                        />
                    </div>

                    {/* BOUTON */}
                    <button
                        type="submit"
                        className="w-full py-2.5 px-4 bg-red-900 hover:bg-red-700 text-sm text-white font-semibold rounded-xl transition duration-200"
                    >
                        Se connecter
                    </button>

                </form>

                {/* MOT DE PASSE OUBLIÉ */}
                <div className="text-center mt-4">
                    <a
                        href="#"
                        className="text-sm text-indigo-600 hover:text-indigo-800 hover:underline"
                    >
                        Mot de passe oublié ?
                    </a>
                </div>

                {/* INSCRIPTION */}
                <div className="mt-4 pt-4 border-t border-slate-100 text-center">
                    <p className="text-sm text-slate-500">
                        Vous n'avez pas encore de compte ?
                    </p>

                    <Link
                        to="/inscription"
                        className="inline-block mt-1.5 text-sm font-semibold text-red-900 hover:text-red-700 hover:underline transition"
                    >
                        S'inscrire
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Login
