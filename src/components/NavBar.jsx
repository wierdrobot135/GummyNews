import { AppBar, Toolbar, Typography, Button } from "@mui/material";

export default function NavBar() {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backdropFilter: "blur(14px)",
        background: "rgba(255,255,255,0.35)",
        borderBottom: "1px solid rgba(255,255,255,0.4)",
      }}
    >
      <Toolbar className="flex justify-between">
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", color: "#7B3F00" }}
        >
          🍫 Gummy News
        </Typography>

        <div className="space-x-4">
          <Button sx={{ color: "#000" }}>Episodes</Button>
          <Button sx={{ color: "#000" }}>Cast</Button>
          <Button sx={{ color: "#000" }}>About</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}
