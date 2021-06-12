export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export function validateEmail(email) {
  var regCheck = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regCheck.test(String(email).toLowerCase());
};

export const Black = '0, 0, 0';
export const Blue = '20, 33, 61';
export const Orange = '252, 163, 17';
export const Platinum = '229, 229, 229';
export const White = '255, 255, 255';