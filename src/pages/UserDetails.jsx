import { useContext, useEffect } from 'react';
import GithubContext from '../context/GithubContext';
import { Link, useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';

const UserDetails = () => {
  const { user, loading, getUserDetails } = useContext(GithubContext);

  const { login } = useParams();

  useEffect(() => {
    getUserDetails(login);
  }, [login]);

  console.log(user);
  return (
    <>
      {!loading ? (
        <>
        <Link to={`/`}>
            <button className='go-back'>Go Back</button>
        </Link>
        <div className='user-details-container'>
         
            <div className="user-details-image">
              <img src={user.avatar_url} alt={user.login} />
            </div>

           <div className='user-details-info'>
                <h3>Name :{user.login}</h3>
                <p>Bio : {user.bio}</p>
           </div>
          
        </div>
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};
export default UserDetails;
