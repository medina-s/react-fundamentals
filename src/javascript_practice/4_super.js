class User {
    constructor(username, password){
        this.name = username;
        this.password = password;
        this.type = "Trial User";
    };

    greet(){
        console.log(`Welcome back, ${this.name}`);
    };

    // Method 2
    status(){
        console.log(`Current status: ${this.type}`);
    };
};

class TrialUser extends User {
    trialEnding(){
        console.log('Your trial will be ending soon, ${this.name}. Would you like to join our program?')
    };
};


// Instance of User class
let anonDude = new User('Anonymous');
anonDude.greet();
anonDude.status();

// Instance of Trial User Class
let trialAnonDude = new TrialUser('TrailUser');
trialAnonDude.trialEnding();

// new class Bronze Level User
class BronzeLevelUser extends User {
    // We add the ccinfo property to the user here
    constructor(name, password, ccinfo) {
        super(name, password);
        this.type = "Bronze User";
        this.ccinfo = ccinfo;
    }

    getInfo(){
        console.log(this.name, this.password, this.type, this.ccinfo);
    }
};

let bronzeGuy = new BronzeLevelUser('BronzerBro', 'bronze1234', '000011122223333');
bronzeGuy.greet();
bronzeGuy.status();
bronzeGuy.getInfo();
console.log(bronzeGuy);


