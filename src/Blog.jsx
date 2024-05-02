import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, useParams } from 'react-router-dom';
import Header from "./components/Header";
import Footer from './components/Footer';


export default function Blog() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/blogs') // replace with your Laravel API endpoint if different
            .then(response => setPosts(response.data));
    }, []);

    return (
        <>
            <Header />
            <div className="bg-n-7 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
                <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
                    <div>
                        <h2 className="text-3xl tracking-tight font-extrabold text-white-900 sm:text-4xl">
                            Recent publications
                        </h2>
                        <p className="mt-3 text-xl text-gray-100 sm:mt-4">
                            Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.
                        </p>
                    </div>
                    <div className=" mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
                        {posts.map(post => (
                            <div className="bg-n-6 rounded-lg shadow px-5 py-6 sm:px-6">
                                <Link to={`/blog/` + post.id} className="block mt-4">
                                    <p className="text-xl font-semibold text-gray-100">
                                        {post.title}
                                    </p>
                                    <p className="mt-3 text-base text-gray-300">
                                        {post.content}
                                    </p>
                                </Link>
                                <div className="mt-6 flex items-center">
                                    <div className="ml-3">
                                        <p className="text-sm font-medium text-gray-900">
                                            <a href="#" className="inline-block">
                                                <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                                                    {post.user.name}
                                                </span>
                                            </a>
                                        </p>
                                        <div className="flex space-x-1 text-sm text-gray-500">
                                            <time datetime="2020-03-16">
                                                {post.created_at}
                                            </time>
                                            <span aria-hidden="true">
                                                ·
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />

        </>


    );
}