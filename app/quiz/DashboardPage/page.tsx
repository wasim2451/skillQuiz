'use client';

import React, { useEffect, useState } from 'react';
import data from '@/w_lib/results.json';
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
    const sorted = [...data].sort((a, b) => b.percentage - a.percentage);
    const [allUsers] = useState<Result[]>(sorted);
    const [currentUser, setCurrentUser] = useState<Result | null>(null);
    const [searchItems, setSearchItems] = useState(allUsers);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(Math.ceil(allUsers.length / 5));
    const [pagesArr, setPageArr] = useState<Array<number>>([]);

    useEffect(() => {
        setTotalPages(Math.ceil(allUsers.length / 5));
        setPageArr(Array.from({ length: totalPages }, (_, i) => i + 1));
    }, [allUsers]);

    useEffect(() => {
        showAllResults();
    }, []);

    const showAllResults = () => {
        setCurrentUser(null);
        handlePageFun(1);
    };

    const handlePageFun = (pageNo: number) => {
        setCurrentPage(pageNo);
        let startIndex = (pageNo - 1) * 5;
        let endIndex = startIndex + 5;
        let tempArr = allUsers.slice(startIndex, endIndex);
        setSearchItems(tempArr);
    };

    const handleNextOrPrev = (type: string) => {
        if (type === 'next' && currentPage < totalPages) handlePageFun(currentPage + 1);
        else if (type === 'prev' && currentPage > 1) handlePageFun(currentPage - 1);
    };

    const showUser = (username: string) => {
        const user = allUsers.find((u) => u.username === username) || null;
        setCurrentUser(user);
    };

    const searchFunc = (item: string) => {
        let tempArr = allUsers.filter((i: Result) => i.username.toLowerCase().includes(item.toLowerCase()));
        setSearchItems(tempArr.length === 0 ? [] : tempArr);
    };

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
        <div
            className="relative min-h-screen bg-gradient-to-br from-indigo-50 via-blue-100 to-purple-100 overflow-hidden"
        >
            {/* Subtle Background Image */}
            <div className="absolute inset-0 bg-[url('/dashboard-bg.svg')] bg-cover bg-center opacity-20 -z-10"></div>

            <div className="mt-[15vh] px-4">
                <div className="max-w-[300px] mx-auto mt-4 mb-6">
                    <input
                        type="text"
                        placeholder="Search Names"
                        className="w-full p-3 bg-white/70 border border-blue-300 rounded-xl font-mono placeholder-gray-600 shadow-sm focus:ring-2 focus:ring-blue-400"
                        onChange={(e) => searchFunc(e.target.value.trim())}
                    />
                </div>

                <div className="flex md:hidden justify-between items-center gap-3 mt-4 px-4 py-3 bg-white/70 backdrop-blur-sm rounded-xl shadow-md mb-4 border border-blue-100">
                    <button
                        onClick={() => handleNextOrPrev('prev')}
                        disabled={currentPage === 1}
                        className={`flex items-center justify-center w-20 h-10 rounded-lg font-semibold transition-all duration-200 ${currentPage === 1
                            ? 'bg-gray-100 text-gray-300 cursor-not-allowed'
                            : 'bg-gradient-to-r from-blue-500 to-blue-600 text-white active:scale-95 shadow-md'
                            }`}
                    >
                        ← Prev
                    </button>

                    <div className="text-center text-sm text-gray-700">
                        Page <span className="text-blue-600 font-bold">{currentPage}</span> / {totalPages}
                    </div>

                    <button
                        onClick={() => handleNextOrPrev('next')}
                        disabled={totalPages === currentPage}
                        className={`flex items-center justify-center w-20 h-10 rounded-lg font-semibold transition-all duration-200 ${totalPages === currentPage
                            ? 'bg-gray-100 text-gray-300 cursor-not-allowed'
                            : 'bg-gradient-to-r from-blue-500 to-blue-600 text-white active:scale-95 shadow-md'
                            }`}
                    >
                        Next →
                    </button>
                </div>

                <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6">
                    <div className="md:w-[240px] w-full flex flex-col gap-3 max-h-[75vh] overflow-y-auto p-4 md:p-[30px] rounded-xl bg-white/80 backdrop-blur-md shadow-lg border border-slate-200">
                        <span className='font-mono text-gray-600'>Page {currentPage}</span>
                        <button
                            onClick={showAllResults}
                            className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 p-3 font-semibold rounded-md text-white shadow-md"
                        >
                            Show All Results
                        </button>

                        {searchItems.length > 0 ? searchItems.map((u) => (
                            <button
                                key={u.username}
                                onClick={() => showUser(u.username)}
                                className={`p-3 rounded-md border text-left transition ${currentUser?.username === u.username
                                    ? 'bg-blue-100 border-blue-400 shadow-sm'
                                    : 'bg-gray-50 hover:bg-blue-50 border-gray-200'
                                    }`}
                            >
                                {u.username}
                            </button>
                        )) : (<p className="text-gray-500 text-sm">No Names Matched</p>)}
                    </div>

                    <div className="bg-white/90 backdrop-blur-md rounded-xl w-full border-[3px] border-slate-200 p-4 sm:p-6 md:p-[40px] my-4 md:my-[30px] shadow-lg">
                        {currentUser ? (
                            <>
                                <h2 className="text-xl font-bold mb-4 text-blue-700">
                                    {currentUser.username} — Summary
                                </h2>

                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    <div className="p-4 bg-blue-100 rounded-lg font-medium">Correct: {currentUser.correct}</div>
                                    <div className="p-4 bg-red-100 rounded-lg font-medium">Incorrect: {currentUser.incorrect}</div>
                                    <div className="p-4 bg-green-100 rounded-lg font-medium">Percentage: {currentUser.percentage}%</div>
                                    <div className={`p-4 rounded-lg font-medium col-span-2 ${currentUser.status === 'Passed' ? 'bg-green-200' : 'bg-red-200'}`}>
                                        Status: {currentUser.status}
                                    </div>
                                </div>

                                <div className="flex justify-center mt-6">
                                    <div className="w-[250px] sm:w-[300px]">
                                        <Pie data={singleUserChartData!} />
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <h2 className="text-xl font-bold mb-4 text-indigo-700">All Users Summary</h2>

                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    <div className="p-4 bg-yellow-100 rounded-lg font-medium">Total Users: {allUsers.length}</div>
                                    <div className="p-4 bg-green-100 rounded-lg font-medium">Passed: {allPassed}</div>
                                    <div className="p-4 bg-red-100 rounded-lg font-medium">Failed: {allFailed}</div>
                                    <div className="p-4 bg-blue-100 rounded-lg font-medium">Total Correct: {totalCorrect}</div>
                                    <div className="p-4 bg-orange-100 rounded-lg font-medium">Total Incorrect: {totalIncorrect}</div>
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

                <div className="hidden md:flex justify-center items-center gap-2 my-6">
                    <button onClick={() => handleNextOrPrev('prev')} disabled={currentPage === 1} className="px-3 py-1 bg-gray-200 rounded disabled:opacity-40">
                        Prev
                    </button>

                    {pagesArr.map((page, index) => (
                        <button
                            key={index}
                            onClick={() => handlePageFun(page)}
                            className={`px-3 py-1 rounded ${currentPage === page ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                        >
                            {page}
                        </button>
                    ))}

                    <button disabled={totalPages === currentPage} onClick={() => handleNextOrPrev('next')} className="px-3 py-1 bg-gray-200 rounded disabled:opacity-40">
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Page;
