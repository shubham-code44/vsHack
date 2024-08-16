import React from 'react';
import DocViewer, { DocViewerRenderers } from 'react-doc-viewer';
import ncResume from "../../images/resume/ncResume.pdf"
import ncCV from "../../images/resume/ncCV.png"
import {Box, Stack} from "@mui/material";
import caseImage19 from "../../images/caseStudy2/caseImage19.png";

const PdfPreviewViewer = () => {
    const docs = [
        , // Remote file
    ];

    return (
              <Stack spacing={4} justifyContent="center" alightItem="center" sx={{height:"100%",mt:10,px:{md:0,xs:3}}}>
                  <DocViewer documents={[{ uri: ncResume,fileTypes:"pdf" }]} pluginRenderers={DocViewerRenderers} style={{height: '100%'}}
                             config={{
                                 header: {
                                     disableHeader: true,
                                     disableFileName: true,
                                     retainURLParams: true,
                                 },
                                 csvDelimiter: ",", // "," as default,
                                 pdfZoom: {
                                     defaultZoom: 1.1, // 1 as default,
                                     zoomJump: 0.2, // 0.1 as default,
                                 },
                                 pdfVerticalScrollByDefault: true, // false as default
                             }}
                             prefetchMethod="GET" />
                  <Box
                      component="img"
                      src={ncCV}
                      alt="Responsive"
                      sx={{
                          width: "90%", // Makes the image responsive
                          height: "90%", // Maintains aspect ratio
                      }}/>
              </Stack>
    );
};

export default PdfPreviewViewer;