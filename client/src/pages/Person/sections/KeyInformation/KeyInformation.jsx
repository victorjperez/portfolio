import { Section, Entry, Icon } from "./KeyInformation.style.jsx";

export const KeyInformation = ({ person, ...props }) => {
  const { keyInfo: info } = person;

  return (
    <Section {...props}>
      {info.emailAddress && (
        <Entry>
          <Icon className="fas fa-envelope" />
          {info.emailAddress}
        </Entry>
      )}
      {info.location && (
        <Entry>
          <Icon className="fas fa-map-marker-alt" />
          {info.location}
        </Entry>
      )}
      {info.websiteUrl && (
        <Entry>
          <Icon className="fas fa-globe" />
          <a href={info.websiteUrl}>{info.websiteUrl.replace("https://", "")}</a>
        </Entry>
      )}
      {info.githubHandle && (
        <Entry>
          <Icon className="fab fa-github" />

          <a href={`https://www.github.com/${info.githubHandle}/`}>{info.githubHandle}</a>
        </Entry>
      )}
      {info.linkedInHandle && (
        <Entry>
          <Icon className="fab fa-linkedin-in" />

          <a href={`https://www.linkedin.com/in/${info.linkedInHandle}/`}>{info.linkedInHandle}</a>
        </Entry>
      )}
    </Section>
  );
};
