import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

export const TABS = ["Picture", "General", "Information", "Style"];
export const EXAMPLE = {
  profilePicUrl: "/sample-profile.jpg",
  firstName: "Homer",
  lastName: "Simpson",
  jobTitle: "Safety inspector",
  email: "homerd'oh@email.com",
  phone: "(252) 258-3799",
  location: "Springfield, USA",
  experience: [
    {
      name: "Nuclear safety inspector",
      organization: "Springfield Nuclear Power Plant",
      startDate: dayjs("1989-12-00").format("MMM YYYY"),
      endDate: "present",
      description:
        "In charge of the plant safety, though accidents have increased since I got this position for unrelated reasons.",
      id: "example1",
    },
  ],
  education: [
    {
      name: "High school diploma",
      organization: "Springfield High School",
      startDate: dayjs("1982-09-00").format("MMM YYYY"),
      endDate: dayjs("1987-07-00").format("MMM YYYY"),
      description: "",
      id: "example",
    },
  ],
};
