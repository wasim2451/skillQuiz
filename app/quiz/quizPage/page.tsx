import React from 'react'
import {quiz} from '@/lib/quizQuestions/question';
import QuizCard from '@/components/my-components/QuizCard';
function Page(data:{name:string;}) {
    const {name}=data;
    console.log(quiz);
    const ansobj={
        "totalQues":quiz.length,
        "totalScore":0,
        "correct":0,
        "incorrect":0,
        "percentage":0,
        "status":"passed"
    }
    
    return (
        <div className='flex justify-center items-center mt-[8%]'>
            <div className='bg-slate-100 p-[10px] min-h-[500px] md:w-[30%]'>
                <p className='text-center font-bold tracking-wider p-2'>Welcome {name ?name:"User"}. All the BEST ! </p>
                {/* Card to be Rendered here */ }
                <QuizCard quizes={quiz} initialObj={ansobj} name={name}/>
            </div>
        </div>
    )
}

export default Page
