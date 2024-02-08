import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  ContainerContactStyled,
  FormContactStyled,
  DataFormStyled,
  ButtonContactStyled,
  ErrorStyled,
} from "./ContactStyled";
import { motion } from "framer-motion";

const Contact = () => {
  // Validación de los campos con Yup:
  const phoneRegex = /\d{10}$/;
  const validationSchema = Yup.object({
    name: Yup.string().trim().required("* Campo obligatorio"),
    phone: Yup.string()
      .matches(phoneRegex, "* Celular inválido")
      .required("* Campo obligatorio"),
    email: Yup.string()
      .email("* Correo electrónico inválido")
      .required("* Campo obligatorio"),
    issue: Yup.string()
      .max(200, "* No puede utilizar más de 200 caracteres")
      .required("* Campo obligatorio"),
  });

  const initialValues = {
    name: "",
    phone: "",
    email: "",
    issue: "",
  };

  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <>
      <ContainerContactStyled>
        <h2>Contacto</h2>
        <FormContactStyled onSubmit={formik.handleSubmit}>
          <DataFormStyled>
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <ErrorStyled>{formik.errors.name}</ErrorStyled>
            ) : null}
            <label htmlFor="phone">Teléfono:</label>
            <input
              type="number"
              id="phone"
              name="phone"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
            />
            {formik.touched.phone && formik.errors.phone ? (
              <ErrorStyled>{formik.errors.phone}</ErrorStyled>
            ) : null}
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <ErrorStyled>{formik.errors.email}</ErrorStyled>
            ) : null}
            <label htmlFor="issue">Asunto:</label>
            <textarea
              id="issue"
              name="issue"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.issue}
            />
            {formik.touched.issue && formik.errors.issue ? (
              <ErrorStyled>{formik.errors.issue}</ErrorStyled>
            ) : null}
          </DataFormStyled>

          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.2 }}>
            <ButtonContactStyled>Enviar</ButtonContactStyled>{" "}
          </motion.div>
        </FormContactStyled>
      </ContainerContactStyled>
    </>
  );
};

export default Contact;
