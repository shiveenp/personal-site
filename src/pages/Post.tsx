import {useState, useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {darcula} from 'react-syntax-highlighter/dist/esm/styles/prism'
import gfm from 'remark-gfm';

const Post = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const postPath = decodeURIComponent(searchParams.get('path') || '');
    const [content, setContent] = useState('');

    useEffect(() => {
        fetch(postPath)
            .then((response) => response.text())
            .then((text) => {
                setContent(text);
            });
    }, [postPath]);

    return (
        <div className="prose container mx-auto px-4 pb-10 pt-10 dark:prose-invert">
            <ReactMarkdown remarkPlugins={[gfm]} children={content}
                           components={{
                               code(props) {
                                   const {children, className, node, ...rest} = props
                                   const match = /language-(\w+)/.exec(className || '')
                                      return match ? (
                                       // @ts-expect-error Turning this off for now
                                       <SyntaxHighlighter
                                           {...rest}
                                           PreTag="div"
                                           children={String(children).replace(/\n$/, '')}
                                           language={match[1]}
                                           style={darcula}
                                           showLineNumbers={true}
                                       />
                                   ) : (
                                       <code {...rest} className={className}>
                                           {children}
                                       </code>
                                   )
                               }
                           }}/>
            <div className="border-t border-gray-300"></div>
        </div>
    );
};

export default Post;
