import React, { Suspense } from "react";

import ErrorBoundary from "../../components/ErrorBoundary";
const MemberList = React.lazy(() => import("./MemberList"));
import NewMember from "./NewMember";
const Members = () => {
  return (
    <div className="">
      <h2>Members</h2>
      <NewMember />
      <ErrorBoundary>
        <Suspense fallback={<div className="Suspense-Loading">Loading...</div>}>
          <MemberList />
        </Suspense>
      </ErrorBoundary>
    </div >
  )
}
export default Members;