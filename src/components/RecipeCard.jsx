import Difficulty from "./Difficulty";
import { Card, Image, Content, Title, Info } from "./RecipeCard.styled";

export default function RecipeCard({ recipe }) {
  return (
    <Card>
      <Image src={recipe.image} alt={recipe.title} />
      <Content>
        <Title>{recipe.title}</Title>
        <Info>⏱ {recipe.time}</Info>
        <Info>🍽 Servings: {recipe.servings}</Info>
        <Info>🔥 Calories: {recipe.calories}</Info>

        <Difficulty level={recipe.difficulty} />
      </Content>
    </Card>
  );
}
