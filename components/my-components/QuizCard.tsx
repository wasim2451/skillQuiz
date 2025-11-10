'use client';
import React, { useEffect, useState , useTransition } from 'react';
import { storedataToDB } from '@/actions/storeData';
import { useRouter } from 'next/router';
type QuizItem = {
  id: number;
  question: string;
  correctAns: string;
  options: string[];
};

type AnsObj = {
  totalQues: number;
  totalScore: number;
  correct: number;
  incorrect: number;
  percentage: number;
  status: string;
  username:string;
};

function QuizCard({
  quizes,
  name,
  initialObj,
}: {
  quizes: QuizItem[];
  name: string;
  initialObj: Object;
}) {
  const [userAns, setUserAns] = useState<{ id: number; ans: string }[]>([]);
  const[userName,setUserName]=useState<string>("");
  const[names,setName]=useState<string>("");
  const [index, setIndex] = useState(0);
  const [ansObj, setAnsObj] = useState<AnsObj>({

    totalQues: 0,
    totalScore: 0,
    correct: 0,
    incorrect: 0,
    percentage: 0,
    status: '',
    username:""
  });
  const [showResult, setShowResult] = useState(false);
  const[isPending,startTransition]=useTransition();
  const[buttonAbled,setButtonAbled]=useState(false);
  const router=useRouter();

  useEffect(() => {
    console.log('User Answers:', userAns);
  }, [userAns]);

  useEffect(() => {
    console.log('Updated Result:', ansObj);
  }, [ansObj]);

  function handleEachOption(id: number, ans: string) {
    setUserAns((prev) => {
      const filtered = prev.filter((item) => item.id !== id);
      return [...filtered, { id, ans }];
    });
  }

  function handleSubmit() {
    let totalQues = quizes.length;
    let totalScore = quizes.length * 10;
    let correct = 0;
    let incorrect = 0;

    for (let i = 0; i < userAns.length; i++) {
      const item = userAns[i];
      const quizItem = quizes.find((q) => q.id === item.id);
      if (quizItem && item.ans === quizItem.correctAns) {
        correct++;
      } else {
        incorrect++;
      }
    }

    const score = correct * 10;
    const percentage = Math.floor((score / totalScore) * 100);
    const status = percentage > 70 ? 'Passed' : 'Failed';
    const finalObj={totalQues,
      totalScore,
      correct,
      incorrect,
      percentage,
      status,
      username:userName
    }
    setAnsObj(finalObj);
    setShowResult(true);
    startTransition(async()=>{
        await storedataToDB(finalObj);
    })
}
    

  function handleRetakeQuiz() {
    setUserAns([]);
    setIndex(0);
    setShowResult(false);
    setAnsObj({
      totalQues: 0,
      totalScore: 0,
      correct: 0,
      incorrect: 0,
      percentage: 0,
      status: '',
      username:''
    });
  }

  const handleDashboard=()=>{
        router.push('/quiz/DashboardPage/');
  }

  // Show result screen
  if (showResult && ansObj.status) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 flex flex-col gap-5 animate-fadeIn">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
            Quiz Complete! 🎉
          </h2>
          <p className="text-gray-600">Here are your results, {names || 'User'}</p>
        </div>

        <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-6">
          <div className="grid grid-cols-2 gap-4 text-sm sm:text-base">
            <div className="text-gray-600">Total Questions:</div>
            <div className="font-semibold text-gray-800">{ansObj.totalQues}</div>
            
            <div className="text-gray-600">Correct Answers:</div>
            <div className="font-semibold text-green-600">{ansObj.correct}</div>
            
            <div className="text-gray-600">Incorrect Answers:</div>
            <div className="font-semibold text-red-600">{ansObj.incorrect}</div>
            
            <div className="text-gray-600">Score Percentage:</div>
            <div className="font-semibold text-gray-800">{ansObj.percentage}%</div>
          </div>

          <div className="mt-6 text-center">
            <div className={`inline-block px-6 py-3 rounded-full font-bold text-lg ${
              ansObj.status === 'Passed' 
                ? 'bg-green-100 text-green-700' 
                : 'bg-red-100 text-red-700'
            }`}>
              {ansObj.status === 'Passed' ? '✅ Passed' : '❌ Failed'}
            </div>
          </div>
        </div>

        <button
          onClick={handleRetakeQuiz}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02]"
        >
          Retake Quiz
        </button>
        <button
          onClick={handleDashboard}
          className="w-full bg-green-400 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02]"
        >
          Go to Dashboard
        </button>
      </div>
    );
  }

  // Show quiz screen
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 flex flex-col gap-5 mt-[10vh]">
      {/* Header */}
      <div className="text-center border-b pb-4">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
          Welcome {names || 'User'} 👋
        </h2>
        <p className="text-gray-500 text-sm sm:text-base mt-1">
          Best of luck for your quiz!
        </p>
        <label htmlFor="name">Enter your Name </label>
        <input type="text" value={userName}
        placeholder='Enter your Name here ...'
        onChange={(e)=>setUserName(e.target.value)}
        disabled={buttonAbled}
        className='bg-yellow-50 rounded-xl p-4 border-1 placeholder-gray-500'
        />
        <button onClick={()=>{
            setName(userName);
            setButtonAbled(true);
        }}
        disabled={buttonAbled}
        className='bg-orange-400 text-white font-medium p-3 ml-1 rounded-xl'
        >Submit Name</button>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className="bg-blue-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${((index + 1) / quizes.length) * 100}%` }}
        />
      </div>

      {/* Question */}
      <div className="text-left">
        <p className="text-gray-500 font-medium text-sm">
          Question {index + 1} of {quizes.length}
        </p>
        <p className="mt-3 text-gray-900 text-lg sm:text-xl font-semibold leading-relaxed">
          {quizes[index].question}
        </p>
      </div>

      {/* Options */}
      <div className="flex flex-col gap-3 mt-2">
        {quizes[index].options.map((option, i) => {
          const isSelected = userAns.find(
            (a) => a.id === quizes[index].id && a.ans === option
          );

          return (
            <button
              key={i}
              onClick={() => handleEachOption(quizes[index].id, option)}
              className={`p-3 sm:p-4 rounded-lg text-sm sm:text-base font-medium border-2 transition-all duration-200 text-left hover:shadow-md transform hover:scale-[1.01] ${
                isSelected
                  ? 'bg-blue-500 text-white border-blue-500 shadow-md'
                  : 'bg-white hover:bg-blue-50 border-gray-200 hover:border-blue-300 text-gray-700'
              }`}
            >
              <span className="mr-3 font-bold">{String.fromCharCode(65 + i)}.</span>
              {option}
            </button>
          );
        })}
      </div>

      {/* Answer indicator */}
      <div className="text-center text-sm text-gray-500">
        {userAns.find(a => a.id === quizes[index].id) ? 
          '✓ Answer selected' : 
          'Please select an answer'
        }
      </div>

      {/* Navigation */}
      <div className="grid grid-cols-2 gap-3">
        <button
          className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm sm:text-base font-semibold rounded-lg py-2.5 sm:py-3 px-4 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => setIndex((prev) => Math.max(0, prev - 1))}
          disabled={index === 0}
        >
          ← Previous
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white text-sm sm:text-base font-semibold rounded-lg py-2.5 sm:py-3 px-4 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => setIndex((prev) => Math.min(quizes.length - 1, prev + 1))}
          disabled={index === quizes.length - 1}
        >
          Next →
        </button>
      </div>

      {/* Submit */}
      {index === quizes.length - 1 && (
        <button
          className={`w-full font-bold text-sm sm:text-base py-3 sm:py-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] ${
            userAns.length === quizes.length
              ? 'bg-green-500 hover:bg-green-600 text-white'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
          onClick={handleSubmit}
          disabled={userAns.length !== quizes.length}
        >
          {userAns.length === quizes.length 
            ? '🎯 Submit Quiz' 
            : `Answer all questions (${userAns.length}/${quizes.length})`}
        </button>
      )}
    </div>
  );
}

export default QuizCard;