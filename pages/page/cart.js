import Link from 'next/link'
import React from 'react'

const Cart = () => {
  return (
    <main className="px-2 text-gray-800 max-w-screen-xl mx-auto min-h-screen">
            <section>
                <header className="flex flex-wrap gap-2 justify-between items-center my-1">
                    <div>
                        <h2 className="text-xl font-medium leading-tight  max-w-full mt-5 mb-3">Your Cart List</h2>
                        {/* <p className="text-sm text-gray-700">Find products by category</p> */}
                    </div>
                </header>
                <div className="bg-white border py-8 rounded-md">
                    <ol className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5 text-sm">
                        {/* {
                            data?.map(data => <ProductCategories key={data?._id} img={data?.img} title={data?.title} quantity={data?.stock} extraQuantity={data?.extraStock} path={data.path} />)
                        } */}

                    </ol>
                </div>
                
            </section>
        </main>
  )
}

export default Cart
