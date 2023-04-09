//👉 Write your tests below here:

// import { test, expect } from "@jest/globals";
import { updateProgress } from "./main.js";


// The initial project list
const projectList = {
    "artFilm" : 90,
    "artPerformance": 10,
    "painting": 5,
}

// New progress on day 1
const day1Progress = {
    "artFilm" : +10,
    "artPerformance": +10,
    "painting": +30,
    "photoJournal": +5,
}

// Answer 1
const expectedPorjectListDay1 = {
    "artPerformance": 20,
    "painting": 35,
    "photoJournal": 5,
}

// New progress on day 2
const day2Progress = {
    "artPerformance": +45,
    "photoJournal": +20,
    "painting": +0,
    "exhibition": +15,
    "sculpture": +30,
}

// Answer 2
const expectedPorjectListDay2 = {
    "artPerformance": 65,
    "painting": 35,
    "photoJournal": 25,
    "exhibition": 15,
    "sculpture": 30,
}


test("When given 2 days of progress", () => {
    const actual1 = updateProgress(projectList, day1Progress);
    expect(actual1).toStrictEqual(expectedPorjectListDay1);

    const actual2 = updateProgress(actual1, day2Progress);
    expect(actual2).toStrictEqual(expectedPorjectListDay2);
});