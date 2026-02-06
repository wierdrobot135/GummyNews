import NavBar from "./components/NavBar";
import EpisodeCard from "./components/EpisodeCard";
import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="min-h-screen bg-ember">
      <NavBar />



      <div className="p-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-[#7B3F00]">
          Latest Episodes
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          

          <EpisodeCard
            title="CLIP 1"
            video="/public/GummyNewsClip1.mp4"
          />
          <EpisodeCard
            title="The bannana incident"
            video="/public/BannanaIncident.mp4"
          />
          <EpisodeCard
            title="Wierd Politics"
            video="/public/POLITICS.mp4"
          />
     
        </div>
      </div>
    </div>
  );
}

