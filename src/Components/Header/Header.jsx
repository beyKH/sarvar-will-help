import { useContext } from 'react'
import { ThemeContext } from '../../ThemeContext'
import './Header.css'


function Header () {

	const {theme, setTheme} = useContext(ThemeContext);

	return (
		<>
			<header className={theme} >
				<h1>App</h1>
        <select defaultValue={theme} onChange={e => setTheme(e.target.value)}>
					<option value="light">light</option>
					<option value="dark">dark</option>
				</select>
			</header>
		</>
	)
}

export default Header
