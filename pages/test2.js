import { useEffect, useState } from 'react'
import MyHtml from '../public/dist/myhtml'

const test = () => {



    return (
        <>
            <style jsx>{`
                h2 {
                    font-size: var(--bigFontSize);
                    margin: 32px 0px;
                }
                p {
                    margin: 0px;
                }
                .contentContainer {
                    position: absolute;
                    top: 96px;
                    padding: var(--mainPadding);
                    width: 350px;
                }

                @media screen and (min-width: 1275px) {
                    .contentContainer {
                        position: absolute;
                        top: 96px;
                    }
                }
            `}</style>
            <section className='container'>
                <MyHtml></MyHtml>
            </section>
        </>
    )
}

export default test
