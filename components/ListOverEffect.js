import { useEffect, useState } from 'react'

const ListOverEffect = () => {

    const [imgSrc,setImgSrc] = useState('')
    const [isOpen,setIsOpen] = useState(false)
    const [position,setPosition] = useState({x : 0, y : 0})
    useEffect(() => {
        var x = null
        var y = null
        // document.addEventListener('mousemove', onMouseUpdate, false);
        // document.addEventListener('mouseenter', onMouseUpdate, false);

        //     function onMouseUpdate(e) {
        //     x = e.pageX;
        //     y = e.pageY;
        //     console.log(x, y);
        //     }

        //     function getMouseX() {
        //     return x;
        //     }

        //     function getMouseY() {
        //     return y;
        // }
    })
    const onMouseEnter = (e) => {
        var x = null
        var y = null
        onMouseUpdate(e)
        function onMouseUpdate(e) {
            x = e.pageX
            y = e.pageY
            setPosition({x : x, y: y})
        }
        function getMouseX() {
            return x
        }

        function getMouseY() {
            return y
        }
        setImgSrc(e.target.dataset.imgsrc)
    }

    const onMouseLeave = () => {
        setPosition({x : 0, y: 0})
        setImgSrc('')
    }
    return (
        <>
            <style jsx>{`

                .line {
                      text-decoration: line-through;
                }
                .container {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    margin-bottom:50px;
                }
                .wrapper {
                    width: 100%;
                    justify-content: center;
                    text-align: center;
                }

                .container1:last-child {
                    margin-bottom: 0px;
                }
                p {
                    font-size: var(--mediumFontSize);
                }
                img {
                    position:absolute;
                    top : ${position.y}px;
                    left : ${position.x}px;
                    max-width:300px;
                    transform: translate(-50%,-150%);
                }
                @media screen and (min-width: 768px) {
                    .container {
                       margin-bottom:96px;
                    }
                    img {
                        position:absolute;
                        top : ${position.y}px;
                        left : ${position.x}px;
                        max-width:500px;
                        transform: translate(-50%,-120%);
                    }
                }
                @media screen and (min-width: 1440px) {
                    img {
                        position:absolute;
                        top : ${position.y}px;
                        left : ${position.x}px;
                        max-width:700px;
                        transform: translate(50px,-50%);
                    }
                    .container {
                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                        align-items: center;
                        margin-bottom:120px;
                    }
                    .container1 {
                        width: 50%;
                    }
                    .container2 {
                        width: 50%;
                    }
                }
            `}</style>
            <div className="container">
                <img src={imgSrc}></img>
                <div className="container1 wrapper">
                    <p data-imgsrc='/images/unknown.png' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        Kyle Anderson
                    </p>
                    <p data-imgsrc='/images/samGun.png' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>Sam Hopkins</p>
                    <p data-imgsrc='/images/santana.png' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>Santana Martinez Diaz</p>
                    <p data-imgsrc='/images/106.png' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>Laure Pierce</p>
                    <p data-imgsrc='/images/evagomez.png' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>Eva Gomez</p>
                    <p data-imgsrc='#' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>Daddy</p>
                    <p className='line' data-imgsrc='/images/cacahuete.png' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>Cacahuete</p>
                    <p className='line' data-imgsrc='/images/kofee.png' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>Kofee</p>

                </div>
                <div className="container2 wrapper">
                    <p data-imgsrc='/images/lindelof.png' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >Leif Lindelof</p>
                    <p data-imgsrc='/images/santaCruz2.png' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >Santacruz</p>
                    <p data-imgsrc='/images/shadna3.png' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >Shadna</p>
                    <p data-imgsrc='/images/#.png' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >King</p>
                    <p data-imgsrc='/images/#.png' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >Guirmala</p>
                    <p data-imgsrc='/images/caitlyn.png' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >Caitlyn</p>
                    <p data-imgsrc='/images/mia.png' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >Mia</p>
                    <p className='line' data-imgsrc='/images/milano.png' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>Milano</p>
                </div>
            </div>
        </>
    )
}

export default ListOverEffect
