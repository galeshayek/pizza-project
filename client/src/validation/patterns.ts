const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*-])[A-Za-z\d!@#$%^&*-]{7,20}$/;
const phoneRegex = /^((\+972|0)([23489]|5[02468]|77)-?[1-9]\d{6})$/;
const emailRegex = /^(?=.{1,30}$)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

export { passwordRegex, phoneRegex, emailRegex };
