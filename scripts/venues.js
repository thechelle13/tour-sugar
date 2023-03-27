//import and invoke
// create exportable function to sort data from array in database using for of loop with return result of function logic
// two bands can play per night
//venue includes name, address, sq ft, max occup
//must appear to left of bands - with bookings listings above both
//create a click event listener
// When a venue name is clicked, a window alert should be presented to the user that displays all of the bands that have booked the venue.

//export const getVenues 
//displayed in a bulleted list
import { getVenues } from "./database.js"
const venues = getVenues()
// bands can perform 1-2 acts per day - name, members, genre, year formed
// must appear to the right below bookings list


//create a click event listener

//export const getBands
//displayed in a bulleted list
export const Venues = () => {
    let html = "<ul>"

// create exportable function to sort data from array in database using for of loop with return result of function logic    //function that pulls data from array located in the database.  by using the .dot I am able to access the information inside the array.
    for (const venue of venues) {
        html += `<li id="venue--${venue.id}">${venue.name}</li>`
    }

    html += "</ul>"
// this is an output call to the logic
    return html
}
