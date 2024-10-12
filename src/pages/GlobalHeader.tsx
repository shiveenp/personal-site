import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="flex flex-wrap items-center justify-center">
            <header
                className="relative pt-4 flex flex-wrap items-end gap-x-64 gap-y-2 px-4 pb-2 border-b-2 border-primary dark:border-blue-500">
                <div>
                    <p>
                        <a className="font-semibold dark:text-slate-200" href="/">Shiveen Pandita</a>
                    </p>
                    <p className="text-sm dark:text-slate-200">Tech Lead and Engineer at Atlassian</p>
                </div>
                <ul className="flex gap-x-3">
                    <li className="text-sm font-semibold text-gray-900 dark:text-slate-200">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="text-sm font-semibold text-gray-900 dark:text-slate-200">
                        <Link to="/posts">Posts</Link>
                    </li>
                    <li className="text-sm font-semibold text-gray-900 dark:text-slate-200">
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </header>
        </div>
    );
};

export default Header;
