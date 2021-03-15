const Bullet = (props) => {
    return (
        <>
            <style jsx>{`

                p{
                    font-size : var(--smallFontSize);
                    color:white;
                    position:relative;
                    top:138px;
                    left:10px;
                }
                .container {

                    height:70px;
                }
                .svgContainer {
                    width: 200px;
                    filter: invert(100%) sepia(8%) saturate(7467%)
                        hue-rotate(185deg) brightness(107%) contrast(107%);
                    transform: rotate(45deg);
                }
            `}</style>
            <div className="container">
            <p>{props.text}</p>
            <div className="svgContainer">
                <img src="/svg/bullet.svg"></img>
            </div>


            </div>
        </>
    )
}

export default Bullet
