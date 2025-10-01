import { Table, Nowrap } from "../../../../components/Table";
import { Tag } from "../../../../components/Tag";
import { IconLink, PrintLink } from "../../../../components/Link";

import { startMonth, endMonth } from "../../../../util/date";

export const PersonalProject = ({ project, ...props }) => {
  const { start, end, title, readableUrl, url, githubUrl, technologies, description } = project;
  const formattedStart = startMonth(start);
  const formattedEnd = endMonth(end);
  return (
    <Table {...props}>
      <tbody>
        <tr>
          {formattedStart === formattedEnd ? (
            <td>
              <Nowrap>{formattedStart}</Nowrap>
            </td>
          ) : (
            <td>
              <Nowrap>{formattedStart}</Nowrap> - <Nowrap>{formattedEnd}</Nowrap>
            </td>
          )}
          <td>
            <h4>
              {title}
              {readableUrl && (
                <div>
                  <PrintLink icon="link"> - {readableUrl}</PrintLink>
                </div>
              )}
              {url && (
                <>
                  &nbsp;
                  <IconLink icon="link" url={url} />
                </>
              )}
              {githubUrl && (
                <>
                  &nbsp;
                  <IconLink icon="github" url={githubUrl} />
                </>
              )}
            </h4>
          </td>
        </tr>

        {description && (
          <tr>
            <td>Project Description</td>
            <td dangerouslySetInnerHTML={{ __html: description.split("\n").join("<br />") }} />
          </tr>
        )}
        {technologies && technologies.length !== 0 && (
          <tr>
            <td>Technologies</td>
            <td>
              {technologies.map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};
