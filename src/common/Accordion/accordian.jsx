import React from "react";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AccordionComponent = (props) => {
  const { label, details, key } = props;
  return (
    <Accordion
      classes={{
        root: "!shadow-none rounded-none",
        expanded: "first:border-none border-t border-gray-200 !mt-0"
      }}
      key={key}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`panel${key}-content`}
        id={`panel${key}-header`}
        classes={{
          root: "!px-0 text-base font-medium",
        }}
      >
        {label}
      </AccordionSummary>
      <AccordionDetails
        classes={{
          root: "!bg-gray-50",
        }}
      >
        {details}
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionComponent;
