/**
 * @author Gregory Vincent
 * @date 1/8/23
 * Context object for Form
 * Will be used for code splitting
 */
import React from "react";
const FormContext = React.createContext({
  isFormVisible: true,
});

export default FormContext;
