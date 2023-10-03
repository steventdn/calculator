// styles.js
import { makeStyles } from '@mui/styles';
import { createStyles } from '@mui/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    calculator: {
      padding: theme.spacing(2),
    },
    calculatorDisplay: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(1),
      textAlign: 'right',
      minHeight: '2rem',
      fontSize: '1.5rem',
    },
    button: {
      fontSize: '1.2rem',
    },
    operatorButton: {
      backgroundColor: theme.palette.secondary.main,
      color: 'white',
    },
    calculatorBorder: {
      border: '2px solid #555555', // Add the border style here
    },
  })
);

export default useStyles;
