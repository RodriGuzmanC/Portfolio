// TarjetaServicios.jsx
import 'boxicons';

const TarjetaServicio = ({ titulo, descripcion, icono }) => {
  return (
    <div className="servicios__tarjeta flex flex-col items-center">
      <box-icon name={icono} size="cssSize" class="iconos-tarjeta-servicio"></box-icon>
      <div className="servicios__tarjeta-contenido flex flex-col gap-5 text-center mt-5">
        <h3 className="medium--h3">{titulo}</h3>
        <p className="regular--h4">{descripcion}</p>
      </div>
    </div>
  );
};

export default TarjetaServicio;
