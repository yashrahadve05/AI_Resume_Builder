import React from "react";

const FeatureSection = () => {
    const [isHover, setIsHover] = React.useState(false);

    return (
        <>
            <section className="flex flex-col items-center px-6 md:px-16 lg:px-24 text-sm max-w-6xl mx-auto">
                <div className="flex items-center mr-auto gap-2 text-indigo-600 bg-indigo-50 rounded-full px-3 py-1 mx-auto mb-4">
                    <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.613 8.2a.62.62 0 0 1-.553-.341.59.59 0 0 1 .076-.637l6.048-6.118a.31.31 0 0 1 .375-.069c.061.033.11.084.137.147a.3.3 0 0 1 .014.197L6.537 4.991a.59.59 0 0 0 .07.552.61.61 0 0 0 .504.257h4.276a.62.62 0 0 1 .553.341.59.59 0 0 1-.076.637l-6.048 6.119a.31.31 0 0 1-.375.067.295.295 0 0 1-.15-.344l1.172-3.61a.59.59 0 0 0-.07-.553.61.61 0 0 0-.504-.257z" stroke="#1E4BAF" strokeMiterlimit="5.759"
                            strokeLinecap="round" />
                    </svg>
                    <span>Simple Process</span>
                </div>
                <h1 className="text-3xl font-semibold text-center mx-auto">Build your resume</h1>
                <p className="text-sm text-slate-500 text-center mt-2 max-w-lg mx-auto">
                    Get hired 30% faster with our user-friendly resume builder app that is packed with features.
                </p>
                <div className="flex flex-col md:flex-row items-center justify-center xl:-mt-10">
                    <img className="max-w-2xl w-full xl:-ml-32" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/group-image-1.png" alt="" />
                    <div className="px-4 md:px-0" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
                        <div className={"flex items-center justify-center gap-6 max-w-md group cursor-pointer"}>
                            <div className={`p-6 group-hover:bg-violet-100 border border-transparent group-hover:border-violet-300  flex gap-4 rounded-xl transition-colors ${!isHover ? 'border-violet-300 bg-violet-100' : ''}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6 stroke-violet-600"><path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z" /><circle cx="16.5" cy="7.5" r=".5" fill="currentColor" /></svg>
                                <div className="space-y-2">
                                    <h3 className="text-base font-semibold text-slate-700">AI-Powered Suggestions</h3>
                                    <p className="text-sm text-slate-600 max-w-xs">Get real-time, intelligent suggestions that enhance your resume, refine your phrasing, and showcase your experience more professionally.</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center gap-6 max-w-md group cursor-pointer">
                            <div className="p-6 group-hover:bg-green-100 border border-transparent group-hover:border-green-300 flex gap-4 rounded-xl transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6 stroke-green-600"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" /></svg>
                                <div className="space-y-2">
                                    <h3 className="text-base font-semibold text-slate-700">ATS-Optimized Templates</h3>
                                    <p className="text-sm text-slate-600 max-w-xs">Utilize professionally designed, ATS-friendly templates that enhance visibility, pass automated screenings, and impress human recruiters.</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center gap-6 max-w-md group cursor-pointer">
                            <div className="p-6 group-hover:bg-orange-100 border border-transparent group-hover:border-orange-300 flex gap-4 rounded-xl transition-colors">
                                <svg className="size-6 stroke-orange-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 15V3" /><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><path d="m7 10 5 5 5-5" /></svg>
                                <div className="space-y-2">
                                    <h3 className="text-base font-semibold text-slate-700">Step-by-Step Guidance</h3>
                                    <p className="text-sm text-slate-600 max-w-xs">Follow clear, step-by-step instructions throughout the resume-building process, helping you craft a polished, professional resume with ease.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FeatureSection;
