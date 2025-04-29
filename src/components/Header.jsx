import React from "react";
import { useContext } from "react";
import { counterContext } from "../context/context";

const Header = () => {
  const value = useContext(counterContext); 
  return (
    <div>
      <h2 className="heading">Interactive Data Explorer</h2>
      <div className="searchbar">
        <div className="search"><input type="text" id="find" placeholder="Search" onChange={(e)=>{value.setNa(e.target.value)}}/></div>
        <div className="filter">Filter By Type
            <select name="" id="filterby" onChange={(e)=>{value.setSubtype(e.target.value)}}>
                <option value="all">all</option>
                <option value="normal">normal</option>
                <option value="fighting">fighting</option>
                <option value="flying">flying</option>
                <option value="poison">poison</option>
                <option value="ground">ground</option>
                <option value="rock">rock</option>
                <option value="bug">bug</option>
                <option value="ghost">ghost</option>
                <option value="steel">steel</option>
                <option value="fire">fire</option>
                <option value="water">water</option>
                <option value="grass">grass</option>
                <option value="electric">electric</option>
                <option value="psychic">psychic</option>
                <option value="ice">ice</option>
                <option value="dragon">dragon</option>
                <option value="dark">dark</option>
                <option value="fairy">fairy</option>
                <option value="stellar">stellar</option>
                <option value="unknown">unknown</option>
                 
            </select>
        </div>
      </div>
    </div>
  );
};

export default Header;
