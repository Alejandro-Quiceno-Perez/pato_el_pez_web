

const VideoSection = ({ video }) => {

    return (

        <section className="video-section">


            <div className="video-wrapper">

                <iframe
                    src="https://www.youtube.com/embed/Bui-LWbNQrw"
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />

            </div>

        </section>

    )

}

export default VideoSection;