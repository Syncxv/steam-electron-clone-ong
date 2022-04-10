import React from "react";
import Head from "next/head";
import NavBar from "./NavBar";

interface Props {
    title?: string;
}

const Layout: React.FC<Props> = ({ children, title = "STEAM CLONE" }) => (
    <>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <div className="flex flex-col w-screen h-screen">
            {global.window && <NavBar />}
            <main className="flex-1 bg-red-400">{children}</main>
            <footer className="flex-none bg-green-400">footer</footer>
        </div>
    </>
);

export default Layout;
