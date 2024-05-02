import React, { useState, useEffect , useNavigate} from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, useParams } from 'react-router-dom';
import Header from "./components/Header";
import Footer from './components/Footer';



function BlogPost() {
    
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/blogs/${id}`)
            .then(response => {
                setPost(response.data);
                setComments(response.data.comments);
            });
    }, [id]);
    return (
        <>

            <Header />
            <div className="bg-n-7 my-36   rounded-lg shadow px-5 py-6 sm:px-6 max-w-2xl mx-auto">
                {post && (
                    <>
                        <h2 className="text-3xl font-extrabold tracking-tight text-gray-100 sm:text-4xl">{post.title}</h2>
                        <p className="mt-3 text-xl text-gray-500 sm:mt-4">{post.content}</p>
                        <div className="mt-6 flex items-center">
                            <div className="ml-3">
                                <p className="text-sm font-medium text-gray-900">
                                    <a href="#" className="inline-block">
                                        <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                                            {post.user.name}
                                        </span>
                                    </a>
                                </p>
                                <div className="flex mt-2 space-x-1 text-sm text-gray-500">
                                    <time datetime="2020-03-16">
                                        {post.created_at}
                                    </time>
                                    <span aria-hidden="true">
                                        ·
                                    </span>
                                </div>
                            </div>
                        </div>
                    </>
                )}
                {comments && comments.map(comment => (
                    
                    <div key={comment.id} className="mt-6 border-t border-gray-200 pt-6">
                        <p className="text-sm text-gray200">Comment by {comment.user.name}</p>
                        <p className="text-lg text-gray-500">{comment.content}</p>
                    </div>
                ))}
            </div>
            <Footer />
        </>
    );
}

export default BlogPost;