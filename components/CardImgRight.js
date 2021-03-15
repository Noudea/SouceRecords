import ButtonBorder from './ButtonBorder'

const CardImgRight = (props) => {
    return (
        <>
            <style jsx>{`
                article {
                    background: linear-gradient(
                        to right bottom,
                        ${props.colorTop} 0%,
                        ${props.colorMiddle} 50%,
                        ${props.colorBottom} 100%
                    );
                    margin : var( --bigMargin) 0px;
                    width: 100%;
                    border-radius: 20px;
                    overflow: hidden;
                    display:flex;
                    flex-direction: column;
                }
                {/* .header {
                    font-size: var(--bigFontSize);
                    line-height: 1.21053;
                    font-weight: 600;
                    letter-spacing: 0.012em;
                } */}

                .header2 {
                    font-size: var(--bigBigFontSize);
                    line-height: 1.08349;
                    font-weight: 700;
                    letter-spacing: -0.003em;
                    margin: 0px;
                }

                h2 {
                    font-size: 50px;
                    line-height: 1.08349;
                    font-weight: 700;
                    letter-spacing: -0.003em;
                    color: white;
                    margin: 0px;
                }
                .contentContainer {
                    padding: var(--tile-padding);
                }
                .textContent {
                    font-size: var(--smallFontSize)
                    line-height: 1.4211;
                    font-weight: 600;
                    letter-spacing: 0.012em;
                }
                img {
                    width: 100%;
                    position: absolute;
                    right: -80px;
                    bottom: 0px;
                    width: 400px;

                }
                .imgContainer {
                    width: 100%;
                    position: relative;
                    height: 200px;
                }
                @media screen and (min-width: 1125px) {
                    article {
                        flex-direction: row;
                    }
                    .contentContainer {
                        width: 50%;
                    }
                    .imgContainer {
                        width: 100%;
                        height: 650px;
                    }
                    img {
                        width: 1200px;

                    }
                }
            `}</style>
            <article>
                <div className="contentContainer">
                    <p className="header">{props.header}</p>
                    <p className="header2">{props.header2}</p>
                    <h2>{props.h2}</h2>
                    <p className="textContent">{props.textContent}</p>
                    <ButtonBorder
                        textContent={props.buttonTextContent}
                    ></ButtonBorder>
                </div>
                <div className="imgContainer">
                    <img src={props.imgSrc}></img>
                </div>
            </article>
        </>
    )
}

export default CardImgRight
