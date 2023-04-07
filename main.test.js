//👉 Write your tests below here:

// import { test, expect } from "@jest/globals";
import { updateProgress } from "./main.js";


// the initial progress list
const carriesProgress = {
    "filmShortStoryLong" : 99,
    "filmScotland": 1,
    "newBook": 5,
    "newAlbum": 20
}

const day1 = {
    "filmShortStoryLong" : 99,
    "newBook": 10, 
    "newAlbum": 0, 
    "danceClass": 0, 
    "newApp": 0
}

const expectedDay1 = {
    "filmShortStoryLong" : 99,
    "filmScotland": 1,
    "newBook": 10
}

const day2 = {
    "filmShortStoryLong" : 0,
    "newBook": 35, 
    "newAlbum": 25, 
    "danceClass": 5, 
    "newApp": 30,
}

const expectedDay2 = {
    "filmScotland": 1,
    "newBook": 35,
    "newAlbum": 25,
    "danceClass": 5,
    "newApp": 30
}


test("When given 2 days of progress", () => {
    const actual1 = updateProgress(day1);
    expect(actual1).toStrictEqual(expectedDay1);

    const actual2 = updateProgress(day2);
    expect(actual2).toStrictEqual(expectedDay2);
});