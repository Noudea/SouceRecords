import { useState, useEffect } from 'react'
import ButtonBorder from './ButtonBorder'
import CoverVinyle from './CoverVinyle'

const MusiqueContainer = (props) => {
    const [open, setIsOpen] = useState(false)
    const [animate,setAnimate] = useState(false)

    useEffect(() => {
        const video = document.getElementById('video')
        // video.muted=false;
        if(open) {
            video.addEventListener('ended', () => {
                setIsOpen(false)
            })
        }
    const vinyle = document.getElementsByClassName('vinyle')
    console.log('vinyle',vinyle)
    })

    const onMouseEnter = () => {
    }

    const onClick = () => {

        setAnimate(true)
        // setIsOpen(true)
    }
    return (
        <>
            <style jsx>{`
                .container {
                    max-width:100%;
                    display:flex;
                    flex-direction: column;
                    align-items: center;
                }
                .contentContainer {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    width:100%;
                }
                .contentWrapper {
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .contentWrapper p {
                    font-size:var(--mediumFontSize);
                }
                .buttonContainer {
                }
                .video {
                    max-width:100%;
                }
                .textContent {
                    font-size: var(----smallFontSize );
                }
                @media screen and (min-width: 1125px) {
                    .container {
                        display: flex;
                        flex-direction: row;
                        justify-content:space-between;
                    }
                    .contentContainer {
                        width: 45%;
                        padding: var(--mainPadding);
                        justify-content: space-between;
                    }
                    
                    .contentWrapper {
                    }
                    .imgContainer {
                        width: 40%;
                    }
                }
            `}</style>
            <div className="container">
                <div onMouseEnter={onMouseEnter} className="imgContainer">
                    {/* <img src={props.imgSrc}></img> */}
                    <CoverVinyle animate={animate}></CoverVinyle>
                </div>
                {open ? <>
                    <video id="video" controls autoPlay={true} className="video"  src={props.videoSrc}></video>
                
                </> : <>
                <div className="contentContainer">
                    <div className="contentWrapper">
                        <p>{props.title}</p>
                        <p>{props.artiste}</p>
                    </div>
                    <div className="buttonContainer"></div>
                    <p className='textContent'>
                        {props.textContent}
                    </p>
                    <ButtonBorder
                        onClick={onClick}
                        textContent="Regarder le clip"
                    ></ButtonBorder>
                </div>
                </>}
            </div>
        </>
    )
}

export default MusiqueContainer
