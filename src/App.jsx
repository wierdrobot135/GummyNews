import { Button, Card, CardContent, Typography } from "@mui/material";

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-ember">
      <Card className="backdrop-blur-xl bg-white/40 shadow-xl rounded-3xl p-8">
        <CardContent>
          <Typography
            variant="h3"
            gutterBottom
            sx={{ color: "#7B3F00", fontWeight: "bold" }}
          >
            🍫 Gummy News
          </Typography>

          <Typography variant="body1" className="mb-6">
            Broadcasting the most important weird news on Earth.
          </Typography>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#7FD8DE",
              color: "#000",
              borderRadius: "12px",
            }}
          >
            Watch Latest Episode
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
