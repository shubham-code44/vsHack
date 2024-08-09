import React from 'react';
import DocViewer, { DocViewerRenderers } from 'react-doc-viewer';

const PdfPreviewViewer = () => {
    const docs = [
        { uri: "https://www.example.com/sample.docx" }, // Remote file
    ];

    return (
        <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} />
    );
};

export default PdfPreviewViewer;