import { useState, useEffect, useContext } from 'react'
import Draggable from 'react-draggable' // The default
import PageRenderContext from '../contexts/PageRenderContext'
import WindowTopBar from './WindowTopBar'
import Window from './Window'

const FullWindow = (props) => {
    console.log(props)
    const [isVisible, setIsVisible] = useState(true)
    const [width, setWidth] = useState(props.width)
    const [height, setHeight] = useState(props.height)
    const [position, setPosition] = useState('static')
    const [top, setTop] = useState('')
    const [right, setRight] = useState('')
    const [isMinimize,setIsMinimize] = useState(false)
    const [translate, setTranslate] = useState({ x: '0px', y: '0px' })
    const [important, setImportant] = useState('')
    const [isResized, setIsResized] = useState(false)
    const [count, setCount] = useState(0)
    const { settings, setSettings } = useContext(PageRenderContext)
    const { welcome, setWelcome } = useContext(PageRenderContext)
    const { wallPapers, setWallPapers } = useContext(PageRenderContext)
    const { projects, setProjects } = useContext(PageRenderContext)
    const { cocoabunbuns, setCocoabunbuns } = useContext(PageRenderContext)
    const { hielo, setHielo } = useContext(PageRenderContext)
    const { themes, setThemes } = useContext(PageRenderContext)
    const { profile, setProfile } = useContext(PageRenderContext)
    const { spotify, setSpotify } = useContext(PageRenderContext)

    const onMaximizeClick = () => {
        console.log('maximize')
    }

    useEffect(() => {
        setPosition('absolute')
        // setTop('500px')
        // setRight('500px')
        setTop((window.innerHeight / 2)-330 + 'px')
        setRight((window.innerWidth / 2)-187 +'px')
    })
    // const onResizeClick = () => {
    //     if (!isResized) {
    //         setWidth('100vw')
    //         setHeight('100vh')
    //         setPosition('absolute')
    //         setRight('0px')
    //         setTop('0px')
    //         setImportant('!important')
    //         setTranslate({ x: '0px', y: '0px' })
    //         setIsResized(true)
    //         console.log('resize')
    //     } else {
    //         setWidth(props.width)
    //         setHeight(props.height)
    //         setPosition('static')
    //         setIsResized(false)
    //         setImportant('')
    //     }
    // }

    const onCloseClick = (e) => {
        if (props.pageName == 'Settings') {
            setSettings(false)
        }
        if (props.pageName == 'Bienvenue') {
            setWelcome(false)
        }
        if (props.pageName == 'Wallpapers') {
            setWallPapers(false)
        }
        if (props.pageName == 'Projets') {
            setProjects(false)
        }
        if (props.pageName == 'Cocoabunbuns') {
            setCocoabunbuns(false)
        }
        if (props.pageName == 'Themes') {
            setThemes(false)
        }
        if (props.pageName == 'Profil') {
            setProfile(false);
        }
        if (props.pageName == 'Spotify') {
            setSpotify(false);
        }
        if (props.pageName == 'Hielo') {
            setHielo(false);
        }
    }

    const onMinimizeClick = () => {
        console.log('onMinimizeClick')
        if(isMinimize) {
            setIsMinimize(false)
            setHeight('875px')
        } else {
                        setIsMinimize(true)
                       setHeight('100px')
        }
    }
    return (
        <>
            <style jsx>{`
                .windowContainer {
                    z-index:10;
                    position: ${position};
                    top: ${top};
                    right: ${right};
                    transform: translate(${translate.x}, ${translate.y}) ${important};
                    border-radius : 10px;
                }
            `}</style>
            {isVisible ? (
                <Draggable handle=".titleBar" bounds="parent">
                    <div className="windowContainer">
                        <WindowTopBar onCloseClick={onCloseClick} onMinimizeClick={onMinimizeClick} name={props.pageName}></WindowTopBar>
                        <Window
                            height={height}
                            width={width}
                            // padding="30px 15px"
                            background= {props.background}
                            // style={{
                            //     overflow: 'scroll',
                            //     scrollbarWidth: 'none',
                            // }}
                        >
                            {props.children}
                        </Window>
                    </div>
                </Draggable>
            ) : (
                <></>
            )}
        </>
    )
}

export default FullWindow
