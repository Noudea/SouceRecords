import Head from 'next/head'
import CardImgRight from '../components/CardImgRight'
import FadeInSection from '../components/FadeInSection'


export default function Home() {
    return (
        <>
            <style jsx>{`
                section {
                    max-width: var(--maxWidth);
                    margin: 0 auto;
                    padding: var(--mainPadding);
                }
                h2 {
                    font-size: var(--bigBigFontSize)
                }
            `}</style>
            <Head>
                <title>Create Next App</title>
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
            <section>
                <FadeInSection></FadeInSection>
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
                {/* <ArtisteCard textContent="                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean quis erat gravida, scelerisque elit dignissim,
                    finibus massa. Ut vel enim lorem. Maecenas ipsum dui, porta
                    sit amet lorem sit amet, finibus semper arcu. Nam nec nibh
                    iaculis, eleifend nibh vel, tincidunt est. Integer sit amet
                    lobortis nisi. Proin molestie dictum leo, elementum posuere
                    magna posuere sit amet." imgSrc='/images/samretouche3.png'></ArtisteCard> */}
            </section>
        </>
    )
}
