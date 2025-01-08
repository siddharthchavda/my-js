    const user = {
    username: "hitesh",
    loginCount: 8,
    SignedIn: true,

    getUserDetails: function () {
        console.log("give me a details");
    }
};

// Correct way to access the properties and methods
console.log(user.username); // Output: hitesh
user.getUserDetails(); // Output: give me a details

