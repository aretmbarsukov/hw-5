import RecipeCard from "./components/RecipeCard";
import { recipes } from "./data/recipes";
import { GlobalStyle } from "./styles/GlobalStyle";
import styled from "styled-components";

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Grid>
        {recipes.map((r) => (
          <RecipeCard key={r.id} recipe={r} />
        ))}
      </Grid>
    </>
  );
}
