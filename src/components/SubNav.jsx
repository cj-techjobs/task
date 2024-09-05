import './navbar.css'
import PropTypes from 'prop-types';

export const SubNav = ({data,handleFilter}) => {
  return (
    <div className='flex flex-row justify-evenly sub-nav'>
        {data?.map((item, index)=>{
            return(
                <div key={index} className='px-4 py-2 sub-nav-menus' onClick={()=>{handleFilter(item)}}>
                    {item}
                </div>
            )
        })}
    </div>
  )
}

SubNav.propTypes = {
  data: PropTypes.any.isRequired,
  handleFilter: PropTypes.any.isRequired,
};