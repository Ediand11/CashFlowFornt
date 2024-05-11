"use client";

import { loginUser } from "@/src/api/auth/login";
import { validatorEmail, validatorPassword } from "@/src/helper/validators";
import { useUserStore } from "@/src/store/user";
import { IUser } from "@/src/types";
import { Box, Button, Container, CssBaseline, Grid, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import style from "./Login.module.scss";

const Login = () => {
  const setUser = useUserStore((state) => state.setName);
  const router = useRouter();

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    response: "",
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const dataState = {
      emailUser: data.get("email") as string,
      passwordUser: data.get("password") as string,
    };

    const emailVal = validatorEmail(dataState.emailUser, (email) => setErrors((prev) => ({ ...prev, email })));
    const passVal = validatorPassword(dataState.passwordUser, (password) => setErrors((prev) => ({ ...prev, password })));

    if (!passVal || !emailVal) {
      return;
    }

    setErrors({
      email: "",
      password: "",
      response: "",
    });

    const resp = await loginUser(dataState);
    if (!resp.error && resp.username && resp.email) {
      const user: IUser = {
        username: resp.username,
        email: resp.email,
      };
      setUser(user);
      router.push("/main");
    } else if (resp.error) {
      setErrors((prev) => ({ ...prev, response: "User not found" }));
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
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              error={!!errors.password}
              helperText={errors.password}
            />

            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href={"/signup"}>{"Don't have an account? Sign Up"}</Link>
              </Grid>
            </Grid>
          </Box>
        </div>
      </Box>
    </Container>
  );
};

export default Login;
