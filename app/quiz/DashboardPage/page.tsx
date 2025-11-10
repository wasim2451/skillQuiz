'use client';
import React,{useState} from 'react'
import data from '@/w_lib/results.json'
interface Props {}

type data={
   "totalQues": number;
    "totalScore": number;
    "correct": number;
    "incorrect": number;
    "percentage": number;
    "status": string;
    "username": string;
}

function Page(props: Props) {
    const {} = props
    let res=data;
    res=data.sort((a,b)=>b.percentage-a.percentage);
    console.log(res);
    const[allUsers,setAllusers]=useState<data[]>(res);
    const[currentUser,setCurrentUser]=useState<data|null>(null);
    const[toggle,setToggle]=useState<boolean>(true);

    const handleToggle=()=>{
           setToggle(true);
           setCurrentUser(null)
        
    }
   
    const handleSingleUser=(username:string)=>{
        setToggle(false);
        const item = allUsers.filter((item)=>item.username===username);
        console.log(item);
        setCurrentUser(item[0]);
    }

    const SingleUserComponent=()=>{ 
        const nameofUser=currentUser;
        return (
            <>
            <p>This is Single User of {nameofUser?.username} Component</p>
            <p>Total Questions{nameofUser?.totalQues}</p>
            <p>Correct Questions{nameofUser?.correct}</p>
            <p>Incorrect Questions{nameofUser?.incorrect}</p>
            <p>Percentage{nameofUser?.percentage}</p>
            <p>Status {nameofUser?.status}</p>

            </>
        )
    }

    const AllUserComponent=()=>{
        const totalQ=allUsers.reduce((acc,i)=>acc+i.totalQues,0);


        return(
            <>
            <p>This is a All User Component</p>
            <p>Total Questions : {totalQ}</p>
            </>
        )
    }

    return (
        <>
        <div id='Toggle BTN' className='bg-yellow-300 font-bold rounded-sm w-[300px] mt-[15vh] p-3'><button className='w-full'
        onClick={handleToggle}
        >Display All Results</button></div>
        <div className=' flex justify-center items-center p-5'>
            <div id='container' className='flex justify-center gap-5' >
                {/* Column Part -> Users List */}
                <div className='felx flex-col gap-5 justify-center items-center'>
                    {allUsers.map((item)=>{
                        return (
                            <div key={item.username}>
                                <button className='bg-green-400 p-3 text-black hover:bg-green-500 w-full h-fit rounded-sm'
                                onClick={()=>handleSingleUser(item.username)}
                                >
                                    {item.username}
                                    
                                </button>
                            </div>
                        )
                    })}
                </div>
                <div className='bg-slate-300 min-h-[500px] w-full rounded-xl '>
                    {/* Component to Display */}
                   { toggle && (currentUser==null)? <AllUserComponent/>:<SingleUserComponent/>}
                </div>

            </div>
        </div>
       </> 

    )
}

export default Page
