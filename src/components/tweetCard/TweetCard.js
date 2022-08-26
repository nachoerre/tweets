//Firebase
import { firestore, getCurrentUser } from "../../firebase/Firebase";

//icons
import fullHeart from '../../pictures/full-heart.svg'
import emptyHeart from '../../pictures/emptyHeart.svg'
import garbage from '../../pictures/garbage.svg'

//React
import { useEffect, useState } from "react";

//styles
import "./TweetCard.css";

export function TweetCard({ tweet }) {
  const { id, likesCount, userId } = tweet;

  const user = getCurrentUser();
  const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

  
  const [buttonDisable, setButtonDisable] = useState(false);
  const [color, setColor]= useState("");
  const [liked, setLiked] = useState();
  const [userName, setUserName] = useState("");
  
  const checkLike = async () => {
    const doc = await firestore.doc(`likes/${user?.uid}-${tweet.id}`).get();
    const isLiked = doc.data();
    if (!!isLiked) {
      setLiked(true);
    }
  };

  useEffect(() => {
    firestore
      .doc(`users/${tweet.userId}`)
      .get()
      .then((snapshot)=>{
        setColor(snapshot.data().color)
        setUserName (snapshot.data().username)
      })

    checkLike();
  },[]);

  // Borra el documento en Firebase por su id
  const handleDelete = () => {
    let option = window.confirm("¿Seguro que quiere borrar su Tweet?");
    if (option == true) {
      firestore.doc(`tweets/${id}`).delete();
      firestore
        .collection("likes")
        .where("tweetId", "==", id)
        .get()
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            doc.ref.delete();
          });
        });
    }
  };

  // Actualiza el documento de relacion de likes
  const handleLike = async () => {
    setButtonDisable(true);
    firestore
      .doc(`tweets/${tweet.id}`)
      .update({ likesCount: liked ? likesCount - 1 : likesCount + 1});
    const docRef = `likes/${user.uid}-${id}`;
    if (liked) {
      setLiked(false);
      firestore.doc(docRef).delete();
    } else {
      setLiked(true);
      firestore.doc(docRef).set({ userId:user.uid, tweetId:tweet.id, date:tweet.date });
    }
    setButtonDisable(false);
  };

  const tweetDate = (date) => {
    const newDate = new Date(date);
      return `${newDate.getDate()}${month[newDate.getMonth()]}`;
  };

  return (
    <div key={tweet.id} className='tweet-card'>
      <img className='tweet-user-img' src={tweet.photo} alt="Tweet user" />
      <div className='tweet-container'>
        <div className='tweet-header'>
          <div>  
            <h1 className={`username-${color}`}>{userName}</h1>
            <span className='date'>- {tweetDate(tweet.date)}.</span>
          </div>
          {
          userId === user?.uid ?
          <button onClick={() => handleDelete()} className='garbage'>
            <img src={garbage} className='garbage' alt="garbage"></img>
          </button> : <></>
          }
        </div>
        <h4>{tweet.tweet}</h4>
        {
          user != null ?
            <div className='tweet-footer'>
              <button onClick={handleLike} className='heart-button' disabled={buttonDisable}>
                {liked ? 
                <img src={fullHeart} className='full-heart heart-button' alt="full-heart"></img> :
                <img src={emptyHeart} className='empty-heart heart-button' alt="empty-heart"></img>
                }
              </button>
              <span className={`likes-number ${liked ? 'red-number' : ''}`}>{tweet.likesCount ?? 0}</span>
            </div> :
            <div className={`likes-number ${liked ? 'red-number' : ''}`}>{tweet.likesCount ?? 0}</div>
        }
      </div>
    </div>
  );
}