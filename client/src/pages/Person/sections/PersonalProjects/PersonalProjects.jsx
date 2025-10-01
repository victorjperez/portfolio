import { Section, Title, NoPageBreak } from "../../../../components/Section";
import { PersonalProject } from "./PersonalProject";

export const PersonalProjects = ({ person, ...props }) => {
  const { personalProjects: projects = [] } = person;

  if (projects.length === 0) {
    return false;
  }

  return (
    <Section allowPageBreak {...props}>
      <NoPageBreak>
        <Title>Projects & Publications</Title>
        {projects.slice(0, 1).map((project) => (
          <PersonalProject key={project._id} project={project} />
        ))}
      </NoPageBreak>
      {projects.slice(1).map((project) => (
        <PersonalProject key={project._id} project={project} />
      ))}
    </Section>
  );
};
