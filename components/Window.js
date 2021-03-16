const Window = (props) => {
    return(
        <>
        <style jsx>{`
            .windowWrapper {
                height : ${props.height};
                width : ${props.width};
                padding : 30px 15px 60px 15px;
                background-color : ${props.background};
                border-radius:10px;
                overflow: scroll;
                scrollbarWidth: none;
                scrollbar-width: none;
            }
            `}</style>
            <div className="windowWrapper">
                {props.children}
            </div>
        </>
    )
}

export default Window