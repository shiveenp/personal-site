const About = () => {
    return (
        <div className="prose prose-neutral container mx-auto px-4 pb-10 pt-10 dark:prose-invert">
            <h1 className="prose-xl">About Me</h1>
            <p>
                Hello, I'm Shiveen Pandita, currently a tech lead and senior engineer at Atlassian. I am passionate about building
                cutting-edge technology solutions and leading teams to success.
            </p>
            <p>
                With extensive experience in software development and a deep understanding of the technology landscape,
                I thrive on tackling complex challenges and driving teams to success. I'm most comfortable with leading
                teams tackle complex projects but also, have no problem with getting my hands dirty when needed.
                I also am passionate about mentoring and growing engineers with a strong focus on raising the bar on craft excellence.
            </p>
            <p>
                In my free time I like to spend time cooking, exploring new hiking trails and spending time with my family.
            </p>
            <p>
                You can find me on <a className="underline hover:text-blue-800" href={"https://www.linkedin.com/in/shiveenp/"}>LinkedIn</a>, <a className="underline hover:text-blue-800" href={"https://x.com/shiveen_p"}>Twitter/X</a>, <a className="underline hover:text-blue-800" href={"https://github.com/shiveenp"}>Github</a> or <a className="underline hover:text-blue-800" href={"mailto:blog@shiveenp.com"}>Email</a>.
            </p>
        </div>
    );
};

export default About;
