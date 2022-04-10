import { useRouter } from "next/router";
import { ArrowLeft, ArrowRight } from "phosphor-react";

interface NavLinkProps {
    selected: boolean;
    onClick: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ children, selected, onClick }) => {
    return (
        <a
            onClick={(e) => {
                e.preventDefault();
                onClick();
            }}
            className={`cursor-pointer select-none ${selected ? "text-gray-100" : ""} hover:text-gray-200`}
        >
            {children}
        </a>
    );
};

interface Props {}

const NavBar: React.FC<Props> = () => {
    const router = useRouter();
    return (
        <>
            <nav className="flex-none flex items-center gap-5 px-3 bg-steam-700 h-16 text-gray-400 text-2xl">
                <NavLink selected={true} onClick={() => history.back()}>
                    <ArrowLeft />
                </NavLink>
                <NavLink selected={history.length > 1} onClick={() => history.forward()}>
                    <ArrowRight />
                </NavLink>
                <NavLink selected={router.pathname.startsWith("/library")} onClick={() => router.push("/library")}>
                    Library
                </NavLink>
            </nav>
        </>
    );
};
export default NavBar;
