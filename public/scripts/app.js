// Client facing scripts here
// remember to create link in HTML file
// <script src="./app.js"></script>

$(document).ready(function() {

  // Displays Books once book-icon is clicked

  const booksSection = function() {

    const HTML = `<div class='header'>Books<div>`;

    $('#book-icon').click(function() {
      $('.header').hide();
      $('.main_content').append(HTML);
    });
    return;
  };
  booksSection();

  //Displays shopping list when shopping icon is clicked
  const shoppingSection = function() {

    const HTML = `<div class='header'>Shopping<div>`;

    $('#shopping-icon').click(function() {
      $('.header').hide();
      $('.main_content').append(HTML);
    });
    return;
  };
  shoppingSection();

  // Displays movie lists when movie icon is clicked
  const moviesSection = function() {

    const HTML = `<div class='header'>Movies<div>`;

    $('#movie-icon').click(function() {
      $('.header').hide();
      $('.main_content').append(HTML);
    });
    return;
  };
  moviesSection();

  // Displayes resturant lists when resturant icon is displayed
  const restaurantSection = function() {

    const HTML = `<div class='header'>Restaurants<div>`;

    $('#resturaunt-icon').click(function() {
      $('.header').hide();
      $('.main_content').append(HTML);
    });
    return;
  };
  restaurantSection();

  const homeSection = function() {

    const HTML = `<div class='header'>My Lists<div>`;

    $('.home').click(function() {
      $('.header').hide();
      $('.main_content').append(HTML);
    });
    return;
  };
  homeSection();


  const registrationToggle = function() {

    $('.register').on('click', function() {
      $('.bg-modal_register').css({ 'visibility': 'visible' });
    });

    $('button').on('click', function() {
      $('.bg-modal_register').css({ 'visibility': 'hidden' });
    });
  };

  const loginToggle = function() {
    $('.login').on('click', function() {
      $('.bg-modal').css({ 'visibility': 'visible' });
    });

    $('button').on('click', function() {
      $('.bg-modal').css({ 'visibility': 'hidden' });
    });
  };
  loginToggle();
  registrationToggle();

  // Books API
  //values that we will use from the res API (JSON results)
  let item, title, author, bookImg;
  let outputList = document.getElementById("list-output");
  let bookURL = "https://www.googleapis.com/books/v1/volumes?q=";
  let apiKey = "key=AIzaSyDtXC7kb6a7xKJdm_Le6_BYoY5biz6s8Lw";

  // default img if return does not have an image
  let placeHolder = '<img src="https://via.placeholder.com/150">';
  let searchData;

  //-------------------------------------- listener for search/submit button (See HTML) - ex here: "#search"
  $("#search").click(function() {
    // empty HTML output
    outputList.innerHTML = "";

    // get the input value for the user
    searchData = $("#search-box").val();

    // handling empty search input field
    if (searchData === "" || searchData === null) {
      displayError();
    } else {
      //AJAX, jQuery function
      $.ajax({
        url: bookURL + searchData,
        dataType: "json",
        success: function(response) {
          // display in console
          console.log("response from AJAX request", response);

          if (response.totalItems === 0) {
            alert("no results!... try again!");
          } else {
            $("#title").animate({ "margin-top": "5px" }, 1000); //search box animation
            $(".book-list").css("visibility", "visible");
            displayResults(response);
          }
        },
        error: function() {
          alert("Something went wrong.. <br>" + "Try again!");
        },
      });
    }
    // clear values in search box
    $("#search-box").val("");
  });
  // function to display results in HTML | loop through items: Array(10) from books API to capture elements we want

  const displayResults = function(response) {
    for (let i = 0; i < response.items.length; i += 1) {
      item = response.items[i];

      // -------------------------- capture the elements for display on front-end
      title = item.volumeInfo.title;
      author = item.volumeInfo.authors;
      bookImg = item.volumeInfo.imageLinks
        ? item.volumeInfo.imageLinks.thumbnail
        : placeHolder;

      // output to output list
      outputList.innerHTML +=
        '<div class="row mt-4">' +
        // HTML template where we can include Js variables
        formatOutput(bookImg, title, author);
      ("</div>");

      console.log(outputList);
    }
  };

  // template for bootstrap cards

  const formatOutput = function(bookImg, title, author) {
    // view the book once user clicks on the link
    // let viewUrl = "book.html ? isbn = " + bookIsbn; //constructing link for bookviewer

    // temporary ejs formatting of page
    let htmlCard = `<div class="col-lg-6">
       <div class="card" style="">
         <div class="row no-gutters">
           <div class="col-md-4">
           </div>
           <div class="col-md-8">
             <div class="card-body">
               <h5 class="card-title">${title}</h5>
               <p class="card-text">Author: ${author}</p>

             </div>
           </div>
         </div>
       </div>
     </div>`;
    return htmlCard;
  };

  //handling error for empty search box
  const displayError = function() {
    alert("search term can not be empty!");
  };

});
