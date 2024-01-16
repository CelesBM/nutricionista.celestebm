import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../redux/MenuSlice";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import {
  ContainerHeaderStyled,
  HomeIconStyled,
  HamburgerIconStyled,
  ContainerLinksStyled,
  SpanStyled,
} from "./HeaderStyles";
import { motion } from "framer-motion";
import { IoHome } from "react-icons/io5";
import { TfiMenuAlt } from "react-icons/tfi";

const Header = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state) => state.menu.isMenuOpen);

  const handleMenuToggle = () => {
    dispatch(toggleMenu());
  };

  return (
    <ContainerHeaderStyled>
      <HomeIconStyled>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.2 }}>
          <IoHome />
        </motion.div>
      </HomeIconStyled>
      <ContainerLinksStyled>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.2 }}>
          <SpanStyled>Sobre mí</SpanStyled>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.2 }}>
          <SpanStyled>Servicios</SpanStyled>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.2 }}>
          <SpanStyled>Recetario</SpanStyled>
        </motion.div>
      </ContainerLinksStyled>
      <HamburgerIconStyled onClick={handleMenuToggle}>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.2 }}>
          <TfiMenuAlt />
        </motion.div>
      </HamburgerIconStyled>
      {isMenuOpen && <HamburgerMenu />}
    </ContainerHeaderStyled>
  );
};

export default Header;
