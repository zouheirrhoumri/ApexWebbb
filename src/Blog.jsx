import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, useParams } from 'react-router-dom';
import Header from "./components/Header";

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
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {post && (
                <>
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">{post.title}</h2>
                    <p className="mt-3 text-xl text-gray-500 sm:mt-4">{post.content}</p>
                </>
            )}
            {comments && comments.map(comment => (
                <div key={comment.id} className="mt-6 border-t border-gray-200 pt-6">
                    <p className="text-lg text-gray-500">{comment.content}</p>
                </div>
            ))}
        </div>
    );
}

export default function Blog() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/blogs') // replace with your Laravel API endpoint if different
            .then(response => setPosts(response.data));
    }, []);

    return (
        <Router>
            <Header />
            <Route path="/blogs" exact>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    {posts.map(post => (
                        <Link to={`/blogs/${post.id}`} key={post.id} className="block mb-4">
                            <article>
                                <header className="mb-2">
                                    <h2 className="text-2xl font-bold">{post.title}</h2>
                                </header>
                            </article>
                        </Link>
                    ))}
                </div>
            </Route>
            <Route path="/blogs/:id" component={BlogPost} />
        </Router>
    );
}