import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <header
                className="relative pt-4 flex flex-wrap justify-between items-end gap-x-8 gap-y-2 px-4 pb-2 border-b-4 border-primary">
                <div>
                    <p>
                        <a className="font-semibold" href="/">Shiveen Pandita</a>
                    </p>
                    <p className="text-sm">Tech Lead and Engineer at Atlassian</p>
                </div>
                <ul className="flex gap-x-3">
                    <li className="text-sm font-semibold text-gray-900">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="text-sm font-semibold text-gray-900">
                        <Link to="/posts">Posts</Link>
                    </li>
                    <li className="text-sm font-semibold text-gray-900">
                        <Link to="/links">Links</Link>
                    </li>
                    <li className="text-sm font-semibold text-gray-900">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="text-sm font-semibold text-gray-900">
                        <Link to="/projects">Projects</Link>
                    </li>
                </ul>
            </header>
        </div>
    );
};

export default Header;
