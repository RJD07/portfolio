import React from "react";
import { saveAs } from "file-saver";
import Animation from "./resumeAnimation";

const DownloadPDFButton = () => {
  const handleDownload = () => {
    // Replace 'path/to/your/existing-file.pdf' with the path to your existing PDF file
    const pdfFilePath = "Resume.pdf";

    // Trigger the download
    saveAs(pdfFilePath, "Rondel Resume.pdf");
  };

  return (
    <div onClick={handleDownload}>
      <Animation/>
    </div>
  );
};

export default DownloadPDFButton;
