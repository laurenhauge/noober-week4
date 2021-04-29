window.addEventListener('DOMContentLoaded', async function() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)
  
  // 🔥 start here: write the recipe (algorithm), then write the code

  // Create a variable for the rides data
  let rides = json

  // Loop through the rides data
  for (let i=0; i < rides.length; i++) {
  // Create a variable to store each ride in memory
    let ride = rides[i]
      
    let rideFirstName = ride.passengerDetails.first
    let rideLastName = ride.passengerDetails.last
    let rideNumber = ride.passengerDetails.phoneNumber
    let pickupAddress = ride.pickupLocation.address
    let pickupCity = ride.pickupLocation.city
    let pickupState = ride.pickupLocation.state
    let pickupZip = ride.pickupLocation.zip
    let dropAddress = ride.dropoffLocation.address
    let dropCity = ride.dropoffLocation.city
    let dropState = ride.dropoffLocation.state
    let dropZip = ride.dropoffLocation.zip
    let numberOfPassengers = ride.numberOfPassengers
    let purpleRequested = ride.purpleRequested

    let serviceLevel

    if (purpleRequested == true) {
      serviceLevel = `Noober Purple`
    } else if (numberOfPassengers >= 3){
      serviceLevel = `Noober XL`
    } else {
      serviceLevel = `Noober X`
    }

  // console.log(serviceLevel)
    // Create a variable for the HTML element we're going to add to
    let ridesElement = document.querySelector(`.rides`)
      
    // Insert HTML into the rides element, using the data from each ride
 
  }
})