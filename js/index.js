import {header , jumbotron, footer } from './static.js';
import { getCard, getFinalCard } from './cards.js';
import { cardsData } from '../data/cards_data.js';

$(function() {

  // state
  let cardIndex = 0;
  const resArray = [null, null, null, null, null]

  const body = $('body')

  const cardContainer = $('<div></div>').addClass('container my-5')
  const row = $('<div></div>').addClass('row')
  const col = $('<div></div>').addClass('col-12 col-lg-6 mx-auto')

  const navClickHandler = (dir) => {
    cards[cardIndex].addClass('hidden');
    const inputVal = $(`input[name='a-${cardIndex}']:checked`).val()
    resArray[cardIndex] = inputVal
    // if direction === 'next' increment card index, else
    // if direction === 'prev' decrement card index
    cardIndex = dir === 'next' ? cardIndex + 1 : cardIndex - 1
    if (cardIndex !== 5) {
      cards[cardIndex].removeClass('hidden')
    } else {
      const finalCard = getFinalCard(resArray)
      col.append(finalCard)
    }
  }

  const cards = cardsData.map((cardData, i) => {
    const card = getCard(cardData, i)
    const buttonContainer = $('<div></div>').addClass('container d-flex justify-content-center')
    const prevButton = $('<button></button>').addClass('btn btn-primary mx-2 mt-4 prevButton').text('Prev')
    .attr('type', 'button').on('click', () => navClickHandler('prev'))
    const nextButton = $('<button></button>').addClass('btn btn-primary mx-2 mt-4 nextButton').text('Next')
    .attr('type', 'button').on('click', () => navClickHandler('next'))
    i > 0 ? buttonContainer.append(prevButton).append(nextButton) :
    buttonContainer.append(nextButton)
    card.append(buttonContainer)
    return card
  })
  cards[cardIndex].removeClass('hidden')

  cardContainer.append(row)
  row.append(col)
  col.append(cards)

  body.append(header).append(jumbotron).append(cardContainer).append(footer)
})