// Hero.tsx
import React from "react";

const Hero: React.FC = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src="https://shipfa.st/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdemo.a9a3174c.png&w=1080&q=75"
                    className="max-w-[50%] rounded-lg shadow-2xl w-[1080] h-[1080]"
                />
                <div>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut
                        assumenda excepturi exercitationem quasi. In deleniti
                        eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
