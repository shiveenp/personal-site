import posts from "../posts/metadata.json";
import {Link} from "react-router-dom";

const HomePagePosts = () => {
    return (
        <ul className="list-disc list-inside">
            {posts.slice(-5).map((post, index) => (
                <li key={index} className="p-1">
                    <Link to={`/post?path=${encodeURIComponent(post.path)}`}>
                        <span className="font-semibold text-gray-800 hover:underline">
                            {post.title}
                        </span>
                    </Link>
                </li>
            ))}
        </ul>
    )
};

export default HomePagePosts;
