const alert = "We are ready; start the movie";

// blocking 
const demoReel = () => {
  const length = 500000000;
  let sum = 0;
  for(i = 0; i <= length; i++) {
    sum += i
  }
}

console.log("This is a pre-show ad reel... It's running");

// non blocking
setTimeout(() => console.log(alert), 5000)

demoReel()