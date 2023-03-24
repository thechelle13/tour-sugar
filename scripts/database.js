// create info for database

// create 3 const venues, bands, bookings arrays

// create three exportable funtions one for each array getBookings, getBands, getVenues

const database = {
// bookings include band name, venue name, date
    bookings: [{
        id: 1,
        name: "Madonna",
        venue: "LA Stadium",
        date: "2024-01-01"
    },
    {
        id: 2,
        name: "Batman",
        venue: "Nashville Music Center",
        date: "2024-07-01"

    },
    {
        id: 3,
        name: "Diana Ross",
        venue: "Madison Square Gardens",
        date: "2024-09-01"
    },
    {
        id: 4,
        name: "Cher",
        venue: "Nissan Stadium",
        date: "2024-10-01"

    }, 
    {
        id: 5,
        name: "Kiss",
        venue: "Detroit City Stadium",
        date: "2024-02-01"

    }, 
    {
        id: 6,
        name: "Blue Man Group",
        venue: "Flamingo Hotel",
        date: "2024-05-01"

    }], 
// bands must include name, number of members, genre, year formed
    bands: [{
        id: 1,
        name: "Madonna",
        numberofmembers: "1", 
        genre: "Pop", 
        formed: "1982"       
    },
    {
        id: 2,
        name: "Batman",
        numberofmembers: "4", 
        genre: "Jazz", 
        formed: "1999"  
    },
    {
        id: 3,
        name: "Diana Ross",
        numberofmembers: "1", 
        genre: "Soul", 
        formed: "1955"  
    },
    {
        id: 4,
        name: "Cher",
        numberofmembers: "1", 
        genre: "Pop", 
        formed: "1965"  
    }, 
    {
        id: 5,
        name: "Kiss",
        numberofmembers: "5", 
        genre: "Rock", 
        formed: "1976"  

    }, 
    {
        id: 6,
        name: "Blue Man Group",
        numberofmembers: "6", 
        genre: "Pop", 
        formed: "2005"  

    }], 
// venues must have name, address, square footage, and max occupancy
    venues: [{
        id: 1,
        name: "Flamingo Hotel",
        address: "111 Los Vegas, Nevada",
        sqft: "10000",
        maxocc: "5000"
    },
    {
        id: 1,
        name: "Detroit City Stadium",
        address: "222 Motor City, Michigan",
        sqft: "800",
        maxocc: "400"

    },
    {
        id: 1,
        name: "Madison Square Gardens",
        address: "44 Manhatten Drive, New York",
        sqft: "6000",
        maxocc: "3000"
    },
    {
        id: 1,
        name: "Nashville Music Center",
        address: "1313 Music City, Tennessee",
        sqft: "4000",
        maxocc: "2000"
    }, 
    {
        id: 1,
        name: "LA Stadium",
        address: "555 Central Blvd, California",
        sqft: "2000",
        maxocc: "1000"
    }, 
    {
        id: 1,
        name: "Nissan Stadium",
        address: "713 Volunteer Way, Tennessee",
        sqft: "8000",
        maxocc: "4000"

    }]

}

// export const getBands, getVenues, getBookings






