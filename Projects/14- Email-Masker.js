

function maskEmail(email) {
  const [username, domain] = email.split("@");
  const firstChar = username[0];
  const lastChar = username[username.length - 1];
  const mask = "*".repeat(username.length - 2);
  
  return firstChar + mask + lastChar + "@" + domain;
}

const email = "apple.pie@example.com";
console.log(maskEmail(email));

