import React from 'react'
import { Outlet } from 'react-router-dom'
import Upload from './upload'
import VideoNotes from './video_notes'
import About from './about'
import CalendarSection from './calendar'

const Main = () => {
  return (
    <main>
        {/* Calendar Section */}
        <CalendarSection />

        {/* Upload Section */}
        <Upload />

        {/* Notes History */}
        <Outlet />

        {/* Video and Notes Section */}
        <VideoNotes />

        {/* About Section */}
        <About />
    </main>
  )
}

export default Main
