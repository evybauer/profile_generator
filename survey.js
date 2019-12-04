const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable 😊 ', (name) => {
  
  rl.question('What\'s an activity you like doing? ', (activity) => {
  
    rl.question('What do you listen to while doing that? ', (listen) => {
  
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)? ', (meal) => {
  
        rl.question('What\'s your favourite thing to eat for that meal? ', (thingToEat) => {
  
          rl.question('Which sport is your absolute favourite? ', (sport) => {
  
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (superpower) => {
            
              console.log(`Thank you for your answers ${name}. 
              It's nice that you like ${activity}
              and listens to ${listen} while doing that. You have a great taste of music!
              ${meal} is absolutely a great meal.
              ${thingToEat} makes total sense.
              ${sport} it is a great sport!
              ${superpower} is an amazing superpower!`);

              rl.close();
  
            });
          });
        });
      });
    });
  });
});

