import React from 'react';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const PDFViewer = ({ fileUrl }) => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div className="pdf-viewer">
      <Worker workerUrl={'file:///C:/Users/amogha/Downloads/frontend/frontend/src/Assets/pdfs/Using%20explainable%20artificial%20intelligence%20journel%20(1).pdf'}>
        <Viewer fileUrl={fileUrl} plugins={[defaultLayoutPluginInstance]} />
      </Worker>
    </div>
  );
};

export default PDFViewer;
