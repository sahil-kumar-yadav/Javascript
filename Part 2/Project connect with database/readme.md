- Firebase provides a realtime NoSQL cloud database that allows you to store and sync data between your users in real-time
- The Firebase Realtime Database is a cloud-hosted database. Data is stored as JSON and synchronized in realtime to every connected client
- firebaseConfig is an object that contains configuration settings specific to your Firebase project. These settings include things like your Firebase project's API keys, database URL, and other configuration options. Here is an example of what firebaseConfig might look like:
- Once you have firebaseConfig set up, you use initializeApp() to initialize Firebase with this configuration.
- initializeApp(firebaseConfig) takes firebaseConfig as an argument. It establishes a connection between your application and Firebase services using the provided configuration.

```javascript

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL: "YOUR_DATABASE_URL",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
    measurementId: "YOUR_MEASUREMENT_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export {app};

 ```
# After initializing Firebase, you can then use other Firebase services like Realtime Database, Authentication, Storage, etc., by importing and initializing

# getDatabase():

- This function is used to initialize access to the Firebase Realtime Database.

```javascript

import { getDatabase, ref, set, get, child, update ,remove} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-database.js";
import { app } from "./firebase-init.js"

// console.log("managedb");
const database = getDatabase(app);
const usersRef = ref(database, 'users'); // yeb root hai hai iske child banane ky liye new refrence banana padega using child method
// const EmployeeRef = ref(database, 'employee'); // yeh root hai


```



# ref(path: string)

- const database = getDatabase(app);
- ref(db, 'users/' + userId)
- The ref() method is used to specify the location of the data in the database. You can optionally provide a path to point to a specific location within your database.
- Input: path is a string that specifies the path within the database. For example, "users" might refer to the top-level node users, while "users/john" might refer to a specific user's node.

- create refrence for main Node
- Als0 create refrence to child node using parent node to create and find

```javascript

```

# set(ref: Reference, data: any)

- The set() method is used to write or overwrite data at a specific database reference.
- Inputs:
    - ref is a reference to the location in the database where the data will be written (typically obtained using ref()).
    - data is the JavaScript object or value that you want to store at that location.

```javascript

async function createUser(userName, userEmail, userPhone, userPassword) {
    const newUserRef = child(usersRef, userName); // yeh child ref
    try {
        await set(newUserRef, {
            username: userName,
            email: userEmail,
            phone: userPhone,
            password: userPassword
        });
    } catch (error) {
        console.error("Error creating user:", error);
    }

}

```


# get(ref: Reference)

- This function is used to read data from a specific location in the Firebase Realtime Database.
- Input: ref is a reference to the location in the database from which you want to retrieve data (obtained using ref()).

```javascript

function findUser(userName, userPassword) {
    // console.log("username",userName);
    const specificUserRef = child(usersRef, userName);
    get(specificUserRef).then((snapshot) => {
        if (snapshot.exists()) {
            if (snapshot.val().password === userPassword) {
                return true;
                console.log("Password is correct");
            }
            else {
                console.log("Password is incorrect");
                return false;
            }

            console.log(snapshot.val());
        } else {
            console.log("No data available for this user");
        }
    }).catch((error) => {
        console.error("Error getting specific user data:", error);
    });
    
}

```

# child(path):

- The child() method is used to access a child reference under a specified path from the current reference.
- This function is used to access a child location relative to a specific Firebase database reference.
- Input: path is a string representing the child path relative to the current location. For example, if you have a reference to "users" and you call child("john"), it would refer to "users/john"



# remove


```javascript
async function deleteUser(userName) {
    const userRef = child(usersRef, userName);
    try {
        await remove(userRef);
        console.log("User deleted successfully");
    } catch (error) {
        console.log("Error deleting user",error)
    }
    
}

```


