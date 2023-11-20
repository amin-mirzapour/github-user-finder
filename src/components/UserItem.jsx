const UserItem = ({user}) => {
  return (
    <div className="user-item">
       <div className="image-container">
        <img src={user.avatar_url} alt={user.login}/>
       </div>
        <p>{user.login}</p>
    </div>
  )
}
export default UserItem