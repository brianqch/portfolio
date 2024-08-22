export default function Header() {
    return (
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
                <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">Brian Quach</h1>
                <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">Software & Front End Developer</h2>
                <p className="mt-4 max-w-xs leading-normal">I like to build things.</p>
                <nav className="nav hidden lg:block">
                    <ul className="mt-16 w-max list-none"></ul>
                    <li>
                        <a className="group flex items-center py-3" href="#about">ABOUT</a>
                    </li>
                    <li>
                        <a className="group flex items-center py-3" href="#experience">EXPERIENCE</a>
                    </li>
                    <li>
                        <a className="group flex items-center py-3" href="#projects">PROJECTS</a>
                    </li>
                </nav>
            </div>
        </header>
    )
}