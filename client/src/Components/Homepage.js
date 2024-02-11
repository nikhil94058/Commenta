import React from 'react';
import { useState, useEffect } from "react";

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

export function HomePage() {
  const [loading, setLoading] = useState(true);
  const [comment, setComment] = useState("");
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  const PostComment = async () => {
    if (comment === "" || comment.length < 50) {
      alert("Plz Enter Shyari's And Good Comment only!");
    }
    else {
      await addDoc(usersCollectionRef, { name: comment });
      alert("Please Refresh The Page");
      setComment("");
    }
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
        <center className='m-[300px]'>

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
              <p className="font-normal text-gray-700 dark:text-gray-400">{user.name}</p>
            </div>
          ))}
        </center>
      </div>
      <Footer />
    </>


  );
}

export default HomePage;
