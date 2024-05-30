"use client";
import React from "react";
import Header from "@/app/components/Header/header";
import Footer from "@/app/components/Footer/footer";

const BasicPage: React.FC = () => {
    return (
        <main className="relative w-full min-h-[100vh] flex flex-col justify-between overflow-hidden">
            <Header />
            <div className="mt-[64px] px-8">
                <section>
                    <div className="min-h-screen">
                        <div className="text-sm breadcrumbs">
                            <ul>
                                <li>
                                    <a href="/">Next BaseUI</a>
                                </li>
                                <li>
                                    <a href="/docs">Docs</a>
                                </li>
                                <li>
                                    <a href="/docs/components">Components</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </main>
    );
};

export default BasicPage;
