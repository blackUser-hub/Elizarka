import React from 'react'
import Upload from './upload'
import NotesHistory from './notes_history'
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
        <NotesHistory />

        {/* Video and Notes Section */}
        <VideoNotes />

        {/* About Section */}
        <About />
    </main>
  )
}

export default Main
