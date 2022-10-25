/**
 * greets the user
 */
let greet;

greet = function({ name }) {
    return console.log(`Hello ${name}!`);
};

// Implicit object.
class User {
    constructor({ id, name, color }) {
        this.id = id;
        this.name = name;
        this.color = color;
    }
}

greet(new User({
    id: 'NjEzODQ2Mj', 
    name: 'john', 
    color: 'magenta'
}));