# Movie Search Project for Code Institute Milestone 2 

## Created by Brian Smyth

### About

With the popularity of streaming services for movies and TV shows, this site is created to serve as a cross-reference for titles. It will also offer the current trending titles in the form of a chart of the top 250 titles of either TV productions or Movies. The site will also offer a the option to keep a wishlist - a user-updated list of titles they want to watch in the future - with the ability to strike-out titles as watched or the option to delete from the list.


## User Experience

As a visitor to the site, I want an immediately accessible search function on either desktop, laptop or mobile device.  I want to be able to research movie titles beyond the brief synopsis offered by services such as Netflix or DisneyPlus Star. 

>I want an easily understood page, with obvious functionality

>Navigation must be plain, uncomplicated and user friendly to any age or ability.

> I like a classic movie theme to enhance the enjoyment of the site visit. 

> If I need to access external resources to help my search, I want to easily return to this site. 

> I want to be able to save items of interest so I can come back to the page and consult my own previous choices. 

> I want a site that I can spend time browsing on or equally, visit quickly and leave with what I came for. 

> I want to be able to contact the website with feedback.
> 


## Wireframe Mock-Up created with Balsamiq.  
This document is saved in the Assets folder or at the following link:

[MOVIE FINDER MS2 WF.pdf](https://github.com/BXS-Archipelago/Movie-Finder-MS2/files/6167224/MOVIE.FINDER.MS2.WF.pdf)


## Site Features

## Header

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

- jquery :  in creating the API to interface with IMDb dynamically. 

- Google Fonts :  The CSS imports the "Righteous" font family from Google Fonts. 

- Github :  As the repository to host the site. 

- Git : Dynamic version control and taking a snapshot of regular updates. 

- GitPod: The platform where the site is created and hosted during the build stages. 

- Balsamiq Wireframes Version 4.1.9  used to create mock-up version of the site. 

- Visual Studio Code : the comprehensive code editor, it was used here for offline bug-testing and dummy-runs of the API in operation to avoid any additional clutter in the GitPod and Github environment. 

- Unsplash.com : the kindly provider of my single image used in this website. 

- Compressjpeg.com:  an online tool used to compress the image to a more workable hosted size. 

- Font Awesome : Icons were used in the Wishlist page. 

## Styling & Design : 
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

> Continuous testing will be logged in this section: 

## Global Features

> Navigation links are css controlled.  The responsive drop-down menu is based on a burger made of three lines, with an animation to convert them in to an X for closing. I wanted to complete this in line with the mock-up design. 

> Footer consists of the four navigation links. Because the search functions of the two first pages will generate several rows of results, the footer is fixed to remain visible always. Otherwise the header navigation will require a lot of scrolling to reach again, expecially in small devices. 

>  #### Feasibilty test complete: Index.html page and CSS created and designed according to Wireframe Mockup. 

> The site objective (movie search) will appear on the landing page. This is a movie search API using IMDb.com as a resource for the search results. This requires setting up an account and accessing the API options and documentation pages on IMDb.

> IMDB account set up and the key for the API permission has been received : "k_x3bnm044"

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
                    
=

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
        - Succesful API connection now. 
        
    The initial test offers to the console {searchType: "Movie", expression: "jaws", results: Array(8), errorMessage: ""}

    - The search results display in the lower part of the screen but need a lot of CSS styling to properly see the movies as information to browse. 

## top.html 

     This page will have two buttons to return the top trending 250 Movies or the top 250 TV shows. 

     I have now reduced this to the top 50 so as not to overpower the visitors' resources with images and data, and to speed up the search. This was achieved using .slice(0, 50) function

     Top 50 movies javascript file is less involved than the search function. In testing it, all that is required is to send request the highest rated movies and display the objects returned from IMDB by rank. And the identical step for the Top TV shows as well.  

    console.log(data) for movies and TV shows shows objects are produced in groups of 0-99, 100-199, 200-250.  This caused some additional thought as I presumed I needed to further access the first array index as sub-index in this format.  It turned out the items list doesn't require any different method of access. 

## watchlist.html - 

>My requirement : input field, save button, with the output required to have option to put a line-through for completed tasks, and also option to delete from list. 

>Watchlist bug: For items created in the watchlist, I have a tick-complete icon and a delete icon. I am finding it very difficult to attach the click event so that each serves its purpose individually.     Test : I included onclick events for both font-awesome icons in the elements as I couldn't target them using querySelector or getElementsbyId, etc. This needed further tests and research. I also needed figure out how to save this to Local Storage in the browser at this point.  

>Watchlist reached a point where I could input list items and render them to the results area. However, as an example if I create ten items and delete half of them, they are all returned to the list again upon adding one more item.  I did a number of things to solve this, but I'm not sure which worked! I moved the empty array variable to the top of the page. I also added the listRendering() function inside the end of the deleting function. 

>Credit to my course mentor here, because he assisted me in fixing the final issue of being able to mark a list-item as completed (line-through) and saving/retrieving from local storage. After intensive adjustments and testing, we got the form to set and get values, with the line-through where appropriate. It is now a properly functioning list. 


## Contact Form Testing : 
    EmailJS service key and template number created and applied in local contact.js.  The online template test at EmailJS works fine and is sending to my inbox. However, several attempts from the gitpod site have not been succesful. All form data looks correct. 

    Contact-Form Fix. Deleted the contents of the template and recreated it as per the form required. All working succesfully and emails from webpage received accordingly.

    
## Functionality Testing: 

- Navigation bar tested for positioning in desktop, tablet and mobile size, and works fine.

- Navigation links all work correctly on each page. 

- Footer positioning : Footer remains at the bottom of the page. I chose sticky Footer because the results of the search pages can require some scrolling and it would put large distance between the footer and header otherwise. 

- All links work in the Footer.  Copyright added to footer. 

- Hamburger menu works in both Tablet and Mobile Phone display. 

- Drop Down links all function correctly in mobile view. 

- All links generated from Search Results open in a separate page/tab, allowing the user to easily return to the site. 

- Watchlist saves information entered by user to local storage and opens it when the page is revisited. 

- Watchlist lines delete upon click of X icon from Local Storage

- Contact page interacts successfully with Email JS.  Emails are sent to my own inbox from the website. 

- Movie Search operation displays results successfully in the lower panel of the search page.  Movie poster displays where available from IMDb.

- Title and description of movies display.  

- The button linking to IMDb by Movie ID works and opens in a separate page as desired. 

- Top 50 page buttons work and display grids operate for either Movie API or TV Shows API. 

## Known Bugs: 

Through many trials and tests of the pages, there are no known bugs upon completion. 


Device Testing:  
Widescreen Desktop on Dell 24" Monitor. 
Laptop Screen Dell XPS 15" 
Samsung Galaxy 10.4" Tablet
Huawei 6.4" Mobile Phone
Apple iPhone 4.7" Mobile Phone. 

Human testing:  The site was tested by three other people to check functionality without issues. 

### Online testing : https://responsivedesignchecker.com/

Desktop 10" to 24" desktop test: Passed
Tablet devices : 9 screen sizes ranging from 600 x 960 up to 1366 x 1024
Mobile phones: 10 devices of various sizes. 

All available screen sizes show no fault in display responsiveness. 

## Validation

### HTML 
### CSS

![w3validatorcss](https://user-images.githubusercontent.com/71372294/111697684-c716d400-882d-11eb-810f-e224146e6ac2.gif)


HTML (all pages) and CSS pass the W3C Validation successfully.


## Catchpoint Webpage Testing : 

Overall test results can be found here. The resource used is Catchpoint's facility on www.webpagetest.org

Index Page : https://www.webpagetest.org/result/210318_XiBQ_4aa9cfc7b5a73384b5a9338c80414028/
Top 50 page : https://www.webpagetest.org/result/210318_XiCR_bf8f591a0a3e1100ace985fb31e3cc67/
Watchlist page : https://www.webpagetest.org/result/210318_XiG8_db33dc97427b1d2e1f6739b6e635111b/
Contact page: https://www.webpagetest.org/result/210318_XiDJ_cf15b1e4b6b36e1ba26d9ffaf33466cb/




## Known Bugs: 

Through many trials and tests of the pages, there are no known bugs upon completion. 




## Deployment:

The site is currently published on Github at  https://bxs-archipelago.github.io/Movie-Finder-MS2/

### Cloning and Forking

Cloning is welcomed and I would love feedback. To clone the page, please use the Github facility at the Repository. You will find 'Clone or Download' green button and follow the instructions. 

Forking can also be done on Github. Please use the Fork option in order to not make any modifications to the main branch of the repository. Enjoy playing with the site, but please remember to us "New Pull Request" when you have finished. 

 
 # Credits

Image:

Cinematographer's Room by Photographer Noom Peerapong from Unsplash.com :
https://unsplash.com/photos/2uwFEAGUm6E

My responsive Navigation bar is one I have been using since last year. Its from a Youtube Tutorial by Youtuber "Tech2 etc".  It can be found at this link: 
https://youtu.be/baFqcVUMUg0

Offline, I have been using the following book as supplementary learning: 
JavaScript and JQuery: Interactive Front–End Web Development 
By Jon Duckett
ASIN : 1118531647
Publisher : Wiley; 1st edition (18 July 2014)

Credit and Thanks to Code Institute Institute Mentor Mr Maranatha Ilesammi for guidance and trouble-shooting expertise. 
Also credit to my own mentor, Mr Ratan Sharma for clarifying objectives and explaining some Javascript concepts that I had perceived incorrectly. 