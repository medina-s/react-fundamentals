class User {
    constructor(name){
        this.name = name;
        this.type = 'Trial User'
    };

    // Method 1
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

// Practice
class BannedUser extends User {
    bannStarting(){
        console.log('YOur bann is starting now, ${this.name}. Do you want to try to retry?')
    }
}
// Instance of User class
let anonDude = new User('Anonymous');
anonDude.greet();
anonDude.status();

// Instance of Trial User Class
let trialUser = new TrialUser('Paul');
trialUser.greet();
trialUser.trialEnding();
trialUser.status();

// INstance of Bandclass
let bannedUser = new BannedUser('Kate');
bannedUser.greet();
bannedUser.status();
bannedUser.bannStarting();

