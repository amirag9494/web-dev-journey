// Initialize the poll map
const poll = new Map();

// Function to add a new option
function addOption(option) {
  if (!option || option.trim() === "") {
    return "Option cannot be empty.";
  }
  if (poll.has(option)) {
    return `Option "${option}" already exists.`;
  }
  poll.set(option, new Set());
  return `Option "${option}" added to the poll.`;
}

// Function to cast a vote
function vote(option, voterId) {
  if (!poll.has(option)) {
    return `Option "${option}" does not exist.`;
  }
  
  const voters = poll.get(option);
  
  if (voters.has(voterId)) {
    return `Voter ${voterId} has already voted for "${option}".`;
  }
  
  voters.add(voterId);
  return `Voter ${voterId} voted for "${option}".`;
}

// Function to display poll results
function displayResults() {
  let result = "Poll Results:";
  for (const [option, voters] of poll.entries()) {
    result += `\n${option}: ${voters.size} votes`;
  }
  return result;
}

// Pre-populate with sample data for testing
addOption("Turkey");
addOption("Morocco");
addOption("Spain");

vote("Turkey", "voter1");
vote("Turkey", "voter2");
vote("Morocco", "voter3");