//components
import { TweetCard } from '../tweetCard/TweetCard';

//Firebase
import {auth, firestore, getCurrentUser, logout} from '../../firebase/Firebase';

//imgs
import arrow from '../../pictures/arrow.svg';
import imglogout from '../../pictures/imglogout.svg';

//React
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

//style
import './UserProfile.css';

function UserProfile() { 

  let navigate = useNavigate();
  let user = getCurrentUser();

  const [color, setColor] = useState ("")
  const [isDark, setIsDark] = useState(false);
  const [tweets, setTweets] = useState([]);
  const [userName, setUserName] = useState ("")

  const onClickLogout = (e) => {
    logout();
    navigate('/');
  };

  const onClickBack = (e) => {
    navigate('/feed');
  };

  const handlePosts = () => {
    auth.onAuthStateChanged((user) =>  {
      if (user !== null) {
        firestore
        .collection('tweets').orderBy("date", "desc")
        .where("user", "==", user.uid)
        .onSnapshot((snapshot)=>{
          const postedTweets = snapshot.docs.map((doc) => {
            return {
              ...doc.data(),
              key: doc.id,
              id: doc.id,
              photoURL: user.photoURL
            };
          })
          setIsDark(true);
          setTweets(postedTweets);
        })
      }
    })
  }

  const handleFavorite = async () => {
    setIsDark(false);
    let userLikes = await firestore
      .collection('likes')
      .orderBy("date", "desc")
      .where("userId", "==", user.uid)
      .get()
      let favTweets = await Promise.all (userLikes.docs.map(async (doc) => {
        const tweetId = doc.data().tweetId;
        const otherTweet = await firestore.doc(`tweets/${tweetId}`).get();
        return {
          ...otherTweet.data(),
          key: otherTweet.id,
          id: otherTweet.id
        };
      }))
      setTweets(favTweets);
  }
  
  
  useEffect(() => {
    auth.onAuthStateChanged((user) =>  {
      if (user !== null) {
        firestore
        .doc(`users/${user.uid}`)
        .get()
        .then((snapshot)=>{
          setColor(snapshot.data().color);
          setUserName (snapshot.data().username);
        });
        const unsuscribePosts = handlePosts();
        return () => {
          // Limpiamos el listener creado cuando se desmonta el componente
          unsuscribePosts();
        };
      } else {navigate('/tweets')};
    })
  }, []);

  return (
    <div className='profile-container'>
      <div className="profile-header-container">
        <div className="profile-header">
          <button type="button" className='back-button' onClick={onClickBack}>
            <div className="back-div">
              <img src={arrow} className='arrow' alt='arrow'></img>
              <div className="header-username">{userName}</div>
            </div>
          </button>
          <button type="button" className="button-logout" onClick={onClickLogout}>
            LOGOUT
            <img src={imglogout} className='img-logout' alt='logout'></img>
          </button>
        </div>
      </div>
      <div className="profile-main-container">
        <div className="profile-main">
          <img src={user?.photoURL} className={`profile-photo border-${color}`} alt='user'></img>
          <div className={`user-color username-${color}`}>{userName}</div>
          <div className="tabs-buttons">
            <button 
              type="button" 
              onClick={handlePosts} 
              className={`tabs ${isDark ? 'tabs-light': ''}` }
              >POSTS
            </button>
            <button 
              type="button" 
              onClick={handleFavorite} 
              className={`tabs ${isDark ? '': 'tabs-light'}` }
              >FAVORITES
            </button>
          </div>
        </div>
      </div>
      <div className="tweets-list">
        {tweets.map((tweet) => {
          return (
            <TweetCard 
              key={tweet.id} 
              tweet={tweet} />
          );
        })}
      </div>
    </div>
  )
}
export default UserProfile;