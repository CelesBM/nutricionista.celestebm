import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ContainerHamburgerStyled, SpanStyled } from "./HamburgerMenuStyles";

const HamburgerMenu = ({ isOpen, handleClose }) => {
  return (
    <>
      <AnimatePresence>
        <ContainerHamburgerStyled
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "tween", duration: 1 }}
        >
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.2 }}>
            <SpanStyled>Sobre mí</SpanStyled>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.2 }}>
            <SpanStyled>Servicios</SpanStyled>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.2 }}>
            <SpanStyled>Recetario</SpanStyled>
          </motion.div>
        </ContainerHamburgerStyled>
      </AnimatePresence>
    </>
  );
};

export default HamburgerMenu;

/*
initial={{ left: "100%" }}
        animate={{ left: isMenuOpen ? "0" : "100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
*/
