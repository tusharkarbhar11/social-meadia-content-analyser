import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  Box,
} from "@mui/material";

export default function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);

  const analyze = async () => {
    const res = await fetch("http://localhost:5000/analyze", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });

    const data = await res.json();
    setResult(data);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #6a11cb, #2575fc)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 3,
      }}
    >
      <Card
        sx={{
          width: "100%",
          maxWidth: 600,
          backdropFilter: "blur(12px)",
          backgroundColor: "rgba(255,255,255,0.15)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
          borderRadius: 4,
          padding: 2,
        }}
      >
        <CardContent>
          <Typography
            variant="h4"
            align="center"
            color="#fff"
            fontWeight={700}
            gutterBottom
          >
            Social Media Content Analyzer
          </Typography>

          <Typography
            variant="subtitle1"
            align="center"
            color="#f0f0f0"
            sx={{ mb: 3 }}
          >
            Analyze sentiment, keywords & more.
          </Typography>

          <TextField
            fullWidth
            multiline
            rows={5}
            label="Enter content to analyze"
            value={text}
            onChange={(e) => setText(e.target.value)}
            sx={{
              mb: 2,
              background: "rgba(255,255,255,0.25)",
              borderRadius: 2,
              textarea: { color: "#fff" },
              "& .MuiInputLabel-root": { color: "#fff" },
              "& .MuiOutlinedInput-notchedOutline": { borderColor: "#fff" },
            }}
            InputLabelProps={{
              style: { color: "#fff" },
            }}
          />

          <Button
            variant="contained"
            fullWidth
            onClick={analyze}
            sx={{
              backgroundColor: "#fff",
              color: "#333",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#eaeaea",
              },
            }}
          >
            Analyze Content
          </Button>

          {result && (
            <Box
              sx={{
                mt: 3,
                p: 2,
                background: "rgba(255,255,255,0.25)",
                borderRadius: 3,
                color: "#fff",
              }}
            >
              <Typography variant="h6">Analysis Result:</Typography>
              <Typography>Sentiment: {result.sentiment}</Typography>
              <Typography>Keywords: {result.keywords.join(", ")}</Typography>
              <Typography>Length: {result.length}</Typography>
            </Box>
          )}
        </CardContent>
      </Card>
    </Box>
  );
}
