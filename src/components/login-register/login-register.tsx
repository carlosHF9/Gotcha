import { FC } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Box from "@mui/material/Box";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import LoginRegisterButtons from "../login-register-buttons";

interface LoginRegisterProps {
  isLoggedin: boolean;
}

const LoginRegister: FC<LoginRegisterProps> = (props: LoginRegisterProps) => {
  const { isLoggedin } = props;
  return (
    <Box
      sx={{
        display: "flex",
        width: "auto",
        alignItems: "center",
        marginLeft: "auto",
        color: "primary.main",
        fontWeight: "medium",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <LoginRegisterButtons type={isLoggedin ? "profile" : "login"} />
        <LoginRegisterButtons type={isLoggedin ? "logout" : "register"} />
      </div>
    </Box>
  );
};

export default LoginRegister;
