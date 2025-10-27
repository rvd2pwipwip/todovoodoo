// use to add uuid to props data

import fs from "fs";
import { v4 as uuidv4 } from "uuid";

// Read the JSON file
const data = JSON.parse(fs.readFileSync("todoDB.json", "utf8"));

// Add a unique ID to each task within each project
data.projects.forEach((project) => {
  project.tasks = project.tasks.map((task) => ({
    ...task,
    id: uuidv4(),
  }));
});

// Write the updated data back to the JSON file
fs.writeFileSync("todoDB.json", JSON.stringify(data, null, 2));
