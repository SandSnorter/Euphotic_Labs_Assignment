import { useEffect, useState } from "react";
import DishData from "./components/DishData";

const API = "http://localhost:5000/api/dishes";

const App = () => {
  const [dishes, setDishes] = useState([]);
  const [isDataFetched, setIsDataFetched] = useState(false);

  const fetchDishes = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.length > 0) {
        setDishes(data);
        setIsDataFetched(true);
      } else {
        console.log("Data not fetched yet");
      }
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  const handleTogglePublish = async (dishId) => {  
    try {  
      const res = await fetch(`${API}/${dishId}/togglePublish`, { method: "PUT" });  
      if (!res.ok) {  
        throw new Error("Unable to toggle publish status");  
      }  
  
      const { message, dish } = await res.json();  
      
      setDishes((prevDishes) =>  
        prevDishes.map((curDish) =>  
          curDish.dishId === dish.dishId ? { ...curDish, isPublished: dish.isPublished } : curDish  
        )  
      );  
  
      console.log(message);  
    } catch (error) {  
      console.error(error);  
    }  
  };

  useEffect(() => {
    fetchDishes(API);
  }, []);

  return (
    <div>
      {isDataFetched ? (
        <table>
          <thead>
            <tr>
              <th>Dish ID</th>
              <th>Name</th>
              <th>Image</th>
              <th>Is Published</th>
              <th>Change Is Published Status</th>
            </tr>
          </thead>
          <tbody>
            <DishData dishes={dishes} handleTogglePublish={handleTogglePublish} />
          </tbody>
        </table>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default App;
