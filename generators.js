function* shopping() {
    yield;
    
}
const gen = shopping();
console.log(gen.next())
console.log(gen.next())
