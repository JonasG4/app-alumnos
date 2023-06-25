export function validateText(value, isRequired = false, min = 2) {
  if (isRequired && !value) {
    return "El campo es requerido";
  }
  if (value.length < min) {
    return "El campo debe tener al menos " + min + " carácteres";
  }
  return;
}

export function validateNumber(value, isRequired = false, min = 1) {
  if (isRequired && !value) {
    return "El campo es requerido";
  }
  if (value.length < min) {
    return "El campo debe tener al menos " + min + " número";
  }
  return;
}
