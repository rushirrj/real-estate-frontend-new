import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

const SearchComponent = ({setOpen,searchInputs}) => {
  const navigate = useNavigate();
    return (
    <div
    id="button-addon2"
    class="btn flex cursor-pointer justify-center  px-6 py-2.5 bg-navGreen text-white font-medium text-xs leading-tight uppercase rounded shadow-md        transition duration-150 ease-in-out items-center"
    // style={{pointerEvents:"none"}}
    onClick={(e) => {
              e.preventDefault();
              setOpen(false)
              navigate(`/search?q=${searchInputs}`)
            }}
            >
    <div >
      <SearchIcon   />
    </div>

  </div>
  )
}

export default SearchComponent