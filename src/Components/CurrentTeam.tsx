import { Team } from "../types";

interface CurrentTeamProps {
  team: Team;
}

export default function CurrentTeam(props: CurrentTeamProps) {
  return (
    <>
      <h1>1: {props.team[1]?.name}</h1>
      <h1>2: {props.team[2]?.name}</h1>
      <h1>3: {props.team[3]?.name}</h1>
    </>
  );
}
