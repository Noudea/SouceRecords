import { useEffect, useState } from 'react'
import {gsap} from 'gsap'
const NavAudioPlayer = () => {
    const [songSrc, setSongSrc] = useState(
        '/music/yt1s.com -   KYLE FEAT SAM  TRIO CLIP OFFICIEL.mp3'
    )
    const [play, setPlay] = useState(false)

    useEffect(() => {
        const playIconContainer = document.getElementById('play-icon')
        const audioPlayerContainer = document.getElementById(
            'audio-player-container'
        )
        const seekSlider = document.getElementById('seek-slider')
        const volumeSlider = document.getElementById('volume-slider')
        const muteIconContainer = document.getElementById('mute-icon')
        const audioPlayer = document.getElementById('audioPlayer')
    })
    
    const playMusic = () => {
        if (play) {
            audioPlayer.pause()
            setPlay(false)
        }
        if (!play) {
            audioPlayer.play()
            var tl = gsap.timeline({repeat: -1, repeatDelay: 0});
                tl.to(".title", {x: -140, duration: 0});
                tl.to(".title", {x: 140, duration: 8});
                tl.to(".title", {x: -140, duration: 0});
                tl.to(".title", {x: 140, duration: 8});
            tl.play()
            setPlay(true)
        }
    }

    return (
        <>
            <style jsx>{`
                #audio-player-container {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    height: 100%;
                }
                .titleContainer {
                    overflow:hidden;
                    margin: 0 15px;
                }
                .title {
                    font-size: var(--smallSmallFontSize);
                }
                .playPause {
                    width: 35px;
                    height: 35px;
                    fill: white;
                    filter: invert(23%) sepia(35%) saturate(2500%) hue-rotate(145deg) brightness(100%) contrast(101%);
                }
            `}</style>
            <div id="audio-player-container">
                <div className="titleContainer">
                    <p className="title">KYLE FEAT SAM TRIO</p>
                </div>
                {/* <span id="current-time" className="time">0:00</span> */}
                {/* <input type="range" id="seek-slider" max="100" value="0"></input> */}
                {/* <span id="duration" class="time">0:00</span> */}
                {/* <output id="volume-output">100</output> */}
                {/* <input type="range" id="volume-slider" max="100" value="100"></input> */}
                {play ? (
                    <>
                        <img
                            className="playPause"
                            onClick={playMusic}
                            src="/svg/pause-circle.svg"
                        ></img>
                    </>
                ) : (
                    <>
                        <img
                            onClick={playMusic}
                            className="playPause"
                            src="/svg/play-circle.svg"
                        ></img>
                    </>
                )}
                {/* <button id="mute-icon">mute</button> */}
            </div>
            <div className="audioContainer">
                <audio id="audioPlayer" src={songSrc}>
                    Your browser does not support the
                    <code>audio</code> element.
                </audio>
            </div>
        </>
    )
}

export default NavAudioPlayer
