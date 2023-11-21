import { Link } from 'react-router-dom';

const UserItem = ({ user }) => {
  return (
    <div className="user-item">
      <div className="image-container">
        <img src={user.avatar_url} alt={user.login} />
      </div>
      <Link to={`/user/${user.login}`}>
        <p>{user.login}</p>
      </Link>
    </div>
  );
};
export default UserItem;
