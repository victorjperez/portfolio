import { format, enLocale } from "date-fns";

export const { startYear, endYear, startMonth, endMonth } = (() => {
  const fmtYear = (date) => format(date, "YYYY", { locale: enLocale });
  const fmtMonth = (date) => format(date, "MMM YYYY", { locale: enLocale });

  return {
    startYear: fmtYear,
    endYear: (date) => (date ? fmtYear(date) : "present"),
    startMonth: fmtMonth,
    endMonth: (date) => (date ? fmtMonth(date) : "present"),
  };
})();
