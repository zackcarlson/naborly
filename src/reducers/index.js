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
      title: 'THE KEY TO LONG-TERM TENANTS? TREAT THEM LIKE HOTEL GUESTS',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      author: 'BRITTANY LEE',
      tags: ['Screening', 'Property Management'],
      id: 1234*10,
      image: header1

    },
    {
      title: '5 STEPS TO STARTING YOUR RENTAL REAL ESTATE EMPIRE',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      author: 'BRITTANY LEE',
      tags: ['Investing'],
      id: 1235*10,
      image: header2
    },
    {
      title: 'A FIRESIDE CHAT WITH GRANT YIM, VP OF PRODUCT AT NABORLY',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      author: 'BRITTANY LEE',
      tags: ['Culture'],
      id: 1236*10,
      image: header3
    },
    {
      title: 'HOW TO WRITE THE BEST RENTAL LISTING',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      author: 'KIMBERLY WONG',
      tags: ['Rental', 'Advertising'],
      id: 1237*10,
      image: header4
    },
    {
      title: '4 REASONS WHY YOUR RENTAL DATA IS SAFE WITH NABORLY',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      author: 'KIMBERLY WONG',
      tags: ['Data'],
      id: 1238*10,
      image: header5
    },
    {
      title: 'WHAT EXACTLY IS CREDIT? KIM K. HAS AN OPINION',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      author: 'KIMBERLY WONG',
      tags: ['Credit'],
      id: 1239*10,
      image: header6
    },
    {
      title: 'FAKE CREDIT REPORTS ON THE RISE IN TORONTO—WHAT EVERY LANDORD NEEDS TO KNOW',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      author: 'JEROME WERNIUK',
      tags: ['Screening'],
      id: 1240*10,
      image: header7
    },
    {
      title: 'DEBUNKING THE RENT-TO-INCOME RATIO',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      author: 'BRITTANY LEE',
      tags: ['Screening'],
      id: 1241*10,
      image: header8
    },
    {
      title: 'EVICTIONS 101: HOW TO EVICT A TENANT IN ONTARIO',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      author: 'BRITTANY LEE',
      tags: ['Laws & Regulations'],
      id: 1242*10,
      image: header9
    },
    {
      title: 'WHAT IS AI AND HOW WILL IT AFFECT REAL ESTATE?',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      author: 'TANZIM SAQIB',
      tags: ['Data'],
      id: 1243*10,
      image: header10
    },
    {
      title: 'CALIFORNIA COLIVIN’',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      author: 'BRITTANY LEE',
      tags: ['Listings'],
      id: 1244*10,
      image: header11
    },
    {
      title: 'COLLECTIONS CONUNDRUMS? GOBEYONDCOLLECTIONS EXPLAINS',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      author: 'JEROME WERNIUK',
      tags: ['Laws & Regulations'],
      id: 1245*10,
      image: header12
    },
    {
      title: 'DON’T GET CAUGHT WITH THESE 3 COGNITIVE BIASES',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      author: 'BRITTANY LEE',
      tags: ['Screening'],
      id: 1246*10,
      image: header13
    },
    {
      title: 'HOW CAN I VERIFY A TENANT’S RENTAL HISTORY?',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      author: 'JEROME WERNIUK',
      tags: ['Landlords'],
      id: 1247*10,
      image: header14
    }
  ],
  currentPost: {
    title: 'THE KEY TO LONG-TERM TENANTS? TREAT THEM LIKE HOTEL GUESTS',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    author: 'BRITTANY LEE',
    tags: ['Screening', 'Property Management'],
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