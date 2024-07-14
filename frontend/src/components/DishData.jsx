const DishData = ({ dishes, handleTogglePublish }) => {  
  return (  
    <>  
      {dishes.map((curDish) => {  
        const { dishId, dishName, imageUrl, isPublished } = curDish;  

        const togglePublish = () => {  
          handleTogglePublish(dishId);  
        };  

        return (  
          <tr key={dishId}>  
            <td>{dishId}</td>  
            <td>{dishName}</td>  
            <td>
              <img src={imageUrl} alt={dishName} style={{ height: "100px"}} /> 
            </td>
            <td>{isPublished.toString()}</td>  
            <td>  
              <button onClick={togglePublish}>Toggle Publish</button>  
            </td>  
          </tr>  
        );  
      })}  
    </>  
  );  
};  

export default DishData;