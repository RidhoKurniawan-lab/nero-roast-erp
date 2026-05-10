import React from "react";
import useFlashMessages from "@/Hook/useFlashMessage";

export default function GuestLayout({ children }) {

    useFlashMessages();

    return (
        <section className="min-h-screen bg-linear-to-br from-amber-900 via-stone-800 to-stone-900 flex items-center justify-center p-4 relative overflow-hidden">
            {/*Background Decorative Elements */}
            <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl overflow-hidden">

        {/*  Card Header dengan Aksen Kopi */}
        <div className="bg-amber-900 px-8 pt-8 pb-12 text-center relative">
            <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <i className="fas fa-mug-hot text-2xl text-amber-900"></i>
            </div>
            <h2 className="text-white text-xl font-bold tracking-wide">Selamat Datang</h2>
            <p className="text-amber-200/70 text-sm mt-1">Silakan login untuk melanjutkan</p>
        </div>

        {/*  Card Body */}
        <div className="px-8 py-6 -mt-4">
            {children}

            {/*  Register Link */}
            <p className="text-center text-stone-500 text-xs mt-5">
                Belum punya akun?
                <a href="#" className="text-amber-800 hover:text-amber-600 font-semibold transition-colors">Daftar</a>
            </p>
        </div>
    </div>
        </section>
    );
}
