"use client";
import Header from "@/app/components/Header/header";
import Footer from "@/app/components/Footer/footer";

export default function Home() {
    return (
        <main className="relative w-full min-h-[100vh] flex flex-col justify-between">
            <Header />
            <div></div>
            <Footer />
        </main>
    );
}
