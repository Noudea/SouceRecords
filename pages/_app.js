import NavBar from '../components/Navbar'
import '../styles/globals.css'

import { useState, useEffect } from 'react'
import FullWindow from '../components/FullWindow'
import PageRenderContext from '../contexts/PageRenderContext'
import Spotify from '../components/spotify/Spotify'

function MyApp({ Component, pageProps }) {
    const [isloading, setIsLoading] = useState(false)
    const [welcome, setWelcome] = useState(true)
    const [settings, setSettings] = useState(false)
    const [wallPapers, setWallPapers] = useState(false)
    const [projects, setProjects] = useState(false)
    const [cocoabunbuns, setCocoabunbuns] = useState(false)
    const [hielo, setHielo] = useState(false)
    const [themes, setThemes] = useState(false)
    const [profile, setProfile] = useState(false)
    const [spotify, setSpotify] = useState(false)
    const [width,setWidth] = useState(false)
    const [height,setHeight] = useState(false)
    const [screenWidth,setScreenWidth] = useState(false);

    useEffect(() => {
        if(window.screen.width < 400) {
            setWidth(window.screen.width+'px')
            setHeight('400px')
        } else {
            setWidth('375px')
            setHeight('812px')
        }
    })


    const value = {
        welcome,
        setWelcome,
        settings,
        setSettings,
        wallPapers,
        setWallPapers,
        projects,
        setProjects,
        cocoabunbuns,
        setCocoabunbuns,
        hielo,
        setHielo,
        themes,
        setThemes,
        profile,
        setProfile,
        spotify,
        setSpotify,
    }

    return (
        <>
            <PageRenderContext.Provider value={value}>
                <NavBar></NavBar>
                <main>
                    {spotify ? (
                        <>
                            {/* <div className='windows'></div> */}
                            <FullWindow
                                width={width}
                                height={height}
                                pageName="Soucesify"
                                background="#010101"
                            >

                                <Spotify></Spotify>
                            </FullWindow>
                        </>
                    ) : (
                        <></>
                    )}
                    <Component {...pageProps} />
                </main>
                )
            </PageRenderContext.Provider>
        </>
    )
}

export default MyApp
