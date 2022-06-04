import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { usePosts } from '../../contexts/postContext';
import { PostType } from "../../utils/posts";
import { Avatar } from "../Avatar";
import { Feedback } from "../Feedback";
import { Container } from "./styles";


type PostProps = {
  post: PostType
}

export const Post = ({ post }: PostProps) => {
  const { handleCreateFeedback } = usePosts();
  const [feedbackInput, setFeedbackInput] = useState('');

  const publishedDateFormatted = format(post.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  })

  const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  
  const handleCreateNewFeedback = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    handleCreateFeedback(post.id, feedbackInput)
  
    setFeedbackInput('');
  }

  const handleChangeFeedback = (event: ChangeEvent<HTMLTextAreaElement>) => {
    event.target.setCustomValidity('')
    setFeedbackInput(event.currentTarget.value)
  }

  const handleFeedbackInvalid = (event: InvalidEvent<HTMLTextAreaElement>) => {
    event.target.setCustomValidity('Esse campo é obrigatório')
  }

  return (
    <Container>
      <header>
        <Avatar image={post.author.avatar} />
        <div className="profile">
          <h2>{post.author.name}</h2>
          <span>{post.author.position}</span>
        </div>
        <time 
          title={publishedDateFormatted}
          dateTime={post.publishedAt.toISOString()}
          className="publish"
        >
            {publishedDateRelativeToNow}
        </time>
      </header>

      <p className="post">
        {post.content.body} <br /><br />
        <strong>{post.content.social}</strong> <br /><br />
        <strong>{post.content.hashtag}</strong>
      </p>

      <form onSubmit={handleCreateNewFeedback}>
        <legend>Deixe seu feedback</legend>
        <textarea 
          placeholder="Escreva um comentário..." 
          onChange={handleChangeFeedback}
          value={feedbackInput}
          onInvalid={handleFeedbackInvalid}
          required
      />
        <footer>
          <button 
            type="submit"
            disabled={feedbackInput.length === 0}
          >
              Publicar
          </button>
        </footer>

      </form>

          {post.feedback.map(feedback => (
          <Feedback key={feedback.id} feedback={feedback} />
        ))}

    </Container>
  );  
}