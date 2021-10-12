import { Button, Typography } from "@mui/material";
import React from "react";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const { signInUsingGoogle } = useAuth();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >

        <div>
                <Typography my={10} variant="h1" textAlign="center" color="secondary">
                    Login Page!
                </Typography>
                
                <Button
                    onClick={signInUsingGoogle}
                    variant="contained"
                    size="large"
                    startIcon={<VerifiedUserIcon />}
                >
                    Login With Google
                </Button>
        </div>
    </div>
  );
};

export default Login;
