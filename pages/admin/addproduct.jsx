
import React, { useState } from 'react'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { useAdminDeletePostMutation, useAdminProductAddMutation, useBrandQuery, useCategoriesDeleteMutation, useCategoriesPostMutation, useCateGorQuery, useProductGetQuery } from '../../app/features/api/ProductControl'
import CategoryUpdate from '../../components/Pages/Dashboard/CategoryUpdate'
import Editor from '../../components/Shared/Editor'
import { useRouter } from 'next/router'
import ProductUpdate from '../../components/Pages/Dashboard/ProductUpdate'
import Link from 'next/link'

export default function AddProduct() {
  const [show, setShow] = useState(true)
  const [categoryAdd, setCategoryAdd] = useState(false)
  // const [addCategory, { isSuccess }] = useAdminProductAddMutation()
  const { data, isLoading } = useProductGetQuery()
  const { data: brand } = useBrandQuery()
  const [productAdd, { isSuccess }] = useAdminProductAddMutation()
  const [FilterInput, serFilterInput] = useState("phone")

  const { data: cateGories, isLoading: cateGoriesLoading } = useCateGorQuery()
  // const { data } = useAdminGetProductQuery(FilterInput)
  const [removeProduct] = useAdminDeletePostMutation()
  useEffect(() => {
    if (isSuccess) {
      toast("Delete Product ")
    }
  }, [isSuccess])




  /*  update handel */
  // const [modelHandel, SetModelHandel] = useState(false)

  // const handelCategory = () => {
  //   if (categoryAdd) {
  //     setCategoryAdd(true)
  //   } else {
  //     setCategoryAdd(true)
  //     setShow(false)
  //   }
  // }
  // const handelShow = () => {
  //   if (show) {
  //     setShow(true)
  //     setCategoryAdd(false)
  //   } else {
  //     setShow(true)
  //     setCategoryAdd(false)
  //   }
  // }

  const [modelHandel, setModelHandel] = useState(false);
const [_id, setId] = useState(null);

const handelCategory = () => {
  if (categoryAdd) {
    setCategoryAdd(true);
    setId(null); // Clear the _id value when opening the modal
  } else {
    setCategoryAdd(true);
    setShow(false);
    setId(null); // Clear the _id value when opening the modal
  }
};

const handelShow = () => {
  if (show) {
    setShow(true);
    setCategoryAdd(false);
    setId(null); // Clear the _id value when opening the modal
  } else {
    setShow(true);
    setCategoryAdd(false);
    setId('some_id_value'); // Set the desired _id value when opening the modal
  }
};

// Render the modal based on the _id value
const renderModal = (id) => {
  if (_id === id) {
    // Render modal content based on the _id value
    return <ProductUpdate  />;
  }
  // Return null if the _id doesn't match the desired value
  return null;
};

  // const { data: cateGoriesy} = useCateGorQuery()


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
  const router = useRouter();

  const handleSubmit = async (event) => {
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
      "name": name
    }
    await productAdd(inputData)

  }
  useEffect(() => {
    if (isSuccess) {
      toast("Product Add Success")

      router.push('/admin/addproduct');
    }
  }, [isSuccess])

  const handleSubmitLogin = (e) => {
    e.preventDefault();

    const predefinedEmail = 'nazma@gmail.com';
    const predefinedPassword = '12345';

    if (email === predefinedEmail && password === predefinedPassword) {

      localStorage.setItem('email', email);
      localStorage.setItem('password', password);

      router.push('/');



    } else {

      console.log('Invalid email or password');

    }
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const email = localStorage.getItem('email');
    const password = localStorage.getItem('password');

    if (email && password) {
      setIsLoggedIn(true);
    }
  }, []);


  return (

    <div>
      {isLoggedIn ? (
        <main>
          {/* category type    */}
          <div className='flex justify-start items-start gap-2 p-2'>
            <button onClick={() => handelShow()} class={`${show ? 'bg-blue-700 text-white' : ''} py-2.5  px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200   focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700`}>Show</button>
            <button onClick={() => handelCategory()} class={`${categoryAdd ? 'bg-blue-700 text-white' : ''} py-2.5  px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200   focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700`}>Product add</button>

          </div>
          {/* Category control */}
          <section className='px-10 py-5'>
            {
              show &&
              <main>
                <div class="w-full px-3 md:w-1/2 md:mb-0">
                  <label htmlFor="parentsCategoty"
                    class="block mb-2 font-bold text-gray-700 uppercase dark:text-gray-400">
                    Parents Category
                  </label>
                  <div>
                    <select className="block w-full max-w-sm pl-3 pr-10 py-2 transition duration-100 ease-in-out border rounded-md shadow-sm focus:ring-2 focus:ring-primary-100 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed text-base md:text-sm focus:border focus:border-primary-100 border-gray-300 placeholder-gray-400 focus:border-primary-100"
                      onChange={(e) => serFilterInput(e.target.value)}
                    >
                      {
                        cateGories?.map(data => <option key={data?._id} value={data?.path} selected className='uppercase'>{data?.path}</option>)
                      }

                    </select>
                  </div>
                </div>
                <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
                  <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">Name</th>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">State</th>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">Brand</th>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">Design/type/price </th>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900"></th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                      {
                        data?.map(data => <tr key={data?._id} className="hover:bg-gray-50">
                          <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                            <div className="relative h-10 w-10">
                              <img
                                className="h-full w-full rounded-full object-cover object-center"
                                src={data?.img}
                                alt="No Images" width={100} height={100}
                              />
                              <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
                            </div>
                            <div className="text-sm">
                              <div className="font-medium text-gray-700">{data?.name}</div>
                              <div className="text-gray-400">{data?.model}</div>
                            </div>
                          </th>
                          <td className="px-6 py-4">
                            <span
                              className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600"
                            >
                              <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                              Active
                            </span>
                          </td>
                          <td className="px-6 py-4">{data?.brand}</td>
                          <td className="px-6 py-4">
                            <div className="flex gap-2">
                              <span
                                className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600"
                              >
                                Design
                              </span>
                              <span
                                className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600"
                              >
                                {data?.type}
                              </span>
                              <span
                                className="inline-flex items-center gap-1 rounded-full bg-violet-50 px-2 py-1 text-xs font-semibold text-violet-600"
                              >
                                {data?.price}
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex justify-end gap-4">
                              <button onClick={() => removeProduct(data?._id)} x-data="{ tooltip: 'Delete' }" >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke-width="1.5"
                                  stroke="currentColor"
                                  className="h-6 w-6"
                                  x-tooltip="tooltip"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                  />
                                </svg>
                              </button>{/* onClick={() => SetModelHandel()} */}
                              {/* <button onClick={() => SetModelHandel(!modelHandel)}  >

                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke-width="1.5"
                                  stroke="currentColor"
                                  className="h-6 w-6"
                                  x-tooltip="tooltip"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                                  />
                                </svg>
                              </button>
                              {
                                modelHandel && <ProductUpdate data={data} SetModelHandel={SetModelHandel} modelHandel={modelHandel} />
                              } */}
                              <Link href={`/admin/updateProduct/${data?._id}`}>
                              <button >Open Modal</button>
                              </Link>
{/* { handelShow && renderModal(data?._id)} */}

                              
                            </div>
                          </td>
                        </tr>
                        )
                      }
                    </tbody>
                  </table>
                </div>


              </main>
            }
            {
              categoryAdd &&
              <main>
                <section class="flex items-center bg-gray-500  font-poppins dark:bg-gray-800 ">
                  <div class="justify-center flex-1 max-w-2xl px-4  mx-auto ">
                    <h2 class="pb-2 text-xl font-bold text-center text-gray-800 md:text-3xl dark:text-gray-300">
                      Product From
                    </h2>
                    <div class="w-20 mx-auto mb-6 border-b border-red-700 dark:border-gray-400"></div>
                    <div class="px-3 py-6 rounded shadow-md dark:bg-gray-700 bg-gray-500">
                      <form onSubmit={handleSubmit} class="" id="myForm">
                        <div class="flex flex-wrap mb-6">
                          <div class="w-full px-3 md:w-1/2 md:mb-0">
                            <label htmlFor="Title"
                              class="block mb-2 font-bold text-gray-700 uppercase dark:text-gray-400">
                              Title
                            </label>
                            <input type="text" id='Title' placeholder="productTitle"
                              name="name"
                              // value={inputs.name || ""}
                              // onChange={handleChange}
                              onChange={e => setName(e.target.value)}
                              required
                              class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-100 border rounded lg:mb-0 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 " />
                          </div>
                          <div class="w-full px-3 md:w-1/2 md:mb-0">
                            <label htmlFor="Model"
                              class="block mb-2 font-bold text-gray-700 uppercase dark:text-gray-400">
                              Model</label>
                            <input type="text" id='Model' placeholder="productModel"
                              name="model"
                              // value={inputs.model || ""}
                              // onChange={handleChange}
                              onChange={e => setModel(e.target.value)}

                              required
                              class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-100 border rounded dark:placeholder-gray-500 lg:mb-0 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 " />
                          </div>
                        </div>
                        <div class="px-3 mb-6">
                          <label htmlFor="images" class="block mb-2 font-bold text-gray-700 uppercase dark:text-gray-400">
                            Images URL</label>
                          <input type="text" placeholder="url" id='images'
                            name="img"
                            // value={inputs.img || ""}
                            // onChange={handleChange}
                            onChange={e => setImg(e.target.value)}

                            required
                            class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-100 border rounded dark:placeholder-gray-500 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 " />
                        </div>
                        <div class="flex flex-wrap mb-6">
                          <div class="w-full px-3 md:w-1/2 md:mb-0">
                            <label htmlFor="price"
                              class="block mb-2 font-bold text-gray-700 uppercase dark:text-gray-400">
                              Price
                            </label>
                            <input type="number" id='Title' placeholder="price"
                              name="price"
                              // value={inputs.price || ""}
                              // onChange={handleChange}
                              onChange={e => setPrice(e.target.value)}
                              required
                              class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-100 border rounded lg:mb-0 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 " />
                          </div>
                          <div class="w-full px-3 md:w-1/2 md:mb-0">
                            <label htmlFor="unPrice"
                              class="block mb-2 font-bold text-gray-700 uppercase dark:text-gray-400">
                              unPrice</label>
                            <input type="number" placeholder="productModel"
                              name="unPrice"
                              // value={inputs.unPrice || ""}

                              // onChange={handleChange}
                              onChange={e => setUnPrice(e.target.value)}
                              class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-100 border rounded dark:placeholder-gray-500 lg:mb-0 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 " />
                          </div>
                        </div>
                        {/* Category  */}
                        
                         
                          <div class="w-full px-3 md:w-1/2 md:mb-0">
                            <label htmlFor="subCategory"
                              class="block mb-2 font-bold text-gray-700 uppercase dark:text-gray-400">
                              Sub Category
                            </label>
                            <div>
                              <select className="block w-full max-w-sm pl-3 pr-10 py-2 transition duration-100 ease-in-out border rounded-md shadow-sm focus:ring-2 focus:ring-primary-100 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed text-base md:text-sm focus:border focus:border-primary-100 border-gray-300 placeholder-gray-400 focus:border-primary-100"
                                name="subCategory"
                                // value={inputs.subCategory || ""}
                                // onChange={handleChange}
                                onChange={e => setSubCategory(e.target.value)}
                                required
                              >
                                {
                                  cateGories?.map(data => <option key={data?._id} value={data?.path} selected className='uppercase'>{data?.path}</option>)
                                }

                              </select>
                            </div>
                          </div>
                       
                        {/*  brand  */}

                        <div class="flex flex-wrap mb-6">
                          <div class="w-full px-3 md:w-1/2 md:mb-0">
                            <label htmlFor="Brand"
                              class="block mb-2 font-bold text-gray-700 uppercase dark:text-gray-400">
                              Brand
                            </label>
                            <div>
                              <select className="block w-full max-w-sm pl-3 pr-10 py-2 transition duration-100 ease-in-out border rounded-md shadow-sm focus:ring-2 focus:ring-primary-100 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed text-base md:text-sm focus:border focus:border-primary-100 border-gray-300 placeholder-gray-400 focus:border-primary-100"
                                name="brand"
                                // value={inputs.brand || ""}
                                // onChange={handleChange}
                                onChange={e => setBrands(e.target.value)}
                                required
                              >
                                {
                                  brand?.map(data => <option key={data?._id} value={data?.path} selected className='uppercase'>{data?.path}</option>)
                                }

                              </select>
                            </div>
                          </div>
                          <div class="w-full px-3 md:w-1/2 md:mb-0">
                            <label htmlFor="inStock"
                              class="block mb-2 font-bold text-gray-700 uppercase dark:text-gray-400">
                              IN STOCK</label>
                            <input type="number" id='inStock' placeholder="productModel"
                              name="inStock"
                              // value={inputs.inStock || ""}
                              // onChange={handleChange}
                              onChange={e => setInStock(e.target.value)}
                              required
                              class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-100 border rounded dark:placeholder-gray-500 lg:mb-0 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 " />
                          </div>
                        </div>

                        <div class="px-3 mb-6">
                          <label htmlFor="buyLink" class="block mb-2 font-bold text-gray-700 uppercase dark:text-gray-400">
                            Buy Link</label>
                          <input type="text" placeholder="url" id='buyLink'
                            name="byuLink"
                            // value={inputs.byuLink || ""}
                            // onChange={handleChange}
                            onChange={e => setByuLink(e.target.value)}
                            required
                            class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-100 border rounded dark:placeholder-gray-500 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 " />
                        </div>
                        <div class="px-3 mb-6">
                          <label for="Description" class="block mb-2 font-bold text-gray-700 uppercase dark:text-gray-400">
                            Description</label>
                          {/* <HtmlDescription Description={setDescription} /> */}

                          <Editor description={description} setDescription={setDescription} />
                        </div>
                        <div class="px-3 mb-6">
                          <label for="ShortDescription" class="block mb-2 font-bold text-gray-700 uppercase dark:text-gray-400">
                            Short Description</label>
                          <div className='bg-white' >
                            {/* <HtmlDescription Description={setShortDescription} /> */}

                            <Editor description={shortDescription} setDescription={setShortDescription} />
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
                </section>








              </main>
            }



          </section>
        </main>
      ) : (
        <div className='w-100 h-[100vh] flex justify-center items-center'>

          <div>
            <form onSubmit={handleSubmitLogin} className=' p-10 rounded'>
              <div className='w-full'>
                <label htmlFor="Email"
                  class="block mb-2 font-bold text-gray-700 uppercase dark:text-gray-400">
                  Email
                </label>
                <input type="email" placeholder="Login Email"
                  name="email"

                  onChange={e => setEmail(e.target.value)}
                  required
                  class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-100 border rounded lg:mb-0 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 " />
              </div>
              <div className='w-full'>
                <label htmlFor="Email"
                  class="block mb-2 font-bold text-gray-700 uppercase dark:text-gray-400">
                  Password
                </label>
                <input type="password" placeholder="Login password"
                  name="password"

                  onChange={e => setPassword(e.target.value)}
                  required
                  class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-100 border rounded lg:mb-0 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 " />
              </div>
              {/* <h1 className='text-gray-100'>Please Login</h1> */}
              <div class="mt-10">

                <button
                  class="px-4 py-2 font-medium text-gray-100 bg-blue-600 rounded shadow hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-700">
                  Login
                </button>

              </div>
            </form>


          </div>

        </div>
      )}
    </div>


  )
}
