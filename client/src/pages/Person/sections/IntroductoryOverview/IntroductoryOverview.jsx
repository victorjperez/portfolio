import { Button } from "../../../../components/Button/index.jsx";
import {
  Section,
  FlexCol,
  ProfileImg,
  Description,
  Name,
  Title,
  Introduction,
} from "./IntroductoryOverview.style.jsx";
import { createUrl } from "../../../../sanity.jsx";

export const IntroductoryOverview = ({ person, ...props }) => {
  return (
    <Section {...props}>
      <FlexCol>
        <ProfileImg src={createUrl(person.image).width(180).height(180)} alt="Person" />
        <Button className="print-button" onClick={window.print}>
          Print / Create PDF
        </Button>
      </FlexCol>
      <Description>
        <Name>{person.name}</Name>
        <Title>{person.title}</Title>
        <Introduction>{person.introduction}</Introduction>
      </Description>
    </Section>
  );
};
