import React, { useState } from 'react'
import { Document, Page } from 'react-pdf'
// @ts-ignore
import determinationLetter from '../assets/(EIN)_IRS_IDENTIFICATION_DOCUMENT.pdf'

const OfficialDocuments = () => {
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  function onDocumentLoadSuccess({ numPages }: any) {
    setNumPages(numPages)
  }

  function onDocumentLoadFailure({ error }: any) {
    console.log(error)
  }
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: 'green',
        position: 'absolute',
      }}
    >
      OFFICIAL DOCUMENTS
      <Document
        file={determinationLetter}
        externalLinkTarget="_blank"
        onLoadSuccess={onDocumentLoadSuccess}
        onSourceError={(error) => onDocumentLoadFailure(error)}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
      <button>close</button>
    </div>
  )
}

export default OfficialDocuments
