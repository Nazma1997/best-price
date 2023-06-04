import React, { useState } from 'react'
import { useEffect } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { toast } from 'react-toastify'
import { useAdminProductUpdateMutation, useBrandQuery, useCateGorQuery, useProductAllQuery, useProductUpdateMutation } from '../../app/features/api/ProductControl'

import { useRouter } from 'next/router'
import Editor from '../../components/Shared/Editor'
// import { useAdminProductUpdateMutation, useBrandQuery, useCateGorQuery } from '../../../app/features/api/ProductControl'
// import HtmlDescription from '../../Shared/HtmlDescription';
// import Editor from '../../Shared/Editor'




export default function UpdateProduct({data: passData}) {

  const router = useRouter()
  const currentUrl = router.asPath;
  const output = currentUrl.substring(21);
//   console.log(output)
  const { data: brand, isLoading: BandLoading } = useBrandQuery()
  const { data: cateGories, isLoading: cateGoriesLoading } = useCateGorQuery()
  const [UpdateProduct, { isSuccess }] = useProductUpdateMutation(output)
  const { data: allProducts } = useProductAllQuery();


const filteredProduct = allProducts?.filter(data => data?._id === output)[0]
// console.log('filteredProduct', filteredProduct)

  const [inputs, setInputs] = useState({});
  const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.defaultValue;
      setInputs(values => ({ ...values, [name]: value }))
  }
  

  const [description, setDescription] = useState('')
  const [shortDescription, setShortDescription] = useState('')
  const [byuLink, setByuLink] = useState('');
  const [inStock, setInStock] = useState('');
  const [brands, setBrands] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [type, setType] = useState('');
  const [unPrice, setUnPrice] = useState('');
  const [price, setPrice] = useState('');
  const [img, setImg] = useState('');
  const [model, setModel] = useState('');
  const [name, setName] = useState('')

