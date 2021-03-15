import {useEffect} from 'react'

const Video = (props) => {

    useEffect(() => {
        const video = document.getElementById('video')
        // video.muted=false;
        console.log(video)
    })
    return(
        <>
        <style jsx>{`
            .video {
                width:100%;
            }
            
            `}</style>
            <video id="video" autoPlay={true} muted className="video"  src={props.src}></video>
        </>
    )
}

export default Video