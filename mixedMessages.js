function generateRandomNumber(num) {
    // Gets # from 0 -> num - 1
    return Math.floor(Math.random() * num)
  }
  
  const footballTeam = {
    Team1: ['Fulham', 'Man Utd', 'Chelsea', 'Liverpool'],
    Team2: ['Arsenal', 'Southampton', 'Tottenham', 'Man City', 'West Brom'],
    Team3: ['Wolves', 'Leeds', 'Everton', 'Burnley']
  }
  
  // Store the 'team' in an array
  let chosenTeam = []
  
  // Iterate over the object
  for(let prop in footballTeam) {
    let optionIdx = generateRandomNumber(footballTeam[prop].length)
  
    // use the object's properties to customize the message being added to chosenTeam  
    switch(prop) {
      case 'Team1':
        chosenTeam.push(`Your favourite football team is ${footballTeam[prop][optionIdx]}.`)
        break
      case 'Team2':
        chosenTeam.push(`Your favourite football team is ${footballTeam[prop][optionIdx]}.`)
        break
      case 'Team3':
        chosenTeam.push(`Your favourite football team is ${footballTeam[prop][optionIdx]}.`)
        break
      default:
        chosenTeam.push('You should not support a footbal team.')
    }
  }
  
  function choseTeam(Team) {
    // Add some ASCII here?
    // Add in more symbols to the array? like emojies or what not?
    const formatted = chosenTeam.join('\n')
    console.log(formatted)
  }
  
  choseTeam(chosenTeam);