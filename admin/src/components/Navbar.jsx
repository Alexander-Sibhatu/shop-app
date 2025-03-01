import { assets } from '../assets/assets'

const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center py-2 px-[4%] justify-between'>
        <img  className='flex items-center w-[170px]' src={assets.logo} alt="Logo" />
        <button onClick={() => setToken('')} className='bg-gray-600 text-white px-5 py-2 sm:px-7 rounded-full'>Logout</button>
    </div>
  )
}

export default Navbar