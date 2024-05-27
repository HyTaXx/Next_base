"use client";
import Header from "@/app/components/Header/header";
import Footer from "@/app/components/Footer/footer";
import Hero from "@/app/components/Hero/hero";

export default function Home() {
    return (
        <main className="relative w-full min-h-[100vh] flex flex-col justify-between">
            <Header />
            <div className="z-0">{/* <Hero></Hero> */}</div>
            <Footer />
        </main>
    );
}
