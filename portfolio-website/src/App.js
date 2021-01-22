import { BrowserRouter, Route } from 'react-router-dom';
import { HomeContainer } from './containers/index';
import { TestContainer } from './containers/test';

function App() {
	return (
		<BrowserRouter>
			<Route exact path="/" component={HomeContainer} />
			<Route exact path="/test" component={TestContainer} />
		</BrowserRouter>
	);
}

export default App;
