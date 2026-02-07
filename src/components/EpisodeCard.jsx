import { Typography } from "@mui/material";
import GlassPanel from "./GlassPanel";

export default function EpisodeCard({ title, video }) {
  return (
    <GlassPanel className="overflow-hidden">
      <video
        src={video}
        controls
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <Typography variant="h6" sx={{ color: "#7B3F00", fontWeight: "bold" }}>
          {title}
        </Typography>
      </div>
    </GlassPanel>
  );
}
