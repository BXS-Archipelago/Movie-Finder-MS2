# Movie Search Project for Code Institute Milestone 2 Project

## Created by Brian Smyth

# About

With the popularity of streaming services for movies and TV shows, this site is created to serve as a cross-reference for titles. It will also offer the current trending titles in the form of a chart of the top 250 titles of either TV productions or Movies. The site will also offer a the option to keep a wishlist - a user-updated list of titles they want to watch in the future - with the ability to strike-out titles as watched or the option to delete from the list.


## User Experience

As a visitor to the site, I want an immediately accessible search function on either desktop, laptop or mobile device.  I want to be able to research movie titles beyond the brief synopsis offered by services such as Netflix or DisneyPlus Star. 

> I want an easily understood page, with obvious functionality
> Navigation must be plain, uncomplicated and user friendly to any age or ability.
> I like a classic movie theme to enhance the enjoyment of the site visit. 
> If I need to access external resources to help my search, I want to easily return to this site. 
> I want to be able to save items of interest so I can come back to the page and consult my own previous choices. 
> I want a site that I can spend time browsing on or equally, visit quickly and leave with what I came for. 
> I want to be able to contact the website with feedback.
> 


## Site Features

#### Top 

The uppermost section of the page will contain the logo to the left. This will be text-based and subtle to cause minimal distraction.  

The top right of the page will contain four navigation links for the overall site content. 

The body of the page will contain two parts. The top section containing the input fields, and the bottom section to hold any output from the movie choices or for the Wishlist contents. 

In mobile view, the navigation links become activated by a hamburger bar icon with the navigation links offered as full width bars to easily click on. 


## Landing page

This is the search page, the reason the user visits the site.  A jumbotron will offer the search bar so the user will immediately and intuitively be able to proceed.  The search bar uses the API for the IMDb database of movies and TV shows. 

Upon searching, the lower section of the page will offer a grid of every movie related to the title that was searched for. 

The result will contain any poster image that IMDb has on file, the movie title and description. The result will also offer the link to the official IMDB page for that particular movie, which will open in a page separate to our site. 


## Languages Used in this project: 

- HTML5
- CSS3
- Javascript

## Resources and Frameworks include: 

- Bootstrap version 4.5.2 :  Bootstrap had minimal use in this site, used primarily for the Jumbotron. 

jquery :  in creating the API to interface with IMDb dynamically. 

Google Fonts :  The CSS imports the "Righteous" font family from Google Fonts. 

Github :  As the repository to host the site. 

Git : Dynamic version control and taking a snapshot of regular updates. 

GitPod: The platform where the site is created and hosted during the build stages. 

Balsamiq Wireframes Version 4.1.9  used to create mock-up version of the site. 

Visual Studio Code : a comprehensive code editor, it was used here for offline bug-testing and dummy-runs of the API in operation to avoid any additional clutter in the GitPod and Github environment. 

Unsplash.com : the kindly provider of our single image used in this website. 

Compressjpeg.com:  an online tool used to compress the image to a more workable hosted size. 

Font Awesome : Icons were used in the Wishlist page. 

# Styling & Design : 
    There is only a single image on the site, noted in the final credits. It is of a vintage Cinema projector with very little colour in it. The effect rendered is almost Sepia but not quite. 

    There are two primary colours used in the website: White & Black for text and background in some areas.  One secondary colour is used in the input bars, Orange. 

    The main colour scheme is adopted from the single jpeg used in the site. They are mostly warm tan, cream and grey colours extracted using the Chrome Colour Picker extension and added in to the CSS to give a vintage feel to the site.

    The colours specified are as follows: 
        Body background: #E5E5E5 - soft grey
        Logo & Footer area, alternating search result BG : #393939 - dark grey .
        Navigation links : #B56B50 - earthenware brown
        Jumbotron & Buttons: #6D6F5B -  soft mid-tone green
        Button-Hover & search result text: #CECBC2 - a light cream-grey shade
        Search result alternating background : #49473B - dark grey-green shade

Font Choice : "Righteous" is the style of font imported from Google fonts. This is a clean font, with a slightly vintage feel but also modern

Google Fonts :  The CSS imports the "Righteous" font family from Google Fonts. The secondary choice of font for fall-back situations is Sans Serif. 





# TESTING

Continuous testing will be logged in this section: 

Navigation links are css controlled.  The responsive drop-down menu is based on a burger made of three lines, with an animation to convert them in to an X for closing. I wanted to complete this in line with the mock-up design. 

#### Feasibilty test complete: Index.html page and CSS created and designed according to Wireframe Mockup. Wireframe file MOVIE FINDERS MS2 WF.pdf uploaded. 

The site objective will appear on the landing page. This is a movie search API using IMDb.com as a resource for the search results. This requires setting up an account and accessing the API options and documentation pages on IMDb.

IMDB account set up and the key for the API permission has been received : "k_x3bnm044"

