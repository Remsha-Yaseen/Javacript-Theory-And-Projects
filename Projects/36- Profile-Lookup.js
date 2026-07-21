
// Setup - Global contacts array
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

// Profile Lookup Function
function lookUpProfile(name, prop) {
  // Loop through the contacts array to find the right person
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      // If contact is found, check if the property exists
      if (contacts[i].hasOwnProperty(prop)) {
        return contacts[i][prop];
      } else {
        return "No such property";
      }
    }
  }
  // If the loop finishes and no matching contact was found
  return "No such contact";
}

// --- Test cases to verify correctness ---
console.log(lookUpProfile("Kristian", "lastName")); // Returns: "Vos"
console.log(lookUpProfile("Sherlock", "likes"));    // Returns: ["Intriguing Cases", "Violin"]
console.log(lookUpProfile("Harry", "likes"));       // Returns: ["Hogwarts", "Magic", "Hagrid"]
console.log(lookUpProfile("Bob", "number"));        // Returns: "No such contact"
console.log(lookUpProfile("Bob", "potato"));        // Returns: "No such contact"
console.log(lookUpProfile("Akira", "address"));     // Returns: "No such property"

