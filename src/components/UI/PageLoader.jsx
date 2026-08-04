import "../../styles/PageLoader.css";

const PageLoader = () => {

    return (

        <div className="page-loader">

            <div className="page-loader-content">

                <h2>

                    Pato el Pez

                </h2>

                <p>

                    Cargando contenido...

                </p>

                <div className="loader-bar">

                    <span></span>

                </div>

            </div>

        </div>

    );

};

export default PageLoader;