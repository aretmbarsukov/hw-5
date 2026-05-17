import styled from "styled-components";

export const Card = styled.div`
  background: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  width: 320px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.12);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const Content = styled.div`
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Title = styled.h2`
  color: black;
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 6px;
`;

export const Info = styled.p`
  margin: 0;
  font-size: 15px;
  color: #666;
  display: flex;
  align-items: center;
  gap: 6px;
`;
