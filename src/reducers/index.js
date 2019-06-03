import { LOAD_MORE, GET_POST } from '../constants/action-types';
import header1 from '../images/header-image.jpg';
import header2 from '../images/header-image-2.jpg';
import header3 from '../images/header-image-3.jpg';
import header4 from '../images/header-image-4.jpg';
import header5 from '../images/header-image-5.jpg';
import header6 from '../images/header-image-6.jpg';
import header7 from '../images/header-image-7.jpg';
import header8 from '../images/header-image-8.jpg';
import header9 from '../images/header-image-9.jpg';
import header10 from '../images/header-image-10.jpg';
import header11 from '../images/header-image-11.jpg';
import header12 from '../images/header-image-12.jpg';
import header13 from '../images/header-image-13.jpg';
import header14 from '../images/header-image-14.jpeg';

const initialState = {
  pageSize: 10,
  posts: [
    {
      title: 'Naborly\'s Awesome!',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      author: 'Me and You',
      tags: ['Investing', 'Culture', 'Data', 'Credit', 'Screening'],
      id: 1234*10,
      image: header1

    },
    {
      title: 'Wham Bam',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      author: 'Me and You',
      tags: ['Investing', 'Data', 'Screening'],
      id: 1235*10,
      image: header2
    },
    {
      title: 'Thank you Mam',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      author: 'Me and You',
      tags: ['Investing', 'Data', 'Screening'],
      id: 1236*10,
      image: header3
    },
    {
      title: 'More stuff about stuff',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      author: 'Me and You',
      tags: ['Investing', 'Data', 'Screening'],
      id: 1237*10,
      image: header4
    },
    {
      title: 'Random title',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      author: 'Me and You',
      tags: ['Investing', 'Data', 'Screening'],
      id: 1238*10,
      image: header5
    },
    {
      title: 'Crazy kitchen nightmares',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      author: 'Me and You',
      tags: ['Investing', 'Culture', 'Data', 'Screening'],
      id: 1239*10,
      image: header6
    },
    {
      title: 'Yay titles!',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      author: 'Me and You',
      tags: ['Investing', 'Culture', 'Data', 'Screening'],
      id: 1240*10,
      image: header7
    },
    {
      title: 'Cool Story Bro',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      author: 'Me and You',
      tags: ['Investing', 'Culture', 'Data', 'Screening'],
      id: 1241*10,
      image: header8
    },
    {
      title: 'Never ever Boy',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      author: 'Me and You',
      tags: ['Investing', 'Culture', 'Data', 'Screening'],
      id: 1242*10,
      image: header9
    },
    {
      title: 'No no foo',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      author: 'Me and You',
      tags: ['Investing', 'Culture', 'Data'],
      id: 1243*10,
      image: header10
    },
    {
      title: 'It\'s bizarre',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      author: 'Me and You',
      tags: ['Investing', 'Culture', 'Data'],
      id: 1244*10,
      image: header11
    },
    {
      title: 'Really dude?',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      author: 'Me and You',
      tags: ['Investing', 'Culture', 'Data'],
      id: 1245*10,
      image: header12
    },
    {
      title: 'Get out!',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      author: 'Me and You',
      tags: ['Investing', 'Culture', 'Data'],
      id: 1246*10,
      image: header13
    },
    {
      title: 'Why you no like?!',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      author: 'Me and You',
      tags: ['Investing', 'Culture', 'Data'],
      id: 1247*10,
      image: header14
    }
  ],
  currentPost: {
    title: 'Naborly\'s Awesome!',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    author: 'Me and You',
    tags: ['Investing', 'Culture', 'Data', 'Credit', 'Screening'],
    id: 1234*10,
    image: header1
  }
};

function rootReducer(state = initialState, action) {
  switch (action.type)  {
    case LOAD_MORE: 
      return { 
        posts: state.posts,
        pageSize: state.pageSize + action.pageSize
      };
    case GET_POST:
      return {
        posts: state.posts,
        pageSize: state.pageSize,
        currentPost: state.posts.filter(post => post.id === action.currentPost)[0]
      };
    default:
      return state;
  }
}

export default rootReducer;