import { useContext, useState } from "react"
import GithubContext from "../context/GithubContext"

const UserSearch = () => {

    const [searchItem, setSearchItem] = useState('')

    const {getUser} = useContext(GithubContext)

    const handleSearch = async (e) =>{
        e.preventDefault()
        if(searchItem === ''){
            window.alert('please fill out the form')
        }else {
            getUser(searchItem)
        }
    }

  return (
    <div className="search-form">
        <form onSubmit={handleSearch}>
            <input type="text" value={searchItem} onChange={(e)=>setSearchItem(e.target.value)}/>
            <button type="submit">Search</button>
        </form>
    </div>
  )
}
export default UserSearch