import React, { Component } from 'react';

import './style.css';
import PostItem from '../PostItem';


export default class PostList extends Component {
    constructor(){
        super();
        this.state = {
            posts: [
              {
                id: 1,
                author: {
                  name: "Thiago Fidelis",
                  avatar: "https://scontent-gru2-2.xx.fbcdn.net/v/t1.0-1/p160x160/79738009_2608029309318693_1562240765613047808_o.jpg?_nc_cat=102&_nc_sid=dbb9e7&_nc_ohc=zqHZC4QEAkoAX_0TqNI&_nc_ht=scontent-gru2-2.xx&_nc_tp=6&oh=692ccb6f8acac25ebb7e0310dafaff2e&oe=5E9491B0"
                },
                date: "04 Jun 2019",
                content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
                comments: [
                  {
                    id: 1,
                    author: {
                      name: "Rafael",
                      avatar: "https://scontent-gru2-2.xx.fbcdn.net/v/t1.0-9/16427534_1211802282274743_1414951955091616004_n.jpg?_nc_cat=106&_nc_sid=13bebb&_nc_ohc=rrqtvVHCRxAAX-M05ig&_nc_ht=scontent-gru2-2.xx&oh=1495abfb1d793653e3432b98030f1141&oe=5E982F7B"
                    },
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum, felis non convallis varius, nisl dolor sodales massa, sed eleifend risus eros eget lacus. Etiam odio felis, ullamcorper eget nibh sed, tincidunt scelerisque sapien. Fusce finibus fringilla neque molestie pharetra. Proin porta arcu ut euismod venenatis. Aliquam nisl enim, venenatis in vulputate a, pulvinar sed justo. Quisque tincidunt, tellus sit amet tincidunt lobortis, diam enim maximus magna, nec consequat justo metus id libero. Morbi cursus, urna sit amet lacinia fermentum, velit sapien facilisis tellus, ut aliquam nulla nisi at sem. Nulla quis augue sit amet leo posuere porta. Nullam malesuada turpis non metus condimentum volutpat. Nam luctus porta felis non elementum. In id porta velit, quis mollis nisl. Donec efficitur quam lorem, vel accumsan libero tempus et. Nulla turpis mi, tristique sed lectus eu, egestas ornare diam. Donec tincidunt mi eu elit viverra, ac fermentum erat molestie. Morbi mattis hendrerit erat vitae suscipit. Nunc venenatis tempus velit a tincidunt."
                  },
                  {
                    id: 2,
                    author: {
                      name: "Rafael",
                      avatar: "https://scontent-gru2-2.xx.fbcdn.net/v/t1.0-9/16427534_1211802282274743_1414951955091616004_n.jpg?_nc_cat=106&_nc_sid=13bebb&_nc_ohc=rrqtvVHCRxAAX-M05ig&_nc_ht=scontent-gru2-2.xx&oh=1495abfb1d793653e3432b98030f1141&oe=5E982F7B"
                    },
                    content: "Quisque ornare nisl porta nisi varius condimentum. Donec imperdiet vulputate diam, in commodo libero semper eu. Nulla at tempor tortor. Nulla consectetur elit magna, interdum lacinia tortor bibendum eget. Vivamus est nisl, dapibus sed sodales ac, feugiat id nulla. Nam malesuada tincidunt tortor. Sed consectetur pretium velit, eu scelerisque risus dignissim sit amet. Integer non enim non erat porttitor ornare vel nec diam."
                  }
                ]
              },
              {
                id: 2,
                author: {
                  name: "Thiago Fidelis Dos Santos",
                  avatar: "https://scontent-gru2-2.xx.fbcdn.net/v/t1.0-1/p160x160/79738009_2608029309318693_1562240765613047808_o.jpg?_nc_cat=102&_nc_sid=dbb9e7&_nc_ohc=zqHZC4QEAkoAX_0TqNI&_nc_ht=scontent-gru2-2.xx&_nc_tp=6&oh=692ccb6f8acac25ebb7e0310dafaff2e&oe=5E9491B0"
                },
                date: "04 Jun 2019",
                content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
                comments: [
                  {
                    id: 1,
                    author: {
                      name: "Thiago Fidelis Dos Santos",
                      avatar: "https://scontent-gru2-2.xx.fbcdn.net/v/t1.0-1/p160x160/79738009_2608029309318693_1562240765613047808_o.jpg?_nc_cat=102&_nc_sid=dbb9e7&_nc_ohc=zqHZC4QEAkoAX_0TqNI&_nc_ht=scontent-gru2-2.xx&_nc_tp=6&oh=692ccb6f8acac25ebb7e0310dafaff2e&oe=5E9491B0"
                    },
                    content: "Conteúdo do comentário"
                  }
                ]
              }
            ]
          };
        
    }
  render() {
    const { posts } = this.state;
    
    return (
        <main>            
            {posts.map((post, index) => 
                (<PostItem key={index} {...post}/>)
            )}
        </main>
      );
  }
}
