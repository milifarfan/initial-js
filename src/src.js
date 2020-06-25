function drawItems() {
  let animals = ["Cat", "Dog"];
  let animals2 = ["Parrot", "Shark"];
  let animals3 = animals.concat(animals2);
  let order = animals3.reverse();
  document.write(order);
  document.getElementById(
    "animals"
  ).innerHTML = `There are ${animals.length} animals`;
}
