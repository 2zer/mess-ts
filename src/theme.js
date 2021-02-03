import { createMuiTheme } from '@material-ui/core/styles';
import config from '../config/config'

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    type: config.club.palette.type,
    primary: {
      main: config.club.palette.primary.main,
    },
    secondary: {
      main: config.club.palette.secondary.main,
    }
  }
});

export default theme;
