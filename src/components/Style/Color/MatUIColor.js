import { createMuiTheme } from '@material-ui/core/styles';


function getTheme(){
    const theme = createMuiTheme({
        palette: {
          primary: {
            main: '#00bda5',
          },
        }
      });
    return theme;
}

export default getTheme;