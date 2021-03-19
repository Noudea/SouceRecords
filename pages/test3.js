import CardImgRight from '../components/CardImgRight'

const test3 = () => {
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
            `}</style>
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
        </>
    )
}

export default test3
