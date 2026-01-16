
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { getCookie } from '../utils/cookieUtils';
import { QrCode, Mail, Phone, User, Calendar, ShieldCheck, ArrowLeft, Download } from 'lucide-react';

interface LoyaltyCardState {
    name: string;
    email: string;
    phone?: string;
    interests?: string[];
    membershipId?: string;
    joinDate?: string;
}

const LoyaltyCardPage: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [memberData, setMemberData] = useState<LoyaltyCardState | null>(null);

    useEffect(() => {
        if (location.state) {
            setMemberData(location.state as LoyaltyCardState);
            return;
        }

        const cookieData = getCookie('adhel_member');
        if (cookieData) {
            try {
                setMemberData(JSON.parse(cookieData));
                return;
            } catch (e) {
                console.error('Failed to parse member cookie', e);
            }
        }

        navigate('/join');
    }, [location.state, navigate]);

    if (!memberData) return null;

    const { name, email, phone, membershipId, joinDate } = memberData;

    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-emerald-100 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">

            <div className="w-full max-w-md mb-8">
                <Link
                    to="/"
                    className="inline-flex items-center text-emerald-700 hover:text-emerald-900 transition-colors bg-white/80 px-4 py-2 rounded-full shadow-sm"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Retour à l'accueil
                </Link>
            </div>

            <div className="text-center mb-8 animate-slide-up">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Bienvenue au Club !</h1>
                <p className="text-gray-600">Voici votre carte de membre numérique ADHEL.</p>
            </div>

            <div id="printable-card" className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 transform transition-all hover:scale-[1.02] duration-300 relative group">

                <div className="h-32 bg-gradient-to-r from-emerald-600 to-teal-600 relative overflow-hidden">
                    <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white opacity-10 blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-teal-300 opacity-20 blur-3xl"></div>

                    <div className="absolute bottom-4 left-6 text-white">
                        <div className="flex items-center gap-2 text-emerald-100 text-sm font-medium mb-1">
                            <ShieldCheck className="w-4 h-4" />
                            Membre Officiel
                        </div>
                        <h2 className="text-2xl font-bold tracking-tight">ADHEL</h2>
                    </div>
                </div>

                <div className="p-8 pt-10 relative">
                    <div className="absolute -top-12 right-6 w-24 h-24 bg-white rounded-2xl p-1 shadow-lg transform rotate-3 transition-transform group-hover:rotate-0">
                        <div className="w-full h-full bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600">
                            <User className="w-10 h-10" />
                        </div>
                    </div>

                    <div className="space-y-6">

                        <div>
                            <label className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-1 block">Nom du membre</label>
                            <p className="text-xl font-bold text-gray-900 truncate">{name}</p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-1 block">ID Membre</label>
                                <p className="font-mono text-emerald-700 font-medium">{membershipId}</p>
                            </div>
                            <div>
                                <label className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-1 block">Membre Depuis</label>
                                <div className="flex items-center gap-1 text-gray-700">
                                    <Calendar className="w-3.5 h-3.5 text-gray-400" />
                                    <span className="font-medium text-sm">{joinDate}</span>
                                </div>
                            </div>
                        </div>

                        <div className="pt-4 border-t border-gray-100 space-y-3">
                            <div className="flex items-center gap-3 text-gray-600">
                                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
                                    <Mail className="w-4 h-4 text-emerald-600" />
                                </div>
                                <span className="text-sm truncate">{email}</span>
                            </div>

                            {phone && (
                                <div className="flex items-center gap-3 text-gray-600">
                                    <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
                                        <Phone className="w-4 h-4 text-emerald-600" />
                                    </div>
                                    <span className="text-sm">{phone}</span>
                                </div>
                            )}
                        </div>

                        <div className="mt-8 bg-gray-50 rounded-xl p-4 flex items-center justify-between group-hover:bg-emerald-50/50 transition-colors">
                            <div className="flex-1 pr-4">
                                <p className="text-sm font-semibold text-gray-900 mb-1">Pass Numérique</p>
                                <p className="text-xs text-gray-500 leading-relaxed">Scannez ce code lors des événements ADHEL pour accéder à vos avantages.</p>
                            </div>
                            <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-100">
                                <QrCode className="w-12 h-12 text-gray-900" />
                            </div>
                        </div>

                    </div>
                </div>

                <div className="bg-gray-50 px-8 py-4 border-t border-gray-100 flex justify-between items-center">
                    <span className="text-xs text-gray-400 font-medium">www.adhel-lavallee.fr</span>
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                </div>

            </div>

            <div className="mt-8 text-center space-y-4">
                <p className="text-sm text-gray-500 max-w-xs mx-auto">
                    Conservez cette carte précieusement. Une copie a été envoyée à votre adresse email.
                </p>
                <button
                    type='button'
                    onClick={() => window.print()}
                    className="text-emerald-600 hover:text-emerald-700 font-medium text-sm flex items-center justify-center gap-2 mx-auto hover:bg-emerald-50 px-4 py-2 rounded-lg transition-all"
                >
                    <Download className="w-4 h-4" />
                    Télécharger / Imprimer ma carte
                </button>
            </div>

        </div>
    );
};

export default LoyaltyCardPage;
