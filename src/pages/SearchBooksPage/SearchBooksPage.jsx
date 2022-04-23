import React from 'react';
import BigCard from '../../components/BigCard/BigCard';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import styles from './searchBooksPage.module.css'

const SearchBooksPage = () => {
	return (
		<>
			<Header />
			<div className={styles.title}>
				<h1>Истории</h1>
			</div>
			<BigCard />
			<BigCard />
			<BigCard />
			<BigCard />
			<Footer />
		</>
	);
};

export default SearchBooksPage;