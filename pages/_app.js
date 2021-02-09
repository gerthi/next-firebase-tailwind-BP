import '../styles/globals.css';
import { ProvideAuth } from '../lib/useAuth';

function MyApp({ Component, pageProps }) {
	return (
		<ProvideAuth>
			<div data-theme='dark'>
				<Component {...pageProps} />
			</div>
		</ProvideAuth>
	);
}

export default MyApp;
