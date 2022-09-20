import React from 'react';

const FilterOptions = (props) => {
  return (
    <div className="row">
      <div className="col col-xs-3 col-md-3">
        <label htmlFor="namefilter" className="pull-left">Name:</label>
        <input name="namefilter" type="text" autoFocus placeholder="Search" className="inputBox" value={props.filterNameText ? props.filterNameText : ''} onChange={e => props.handleFilteration(e, 'name')} />
      </div>
      <div className="col col-xs-3 col-md-3">
        <label htmlFor="categoryfilter" className="pull-left">Category:</label>
        <select name="categoryfilter" className="inputBox" value={props.filterCategoryText ? props.filterCategoryText : ''} onChange={e => props.handleFilteration(e, 'category')}>
          <option value="">{'All'}</option>
          <option value="Beverages">{'Beverages'}</option>
          <option value="Lunch & Dinner">{'Lunch & Dinner'}</option>
          <option value="Built-To-Order®">{'Built-To-Order®'}</option>
          <option value="Featured">{'Featured'}</option>
        </select>
      </div>
      <div className="col col-xs-3 col-md-3">
        <label htmlFor="ratingfilter" className="pull-left">Rating:</label>
        <select name="ratingfilter" className="inputBox" value={props.filterRatingText ? props.filterRatingText : ''} onChange={e => props.handleFilteration(e, 'rating')}>
          <option value="">{'All'}</option>
          <option value="1">{'★'}</option>
          <option value="2">{'★★'}</option>
          <option value="3">{'★★★'}</option>
          <option value="4">{'★★★★'}</option>
          <option value="5">{'★★★★★'}</option>
        </select>
      </div>
      <div className="col col-xs-3 col-md-3">
        <label htmlFor="pricefilter" className="pull-left">Price:</label>
        <select name="pricefilter" className="inputBox" value={props.filterPriceText ? props.filterPriceText : ''} onChange={e => props.handleFilteration(e, 'price')}>
          <option value="">{'All'}</option>
          <option value="0,10">{'$0 - $10'}</option>
          <option value="20,30">{'$20 - $30'}</option>
          <option value="30,40">{'$30 - $40'}</option>
          <option value="40,50">{'$40 - $50'}</option>
          <option value="50,">{'$50+'}</option>
        </select>
      </div>
    </div>
  );
};

export default FilterOptions;
