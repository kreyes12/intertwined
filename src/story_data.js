const stories = [
  {
    name: 'Hansel & Gretel',
    availableCharacters: [
      'Hansel',
      'Gretel'
    ],
    scenes: [
      {
        id: 1,
        image: '../imgs/handg.jpg',
        name: 'Opening Scene',
        text: `Once upon a time, there lived at the edge of a forest a poor woodcutter, CHARACTER_NAME , with his wife and two children from a former marriage, a little boy called Hansel and a little girl called Gretel. Times were hard, and the father was struggling to feed his family. One night the father asked his wife, "What will we do? We do not have enough to eat." "Do not worry", the stepmother said. "I have a plan. Tomorrow, we will take the children to the forest on a picnic. We will leave them in the forest and sneak away. That way, we can have more food at home for ourselves". "That is a terrible idea", said the father. "I don't like it, but I will do it", the father said sadly. Hansel and Gretel heard every word. Gretel asked Hansel worriedly, "What are we going to do?"`,
        question: { text: 'How do you respond?', options: [{text: "Don't worry, Gretel. I have a plan.", goTo: 2}, {text: "I don't know, Gretel.", goTo: 2}]}
      },
      {
        id: 2,
        name: 'Basket Scene',
        text: 'The next morning, Hansel woke up early to collect some items to bring to the forest. Hansel grabbed a basket and put inside it,',
        question: { text: 'Which items do you wish to put inside the basket?', options: [{text: 'lots of bright blue pebbles', goTo: 3}, {text: 'a loaf of bread', goTo: 2}]}
      },
      {
        id: 3,
        image: './imgs/pebbles.jpg',
        styles: [
          {
            backgroundColor: 'white'
          }
        ],
        name: 'Picnic Scene',
        text: `After breakfast, the stepmother said, Let's have a picnic! Then the family went to the forest. “Now children”, the mean stepmother said, “your father and I are going to collect some berries. We’ll be right back”. The father kissed his children and walked away with the stepmother. Gretel started to cry. “Do not cry!” Hansel said. “We will find our way home. I dropped blue pebbles all along the way”. Hansel and Gretel followed the trail of pebbles all the way home. `,
        question: { text: 'Do you wish to continue the story?', options: [{text: 'Yes', goTo: 4}, {text: 'No, this seems like a nice happily ever after.', goTo: 2}]}
      },
      {
        id: 4,
        name: 'Picnic Take 2 Scene',
        text: `A few hours later, Hansel and Gretel arrived home. The stepmother looked angry. The father looked happy. "Thank goodness you came home!" the father said. "It was silly of you to get lost," said the stepmother. After Hansel and Gretel went to bed, the parents had a talk. "We have to try it again," said the stepmother. "I cannot. I love them," replied the father. "We are doing it again. Tomorrow.", the stepmother said firmly. The next morning, the family went to the forest.`,
        question: { text: '', options: [{text: 'Continue Story', goTo: 5}] }
      },
      {
        id: 5,
        image: '',
        name: 'Picnic Take 2 Scene Continued',
        finalScene: true,
        text: `The stepmother gave Hansel and Gretel a loaf of bread each.`,
        question: { text: 'What do you wish to do?', options: [{text: 'Eat the loaf. You are starving!', goTo: 6}, {text: 'Leave a trail of breadcrumbs as you walk along.', goTo: 7}]}
      },
      {
        id: 7,
        image: './imgs/birds-bread.jpg',
        name: 'Owl Scene',
        sound: './owl-hoot.mp3',
        text: `Hansel broke his loaf of bread into pieces, leaving a trail of crumbs behind as they walked through the forest. "Now, children," the stepmother said. "Your father and I are going to get berries. We will be right back." Hansel and Gretel waited patiently; however, after a couple of hours, the parents still had not returned. Hansel thought to follow the bread crumbs home, but the bread crumbs had been eaten by birds. They were long gone, and now Hansel and Gretel were truly lost. Suddenly, they heard a voice. It was the owl in the tree. 'Poor children. This is no time to be walking through the woods. I can help you build a fire to stay warm until sunrise but only if you play a game with me.'`,
        question: { text: '', options: [{text: 'No, thank you. My sister and I will find our way.', goTo: 8}, {text: 'Yes, we will play a game with you and would very much appreciate some firewood, Mr. Owl.', goTo: 9}]}
      },
      {
        id: 9,
        image: './imgs/birds-bread.jpg',
        name: 'Pre Riddle Scene',
        text: `'Very well. Here are the rules to the game. I will recite a riddle, and you will have 3 chances to guess correctly. If you guess correctly within 3 guesses, I shall grant your firewood. If you lose and do not guess correctly, you have to leave immediately because there are evil creatures who will disturb us if they smell children. Are you ready to play?`,
        question: { text: '', options: [{text: 'Yes.', goTo: 10}, {text: 'No.', goTo: 11}]}
      },
      {
        id: 10,
        image: './imgs/riddle.jpg',
        name: 'Riddle Scene',
        text: `I am the beginning of the end, the end of every place. I am the beginning of eternity, the end of time and space. What am I?`,
        question: { text: '', options: [{text: 'Continue', goTo: 12}]},
        inputs: [{ type: 'text', name: 'guess', correctAnswer: 'the letter e', goTo: { correct: 12, incorrect: 14}}]
      },
      {
        id: 12,
        image: './imgs/birds-bread.jpg',
        name: 'Fire Scene',
        scaryScene: true,
        text: 'As promised, I shall grant you wood to build a fire. We must flee soon, as the full moon is approaching. Before I depart, remember my words: "You are now in the forest, so dark and deep..where witches and wolves and other beasts creep. Be careful and cautious, and generally beware. Do not be fooled if they seem to show care. It is often an act, perhaps a disguise. I implore you to listen to me, the owl, the wise. Travel swiftly but softly and always be smart. Make good choices, and trust your heart." Hansel built a fire, and the he and his sister cuddled near it to try and stay warm through the night. Suddenly, the owl and all of the birds around them flew away hurriedly. ',
        question: { text: '', options: [{text: 'Continue Story', goTo: 13}]}

      },
      {
        id: 13,
        image: './imgs/birds-bread.jpg',
        name: 'Wolf Scene',
        text: `"Hello, children", the wolf said leering at Hansel and Gretel with a sinister grin on his face. Are you lost?`,
        question: { text: '', options: [{text: 'Yes, can you help us?', goTo: 13}]}
      },
      {
        id: 14,
        image: './imgs/birds-bread.jpg',
        name: 'Storm Scene',
        sound: './storm.mp3',
        styles: [
          {
            backgroundColor: '#222'
          }
        ],
        rain: true,
        text: `"Hello, children", the wolf said leering at Hansel and Gretel with a sinister grin on his face. Are you lost?`,
        question: { text: '', options: [{text: 'Yes, can you help us?', goTo: 13}]}
      }

    ]
  },
  {
    name: 'Little Red Riding Hood',
    availableCharacters: [
      'Little Red Riding Hood',
      'Grandmother'
    ]
  }
]

export default stories
