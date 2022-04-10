import { useRouter } from "next/router";
import { Minus, Plus } from "phosphor-react";
import { useState } from "react";

interface GameItemProps {
    name: string;
    image?: string;
}

const GameItem: React.FC<GameItemProps> = ({ name, image }) => {
    return (
        <li className="flex gap-2 px-6 text-gray-400 cursor-pointer hover:bg-steam-blue-300">
            <div className={`image h-5 w-5 ${image ? "" : "bg-gray-100"}`}>{image && <img src={image} alt="" className="h-full w-full" />}</div>
            <span>{name}</span>
        </li>
    );
};

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
                    className={`flex items-center gap-1 cursor-pointer bg-gradient-to-r from-steam-blue-500 ${
                        selected ? "bg-steam-blue-300" : ""
                    } hover:text-gray-200`}
                    onClick={() => setOpened(!isOpen)}
                >
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
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
        <>
            <Catagory title="catagory">
                <ul>
                    <GameItem name="WOAH" />
                    <GameItem name="WOAH" />
                    <GameItem name="WOAH" />
                    <GameItem name="WOAH" />
                    <GameItem name="WOAH" />
                </ul>
            </Catagory>
            <Catagory title="catagory2">
                <ul>
                    <GameItem name="hey there kind sir" />
                    <GameItem name="hey there kind sir" />
                    <GameItem name="hey there kind sir" />
                    <GameItem name="hey there kind sir" />
                    <GameItem name="hey there kind sir" />
                </ul>
            </Catagory>
        </>
    );
};
export default SideList;
