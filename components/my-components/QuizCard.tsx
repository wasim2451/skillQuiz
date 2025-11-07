'use client';
import React from 'react'
import { useState } from 'react';
type QuizItem = {
    id: number;
    question: string;
    correctAns: string;
    options: string[];
};

function QuizCard({ quizes, name, initialObj }: { quizes: QuizItem[]; name: string; initialObj: Object }) {
    const[userAns,setUserAns]=useState<{id:number;ans:string}[]>([]); // Array of Objects
    const[index,setIndex]=useState(0);
    function handleEachOption(id:number,ans:string){
        // console.log({id},{ans});
        setUserAns((prev)=>{
            const filtered=prev.filter((item)=>item.id!=id);
            return [...filtered,{id,ans}];
        })
        console.log(userAns);
    }

    return <>
        <div className='flex justify-center items-center'>
            <div className='flex flex-col gap-2 p-4'>
                <p className='p-2 w-full'>Question : {index+1} of {quizes.length}</p>
                <div className='p-2 w-full'>{quizes[index].question}</div>
                {
                    quizes[index].options.map((ques:string,index)=>{
                        return <div key={index}>
                        <button className='p-2 bg-slate-300 font-mono rounded-lg hover:bg-blue-500 w-full'
                        onClick={()=>handleEachOption(index,ques)}
                        >{ques}</button>
                        </div>
                    })
                }
                <div className='flex justify-center gap-4'>
                    <button className='p-2 w-full bg-yellow-300 font-serif rounded-lg hover:bg-yellow-400'
                    onClick={() => setIndex((prev) => (prev - 1 + quizes.length) % quizes.length)}
                    >Previous</button>
                    <button className='p-2 w-full bg-blue-400 font-serif rounded-lg hover:bg-blue-500'
                    onClick={()=>(setIndex((prev)=>(prev+1)%quizes.length))}
                    >Next</button>
                </div>
                <button className='bg-green-500 hover:bg-green-600 w-full p-2 rounded-lg font-serif'

                >Submit</button>
            </div>
        </div>
    </>
}

export default QuizCard;
