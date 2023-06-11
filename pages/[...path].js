import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import { useBrandQuery, useBrandsProductMutation, useProductAllQuery, useProductGetQuery } from "../app/features/api/ProductControl"
import Featured from "../components/Pages/Product/Featured"

export default function Content() {
    const [brand, setBrand] = useState()
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(0)

    const router = useRouter()
    const path = router.query.path
    const pathName = path?.join('/')
    const { data: allProducts } = useProductAllQuery();

    const filterInfo = {
        pathName: pathName,
        brand: brand,
        limit: limit,
        page: page
    }
    const { data } = useProductGetQuery(filterInfo)
    const { data: allBrands } = useBrandQuery();


    const currentUrl = router.asPath;
    const output = currentUrl.substring(1);


    const filteredProducts = allProducts?.filter(item1 => item1?.subCategory === output)





    return (
        <>
            <Head>
                <title>{output.toUpperCase()} Best price in kenya</title>
                <meta name="description" content="{output.toUpperCase()} Best price in kenya" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="bg-[#F1F1F1]">
                <main className="md:px-8 px-2 text-gray-800 max-w-screen-xl mx-auto min-h-screen ">
                    <header className="flex flex-wrap gap-2 justify-between items-center my-5 mb-1">
                        <div>
                            <h1 className="text-2xl font-medium leading-tight max-w-full">{output.toUpperCase()} </h1>

                        </div>
                        {/* <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                            <div>
                                <select className="block w-full max-w-sm pl-3 pr-10 py-2 transition duration-100 ease-in-out border rounded-md shadow-sm focus:ring-2 focus:ring-primary-100 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed text-base md:text-sm focus:border focus:border-primary-100 border-gray-300 placeholder-gray-400 focus:border-primary-100"
                                    onChange={(e) => setBrand(e.target.value)}
                                >

                                    {
                                        allBrands?.map(i =>
                                           
                                            <option value={i?.path}>{i?.title}</option>

                                           
                                        )
                                    }



                                </select>
                            </div>
                        </div> */}
                    </header>
                    <section>
                        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-2.5 bg-white border rounded-md py-5">
                            {
                                filteredProducts?.map(data => {
                                    return (
                                        <Featured key={data?._id} img={data?.img} title={data.name} quantity={data?.quantity} price={data?.price} model={data?.model} id={data?._id} />
                                    )
                                })
                            }
                        </ul>
                    </section>

                    {/* / */}





                    {/* <section className="space-y-1">
                        <header>
                            <h2 className="font-medium leading-tight text-base max-w-full">Price range</h2>
                            <p className="text-sm text-gray-700">All Smartphones by price range</p>
                        </header>
                        <ol className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-1.5 text-sm">
                            <li className="overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-200 ease-in-out space-y-2 flex flex-col bg-white border rounded-md">
                                <Link href="/phones/1563-10k?stock_status=1" className="" title="All Below KSh 10K Smartphones from Price in Kenya">
                                    <div className="flex flex-col p-4 space-y-1">
                                        <p>Below KSh 10K</p>
                                        <p className="text-gray-500">21 items</p>
                                    </div>
                                </Link>
                            </li>
                            <li className="overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-200 ease-in-out space-y-2 flex flex-col bg-white border rounded-md">
                                <Link href="/phones/1564-10k?stock_status=1" className="" title="All KSh 10K - 20K Smartphones from Price in Kenya">
                                    <div className="flex flex-col p-4 space-y-1">
                                        <p>KSh 10K - 20K</p>
                                        <p className="text-gray-500">83 items</p>
                                    </div>
                                </Link>
                            </li>
                            <li className="overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-200 ease-in-out space-y-2 flex flex-col bg-white border rounded-md">
                                <Link href="/phones/1565-20k?stock_status=1" className="" title="All KSh 20K - 30K Smartphones from Price in Kenya">
                                    <div className="flex flex-col p-4 space-y-1">
                                        <p>KSh 20K - 30K</p>
                                        <p className="text-gray-500">80 items</p>
                                    </div>
                                </Link>
                            </li>
                            <li className="overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-200 ease-in-out space-y-2 flex flex-col bg-white border rounded-md">
                                <Link href="/phones/1569-30k?stock_status=1" className="" title="All KSh 30K - 40K Smartphones from Price in Kenya">
                                    <div className="flex flex-col p-4 space-y-1">
                                        <p>KSh 30K - 40K</p>
                                        <p className="text-gray-500">32 items</p>
                                    </div>
                                </Link>
                            </li>
                            <li className="overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-200 ease-in-out space-y-2 flex flex-col bg-white border rounded-md">
                                <Link href="/phones/1570-40k?stock_status=1" className="" title="All KSh 40K - 50K Smartphones from Price in Kenya">
                                    <div className="flex flex-col p-4 space-y-1">
                                        <p>KSh 40K - 50K</p>
                                        <p className="text-gray-500">38 items</p>
                                    </div>
                                </Link>
                            </li>
                            <li className="overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-200 ease-in-out space-y-2 flex flex-col bg-white border rounded-md">
                                <Link href="/phones/1571-50k?stock_status=1" className="" title="All KSh 50K - 60K Smartphones from Price in Kenya">
                                    <div className="flex flex-col p-4 space-y-1">
                                        <p>KSh 50K - 60K</p>
                                        <p className="text-gray-500">26 items</p>
                                    </div>
                                </Link>
                            </li>
                            <li className="overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-200 ease-in-out space-y-2 flex flex-col bg-white border rounded-md">
                                <Link href="/phones/1572-60k?stock_status=1" className="" title="All KSh 60K - 70K Smartphones from Price in Kenya">
                                    <div className="flex flex-col p-4 space-y-1">
                                        <p>KSh 60K - 70K</p>
                                        <p className="text-gray-500">11 items</p>
                                    </div>
                                </Link>
                            </li>
                            <li className="overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-200 ease-in-out space-y-2 flex flex-col bg-white border rounded-md">
                                <Link href="/phones/1573-70k?stock_status=1" className="" title="All KSh 70K - 80K Smartphones from Price in Kenya">
                                    <div className="flex flex-col p-4 space-y-1">
                                        <p>KSh 70K - 80K</p>
                                        <p className="text-gray-500">15 items</p>
                                    </div>
                                </Link>
                            </li>
                            <li className="overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-200 ease-in-out space-y-2 flex flex-col bg-white border rounded-md">
                                <Link href="/phones/1574-80k?stock_status=1" className="" title="All KSh 80K - 90K Smartphones from Price in Kenya">
                                    <div className="flex flex-col p-4 space-y-1">
                                        <p>KSh 80K - 90K</p>
                                        <p className="text-gray-500">17 items</p>
                                    </div>
                                </Link>
                            </li>
                            <li className="overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-200 ease-in-out space-y-2 flex flex-col bg-white border rounded-md">
                                <Link href="/phones/1575-90k?stock_status=1" className="" title="All KSh 90K - 100K Smartphones from Price in Kenya">
                                    <div className="flex flex-col p-4 space-y-1">
                                        <p>KSh 90K - 100K</p>
                                        <p className="text-gray-500">14 items</p>
                                    </div>
                                </Link>
                            </li>
                            <li className="overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-200 ease-in-out space-y-2 flex flex-col bg-white border rounded-md">
                                <Link href="/phones/1576-100k?stock_status=1" className="" title="All KSh 100K - 200K Smartphones from Price in Kenya">
                                    <div className="flex flex-col p-4 space-y-1">
                                        <p>KSh 100K - 200K</p>
                                        <p className="text-gray-500">48 items</p>
                                    </div>
                                </Link>
                            </li>
                            <li className="overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-200 ease-in-out space-y-2 flex flex-col bg-white border rounded-md">
                                <Link href="/phones/1577-200k?stock_status=1" className="" title="All KSh 200K - 300K Smartphones from Price in Kenya">
                                    <div className="flex flex-col p-4 space-y-1">
                                        <p>KSh 200K - 300K</p>
                                        <p className="text-gray-500">3 items</p>
                                    </div>
                                </Link>
                            </li>
                        </ol>
                    </section> */}

                </main>
            </div>



        </>

    )
}
