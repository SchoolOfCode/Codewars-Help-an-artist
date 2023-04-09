/* 
👉 Write your kata here!
Carrie is an artist who's very spontaneous. 
She always starts new projects and puts them on hold when she gets bored.
Unfortunately, you are her assistant.

Write a function that takes in her project list and her daily progress,
returning the list with updated progress.

Delete the ones that reached 100%. 

*/


// The initial project list
const projectList = {
    "artFilm" : 90,
    "artPerformance": 10,
    "painting": 5,
}

// New progress on day 1
const dailyProgress = {
    "artFilm" : +10,
    "artPerformance": +10,
    "painting": +30,
    "photoJournal": +5,
}

// The updated project list
const updatedProjectlist= {
    "artPerformance": 20,
    "painting": 35,
    "photoJournal": 5,
}

//👉 Write the function your CodeWarriors will start with below here:

export function updateProgress(projectList, dailyProgress) {
    let updatedProjectlist = {};
    // your code here
    

    return updatedProjectlist;
}

