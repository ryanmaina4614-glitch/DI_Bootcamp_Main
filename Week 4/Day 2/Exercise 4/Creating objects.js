/*******************************
  Video Class Assignment
*******************************/

// Step 1: Create the Video class
class Video {
    constructor(title, uploader, time) {
        this.title = title;
        this.uploader = uploader;
        this.time = time; // in seconds
    }

    // Step 2: watch() method
    watch() {
        console.log(`${this.uploader} watched all ${this.time} seconds of "${this.title}"!`);
    }
}


/*******************************
  Part 1: Create Instances
*******************************/

// First video
const video1 = new Video("JavaScript Basics", "John", 300);
video1.watch();

// Second video
const video2 = new Video("OOP in JS", "Sarah", 450);
video2.watch();


/*******************************
 🌟 Bonus Part
*******************************/

// Best structure: Array of objects
const videoData = [
    { title: "HTML Crash Course", uploader: "Mike", time: 600 },
    { title: "CSS Flexbox", uploader: "Anna", time: 480 },
    { title: "React Tutorial", uploader: "Chris", time: 900 },
    { title: "Node.js Guide", uploader: "David", time: 750 },
    { title: "Python for Beginners", uploader: "Emma", time: 1200 }
];

// Loop to create instances
const videos = [];

for (let data of videoData) {
    const video = new Video(data.title, data.uploader, data.time);
    videos.push(video);
}

// Call watch() on each video
console.log("\n🎥 Bonus Output:");
videos.forEach(video => video.watch());
