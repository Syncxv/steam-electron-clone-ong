import { FolderPlus } from "phosphor-react";

interface Props {}

const Footer: React.FC<Props> = () => {
    return (
        <footer className="flex-none flex items-center justify-between h-14 px-4 bg-steam-550 text-gray-200">
            <div className="add-game flex items-center justify-center gap-2 hover:text-gray-50">
                <FolderPlus />
                <span>Add Game</span>
            </div>
        </footer>
    );
};
export default Footer;
