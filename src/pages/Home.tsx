import HomePagePosts from "./HomePagePosts.tsx";

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center body-font">
            <section className="pt-20">
                <p className="prose body-font pl-8 dark:prose-invert">
                    Hello, and welcome to my corner of the internet. I'm Shiveen, a software engineer, based in
                    Melbourne Australia.
                    I enjoy writing and sometimes taking photos.
                </p>
            </section>
            <section className="pt-10">
                <div>
                    <h1 className="font-semibold pb-2 dark:text-slate-200">Latest Posts</h1>
                </div>
                <div className="border-t border-gray-300 pb-4 dark:border-blue-500"></div>
                <HomePagePosts/>
            </section>
        </div>
    );
};

export default Home;
