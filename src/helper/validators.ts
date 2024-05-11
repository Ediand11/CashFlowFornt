const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

export function validatorEmail(email: string, setError: (errorMessage: string) => void) {
  if (!emailRegex.test(email)) {
    setError("Invalid email address");
    return false;
  }
  return true;
}

export function validatorPassword(password: string, setError: (errorMessage: string) => void) {
  if (password.length < 6) {
    setError("Password must be at least 6 characters long");
    return false;
  }
  return true;
}

export function validatorPasswordRepeat(password: string, repeatPassword: string, setError: (errorMessage: string) => void) {
  if (password !== repeatPassword) {
    setError("Password must be match");
    return false;
  }
  return true;
}

const usernameRegex = /^$/;

export function validatorUsername(username: string, setError: (errorMessage: string) => void) {
  if (usernameRegex.test(username)) {
    setError("Empty username");
    return false;
  }
  return true;
}
