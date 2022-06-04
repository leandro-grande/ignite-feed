import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { posts, PostType } from '../utils/posts';

type  Feedback = {
  id: string;
  text: string;
  created_at: Date;
  like: number;
}

type PostContextProviderProps = {
  children: ReactNode;
}

type postContextData = {
  postsList: PostType[];
  handleCreateFeedback: (postId: number, feedback: string) => void;
  handleAddLike: (feedbackId: string,) => void;
  handleDeleteFeedback: (feedbackId: string,) => void;
}

const postContext = createContext({} as postContextData)

export const PostContextProvider = ({children}: PostContextProviderProps) => {
  const [postsList, setPostsList] = useState<PostType[]>([])

  useEffect(() => {
    setPostsList(posts);

  }, [])

  const handleCreateFeedback = (postId: number, feedback: string) => {
    const posts = [...postsList];

    const index = posts.findIndex(post => post.id === postId)

    posts[index].feedback.push({
      id: uuid(),
      text: feedback,
      created_at: new Date(),
      like: 0
    })

    setPostsList(posts)
  }

  const handleDeleteFeedback = (feedbackId: string) => {
    const posts = [...postsList];

    const indexPost = posts.findIndex(post => post.feedback.find(feed => feed.id === feedbackId))
    const indexFeedback = posts[indexPost].feedback.findIndex(item => item.id === feedbackId)

    posts[indexPost].feedback.splice(indexFeedback, 1)

    setPostsList(posts);
  }

  const handleAddLike = (feedbackId: string) => {
    const posts = [...postsList];

    const indexPost = posts.findIndex(post => post.feedback.find(feed => feed.id === feedbackId))
    const indexFeedback = posts[indexPost].feedback.findIndex(item => item.id === feedbackId)

    posts[indexPost].feedback[indexFeedback].like += 1;

    setPostsList(posts);
  } 

  return (
    <postContext.Provider value={{
      postsList, 
      handleCreateFeedback, 
      handleAddLike,
      handleDeleteFeedback,
    }}>
      {children}
    </postContext.Provider>
  );
}

export const usePosts = () => {
  return useContext(postContext);
}