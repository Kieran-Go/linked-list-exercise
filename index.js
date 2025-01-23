const list = new LinkedList();

list.prepend("dog");
list.append("cat");
list.prepend("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.prepend("lion");

console.log(list.size());
console.log(list.getHead());
console.log(list.getTail());
console.log(list.get(0));
console.log(list.toString());
list.pop();
console.log(list.toString());

console.log(list.contains("snake"));
console.log(list.find("dog"));