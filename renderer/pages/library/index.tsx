import Layout from "../../components/Layout";
import Sidebar from "../../components/Sidebar";

interface Props {}

const Library: React.FC<Props> = () => {
    return (
        <>
            <Layout>
                <div className="flex h-full">
                    <Sidebar />
                    <div className="flex-1 bg-indigo-500">content</div>
                </div>
            </Layout>
        </>
    );
};
export default Library;
