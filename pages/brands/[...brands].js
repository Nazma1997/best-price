import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import { useBrandsProductMutation, useBrandsProductQuery } from "../../app/features/api/ProductControl";
import Featured from "../../components/Pages/Product/Featured";
export default function Brands() {
    const [GetBrandProduct, { data }] = useBrandsProductMutation()
    const router = useRouter()
    const path = router.query.brands;
    useEffect(() => {
        if (path) {
            console.log("hi")
            GetBrandProduct({ brand: path[0] })
        }
    }, [path])
    const currentUrl = router.asPath;
    const output = currentUrl.substring(8).toUpperCase();
    // console.log('Current URL:', output);

    return (
        <main className="px-2 text-gray-800 max-w-screen-xl mx-auto min-h-screen">
            <div>
                <h1 className="text-2xl font-medium leading-tight max-w-full my-4">{output} </h1>
            </div>
            <section>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-2.5 bg-white border rounded-md py-5">
                    {
                        data?.map(data => {
                            return (
                                <Featured key={data?._id} img={data?.img} title={data.name} quantity={data?.quantity} price={data?.price} model={data?.model} />
                            )
                        })
                    }
                </ul>
            </section>
        </main>

    )
}