import axios from "axios"
import Button from "./components/Button"
import React, { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"


export default function EditService() {

    const navigate = useNavigate();
    const { id } = useParams();

    const [name, setName] = useState('');
    const [description, setDescription] = useState('')

    useEffect(() => {
        fetchService();
    }, [])
    
    const fetchService = async () => {
        await axios.get(`http://127.0.0.1:8000/api/services/${id}`)
            .then(({ data }) => {
                const { name, description } = data.service;
                setName(name)
                setDescription(description)
            }
            ).catch(({ response }) => {
                console.log(response.data.message)
            })
    }
    const editService = async (e) => {
        e.preventDefault();
    
        const serviceData = {
            name: name,
            description: description
        };
    
        await axios.put(`http://127.0.0.1:8000/api/services/${id}`, serviceData)
            .then(({ data }) => {
                console.log(data.message)
                navigate('/services')
            }
            ).catch(({ response }) => {
                console.log(response.data.message)
            })
    }

    return (
        <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center py-20">
                <h1 className="text-4xl font-bold text-center">EDIT YOUR SERVICE</h1>
                <p className="text-center text-lg mt-4">Fill out the form below to edit the service.</p>
                <form className="w-full max-w-lg mt-8" onSubmit={editService}>
                    <input value={name} onChange={(e) => setName(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" type="text" placeholder="Service Name" />

                    <textarea value={description} onChange={(e) => setDescription(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" placeholder="Service Description"></textarea>

                    <Button className="bg-n-6 hover:bg-n-7 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Submit
                    </Button>
                </form>
            </div>
        </div>



    )
}
