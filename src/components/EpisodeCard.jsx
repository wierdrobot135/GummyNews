import { useState } from "react";
import { Typography } from "@mui/material";
import GlassPanel from "./GlassPanel";
import VideoModal from "./VideoModal";
import { motion } from "framer-motion";


export default function EpisodeCard({ title, video }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
  whileHover={{ scale: 1.05, y: -6 }}
  whileTap={{ scale: 0.97 }}
  transition={{ type: "spring", stiffness: 200 }}
>
  <GlassPanel
    className="overflow-hidden cursor-pointer"
    onClick={() => setOpen(true)}
  >
  </GlassPanel>
</motion.div>


      <VideoModal open={open} onClose={() => setOpen(false)} video={video} />
    </>
  );
}
