import { useRouter } from "next/dist/client/router";

const BlogPostPage = () => {

    const router = useRouter();

    console.log(router.query);

    return (
        <div>
            The Blog Posts
        </div>
    );
}

export default BlogPostPage;