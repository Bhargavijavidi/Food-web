import { useEffect,useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Navlink from './navlink';
import { useCart } from './Cartcontext';
const URL="https://www.themealdb.com/api/json/v1/1/categories.php"
function BasicExample() {
    const[food,setFood]=useState([])
    const[searchterm,setsearchterm]=useState("");
    const[filteredFood, setFilteredFood] = useState([]);
       const[loading,setloading]=useState(false)
    const[iserror,setiserror]=useState({status:false ,msg:""})
    const { addItemtocart} = useCart();
       const fetchFooddata=async (url)=>{
        setloading(true)
        setiserror({status:false ,msg:""})
        try{
         const response=await fetch(url)
         const data=await response.json()
         setFood(data.categories) 
         setFilteredFood(data.categories); 
         setloading(false)
         setiserror({status:false ,msg:""})
        }
     
        catch(error){
            setloading(false)
            setiserror({status:true ,msg:"Not found"})
        }
       }
useEffect(()=>{
    fetchFooddata(URL)
},[])
const findItem = () => { const newItems = food.filter((eachItem) =>
    eachItem.strCategory.toLowerCase().includes(searchterm.toLowerCase()));
     setFilteredFood(newItems);
     };
const handlebuynow=(item)=>{
    addItemtocart(item);
              }
 if(loading){
                return<h1>loading...</h1>
               }
               if(iserror.status){
                   return<>
                   <h1>
                   {iserror.msg}
                   </h1>
                   </>
               }
  return (
    <>
     <div className='navsection'>

<img width="70" height="70" src="https://img.icons8.com/3d-fluency/94/gingerbread-house.png" alt="gingerbread-house"/>
<div>
<input type='text' name="name" id="name" placeholder='Search Item...'
 value={searchterm} onChange={(e)=>setsearchterm(e.target.value)}/>
<Button variant="warning" size="sm" className="mb-1" onClick={findItem}>
Search
</Button>
</div>
<Navlink/>
</div>
     <div className='menusection'> 
        { filteredFood.length === 0 ? ( <h1>No items found</h1> ) : 
        ( filteredFood.map((item) =>
             {
    const { idCategory, strCategory, strCategoryThumb, strCategoryDescription } = item; 
             return ( <Card style={{ width: "80%" }} key={idCategory} className='carddata'> 
             <Card.Img variant="top" src={strCategoryThumb} className='cardimg' />
              <Card.Body className='card-body'>
                 <Card.Title>{strCategory}</Card.Title>
                  <Card.Text className="card-text"> {strCategoryDescription}</Card.Text> 
                  <Card.Text>Rs.129</Card.Text>
                 <Button variant="primary" onClick={()=>handlebuynow(item)}>Buy Now</Button> </Card.Body> </Card> ); }) ) }
     </div>
   
    </>
)
}

export default BasicExample;