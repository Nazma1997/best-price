import { useBrandQuery } from "../../../app/features/api/ProductControl";
import ShortBrandNames from "./ShortBrandNames";
import TypeAndBrand from "./TypeAndBrand";

export default function BrandSearch() {

    const { data: brands} = useBrandQuery()
    
        return (<div className=" w-[300px] h-[600px] overflow-scroll py-2 px-5 bg-white text-black shadow-2xl">
        <div className="flex flex-col gap-2">
            {
                brands?.map(data => <ShortBrandNames key={data?._id} name={data?.path} />)
            }

        </div>
    </div>
    
    )
}