import { useEffect } from "react";
import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { toast } from "react-toastify";
import { useCateGorQuery, useHomeUpdateMutation } from "../../../app/features/api/ProductControl";

export default function HomeUpdate({ data: passData, SetModelHandel, modelHandel}) {
    const [inputs, setInputs] = useState({});
    const { data: cateGories } = useCateGorQuery()
    const [HomeUpdate, { isSuccess }] = useHomeUpdateMutation()



    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (Object.keys(inputs).length >= 1) {
            const data = { ...inputs, id: passData?._id }
            await HomeUpdate(data)
        }

    }
    useEffect(() => {
        if (isSuccess) {
            toast('Success  Update')
        }
    }, [isSuccess])
    return (
        <section className="w-full h fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity 50">
            <main className='w-full flex justify-center items-center  '>
                <div className="relative w-[800px] flex flex-col py-3 min-w-0 break-words  bg-white  shadow-lg rounded-lg border-0">
                    <button onClick={() => SetModelHandel(!modelHandel)} className=" px-3 text-right text-2xl mt-12" ><AiOutlineCloseCircle size={20} /></button>
                    <div class="p-3  rounded shadow-md dark:bg-gray-700 ">

                        <form onSubmit={handleSubmit} class="" id="myForm">
                            <div class="flex flex-wrap mb-6">
                                <div class="w-full px-3 md:w-1/2 md:mb-0">
                                    <label htmlFor="Title"
                                        class="block mb-2 font-bold text-gray-700 uppercase dark:text-gray-400">
                                        Title
                                    </label>
                                    <input type="text" id='Title' placeholder="Home Pages Title"
                                        name="title"
                                        value={inputs.title || passData?.title}
                                        onChange={handleChange}
                                        class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-100 border rounded lg:mb-0 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 " />
                                </div>
                                <div class="w-full px-3 md:w-1/2 md:mb-0">
                                    <label htmlFor="distinction"
                                        class="block mb-2 font-bold text-gray-700 uppercase dark:text-gray-400">
                                        Distinction</label>
                                    <input type="text" className='lowercase' id='distinction' placeholder="distinction"
                                        name="distinction"
                                        value={inputs.distinction || passData?.distinction}
                                        onChange={handleChange}
                                        class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-100 border rounded dark:placeholder-gray-500 lg:mb-0 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 " />
                                </div>
                            </div>
                            <div class="flex flex-wrap mb-6">
                                <div class="w-full px-3 md:w-1/2 md:mb-0">
                                    <label htmlFor="number"
                                        class="block mb-2 font-bold text-gray-700 uppercase dark:text-gray-400">
                                        SHow Product Number
                                    </label>
                                    <input type="number" id='number' placeholder="Product Show number"
                                        name="number"
                                        value={inputs.number || passData?.number}
                                        onChange={handleChange}
                                        class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-100 border rounded lg:mb-0 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 " />
                                </div>
                                <div class="w-full px-3 md:w-1/2 md:mb-0">
                                    <label htmlFor="parentsCategoty"
                                        class="block mb-2 font-bold text-gray-700 uppercase dark:text-gray-400">
                                        Parents Category
                                    </label>
                                    <div>
                                        <select className="block w-full max-w-sm pl-3 pr-10 py-2 transition duration-100 ease-in-out border rounded-md shadow-sm focus:ring-2 focus:ring-primary-100 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed text-base md:text-sm focus:border focus:border-primary-100 border-gray-300 placeholder-gray-400 focus:border-primary-100"
                                            name="type"
                                            value={inputs.type || ""}
                                            onChange={handleChange}
                                        >
                                            <option value={passData?.type} selected className='uppercase'>{passData?.type}</option>
                                            {
                                                cateGories?.map(data => <option key={data?._id} value={data?.path} selected className='uppercase'>{data?.path}</option>)
                                            }

                                        </select>
                                    </div>



                                </div>
                            </div>

                            <div class="px-3">
                                <button
                                    class="px-4 py-2 font-medium text-gray-100 bg-blue-600 rounded shadow hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-700">
                                    Send
                                </button>
                            </div>
                        </form>





                    </div>
                </div>
            </main>
        </section>
    )
}

