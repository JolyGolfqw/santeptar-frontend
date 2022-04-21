import React from 'react';
import Categories from '../../components/Categories/Categories';
import styles from './categoriesPage.module.css'

const CategoriesPage = () => {
	return (
		<div className={styles.categories}>
			<h1>Категории</h1>
			<Categories />
		</div>
	);
};

export default CategoriesPage; 