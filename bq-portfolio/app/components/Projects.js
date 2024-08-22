import Image from "next/image";

export default function Projects() {
    return (
        <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-2">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"><h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Projects</h2></div>
            <div>
                <ul className="group/list">
                    <li className="mb-12">
                        <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 bg-[#222222] lg:block lg:group-hover:bg-[#333333] lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg">

                            </div>
                            {/* <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-200 sm:col-span-2">July 2022 - May 2023</header> */}
                            <Image

                                src="/cookbookai_image.png"
                                alt="Description of the image"
                                loading="lazy"
                                width={200}
                                height={48}
                                className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                            />
                            <div className="z-10 sm:order-2 sm:col-span-6">
                                <h3 className="font-medium leading-snug text-slate-200">
                                    <div>
                                        <span className="inline-flex flex-col items-baseline font-medium leading-tight  hover:text-[#518ee0] focus-visible:text-[#518ee0] group/link text-base">
                                            <span className="text-slate-200">Cookbook.AI</span>
                                        </span>
                                        {/* <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span> */}
                                    </div>
                                </h3>
                                <p className="mt-2 text-sm leading-normal text-slate-200">
                                    • Engineered a full stack web application that enables automatic recipe generation based on user input of ingredients
                                    and preferences, reducing average monthly food expenses by 15% using MongoDB, Express, React, Node.
                                    <br />
                                    • Integrated OpenAI’s API to generate personalized recipes based on inputs.
                                </p>
                                <ul className="mt-2 flex flex-wrap">
                                    <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-[#518ee0] px-3 py-1 text-xs font-medium leading-5 text-white">MongoDB</div></li>
                                    <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-[#518ee0] px-3 py-1 text-xs font-medium leading-5 text-white">Express.js</div></li>
                                    <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-[#518ee0] px-3 py-1 text-xs font-medium leading-5 text-white">React.js</div></li>
                                    <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-[#518ee0] px-3 py-1 text-xs font-medium leading-5 text-white">Node.js</div></li>
                                </ul>
                            </div>
                        </div>
                    </li>

                    <li className="mb-12">
                        <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 bg-[#222222] lg:block lg:group-hover:bg-[#333333] lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg">

                            </div>
                            {/* <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-200 sm:col-span-2">July 2022 - May 2023</header> */}
                            <Image

                                src="/seedling_image.png"
                                alt="Description of the image"
                                loading="lazy"
                                width={200}
                                height={48}
                                className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                            />
                            <div className="z-10 sm:order-2 sm:col-span-6">
                                <h3 className="font-medium leading-snug text-slate-200">
                                    <div>
                                        <span className="inline-flex flex-col items-baseline font-medium leading-tight  hover:text-[#518ee0] focus-visible:text-[#518ee0] group/link text-base">
                                            <span className="text-slate-200">Seedling: Personal Fitness Tracker</span>
                                        </span>
                                        {/* <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span> */}
                                    </div>
                                </h3>
                                <p className="mt-2 text-sm leading-normal text-slate-200">
                                    • Built a fitness planning and tracking iOS app combining top features from popular apps for personalized workouts,
                                    exercise logs, and diet tracking, using Swift and Firebase.
                                    <br />
                                    • Designed a system promoting long-term personal growth, ensuring sustained engagement and progress tracking.
                                </p>
                                <ul className="mt-2 flex flex-wrap">
                                    <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-[#518ee0] px-3 py-1 text-xs font-medium leading-5 text-white">Swift</div></li>
                                    <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-[#518ee0] px-3 py-1 text-xs font-medium leading-5 text-white">Firebase</div></li>
                                </ul>
                            </div>
                        </div>
                    </li>

                    <li className="mb-12">
                        <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 bg-[#222222] lg:block lg:group-hover:bg-[#333333] lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg">

                            </div>
                            {/* <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-200 sm:col-span-2">July 2022 - May 2023</header> */}
                            <Image

                                src="/clothsimulator_image.png"
                                alt="Description of the image"
                                loading="lazy"
                                width={200}
                                height={48}
                                className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                            />
                            <div className="z-10 sm:order-2 sm:col-span-6">
                                <h3 className="font-medium leading-snug text-slate-200">
                                    <div>
                                        <span className="inline-flex flex-col items-baseline font-medium leading-tight  hover:text-[#518ee0] focus-visible:text-[#518ee0] group/link text-base">
                                            <span className="text-slate-200">Cloth Simulator</span>
                                        </span>
                                        {/* <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span> */}
                                    </div>
                                </h3>
                                <p className="mt-2 text-sm leading-normal text-slate-200">
                                    • Developed a real-time 3D cloth simulation in C++ using a mass-spring model, applying various physical constraints
                                    and numerical integration techniques to accurately model cloth dynamics over time.
                                    <br/>
                                    • Incorporated different shader programs, including Blinn-Phong, texture mapping, bump and displacement mapping,
                                    and environment-mapped reflections, using GLSL to run ray-tracing computations on the GPU.
                                </p>
                                <ul className="mt-2 flex flex-wrap">
                                    <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-[#518ee0] px-3 py-1 text-xs font-medium leading-5 text-white">C++</div></li>
                                </ul>
                            </div>
                        </div>
                    </li>

                </ul>
            </div>
        </section>
    )
}