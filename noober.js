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
   
    // make variables
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

    // make service level conditional
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
    ridesElement.insertAdjacentHTML('beforeend', `
    <div class="rides container text-center mx-auto">
    <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
      <i class="fas fa-car-side"></i>
      <span>${serviceLevel}</span>
    </h1>

    <div class="border-4 border-gray-900 p-4 my-4 text-left">
      <div class="flex">
        <div class="w-1/2">
          <h2 class="text-2xl py-1">${rideFirstName} ${rideLastName}</h2>
          <p class="font-bold text-gray-600">(312) 555-1212</p>
        </div>
        <div class="w-1/2 text-right">
          <span class="rounded-xl bg-gray-600 text-white p-2">
            ${numberOfPassengers} passengers
          </span>
        </div>
      </div>
      <div class="mt-4 flex">
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">PICKUP</div>
          <p>${pickupAddress}</p>
          <p>${pickupCity}, ${pickupState} ${pickupZip} </p>
        </div>
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">DROPOFF</div>
          <p>${dropAddress}</p>
          <p>${dropCity}, ${dropState} ${dropZip}</p>
        </div>
      </div>
    </div>

    

    



  </div>
    `
    )
  
  
    
 
  }
})