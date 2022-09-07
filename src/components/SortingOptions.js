import React from "react";
import '../styles/SortingOptions.css';

function SortingOptions(props) {

  const handleSort = (e) => {
      console.log(e.target.innerHTML);
      props.setSortType(e.target.innerHTML)
      props.setIsFiltered(false);
  }

  return (
    <div className="sorting-opts">
          <div onClick={handleSort} className="opts-sort">
            Recently Listed
          </div>
          <div  onClick={handleSort} className="opts-sort">
            Price: Low To High
          </div>
          <div onClick={handleSort} className="opts-sort">
          Price: High To Low
          </div>
          <div onClick={handleSort} className="opts-sort">
            Auction Ending Soon
          </div>
    </div>
  );
}

export default SortingOptions;