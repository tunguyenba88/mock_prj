import Product from './Product';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ScrollToTopOnMount from '../template/ScrollToTopOnMount';
import FilterMenuLeft from './FilterMenuLeft';
import { useDispatch, useSelector } from 'react-redux';
import { FC, useEffect, useState } from 'react';
import { filterProduct } from '../store/product/actions';
import { ProductType } from '../types/product.type';
import Paginate from './Paginate';

const ProductList: FC = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.filter.data);
  const [page, setPage] = useState([]);

  const handleSort = () => {
    dispatch(filterProduct({ sort: true }));
  };

  const callbackFunction = (data: any) => {
    setPage(data);
  };

  const [formData, setFormData] = useState({
    search: '',
    type: '',
  });
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();

    dispatch(filterProduct(formData));
    console.log(formData);
  };
  useEffect(() => {
    dispatch(filterProduct({}));
    setPage(data);
  }, []);
  return (
    <div className='container mt-5 py-4 px-xl-5'>
      <ScrollToTopOnMount />

      <div className='row mb-4 mt-lg-3'>
        <div className='d-none d-lg-block col-lg-3'>
          <div className='border rounded shadow-sm'>
            <FilterMenuLeft />
          </div>
        </div>
        <div className='col-lg-9'>
          <div className='d-flex flex-column h-100'>
            <div className='row mb-3'>
              <div className='col-lg-3 d-none d-lg-block'>
                <button className='btn btn-dark' type='button' onClick={handleSort}>
                  Sort Lastest
                </button>
              </div>
              <div className='col-lg-9 col-xl-5 offset-xl-4 d-flex flex-row'>
                <form className='input-group' onSubmit={handleSubmit}>
                  <div className='col-lg-3 d-none d-lg-block'>
                    <select
                      className='form-select'
                      name='type'
                      value={formData.type}
                      onChange={handleChange}
                    >
                      <option value=''>All</option>
                      <option value='name'>Name</option>
                      <option value='actor'>Actor</option>
                    </select>
                  </div>
                  <input
                    className='form-control'
                    type='text'
                    name='search'
                    placeholder='Search products...'
                    value={formData.search}
                    onChange={handleChange}
                  />
                  <button className='btn btn-outline-dark' type='submit'>
                    <FontAwesomeIcon icon={['fas', 'search']} />
                  </button>
                </form>
              </div>
            </div>
            <div
              className={
                'row row-cols-1 row-cols-md-2 row-cols-lg-2 g-3 mb-4 flex-shrink-0 row-cols-xl-3'
              }
            >
              {page?.length ? (
                page.map((movie: ProductType) => (
                  <div key={movie.id}>
                    <Product movie={movie} />
                  </div>
                ))
              ) : (
                <p>No Data</p>
              )}
            </div>
            <Paginate data={data} callBack={callbackFunction} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
