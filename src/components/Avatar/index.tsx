import { Container } from "./styles";

type AvatarProps = {
  image: string;
}

export const Avatar = ({ image }: AvatarProps) => {
  return (
    <Container>
      <img src={image} alt="Avatar" />
    </Container>
    );
}