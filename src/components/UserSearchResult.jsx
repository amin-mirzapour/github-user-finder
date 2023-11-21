import { useContext} from "react"
import GithubContext from "../context/GithubContext"
import UserItem from "./UserItem"
import UserSearch from "./UserSearch"
import Spinner from "./Spinner"

const UserSearchResult = () => {

    const {users, loading} = useContext(GithubContext)
    
    return (
     <>
     <UserSearch/>
      {!loading ? (
         <div className="user-result-container">
                {users.map((user)=>(
                    <UserItem user={user} key={user.id}/>
                ))}
              </div>
      ) : (
       <Spinner/>
      )}
    </>
    )


}
export default UserSearchResult