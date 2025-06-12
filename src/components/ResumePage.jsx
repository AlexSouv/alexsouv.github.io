import React from 'react';
import resumePDF from '../pdfs/Alex_Souv_s_Resume__2025__SPRING_2025.pdf';

function ResumePage() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Resume</h2>
      <object
        data={resumePDF}
        type="application/pdf"
        width="100%"
        height="600px"
      >
        <p>
          Your browser does not support PDFs. 
          <a href={resumePDF} target="_blank" rel="noopener noreferrer">
            Download the PDF
          </a>
        </p>
      </object>
    </div>
  );
}

export default ResumePage;