import React from 'react';

const Pagination = ({postsPerPage,totalPosts,paginate }) => {

  const pgNumbers=[]
  for(let i=1;i<Math.ceil(totalPosts/postsPerPage)+1;i++){
    pgNumbers.push(i)
  }


  return (
    <nav>
      <ul className='pagination'>
        {pgNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number)} href='#' className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
    
  );
};

export default Pagination;
