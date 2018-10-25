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
        title: true,
        image: '../imgs/parents.jpg',
        name: 'Opening Scene',
        text: `Once upon a time, there lived at the edge of a forest a poor woodcutter, with his wife and two children from a former marriage, a little boy called Hansel and a little girl called Gretel. Times were hard, and the father was struggling to feed his family. One night the father asked his wife, "What will we do? We do not have enough to eat." "Do not worry", the stepmother said. "I have a plan. Tomorrow, we will take the children to the forest on a picnic. We will leave them in the forest and sneak away. That way, we can have more food at home for ourselves". "That is a terrible idea", said the father. "I don't like it, but I will do it", the father said sadly. Hansel and Gretel heard every word. Gretel asked Hansel worriedly, "What are we going to do?"`,
        question: { text: 'How do you respond?', options: [{text: "Don't worry, Gretel. I have a plan.", goTo: 2}, {text: "I don't know, Gretel.", goTo: 2}]}
      },
      {
        id: 2,
        title: true,
        name: 'Basket Scene',
        text: `The next morning, CHARACTER_NAME woke up early to collect some items to bring to the forest. He grabbed a basket and put inside it...`,
        question: { text: 'Which items do you wish to put inside the basket?', options: [{text: 'lots of bright blue pebbles', goTo: 3}, {text: 'a loaf of bread', goTo: 2}]}
      },
      {
        id: 3,
        title: true,
        image: './imgs/pebbles.jpg',
        styles: [
          {
            backgroundColor: 'white'
          }
        ],
        name: 'Picnic Scene',
        text: `After breakfast, the stepmother said, "Let's have a picnic!" Then the family went to the forest. “Now children”, the mean stepmother said, “your father and I are going to collect some berries. We’ll be right back”. The father kissed his children and walked away with the stepmother. Gretel started to cry. “Do not cry, sister.” Hansel said. “We will find our way home. I dropped blue pebbles all along the way”. Hansel and Gretel followed the trail of pebbles all the way home. `,
        question: { text: 'Do you wish to continue the story?', options: [{text: 'Yes', goTo: 4}, {text: 'No, this seems like a nice happily ever after.', goTo: 2}]}
      },
      {
        id: 4,
        title: true,
        image: './imgs/homecoming.png',
        name: 'Picnic Take 2 Scene',
        text: `A few hours later, Hansel and Gretel arrived home. The stepmother looked angry. The father looked happy. "Thank goodness you came home!" the father said. "It was silly of you to get lost," said the stepmother. After Hansel and Gretel went to bed, the parents had a talk. "We have to try it again," said the stepmother. "I cannot. I love them," replied the father. "We are doing it again. Tomorrow." the stepmother said firmly. The next morning, the stepmother gave Hansel and Gretel a loaf of bread, and the family went back to the forest.`,
        question: { text: 'What do you wish to do?', options: [{text: 'Eat the loaf. You are starving!', goTo: 5}, {text: 'Leave a trail of breadcrumbs as you walk along.', goTo: 6}]}
      },
      {
        id: 5,
        title: true,
        name: 'Ate Bread Scene',
        text: `Hansel and Gretel ate the loaf of bread. "Greedy children!" the stepmother shouted. "We were all supposed to share the bread during the picnic. Now your father and have to go find more. Stay here." Hansel and Gretel waited for their parents to return, but a few hours passed, and there was still no sign of them.`,
        question: { text: '', options: [{text: 'Continue Story', goTo: 14}]}
      },
      {
        id: 6,
        title: true,
        image: './imgs/birds-bread.jpg',
        name: 'Owl Scene',
        sound: './owl-hoot.mp3',
        text: `Hansel broke his loaf of bread into pieces, leaving a trail of crumbs behind as they walked through the forest. "Now, children," the stepmother said. "Your father and I are going to get berries. We will be right back." Hansel and Gretel waited patiently; however, after a couple of hours, the parents still had not returned. Hansel thought to follow the bread crumbs home, but the bread crumbs had been eaten by birds. They were long gone, and now Hansel and Gretel were truly lost. Suddenly, they heard a voice. It was an owl in the tree. 'This is no time to be walking through the woods, children. I can help you get some wood to build a fire and stay warm but only if you play a game with me.'`,
        question: { text: '', options: [{text: 'No, thank you. My sister and I will find our way.', goTo: 14}, {text: 'Yes, we will play a game with you and would very much appreciate some firewood, Mr. Owl.', goTo: 7}]}
      },
      {
        id: 7,
        title: true,
        image: './imgs/owl-moon.png',
        name: 'Pre Riddle Scene',
        sound: './owl-hoot.mp3',
        text: `Very well. Here are the rules to the game. I will recite a riddle, and you will have 3 chances to guess correctly. If you guess correctly within 3 guesses, I shall grant you firewood, and you may stay here for a while. If you lose and do not guess correctly, you have to leave immediately because there are evil creatures lurking around, and they will disturb us if they smell children. Are you ready to play?`,
        question: { text: '', options: [{text: 'Yes.', goTo: 8}]}
      },
      {
        id: 8,
        title: true,
        image: './imgs/riddle.jpg',
        name: 'Riddle Scene',
        text: `I am the beginning of the end, the end of every place. I am the beginning of eternity, the end of time and space. What am I?`,
        question: { text: '', options: [{text: 'Continue', goTo: 9}]},
        inputs: [{ type: 'text', name: 'guess', correctAnswer: 'the letter e', goTo: { correct: 9, incorrect: 14}}]
      },
      {
        id: 9,
        title: true,
        image: './imgs/fire.jpg',
        sound: './bonfire.wav',
        name: 'Fire Scene',
        scaryScene: true,
        text: 'As promised, I shall grant you wood to build a fire. We must flee soon, as the full moon is approaching. Before I depart, remember my words: "You are now in the forest, so dark and deep..where witches and wolves and other beasts creep. Be careful and cautious, and generally beware. Do not be fooled if they seem to show care. It is often an act, perhaps a disguise. I beg you to listen to me, the owl, the wise. Travel swiftly but softly and always be smart. Make good choices, and trust your heart." Hansel built a fire, and the he and his sister cuddled near it to try and stay warm. Suddenly, the owl and all of the birds around them flew away hurriedly. ',
        question: { text: '', options: [{text: 'Continue Story', goTo: 10}]}

      },
      {
        id: 10,
        title: true,
        image: './imgs/little-red-2.png',
        name: 'Little Red Scene',
        text: `Oh, thank goodness! Other children..I thought I was alone. Are you lost as well?`,
        question: { text: '', options: [{text: 'Yes, who are you? Can you help us?', goTo: 11}, {text: 'No, we are just waiting for our parents.', goTo: 11}]}
      },
      {
        id: 11,
        title: true,
        image: './imgs/little-red-2.png',
        name: 'Little Red Scene Continued',
        text: `Everyone calls me Little Red, as you can tell from this cloak grandmother made me. I am also lost. I was actually on my way to my grandmother's when I ran into a wolf! I had to run away from him, and now I cannot find the path to my granny's. Do you mind if I sit by the fire with you? I have some cakes that we can share.`,
        question: { text: '', options: [{text: 'Of course not. We would love some cake.', goTo: 12}]}
      },
      {
        id: 12,
        title: true,
        image: './imgs/little-red-moon.jpg',
        name: 'Little Red Scene Part 3',
        text: `Thank you, that is very kind. I think we should continue traveling soon while the full moon is still up. Shall we travel together?`,
        question: { text: '', options: [{text: 'Yes', goTo: 13}]}
      },
      {
        id: 13,
        title: true,
        image: './imgs/fork.png',
        name: 'Fork in the Road Scene',
        text: `The children continued their journey through the woods when they reached a fork in the road.`,
        question: { text: 'Which path will you take?', options: [{text: 'Left', goTo: 18}, {text: 'Right', goTo: 18}]}
      },
      {
        id: 14,
        title: false,
        name: 'Storm Scene',
        sound: './storm.mp3',
        styles: {
          backgroundColor: '#222',
          color: '#ffffff'
        },
        rain: true,
        text: `Suddenly, a storm overcame the forest. Hansel and Gretel could barely see, but they heard a sinister voice in the distance. "Hello, who goes there? Little Red, is that you?"`,
        question: { text: '', options: [{text: 'Who are you?', goTo: 19}, {text: 'Turn around and walk away.', goTo: 15}]}
      },
      {
        id: 15,
        title: false,
        image: './imgs/cave.jpg',
        styles: {
          backgroundColor: '#222',
          color: '#ffffff'
        },
        name: 'Cave Scene',
        text: `As Hansel and Gretel hurried away, they saw a bright light emanating from the distance. "Look, Hansel!" Gretel shouted. There is a light over there. Maybe we can stop to rest and find our bearings, or perhaps there is someone who can help us."`,
        question: { text: '', options: [{text: 'Walk toward the light.', goTo: 16}]}
      },
      {
        id: 16,
        title: true,
        image: './imgs/rabbit-hat.png',
        name: 'Rabbit Scene',
        text: `"Well, hello there children", said a rabbit from inside the cave. "You look cold and wet. You are welcome to join me. I can even give you a torch to help guide you through the forest but only if you play a game with me. What do you think?"`,
        question: { text: '', options: [{text: 'Yes, we will play a game.', goTo: 17}, {text: 'No, thank you. We can carry on.', goTo: 17}]}
      },
      {
        id: 17,
        title: false,
        cards: true,
        name: 'Cards Scene',
        text: `Behind each card is one forest dweller,
               Some are deemed evil and others deemed stellar,
               Pay close attention to all, friend or foe,
               You may even expose those you already know.
               The queen of hearts is the card that I seek,
               You may choose 3 but have no other peek!
               If you find her highness, oh, what a delight!
               As the torch that I grant you will light this dark night.`,
        question: { text: '', options: [{text: 'Continue Story', goTo: 18}]}
      },
      {
        id: 18,
        title: true,
        image: './imgs/gingerbread-house-1.jpg',
        name: 'Gingerbread House Scene 1',
        text: `The children continued onwards but were feeling very exhausted and hungry. Several hours had passed since they last rested, and the night was growing colder. They came across some sweets along the path. "Look!" Gretel shouted. "Maybe someone else went for a walk and decided to leave this trail of sweets behind. Perhaps if we follow it, we will find shelter!" The children continued to follow the sweets and suddenly saw a light in the distance and what looked like the silhouette of a house.`,
        question: { text: '', options: [{text: 'Walk toward the house.', goTo: 19}]}
      },
      {
        id: 19,
        title: true,
        image: './imgs/sweet-house.jpg',
        name: 'Gingerbread House Scene 2',
        text: `The children couldn't believe their eyes (or noses!). As they approached the house, the most delicious aromas pervaded the air, and they realised that it was constructed entirely of gingerbread and sweets! An old woman opened the door and greeted them. "Oh, what a delightful surprise! I rarely have guests visit at this hour. You children look cold. Why don't you come inside for a nice warm meal?"`,
        question: { text: '', options: [{text: 'Thank you! We would love that.', goTo: 20}]}
      },
      {
        id: 20,
        title: true,
        image: './imgs/cage1.jpg',
        sound: './witch-laugh.wav',
        name: 'Witch Scene',
        text: `After the children stepped inside, the woman suddenly transformed into a haggard witch. She cackled sinisterly and said, "You silly children fell for my trap! It is not you but me who will be enjoying a delectable meal tonight." She grabbed Hansel and Gretel and locked them in a cage. Little Red managed to slip away and assured Hansel and Gretel that she would go seek help and return for them.`,
        question: { text: '', options: [{text: 'Continue Story', goTo: 21}]}
      },
      {
        id: 21,
        title: true,
        image: './imgs/cage2.jpg',
        name: 'Cage Scene',
        text: `While the witch was not looking, a frog suddenly jumped to the edge of the cage and croaked, "Sweet children! I am so sorry that you are trapped. I am also trapped, but I think we may be able to help each other."`,
        question: { text: '', options: [{text: 'How?', goTo: 22}]}
      },
      {
        id: 22,
        title: true,
        image: './imgs/gingerbread-house-1.jpg',
        name: 'Frog Scene',
        text: `"The evil witch cast a terrible spell on me, but I cannot save you unless it is broken. I know the words that will break the spell, but the spell prevents me from actually saying them. I have a scroll that serves as a clue. Do you think you can solve it?"`,
        question: { text: '', options: [{text: 'Yes, we can try!', goTo: 23}]}
      },
      {
        id: 23,
        title: true,
        image: './imgs/scroll.png',
        name: 'Scroll Scene',
        text: ``,
        question: { text: '', options: [{text: '', goTo: 23}]},
        responses: [{ type: 'text', name: 'guess', correctAnswer: 'Follow your heart to find your way home.', goTo: { correct: 24, incorrect: 23}}]
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
