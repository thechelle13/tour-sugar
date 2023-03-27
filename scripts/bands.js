// import and invoke
import { getBands } from "./database.js"
const bands = getBands()
// bands can perform 1-2 acts per day - name, members, genre, year formed
// must appear to the right below bookings list


//create a click event listener

//export const getBands
//displayed in a bulleted list
export const Bands = () => {
    let html = "<ul>"

// create exportable function to sort data from array in database using for of loop with return result of function logic    //function that pulls data from array located in the database.  by using the .dot I am able to access the information inside the array.
    for (const band of bands) {
        html += `<li id="band--${band.id}">${band.name}</li>`
    }

    html += "</ul>"
// this is an output call to the logic
    return html
}
