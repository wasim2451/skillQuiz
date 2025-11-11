'use client';

import React, { useState } from 'react';
import data from '@/w_lib/results.json';

// CHART IMPORTS
import { Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

type Result = {
    totalQues: number;
    totalScore: number;
    correct: number;
    incorrect: number;
    percentage: number;
    status: string;
    username: string;
};

function Page() {
    // Sort by top performers first
    const sorted = [...data].sort((a, b) => b.percentage - a.percentage);

    const [allUsers] = useState<Result[]>(sorted);
    const [currentUser, setCurrentUser] = useState<Result | null>(null);
    const [searchItems, setSearchItems] = useState(allUsers);
    const showAllResults = () => {
        setCurrentUser(null);
        setSearchItems(allUsers);
    };

    const showUser = (username: string) => {
        const user = allUsers.find((u) => u.username === username) || null;
        setCurrentUser(user);
    };

    const searchFunc = (item: string) => {
        let tempArr = allUsers.filter((i: Result) => i.username.toLowerCase().includes(item.toLowerCase()));
        if (tempArr.length == 0) {
            setSearchItems([]);
        } else {
            setSearchItems(tempArr);
        }

    }

    // ✅ Chart.js data for ALL USERS
    const allPassed = allUsers.filter((u) => u.status === 'Passed').length;
    const allFailed = allUsers.filter((u) => u.status === 'Failed').length;
    const totalCorrect = allUsers.reduce((a, u) => a + u.correct, 0);
    const totalIncorrect = allUsers.reduce((a, u) => a + u.incorrect, 0);

    const allUserChartData = {
        labels: ['Passed', 'Failed'],
        datasets: [
            {
                data: [allPassed, allFailed],
                backgroundColor: ['#4CAF50', '#F44336'],
            },
        ],
    };

    // ✅ Chart.js data for SINGLE USER
    const singleUserChartData = currentUser
        ? {
            labels: ['Correct', 'Incorrect'],
            datasets: [
                {
                    data: [currentUser.correct, currentUser.incorrect],
                    backgroundColor: ['#2196F3', '#FF5722'],
                },
            ],
        }
        : null;

    return (
        <div className="mt-[15vh] px-4">
            {/* Search Bar */}
            <div className='w-[11%] mx-[45%] border-red-400 border-[3px] bg-red-100 rounded-sm'>
                <input type="text" placeholder='Search Names' className='bg-red-100 rounded-sm p-[12px] w-full placeholder-gray-500 font-mono'
                    onChange={(e) => searchFunc(e.target.value.trim())}
                />
            </div>
            {/* MAX WIDTH CENTERED CONTAINER */}
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6">
                {/* LEFT SIDEBAR */}
                <div
                    className="
                    md:w-[240px] w-full 
                    flex flex-col gap-3 
                    max-h-[75vh] 
                    overflow-y-auto 
                    p-[30px]
                    "
                >

                    <button
                        onClick={showAllResults}
                        className="bg-yellow-400 hover:bg-yellow-500 p-3 font-semibold rounded-md"
                    >
                        Show All Results
                    </button>

                    {searchItems.length > 0 ? searchItems.map((u) => (
                        <button
                            key={u.username}
                            onClick={() => showUser(u.username)}
                            className={`p-3 rounded-md border text-left transition
                                    ${currentUser?.username === u.username
                                    ? 'bg-blue-100 border-blue-300'
                                    : 'bg-gray-100 hover:bg-gray-200 border-gray-200'
                                }
                            `}
                        >
                            {u.username}
                        </button>
                    )) : (<p>No Names Matched</p>)}
                </div>

                {/* RIGHT PANEL */}
                <div className="bg-white rounded-xl w-full border-[3px] my-[20px] md:my-[30px] border-slate-200 p-[40px] px-[50px]">

                    {/* ✅ SINGLE USER VIEW */}
                    {currentUser && (
                        <>
                            <h2 className="text-xl font-bold mb-4">
                                {currentUser.username} — Summary
                            </h2>

                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                <div className="p-4 bg-blue-100 rounded-lg font-medium">
                                    Correct: {currentUser.correct}
                                </div>
                                <div className="p-4 bg-red-100 rounded-lg font-medium">
                                    Incorrect: {currentUser.incorrect}
                                </div>
                                <div className="p-4 bg-green-100 rounded-lg font-medium">
                                    Percentage: {currentUser.percentage}%
                                </div>

                                <div
                                    className={`p-4 rounded-lg font-medium col-span-2 ${currentUser.status === 'Passed'
                                        ? 'bg-green-200'
                                        : 'bg-red-200'
                                        }`}
                                >
                                    Status: {currentUser.status}
                                </div>
                            </div>

                            <div className="flex justify-center mt-6">
                                <div className="w-[250px] sm:w-[300px]">
                                    <Pie data={singleUserChartData!} />
                                </div>
                            </div>
                        </>
                    )}

                    {/* ✅ ALL USERS VIEW */}
                    {!currentUser && (
                        <>
                            <h2 className="text-xl font-bold mb-4">All Users Summary</h2>

                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                <div className="p-4 bg-yellow-100 rounded-lg font-medium">
                                    Total Users: {allUsers.length}
                                </div>

                                <div className="p-4 bg-green-100 rounded-lg font-medium">
                                    Passed: {allPassed}
                                </div>

                                <div className="p-4 bg-red-100 rounded-lg font-medium">
                                    Failed: {allFailed}
                                </div>

                                <div className="p-4 bg-blue-100 rounded-lg font-medium">
                                    Total Correct: {totalCorrect}
                                </div>

                                <div className="p-4 bg-orange-100 rounded-lg font-medium">
                                    Total Incorrect: {totalIncorrect}
                                </div>
                            </div>

                            <div className="flex justify-center mt-6">
                                <div className="w-[250px] sm:w-[300px]">
                                    <Pie data={allUserChartData} />
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
            <div className='flex justify-center items-center gap-2'>
                <button>Prev</button>
                <button className=' p-2 bg-blue-300'>1</button>
                <button className=' p-2 bg-blue-300'>2</button>
                <button className=' p-2 bg-blue-300'>3</button>
                <button>Next</button>
            </div>
        </div>
    );
}

export default Page;
