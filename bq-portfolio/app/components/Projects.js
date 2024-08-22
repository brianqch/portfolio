import Image from "next/image";

export default function Projects() {
    return (
        <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <div class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"><h2 class="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Projects</h2></div>
            <div>
                <ul class="group/list">
                    <li className="mb-12">
                        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 bg-[#222222] lg:block lg:group-hover:bg-[#333333] lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg">

                            </div>
                            <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-200 sm:col-span-2">July 2022 - May 2023</header>
                            <div className="z-10 sm:col-span-6">
                                <h3 className="font-medium leading-snug text-slate-200">
                                    <div>
                                        <span className="inline-flex flex-col items-baseline font-medium leading-tight text-slate-200 hover:text-[#518ee0] focus-visible:text-[#518ee0] group/link text-base">
                                            <span>Front End Developer</span>
                                            <span>Ethical Apparel</span>
                                        </span>
                                        {/* <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span> */}
                                    </div>
                                </h3>
                                <p className="mt-2 text-sm leading-normal">
                                    • Implemented and optimized web pages for a multi-platform business serving 8000+ users, yielding a 168% increase
                                    in monthly user traffic, using JavaScript, HTML, and CSS.
                                    <br />
                                    • Led a 6-month team initiative to optimize front-end and back-end systems, achieving a 10% increase in online
                                    customer retention and SEO rankings, with a Content Management System (CMS).
                                    <br />
                                    • Designed high-fidelity prototypes of responsive pages from wireframes, reducing bounce rate by 3% by optimizing
                                    usability and functionality through iterative design and user feedback integration using Figma.
                                    <br />
                                    • Authored comprehensive technical documentation for web pages and e-commerce tools, improving operational
                                    efficiency and reducing troubleshooting time.
                                </p>
                                <ul className="mt-2 flex flex-wrap">
                                    <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-[#518ee0] px-3 py-1 text-xs font-medium leading-5 text-white">JavaScript</div></li>
                                    <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-[#518ee0] px-3 py-1 text-xs font-medium leading-5 text-white">HTML</div></li>
                                    <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-[#518ee0] px-3 py-1 text-xs font-medium leading-5 text-white">CSS</div></li>
                                    <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-[#518ee0] px-3 py-1 text-xs font-medium leading-5 text-white">Figma</div></li>
                                </ul>
                                <Image>
                                    
                                </Image>
                            </div>
                        </div>
                    </li>

                </ul>
            </div>
        </section>
    )
}