import NavBar from "./components/NavBar";
import EpisodeCard from "./components/EpisodeCard";

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
            title="Rotten Banana Politics"
            video="/videos/banana.mp4"
          />
          <EpisodeCard
            title="Gummy Bear Space Program"
            video="/videos/space.mp4"
          />
          <EpisodeCard
            title="Emergency Marshmallow Alert"
            video="/videos/marshmallow.mp4"
          />
        </div>
      </div>
    </div>
  );
}

