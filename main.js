/* 
👉 Write your kata here!
Carrie is an artist who's very spontaneous. 
She always starts/ works on/ stops different projects from day to day.
Or, she comes up with new ideas but doesn't actually do it.

Unfortunately, you are her assistant.
Make a function that updates her progress list as days pass by.
Keep track of only the projects that are still in progress.
The number represents the percentage of the project that is in progress.
*/


// the initial progress list
const carriesProgress = {
    "filmShortStoryLong" : 99,
    "filmScotland": 1,
    "newBook": 5,
    "newAlbum": 20
}

// example day
const day1 = {
    "filmShortStoryLong" : 99,
    "newBook": 10, 
    "newAlbum": 0, 
    "danceClass": 0, 
    "newApp": 0
}

//Answer
const expectedDay1 = {
    "filmShortStoryLong" : 99,
    "filmScotland": 1,
    "newBook": 10
}

//👉 Write the function your CodeWarriors will start with below here:

export function updateProgress(day) {
    // your code here
    
}

