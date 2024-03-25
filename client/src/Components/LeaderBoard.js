import React, { useState, useEffect } from 'react';
import { db } from "../firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc, query, where, orderBy, limit
} from "firebase/firestore";

const LeaderBoard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const usersCollectionRef = collection(db, "users");

  useEffect(() => {
    const getUsers = async () => {
      try {
        const q = query(usersCollectionRef, orderBy("likes", "desc"), limit(3)); // Order by likes in descending order
        const querySnapshot = await getDocs(q);
        const fetchedUsers = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
        setUsers(fetchedUsers);
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        setError(error);
        setLoading(false); // Set loading to false in case of error
      }
    };


    getUsers();
  }, []);

  const handleUpvote = async (userId) => {
    // Implement upvote functionality here
  };

  if (loading) {
    return <div>Loading...</div>; // Render loading state
  }

  if (error) {
    return <div>Error: {error.message}</div>; // Render error message if there's an error
  }

  return (


    <>
      <div className='text-4xl font-extrabold dark:text-white'>Trending Comments</div>
      <div className='flex space-x-10'>

        {users.map((user, index) => (
          <div key={index} className="max-w-sm p-6 mt-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div class="text-white font-bold text-xl mb-2">{user.comments}</div>
            <p class="text-sm text-white flex items-center">
              <svg class="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
              </svg>
              {user.likes}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default LeaderBoard;
