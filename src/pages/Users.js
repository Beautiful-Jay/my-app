import { useEffect, useState } from 'react'
import Pigination from '../components/Pigination'
import axios from 'axios';
import { Profile } from '../components/Profile';
import Navigation from '../components/Navigation';

function Users() {
  const [userProfile, setUserProfile] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentpage] = useState(1);
  const [pagePerShow, setPagePerShow] = useState(4);

  const URL = 'https://randomuser.me/api/?page=5&results=20&seed=abcde'

  useEffect (() => {
    const fetchProfile = () => {
     setLoading(true);
     axios.get(URL)
     .then((response) => {
     setUserProfile(response.data.results);
     }).catch((error) => {
       if(error) {
         throw new Error('error!!')
       } 
     }).finally(() => {
       setLoading(false);});
 }
   fetchProfile();
     }, []);

     const lastProfileIndex = currentPage * pagePerShow;

     const firstProfileIndex = lastProfileIndex - pagePerShow; 
   
     const currentPosts = userProfile.slice(firstProfileIndex, lastProfileIndex)
   
     
   
     return (
      
           <section class="section-one">
            <div><Navigation /></div>
      <div>
        <h1 className='header'>Logged on Readers</h1>
      </div>
               <div className="">
                 
                   {loading ? <h2>Loading...</h2>
                   :
                       <Profile data={currentPosts} />
                   }
               </div>
               <div className='pagination'>
                     <Pigination 
                     totalProfile={userProfile.length} 
                     pagePerShow={pagePerShow} 
                     setCurrentPage={setCurrentpage} 
                     currentPage={currentPage}  
                   />
               </div>
         </section>
     )
   }
   
   export default Users;
