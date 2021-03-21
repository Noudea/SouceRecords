import { useEffect } from 'react'
import useState from 'react-usestateref'
import gsap,{Power4} from 'gsap'
import CardImgRight from '../components/CardImgRight'
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
        if(width >= 1024) {
            if (containerRef.current == 'kyle') {
                gsap.to('.kyle', { opacity: 1, duration: 2.5,ease: Power4.easeIn })
            }
            if (containerRef.current == 'sam') {
                gsap.to('.sam', { opacity: 1, duration: 2.5,ease: Power4.easeIn })
            }
            if (containerRef.current == 'chadna') {
                gsap.to('.chadna', { opacity: 1, duration: 2.5,ease: Power4.easeIn })
            }
            if (containerRef.current == 'doums') {
                gsap.to('.doums', { opacity: 1, duration: 2.5,ease: Power4.easeIn })
            }
    
            console.log(containerRef.current)
            const iframe = document.getElementById('iframe')
            if (iframe) {
                iframe.onload = () => {
                    console.log('iframe is completely loaded')
                    iframe.contentWindow.window.document
                        .getElementById('container')
                        .addEventListener('click', fadeAnimation)
                }
            }
        }
        setLoaded(true)
        return () => {
            //      if (iframe) {
            //     iframe.onload = () => {
            //    iframe.removeEventListener("click", fadeAnimation, true)
            //     }}
        }
    })

    const fadeAnimation = () => {
        console.log(iframe)
        // iframe.removeEventListener("click", fadeAnimation)
        if (containerRef.current == 'kyle') {
            setContainer('sam')
        } else if (containerRef.current == 'sam') {
            setContainer('chadna')
        } else if (containerRef.current == 'chadna') {
            setContainer('doums')
        } else if (containerRef.current == 'doums') {
            setContainer('kyle')
        }
    }
    return (
        <>
            <style jsx>{`

                section {
                    max-width: var(--maxWidth);
                    margin: 0 auto;
                }
                h2 {
                    font-size: var(--bigBigFontSize);
                }

                .kyleTitle, .samTitle, .chadnaTitle, .doumsTitle {
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
                .sam,
                .chadna,
                .doums {
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
                {width>=1024 ? <>
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
                                    <h2 className="doumsTitle">DOOMS</h2>
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
                    <div>
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
                    </div>
                
                </> : <>
            <section>
                <h2>Nos Artistes</h2>
                <CardImgRight
                    colorTop="#005c56"
                    colorMiddle="#000000"
                    colorBottom="#000000"
                    header2="KYLE"
                    h2="Lorem ipsum dolor sit"
                    textContent=" Integer sit amet
                    lobortis nisi. Proin molestie dictum leo, elementum posuere
                    magna posuere sit amet."
                    buttonTextContent="Découvrir cet artiste"
                    imgSrc="/images/kyleretouche3.png"
                ></CardImgRight>
                <CardImgRight
                    colorTop="#fd151f"
                    colorMiddle="#000000"
                    colorBottom="#000000"
                    header2="SAM"
                    h2="Lorem ipsum dolor sit"
                    textContent=" Integer sit amet
                    lobortis nisi. Proin molestie dictum leo, elementum posuere
                    magna posuere sit amet."
                    buttonTextContent="Découvrir cet artiste"
                    imgSrc="/images/samretouche3.png"
                ></CardImgRight>
                <CardImgRight
                    colorTop="#fe728e"
                    colorMiddle="#000000"
                    colorBottom="#000000"
                    header2="SHEDNA"
                    h2="Lorem ipsum dolor sit"
                    textContent=" Integer sit amet
                    lobortis nisi. Proin molestie dictum leo, elementum posuere
                    magna posuere sit amet."
                    buttonTextContent="Découvrir cet artiste"
                    imgSrc="/images/shednaRetouche4.png"
                ></CardImgRight>
                {/* <ArtisteCard textContent="                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean quis erat gravida, scelerisque elit dignissim,
                    finibus massa. Ut vel enim lorem. Maecenas ipsum dui, porta
                    sit amet lorem sit amet, finibus semper arcu. Nam nec nibh
                    iaculis, eleifend nibh vel, tincidunt est. Integer sit amet
                    lobortis nisi. Proin molestie dictum leo, elementum posuere
                    magna posuere sit amet." imgSrc='/images/samretouche3.png'></ArtisteCard> */}
            </section>
                
                
                
                
                
                </>}
                </>
            ) : (
                <></>
            )}
        </>
    )
}

export default artistes
