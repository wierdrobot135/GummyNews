import { Dialog } from "@mui/material";

export default function VideoModal({ open, onClose, video }) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="lg"
      fullWidth
      PaperProps={{
        sx: {
          backdropFilter: "blur(20px)",
          background: "rgba(255,255,255,0.2)",
          border: "1px solid rgba(255,255,255,0.4)",
          borderRadius: "20px",
        },
      }}
    >
      <video src={video} controls autoPlay className="w-full rounded-xl" />
    </Dialog>
  );
}
