import { FC, ReactNode } from "react";
import { FcLinux } from "react-icons/fc";

interface Props {
    children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="basis-16 bg-slate-50 border-b-2">
                <div className="container mx-auto flex justify-between items-center h-full">
                    <div className="flex items-center gap-4">
                        <FcLinux style={{ fontSize: "48px" }} />
                        <p className="text-lg font-bold text-slate-700 select-none">
                            Todo List
                        </p>
                    </div>
                    <button className="border border-teal-300 rounded-lg px-4 py-2 text-teal-400">
                        Login
                    </button>
                </div>
            </header>
            <main className="grow">
                <div className="container mx-auto py-8">{children}</div>
            </main>
            <footer className="basis-20 bg-blue-500">
                <div className="container mx-auto flex justify-center items-center h-full">
                    <p className="text-slate-100">
                        Copyright © 2023 Martin Lin
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
