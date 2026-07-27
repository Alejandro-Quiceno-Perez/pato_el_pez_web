import BtnButton from "./BtnButton";

const DocumentCard = ({ document }) => {

    return (

        <article className="document-card">

            <div className="document-icon">

                📄

            </div>

            <div className="document-info">

                <h3>

                    {document.title}

                </h3>

                <p>

                    {document.description}

                </p>

            </div>

            <BtnButton

                component="a"

                href={document.file}

                target="_blank"

                download

                className="btn-documents"

            >

                Descargar Documento

            </BtnButton>

        </article>

    )

}

export default DocumentCard;