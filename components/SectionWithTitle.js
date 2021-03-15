import Video from './Video'
import {useEffect,useState} from 'react'


const SectionWithTitle = () => {

    // const width
    // const useEffect = () => {

    // }


    return (
        <section>
            <style jsx>{`
                section {
                    padding: 120px 0px;
                }
                .videoContainer {
                    width: 100%;
                    height: 400px;
                    position: relative;
                    overflow: hidden;
                    z-index: 9;
                }
                .image {
                    width:102px;
                    height:48px;
                }
                .article {
                    margin-left: auto;
                    margin-right: auto;
                    width: 87.5%;
                }
                .headerTitle {
                    margin: 0px;
                    color:#fff;
                    font-size:50px;
                    line-height: 1.08349;
                    letter-spacing: -.003em;
                    font-weight:700;
                }
                .text {
                    color : #a1a1a6;
                    font-size:23px;
                }
                .videoWrapper {
                    width: 800px;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%,-50%);
                }
            `}</style>
            <article className='article'>
                <img className='image' src='images/m1_eyebrow__fxvza4sqyfma_large_2x.png'></img>
                <h2 className='headerTitle'>Jamais une puce n’est allée aussi loin.</h2>
                <p className='text'>
                    La voici. Notre première puce conçue spécialement pour le Mac.
                    Le système sur une puce (SoC) M1 conçu par Apple réunit pas
                    moins de 16 milliards de transistors et intègre le processeur
                    central (CPU), le processeur graphique (GPU), le Neural Engine,
                    les E/S et bien d’autres éléments sur un unique et minuscule
                    circuit intégré. Avec des performances étourdissantes, des
                    technologies sur mesure et la meilleure efficacité énergétique
                    du marché
                </p>
                <a>En savoir plus sur la puce M1</a>
            </article>
            <div className="videoContainer">
                <div className="videoWrapper">
                    <Video src="/video/large.mp4"></Video>
                </div>
            </div>
        </section>
    )
}

export default SectionWithTitle
