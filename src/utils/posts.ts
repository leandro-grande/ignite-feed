
type Feedback = {
  id: string;
  text: string;
  created_at: Date;
  like: number;
}

export type PostType = {
  id: number;
  author: {
    name: string;
    position: string;
    avatar: string;
  }
  content: {
    body: string;
    social: string;
    hashtag: string;
  }
  publishedAt: Date;
  feedback: Feedback[]
}

export let posts: PostType[] = [
  {
    id: 1,
    author: {
      name: "Jane Cooper",
      position: "Dev Front-End",
      avatar: "/avatar1.png",
    },
    content: {
      body: "Fala galeraa π Acabei de subir mais um projeto no meu portifa. Γ um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto Γ© DoctorCare π",
      social: "π jane.design/doctorcare",
      hashtag: "#novoprojeto #nlw #rocketseat",
    },
    publishedAt: new Date('2022-05-03 20:00:00'),
    feedback: []
  },
  {
    id: 2,
    author: {
      name: "Devon Lane",
      position: "Dev Front-End",
      avatar: "/avatar2.png",
    },
    content: {
      body: "Fala pessoal π Finalmente finalizei meu novo site/portfΓ³lio. Foi um baita desafio criar todo o design e codar na unha, mas consegui πͺπ» ",
      social: "π devonlane.design",
      hashtag: "#uiux #userexperience",
    },
    publishedAt: new Date('2022-05-04 21:00:00'),
    feedback: []
  }
]