import { Table, Nowrap } from "../../../../components/Table";
import { startMonth, endMonth } from "../../../../util/date";

export const Job = ({ job, ...props }) => {
  const { start, end, start2, end2, title, title2, company, description } = job;
  const formattedStart = startMonth(start);
  const formattedEnd = endMonth(end);
  const formattedStart2 = startMonth(start2);
  const formattedEnd2 = endMonth(end2);
  return (
    <Table {...props}>
      <tbody>
        <tr>
          <td className={title2 && "multiple-dates"}>
            {title2 &&
              (formattedStart === formattedEnd ? (
                <Nowrap>{formattedStart2}</Nowrap>
              ) : (
                <Nowrap>
                  {formattedStart2} - {formattedEnd2}
                </Nowrap>
              ))}

            {formattedStart === formattedEnd ? (
              <Nowrap>{formattedStart}</Nowrap>
            ) : (
              <Nowrap>
                {formattedStart} - {formattedEnd}
              </Nowrap>
            )}
          </td>
          <td>
            <h4>{company.name}</h4>
            {title2 && <h5>{title2}</h5>}
            <h5>{title}</h5>
          </td>
        </tr>

        {description && (
          <tr>
            <td>Description</td>
            <td>{description}</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};
