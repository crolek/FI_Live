// instatiate the FirebaseSimpleLogin and monitor the user's auth state
var chatRef = new Firebase("https://torid-fire-513.firebaseio.com/");
var auth = new FirebaseSimpleLogin(chatRef, function (error, user) {
    if (error) {
        // an error occurred while attempting login
        console.log(error);
    } else if (user) {
        // user authenticated with Firebase
        console.log('User ID: ' + user.id + ', Provider: ' + user.provider);
    } else {
        // user is logged out
        // attempt to log the user in with your preferred authentication provider
        auth.login("twitter");
    }
});