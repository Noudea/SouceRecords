const ButtonBorder = (props) => {
    return (
        <>
            <style jsx>{`
                button {
                    padding: 9px 19px;
                    text-align: left;
                    background-color: transparent;
                    border-radius: 100px;
                    border: 2px white solid;
                    font-weight: 600;
                    font-size: 17px;
                    color: white;
                    margin: 6px 0px 30px 0px;
                }
            `}</style>
            <button>{props.textContent}</button>
        </>
    )
}

export default ButtonBorder
