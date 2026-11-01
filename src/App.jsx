import { useEffect, useState } from "react";

import LoadingScreen from "./components/LoadingScreen";
import EnvelopeIntro from "./components/EnvelopeIntro";
import BirthdayHero from "./components/BirthdayHero";
import BirthdayLetter from "./components/BirthdayLetter";
import PandaWorld from "./components/PandaWorld";
import DanceSleepSection from "./components/DanceSleepSection";
import CollegeChapter from "./components/CollegeChapter";
import GiftBoxes from "./components/GiftBoxes";
import SecretMessage from "./components/SecretMessage";
import BirthdayCake from "./components/BirthdayCake";
import FinalSurprise from "./components/FinalSurprise";
import Decor from "./components/Decor";

function App() {
  const [loading, setLoading] = useState(true);
  const [introOpened, setIntroOpened] = useState(false);
  const [wishMade, setWishMade] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  const handleWish = () => {
    setWishMade(true);
  };

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fff9f2] text-[#25213d]">
      <Decor />

      {!introOpened ? (
        <EnvelopeIntro onOpen={() => setIntroOpened(true)} />
      ) : (
        <>
          <BirthdayHero onWish={handleWish} />

          <BirthdayLetter />

          <PandaWorld />

          <DanceSleepSection />

          <CollegeChapter />

          <GiftBoxes />

          <SecretMessage />

          <BirthdayCake onWish={handleWish} />

          <FinalSurprise wishMade={wishMade} />
        </>
      )}
    </main>
  );
}

export default App;