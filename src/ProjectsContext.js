import React from "react";

export const ProjectsContext = React.createContext({
    projects: [],
    getProjects: () => {},
    getProjectByID: (id) => {}
});


