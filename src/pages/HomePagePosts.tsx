import posts from "../../public/posts/metadata.json";
import {Link} from "react-router-dom";

const HomePagePosts = () => {
    return (
        <ul className="list-disc list-inside dark:text-blue-400">
            {posts.slice(0, 10).map((post, index) => (
                <li key={index} className="p-1">
                    <Link to={`/post?path=${encodeURIComponent(post.path)}`}>
                        <span className="font-semibold text-gray-800 hover:underline dark:text-slate-200">
                            {post.title}
                        </span>
                    </Link>
                    <span className="font-light text-sm pl-2">{post.date}</span>
                </li>
            ))}
        </ul>
    )
};

export default HomePagePosts;
