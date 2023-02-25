import React from "react";
import TraineeUl from "./TraineeUl";
import MentorUl from "./MentorUl";

const Nav = () => {
  return (
    <nav>
        {window.location.pathname === "/student/table/view" ? <MentorUl /> : <TraineeUl />}
    </nav>
  );
};

export default Nav;
