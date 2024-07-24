import { Character, Team } from "../types";
import "../css/CurrentTeam.css";
interface CurrentTeamProps {
  team: Team;
  currentPosition: number;
  hoveredCharacter: Character | null;
  pointInfo: { used: number; max: number };
  handleReset: () => void;
}

export default function CurrentTeam(props: CurrentTeamProps) {
  return (
    <div className="current-team-wrapper">
      <div className="point-info">
        <p>Max Points: {props.pointInfo.max}</p>
        <p>Points Used: {props.pointInfo.used}</p>
        <button onClick={props.handleReset}>RESET</button>
      </div>
      {props.team[1] ? (
        <div className="selected-character-wrapper">
          <img className="selected-character-portrait" src={props.team[1].hyper} />
          <div>
            <p>{props.team[1].name}</p>
            <p>
              {props.team[1].pointCost} {props.team[1].pointCost === 1 ? "point" : "points"}
            </p>
          </div>
        </div>
      ) : props.hoveredCharacter && props.currentPosition === 1 ? (
        <div className="hovered-character-wrapper">
          <img className="selected-character-portrait" src={props.hoveredCharacter.hyper} />
          <div>
            <p>{props.hoveredCharacter.name}</p>
            <p>
              {props.hoveredCharacter.pointCost} {props.hoveredCharacter.pointCost === 1 ? "point" : "points"}
            </p>
          </div>
        </div>
      ) : (
        <div className="character-placeholder"></div>
      )}

      {props.team[2] ? (
        <div className="selected-character-wrapper">
          <img className="selected-character-portrait" src={props.team[2].hyper} />
          <div>
            <p>{props.team[2].name}</p>
            <p>
              {props.team[2].pointCost} {props.team[2].pointCost === 1 ? "point" : "points"}
            </p>
          </div>
        </div>
      ) : props.hoveredCharacter && props.currentPosition === 2 ? (
        <div className="hovered-character-wrapper">
          <img className="selected-character-portrait" src={props.hoveredCharacter.hyper} />
          <div>
            <p>{props.hoveredCharacter.name}</p>
            <p>
              {props.hoveredCharacter.pointCost} {props.hoveredCharacter.pointCost === 1 ? "point" : "points"}
            </p>
          </div>
        </div>
      ) : (
        <div className="character-placeholder"></div>
      )}
      {props.team[3] ? (
        <div className="selected-character-wrapper">
          <img className="selected-character-portrait" src={props.team[3].hyper} />
          <div>
            <p>{props.team[3].name}</p>
            <p>
              {props.team[3].pointCost} {props.team[3].pointCost === 1 ? "point" : "points"}
            </p>
          </div>
        </div>
      ) : props.hoveredCharacter && props.currentPosition === 3 ? (
        <div className="hovered-character-wrapper">
          <img className="selected-character-portrait" src={props.hoveredCharacter.hyper} />
          <div>
            <p>{props.hoveredCharacter.name}</p>
            <p>
              {props.hoveredCharacter.pointCost} {props.hoveredCharacter.pointCost === 1 ? "point" : "points"}
            </p>
          </div>
        </div>
      ) : (
        <div className="character-placeholder"></div>
      )}
    </div>
  );
}
