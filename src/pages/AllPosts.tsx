import {Link} from 'react-router-dom';
import posts from '../../public/posts/metadata.json';

const AllPosts = () => {
    return (
        <div className="flex flex-col items-center justify-center body-font">
            <div className="pl-6 pt-10">
                <ul className="list-disc list-inside pt-30 dark:text-blue-400">
                    {posts.map((post) => (
                        <li className="p-1">
                            <Link to={`/post?path=${encodeURIComponent(post.path)}`}>
                        <span className="font-semibold hover:underline dark:text-slate-200">
                            {post.title}
                        </span>
                            </Link>
                            <span className="font-light text-sm pl-2">{post.date}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default AllPosts;
