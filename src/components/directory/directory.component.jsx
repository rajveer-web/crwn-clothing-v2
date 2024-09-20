import CategoryItem from '../category-item/category-item.component';

import './directory.styles.scss';

const Directory = ({ categories }) => {
  return (          //container of the div with their ID
    <div className='directory-container'>                            
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
