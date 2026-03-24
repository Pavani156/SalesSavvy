// CategoryNavigation.jsx
import React from 'react';
import './assets/styles.css';

export function CategoryNavigation({ onCategoryClick, activeCategory }) {
  // Static categories list
  const categories = ['Shirts', 'Pants', 'Accessories', 'Mobiles', 'Mobile Accessories'];

  return (
    <nav className="category-navigation">
      <ul className="category-list">
        {categories.map((category) => (
          <li
            key={category}
            className={`category-item ${
              activeCategory === category ? 'active' : ''
            }`}
            onClick={() => onCategoryClick(category)} // Trigger the click handler on category click
            role="button"
            tabIndex={0}
            aria-current={activeCategory === category ? 'page' : undefined}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                onCategoryClick(category);
              }
            }}
          >
            {category}
          </li>
        ))}
      </ul>
    </nav>
  );
}
