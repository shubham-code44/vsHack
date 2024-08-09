import React from 'react';
import DocViewer, { DocViewerRenderers } from 'react-doc-viewer';
import ncResume from "../../images/resume/ncResume.pdf"
import {Box, Stack} from "@mui/material";

const PdfPreviewViewer = () => {
    const docs = [
        { uri: ncResume,fileTypes:"pdf" }, // Remote file
    ];

    return (
              <Stack justifyContent="center" alightItem="center" sx={{height:"100%",my:13,mb:80}}>
                  <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} />
              </Stack>
    );
};

export default PdfPreviewViewer;