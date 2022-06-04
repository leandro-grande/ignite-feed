import { Avatar } from "../Avatar";
import { Container } from "./styles";


export const Sidebar = () => {
  return (
    <Container>
      <div className="bg-sidebar"></div>
      <div className="profile">
        <Avatar image="/avatar-profile.png" />
        <h2>Leslie Alexander</h2>
        <span>UI Designer</span>
      </div>
      <div className="button-area">
        <button type="button">
          <img src="/edit.svg" alt="Ícone de edição" />
          Editar seu perfil
        </button>
      </div>
    </Container>
  );  
}