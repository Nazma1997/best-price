import { AiOutlineDown, AiOutlineSearch } from "react-icons/ai";
import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import { useBrandQuery, useProductAllQuery, useProductIDQuery, useSearchProductQuery } from "../../app/features/api/ProductControl"
import { useEffect, useState } from "react"
import { useMemo } from "react";



export default function Product() {
    const router = useRouter()
    const model = router.query.id
    // console.log('model', model)
    // const { data } = useProductIDQuery(model)
    const { data: allProducts } = useProductAllQuery();
    const { data: brands } = useBrandQuery()



    const singleProduct = allProducts?.filter(item => item?.model === model)[0]
    const brand = brands?.filter(item => item?.path === singleProduct?.brand)[0]



    // console.log(singleProduct?.brand)

    const [string, setString] = useState(
        `${singleProduct?.description}`
    );

    useEffect(() => {
        const regex = /(<([^>]+)>)/gi;
        const maxLength = 160; //

        const newString = string?.replace(regex, "").substring(0, maxLength);
        setString(newString);
    }, []);

    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>




            <Head>
                <title>{singleProduct?.name}</title>
                <meta name="description" content={string} />

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="bg-[#f1f1f1]">
                <section className="md:px-8 px-2 text-gray-800 max-w-screen-xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-9 gap-6 bg-white border rounded-md p-3 py-8 mt-3">
                        <div className="lg:col-span-3 lg:row-span-2 h-full space-y-3.5 pb-2 flex flex-col items-center overflow-hidden">
                            <div>
                                <div className="flex flex-col items-center space-y-5">
                                    <div className="flex items-center justify-center overflow-hidden">
                                        {/* <picture placeholder="" className="cursor-pointer hover:opacity-80"> */}
                                        <img src={singleProduct?.img} sizes="(max-width: 640px) 100vw, 300px" width="300" height="300" alt="Tecno Spark 10 Pro 8GB/256GB" />
                                        {/* </picture> */}
                                    </div>

                                </div>
                            </div>
                            <p className="text-gray-600"><span className="text-xs">20</span> sales</p>
                        </div>
                        <div className="lg:col-span-4 h-full space-y-3 overflow-hidden">
                            <header className="max-w-md">
                                <h1 className="text-xl font-semibold m leading-tight  max-w-full">{singleProduct?.name}</h1>
                                <div className="flex">
                                    <img src={brand?.img} alt='the brand' className="my-2 h-10" />
                                </div>
                                <div className="space-y-2 mt-4 hera2">
                                    <div dangerouslySetInnerHTML={{ __html: singleProduct?.shortDescription }}></div>
                                </div>
                            </header>

                        </div>
                        <div className="lg:col-span-2 h-full space-y-5 overflow-hidden">
                            <div className="space-y-2">
                                <div className="flex flex-wrap gap-3 gap-y-0 items-baseline">
                                    <p className="text-2xl font-bold leading-tight  max-w-full text-[#080]">KSh {singleProduct?.price}</p>
                                    <p className="text-xs uppercase">In Stock</p>
                                </div>
                                <div className="p-0.5">
                                    <div>
                                        <Link href={`${singleProduct?.byuLink}`} className="px-7 text-center block max-w-sm  py-3 rounded-md text-white font-medium  bg-[#124d9d] hover:shadow-md active:shadow-md focus:border-primary-100 focus:ring-offset-0 focus:ring-2 focus:ring-primary-100 focus:outline-none" target="_blank">
                                            BUY
                                        </Link></div>
                                    <p className="text-xs mt-5"><strong>Kindly note </strong> that though we strive to keep all products up to date, price and availability are subject to change without prior notice.</p>
                                </div>
                            </div>
                            <aside className="space-y-5">
                                <hr />
                                <ul>
                                    <li className="py-0.5 flex items-center gap-1.5">
                                        <span className="inline-block">•</span>
                                        <p className="inline-block">Quick shipping across Kenya</p>
                                    </li>
                                    <li className="py-0.5 flex items-center gap-1.5">
                                        <span className="inline-block">•</span>
                                        <p className="inline-block">In-store pickup in Nairobi</p>
                                    </li>
                                    <li className="py-0.5 flex items-center gap-1.5">
                                        <span className="inline-block">•</span>
                                        <p className="inline-block">Payment on delivery accepted</p>
                                    </li>
                                    <li className="py-0.5 flex items-center gap-1.5">
                                        <span className="inline-block">•</span>
                                        <p className="inline-block">Top-notch products and services</p>
                                    </li>
                                </ul>
                                <hr />
                                <div className="flex space-x-5 items-center">
                                    <img alt="home page" height="20" src="img/map-pin.svg" width="20" className="text-transparent" />
                                    <address>
                                        <a href="https://g.page/r/CYlWdPoEKvZDEAE" rel="external nofollow noopener noreferrer" target="_blank" title="Find us on Google Maps!" className="hover:underline">
                                            Bihi Towers, Ground Floor, Suite G8, Moi Avenue, Nairobi CBD.
                                        </a>
                                        <br />
                                        <a href="tel:+254718794014" title="Call us" className="hover:underline not-italic">0718 794 014</a>
                                        <br />
                                        <a href="tel:+254711102363" title="Call us" className="hover:underline not-italic">0711 102 363</a>
                                        <br />
                                    </address>
                                </div>
                             
                            </aside>
                        </div>
                        <div className="lg:col-span-4 lg:col-start-4 h-full space-y-2 overflow-hidden">
                            

                        </div>
                        <aside className="lg:col-span-2 h-full space-y-2 overflow-hidden">
                            <p className="font-medium leading-tight text-base max-w-full">How to pay</p>
                            <p>
                                M-PESA Paybill <br />
                                Business no. 247247 <br />
                                Account no. 794794
                            </p>
                        </aside>
                    </div>
                </section>
                <section className="md:px-8 px-2 text-gray-800 max-w-screen-xl mx-auto my-4">
                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-2.5 bg-white border rounded-md py-5">
                        {
                            allProducts?.filter(item => item?.price === singleProduct?.price)?.slice(0, 4)?.map(data => <li className="relative rounded-md overflow-hidden cursor-pointer hover:shadow-lg hover:border-gray-300 transition-all duration-200 ease-in-out bg-white py-3.5">
                                <a href="#" className="flex flex-col h-full space-y-3.5" title="Xiaomi 13 Ultra 12GB/256GB from Price in Kenya">
                                    <div className="flex justify-center items-center overflow-x-auto p-4">
                                        <picture placeholder="" className="cursor-pointer hover:opacity-80">
                                            <img src={data?.img} sizes="(max-width: 640px) 50vw, 145px" width="145" height="145" alt="Xiaomi 13 Ultra 12GB/256GB" loading="lazy" />
                                        </picture>
                                    </div>
                                    <div className="px-3.5 flex-auto flex flex-col justify-end">
                                        <div className="flex flex-wrap gap-1.5 gap-x-4">
                                            <p className="py-0.5 text-xs font-medium rounded-sm text-[#080]">Sale!</p>
                                        </div>
                                        <p className="text-sm font-medium text-gray-600 mt-1.5">{data?.name}</p>
                                        <p className="text-sm font-normal">KES {data?.price}</p>
                                    </div>
                                </a>
                                <button className="absolute top-0 right-2 flex items-center justify-center gap-x-1 text-xs p-2 group rounded-full bg-gray-100 hover:bg-primary-50 text-gray-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-gray-500 w-4 h-4">
                                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                    </svg>
                                    <span className="font-medium text-gray-500">3</span>
                                </button>
                            </li>)
                        }


                    </ul>
                </section>
                <section className="md:px-8 px-2 text-gray-800 max-w-screen-xl mx-auto my-4">
                    <div>
                        <p className=" font-medium leading-tight text-base max-w-full">Specifications</p>
                        <h2 className="text-gray-700 mb-3">Tecno Spark 10 Pro full specifications, cost and availability in Kenya</h2>
                    </div>
                    


                    <div className="bg-white p-2 border rounded-md hera2 text-left">
                        <div className={`h-96 overflow-hidden pl-3 ${isOpen ? 'h-auto' : ''}`}>
                        <div className="font-bold leading-tight text-base max-w-full" dangerouslySetInnerHTML={{ __html: singleProduct?.description }}></div>
                        </div>
                        <div
                            className="py-3 px-2 text-[#ab4725] cursor-pointer font-bold uppercase"
                            onClick={toggleOpen}
                        >
                            <span>{isOpen ? 'Show Less specs' : 'Show More specs'}</span>
                        </div>
                    </div>
                </section>

               
            </div>


        </>
    )
}
