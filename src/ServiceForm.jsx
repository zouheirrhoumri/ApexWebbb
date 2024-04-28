import Button from "./components/Button"
import axios from "axios"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"


export default function ServiceForm() {

    const navigate = useNavigate();

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const createService = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', title)
        formData.append('description', description)

        await axios.post('http://127.0.0.1:8000/api/services', formData)
            .then(({ data }) => {
                console.log(data.message)
                navigate('/services')
            }
            ).catch(({ response }) => {
                if (response.status = 442) {
                    console.log(response.data.message)
                } else {
                    console.log(response.data.message)
                }
            })

    }

    return (
        <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center py-20">
                <h1 className="text-4xl font-bold text-center">Get a Quote</h1>
                <p className="text-center text-lg mt-4">Fill out the form below to get a quote.</p>
                <form className="w-full max-w-lg mt-8" onSubmit={createService}>
                    <input value={title} onChange={(e) => setTitle(e.target.value)} 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" type="text" placeholder="Service Name" />

                    <textarea  value={description} onChange={(e) => setDescription(e.target.value)} 
                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" placeholder="Service Description"></textarea>

                    <Button className="bg-n-6 hover:bg-n-7 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Submit
                    </Button>
                </form>
            </div>
        </div>

    )
}