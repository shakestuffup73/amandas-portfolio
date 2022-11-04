import styles from '../Resume/Resume2.module.css'
import { useState } from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'



const Resume2 = () => {

  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  function onDocumentLoadSuccess({numPages}){
    setNumPages(numPages);
    setPageNumber(1)
  }
  
  function changePage(offSet) {
    setPageNumber(prevPageNumber => prevPageNumber + offSet);
  }
  
  function changePageBack(){
    changePage(-1)
  }
  
  function changePageNext(){
    changePage(1)
  }

  return (
    <>
    <div className={styles.pageLayout}>
      <div className={styles.titleDiv}>
        <img src="assets/images/AmandaResumeLogo.png" alt="aperture with dev projects words"></img>
      </div>
      <div className={styles.gridContainer}>
        <div className={styles.one}>
          <Document 
            file="assets/pdf/AmandaSternResume.pdf"
            onLoadSuccess={onDocumentLoadSuccess}>
              <Page pageNumber={pageNumber} />
          </Document>
            <p> Page {pageNumber} of {numPages} </p>
          { pageNumber > 1 && 
            <button onClick={changePageBack}>Previous Page</button>
          }
          {
            pageNumber < numPages && 
              <button onClick={changePageNext}>Next Page</button>
          }
        </div>
    </div>
    </div>
    </>
  )
}

export default Resume2