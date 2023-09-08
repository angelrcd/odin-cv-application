import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

export const TABS = ["Picture", "General", "Information", "Layout"];
export const EXAMPLE = {
  profilePicUrl: "/sample-profile.jpg",
  firstName: "John",
  lastName: "Doe",
  email: "john_doe@email.com",
  phone: "+34 52912933",
  location: "New York, USA",
  experience: [
    {
      id: "example1",
      name: "Experiencia1",
      organization: "Escuela de Organización Industrial",
      startDate: dayjs("1970-00-00").format("MMM YYYY"),
      endDate: dayjs("1970-10-00").format("MMM YYYY"),
      description: "Despliegue y mantenimiento de servicios de Azure",
    },
    {
      id: "example2",
      name: "Experiencia2",
      organization: "Escuela de Organización Industrial",
      startDate: dayjs("1970-00-00").format("MMM YYYY"),
      endDate: dayjs("1970-10-00").format("MMM YYYY"),
      description: "Despliegue y mantenimiento de servicios de Azure",
    },
  ],
  education: [
    {
      id: "example",
      name: "Educacion",
      organization: "Escuela de Organización Industrial",
      startDate: dayjs("1970-00-00").format("MMM YYYY"),
      endDate: dayjs("1970-10-00").format("MMM YYYY"),
      description: "Despliegue y mantenimiento de servicios de Azure",
    },
  ],
};
