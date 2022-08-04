import React, { useState } from "react";
import axios from "axios";
import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

function SearchBar({ placeholder }) {
  
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  
  const onType = async(event)=>{    
    
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    if(searchWord){
      
      const response = await axios.get(
        '/api/search?search='+searchWord
      );
      
      if (response.status === 200) {  
        if (searchWord === "") {
          setFilteredData([]);
        } else {
          setFilteredData(response.data.data);
        }
      }else if (response.status === 500) {
        console.log("Something went wrong!")
      }
      else if (response.status === 204) {
        setFilteredData([]);
      }  
      
      
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={onType}
        />
        <div className="searchIcon">
          {!wordEntered? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length !== 0 && (
        <div className="dataResult" >
          {filteredData.map((value, key) => {
            return (
              <a className="dataItem" href={value.name} target="_blank" rel="noreferrer" key={value.name.toString()}>
                <p>{value.name} </p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
