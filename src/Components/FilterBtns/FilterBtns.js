import React from 'react'
import "./style.css"

export default function FilterBtns({handleFilter,categoryName}) {

    return (
        <>
            <div className="animals-header">
                <h2>{categoryName}
                </h2>
                <div className="filter-btns">
                    <button className={`catalog-filter-product catalog-filter-${categoryName=="All" && "active"}`}
                        data-category="all"
                        onClick={(e) => handleFilter(e.target.dataset.category)}>
                        All Toys
                    </button>
                    <button className={`catalog-filter-product catalog-filter-${categoryName=="wooden" && "active"}`}
                        data-category="wooden"
                        onClick={(e) => handleFilter(e.target.dataset.category)}>
                        Wooden Toys
                    </button>
                    <button className={`catalog-filter-product catalog-filter-${categoryName=="stuffed" && "active"}`}
                        data-category="stuffed"
                        onClick={(e) => handleFilter(e.target.dataset.category)}>
                        Stuffed Animals
                    </button></div>
            </div>
            <div className="border"></div>
        </>
    )
}
