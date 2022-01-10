import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

import Login from './Components/Login/Login'
import { ThemeContext } from './ThemeContext'
import {useContext} from 'react';

import {languages} from './Options';

import { LanguageContext } from './LanguageContext';
import { LangaugeProvider } from './LanguageContext';

function App () {

	const theme = useContext(ThemeContext);

	return (

    <>
		console.log(language);
			<Header>

      </Header>



			<Login />
			<LangaugeProvider>
				<Footer>
				<select >
					{languages.map( (lang , key) =>
						<option key={key} value={lang.prop}>{lang.name}</option>
					 )}
				</select>
				<p>&copy; Copyright 2020</p>
			</Footer>
			</LangaugeProvider>

		</>
	)
}

export default App
