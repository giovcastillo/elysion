/**
 * greets the user
 */
let greet;

greet = function({ name }) {
    return console.log(`Hello ${name}!`);
};

// Implicit object.
class User {
    constructor(id1, name1, color1) {
        this.id = id1;
        this.name = name1;
        this.color = color1;
    }
}

greet(new User({
    id: 'NjEzODQ2Mj', 
    name: 'john', 
    color: 'magenta'
}));