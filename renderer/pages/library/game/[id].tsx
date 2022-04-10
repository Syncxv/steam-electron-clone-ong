import { useRouter } from "next/router";
import LibraryLayout from "../../../components/LibraryLayout";
import store from "../../../utils/store";

interface Props {}

const GamePage: React.FC<Props> = () => {
    const router = useRouter();
    console.log(router.query);
    return <LibraryLayout>GamePage {router.query.id}</LibraryLayout>;
};
export default GamePage;
