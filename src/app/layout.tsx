import type {Metadata} from "next";
import {Forum, EB_Garamond} from 'next/font/google'
import "./globals.css";


export const metadata: Metadata = {
    title: "Notářská kancelář JUDr. Kateřiny Šleglové, notářky v Plzni",
    description: "Zkušený pracovní kolektiv je připraven vám naslouchat, vyhodnotit vaše potřeby, požadavky a nabídnout vám jasná a srozumitelná řešení.",
};

const forum = Forum({
    weight: ["400"],
    subsets: ["latin"],
    variable: "--font-forum",
});

const garamond = EB_Garamond({
    subsets: ["latin"],
    variable: "--font-garamond",
});

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="cs">
        <body
            className={`${garamond.variable} ${forum.variable} font-sans`}
        >
        <div className="relative min-h-screen">


            <div
                className="fixed inset-0 bg-cover bg-center z-0 "
                style={{
                    backgroundImage: "url('/images/logo.webp')",
                    backgroundSize: "40%",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="absolute inset-0 bg-white bg-opacity-85"></div>
            </div>

            <div className="relative z-10">
                {children}
            </div>
        </div>
        </body>
        </html>
    );
}
