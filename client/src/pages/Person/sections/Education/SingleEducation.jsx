import { Table } from "../../../../components/Table";
import { startYear, endYear } from "../../../../util/date";

export const SingleEducation = ({ singleEducation, ...props }) => {
  const { start, end, degree, institutionName, description } = singleEducation;
  const formattedStartYear = startYear(start);
  const formattedEndYear = endYear(end);

  return (
    <Table {...props}>
      <tbody>
        <tr>
          {formattedStartYear === formattedEndYear ? (
            <td>{formattedStartYear}</td>
          ) : (
            <td>
              {formattedStartYear} - {formattedEndYear}
            </td>
          )}
          <td>
            <h4>{degree}</h4>
            <h5>{institutionName}</h5>
            {description}
          </td>
        </tr>
      </tbody>
    </Table>
  );
};
