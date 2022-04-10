import Layout from "./Layout";
import Sidebar from "./Sidebar";

interface Props {}

const LibraryLayout: React.FC<Props> = ({ children }) => {
    return (
        <Layout>
            <div className="flex h-full">
                <Sidebar />
                <div className="flex-1 bg-indigo-500">{children}</div>
            </div>
        </Layout>
    );
};
export default LibraryLayout;
