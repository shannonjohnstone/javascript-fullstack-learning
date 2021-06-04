const getEmptySeats = () => Math.round(3 * Math.random());

/**
 * Event loop will run over the below code, it will skip the timer phase as there are not timers
 * after the timers phase it will move on to the polling stage and add the setInterval into the timers queue
 * when the delay for the timer is expired the console.log will be executed
 * after first call back has executed all its phases it will move to the next iteration of the event loop
 * once back in the polling phase the callback is once added to the timers queue
 * moving back into the timers phase and the delay is expired again the callback is again execute
 * this is repeated again and again until the time is cleared or expired
 */

// cancel timer when tickets are found
const tickets = setInterval(() => {
  let seats = getEmptySeats();

  if (seats === 1) {
    console.log(`There are currently ${seats} seat available`)
  } else if (seats === 0) {
    console.log(`Oh no, no available seats`)
  } else if (seats >= 2) {
    console.log(`${seats} seats available, quickly book them!`)
    tickets.unref()
  }
}, 1000)

// exit process when tickets are found
// setInterval(() => {
//   let seats = getEmptySeats();

//   if (seats === 1) {
//     console.log(`There are currently ${seats} seat available`)
//   } else if (seats === 0) {
//     console.log(`Oh no, no available seats`)
//   } else if (seats >= 2) {
//     console.log(`${seats} seats available, quickly book them!`)
//     process.exit();
//   }
// }, 1000)