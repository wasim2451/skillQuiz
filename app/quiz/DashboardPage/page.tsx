'use client';

import React, { useEffect, useState } from 'react';
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
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(Math.ceil(allUsers.length / 5));
    const [pagesArr, setPageArr] = useState<Array<number>>([])

    useEffect(() => {
        //Everytime allUsers will change-> totalPages should change 
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

    //Pagination functionality 
    const handlePageFun = (pageNo: number) => {
        setCurrentPage(pageNo);
        let startIndex = (pageNo - 1) * 5;
        let endIndex = (startIndex + 5);
        let tempArr = allUsers.slice(startIndex, endIndex);
        setSearchItems(tempArr);
    }
    const handleNextOrPrev = (type: string) => {
        if (type == 'next' && currentPage >= 1 && currentPage < totalPages) {
            handlePageFun(currentPage + 1);
        } else if (type == 'prev' && currentPage > 1 && currentPage <= totalPages) {
            handlePageFun(currentPage - 1);
        }
    }

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
            <div className="max-w-[300px] mx-auto mt-4 mb-6">
                <input
                    type="text"
                    placeholder="Search Names"
                    className="w-full p-3 bg-red-100 border-red-400 border rounded font-mono placeholder-gray-600"
                    onChange={(e) => searchFunc(e.target.value.trim())}
                />
            </div>
            <div className="flex md:hidden justify-between items-center gap-3 mt-4 px-4 py-3 bg-white rounded-xl shadow-md mb-4">
                {/* Previous Button */}
                <button
                    onClick={() => handleNextOrPrev("prev")}
                    disabled={currentPage == 1}
                    className={`
            flex items-center justify-center
            w-20 h-10 rounded-lg font-semibold
            transition-all duration-200
            ${currentPage == 1
                            ? 'bg-gray-100 text-gray-300 cursor-not-allowed'
                            : 'bg-gradient-to-r from-blue-500 to-blue-600 text-white active:scale-95 shadow-md'
                        }
        `}
                >
                    <span className="text-lg">←</span>
                    <span className="ml-1 text-xs">Prev</span>
                </button>

                {/* Page Indicator */}
                <div className="flex flex-col items-center justify-center min-w-[80px]">
                    <div className="text-xs text-gray-500 font-medium">Page</div>
                    <div className="flex items-center gap-1">
                        <span className="text-xl font-bold text-blue-600">{currentPage}</span>
                        <span className="text-gray-400">/</span>
                        <span className="text-sm text-gray-600">{totalPages}</span>
                    </div>
                </div>

                {/* Next Button */}
                <button
                    onClick={() => handleNextOrPrev("next")}
                    disabled={totalPages == currentPage}
                    className={`
            flex items-center justify-center
            w-20 h-10 rounded-lg font-semibold
            transition-all duration-200
            ${totalPages == currentPage
                            ? 'bg-gray-100 text-gray-300 cursor-not-allowed'
                            : 'bg-gradient-to-r from-blue-500 to-blue-600 text-white active:scale-95 shadow-md'
                        }
        `}
                >
                    <span className="mr-1 text-xs">Next</span>
                    <span className="text-lg">→</span>
                </button>
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
                        p-4 md:p-[30px] 
                        rounded-lg
                      bg-gray-50
                    "
                >
                    <span className='font-mono'>Page {currentPage}</span>
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
                <div className="
                            bg-white rounded-xl w-full 
                            border-[3px] border-slate-200 
                            p-4 sm:p-6 md:p-[40px] 
                            my-4 md:my-[30px]
                            ">

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
            {/* ✅ DESKTOP BOTTOM PAGINATION (hidden on mobile) */}
            <div className="hidden md:flex justify-center items-center gap-2 my-6">
                <button
                    onClick={() => handleNextOrPrev("prev")}
                    disabled={currentPage == 1}
                    className="px-3 py-1 bg-gray-200 rounded disabled:opacity-40"
                >
                    Prev
                </button>

                {pagesArr.map((page, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageFun(page)}
                        className={`px-3 py-1 rounded 
                        ${currentPage === page ? "bg-blue-500 text-white" : "bg-gray-200"}
                     `}
                    >
                        {page}
                    </button>
                ))}

                <button
                    disabled={totalPages == currentPage}
                    onClick={() => handleNextOrPrev("next")}
                    className="px-3 py-1 bg-gray-200 rounded disabled:opacity-40"
                >
                    Next
                </button>
            </div>

        </div>
    );
}

export default Page;
