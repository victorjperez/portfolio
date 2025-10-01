import { Section, Title, NoPageBreak } from "../../../../components/Section";
import { Job } from "./Job";

export const Jobs = ({ person, ...props }) => {
  const { jobs = [] } = person;

  if (jobs.length === 0) {
    return false;
  }

  return (
    <Section allowPageBreak {...props}>
      <NoPageBreak>
        <Title>Experience</Title>
        {jobs.slice(0, 1).map((job) => (
          <Job key={job._id} job={job} />
        ))}
      </NoPageBreak>
      {jobs.slice(1).map((job) => (
        <Job key={job._id} job={job} />
      ))}
    </Section>
  );
};
