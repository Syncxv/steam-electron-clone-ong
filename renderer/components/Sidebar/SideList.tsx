import { useRouter } from "next/router";
import { Minus, Plus } from "phosphor-react";
import { useState } from "react";

interface CatagoryProps {
    title: string;
}

const Catagory: React.FC<CatagoryProps> = ({ title, children }) => {
    const router = useRouter();
    const [isOpen, setOpened] = useState(true);
    const selected = router.pathname === `/library/catagory/${title}`;
    return (
        <>
            <div className="cat">
                <div
                    className={`flex items-center gap-2 cursor-pointer bg-gradient-to-r from-steam-blue-500 p-1 ${
                        selected ? "bg-steam-blue-300" : ""
                    }`}
                    onClick={() => setOpened(!isOpen)}
                >
                    {isOpen ? <Minus /> : <Plus />}
                    <span className="uppercase font-semibold">{title}</span>
                </div>
                {isOpen && <div className="content">{children}</div>}
            </div>
        </>
    );
};
interface Props {}

const SideList: React.FC<Props> = () => {
    return (
        <div>
            <Catagory title="catagory">
                <ul>
                    <li>hi</li>
                    <li>hi</li>
                    <li>hi</li>
                    <li>hi</li>
                    <li>hi</li>
                    <li>hi</li>
                    <li>hi</li>
                    <li>hi</li>
                    <li>hi</li>
                    <li>hi</li>
                    <li>hi</li>
                    <li>hi</li>
                </ul>
            </Catagory>
        </div>
    );
};
export default SideList;
