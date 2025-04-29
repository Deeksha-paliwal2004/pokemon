import { useState, useEffect } from "react";
import { counterContext } from "./context/context";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [data, setData] = useState([]); 
  const [details, setDetails] = useState( {})
  const [na, setNa] = useState( )
  const [subtype, setSubtype] = useState("all")
   

  async function getPath1(params) {
    let path1 = await fetch(params);
    let p1 = await path1.json();
      
      let path2 = await fetch(p1.forms[0].url);
      let p2 = await path2.json();
     setDetails((presentdetails)=>({...presentdetails,[p2.name]: p2}))
     
    }
  

  const getData = async () => {
    let pokemon = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150");
    let p = await pokemon.json();
    setData(p.results)
    p.results.forEach(e=>{
      getPath1(e.url)
    })
    
  };
   
  function displayfiltered(){
      
      const filteredData = data.filter((item) => {
        const item_detail = details[item.name];
        if (!item_detail || subtype === "all") return true;
        return item_detail.types.some((t) => t.type.name === subtype);
      });
      if(subtype === "all"){
        getData();
      }
      setData(filteredData)
      console.log(filteredData)
       filteredData.forEach((e)=>{
        getPath1(e.url)
       })
    }
     
     
  
 

  useEffect(() => {
    getData();
     
  }, []);

  useEffect(() => {
    displayfiltered()
  }, [subtype])
  

  return (
    <>
    <counterContext.Provider value={{na , setNa , subtype , setSubtype}}>
      <Header />
      
      <main>
      {data.map((item, index) => {
        const item_detail =  details[item.name]
          return (
          <div key={index} className="card">
            <div>Name:{item.name}</div>
            { (item_detail) ? 
             (<div>Id:{item_detail.id}</div> 
              ) :
             (<div> Loading... </div>)}

              { (item_detail) ? 
             (<div><img src= { item_detail.sprites.front_default} alt=""  />
             {/* <img src="item_detail.sprites." alt=""  />
             <img src="item_detail.sprites" alt=""  />
             <img src="item_detail.sprites" alt="" />
             <img src="" alt="" />
             <img src="" alt="" />
             <img src="" alt="" />
             <img src="" alt="" /> */}
             </div> 
              ) :
             (<div> Loading... </div>)}
           
           { (item_detail) ? 
              (  item_detail.types.map((e)=>{
                   return <div key={e.slot}>
                    <div>Type:{e.type.name}</div>
                   </div>
             }) )
               :
             (<div> Loading... </div>)} :
              
               
          </div>
        );
      })}
      </main>
      </counterContext.Provider>
    </>
  );
}

export default App;
