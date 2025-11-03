// actions/serverFetch.ts
'use server'
import {fetchData,fetchByPostId} from '@/lib/fetchData'
export async function getData(){
    const data=await fetchData();
    return data;
}
//This server component can be used by the client 
export async function getPostById(id:string){
    const item=await fetchByPostId(id);
    return item;
}