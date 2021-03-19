import { useEffect } from 'react'
import useState from 'react-usestateref'
import gsap from 'gsap'
const artistes = () => {
    const [width, setWidth] = useState(false)
    const [height, setHeight] = useState(false)
    const [loaded, setLoaded] = useState(false)
    const [container, setContainer, containerRef] = useState('kyle')
    useEffect(() => {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight - 120)

        window.addEventListener('resize', () => {
            setWidth(window.innerWidth)
            setHeight(window.innerHeight - 120)
        })
        console.log(width)
        console.log(height)
        // var iframe = document.getElementById('iframe');
        // // iframe.contentDocument.body.addEventListener('mouseup', Handler);

        //     //         canvas.addEventListener('click', () => {
        //     //       console.log('touch')
        //     // })
        //     if(iframe) {
        //         console.log(iframe.contentDocument.document.querySelector("body > div > canvas"))
        //     }

        // setContainer(true)
        // if (container == 'kyle') {
        //     gsap.to('.kyle', { opacity: 1, duration: 2 })
        // }
        // if (container == 'sam') {
        //     gsap.to('.sam', { opacity: 1, duration: 2 })
        // }
        // if (container == 'chadna') {
        //     gsap.to('.chadna', { opacity: 1, duration: 2 })
        // }
        // if (container == 'doums') {
        //     gsap.to('.doums', { opacity: 1, duration: 2 })
        // }

        if (containerRef.current == 'kyle') {
            gsap.to('.kyle', { opacity: 1, duration: 2 })
        }
        if (containerRef.current == 'sam') {
            gsap.to('.sam', { opacity: 1, duration: 2 })
        }
        if (containerRef.current == 'chadna') {
            gsap.to('.chadna', { opacity: 1, duration: 2 })
        }
        if (containerRef.current == 'doums') {
            gsap.to('.doums', { opacity: 1, duration: 2 })
        }

        console.log(containerRef.current)
        const iframe = document.getElementById('iframe')
        if (iframe) {
            iframe.onload = () => {
                console.log('iframe is completely loaded')
                iframe.contentWindow.window.document
                    .getElementById('container')
                    .addEventListener('click', () => {
                        console.log('super cool')
                        console.log(containerRef.current)
                        if (containerRef.current == 'kyle') {
                            console.log('1')
                            setContainer('sam')
                        } else if (containerRef.current == 'sam') {
                            console.log('2')
                            setContainer('chadna')
                        } else if (containerRef.current == 'chadna') {
                            console.log('3')
                            setContainer('doums')
                        } else if (containerRef.current == 'doums') {
                            console.log('4')
                            setContainer('kyle')
                        }
                    })
                // iframe.contentWindow.window.document
                //     .getElementById('container')
                //     .addEventListener('click', fadeAnimation, false)
            }
        }

        // const fadeAnimation = () => {
        //     console.log(container)
        //     if (container == 'kyle') {
        //         setContainer('sam')
        //     }
        //     if (container == 'sam') {
        //         setContainer('chadna')
        //     }
        //     if (container == 'chadna') {
        //         setContainer('doums')
        //     }
        //     if (container == 'doums') {
        //         setContainer('kyle')
        //     }
        // }
        // function querySelectorAllInIframes(selector) {
        //     let elements = []

        //     const recurse = (contentWindow = window) => {
        //         const iframes = contentWindow.document.body.querySelectorAll(
        //             'iframe'
        //         )
        //         iframes.forEach((iframe) => recurse(iframe.contentWindow))
        //             console.log(contentWindow.document.body.querySelectorAll('frame'))
        //         elements = elements.concat(
        //             contentWindow.document.body.querySelectorAll(selector)
        //         )
        //     }

        //     recurse()

        //     return elements
        // }

        // let el = querySelectorAllInIframes('body > div > canvas')
        // console.log(el)

        setLoaded(true)

        return () => {
            //      if (iframe) {
            //     iframe.onload = () => {
            //    iframe.removeEventListener("click", fadeAnimation, true)
            //     }}
        }
    })
    return (
        <>
            <style jsx>{`
                h2 {
                    font-size: var(--bigFontSize);
                    margin: 32px 0px;
                }
                p {
                    margin: 0px;
                }
                .iframe {
                    width: ${width}px;
                    height: ${height}px;
                }
                .contentContainer {
                    position: absolute;
                    top: 96px;
                    padding: var(--mainPadding);
                    width: 500px;
                }
                .kyle,
                .sam {
                    opacity: 0;
                }
                .kyleTitle {
                    background: radial-gradient(var(--colorHawai), #000);
                    background-size: 100% 200%;
                    background-position: 50% 100%;
                    -webkit-background-clip: text;
                    background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                    .samTitle {
                    background: radial-gradient(var(--colorSam), #000);
                    background-size: 100% 200%;
                    background-position: 50% 100%;
                    -webkit-background-clip: text;
                    background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                .chadnaTitle {
                    background: radial-gradient(var(--colorChadna), #000);
                    background-size: 100% 200%;
                    background-position: 50% 100%;
                    -webkit-background-clip: text;
                    background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                @media screen and (min-width: 1275px) {
                    .contentContainer {
                        position: absolute;
                        top: 96px;
                    }
                }
            `}</style>
            {loaded ? (
                <>
                    <div className="contentContainer">
                        {containerRef.current == 'kyle' ? (
                            <>
                                <div className="kyle ">
                                    <h2 className="kyleTitle">KYLE</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Nulla tristique
                                        molestie suscipit. Quisque sagittis
                                        fermentum velit sagittis fringilla. Sed
                                        at blandit erat, non semper arcu.
                                        Integer vel tempor erat. Sed interdum
                                        vulputate lacus, nec fermentum ex. Ut
                                        eleifend nisl posuere, euismod arcu ut,
                                        maximus urna. Maecenas molestie at elit
                                        sit amet gravida. In quis ex justo.
                                        Proin nunc metus, tincidunt nec erat
                                        ornare, congue maximus nulla.Ut eleifend
                                        nisl posuere, euismod arcu ut, maximus
                                        urna. Maecenas molestie at elit sit amet
                                        gravida. In quis ex justo. Proin nunc
                                        metus, tincidunt nec erat ornare, congue
                                        maximus nulla.
                                    </p>
                                </div>
                            </>
                        ) : null}
                        {containerRef.current == 'sam' ? (
                            <>
                                <div className="sam">
                                    <h2 className="samTitle">SAM</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Nulla tristique
                                        molestie suscipit. Quisque sagittis
                                        fermentum velit sagittis fringilla. Sed
                                        at blandit erat, non semper arcu.
                                        Integer vel tempor erat. Sed interdum
                                        vulputate lacus, nec fermentum ex. Ut
                                        eleifend nisl posuere, euismod arcu ut,
                                        maximus urna. Maecenas molestie at elit
                                        sit amet gravida. In quis ex justo.
                                        Proin nunc metus, tincidunt nec erat
                                        ornare, congue maximus nulla.Ut eleifend
                                        nisl posuere, euismod arcu ut, maximus
                                        urna. Maecenas molestie at elit sit amet
                                        gravida. In quis ex justo. Proin nunc
                                        metus, tincidunt nec erat ornare, congue
                                        maximus nulla.
                                    </p>
                                </div>
                            </>
                        ) : null}
                        {containerRef.current == 'chadna' ? (
                            <>
                                <div className="chadna">
                                    <h2 className="chadnaTitle">CHADNA</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Nulla tristique
                                        molestie suscipit. Quisque sagittis
                                        fermentum velit sagittis fringilla. Sed
                                        at blandit erat, non semper arcu.
                                        Integer vel tempor erat. Sed interdum
                                        vulputate lacus, nec fermentum ex. Ut
                                        eleifend nisl posuere, euismod arcu ut,
                                        maximus urna. Maecenas molestie at elit
                                        sit amet gravida. In quis ex justo.
                                        Proin nunc metus, tincidunt nec erat
                                        ornare, congue maximus nulla.Ut eleifend
                                        nisl posuere, euismod arcu ut, maximus
                                        urna. Maecenas molestie at elit sit amet
                                        gravida. In quis ex justo. Proin nunc
                                        metus, tincidunt nec erat ornare, congue
                                        maximus nulla.
                                    </p>
                                </div>
                            </>
                        ) : null}
                        {containerRef.current == 'doums' ? (
                            <>
                                <div className="doums">
                                    <h2 className="doumsTitle">DOUMS</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Nulla tristique
                                        molestie suscipit. Quisque sagittis
                                        fermentum velit sagittis fringilla. Sed
                                        at blandit erat, non semper arcu.
                                        Integer vel tempor erat. Sed interdum
                                        vulputate lacus, nec fermentum ex. Ut
                                        eleifend nisl posuere, euismod arcu ut,
                                        maximus urna. Maecenas molestie at elit
                                        sit amet gravida. In quis ex justo.
                                        Proin nunc metus, tincidunt nec erat
                                        ornare, congue maximus nulla.Ut eleifend
                                        nisl posuere, euismod arcu ut, maximus
                                        urna. Maecenas molestie at elit sit amet
                                        gravida. In quis ex justo. Proin nunc
                                        metus, tincidunt nec erat ornare, congue
                                        maximus nulla.
                                    </p>
                                </div>
                            </>
                        ) : null}
                    </div>
                    <section>
                        <iframe
                            id="iframe"
                            className="iframe"
                            src="/dist/index.html"
                            name="myiFrame"
                            scrolling="yes"
                            frameBorder="0"
                            marginHeight="0px"
                            marginWidth="0px"
                            height="100%"
                            width="100%"
                            allowFullScreen
                        ></iframe>
                    </section>
                </>
            ) : (
                <></>
            )}
        </>
    )
}

export default artistes
