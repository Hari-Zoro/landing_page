import React from "react";
import '../styles/FiltersDrpDwn.css';
import maglogo from "../assets/magglass.svg";

function FiltersDrpDwn(props) {
  return (
    <div className="filters-all">
        <div>
          <div className="title-filter">Brand</div>
            <div className="search-for-filters"><input className="input-srch"></input><img className="srch-mag" src={maglogo} alt='mag'></img></div>
            <div className="name-box"><label className="filter-fields-opts" htmlFor="audi">Audi</label><input id="audi" type='checkbox'></input></div>
            <div className="name-box"><label className="filter-fields-opts" htmlFor="honda">Honda</label><input id="honda" type='checkbox'></input></div>
            <div className="name-box"><label className="filter-fields-opts" htmlFor="hyundai">Hyundai</label><input id="toyota" type='checkbox'></input></div>
            <div className="name-box"><label className="filter-fields-opts" htmlFor="toyota">Toyota</label><input id="hyundai" type='checkbox'></input></div>
            <div className="name-box"><label className="filter-fields-opts" htmlFor="renault">Renault</label><input id="renault" type='checkbox'></input></div>
            <div className="name-box"><label className="filter-fields-opts" htmlFor="bmw">BMW</label><input id='bmw' type='checkbox'></input></div>
            <div className="name-box"><label className="filter-fields-opts" htmlFor="nissan">Nissan</label><input id="nissan" type='checkbox'></input></div>
            <div className="name-box"><label className="filter-fields-opts" htmlFor="fiat">Fiat</label><input id="fiat" type='checkbox'></input></div>
            <div className="name-box"><label className="filter-fields-opts" htmlFor="lamborgini">Lamborgini</label><input id="lamborgini" type='checkbox'></input></div>
            <div className="name-box"><label className="filter-fields-opts" htmlFor="bentley">Bentley</label><input id="bentley" type='checkbox'></input></div>
            <div className="name-box"><label className="filter-fields-opts" htmlFor="mercedes">Mercedes Benz</label><input id="mercedes" type='checkbox'></input></div>
            <div className="name-box"><label className="filter-fields-opts" htmlFor="chevrolet">Chevrolet</label><input id="chevrolet" type='checkbox'></input></div>
            <div className="name-box"><label className="filter-fields-opts" htmlFor="bugatti">Bugatti</label><input id="bugatti" type='checkbox'></input></div>
            <div className="name-box"><label className="filter-fields-opts" htmlFor="porche">Porche</label><input id="porche" type='checkbox'></input></div>
            <div className="name-box"><label className="filter-fields-opts" htmlFor="ferrari">Ferrari</label><input id="ferrari" type='checkbox'></input></div>
            <div className="name-box"><label className="filter-fields-opts" htmlFor="maruti">Maruti Suzuki</label><input id="maruti" type='checkbox'></input></div>
        </div>
        <div>
          <div className="title-filter">Price Range</div>
              <input style={{margin:"5%"}} type="range"></input>
          </div>
        <div>
          <div className="title-filter">Car Type</div>
              <div className="name-box"><label className="filter-fields-opts" htmlFor="sedan">Sedan</label><input id="sedan" type='checkbox'></input></div>
              <div className="name-box"><label className="filter-fields-opts" htmlFor="suv">SUV</label><input id='suv' type='checkbox'></input></div>
              <div className="name-box"><label className="filter-fields-opts" htmlFor="hatchback">Hatchback</label><input id="hatchback" type='checkbox'></input></div>
              <div className="name-box"><label className="filter-fields-opts" htmlFor="muv">MUV</label><input id="muv" type='checkbox'></input></div>
        </div>
        <div>
          <div className="title-filter">Transmission</div>
              <div className="name-box"><label className="filter-fields-opts" htmlFor="automatic">Automatic</label><input id="automatic" type='checkbox'></input></div>
              <div className="name-box"><label className="filter-fields-opts" htmlFor="manual">Manual</label><input id='manual' type='checkbox'></input></div>
        </div>
        <div>
          <div className="title-filter">Fuel Type</div>
              <div className="name-box"><label className="filter-fields-opts" htmlFor="petrol">Petrol</label><input id="petrol" type='checkbox'></input></div>
              <div className="name-box"><label className="filter-fields-opts" htmlFor="diesel">Diesel</label><input id='diesel' type='checkbox'></input></div>
              <div className="name-box"><label className="filter-fields-opts" htmlFor="electric">Electric</label><input id="electric" type='checkbox'></input></div>
        </div>
        <div style={{marginBottom:"5%"}}>
          <div className="title-filter" >Owner Type</div>
              <div className="name-box"><label className="filter-fields-opts" htmlFor="first">1st</label><input id="first" type='checkbox'></input></div>
              <div className="name-box"><label className="filter-fields-opts" htmlFor="second">2nd</label><input id='second' type='checkbox'></input></div>
              <div className="name-box"><label className="filter-fields-opts" htmlFor="threeplus">3rd +</label><input id="threeplus" type='checkbox'></input></div>
        </div>
      </div>
        
  );
}

export default FiltersDrpDwn;