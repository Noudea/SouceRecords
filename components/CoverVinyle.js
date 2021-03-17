import gsap from 'gsap'
import { Linear } from 'gsap'
import { Power4 ,Expo,Power2,Elastic,Bounce } from 'gsap'

import { useState, useEffect } from 'react'

const CoverVinyle = (props) => {
    useEffect(() => {
        // var tl = gsap.timeline({repeat: -1, repeatDelay: 0})
        gsap.to('.vinyleBase', {
            rotate: 360,
            duration: 5,
            ease: Linear.easeNone,
            repeat: -1,
        })
        
        // var tl2 = gsap.timeline({repeat: -1, repeatDelay: 0})
        // .to('.vinyleReflection',{rotate : 360,duration : 1})
        // var tl3 = gsap.timeline({repeat: -1, repeatDelay: 0})
        gsap.to('.vinyleScratch', {
            rotate: 360,
            duration: 5,
            ease: Linear.easeNone,
            repeat: -1,
        })
        console.log('test',props.animate)
        //gsap.to('.vinyleReflection',{rotate : 360,duration : 5,ease:Linear.easeNone,repeat : -1})
        // tl.play()
        // tl2.play()
        // tl3.play()
    })

        if(props.animate) {
            console.log('animate')
            const animate = async() => {
                let tl = gsap.timeline()
                tl.to('.animate',{x:300,duration:1,ease: Expo.easeInOut})
                tl.to('.animate',{scale:20,opacity:0,duration:3.5})
                await tl.play()
                tl.pause(0)
            }
            animate()
            // gsap.to('.vinyleReflection',{x:200,duration:2})
            // gsap.to('.vinyleScratch',{x:200,duration:2})
        }

    const showAlert = () => {
        alert('Hello World');
    }

    return (
        <>
            <style jsx>{`
                .container {
                    width: 100%;
                    height: 100%;
                    position: relative;
                }
                .coverContainer {
                    z-index: 1;
                    position: relative;
                }
                .cover {
                    width:1023px;
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
                <div className="coverContainer">
                    <img className='cover' src="/images/coverTrio.png"></img>
                </div>
                <div className="vinyle">
                    <img
                        className="vinyleBase animate"
                        src="/images/vinyl-img.png"
                    ></img>
                    <img
                        className="vinyleReflection animate"
                        src="images/vinyl-reflection.png"
                    ></img>
                    <img
                        className="vinyleScratch animate"
                        src="images/vinyl-scratches.png"
                    ></img>
                </div>
            </div>
        </>
    )
}

export default CoverVinyle
