import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ContainerHamburgerStyled,
  SpanStyled,
  LinkHamburgerStyled,
} from "./HamburgerMenuStyles";

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
          <LinkHamburgerStyled to="/About">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.2 }}>
              <SpanStyled>Sobre mí</SpanStyled>
            </motion.div>
          </LinkHamburgerStyled>
          <LinkHamburgerStyled to="/Services">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.2 }}>
              <SpanStyled>Servicios</SpanStyled>
            </motion.div>
          </LinkHamburgerStyled>
          <LinkHamburgerStyled to="/Recetary">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.2 }}>
              <SpanStyled>Recetario</SpanStyled>
            </motion.div>
          </LinkHamburgerStyled>
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
