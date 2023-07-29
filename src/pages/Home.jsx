import { useContext } from "react";
import { DataContext } from "../context/DataProvider";
import CategoryCard from "../components/CategoryCard";
import PageHeading from "../components/PageHeading";

const Home = () => {
    const { dataState: { categories } } = useContext(DataContext)

    return (
        <div>
            <PageHeading>
                Categories
            </PageHeading>
            <div className="flex flex-row flex-wrap">
                {
                    categories.map(card => <CategoryCard key={card._id} card={card} />)
                }
            </div>
        </div>
    );
};

export default Home;