const ButtonBackgroundColor = (props) => {
    return (
        <>
            <style jsx>{`
                button {
                    padding: 9px 19px;
                    text-align: left;
                    background-color: var(--colorHawai);
                    border-radius: 100px;
                    border: 2px white var(--colorHawai);
                    font-weight: 600;
                    font-size: 17px;
                    color: white;
                    margin: 6px 0px 30px 0px;
                    cursor: pointer;
                }
            `}</style>
            <button onClick = {props.onClick}>{props.textContent}</button>
        </>
    )
}

export default ButtonBackgroundColor
