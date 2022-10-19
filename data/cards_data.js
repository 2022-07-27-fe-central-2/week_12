export const houses = new Map([
  ['g', 'Gryffindor'],
  ['h', 'Hufflepuff'],
  ['r', 'Ravenclaw'],
  ['s', 'Slytherin']
])

const c1 = {
  question: 'Which animal do you like the most?',
  answers: [
    {
      text: 'Eagle',
      value: houses.get('r')
    },
    {
      text: 'Lion',
      value: houses.get('g')
    },
    {
      text: 'Badger',
      value: houses.get('h')
    },
    {
      text: 'Serpent',
      value: houses.get('s')
    }
  ]
}
const c2 = {
  question: 'Which attribute do you value most?',
  answers: [
    {
      text: 'Dedication',
      value: houses.get('h')
    },
    {
      text: 'Ambition',
      value: houses.get('s')
    },
    {
      text: 'Bravery',
      value: houses.get('g')
    },
    {
      text: 'Intelligence',
      value: houses.get('r')
    }
  ]
}
const c3 = {
  question: 'Which is your favorite color?',
  answers: [
    {
      text: 'Green',
      value: houses.get('s')
    },
    {
      text: 'Yellow',
      value: houses.get('h')
    },
    {
      text: 'Blue',
      value: houses.get('r')
    },
    {
      text: 'Red',
      value: houses.get('g')
    }
  ]
}
const c4 = {
  question: 'Which of the following classic elements do you prefer?',
  answers: [
    {
      text: 'Fire',
      value: houses.get('g')
    },
    {
      text: 'Air',
      value: houses.get('r')
    },
    {
      text: 'Water',
      value: houses.get('s')
    },
    {
      text: 'Earth',
      value: houses.get('h')
    }
  ]
}
const c5 = {
  question: 'What is your weakness?',
  answers: [
    {
      text: 'Naivety',
      value: houses.get('h')
    },
    {
      text: 'Insecurity',
      value: houses.get('s')
    },
    {
      text: 'Arrogance',
      value: houses.get('r')
    },
    {
      text: 'Recklessness',
      value: houses.get('g')
    }
  ]
}

export const cardsData = [c1,c2,c3,c4,c5]

// c6: final card
// final card should display once the last question is answered and next button is clicked
// need to compute the results of all the answers and, display result of which house user is sorted into
