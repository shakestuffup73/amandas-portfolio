import styles from '../Resume/Resume2.module.css'
import { useState } from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import { amandaResume } from '../../assets/pdf/exports.js'


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
    <div className={styles.pageLayout}>
      <div className={styles.gridContainer}>
        <div className={styles.one}>
          <Document 
            file={amandaResume.src}
            onLoadSuccess={onDocumentLoadSuccess}
            >
              <Page 
                pageNumber={pageNumber}
                width={530}
              />
          </Document>
            <h1> Page {pageNumber} of {numPages} </h1>
          { pageNumber > 1 && 
            <button onClick={changePageBack} className={styles.resumeBtn}>Previous Page</button>
          }
          {
            pageNumber < numPages && 
              <button onClick={changePageNext} className={styles.resumeBtn}>Next Page</button>
          }
        </div>
      </div>
    </div>
  )
}

export default Resume2