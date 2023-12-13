import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterProduct } from '../store/product/actions';

const types = [
  { type: '', value: 'All' },
  { type: 'action', value: 'Action' },
  { type: 'adventure', value: 'Adventure' },
  { type: 'animation', value: 'Animation' },
  { type: 'biography', value: 'Biography' },
  { type: 'comedy', value: 'Comedy' },
  { type: 'documentary', value: 'Documentary' },
  { type: 'drama', value: 'Drama' },
];

const FilterMenuLeft: FC = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    genre: '',
    ratings: '',
    min_price: '',
    max_price: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (formData.min_price && formData.max_price) {
      if (!Number(formData.min_price) || !Number(formData.max_price)) {
        setError('Must be number');
      } else {
        setError('');
      }
    } else {
      setError('');
    }
    dispatch(filterProduct(formData));
    console.log(formData);
    console.log(error);
  };
  const handleCancel = () => {
    setFormData({ genre: '', ratings: '', min_price: '', max_price: '' });
    dispatch(filterProduct({}));
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <ul className='list-group list-group-flush rounded'>
          <li className='list-group-item'>
            <h5 className='mt-1 mb-1'>Genre</h5>
            <div className='d-flex flex-column'>
              {types.map((i) => {
                return (
                  <div key={i.type} className='form-check'>
                    <input
                      className='form-check-input'
                      name='genre'
                      type='radio'
                      checked={formData.genre == i.type}
                      value={i.type}
                      onChange={handleChange}
                    />
                    <label className='form-check-label' htmlFor='genre'>
                      {i.value}
                    </label>
                  </div>
                );
              })}
            </div>
          </li>
          <li className='list-group-item'>
            <h5 className='mt-1 mb-1'>Ratings</h5>
            <div className='d-flex flex-column'>
              {Array.from({ length: 5 }, (_, i) => {
                return (
                  <div key={i} className='form-check'>
                    <input
                      className='form-check-input'
                      name='ratings'
                      type='radio'
                      checked={Number(formData.ratings) == i}
                      value={i}
                      onChange={handleChange}
                    />
                    <label className='form-check-label' htmlFor='ratings'>
                      {i == 0 ? 'All' : `${i}+`}
                    </label>
                  </div>
                );
              })}
            </div>
          </li>
          <li className='list-group-item'>
            <h5 className='mt-1 mb-2'>Price Range</h5>
            <div className='d-grid d-block mb-3'>
              <div className='form-floating mb-2'>
                <input
                  type='text'
                  className={`form-control  ${error ? 'border-danger' : ''}`}
                  placeholder='Min'
                  name='min_price'
                  onChange={handleChange}
                  value={formData.min_price}
                />
                <label htmlFor='min_price'>Min Price</label>
              </div>
              <div className='form-floating mb-2'>
                <input
                  type='text'
                  className={`form-control  ${error ? 'border-danger' : ''}`}
                  placeholder='Max'
                  name='max_price'
                  onChange={handleChange}
                  value={formData.max_price}
                />
                <label htmlFor='max_price'>Max Price</label>
              </div>
              <span className='d-flex justify-content-center' style={{ color: 'red' }}>
                {error}
              </span>
              <button className='btn btn-dark' type='submit'>
                Apply
              </button>
              <br />
              <button className='btn btn-dark' type='button' onClick={() => handleCancel()}>
                Cancel
              </button>
            </div>
          </li>
        </ul>
      </form>
    </>
  );
};

export default FilterMenuLeft;
