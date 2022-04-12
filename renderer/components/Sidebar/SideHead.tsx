import Link from "next/link";
import { SquaresFour } from "phosphor-react";

interface Props {}

const SideHead: React.FC<Props> = () => {
    return (
        <div className="WHAT flex gap-2 p-2 bg-steam-700">
            <Link href="/library">
                <div className="flex items-center justify-start pl-4 bg-gradient-to-br from-steam-600/50 to-steam-500/50 cursor-pointer rounded-sm transition-all duration-200  flex-1 hover:text-gray-100 hover:bg-steam-500">
                    Home
                </div>
            </Link>
            <div className="flex items-center justify-center bg-gradient-to-br from-steam-600/50 to-steam-500/50 cursor-pointer rounded-sm transition-all duration-200 hover:text-gray-100 hover:bg-steam-500">
                <SquaresFour size={32} />
            </div>
        </div>
    );
};
export default SideHead;
