import { Section, Title, Content } from "../../../../components/Section";
import { SingleEducation } from "./SingleEducation";

export const Education = ({ person, ...props }) => {
  const { education = [] } = person;

  if (education.length === 0) {
    return false;
  }

  return (
    <Section {...props}>
      <Title>Education</Title>
      <Content>
        {education.map((singleEducation) => (
          <SingleEducation key={singleEducation._id} singleEducation={singleEducation} />
        ))}
      </Content>
    </Section>
  );
};
