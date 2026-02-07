import { Card, CardContent, Typography } from "@mui/material";

export default function EpisodeCard({ title, video }) {
  return (
    <Card className="backdrop-blur-xl bg-white/40 shadow-xl rounded-3xl overflow-hidden">
      <video
        src={video}
        controls
        className="w-full h-48 object-cover"
      />

      <CardContent>
        <Typography variant="h6" sx={{ color: "#7B3F00", fontWeight: "bold" }}>
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
}
