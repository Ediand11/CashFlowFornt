"use client";

import { signUpUser } from "@/src/api/signUp";
import { validatorEmail, validatorPassword, validatorPasswordRepeat, validatorUsername } from "@/src/helper/validators";
import { Box, Button, Container, CssBaseline, Grid, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import style from "./SignUp.module.scss";

const Login = () => {
  const router = useRouter();
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    repeatPass: "",
    username: "",
    response: "",
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const dataState = {
      emailUser: data.get("email") as string,
      username: data.get("username") as string,
      passwordUser: data.get("password") as string,
    };
    const repeatPass = data.get("rep_password") as string;

    const emailVal = validatorEmail(dataState.emailUser, (email) => setErrors((prev) => ({ ...prev, email })));
    const passVal = validatorPassword(dataState.passwordUser, (password) => setErrors((prev) => ({ ...prev, password })));
    const repeatVal = validatorPasswordRepeat(dataState.passwordUser, repeatPass, (repeatPass) => setErrors((prev) => ({ ...prev, repeatPass })));
    const userVal = validatorUsername(dataState.username, (username) => setErrors((prev) => ({ ...prev, username })));

    if (!passVal || !emailVal || !repeatVal || !userVal) {
      return;
    }

    setErrors({
      email: "",
      password: "",
      repeatPass: "",
      username: "",
      response: "",
    });

    const resp = await signUpUser(dataState);
    if (!resp.error && resp.username && resp.email) {
      router.replace("/");
    } else if (resp.error) {
      setErrors((prev) => ({ ...prev, response: "Email is already taken" }));
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className={style.root}>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              color={"secondary"}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              error={!!errors.email || !!errors.response}
              helperText={errors.email || errors.response}
            />
            <TextField
              color={"secondary"}
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="Username"
              autoFocus
              error={!!errors.username}
              helperText={errors.username}
            />
            <TextField
              color={"secondary"}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              error={!!errors.password}
              helperText={errors.password}
            />
            <TextField
              color={"secondary"}
              margin="normal"
              required
              fullWidth
              name="rep_password"
              label="Repeat password"
              type="password"
              id="passwordRepeat"
              autoComplete="current-password"
              error={!!errors.repeatPass}
              helperText={errors.repeatPass}
            />

            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Sign Up
            </Button>
            <Grid container>
              <Grid item>
                <Link href={"/"}>{"Have account? Sign In!"}</Link>
              </Grid>
            </Grid>
          </Box>
        </div>
      </Box>
    </Container>
  );
};

export default Login;
