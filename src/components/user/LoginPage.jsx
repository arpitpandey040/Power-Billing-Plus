import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// import Header from "./Header";
// import Footer from "./Footer";
import "./LoginPage.css";
import LoginPageImage from "../../assets/hero-img.png.svg";
import { useNavigate } from "react-router-dom";

import IconButton from "@mui/material/IconButton";
import FilledInput from "@mui/material/FilledInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const LoginPage = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const navigate = useNavigate();
  return (
    <div className="LoginPage">
      <div className="logbox">
        <div className="login">
          <div className="loginfo">
            <h3>Log in</h3>
            <br />
            <TextField
              id="filled-basic"
              label="Email address"
              variant="filled"
            />
            <br />
            <br />
            <FormControl sx={{ width: "25ch" }} variant="filled">
              <InputLabel htmlFor="filled-adornment-password">
                Password
              </InputLabel>
              <FilledInput
                id="filled-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <br />
            <br />

            <div>
              <Button variant="contained">Login</Button>
            </div>

            <br />

            <div className="fp">
              <a href="##" onClick={() => navigate("/forgotpassword")}>
                Forgot password?
              </a>
            </div>
          </div>

          <div className="loginImage">
            <img src={LoginPageImage} alt="app_img"></img>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default LoginPage;
