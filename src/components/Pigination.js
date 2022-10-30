import React from 'react'

const Pigination = ({totalProfile, pagePerShow, setCurrentPage, currentPage}) => {
  let pages = [];

  const int = Math.ceil(totalProfile/pagePerShow)
  if(int === 1) return null;
  for(let i = 1; i <= int; i++) {
    pages.push(i)
  }

  const nextPage = (e) => {
    e.preventDefault();
    
    if(currentPage === 5) {
      setCurrentPage(1);
    } else {
      setCurrentPage(currentPage + 1);
    }
  }

  const prevPage = (e) => {
    e.preventDefault();
    if(currentPage === 1) {
      setCurrentPage(5);
    } else {
      setCurrentPage((prev) => prev - 1);
    }
  }


  return (
    <div>
       <button 
          whileTap={{ scale: 0.8 }}
          transition={{ duration: 0.5 }}
        className='pages-btns' onClick={prevPage}>prev</button>
      
      {pages.map((page, index) => {
        return <button 
                  whileTap={{ scale: 0.8 }}
                  transition={{ duration: 0.5 }} className={page === currentPage ? 'active__page' : 'pages-btns'} key={index} onClick={() => setCurrentPage(page)}>{page}</button>
      })}

       <button 
          whileTap={{ scale: 0.8 }}
          transition={{ duration: 0.5 }} className='pages-btns' onClick={nextPage}>next</button>
    </div>
  )
}

export default Pigination;