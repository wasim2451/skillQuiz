'use client';
import React from 'react'
import { useState, useTransition, useEffect, use } from 'react'
import { getPostById } from '@/actions/serverFetch'
interface Props {
    params: Promise<{ postId: string }>
}

function Page(props: Props) {
    const { postId } = use(props.params);
    const [data, setData] = useState<{ id: number, title: string } | null>(null);
    const [isPending, startTransition] = useTransition();
    useEffect(() => {
        startTransition(async () => {
            const item = await getPostById(postId);
            setData(item);
        })
    }, [postId])
    return (
        <>
            <div className='flex justify-center items-center min-h-screen'>
                <div>
                    <h1 className='text-center text-2xl font-semibold tracking-wider bg-yellow-300 p-3'>Post Details</h1>
                    <div>
                        {isPending ? <p>Loading ...</p> : <>
                            {data !== null && <pre>{data.id}<br />{data.title}</pre>}
                        </>}
                    </div>
                </div>


            </div>

        </>
    )
}

export default Page
