import React from 'react'

interface Props {}

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    return (
      <div className='mt-[5%]'>
        <div className='text-center  flex justify-center items-center text-sm h-5 py-[30px] bg-slate-100'><p>this is a private page </p></div>
        {children}
      </div>
    )
}

export default Layout
