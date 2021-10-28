import { useRouter } from 'next/router'

const Projectid = () => {

    const router = useRouter();

    console.log(router.pathname);
    console.log(router.query.projectid);

    return (
        <div>
            The portfolio project page
        </div>
    );
}

export default Projectid;