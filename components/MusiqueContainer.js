import { useState, useEffect } from 'react'
import ButtonBorder from './ButtonBorder'
import gsap from 'gsap'
import { Expo, Linear } from 'gsap'
import ButtonBackgroundColor from './ButtonBackgroundColor'

const MusiqueContainer = (props) => {
    const [open, setIsOpen] = useState(false)
    const [animate, setAnimate] = useState(props.animate)
    const [animateRotate, setAnimateRotate] = useState(props.animateRotate)
    useEffect(() => {
        const video = document.getElementById('video')
        if (open) {
            video.addEventListener('ended', () => {
                setIsOpen(false)
            })
            // video.addEventListener('ended',test())
        }
        // function test () {
        //     setIsOpen(false)
        // }
        let rotateTl = gsap.timeline()
        rotateTl.set('.' + animateRotate, {
            rotate: 0,
            duration: 0,
            ease: Linear.easeNone,
        })
        rotateTl.to('.' + animateRotate, {
            rotate: 360,
            duration: 10,
            ease: Linear.easeNone,
            repeat: -1,
        })
        rotateTl.play()

        return () => {
            // cleanup
        }
    })

    const onMouseEnter = () => {}
    const onClick = () => {
        const animatePlay = async () => {
            let tl = gsap.timeline()
            tl.to('.' + animate, { x: 300, duration: 1, ease: Expo.easeInOut })
            tl.set('.' + animate, { css: { zIndex: 2 } }) // set is basically a 0-second duration tween
            tl.to('.' + animate, { scale: 20, opacity: 0, duration: 3.5 })
            await tl.play()
            tl.seek(0)
            tl.pause(0)
        }
        animatePlay()
        setTimeout(() => {
            setIsOpen(true)
        }, 4000)
    }

    return (
        <>
            <style jsx>{`
                .container {
                    max-width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .contentContainer {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                }
                .contentWrapper {
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .contentWrapper p {
                    font-size: var(--mediumFontSize);
                }
                .buttonContainer {
                }
                .video {
                    max-width: 100%;
                }
                .textContent {
                    font-size: var(----smallFontSize);
                }

                .vinyleContainer {
                    width: 100%;
                    height: 100%;
                    position: relative;
                }
                .coverContainer {
                    z-index: 1;
                    position: relative;
                }
                .cover {
                    width: 1023px;
                }
                .vinyle {
                }
                .vinyleBase,
                .vinyleReflection,
                .vinyleScratch {
                    position: absolute;
                    height: 90%;
                    top: 0px;
                    left: 0px;
                }

                @media screen and (min-width: 1125px) {
                    .container {
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
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

                    .vinyleBase,
                    .vinyleReflection,
                    .vinyleScratch {
                        position: absolute;
                        height: 90%;
                        top: 5%;
                        left: 45%;
                    }
                }
            `}</style>
            <div className="container">
                <div onMouseEnter={onMouseEnter} className="imgContainer">
                    {/* <img src={props.imgSrc}></img> */}
                    <div className="vinyleContainer">
                        <div className="coverContainer">
                            <img
                                className="cover"
                                src="/images/coverTrio.png"
                            ></img>
                        </div>
                        <div className="vinyle">
                            <img
                                className={
                                    'vinyleBase ' +
                                    animate +
                                    ' ' +
                                    animateRotate
                                }
                                src="/images/vinyl-img.png"
                            ></img>
                            <img
                                className={'vinyleReflection ' + animate}
                                src="images/vinyl-reflection.png"
                            ></img>
                            <img
                                className={
                                    'vinyleScratch ' +
                                    animate +
                                    ' ' +
                                    animateRotate
                                }
                                src="images/vinyl-scratches.png"
                            ></img>
                        </div>
                    </div>
                </div>
                {open ? (
                    <>
                        <video
                            id="video"
                            controls
                            autoPlay={true}
                            className="video"
                            src={props.videoSrc}
                        ></video>
                    </>
                ) : (
                    <>
                        <div className="contentContainer">
                            <div className="contentWrapper">
                                <p>{props.title}</p>
                                <p>{props.artiste}</p>
                            </div>
                            <div className="buttonContainer"></div>
                            <p className="textContent">{props.textContent}</p>
                            <ButtonBackgroundColor
                                onClick={onClick}
                                textContent="Regarder le clip"
                            ></ButtonBackgroundColor>
                        </div>
                    </>
                )}
            </div>
        </>
    )
}

export default MusiqueContainer
