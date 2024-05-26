const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validatorEmail(email: string, setError: (errorMessage: string) => void) {
  if (!emailRegex.test(email)) {
    setError("Invalid email address");
    return false;
  }
  return true;
}

export function validatorPassword(password: string, setError: (errorMessage: string) => void) {
  if (password.length < 8 || !/\d/.test(password) || !/[a-zA-Z]/.test(password)) {
    setError("Password must be at least 8 characters long and contain at least one letter and one number");
    return false;
  }
  return true;
}

export function validatorPasswordRepeat(password: string, repeatPassword: string, setError: (errorMessage: string) => void) {
  if (password !== repeatPassword) {
    setError("Passwords must match");
    return false;
  }
  return true;
}

const usernameRegex = /^\S+$/;

export function validatorUsername(username: string, setError: (errorMessage: string) => void) {
  if (!usernameRegex.test(username)) {
    setError("Username must not be empty or contain spaces");
    return false;
  }
  return true;
}
