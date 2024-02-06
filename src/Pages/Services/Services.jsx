import React from "react";
import Header from "../../componentes/Header/Header";
import {
  ContainerServicesStyled,
  ServiceStyled,
  MotionServiceStyled,
} from "./ServicesStyles";
import Footer from "../../componentes/Footer/Footer";

const Services = () => {
  return (
    <>
      <Header />
      <ContainerServicesStyled>
        <ServiceStyled>
          <h3>Consulta Nutricional</h3>
          <MotionServiceStyled
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            <ul>
              <li>
                <b>Presencial o a distancia:</b> elegí la opción que vos
                prefieras.
              </li>
              <li>
                <b>Plan de alimentación 100% personalizado:</b> adaptado a tus
                objetivos y costumbres.
              </li>
              <li>
                <b>Seguimiento durante todo el mes:</b> por Whatsapp vas a tener
                el espacio durante 1 mes para sacarte todas las dudas del plan.
              </li>
            </ul>
            <img src="plan-de-alimentacion-1.jpg" alt="plan" />
            <p>
              Aquí podes un modelo de plan de alimentación que se entrega a los
              2 días hábiles posteriores a la consulta. <br /> Se divide en la
              cantidad de comidas que se deben realizar al día y, los
              respectivos ítems de alimentos que se deben incorporar con
              posibles reemplazos e ideas de menú. <br /> A su vez, se adiciona
              una página más de consideraciones a tener en cuenta.
            </p>
          </MotionServiceStyled>
        </ServiceStyled>
        <ServiceStyled>
          <h3>Medición antropométrica</h3>
          <MotionServiceStyled
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            <ul>
              <li>Únicamente presencial.</li>
              <li>
                <b>Método ISAK II:</b> partir de 43 medidas antropométricas,
                vamos a tener un perfil completo de tu composición corporal.
              </li>
              <li>
                <b>Cuantificación del peso:</b> se conoce cuántos Kg de tu peso
                total equivalen a masa muscular, grasa, ósea, etc.
              </li>
              <li>
                <b>Índices antropométricos:</b> nos ofrece índices claves para
                establecer objetivos estéticos.
              </li>

              <li>Es un método ideal para ver progresos.</li>
            </ul>
            <img src="antropometria-1.jpg" alt="plan" />
            <img src="antropometria-2.jpg" alt="plan" />
            <p>
              Este es un modelo de antropometría, como podes observar, nos da
              una gran cantidad de datos. <br /> Desde los resultados de las
              medidas, un gráfico donde conocemos cómo se compone nuestro peso,
              es decir, cuántos Kg se posee de masa muscular, adiposa, ósea,
              residual y de piel. <br />
              También nos permite conocer el gasto energético en reposo y sumado
              a la actividad física que se realice, peso ideal y rango de peso
              ideal. <br /> Por último, también permite conocer nuestro
              somatotipo, es decir, tendencia a qué tipo de cuerpo y composición
              tenemos. <br />
              Como ves, es un estudio super completo! No te pierdas la
              oportunidad de conocer mejor tu cuerpo y realizarte una medición
              antropométrica.
            </p>
          </MotionServiceStyled>
        </ServiceStyled>
      </ContainerServicesStyled>
      <Footer />
    </>
  );
};

export default Services;
