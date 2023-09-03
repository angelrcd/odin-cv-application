import Picture from "./tabs/Picture";
import General from "./tabs/General";
import Information from "./tabs/Information";
import Layout from "./tabs/Layout";

export default function EditorForms({ currentTab }) {
  switch (currentTab) {
    case 0:
      return <Picture />;
    case 1:
      return <General />;
    case 2:
      return <Information />;
    case 3:
      return <Layout />;
    default:
      break;
  }
}
