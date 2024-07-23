import { Team } from "../types";
import "../css/CurrentTeam.css";
interface CurrentTeamProps {
  team: Team;
}

export default function CurrentTeam(props: CurrentTeamProps) {
  return (
    <div className="current-team-wrapper">
      <img className="selected-character-portrait" src={props.team[1]?.hyper} />

      <img className="selected-character-portrait" src={props.team[2]?.hyper} />
      <img className="selected-character-portrait" src={props.team[3]?.hyper} />
    </div>
  );
}
