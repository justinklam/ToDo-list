// Client facing scripts here
///Will clean up later
$(document).ready(function () {

  loginToggle();
  registrationToggle();


  // Displays Books once book-icon is clicked

  const booksSection = function () {

    const HTML = `<div class='header'>Books<div>`

    $('#book-icon').click(function () {
      $('.header').hide();
      $('.main_content').append(HTML);
    })
    return;
  }
  booksSection();

  //Displays shopping list when shopping icon is clicked
  const shoppingSection = function () {

    const HTML = `<div class='header'>Shopping<div>`

    $('#shopping-icon').click(function () {
      $('.header').hide();
      $('.main_content').append(HTML);
    })
    return;
  }
  shoppingSection();

  // Displays movie lists when movie icon is clicked
  const moviesSection = function () {

    const HTML = `<div class='header'>Movies<div>`

    $('#movie-icon').click(function () {
      $('.header').hide();
      $('.main_content').append(HTML);
    })
    return;
  }
  moviesSection();

  // Displayes resturant lists when resturant icon is displayed
  const restaurantSection = function () {

    const HTML = `<div class='header'>Restaurants<div>`

    $('#resturaunt-icon').click(function () {
      $('.header').hide();
      $('.main_content').append(HTML);
    })
    return;
  }
  restaurantSection();

  const homeSection = function () {

    const HTML = `<div class='header'>My Lists<div>`

    $('.home').click(function () {
      $('.header').hide();
      $('.main_content').append(HTML);
    })
    return;
  }
  homeSection();
})


const registrationToggle = function () {

  $('.register').on('click', function () {
    $('.bg-modal_register').css({ 'visibility': 'visible' })
  });

  $('button').on('click', function () {
    $('.bg-modal_register').css({ 'visibility': 'hidden' })
  })
}

const loginToggle = function () {
  $('.login').on('click', function () {
    $('.bg-modal').css({ 'visibility': 'visible' })
  });

  $('button').on('click', function () {
    $('.bg-modal').css({ 'visibility': 'hidden' })
  })
}
