import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
// import Api from "../api/Api";

export default function SignIn() {
  const {
    control,
    handleSubmit,
    setError,
    clearErrors,
    formState: { isSubmitting },
  } = useForm();

  /**
   * 로그인 실행 함수
   */
  // const onSubmit = handleSubmit(async (values) => {
  //   // 호출 시작

  //   try {
  //     const { data } = await Api.login({
  //       email: values.email,
  //       password: "1234",
  //     });

  //     // TODO: 성공시
  //     clearErrors();
  //     alert("로그인이 완료되었습니다!");
  //   } catch (e) {
  //     // TODO: 실패시;
  //     setError("email", {
  //       type: "required",
  //       message: "아이디 또는 비밀번호가 달라요!",
  //     });
  //     setError("password", {
  //       type: "required",
  //       message: "아이디 또는 비밀번호가 달라요!",
  //     });
  //     return;
  //   }
  // });

  return (
    <Container component="main" maxWidth="xs">
      <form
      // onSubmit={onSubmit}
      >
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            src="https://avatars.dicebear.com/api/big-smile/:seed.svg"
            sx={{ width: 70, height: 70 }}
          />
          <Typography component="h1" variant="h6">
            어서와서 당신의 동물을 자랑해주세요 !
          </Typography>

          <Controller
            control={control}
            name="email"
            defaultValue=""
            rules={{
              required: {
                value: true,
                message: "이메일을 입력해주세요!",
              },
            }}
            render={({ field, fieldState: { error } }) => {
              return (
                <TextField
                  label="Email Address"
                  autoComplete="email"
                  margin="normal"
                  fullWidth
                  autoFocus
                  {...field}
                  error={!!error?.message}
                  helperText={error?.message}
                />
              );
            }}
          />

          <Controller
            control={control}
            name="password"
            defaultValue=""
            rules={{
              required: {
                value: true,
                message: "비밀번호를 입력해주세요!",
              },
            }}
            render={({ field, fieldState: { error } }) => {
              return (
                <TextField
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  margin="normal"
                  fullWidth
                  {...field}
                  error={!!error?.message}
                  helperText={error?.message}
                />
              );
            }}
          />

          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="당신을 기억할게요 :)"
          />
          <Button
            loading={isSubmitting}
            variant="contained"
            type="submit"
            fullWidth
            sx={{ mt: 3, mb: 2 }}
          >
            Sign in
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to="/" variant="body2">
                비밀번호를 잊으셨나요?
              </Link>
            </Grid>
            <Grid item>
              <Link to="/SignUp" variant="body2">
                처음이시군요!
              </Link>
            </Grid>
          </Grid>
        </Box>
      </form>
    </Container>
  );
}
