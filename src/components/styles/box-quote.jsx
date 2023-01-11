import { makeStyles } from "@material-ui/core";
import { Colors } from "./theme.jsx";



export const useStyles = makeStyles((theme) => ({
  container: {

    background: Colors.white,
    border: "solid 1px",
   borderRadius: "10px 100px / 120px"
   
  },
  
}));
