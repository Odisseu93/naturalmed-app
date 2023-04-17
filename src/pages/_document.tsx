import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<title>Naturalmed App</title>	
				<link  rel="shortcut icon" href="./assets/favicon.svg" />
			</ Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
