import { format, formatDistanceToNow } from 'date-fns';
import ptBR from "date-fns/locale/pt-BR";
import { ThumbsUp, Trash } from "phosphor-react";
import { usePosts } from '../../contexts/postContext';
import { Container } from "./styles";

type FeedbackProps = {
  feedback: {
    id: string;
    text: string;
    created_at: Date;
    like: number;
  }

}

export const Feedback = ({feedback}: FeedbackProps) => {
  const { handleAddLike, handleDeleteFeedback } = usePosts();

  const formattedDate = format(feedback.created_at, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  })

  const formattedDateToNow = formatDistanceToNow(feedback.created_at, {
    locale: ptBR,
    addSuffix: true
  })

  return (
    <Container>
      <div className="avatar">
        <img src="/avatar-profile.png" alt="Avatar" />
      </div>
      <div className="feedback-area">
        <div className="feedback">
          <strong>Devon Lane</strong>
          <time
            title={formattedDate}
            dateTime={feedback.created_at.toISOString()}     
          >
            {formattedDateToNow}
          </time>
          <p>{feedback.text}</p>
          <button onClick={() => handleDeleteFeedback(feedback.id)} title="Excluir"><Trash size={24} /></button>
        </div>
        <footer>
          <button onClick={() => handleAddLike(feedback.id)}>
            <ThumbsUp size={20} />
            Aplaudir <span>{feedback.like}</span>
          </button>
        </footer>
      </div>
    </Container>
  );
}