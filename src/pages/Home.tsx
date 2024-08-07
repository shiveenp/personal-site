import HomePagePosts from "./HomePagePosts.tsx";

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center text-gray-600 body-font">
            <section className="pt-20">
                <p className="prose text-gray-500 body-font">
                    Hello, and welcome to my corner of the internet. I'm Shiveen, a software engineer, based in
                    Melbourne Australia.
                    I enjoy writing and sometimes taking photos.
                </p>
            </section>
            <section className="pt-20">
                <div>
                    <h1 className="font-semibold pb-2">Latest Posts</h1>
                </div>
                <div className="border-t border-gray-300 pb-4"></div>
                <HomePagePosts/>
            </section>
        </div>
    );
};

export default Home;
