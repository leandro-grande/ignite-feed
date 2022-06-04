import { Header } from "../components/Header";
import { Post } from "../components/Post";
import { Sidebar } from "../components/Sidebar";
import { usePosts } from "../contexts/postContext";
import { SectionArea } from "../styles/home";


const Home = () => {
  const { postsList } = usePosts();
  

  return (
    <>
      <Header />

      <SectionArea>
        <Sidebar />
        <div> 
          {postsList.map((post)=> (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </SectionArea>

    </>
  )
}

export default Home