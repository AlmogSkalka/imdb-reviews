function validatePassword(password) {
  const minLength = 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasDigit = /\d/.test(password);
  const hasSpecialSymbol = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password);

  return (
    password.length >= minLength &&
    hasUppercase &&
    hasLowercase &&
    hasDigit &&
    hasSpecialSymbol
  );
}
export default validatePassword;
