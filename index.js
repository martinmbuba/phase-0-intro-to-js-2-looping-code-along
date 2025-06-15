function writeCards(names, event) {
  const messages = [];

  for (let i = 0; i < names.length; i++) {
    const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
    messages.push(message);
  }

  return messages;
}
writeCards(["Charlie", "Samip", "Ali"], "birthday");

function countDown(start) {
  while (start >= 0) {
    console.log(start);
    start--;
  }
}
countDown(10);
