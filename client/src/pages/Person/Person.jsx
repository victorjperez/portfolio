import { useEffect } from "react";
import { IntroductoryOverview } from "./sections/IntroductoryOverview";
import { KeyInformation } from "./sections/KeyInformation";
import { Expertise } from "./sections/Expertise";
import { Education } from "./sections/Education";
import { Jobs } from "./sections/Jobs";
import { PersonalProjects } from "./sections/PersonalProjects";

import "./colors.css";
import { Page, LoadingMessage, ErrorMessage } from "./Person.style.jsx";

import { useStore } from "./personStore";
import REQ from "../../util/REQ";

const Person = () => {
  const { person, req, fetchPerson } = useStore();

  useEffect(() => {
    fetchPerson();
  }, [fetchPerson]);

  switch (req) {
    case REQ.INIT:
    case REQ.PENDING:
      return <LoadingMessage />;
    case REQ.ERROR:
      return <ErrorMessage />;
    case REQ.SUCCESS:
      return (
        <Page>
          <IntroductoryOverview person={person} />
          <KeyInformation person={person} />
          <Expertise person={person} />
          <Education person={person} />
          <Jobs person={person} />
          <PersonalProjects person={person} />
        </Page>
      );
    default:
      return null;
  }
};

export default Person;
