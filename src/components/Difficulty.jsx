import { DifficultyBox } from "./Difficulty.styled";

export default function Difficulty({ level }) {
  return <DifficultyBox level={level}>Difficulty: {level}</DifficultyBox>;
}
