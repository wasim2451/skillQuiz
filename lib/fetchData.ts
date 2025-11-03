// lib/fetchData.ts
export async function fetchData(){
    const url='https://jsonplaceholder.typicode.com/posts';
    const res=await fetch(url);
    const data=await res.json();
    return data;
}

export async function fetchByPostId(id:string){
    const url=`https://jsonplaceholder.typicode.com/posts/${id}`;
    const res=await fetch(url);
    const data=await res.json();
    return data;
}