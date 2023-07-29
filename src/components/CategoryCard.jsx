import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const CategoryCard = ({card}) => {
    const {thumbnail,category}=card
    return (
        <Link to={`/explore/${category}`} className="mx-2 my-4">
           <img className="object-cover w-64 h-48" src={thumbnail} alt={category} /> 
           <p className="text-gray-700 font-semibold py-4">{category}</p>
        </Link>
    );
};

export default CategoryCard;