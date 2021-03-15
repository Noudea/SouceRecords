import MusiqueContainer from '../components/MusiqueContainer'

const musiques = () => {
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
                <h2>Nos Musiques</h2>
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
        </>
    )
}

export default musiques
