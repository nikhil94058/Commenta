import React from 'react';
import { useState, useEffect } from "react";
import { auth } from '../firebase-config';
import { db } from "../firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { Navbar } from "./Navbar";
import { Hero } from './Hero';
import { Footer } from './Footer';
import LeaderBoard from './LeaderBoard';

export function HomePage() {
  const [loading, setLoading] = useState(true);
  const [comment, setComment] = useState("");
  const [users, setUsers] = useState([]);
  const [like, setLike] = useState(1);
  const usersCollectionRef = collection(db, "users");
  const currDate = new Date().toLocaleDateString;
  const PostComment = async () => {
    if (comment === "" || comment.length < 50 || comment.length > 500) {
      alert("Plz Enter Shyari's And Good Comment only!");
    }
    else {
      await addDoc(usersCollectionRef, { comments: comment, likes: like });
      alert("Please Refresh The Page");
      setComment("");
    }
  };

  const LikeFun = (cnt, id) => {
    cnt = cnt + 1;
    console.log(cnt);

    const updateData = doc(db, "users", id)
    updateDoc(updateData, { likes: cnt })
    setLike(1)
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  useEffect(() => {
    // Simulate a delay to represent data loading
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Clean up the timeout when the component unmounts or loading is complete
    return () => clearTimeout(timeoutId);
  }, []);



  return (

    <>
      <div className=' bg-black '>
        {loading ? (
          <div>Spash....</div>
        ) : (
          <div></div>
        )}

        <Navbar />
        <Hero />
        <center className='mt-[300px]'>
          <LeaderBoard />
          <input
            type="text"
            placeholder="Post Some Comments .... :)"
            value={comment}
            onChange={(event) => setComment(event.target.value)}
            className="block w-[1000px] p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <button onClick={PostComment} className="bg-blue-500 text-white p-2 rounded-lg ml-2">
            Post
          </button>
          {users.map((user, index) => (
            <div key={index} className="max-w-sm p-6 mt-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <p className="font-normal text-gray-700 dark:text-gray-400">{user.comments}</p>
              <b>{user.mention}</b>
              <div className='flex justify-end text-white'>{user.likes} __ <button onClick={() => LikeFun(user.likes, user.id)}>Upvote</button></div>
              <div>{user.timeuploaded}</div>
            </div>
          ))}
        </center>
      </div>
      <Footer />
    </>


  );
}

export default HomePage;
