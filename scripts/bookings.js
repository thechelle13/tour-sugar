//import and invoke
//create exportable function to sort data from array in database using for of loop with return result of function logic
//bookings include band name, venue name, and date/booking
//bookings list should appear at top...or bottom?
//import from database band, venue, booking


//She wants the band name, the venue name, and the date of the booking.html and use .dot
// When a booking is clicked, a window alert should be presented to the user that displays all of the band information (name, genre, year formed, number of members).




// {name /n genre /n "Formed in". /n number of members "band members"}

// export const getBookings
import { getBookings } from "./database.js"
const bookings = getBookings()
// bands can perform 1-2 acts per day - name, members, genre, year formed
// must appear to the right below bookings list


//create a click event listener

//export const getBands
//displayed in a bulleted list
export const Bookings = () => {
    let html = "<ul>"

// create exportable function to sort data from array in database using for of loop with return result of function logic    //function that pulls data from array located in the database.  by using the .dot I am able to access the information inside the array.
    for (const book of bookings) {
        html += `<li id="book--${book.id}">${book.name} is performing at ${book.venue} on ${book.date}.</li>`
    }

    html += "</ul>"
// this is an output call to the logic
    return html
}
