import PressKitData from "../db/Presskit";
import VideoSection from "../utils/VideoSection";
import DocumentCard from "../utils/DocumentsPresskit";

import "../styles/PressKit.css";

const PressKit = () => {

    return (

        <main className="presskit-page">

            <div className="presskit-container">

                {/*==========================
                    HEADER
                ==========================*/}

                <section className="presskit-header">

                    <span>
                        {PressKitData.subtitle}
                    </span>

                    <h1>
                        {PressKitData.title}
                    </h1>

                    <p>
                        {PressKitData.description}
                    </p>

                </section>

                {/*==========================
                    VIDEO
                ==========================*/}

                <VideoSection
                    video={PressKitData.epk}
                />

                {/*==========================
                    DOCUMENTOS
                ==========================*/}

                <section className="documents-section">

                    <h2>

                        Documentación Oficial

                    </h2>

                    <div className="documents-grid">

                        {

                            PressKitData.documents.map(document => (

                                <DocumentCard

                                    key={document.id}

                                    document={document}

                                />

                            ))

                        }

                    </div>

                </section>

            </div>

        </main>

    )

}

export default PressKit;