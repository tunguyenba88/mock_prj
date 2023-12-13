import { FC } from 'react';
import { useState, useEffect } from 'react';

interface PaginateProps {
  data: any;
  callBack: Function;
}

const Paginate: FC<PaginateProps> = ({ data, callBack }) => {
  const [currPage, setCurrPage] = useState(1);
  const [paginateNumber, setPaginateNumber] = useState(Number);

  const handleSetPage = () => {
    if (currPage * 3 > data?.length && data) {
      callBack(data?.slice((currPage - 1) * 3, data?.length));
    } else {
      callBack(data?.slice((currPage - 1) * 3, currPage * 3));
    }
  };
  const list = [];
  useEffect(() => {
    callBack(data?.slice(0, 3));
    setPaginateNumber(Math.ceil(data?.length / 3));
    setCurrPage(1);
  }, [data]);

  useEffect(() => {
    handleSetPage();
  }, [currPage]);
  for (let i = 1; i <= paginateNumber; i++) {
    list.push(
      <li key={i} className={`page-item ${i == currPage ? 'active' : ''}`}>
        <a className='page-link' type='button' onClick={() => setCurrPage(i)}>
          {i}
        </a>
      </li>
    );
  }
  return (
    <div className='d-flex align-items-center mt-auto'>
      <nav className='ms-auto'>
        <ul className='pagination my-0'>
          <li className='page-item'>
            <a className='page-link' href='!#'>
              Previous
            </a>
          </li>
          {list}
          <li className='page-item'>
            <a className='page-link' href='!#'>
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Paginate;
