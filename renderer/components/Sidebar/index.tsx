import SideHead from "./SideHead";
import SideList from "./SideList";

interface Props {}

const Sidebar: React.FC<Props> = () => {
    return (
        <>
            <aside className="flex-none w-2/5 bg-steam-600 text-gray-400">
                <SideHead />
                <SideList />
            </aside>
        </>
    );
};
export default Sidebar;
