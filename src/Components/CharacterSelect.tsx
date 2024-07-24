import { Character } from "../types";
import "../css/CharacterSelect.css";

interface CharacterSelectProps {
  characters: Character[];
  handleSelectCharacter: (character: Character) => void;
  points: { used: number; max: number };
  fullTeam: boolean;
  onCharacterHover: (character: Character | null) => void;
}

export default function CharacterSelect(props: CharacterSelectProps) {
  return (
    <div id="character-select-wrapper">
      <div className="character-select-6-icon-row">
        {props.characters.slice(0, 12).map((character) => (
          <>
            {character.pointCost + props.points.used > props.points.max || props.fullTeam ? (
              <img className="character-icon icon-in-6-row character-unavailable" src={character.icon} />
            ) : (
              <img
                className="character-icon icon-in-6-row character-selectable"
                src={character.icon}
                onClick={() => props.handleSelectCharacter(character)}
                onMouseEnter={() => props.onCharacterHover(character)}
                onMouseLeave={() => props.onCharacterHover(null)}
              />
            )}
          </>
        ))}
      </div>
      <div className="character-select-8-icon-row">
        {props.characters.slice(12, 44).map((character) => (
          <>
            {character.pointCost + props.points.used > props.points.max || props.fullTeam ? (
              <img className="character-icon icon-in-8-row character-unavailable" src={character.icon} />
            ) : (
              <img
                className="character-icon icon-in-8-row character-selectable"
                src={character.icon}
                onClick={() => props.handleSelectCharacter(character)}
                onMouseEnter={() => props.onCharacterHover(character)}
                onMouseLeave={() => props.onCharacterHover(null)}
              />
            )}
          </>
        ))}
      </div>
      <div className="character-select-6-icon-row">
        {props.characters.slice(44).map((character) => (
          <>
            {character.pointCost + props.points.used > props.points.max || props.fullTeam ? (
              <img className="character-icon icon-in-6-row character-unavailable" src={character.icon} />
            ) : (
              <img
                className="character-icon icon-in-6-row character-selectable"
                src={character.icon}
                onClick={() => props.handleSelectCharacter(character)}
                onMouseEnter={() => props.onCharacterHover(character)}
                onMouseLeave={() => props.onCharacterHover(null)}
              />
            )}
          </>
        ))}
      </div>
    </div>
  );
}
