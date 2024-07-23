import Navbar from '../HomePage/Navbar'

import Footer from '../HomePage/Footer'

function Form() {
  return (
    <>
    <Navbar/>
    <form className="  ml-2 mt-2 backdrop-blur   bg-green">
        <div className=''>

    <div className="md:flex md:items-center mb-6">
      <div className="md:w-1/3">
        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
          Name
        </label>
      </div>
      <div className="md:w-2/3">
        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text value={inputValue} onChange={(e)=>setInputValue()}" />
      </div>
    </div>

    <div className="md:flex md:items-center mb-6">
      <div className="md:w-1/3">
        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
          Product Name
        </label>
      </div>
      <div className="md:w-2/3">
        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
      </div>
    </div>

    <div className="md:flex md:items-center mb-6">
      <div className="md:w-1/3">
        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
          Category
        </label>
      </div>
      <select className="md:w-2/3">
     
  <option value="fresh veg">Fresh Veg</option>
  <option value="fruits">Fruits</option>
  <option value="grains">Grains</option>
      </select>
    </div>

    <div className="md:flex md:items-center mb-6">
      <div className="md:w-1/3">
        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
          Price per unit
        </label>
      </div>
      <div className="md:w-2/3">
        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
      </div>
    </div>

    <div className="md:flex md:items-center mb-6">
      <div className="md:w-1/3"></div>
      <label className="md:w-2/3 block text-gray-500 font-bold">
        <input className="mr-2 leading-tight" type="checkbox"/>
        <span className="text-sm">
          Send me an update once new stock is available
        </span>
      </label>
    </div>

    <div className="md:flex md:items-center">
      <div className="md:w-1/3"></div>
      <div className="md:w-2/3">
        <button className="shadow bg-green hover:bg-green focus:shadow-outline focus:outline- text-white font-bold py-2 px-4 rounded" type="button">
          Create Order
        </button>
      </div>
    </div>
        </div>
  </form>
  <Footer/>
    </>
  )
}

export default Form





