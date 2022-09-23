import React from "react";
import { Table, Nowrap } from "components/Table";

import { preferredLanguage } from "util/localize";
import { startMonth, endMonth } from "util/date/format";

export default class Job extends React.Component {
  render() {
    const { job } = this.props;

    const start = startMonth(job.start);
    const end = endMonth(job.end);
    const start2 = startMonth(job.start2);
    const end2 = endMonth(job.end2);
    console.log(job.title2);
    return (
      <Table>
        <tbody>
          <tr>
            <td className={job.title2 && "multiple-dates"}>
              {job.title2 &&
                (start === end ? (
                  <Nowrap>{start2}</Nowrap>
                ) : (
                  <Nowrap>
                    {start2} - {end2}
                  </Nowrap>
                ))}

              {start === end ? (
                <Nowrap>{start}</Nowrap>
              ) : (
                <Nowrap>
                  {start} - {end}
                </Nowrap>
              )}
            </td>
            <td>
              <h4>{job.company.name}</h4>
              {job.title2 && <h5>{job.title2}</h5>}
              <h5>{job.title}</h5>
            </td>
          </tr>

          {job.description && (
            <tr>
              <td>
                {
                  { english: "Description", norwegian: "Beskrivelse" }[
                    preferredLanguage
                  ]
                }
              </td>
              <td>{job.description}</td>
            </tr>
          )}
        </tbody>
      </Table>
    );
  }
}
