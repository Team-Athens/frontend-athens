import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  makeStyles,
  Paper,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "2rem",
  },
  paper: {
    padding: theme.spacing(3),
    position: "relative",
    width: "100%",
  },
  textarea: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    position: "absolute",
    right: theme.spacing(3),
    bottom: theme.spacing(3),
  },
}));

interface PromptProps {
  prompt: string;
  setPrompt: React.Dispatch<React.SetStateAction<string>>;
}

const Prompt = (props: PromptProps) => {
  const { prompt, setPrompt } = props;
  const classes = useStyles();
  const [input, setInput] = useState<string>("");

  const handleGenerateOutput = () => {
    // Your logic to generate output from input
    setPrompt(`Generated output for: ${input}`);
  };

  return (
    <Container className={classes.root}>
      <Paper className={classes.paper}>
        <TextField
          className={classes.textarea}
          variant="outlined"
          multiline
          minRows={10}
          placeholder="Find me leads in [industry-name], at [location]..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div className={classes.buttonContainer}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={handleGenerateOutput}
            disabled={input === ''}
          >
            Generate
          </Button>
        </div>
        {prompt && (
          <>
            <div>This would find company name, reviews, ratings, type of industry, address, website, booking link, name of employees.</div>
            <div style={{ marginTop: "20px" }}>
              <strong>Prompt Given:</strong>
              <p>{prompt}</p>
            </div>
          </>
        )}
      </Paper>
    </Container>
  );
};

export default Prompt;
