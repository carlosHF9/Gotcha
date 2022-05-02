import { Box } from "@mui/material";
import { FC } from "react";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";

interface ILoginRegisterButtonsProps {
  type: String;
}

const LoginRegisterButtons: FC<ILoginRegisterButtonsProps> = (
  props: ILoginRegisterButtonsProps
) => {
  const buttonStyle = {
    display: "flex",
    alignItems: "center",
    gap: "3px",
  };

  const { type } = props;
  return (
    <div>
      <div
        style={{
          display: "flex",

          gap: "20px",
        }}
      >
        {type === "login" && (
          <div style={buttonStyle}>
            <AccountCircleIcon fontSize="large" color="primary" />
            <span color="primary">Login</span>
          </div>
        )}
        {type === "register" && (
          <div style={buttonStyle}>
            <AppRegistrationIcon fontSize="large" color="primary" />
            <span color="primary">Register</span>
          </div>
        )}
        {type === "logout" && (
          <div style={buttonStyle}>
            <LogoutIcon color="primary" fontSize="large" />
            <span color="primary">Logout</span>
          </div>
        )}
        {type === "profile" && (
          <div style={buttonStyle}>
            <AccountCircleIcon color="primary" fontSize="large" />
            <span color="primary">Profile</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginRegisterButtons;