//   console.log('name', name)

  const handleSubmit = async(event) => {
    event.preventDefault();
    const inputData = {
        "description": description,
        "shortDescription": shortDescription,
        "byuLink": byuLink,
        "inStock": inStock,
        "brand": brands,
        "subCategory": subCategory,
        "type": type,
        "unPrice": unPrice,
        "price": price,
        "img": img,
        "model": model,
        "name": name,
        "_id": output
      }
      await UpdateProduct(inputData)
  }
  useEffect(() => {
      if (isSuccess) {
          toast("update Success")
      }
  }, [isSuccess])
  // console.log(passData)
  return (
      <section className="w-full   bg-gray-500 bg-opacity-75 transition-opacity " >
          <main className='w-full flex justify-center items-center mt-10 '>
              <div className="relative w-[800px] flex flex-col py-3 min-w-0 break-words  bg-white  shadow-lg rounded-lg border-0">
                
                  <div class="p-3  rounded shadow-md dark:bg-gray-700 ">
                      <form  class="" id="myForm">
                          <div class="flex  justify-between items-start gap-3">
                              <div className='w-full'>
                                  <label htmlFor="Title"
                                      class="block mb-2 font-bold text-gray-700 uppercase dark:text-gray-400">
                                      Title
                                  </label>
                                  <input type="text" id='Title' placeholder="productTitle"
                                      name="name"
                                      defaultValue={filteredProduct?.name}
                                      onChange={e => setName(e.target.value)}
                                      required
                                      class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-100 border rounded lg:mb-0 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 " />
                              </div>
                              <div className='w-full'>
                                  <label htmlFor="Model"
                                      class="block mb-2 font-bold text-gray-700 uppercase dark:text-gray-400">
                                      Model</label>
                                  <input type="text" id='Model' placeholder="productModel"
                                      name="model"
                                      defaultValue={filteredProduct?.model}
                                      onChange={handleChange}

                                      required
                                      class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-100 border rounded dark:placeholder-gray-500 lg:mb-0 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 " />
                              </div>
                              <div className='w-full'>
                                  <label htmlFor="images" class="block mb-2 font-bold text-gray-700 uppercase dark:text-gray-400">
                                      Images URL</label>
                                  <input type="text" placeholder="url" id='images'
                                      name="img"
                                      defaultValue={filteredProduct?.img }
                                      onChange={handleChange}

                                      required
                                      class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-100 border rounded dark:placeholder-gray-500 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 " />
                              </div>
                          </div>

                          <div class="flex justify-between items-start gap-3">
                              <div className='w-full'>
                                  <label htmlFor="price"
                                      class="block mb-2 font-bold text-gray-700 uppercase dark:text-gray-400">
                                      Price
                                  </label>
                                  <input type="number" id='Title' placeholder="price"
                                      name="price"
                                      defaultValue={filteredProduct?.price }
                                      onChange={handleChange}
                                      required
                                      class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-100 border rounded lg:mb-0 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 " />
                              </div>
                              <div className='w-full'>
                                  <label htmlFor="unPrice"
                                      class="block mb-2 font-bold text-gray-700 uppercase dark:text-gray-400">
                                      unPrice</label>
                                  <input type="number" id='unPrice' placeholder="productModel"
                                      name="unPrice"
                                      defaultValue={filteredProduct?.unPrice}
                                      onChange={handleChange}
                                      class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-100 border rounded dark:placeholder-gray-500 lg:mb-0 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 " />
                              </div>
                              <div className='w-full'>
                                  <label htmlFor="inStock"
                                      class="block mb-2 font-bold text-gray-700 uppercase dark:text-gray-400">
                                      IN STOCK</label>
                                  <input type="number" id='inStock' placeholder="productModel"
                                      name="inStock"
                                      defaultValue={filteredProduct?.inStock}
                                      onChange={handleChange}
                                      required
                                      class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-100 border rounded dark:placeholder-gray-500 lg:mb-0 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 " />
                              </div>


                          </div>
                          {/* Category  */}
                          <div class="flex justify-between items-start gap-3">
                             
                              
                              <div class="w-full">
                                  <label htmlFor="subCategory"
                                      class="block mb-2 font-bold text-gray-700 uppercase dark:text-gray-400">
                                      Sub Category
                                  </label>
                                  <div>
                                      <select className="block w-full max-w-sm pl-3 pr-10 py-2 transition duration-100 ease-in-out border rounded-md shadow-sm focus:ring-2 focus:ring-primary-100 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed text-base md:text-sm focus:border focus:border-primary-100 border-gray-300 placeholder-gray-400 focus:border-primary-100"
                                          name="subCategory"
                                          defaultValue={filteredProduct?.subCategory || ""}
                                          onChange={handleChange}
                                          required
                                      >
                                          <option defaultValue={filteredProduct?.subCategory} className='uppercase'>{filteredProduct?.subCategory}</option>
                                          {
                                              cateGories?.map(data => <option key={data?._id} defaultValue={data?.path} selected className='uppercase'>{data?.path}</option>)
                                          }

                                      </select>
                                  </div>
                              </div>
                              <div class="w-full">
                                  <label htmlFor="Brand"
                                      class="block mb-2 font-bold text-gray-700 uppercase dark:text-gray-400">
                                      Brand
                                  </label>
                                  <div>
                                      <select className="block w-full max-w-sm pl-3 pr-10 py-2 transition duration-100 ease-in-out border rounded-md shadow-sm focus:ring-2 focus:ring-primary-100 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed text-base md:text-sm focus:border focus:border-primary-100 border-gray-300 placeholder-gray-400 focus:border-primary-100"
                                          name="brand"
                                          defaultValue={filteredProduct?.brand || ""}
                                          onChange={handleChange}
                                          required
                                      >
                                          <option defaultValue={filteredProduct?.brand} className='uppercase'>{filteredProduct?.brand}</option>
                                          {
                                              brand?.map(data => <option key={data?._id} defaultValue={data?.path} selected className='uppercase'>{data?.path}</option>)
                                          }

                                      </select>
                                  </div>
                              </div>





                          </div>
                          <div class=" mb-6">
                              <label htmlFor="buyLink" class="block mb-2 font-bold text-gray-700 uppercase dark:text-gray-400">
                                  Buy Link</label>
                              <input type="text" placeholder="url" id='buyLink'
                                  name="byuLink"
                                  value={filteredProduct?.byuLink}
                                  onChange={handleChange}
                                  required
                                  class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-100 border rounded dark:placeholder-gray-500 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 " />
                          </div>
                          <div class=" mb-6">
                              <label for="Description" class="block mb-2 font-bold text-gray-700 uppercase dark:text-gray-400">
                                  Description</label>
                              {/* <HtmlDescription Description={setDescription} passData={passData?.description} /> */}
                              <Editor description={description} setDescription={setDescription} value={filteredProduct?.description}/>
                          </div>
                          <div class=" mb-6">
                              <label for="ShortDescription" class="block mb-2 font-bold text-gray-700 uppercase dark:text-gray-400">
                                  Short Description</label>
                              {/* <HtmlDescription Description={setShortDescription} passData={passData?.shortDescription} /> */}
                              <Editor description={shortDescription} setDescription={setShortDescription} value={filteredProduct?.shortDescription}/>
                          </div>
                          <div class="">
                              <button
                                  class="px-4 py-2 font-medium text-gray-100 bg-blue-600 rounded shadow hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-700" onClick={handleSubmit}>
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
