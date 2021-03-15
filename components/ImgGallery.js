const ImgGallery = (props) => {
    return (
        <>
            <style jsx>{`
                img {
                    width: 100%;
                }
                .row {
                    display: -ms-flexbox; /* IE10 */
                    display: flex;
                    -ms-flex-wrap: wrap; /* IE10 */
                    flex-wrap: wrap;
                    padding: 0 4px;
                }

                /* Create four equal columns that sits next to each other */
                .column {
                    -ms-flex: 25%; /* IE10 */
                    flex: 25%;
                    max-width: 25%;
                    padding: 0 4px;
                }

                .column img {
                    margin-top: 8px;
                    vertical-align: middle;
                }

                /* Responsive layout - makes a two column-layout instead of four columns */
                @media screen and (max-width: 800px) {
                    .column {
                        -ms-flex: 50%;
                        flex: 50%;
                        max-width: 50%;
                    }
                }

                /* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
                @media screen and (max-width: 600px) {
                    .column {
                        -ms-flex: 100%;
                        flex: 100%;
                        max-width: 100%;
                    }
                }
            `}</style>
            <div>
                <div className="row">
                    <div className="column">
                        <img src="images/QLF.png"></img>
                        <img src="images/qlf5.png"></img>
                        <img src="images/santanaQuad.png"></img>
                        <img src="images/qlf6.png"></img>
                        <img src="images/2Frere.png"></img>
                        <img src="images/QLFQuad.png"></img>
                        <img src="images/caitlyn.png"></img>
                    </div>
                    <div className="column">
                        <img src="images/qlf2.png"></img>
                        <img src="images/trio.png"></img>
                        <img src="images/sam.png"></img>
                        <img src="images/qlfQuad2.png"></img>
                        <img src="images/gamos.png"></img>
                        <img src="images/santaCruz2.png"></img>
                    </div>
                    <div className="column">
                        <img src="images/qlf3.png"></img>
                        <img src="images/qlf8.png"></img>
                        <img src="images/kyleQuad.png"></img>
                        <img src="images/qlfQuad3.png"></img>
                        <img src="images/shadna2.png"></img>
                        <img src="images/samGun.png"></img>
                        <img src="images/lindelof.png"></img>
                    </div>
                    <div className="column">
                        <img src="images/qlf4.png"></img>
                        <img src="images/qlf7.png"></img>
                        <img src="images/leif.png"></img>
                        <img src="images/2frereQuad.png"></img>
                        <img src="images/gamos2.png"></img>
                        <img src="images/106.png"></img>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ImgGallery
