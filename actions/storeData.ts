'use server';
import data from '@/w_lib/database';
interface objectType{
    totalQues: number;
      totalScore: number;
      correct: number;
      incorrect: number;
      percentage: number;
      status: string;
}
export const storedataToDB=async(dataFromFrontend:objectType)=>{
    //Store to Data base logic using push 
    data.push(dataFromFrontend);
    console.log("The Data in DB",data);
    
}
