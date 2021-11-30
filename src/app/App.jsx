//styles
import './App.css';

//dependencies
import React, { useEffect, useState } from 'react';

import { firestore, googleLogin, auth, logout } from '../firebase/Firebase';

function App() {
  const [tweets, setTweets] = useState([]);
  const [tweet, setTweet] = useState({
    tweet: '',
    autor: '',
    uid: '',
    email: ''
  });
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsuscribe = firestore
      .collection("tweets")
      .onSnapshot((snapshot) => {
        const tweets = snapshot.docs.map((doc) => {
          const { tweet, autor, likes, isLiked, email, uid } = doc.data()
          return {
            tweet,
            autor,
            id: doc.id,
            likes: likes ?? 0,
            isLiked: isLiked ?? false,
            email,
            uid
          };
        });
        setTweets(tweets);
      });
    //to collect information when a login or logout take place
    auth.onAuthStateChanged((user) => {
      setUser(user);
    })

    return () => unsuscribe(); //cleaning snapshot listener
  }, []);

  const handleNewTweet = (e) => {
    let newTweet = {
      tweet: e.target.value,
      autor: user.displayName,
      uid: user.uid,
      email: user.email
    }
    setTweet(newTweet);
  }

  const sendTweet = (e) => {
    // send tweet to the collection
    e.preventDefault()
    firestore.collection('tweets').add(tweet);
  }

  const deleteTweet = (id) => {
    // delete tweet on firebase
    firestore.doc(`tweets/${id}`).delete();
    console.log()
  }

  const handleLike = (id, likes) => {
    firestore.doc(`tweets/${id}`).update({
      likes: (likes ?? 0) + 1
    });
  }

  return (
    <div className="app">
      {user ? (
        <>
          <div>
            <img src={user.photoURL} alt="Imagen del usuario" />
            <p>Hola {user.displayName}!</p>
            <button onClick={logout}>Log out</button>
            <form>
              <textarea onChange={handleNewTweet} name='tweet'></textarea>
              <button type='submit' onClick={sendTweet}>Enviar tweet</button>
            </form>
          </div>
        </>
      ) :
        <button onClick={googleLogin}>
          Login con Google
        </button>
      }
      <h1>Tweets:</h1>
      {tweets.map((tweet) => {
        return (
          <div key={tweet.id}>
            <h1>{tweet.tweet}</h1>
            <h4>Por: {tweet.autor}</h4>
            <h4>{tweet.email}</h4>
            {
              (user != null && tweet.uid===user.uid) ?
            <button onClick={() => deleteTweet(tweet.id)}>X</button> : <></>
            }
            <button onClick={() => handleLike(tweet.id, tweet.likes, tweet.isLiked)}>
              {tweet.likes ?? 0}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
