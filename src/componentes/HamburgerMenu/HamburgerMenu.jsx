import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch } from "react-redux";
import { toggleMenu, setScrollTop } from "../../redux/MenuSlice";
import {
  ContainerHamburgerStyled,
  SpanStyled,
  LinkHamburgerStyled,
} from "./HamburgerMenuStyles";

const HamburgerMenu = () => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(toggleMenu());
  };

  return (
    <>
      <AnimatePresence>
        <ContainerHamburgerStyled
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "tween", duration: 1 }}
        >
          <LinkHamburgerStyled to="/About" onClick={handleClose}>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.2 }}>
              <SpanStyled>Sobre mí</SpanStyled>
            </motion.div>
          </LinkHamburgerStyled>
          <LinkHamburgerStyled to="/Services" onClick={handleClose}>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.2 }}>
              <SpanStyled>Servicios</SpanStyled>
            </motion.div>
          </LinkHamburgerStyled>
          <LinkHamburgerStyled to="/Recetary" onClick={handleClose}>
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
