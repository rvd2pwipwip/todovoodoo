export function loadProjectsFromLocalStorage() {
  const projectsData = localStorage.getItem("projects");
  if (projectsData) {
    return JSON.parse(projectsData);
  }
  return null;
}

export function saveProjectsToLocalStorage(data) {
  console.log("saveProjectsToLocalStorage called with:", data);
  const projectsData = data.projects.map((project) => ({
    name: project.name,
    id: project.id,
    tasks: project.tasks.map((task) => ({
      title: task.title,
      description: task.description,
      dueDate: task.dueDate,
      priority: task.priority,
      done: task.done,
      id: task.id,
    })),
  }));

  console.log("Processed projectsData:", projectsData);
  localStorage.setItem("projects", JSON.stringify(projectsData));
  console.log("Saved to localStorage");
}

// export function deleteProjectData(projectId) {
//   currentLibrary.deleteProject(projectId);
//   // Update localStorage with the modified projects array
//   localStorage.setItem("projects", JSON.stringify(currentLibrary.projects));
// }

// export function updateProjectName(project, newName) {
//   project.name = newName;
// }
