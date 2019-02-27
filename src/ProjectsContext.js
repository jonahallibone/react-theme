import React from "react";

export const ProjectsContext = React.createContext({
    projects: [],
    getProjects: () => {},
    getProjectByID: (id) => {}
});

export const withProjectsContext = Component => props => (
    <ProjectsContext.Consumer>
        {({updates}) => <Component {...props} updates={updates} />}
    </ProjectsContext.Consumer>
);

