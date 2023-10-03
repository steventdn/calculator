import React, { useState } from 'react';
import { Button, Grid, Paper, Typography } from '@mui/material';
import useStyles from './styles'; // Import your styles


function Calculator() {
  const classes = useStyles();
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState(null);
  const [prevValue, setPrevValue] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const handleDigitClick = (digit) => {
    if (waitingForOperand) {
      setDisplayValue(String(digit));
      setWaitingForOperand(false);
    } else {
      setDisplayValue((prevDisplayValue) =>
        prevDisplayValue === '0' ? String(digit) : prevDisplayValue + digit
      );
    }
  };

  const handleDecimalClick = () => {
    if (waitingForOperand) {
      setDisplayValue('0.');
      setWaitingForOperand(false);
    } else if (displayValue.indexOf('.') === -1) {
      setDisplayValue((prevDisplayValue) => prevDisplayValue + '.');
    }
  };

  const handleClearClick = () => {
    setDisplayValue('0');
    setOperator(null);
    setPrevValue(null);
    setWaitingForOperand(false);
  };

  const handleOperatorClick = (newOperator) => {
    if (operator && waitingForOperand) {
      setOperator(newOperator);
    } else {
      const inputValue = parseFloat(displayValue);

      if (prevValue === null) {
        setPrevValue(inputValue);
      } else if (operator) {
        const currentValue = prevValue || 0;
        const newValue = calculateResult(currentValue, operator, inputValue);
        setPrevValue(newValue);
        setDisplayValue(String(newValue));
      }

      setWaitingForOperand(true);
      setOperator(newOperator);
    }
  };

  const calculateResult = (prevValue, operator, inputValue) => {
    switch (operator) {
      case '+':
        return prevValue + inputValue;
      case '-':
        return prevValue - inputValue;
      case '*':
        return prevValue * inputValue;
      case '/':
        return prevValue / inputValue;
      default:
        return inputValue;
    }
  };

  const handleEqualClick = () => {
    if (operator && prevValue !== null) {
      const currentValue = parseFloat(displayValue);
      const result = calculateResult(prevValue, operator, currentValue);
      setDisplayValue(String(result));
      setPrevValue(null);
      setOperator(null);
      setWaitingForOperand(true);
    }
  };
  return (
    <Paper className={`${classes.calculator} ${classes.calculatorBorder}`}>
      <Typography variant="h5" className={classes.calculatorDisplay}>
        {displayValue}
      </Typography>
      <Grid container spacing={1}>
      <Grid item xs={3}>
        <Button
          variant="outlined"
          onClick={() => handleDigitClick(7)}
          fullWidth
          className={classes.button}
        >
          7
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="outlined"
          onClick={() => handleDigitClick(8)}
          fullWidth
          className={classes.button}
        >
          8
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="outlined"
          onClick={() => handleDigitClick(9)}
          fullWidth
          className={classes.button}
        >
          9
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="outlined"
          onClick={() => handleOperatorClick('/')}
          fullWidth
          className={classes.button}
        >
          /
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="outlined"
          onClick={() => handleDigitClick(4)}
          fullWidth
          className={classes.button}
        >
          4
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="outlined"
          onClick={() => handleDigitClick(5)}
          fullWidth
          className={classes.button}
        >
          5
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="outlined"
          onClick={() => handleDigitClick(6)}
          fullWidth
          className={classes.button}
        >
          6
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="outlined"
          onClick={() => handleOperatorClick('*')}
          fullWidth
          className={classes.button}
        >
          *
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="outlined"
          onClick={() => handleDigitClick(1)}
          fullWidth
          className={classes.button}
        >
          1
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="outlined"
          onClick={() => handleDigitClick(2)}
          fullWidth
          className={classes.button}
        >
          2
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="outlined"
          onClick={() => handleDigitClick(3)}
          fullWidth
          className={classes.button}
        >
          3
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="outlined"
          onClick={() => handleOperatorClick('+')}
          fullWidth
          className={classes.button}
        >
          +
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="outlined"
          onClick={() => handleDigitClick(0)}
          fullWidth
          className={classes.button}
        >
          0
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="outlined"
          onClick={() => handleEqualClick()}
          fullWidth
          className={classes.button}
        >
          =
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="outlined"
          onClick={() => handleOperatorClick('C')}
          fullWidth
          className={classes.button}
        >
          C
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="outlined"
          onClick={() => handleOperatorClick('-')}
          fullWidth
          className={classes.button}
        >
          -
        </Button>
      </Grid>

    </Grid>
    </Paper>
  );
}
export default Calculator;