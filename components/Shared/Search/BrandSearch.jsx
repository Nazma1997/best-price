import Link from "next/link";
import { useBrandQuery } from "../../../app/features/api/ProductControl";
import ShortBrandNames from "./ShortBrandNames";
import TypeAndBrand from "./TypeAndBrand";

export default function BrandSearch() {

    const { data: brands} = useBrandQuery()
    
        return (<div className=" w-[300px] h-[600px] overflow-scroll py-2 px-5 bg-white text-black shadow-2xl">
        <div className="flex flex-col gap-2">
            {
                brands?.map(data => <Link href={`/brands/${data?.path}`} className="flex justify-between ">
                <p >{`${data?.path?.charAt(0).toUpperCase()}${data?.path?.slice(1)}`}</p>
            </Link>)
            }


        </div>
    </div>
    
    )
}