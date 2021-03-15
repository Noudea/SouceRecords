const ArtisteCard = (props) => {
    return (
        <>
            <style jsx>{`

                .artisteContainer {
                    display:flex;
                    flex-direction: column;
                    justify-content:center;
                }
                .contentContainer {
                    width:100%;
                }
                @media screen and (min-width: 1024px) {
                                    .contentContainer {
                    width:50%;
                }
                    .artisteContainer {
                        flex-direction: row;
                    }
                    .imgContainer {
                        width:100%;
                    }
                }
                h3 {
                    font-size: var(--bigBigFontSize);
                    line-height: 1.08349;
                    letter-spacing: -0.003em;
                    background: radial-gradient(#ca010b, #000);
                    background-size: 100% 200%;
                    background-position: 50% 100%;
                    -webkit-background-clip: text;
                    background-clip: text;
                    -webkit-text-fill-color: transparent;
                    margin-top: 16px;
                    margin-bottom: 0px;
                    padding-bottom: 12px;
                    text-align: center;
                }
                .text {
                    color: #a1a1a6;
                    text-align: center;
                    margin-left: auto;
                    margin-right: auto;
                    font-size: var(--mediumFontSize);
                    line-height: 1.33341;
                    font-weight: 500;
                    letter-spacing: 0.009em;
                }
            `}</style>
            <div className="artisteContainer">
                <div className='imgContainer'><img src={props.imgSrc}></img></div>
                <div className='contentContainer'>
                    <h3>SAM</h3>
                    <p className="text">{props.textContent}</p>
                </div>
            </div>
        </>
    )
}

export default ArtisteCard
