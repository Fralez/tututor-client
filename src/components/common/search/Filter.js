import React, { useState } from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import { Container } from "@material-ui/core";

const Filter = () => {   
  // Hide and show a options dropdown
  const [showMe, setShowMe] = useState(false);
  function toggle(){
    setShowMe(!showMe);
  };
  
  return ( 
    <div class="relative inline-block text-left m-4 text-pink-500">
      <div>
        <div class="py-1">
          <select id="ddlViewBy">
            <option value="2" selected="selected">Más reciente</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;