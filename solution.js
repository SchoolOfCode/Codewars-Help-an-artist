
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
const updatedProjectlist = {
    "artPerformance": 20,
    "painting": 35,
    "photoJournal": 5,
}

//👉 Suggested answer below here:

function updateProgress(projectList, dailyProgress) {
    let updatedProjectlist = {};

    // loop through existing projects & update with new progress
    for (let project in projectList) {
        updatedProjectlist[project] = projectList[project] + dailyProgress[project];
        // cannot delete projects with >= 100% progress here
        // because the add new projects loop will add back the projects
    }

    // loop through daily progress and add new projects
    for (let project in dailyProgress) {
        if (!updatedProjectlist[project]) {
            updatedProjectlist[project] = dailyProgress[project];
        }
    }

    // loop through updated project list and delete completed projects
    for (let project in updatedProjectlist) {
        if (updatedProjectlist[project] >= 100) {
            delete updatedProjectlist[project];
        }
    }

    return updatedProjectlist;
}
