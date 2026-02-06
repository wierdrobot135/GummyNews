import { useState } from "react";
import { Typography } from "@mui/material";
import GlassPanel from "./GlassPanel";
import VideoModal from "./VideoModal";

export default function EpisodeCard({ title, video }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <GlassPanel
        className="overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
        onClick={() => setOpen(true)}
      >
        <video src={video} className="w-full h-48 object-cover" />

        <div className="p-4">
          <Typography variant="h6" sx={{ color: "#7B3F00", fontWeight: "bold" }}>
            {title}
          </Typography>
        </div>
      </GlassPanel>

      <VideoModal open={open} onClose={() => setOpen(false)} video={video} />
    </>
  );
}
