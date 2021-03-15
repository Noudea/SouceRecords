const FadeInSection = () => {
    return (
        <>
            <style jsx>{`
                .FadeInSectionContainer {
                    margin-top: 103px;
                }

                .h1,
                h2,
                .text {
                    margin: 0px;
                    opacity: 0;
                }
                .h1 {
                    animation: fade-in-hero 1.5s ease-out 0.5s 1 forwards;
                    color: #f5f5f7;
                    font-size: var(--mediumFontSize);
                    line-height: 1.16667;
                    font-weight: 600;
                    letter-spacing: 0.009em;
                    text-align: center;
                }
                h2 {
                    animation: fade-in-hero 1.5s ease-out 0.7s 1 forwards;
                    font-size: var(--bigFontSize);
                    line-height: 1.08349;
                    letter-spacing: -0.003em;
                    background: radial-gradient(var(--colorHawai), #000);
                    background-size: 100% 200%;
                    background-position: 50% 100%;
                    -webkit-background-clip: text;
                    background-clip: text;
                    -webkit-text-fill-color: transparent;
                    margin-top: 16px;
                    padding-bottom: 12px;
                    text-align: center;
                }
                .text {
                    animation: fade-in-hero 1.5s ease-out 0.9s 1 forwards;
                    color: #a1a1a6;
                    text-align: center;
                    margin-left: auto;
                    margin-right: auto;
                    font-size: var(--mediumFontSize);
                    line-height: 1.33341;
                    font-weight: 500;
                    letter-spacing: 0.009em;
                }

                .imageTextWrapper {
                    margin-top: 38px;
                    animation: fade-in-hero 1.5s ease-out 1.1s 1 forwards;
                    font-size: var(--mediumFontSize);
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                    text-align: center;
                }
                .imgWrapper {
                    display: flex;
                    justify-content: center;
                    margin-bottom: 16px;
                }
                img {
                    width: 80%;
                    animation: fade-in-hero 1.5s ease-out 0.3s 1 forwards;
                }
                @media screen and (min-width: 768px) {
                    img {
                        width: 60%;
                    }
                }

                @media screen and (min-width: 1024px) {
                    img {
                        width: 40%;
                    }
                }

                .imageTextWrapper p {
                    color: #a1a1a6;
                    margin: 10px 0px;
                }
                .callToActionWrapper {
                    animation: fade-in-hero 1.5s ease-out 1.3s 1 forwards;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    font-size: 21px;
                    color: #fff;
                }
                .callToActionWrapper p {
                    margin: 40px 0px 10px 0px;
                }
                @keyframes fade-in-hero {
                    to {
                        transform: translateY(-50px);
                        opacity: 1;
                    }
                }
            `}</style>
            <article className="FadeInSectionContainer">
                <div className="imgWrapper">
                    <img
                        className="icon"
                        src="images/logo_souce_record_hella_2.png"
                    ></img>
                </div>
                <h1 className="h1">SouceRecords</h1>
                <h2>Pas de souce, mon souce</h2>
                <p className="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean quis erat gravida, scelerisque elit dignissim,
                    finibus massa. Ut vel enim lorem. Maecenas ipsum dui, porta
                    sit amet lorem sit amet, finibus semper arcu. Nam nec nibh
                    iaculis, eleifend nibh vel, tincidunt est. Integer sit amet
                    lobortis nisi. Proin molestie dictum leo, elementum posuere
                    magna posuere sit amet.
                </p>
                {/* <div className="imageTextWrapper">
                    <p>Avec la superpuissance de la puce Apple M1</p>
                </div>
                <div className="callToActionWrapper">
                    <p>A partir de 1449€</p>
                    <a>Regarder l'évènement</a>
                </div> */}
            </article>
        </>
    )
}

export default FadeInSection
