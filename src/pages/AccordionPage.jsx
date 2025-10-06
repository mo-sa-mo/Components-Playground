import React from "react";
import Accordion from "../components/Accordion";
function AccordionPage() {
  const items = [
    {
      id: "sdfd",
      label: "Can i use React on a project?",
      content:
        "You can use React on a project.You can use React on a project.You can use React on a project.You can use React on a project.",
    },
    {
      id: "hjmyuj",
      label: "Can i use javascript on a project?",
      content:
        "You can use javascript on a project.You can use React on a project.You can use React on a project.You can use React on a project.",
    },
    {
      id: "hjmkho",
      label: "Can i use CSS on a project?",
      content:
        "You can use CSS on a project.You can use React on a project.You can use React on a project.You can use React on a project.",
    },
  ];

  return <Accordion items={items} />;
}

export default AccordionPage;
