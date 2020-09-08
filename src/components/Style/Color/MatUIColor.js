import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';


function getTheme() {
  const primaryColor = '#00bda5';
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: primaryColor,
      },
    },
    overrides: {
      // Style sheet name ⚛️ 
      MuiInput:{
        underline: {
          "&&&&:hover:before": {
            borderBottom: "1px solid"+primaryColor,
          },
          "&:before":{
            borderBottom: "0",
          },
          "&::after":{
            borderBottom: "0",
          }
        }
      },
      
      MuiSelect: {
        // Name of the rule
        select: {
          border: 0,
          color:primaryColor,
          fontWeight:"bold",
          "&:focus": {
            backgroundColor: 'transparent',      
          },  
        },
      }, 
    },
  });
  return theme;
}

export default getTheme;