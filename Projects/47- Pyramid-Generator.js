
function pyramid(character, count, inverted) {
  const rows = [];

  for (let i = 1; i <= count; i++) {
    const spaces = " ".repeat(count - i);
    const pattern = character.repeat(2 * i - 1);
    rows.push(spaces + pattern);
  }

  if (inverted) {
    rows.reverse();
  }

  return "\n" + rows.join("\n") + "\n";
}
