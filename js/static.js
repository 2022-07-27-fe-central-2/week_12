export const header = $('<h1></h1>').text('Sorting Hat').addClass('container text-center my-5')

export  const jumbotron = $('<div></div>').addClass('container d-flex justify-content-center my-5')
  const sortingHatImg = $('<img/>').addClass('sorting-hat').attr('src', '../assets/Sorting_Hat.webp');
  jumbotron.append(sortingHatImg)

export  const footer = $('<div></div>').addClass('container d-flex justify-content-between my-5')
  const img1 = $('<img />').addClass('crest gryffindor').attr('src', '../assets/Gryffindor_crest.webp')
  const img2 = $('<img />').addClass('crest slytherin').attr('src', '../assets/Slytherin_crest.webp')
  const img3 = $('<img />').addClass('crest ravenclaw').attr('src', '../assets/Ravenclawcrest.webp')
  const img4 = $('<img />').addClass('crest hufflepuff').attr('src', '../assets/Hufflepuff_crest.webp')
  footer.append(img1).append(img2).append(img3).append(img4)