// src/app/components/CodeMockup/codeMockup.tsx

import React, { useEffect, useState } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css"; // Ensure this path is correct

const CodeMockup: React.FC = () => {
    const [highlightedCode, setHighlightedCode] = useState("");

    useEffect(() => {
        // Hardcoded HTML code
        const codeString = `
        <div className="hero min-h-screen">
        <div className="hero-content text-center">
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
        `;

        // Highlight the code
        setHighlightedCode(
            Prism.highlight(codeString, Prism.languages.html, "html")
        );
    }, []);

    return (
        <div className="mockup-code w-max">
            <pre className="language-html w-max">
                <code
                    dangerouslySetInnerHTML={{ __html: highlightedCode }}
                    className="text-sm"
                />
            </pre>
        </div>
    );
};

export default CodeMockup;
