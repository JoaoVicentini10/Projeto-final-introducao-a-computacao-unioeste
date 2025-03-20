import React from "react";
import Grid from "@mui/material/Grid2";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import logo from "../assets/unioeste.png";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/home");
  };

  return (
    <div>
      <form className="form">
        <img src={logo} alt="Logo Unioeste" />
        <Grid container spacing={2}>
          <Grid size={12}>
            <TextField
              fullWidth
              label="Usuário"
              name="user"
              variant="outlined"
              required
            />
          </Grid>
          <Grid size={12}>
            <TextField
              fullWidth
              label="Senha"
              name="password"
              variant="outlined"
              type="password"
              required
            />
          </Grid>

          <Grid size={3} offset={"auto"}>
            <Button onClick={handleLogin} variant="outlined">
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Login;
