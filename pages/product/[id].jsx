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
                <title>{singleProduct?.title}</title>
                <meta name="description" content={string} />

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div class="bg-[#f1f1f1]">
                <section class="md:px-8 px-2 text-gray-800 max-w-screen-xl mx-auto">
                    <div class="grid md:grid-cols-2 lg:grid-cols-9 gap-6 bg-white border rounded-md p-3 py-8 mt-3">
                        <div class="lg:col-span-3 lg:row-span-2 h-full space-y-3.5 pb-2 flex flex-col items-center overflow-hidden">
                            <div>
                                <div class="flex flex-col items-center space-y-5">
                                    <div class="flex items-center justify-center overflow-hidden">
                                        {/* <picture placeholder="" class="cursor-pointer hover:opacity-80"> */}
                                        <img src={singleProduct?.img} sizes="(max-width: 640px) 100vw, 300px" width="300" height="300" alt="Tecno Spark 10 Pro 8GB/256GB" />
                                        {/* </picture> */}
                                    </div>

                                </div>
                            </div>
                            <p class="text-gray-600"><span class="text-xs">20</span> sales</p>
                        </div>
                        <div class="lg:col-span-4 h-full space-y-3 overflow-hidden">
                            <header class="max-w-md">
                                <h1 class="text-xl font-semibold m leading-tight  max-w-full">{singleProduct?.name}</h1>
                                <div className="flex">
                                    <img src={brand?.img} alt='the brand' className="my-5 mx-5 max-w-[110px] " />
                                    <p className=" h-12 bg-slate-300 mt-5 " style={{ marginLeft: '15px', marginRight: '15px', width: '2px' }}></p>
                                    <p className="my-5 font-bold text-gray-300 text-sm	 ">Condition <br /> <span style={{ color: '#059669' }} className="text-sm	">New</span></p>
                                </div>
                                <div class="space-y-2 mt-4">
                                    <div dangerouslySetInnerHTML={{ __html: singleProduct?.shortDescription }}></div>
                                </div>
                            </header>

                        </div>
                        <div class="lg:col-span-2 h-full space-y-5 overflow-hidden">
                            <div class="space-y-2">
                                <div class="flex flex-wrap gap-3 gap-y-0 items-baseline">
                                    <p class="text-2xl font-bold leading-tight  max-w-full text-[#080]">KSh {singleProduct?.price}</p>
                                    <p class="text-xs uppercase">In Stock</p>
                                </div>
                                <div class="p-0.5">
                                    <div>
                                        <Link href={`${singleProduct?.byuLink}`} class="px-7 text-center block max-w-sm  py-3 rounded-md text-white font-medium  bg-[#124d9d] hover:shadow-md active:shadow-md focus:border-primary-100 focus:ring-offset-0 focus:ring-2 focus:ring-primary-100 focus:outline-none" target="_blank">
                                            BUY
                                        </Link></div>
                                    <p class="text-xs mt-5"><strong>Kindly note </strong> that though we strive to keep all products up to date, price and availability are subject to change without prior notice.</p>
                                </div>
                            </div>
                            <aside class="space-y-5">
                                <hr />
                                <ul>
                                    <li class="py-0.5 flex items-center gap-1.5">
                                        <span class="inline-block">•</span>
                                        <p class="inline-block">Quick shipping across Kenya</p>
                                    </li>
                                    <li class="py-0.5 flex items-center gap-1.5">
                                        <span class="inline-block">•</span>
                                        <p class="inline-block">In-store pickup in Nairobi</p>
                                    </li>
                                    <li class="py-0.5 flex items-center gap-1.5">
                                        <span class="inline-block">•</span>
                                        <p class="inline-block">Payment on delivery accepted</p>
                                    </li>
                                    <li class="py-0.5 flex items-center gap-1.5">
                                        <span class="inline-block">•</span>
                                        <p class="inline-block">Top-notch products and services</p>
                                    </li>
                                </ul>
                                <hr />
                                <div class="flex space-x-5 items-center">
                                    <img alt="home page" height="20" src="img/map-pin.svg" width="20" class="text-transparent" />
                                    <address>
                                        <a href="https://g.page/r/CYlWdPoEKvZDEAE" rel="external nofollow noopener noreferrer" target="_blank" title="Find us on Google Maps!" class="hover:underline">
                                            Bihi Towers, Ground Floor, Suite G8, Moi Avenue, Nairobi CBD.
                                        </a>
                                        <br />
                                        <a href="tel:+254718794014" title="Call us" class="hover:underline not-italic">0718 794 014</a>
                                        <br />
                                        <a href="tel:+254711102363" title="Call us" class="hover:underline not-italic">0711 102 363</a>
                                        <br />
                                    </address>
                                </div>
                                {/* <div class="flex flex-wrap gap-2">
                            <a href="https://apps.apple.com/ke/app/price-in-kenya/id1581082296" title="Apple App Store" rel="external nofollow noopener noreferrer" target="_blank">
                                <picture placeholder="" class="cursor-pointer hover:opacity-80">
                                    <img src="img/app-store.png" sizes="(max-width: 640px) 33vw, 105px" width="105" height="30" alt="Apple App Store" loading="lazy"/>
                                </picture>
                            </a>
                            <a href="https://play.google.com/store/apps/details?id=com.price_in_kenya" title="Google Play Store" rel="external nofollow noopener noreferrer" target="_blank">
                                <picture placeholder="" class="cursor-pointer hover:opacity-80">
                                    <img src="img/google-play.png" sizes="(max-width: 640px) 33vw, 105px" width="105" height="30" alt="Google Play Store" loading="lazy"/>
                                </picture>
                            </a>
                        </div> */}
                            </aside>
                        </div>
                        <div class="lg:col-span-4 lg:col-start-4 h-full space-y-2 overflow-hidden">
                            {/* <h2 class="font-bold leading-tight text-base max-w-full">Tecno Spark 10 Pro key features</h2>
                    <div  class="font-bold leading-tight text-base max-w-full" dangerouslySetInnerHTML={{__html: singleProduct?.shortDescription}}></div> */}

                        </div>
                        <aside class="lg:col-span-2 h-full space-y-2 overflow-hidden">
                            <p class="font-medium leading-tight text-base max-w-full">How to pay</p>
                            <p>
                                M-PESA Paybill <br />
                                Business no. 247247 <br />
                                Account no. 794794
                            </p>
                        </aside>
                    </div>
                </section>
                <section class="md:px-8 px-2 text-gray-800 max-w-screen-xl mx-auto my-4">
                    <ul class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-2.5 bg-white border rounded-md py-5">
                        {
                            allProducts?.filter(item => item?.price === singleProduct?.price)?.slice(0, 4)?.map(data => <li class="relative rounded-md overflow-hidden cursor-pointer hover:shadow-lg hover:border-gray-300 transition-all duration-200 ease-in-out bg-white py-3.5">
                                <a href="#" class="flex flex-col h-full space-y-3.5" title="Xiaomi 13 Ultra 12GB/256GB from Price in Kenya">
                                    <div class="flex justify-center items-center overflow-x-auto p-4">
                                        <picture placeholder="" class="cursor-pointer hover:opacity-80">
                                            <img src={data?.img} sizes="(max-width: 640px) 50vw, 145px" width="145" height="145" alt="Xiaomi 13 Ultra 12GB/256GB" loading="lazy" />
                                        </picture>
                                    </div>
                                    <div class="px-3.5 flex-auto flex flex-col justify-end">
                                        <div class="flex flex-wrap gap-1.5 gap-x-4">
                                            <p class="py-0.5 text-xs font-medium rounded-sm text-[#080]">Sale!</p>
                                        </div>
                                        <p class="text-sm font-medium text-gray-600 mt-1.5">{data?.name}</p>
                                        <p class="text-sm font-normal">KES {data?.price}</p>
                                    </div>
                                </a>
                                <button class="absolute top-0 right-2 flex items-center justify-center gap-x-1 text-xs p-2 group rounded-full bg-gray-100 hover:bg-primary-50 text-gray-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-500 w-4 h-4">
                                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                    </svg>
                                    <span class="font-medium text-gray-500">3</span>
                                </button>
                            </li>)
                        }


                    </ul>
                </section>
                <section class="md:px-8 px-2 text-gray-800 max-w-screen-xl mx-auto my-4">
                    <div>
                        <p class=" font-medium leading-tight text-base max-w-full">Specifications</p>
                        <h2 class="text-gray-700 mb-3">Tecno Spark 10 Pro full specifications, cost and availability in Kenya</h2>
                    </div>
                    {/* <div class="bg-white p-2 border rounded-md hera2 text-left" x-data="{isOpen: false}">

                        <div class="font-bold leading-tight text-base max-w-full" dangerouslySetInnerHTML={{ __html: singleProduct?.description }}></div>

                        <div class="py-3 px-2 text-[#ab4725] cursor-pointer font-bold uppercase" >
                            <span x-text="isOpen ? 'Show Less specs' : 'Show More specs'"></span>
                        </div>
                    </div> */}


                    <div className="bg-white p-2 border rounded-md hera2 text-left">
                        <div className={`h-96 overflow-hidden pl-3 ${isOpen ? 'h-auto' : ''}`}>
                        <div class="font-bold leading-tight text-base max-w-full" dangerouslySetInnerHTML={{ __html: singleProduct?.description }}></div>
                        </div>
                        <div
                            className="py-3 px-2 text-[#ab4725] cursor-pointer font-bold uppercase"
                            onClick={toggleOpen}
                        >
                            <span>{isOpen ? 'Show Less specs' : 'Show More specs'}</span>
                        </div>
                    </div>
                </section>

                <section class="space-y-1 md:px-8 px-2 text-gray-800 max-w-screen-xl mx-auto">
                    <header>
                        <h2 class=" font-medium leading-tight text-base max-w-full">Price range</h2>
                        <p class="text-sm text-gray-700">All Smartphones by price range</p>
                    </header>
                    <ol class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-1.5 text-sm">
                        <li class="overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-200 ease-in-out space-y-2 flex flex-col bg-white border rounded-md">
                            <a href="#" class="" title="All Below KSh 10K Smartphones from Price in Kenya">
                                <div class="flex flex-col p-4 space-y-1">
                                    <p>Below KSh 10K</p>
                                    <p class="text-gray-500">17 items</p>
                                </div>
                            </a>
                        </li>
                        <li class="overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-200 ease-in-out space-y-2 flex flex-col bg-white border rounded-md">
                            <a href="#" class="" title="All KSh 10K - 20K Smartphones from Price in Kenya">
                                <div class="flex flex-col p-4 space-y-1">
                                    <p>KSh 10K - 20K</p>
                                    <p class="text-gray-500">86 items</p>
                                </div>
                            </a>
                        </li>
                        <li class="overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-200 ease-in-out space-y-2 flex flex-col bg-white border rounded-md">
                            <a href="#" class="" title="All KSh 20K - 30K Smartphones from Price in Kenya">
                                <div class="flex flex-col p-4 space-y-1">
                                    <p>KSh 20K - 30K</p>
                                    <p class="text-gray-500">81 items</p>
                                </div>
                            </a>
                        </li>
                        <li class="overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-200 ease-in-out space-y-2 flex flex-col bg-white border rounded-md">
                            <a href="#" class="" title="All KSh 30K - 40K Smartphones from Price in Kenya">
                                <div class="flex flex-col p-4 space-y-1">
                                    <p>KSh 30K - 40K</p>
                                    <p class="text-gray-500">41 items</p>
                                </div>
                            </a>
                        </li>
                        <li class="overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-200 ease-in-out space-y-2 flex flex-col bg-white border rounded-md">
                            <a href="/phones/1570-40k?stock_status=1" class="" title="All KSh 40K - 50K Smartphones from Price in Kenya">
                                <div class="flex flex-col p-4 space-y-1">
                                    <p>KSh 40K - 50K</p>
                                    <p class="text-gray-500">36 items</p>
                                </div>
                            </a>
                        </li>
                        <li class="overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-200 ease-in-out space-y-2 flex flex-col bg-white border rounded-md">
                            <a href="/phones/1571-50k?stock_status=1" class="" title="All KSh 50K - 60K Smartphones from Price in Kenya">
                                <div class="flex flex-col p-4 space-y-1">
                                    <p>KSh 50K - 60K</p>
                                    <p class="text-gray-500">33 items</p>
                                </div>
                            </a>
                        </li>
                        <li class="overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-200 ease-in-out space-y-2 flex flex-col bg-white border rounded-md">
                            <a href="/phones/1572-60k?stock_status=1" class="" title="All KSh 60K - 70K Smartphones from Price in Kenya">
                                <div class="flex flex-col p-4 space-y-1">
                                    <p>KSh 60K - 70K</p>
                                    <p class="text-gray-500">15 items</p>
                                </div>
                            </a>
                        </li>
                        <li class="overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-200 ease-in-out space-y-2 flex flex-col bg-white border rounded-md">
                            <a href="/phones/1573-70k?stock_status=1" class="" title="All KSh 70K - 80K Smartphones from Price in Kenya">
                                <div class="flex flex-col p-4 space-y-1">
                                    <p>KSh 70K - 80K</p>
                                    <p class="text-gray-500">12 items</p>
                                </div>
                            </a>
                        </li>
                        <li class="overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-200 ease-in-out space-y-2 flex flex-col bg-white border rounded-md">
                            <a href="/phones/1574-80k?stock_status=1" class="" title="All KSh 80K - 90K Smartphones from Price in Kenya">
                                <div class="flex flex-col p-4 space-y-1">
                                    <p>KSh 80K - 90K</p>
                                    <p class="text-gray-500">15 items</p>
                                </div>
                            </a>
                        </li>
                        <li class="overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-200 ease-in-out space-y-2 flex flex-col bg-white border rounded-md">
                            <a href="/phones/1575-90k?stock_status=1" class="" title="All KSh 90K - 100K Smartphones from Price in Kenya">
                                <div class="flex flex-col p-4 space-y-1">
                                    <p>KSh 90K - 100K</p>
                                    <p class="text-gray-500">13 items</p>
                                </div>
                            </a>
                        </li>
                        <li class="overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-200 ease-in-out space-y-2 flex flex-col bg-white border rounded-md">
                            <a href="/phones/1576-100k?stock_status=1" class="" title="All KSh 100K - 200K Smartphones from Price in Kenya">
                                <div class="flex flex-col p-4 space-y-1">
                                    <p>KSh 100K - 200K</p>
                                    <p class="text-gray-500">57 items</p>
                                </div>
                            </a>
                        </li>
                        <li class="overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-200 ease-in-out space-y-2 flex flex-col bg-white border rounded-md">
                            <a href="#" class="" title="All KSh 200K - 300K Smartphones from Price in Kenya">
                                <div class="flex flex-col p-4 space-y-1">
                                    <p>KSh 200K - 300K</p>
                                    <p class="text-gray-500">3 items</p>
                                </div>
                            </a>
                        </li>
                    </ol>
                </section>

            </div>


        </>
    )
}
