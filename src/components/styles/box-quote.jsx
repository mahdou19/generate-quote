import { makeStyles } from "@mui/styles";
import { Colors } from "./theme.jsx";

export const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: Colors.white,
    boxShadow: `12px 12px 2px 1px ${Colors.green}`,
    borderRadius: "10px 100px / 120px",
  },
  text: {
    fontFamily: "Playball",
  },
}));
