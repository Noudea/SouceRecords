const LinkButton = () => {
    return (
        <>
            <style jsx>{`
                a {
                    font-family: "SF Pro Text";
                    cursor: pointer;
                    display: inline-block;
                    text-align: center;
                    white-space: nowrap;
                    background: var(--colorHawai);
                    color: #fff;
                    font-size: 12px;
                    line-height: 1.33337;
                    font-weight: 400;
                    letter-spacing: -0.01em;
                    min-width: 23px;
                    padding-left: 11px;
                    padding-right: 11px;
                    padding-top: 4px;
                    padding-bottom: 4px;
                    border-radius: 12px;
                }
            `}</style>
            <a>Acheter</a>
        </>
    )
}

export default LinkButton
