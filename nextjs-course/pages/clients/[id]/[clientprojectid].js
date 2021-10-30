import { useRouter } from "next/router";

const Clientprojectid = () => {

    const router = useRouter();

    console.log(router.query);

    return (
        <div>
            <h1>The project page for a specific project for a selected Client</h1>
            <h2>Project ID</h2>
            <h3>For Client ID</h3>
        </div>
    );
}

export default Clientprojectid;