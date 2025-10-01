import { Section, Title, Content } from "../../../../components/Section";
import { Tag } from "../../../../components/Tag";
const flatten = (arr, next) => arr.concat(next);
const unique = (item, index, array) => index === array.indexOf(item);

export const Expertise = ({ person, ...props }) => {
  const { expertise } = person;

  return (
    <Section  {...props}>
      <Title>Expertise</Title>
      <Content>
        {expertise
          .map((area) => area.technologies)
          .reduce(flatten, [])
          .filter(unique)
          .map((tech) => (
            <Tag solid key={tech}>
              {tech}
            </Tag>
          ))}
      </Content>
    </Section>
  );
};
