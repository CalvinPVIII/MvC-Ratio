import { Character, Team } from "../types";
import "../css/CurrentTeam.css";
interface CurrentTeamProps {
  team: Team;
  currentPosition: number;
  hoveredCharacter: Character | null;
}

export default function CurrentTeam(props: CurrentTeamProps) {
  return (
    <div className="current-team-wrapper">
      <div className="selected-character-wrapper">
        <img className="selected-character-portrait" src={props.team[1]?.hyper} />
        <h1>
          {props.team[1]?.name} - {props.team[1]?.pointCost} points
        </h1>
      </div>

      <div className="selected-character-wrapper">
        <img className="selected-character-portrait" src={props.team[2]?.hyper} />
        <h1>
          {props.team[2]?.name} - {props.team[2]?.pointCost} points
        </h1>
      </div>
      <div className="selected-character-wrapper">
        <img className="selected-character-portrait" src={props.team[3]?.hyper} />
        <h1>
          {props.team[3]?.name} - {props.team[3]?.pointCost} points
        </h1>
      </div>
    </div>
  );
}
