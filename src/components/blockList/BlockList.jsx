import React, { useEffect, useState } from 'react'
import { getDatabase, ref, onValue, push  } from "firebase/database";
import { useSelector } from 'react-redux';
export const BlockList = () => {
    // ========== data get from redux
  const sliceUser= useSelector((state)=>state.counter.value)
  // ========== variables
   const [blockFriend, setBlockFriend] = useState([])
   // ========== firebase variables
   const db = getDatabase();
//    ============== functions currentUserPhoto currentUserName currentUserId ==== friendPhoto friendName friendId
   useEffect(()=>{
    const starCountRef = ref(db, 'blockList/');
    onValue(starCountRef, (snapshot) => {
      let arr = []
      snapshot.forEach((item)=>{
        if(item.val().currentUserId == sliceUser.uid){
          arr.push({userid: item.val().friendId,username: item.val().friendName,userphoto: item.val().friendPhoto,
          }) 
        }else if(item.val().friendId == sliceUser.uid){
            arr.push({userid: item.val().currentUserId,username: item.val().currentUserName,userphoto: item.val().currentUserPhoto,})
        }
      })
      setBlockFriend(arr)
  });
  }, [])
  return (
    <>
     <div className='container  flex justify-center items-center'>
          <div className="p-5 bg-[#074173] bg-opacity-50 h-[500px] border-2 border-[#074173] rounded-lg mt-10 flex flex-col gap-6 py-5 px-10 overflow-scroll ">
                 <h2 className='text-lg font-medium font-poppins mt-5 text-center'>Block List</h2>
               {
                  blockFriend.map((item)=>(
                     <div key={item?.userid} className="flex justify-between items-center gap-8 mb-5 ">
                      <div className='flex items-center gap-5'> 
                         <div className=" bg-green-100 user_image w-[50px] h-[50px] rounded-full overflow-hidden">
                          <img src={item?.userphoto} alt="user photo" />
                          </div>
                          <h2 className='text-lg font-semibold'>{item?.username} </h2>
                      </div>
                      <div className="butts">
                          <button className='rounded-lg py-1 px-3 bg-red-600 text-sm text-white font-normal'>Unblock</button>
                      </div>
                    </div>    
                  ))
               }
          </div>
      </div>
    </>
  )
}
