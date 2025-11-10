'use server';
//Import the FS Module and Path Module
import {promises as fs} from 'fs';
import path from 'path';
//
interface objectType{
    username:string;
    totalQues: number;
      totalScore: number;
      correct: number;
      incorrect: number;
      percentage: number;
      status: string;
}
export const storedataToDB=async(dataFromFrontend:objectType)=>{
    // Store to Data base logic using push 
    console.log("Data from frontend",dataFromFrontend);
    // Here push the data to JSON File and render the 
    // Dashboard from JSON Itslef. 

    //create a path
    const dataFileFath=path.join(process.cwd(),'w_lib','results.json');
    //Update the Data
    let existingData=[];
    try{
        const fileContents=await fs.readFile(dataFileFath,'utf-8');
        existingData=JSON.parse(fileContents);
        console.log(existingData);
    }



    
}
