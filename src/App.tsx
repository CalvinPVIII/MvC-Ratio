import { useEffect, useState } from "react";
import "./App.css";
import CharacterSelect from "./Components/CharacterSelect";
import { Character, Roster, Team } from "./types";
import CurrentTeam from "./Components/CurrentTeam";

import ratioRoster from "./helpers/ratios/JWongRatio";

function App() {
  const [characters, setCharacters] = useState<Character[] | null>(null);
  const [currentTeam, setCurrentTeam] = useState<Team>({ 1: null, 2: null, 3: null });
  const [currentPosSelect, setCurrentPosSelect] = useState<number>(1);
  const [ratioPoints, setRatioPoints] = useState({ used: 0, max: 7 });
  const [fullTeam, setFullTeam] = useState<boolean>(false);

  useEffect(() => {
    const sortedRoster = sortRoster(ratioRoster.roster);
    setCharacters(sortedRoster);
    setRatioPoints({ used: 0, max: ratioRoster.maxPoints });
  }, []);

  const sortRoster = (roster: Roster): Character[] => {
    return Object.values(roster).sort((a, b) => a.characterSelectOrder - b.characterSelectOrder);
  };

  const pickCharacter = (character: Character) => {
    const team = { ...currentTeam };
    team[currentPosSelect] = character;
    setCurrentTeam(team);
    setCurrentPosSelect(currentPosSelect === 3 ? 1 : currentPosSelect + 1);

    const usedPoints = (team[1]?.pointCost || 0) + (team[2]?.pointCost || 0) + (team[3]?.pointCost || 0);

    if (team[1] && team[2] && team[3]) {
      setFullTeam(true);
    }

    setRatioPoints({ ...ratioPoints, used: usedPoints });
  };

  const resetSelection = () => {
    setFullTeam(false);
    setRatioPoints({ ...ratioPoints, used: 0 });
    setCurrentTeam({ 1: null, 2: null, 3: null });
  };

  return (
    <>
      <button onClick={resetSelection}>Reset</button>
      <h2>{ratioPoints.used}</h2>
      <CurrentTeam team={currentTeam} />
      {characters ? <CharacterSelect characters={characters} handleSelectCharacter={pickCharacter} points={ratioPoints} fullTeam={fullTeam} /> : null}
    </>
  );
}

export default App;
