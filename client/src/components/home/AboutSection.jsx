import React from "react";

const AboutSection = () => {
    return (
        <>
            <h1 className="text-3xl font-semibold text-center mx-auto">Build Your Perfect Resume</h1>
            <p className="text-sm text-slate-500 text-center mt-2 max-w-lg mx-auto">
                Get hired 30% faster with our user-friendly resume builder app that is packed with features.
            </p>
            <div className="relative max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 px-8 md:px-0 pt-16 pb-10">
                <div className="size-[520px] -top-80 left-1/2 -translate-x-1/2 rounded-full absolute blur-[300px] -z-10 bg-[#FBFFE1]"></div>
                <div>
                    <div className="size-10 p-2 bg-indigo-50 border border-indigo-200 rounded">
                        <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/flashEmoji.png" alt="" />
                    </div>
                    <div className="mt-5 space-y-2">
                        <h3 className="text-base font-medium text-slate-600">Powerfull Resume Builder</h3>
                        <p className="text-sm text-slate-500">Utilize our effective creation tools and professional guidance to develop an exceptional resume for your forthcoming job application.</p>
                    </div>
                </div>
                <div>
                    <div className="size-10 p-2 bg-indigo-50 border border-indigo-200 rounded">
                        <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/colorsEmoji.png" alt="" />
                    </div>
                    <div className="mt-5 space-y-2">
                        <h3 className="text-base font-medium text-slate-600">Professional Tamplates</h3>
                        <p className="text-sm text-slate-500">Select from over 25 applicant tracking system (ATS)-compatible templates that are both modern and professional in design.</p>
                    </div>
                </div>
                <div>
                    <div className="size-10 p-2 bg-indigo-50 border border-indigo-200 rounded">
                        <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/puzzelEmoji.png" alt="" />
                    </div>
                    <div className="mt-5 space-y-2">
                        <h3 className="text-base font-medium text-slate-600">ATS Friendly Resume</h3>
                        <p className="text-sm text-slate-500">Optimize your resume with templates designed for Applicant Tracking Systems (ATS) while maintaining a professional and visually appealing for recruiters.</p>
                    </div>
                </div>
                <div>
                    <div className="size-10 p-2 bg-indigo-50 border border-indigo-200 rounded">
                        <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/bookEmoji.png" alt="" />
                    </div>
                    <div className="mt-5 space-y-2">
                        <h3 className="text-base font-medium text-slate-600">AI-Powered Suggestions</h3>
                        <p className="text-sm text-slate-500">Get personalized suggestions with AI that refine your resume, improve your wordings that make every section more effective.</p>
                    </div>
                </div>
                <div>
                    <div className="size-10 p-2 bg-indigo-50 border border-indigo-200 rounded">
                        <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/boxEmoji.png" alt="" />
                    </div>
                    <div className="mt-5 space-y-2">
                        <h3 className="text-base font-medium text-slate-600">Step by Step Guidance</h3>
                        <p className="text-sm text-slate-500">Unlock your potential with clear, step-by-step guidance to create a standout resume. Build it with confidence, knowing you're on the right path to success.</p>
                    </div>
                </div>
                <div>
                    <div className="size-10 p-2 bg-indigo-50 border border-indigo-200 rounded">
                        <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/brainEmoji.png" alt="" />
                    </div>
                    <div className="mt-5 space-y-2">
                        <h3 className="text-base font-medium text-slate-600">Experts Tips and Guidance</h3>
                        <p className="text-sm text-slate-500">Receive comprehensive assistance throughout each phase of the resume development process by utilizing expert guidance and suggested terminology.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutSection;
