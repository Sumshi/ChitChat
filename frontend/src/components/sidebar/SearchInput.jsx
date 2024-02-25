// this file is used to create a search input field in the sidebar
import React from 'react'
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <div>
        <form className='flex items-center gap-2'>
			<input type='text' placeholder='Search…' className='input input-bordered rounded-full' />
    		<button type='submit' className='btn btn-circle bg-sky-500 text-white'>
 				<BsSearch className='w-6 h-6 outline-none' />
			</button>
 		</form>
    </div>
  )
}

export default SearchInput;
