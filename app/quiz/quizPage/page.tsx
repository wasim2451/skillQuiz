import React from 'react';
import { quiz } from '@/lib/quizQuestions/question'
import QuizCard from '@/components/my-components/QuizCard';

function Page({ name }: { name: string }) {
  const ansobj = {
    totalQues: quiz.length,
    totalScore: 0,
    correct: 0,
    incorrect: 0,
    percentage: 0,
    status: 'pending',
    username:""
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-slate-100 to-slate-200 p-4">
      <div className="w-full max-w-md lg:max-w-2xl">
        {/* Card Render */}
        <QuizCard quizes={quiz} initialObj={ansobj} name={name} />
      </div>
    </div>
  );
}

export default Page;