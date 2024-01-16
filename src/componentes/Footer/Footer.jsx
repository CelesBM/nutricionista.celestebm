import React from "react";
import {
  ContainerFooterStyled,
  ContainerInfoFooterStyled,
  ContainerMediasFooterStyled,
  MediaFooterStyled,
} from "./FooterStyles";

const Footer = () => {
  return (
    <>
      <ContainerFooterStyled>
        <ContainerInfoFooterStyled>
          <h2>Lic. en Nutrición</h2>
          <h3>Celeste B. Montero</h3>
        </ContainerInfoFooterStyled>
        <ContainerMediasFooterStyled>
          <MediaFooterStyled>
            <a
              href="https://wa.me/541155031316?text=Hola!%20Quisiera%20solicitar%20informaci%C3%B3n%20para%20una%20consulta%20nutricional"
              target="_blank"
            >
              <img
                src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-whatsapp-phone-icon-png-image_6315989.png"
                alt="whatsapp"
              />
              <p>11-5503-1316</p>
            </a>
          </MediaFooterStyled>
          <MediaFooterStyled>
            <a href="mailto:celesbmontero@hotmail.com" target="_blank">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/010/056/094/small_2x/email-and-mail-icon-sign-symbol-design-free-png.png"
                alt="email"
              />
              <p>
                celesbmontero <br /> @hotmail.com
              </p>
            </a>
          </MediaFooterStyled>
        </ContainerMediasFooterStyled>
      </ContainerFooterStyled>
    </>
  );
};

export default Footer;
