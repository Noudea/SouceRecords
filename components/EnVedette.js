import { useState, useEffect } from 'react'
import ButtonBorder from './ButtonBorder'

const EnVedette = () => {
    const [open, setIsOpen] = useState(false)

    useEffect(() => {
        const video = document.getElementById('video')
        if(open) {
            video.addEventListener('ended', () => {
                setIsOpen(false)
            })
        }
    })

    const onClick = () => {
        setIsOpen(true)
    }
    return (
        <>
            <style jsx>{`
                .contentContainer {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                .contentWrapper {
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .buttonContainer {
                }
                .video {
                    max-width:100%;
                }
                @media screen and (min-width: 1125px) {
                    .container {
                        display: flex;
                        flex-direction: row;
                    }
                    .contentContainer {
                        width: 50%;
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
                <div className="imgContainer">
                    <img src="/images/coverTrio.png"></img>
                </div>
                {open ? <>
                    <video id="video" autoPlay={true} className="video"  src='/videos/yt1s.com -   KYLE FEAT SAM  TRIO CLIP OFFICIEL_v720P.mp4'></video>
                
                </> : <>
                <div className="contentContainer">
                    <div className="contentWrapper">
                        <p>TRIO</p>
                        <p>KYLE feat SAM</p>
                    </div>
                    <div className="buttonContainer"></div>
                    <p>
                        Proin volutpat id erat in sodales. Mauris ultrices
                        turpis purus, ac consequat diam iaculis sed. Nullam ut
                        posuere nunc. Etiam eu tortor ultrices elit maximus
                        posuere. Maecenas hendrerit arcu ut augue volutpat
                        lacinia. Fusce laoreet dui ipsum, ac efficitur ipsum
                        commodo in.
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

export default EnVedette
