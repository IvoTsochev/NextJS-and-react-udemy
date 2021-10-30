import { useRouter } from "next/router";



const Index = () => {


    const router = useRouter();

    console.log(router.query);

    function loadProjectHandler() {
        // load data

        router.push({
            pathname: '/clients/[id]/[clientprojectid]',
            query: { id: 'max', clientprojectid: 'projecta' }
        })
    }

    return (
        <div>
            <h1>The projects of a Given Client</h1>
            <h2>Client ID</h2>
            <button onClick={loadProjectHandler}>Load Project A</button>
        </div>
    );
}

export default Index;