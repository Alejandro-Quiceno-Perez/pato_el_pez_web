import "../../styles/Mantenimiento.css";
import Band from "../../db/Band";
import BtnButton from "../../utils/BtnButton";

const Mantenimiento = () => {
  return (
    <main className="maintenance">
      <div className="maintenance-background">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <section className="maintenance-content">
        {/* LOGO / NOMBRE DE LA BANDA */}
        <div className="maintenance-logo">
          PATO <span>EL PEZ</span>
        </div>

        {/* ICONO */}
        <div className="maintenance-icon">
          <span>⚙</span>
        </div>

        {/* MENSAJE PRINCIPAL */}
        <p className="maintenance-label">SITIO EN MANTENIMIENTO</p>

        <h1>
          VOLVEMOS
          <br />
          <span>PRONTO.</span>
        </h1>

        <p className="maintenance-description">
          Estamos trabajando en algunas actualizaciones para mejorar nuestra
          página.
          <br />
          Mientras tanto, puedes seguir escuchando nuestra música.
        </p>

        {/* LÍNEA DECORATIVA */}
        <div className="maintenance-line">
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* REDES */}
        <div className="maintenance-social">
          {Band.redes.map((red) => (
            <BtnButton
              key={red.nombre}
              component="a"
              href={red.url}
              target="_blank"
            >
              {red.nombre}
            </BtnButton>
          ))}
        </div>

        <p className="maintenance-footer">
          © {new Date().getFullYear()} Pato el Pez
        </p>
      </section>
    </main>
  );
};

export default Mantenimiento;
