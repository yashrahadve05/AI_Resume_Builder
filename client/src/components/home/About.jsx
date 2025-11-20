import React from "react";

const About = () => {
    return (
        <>
            <section className="flex flex-col items-center px-6 md:px-16 lg:px-24 text-sm max-w-6xl mx-auto">
                <div className="flex items-center mr-auto gap-2 text-indigo-600 bg-indigo-50 rounded-full px-3 py-1 mx-auto mb-4">
                    <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.613 8.2a.62.62 0 0 1-.553-.341.59.59 0 0 1 .076-.637l6.048-6.118a.31.31 0 0 1 .375-.069c.061.033.11.084.137.147a.3.3 0 0 1 .014.197L6.537 4.991a.59.59 0 0 0 .07.552.61.61 0 0 0 .504.257h4.276a.62.62 0 0 1 .553.341.59.59 0 0 1-.076.637l-6.048 6.119a.31.31 0 0 1-.375.067.295.295 0 0 1-.15-.344l1.172-3.61a.59.59 0 0 0-.07-.553.61.61 0 0 0-.504-.257z" stroke="#1E4BAF" strokeMiterlimit="5.759"
                            strokeLinecap="round" />
                    </svg>
                    <span>Get Hired</span>
                </div>
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
            </section>
        </>
    );
};

export default About;
