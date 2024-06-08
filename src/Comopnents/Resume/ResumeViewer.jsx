import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import resume from './resume.pdf'
import BTN from '../Home/BTN';
const ResumeViewer = () => {
  return (
    <div>
      <div style={{display:'flex' , justifyContent:'center'}}>
        <BTN typ="btn1" value="Resume &nbsp;&nbsp;" down={resume} icon="0" flag={true} />
      </div>
      <div style={{ height: '100vh' }}>
        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
          <Viewer
            fileUrl="./resume.pdf"
          />
        </Worker>
      </div>
    </div>
  );
};

export default ResumeViewer;
