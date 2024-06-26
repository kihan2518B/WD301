import React, { Suspense } from "react";
const ProjectList = React.lazy(() => import('./ProjectList'))
import ErrorBoundary from "../../components/ErrorBoundary";
import NewProject from "./NewProject";

const Projects = () => {
    return (
        <>
            <h2>Projects</h2>
            <div className="flex justify-between">
                <h2 className="text-2xl font-medium tracking-tight">Projects</h2>
                <NewProject />
            </div>
            <ErrorBoundary>
                <Suspense fallback={<div className="suspense-loading">Loading...</div>}>
                    <ProjectList />
                </Suspense>
            </ErrorBoundary>
        </>

    )
}
export default Projects;