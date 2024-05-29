"use client";
import Header from "@/app/components/Header/header";
import Footer from "@/app/components/Footer/footer";
import Hero from "@/app/components/Hero/hero";
import CodeMockup from "@/app/components/CodeMockup/codeMockup";
import PreviewMockup from "./components/PreviewMockup/previewMockup";

export default function Home() {
    return (
        <main className="relative w-full min-h-[100vh] flex flex-col justify-between overflow-hidden">
            <Header />
            <div>
                <section>
                    <div className="hero min-h-screen">
                        <div className="hero-content text-center z-[20] relative">
                            <div className="max-w-md">
                                <h1 className="text-5xl font-bold">
                                    Next BaseUI
                                </h1>
                                <p className="py-6">
                                    Providing you with one of the best and most
                                    complete UI kit you could need for any
                                    project.
                                    <br />
                                    Compatible with HTML, React, Nextjs and
                                    Angular
                                    <br />
                                    Powered by Tailwindcss
                                </p>
                                <button className="btn">Get Started</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute top-[200px] left-[-100px] rotate-[-12deg] 2xl:left-0">
                        <CodeMockup />
                    </div>
                    <div className="absolute top-[100px] right-[-100px] rotate-[5deg] 2xl:right-20 top-[150px]">
                        <PreviewMockup />
                    </div>
                </section>
            </div>
            <Footer />
        </main>
    );
}
