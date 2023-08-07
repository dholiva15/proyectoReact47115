
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";



function App() {
  
  return (


   <div> 
      
      <BrowserRouter > 

        <Navbar/>

        <Routes>
          <Route path="/" element={ <ItemListContainer/> } />
          <Route path="/category/:categoryId" element={ <ItemListContainer/> } />
          <Route path="/item/:itemId" element={ <ItemDetailContainer/> } />
          <Route path="*" element={ <h1> 404 NOT FOUND </h1> } />




        </Routes>
      
      
      
      
      </BrowserRouter>

     
     

      

      <div>  

      <ItemListContainer  greeting="Bienvenidoos"/>
      <ItemDetailContainer />
      



      </div>

    
        


      
    


   </div>

  )
}



export default App;
