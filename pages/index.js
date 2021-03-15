import Head from 'next/head'
import CardImgRight from '../components/CardImgRight'
import FadeInSection from '../components/FadeInSection'
import { useState, useEffect } from 'react'
import EnVedette from '../components/EnVedette'
import MusiqueContainer from '../components/MusiqueContainer'
import ImgGallery from '../components/ImgGallery'
import ListOverEffect from '../components/ListOverEffect'

export default function Home() {
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        setIsLoaded(true)
    })

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
                .gallery {
                    width: 100%;
                    height: 800px;
                }
            `}</style>
            <Head>
                <title>SouceRecords</title>
                <link rel="icon" href="/favicon.ico" />
                <link
                    rel="preload"
                    href="/fonts/SF-Pro-Display-Regular.otf"
                    as="font"
                    crossOrigin=""
                />
                <link
                    rel="preload"
                    href="/fonts/SF-Pro-Display-Medium.otf"
                    as="font"
                    crossOrigin=""
                />
                <link
                    rel="preload"
                    href="/fonts/SF-Pro-Display-Semibold.otf"
                    as="font"
                    crossOrigin=""
                />
            </Head>
            {/* <Video src= '/videos/yt1s.com -   KYLE FEAT SAM  TRIO CLIP OFFICIEL_v720P.mp4'></Video> */}
            {isLoaded ? (
                <>
                    <section>
                        <FadeInSection></FadeInSection>
                    </section>
                    <section>
                        <h2>En Vedette</h2>
                        <MusiqueContainer
                            imgSrc="/images/coverTrio.png"
                            videoSrc="/videos/yt1s.com -   KYLE FEAT SAM  TRIO CLIP OFFICIEL_v720P.mp4"
                            title="TRIO"
                            artiste="KYLE feat SAM"
                            textContent="Proin volutpat id erat in sodales. Mauris ultrices
                        turpis purus, ac consequat diam iaculis sed. Nullam ut
                        posuere nunc. Etiam eu tortor ultrices elit maximus
                        posuere. Maecenas hendrerit arcu ut augue volutpat
                        lacinia. Fusce laoreet dui ipsum, ac efficitur ipsum
                        commodo in."
                        ></MusiqueContainer>
                    </section>
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
                    </section>
                    <section>
                        <h2>QLF</h2>
                        <ListOverEffect></ListOverEffect>
                        {/* <ImgGallery></ImgGallery> */}
                        <iframe
                            className="gallery"
                            src="/gallery/index.html"
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
