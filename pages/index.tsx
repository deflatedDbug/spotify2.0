import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Sidebar from "../components/Sidebar"
const Home: NextPage = () => {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <main>
        <Sidebar />
        {/* center */}
      </main>
      <div>{ /* player */}</div> 
    </div>
  )
}

export default Home
