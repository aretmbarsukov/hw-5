import styled from "styled-components";

const colors = {
  0: "#8cd47e",   
  1: "#ffd24d",
  2: "#ff6f0f",   
  3: "#ff4d4d"    
};

export const DifficultyBox = styled.div`
  padding: 6px 12px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  color: white;
  background-color: ${({ level }) => colors[level]};
  width: fit-content;
  margin-top: 8px;
`;
