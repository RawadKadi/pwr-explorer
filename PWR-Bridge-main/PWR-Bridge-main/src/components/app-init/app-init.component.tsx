'use client';

// import WOMLogo from 'data-base64:src/assets/logo/WOM-Logo.svg';
import { useContext, useEffect, useState } from 'react';

import ThemeSvcContext from 'src/shared/services/theme/theme.context';
import ThemeService from 'src/shared/services/theme/theme.service';

function LoadingComponent() {
	return (
		<div className="h-full w-full grid place-items-center">
			{/* // <img className="w-20 h-20 " src={WOMLogo} /> */}
		</div>
	);
}

type Command = {
	id: number;
	name: string;
	description: string;
	execute: () => void;
};

const commands: Command[] = [
	{
		id: 1,
		name: 'reset',
		description: 'Resets the app storage',
		execute: () => {
			localStorage.clear();
		},
	},
];

type AppInitProps = {
	children: React.ReactNode;
};

export default function AppInit({ children }: AppInitProps) {
	// *~~*~~*~~ Auth svc ~~*~~*~~* //
	const themeSvc = useContext<ThemeService>(ThemeSvcContext);

	// *~~*~~*~~ state ~~*~~*~~* //
	const [appLoaded, setAppLoaded] = useState<boolean>(false);

	function devCommands() {
		interface WindowCommands {
			[key: string]: () => void;
		}

		const windowCommands: WindowCommands = {};

		for (const command of commands) {
			windowCommands[command.name] = command.execute;
		}

		Object.assign(window, windowCommands);

		function comm() {
			const container = document.createElement('div');
			container.style.position = 'fixed';
			container.style.flexDirection = 'column';
			container.style.top = '20px';
			container.style.left = '0';
			container.style.display = 'flex';
			container.style.gap = '8px';

			for (const command of commands) {
				const button = document.createElement('button');
				button.innerText = command.name;
				button.onclick = command.execute;
				button.classList.add('comp_button');
				button.classList.add('blue');

				container.appendChild(button);
			}

			document.body.appendChild(container);
		}

		// @ts-ignore
		window.comm = comm;
	}

	// set up storage api
	useEffect(() => {
		devCommands();

		(async () => {
			// *~~*~~*~~ LOAD THEME ~~*~~*~~* //

			if (typeof window === 'undefined' || !document.querySelector('html')) return;

			document.querySelector('html')!.classList.add('light');

			await themeSvc.loadTheme();

			setAppLoaded(true);

			// // 4. restore wallet
			// const wallet = await walletSvc.generate(privateKeyExists);

			// setAppLoaded(true);
		})();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// TODO: add loading screen
	if (!appLoaded) return <LoadingComponent />;

	return children;
}
