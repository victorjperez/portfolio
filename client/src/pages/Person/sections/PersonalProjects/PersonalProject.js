import React, { Fragment } from 'react';
import { Table, Nowrap } from 'components/Table';
import TechTag from 'components/TechTag';
import { LinkWIcon, PrintLink } from 'components/Link';

import { preferredLanguage } from 'util/localize';
import { startMonth, endMonth } from 'util/date/format';

export default class PersonalProject extends React.Component {
  render() {
    const { project } = this.props;

    const start = startMonth(project.start);
    const end = endMonth(project.end);

    return (
      <Table>
        <tbody>
          <tr>
            { start === end
              ? <td><Nowrap>{start}</Nowrap></td>
              : <td><Nowrap>{start}</Nowrap> - <Nowrap>{end}</Nowrap></td>
            }
            <td>
              <h4>
                {project.title}
                {project.readableUrl &&
                <div>
                <PrintLink icon="link"> - {project.readableUrl}</PrintLink>
                </div>
              } 
                {project.url &&
                  <Fragment>
                    &nbsp;<LinkWIcon icon="link" url={project.url} />
                  </Fragment>
                }
                {project.githubUrl &&
                  <Fragment>
                    &nbsp;<LinkWIcon icon="github" url={project.githubUrl} />
                  </Fragment>
                }
              </h4>
              
            </td>
          </tr>

          { project.description &&
            <tr>
              <td>
                {{
                  english: 'Project description',
                  norwegian: 'Prosjektbeskrivelse',
                }[preferredLanguage]}
              </td>
              <td dangerouslySetInnerHTML={{__html: project.description.split('\n').join('<br />')}} />
            </tr>
          }
          { (project.technologies && project.technologies.length !== 0) &&
            <tr>
              <td>
                {{
                  english: 'Technologies',
                  norwegian: 'Teknologier',
                }[preferredLanguage]}
              </td>
              <td>
                {project.technologies.map(tech =>
                  <TechTag key={tech}>{tech}</TechTag>
                )}
              </td>
            </tr>
          }
        </tbody>
      </Table>
    );
  }
}
