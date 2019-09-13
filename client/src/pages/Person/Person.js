import React, { Component } from "react";
import IntroductoryOverview from "./sections/IntroductoryOverview";
import KeyInformation from "./sections/KeyInformation";
import Expertise from "./sections/Expertise";
import Jobs from "./sections/Jobs";
import PersonalProjects from "./sections/PersonalProjects";
import Education from "./sections/Education";
import VolunteerWork from "./sections/VolunteerWork";

import "./colors.css";
import { Page } from "./Person.style.js";
import {
  LoadingMessageLocalized,
  ErrorMessageLocalized
} from "./RequestStateFeedback";

import { personStore, fetchPerson } from "./personStore";
import REQ from "util/REQ";

class Person extends Component {
  componentDidMount() {
    fetchPerson();
    personStore.addListener(this.onChange);
  }
  componentWillUnmount() {
    personStore.removeListener(this.onChange);
  }
  onChange = () => {
    this.forceUpdate();
  };

  render() {
    const { person, req } = personStore.personAsync;

    switch (
      req // eslint-disable-line default-case
    ) {
      case REQ.INIT:
      case REQ.PENDING:
        return <LoadingMessageLocalized />;
      case REQ.ERROR:
        return <ErrorMessageLocalized />;
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
    }
  }
}

export default Person;