IMDB uses the following object style to output the data: 
{
  "searchType": "string",
  "expression": "string",
  "results": [
    {
      "id": "string",
      "resultType": "string",
      "image": "string",
      "title": "string",
      "description": "string"
    }
  ],
  "errorMessage": "string"
}

Using the search term "JAWS" as the movie, Console.log(data) for the object gives the following output and array: 
"searchType": "Movie",
  "expression": "jaws",
  "results": [
    {
      "id": "tt0073195",
      "resultType": "Title",
      "image": "https://imdb-api.com/images/original/MV5BMmVmODY1MzEtYTMwZC00MzNhLWFkNDMtZjAwM2EwODUxZTA5XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_Ratio0.7273_AL_.jpg",
      "title": "Jaws",
      "description": "(1975)"
    },


    The search objective for my site is to retrieve the following: 
        - image
        - title
        - description
        - id 

    These will be displayed in a cell and the results page will display a grid of results  either double or single column, for desktop or mobile respectively.

    The click event of the search button means this data will be fetched with the json function. A forEach loop will iterate each value to the innerHTML of the div that will automatically create within the "results-container" div stored in the index.html page.  

    Using variable let title = jaws
    First attempts unsuccessful as the empty array was mistakenly to "results.data" as per the format in the json object.  The fix is obvious now, it has been changed to "data.results".
    Succesful API connection now. 
    
    The initial test offers to the console {searchType: "Movie", expression: "jaws", results: Array(8), errorMessage: ""}

    The search results display in the lower part of the screen but need a lot of CSS styling to properly see the movies as information to browse. 

     - top.html 

     This page will have two buttons to return the top trending 250 Movies or the top 250 TV shows. 

     I have now reduced this to the top 50 so as not to overpower the visitors resources with images and data, and to speed up the search. This was achieved using .slice() function

     Top 50 movies javascript is less involved than the search function. In testing it, all that is required is to send the request for the highest rated movies and display the objects returned from IMDB by rank. And the identical step for the Top TV shows as well.  

    console.log(data) for movies and TV shows shows object/array are produced in groups of 0-99, 100-199, 200-250.  This caused some additional thought as I presumed I needed to further access the first array index as sub-index in this format.  It turned out the items list doesn't require any different method of access. 

    Watchlist - Requirement : input field, save button, output required to have option to put a line-through for completed tasks and option to delete from list. 

    Watchlist bug: For items created in the watchlist, I have a tick-complete icon and a delete icon. I am finding it very difficult to attach the click event so that each serves its purpose individually.     Test : I included onclick events for both font-awesome icons in the elements as I couldn't target them using querySelector or getElementsbyId, etc.  Will need further tests and probably tutor support. I also need figure out how to save this to Local Storage in the browser!  (I will set the contact page first and return to this after due to lateness and brain-malfunction!)

    Contact Form Testing : EmailJS service key and template number created and applied in local contact.js.  The online template test at EmailJS works fine and is sending to my inbox. However, several attempts from the gitpod site have not been succesful. All form data looks correct. 

    Contact-Form Fix. Deleted the contents of the template and recreated it as per the form required. All working succesfully and emails from webpage received accordingly.

    Known issue: on the Watchlist page, the list renders successfully. The list is saved to local storage and then retrieved successfully. The list items are deleted without problem using the font-awesome X icon. The tick icon also functions correctly for the line-through, both to select and de-select the line.  The only issue is that the line-through does not save & retrieve in local storage. I contacted Code Institute support for troubleshooting this objective but this communication was unsuccessful. I will continue to investigate the issue separately, as I have a good idea what to do but at this point, I was unable to achieve the full functionality. 


    Functionality Testing: 
    
        ## Navigation bar tested for positioning in desktop, tablet and mobile size, and works fine.

        ## Navigation links all work correctly on each page. 

        ## Footer positioning : Footer remains at the bottom of the page. I chose sticky Footer because the results of the search pages can require some scrolling and it would put large distance between the footer and header otherwise. 

        ## All links work in the Footer.  Copyright added to footer. 

        ## Hamburger menu works in both Tablet and Mobile Phone display. 

        ## Drop Down links all function correctly in mobile view. 

        ## All links generated from Search Results open in a separate page/tab, allowing the user to easily return to the site. 

        ## Watchlist saves information entered by user to local storage and opens it when the page is revisited. 

        ## Watchlist lines delete upon click of X icon from Local Storage

        ## Contact page interacts successfully with Email JS.  Emails are sent to my own inbox from the website. 

        ## Movie Search operation displays results successfully in the lower panel of the search page.  Movie poster displays where available from IMDb.

        ## Title and description of movies display.  

        ## The button linking to IMDb by Movie ID works and opens in a separate page as desired. 

        ## Top 50 page buttons work and display grids operate for either Movie API or TV Shows API. 



