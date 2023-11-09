/* eslint-disable @next/next/no-img-element */
'use client';
import './header.scss';

import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { usePathname, useRouter } from 'next/navigation';

import TextButton from '@/components/internal/text-button/text-button.component';
import Button from '@/components/internal/button/button.component';

import { FaMoon, FaFilter } from 'react-icons/fa';
import { MdOutlineCancel } from 'react-icons/md';
import { RxHamburgerMenu } from 'react-icons/rx';
import ThemeService from 'src/shared/services/theme/theme.service';
import ThemeSvcContext from 'src/shared/services/theme/theme.context';
import { Theme } from 'src/shared/services/theme/theme.type';
import ROUTES from '@/static/router.data';
import { isAddress, isHash } from '@/shared/utils/functions';

function PwrLogo() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="126"
			height="22"
			viewBox="0 0 126 22"
			fill="none"
			className="fill-current dark:text-white text-abrancd-dark-blackish"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M22.1719 21.4986V4.94469H24.5907V6.64069H24.9739C25.2773 6.11517 25.7323 5.64538 26.339 5.23133C26.9617 4.81729 27.8478 4.61026 28.9973 4.61026C29.9872 4.61026 30.8893 4.84914 31.7035 5.32688C32.5338 5.80463 33.1964 6.49736 33.6913 7.40509C34.2022 8.29688 34.4577 9.37978 34.4577 10.6538V11.0121C34.4577 12.2861 34.2102 13.3769 33.7153 14.2846C33.2203 15.1764 32.5577 15.8612 31.7275 16.339C30.8973 16.8167 29.9872 17.0556 28.9973 17.0556C28.231 17.0556 27.5843 16.96 27.0575 16.7689C26.5306 16.5778 26.1075 16.339 25.7882 16.0523C25.4688 15.7497 25.2134 15.4392 25.0218 15.1207H24.6386V21.4986H22.1719ZM28.2789 14.9057C29.3645 14.9057 30.2506 14.5633 30.9372 13.8786C31.6237 13.1938 31.967 12.2144 31.967 10.9404V10.7254C31.967 9.46736 31.6157 8.49594 30.9132 7.81117C30.2267 7.1264 29.3486 6.78401 28.2789 6.78401C27.2251 6.78401 26.347 7.1264 25.6445 7.81117C24.9579 8.49594 24.6147 9.46736 24.6147 10.7254V10.9404C24.6147 12.2144 24.9579 13.1938 25.6445 13.8786C26.347 14.5633 27.2251 14.9057 28.2789 14.9057ZM37.9486 16.7212L35.9369 4.94469H38.4036L39.8885 15.0729H40.2716L42.3313 4.94469H46.3307L48.3664 15.0729H48.7496L50.2344 4.94469H52.7011L50.6894 16.7212H46.5463L44.5106 6.6168H44.1274L42.0918 16.7212H37.9486ZM54.9043 16.7212V4.94469H57.3231V6.33015H57.7063C57.8979 5.83648 58.2012 5.47817 58.6163 5.25522C59.0474 5.01635 59.5743 4.89691 60.197 4.89691H61.61V7.11844H60.1012C59.3029 7.11844 58.6483 7.34139 58.1374 7.78728C57.6264 8.21726 57.371 8.8861 57.371 9.79382V16.7212H54.9043ZM74.3173 17.0556C73.1837 17.0556 72.1539 16.8167 71.2279 16.339C70.3178 15.8612 69.5914 15.1685 69.0485 14.2608C68.5216 13.353 68.2582 12.2622 68.2582 10.9882V10.6777C68.2582 9.40366 68.5216 8.32077 69.0485 7.42897C69.5914 6.52125 70.3178 5.82852 71.2279 5.35077C72.1539 4.8571 73.1837 4.61026 74.3173 4.61026C75.4509 4.61026 76.4168 4.81729 77.2151 5.23133C78.0134 5.64538 78.652 6.19479 79.131 6.87956C79.626 7.56433 79.9453 8.32077 80.089 9.14886L77.6941 9.6505C77.6143 9.12498 77.4466 8.64723 77.1912 8.21726C76.9357 7.78728 76.5765 7.4449 76.1135 7.1901C75.6505 6.9353 75.0677 6.8079 74.3652 6.8079C73.6787 6.8079 73.056 6.96715 72.4972 7.28565C71.9543 7.58822 71.5233 8.03412 71.2039 8.62334C70.8846 9.19664 70.7249 9.89734 70.7249 10.7254V10.9404C70.7249 11.7685 70.8846 12.4772 71.2039 13.0664C71.5233 13.6556 71.9543 14.1015 72.4972 14.4041C73.056 14.7067 73.6787 14.8579 74.3652 14.8579C75.403 14.8579 76.1933 14.5952 76.7361 14.0697C77.279 13.5282 77.6222 12.8434 77.7659 12.0153L80.1608 12.5648C79.9692 13.3769 79.626 14.1254 79.131 14.8102C78.652 15.4949 78.0134 16.0443 77.2151 16.4584C76.4168 16.8565 75.4509 17.0556 74.3173 17.0556ZM82.2874 16.7212V0H84.7542V6.6168H85.1373C85.297 6.31423 85.5205 6.01962 85.8079 5.73297C86.1113 5.44632 86.5024 5.21541 86.9814 5.04024C87.4764 4.84914 88.099 4.75359 88.8494 4.75359C89.7435 4.75359 90.5338 4.95265 91.2204 5.35077C91.9229 5.74889 92.4737 6.31423 92.8728 7.04677C93.272 7.76339 93.4716 8.6313 93.4716 9.6505V16.7212H91.0048V9.8416C91.0048 8.8224 90.7494 8.07393 90.2385 7.59618C89.7276 7.10251 89.025 6.85568 88.131 6.85568C87.1091 6.85568 86.2869 7.1901 85.6642 7.85894C85.0575 8.52779 84.7542 9.49921 84.7542 10.7732V16.7212H82.2874ZM99.9673 17.0556C99.1211 17.0556 98.3628 16.9123 97.6922 16.6256C97.0376 16.339 96.5107 15.917 96.1116 15.3596C95.7284 14.8022 95.5368 14.1254 95.5368 13.3292C95.5368 12.517 95.7284 11.8481 96.1116 11.3226C96.5107 10.7812 97.0456 10.3751 97.7161 10.1044C98.4027 9.83363 99.177 9.69827 100.039 9.69827H103.632V8.93388C103.632 8.24911 103.424 7.6997 103.009 7.28565C102.594 6.8716 101.955 6.66458 101.093 6.66458C100.247 6.66458 99.6001 6.86364 99.1531 7.26176C98.706 7.65988 98.4106 8.17744 98.267 8.81444L95.9679 8.07393C96.1595 7.43693 96.4628 6.86364 96.8779 6.35404C97.309 5.82852 97.8758 5.40651 98.5783 5.08801C99.2808 4.76951 100.127 4.61026 101.117 4.61026C102.65 4.61026 103.855 5.00042 104.733 5.78074C105.611 6.56106 106.05 7.66785 106.05 9.10109V13.9502C106.05 14.428 106.274 14.6668 106.721 14.6668H107.727V16.7212H105.883C105.324 16.7212 104.869 16.5778 104.518 16.2912C104.166 16.0045 103.991 15.6144 103.991 15.1207V15.049H103.632C103.504 15.2879 103.312 15.5666 103.057 15.8851C102.801 16.2036 102.426 16.4823 101.931 16.7212C101.436 16.9441 100.782 17.0556 99.9673 17.0556ZM100.327 15.0252C101.316 15.0252 102.115 14.7465 102.721 14.1891C103.328 13.6158 103.632 12.8355 103.632 11.8481V11.6093H100.183C99.5283 11.6093 99.0014 11.7526 98.6022 12.0392C98.2031 12.31 98.0035 12.716 98.0035 13.2575C98.0035 13.7989 98.2111 14.2289 98.6262 14.5474C99.0413 14.8659 99.6081 15.0252 100.327 15.0252ZM109.407 16.7212V4.94469H111.874V16.7212H109.407ZM110.652 3.34423C110.173 3.34423 109.766 3.19295 109.431 2.89037C109.111 2.57187 108.952 2.16579 108.952 1.67212C108.952 1.17844 109.111 0.780322 109.431 0.477748C109.766 0.159249 110.173 0 110.652 0C111.147 0 111.554 0.159249 111.874 0.477748C112.193 0.780322 112.352 1.17844 112.352 1.67212C112.352 2.16579 112.193 2.57187 111.874 2.89037C111.554 3.19295 111.147 3.34423 110.652 3.34423ZM114.816 16.7212V4.94469H117.235V6.71235H117.618C117.841 6.2346 118.241 5.78871 118.815 5.37466C119.39 4.96061 120.244 4.75359 121.378 4.75359C122.272 4.75359 123.062 4.95265 123.749 5.35077C124.451 5.74889 125.002 6.31423 125.401 7.04677C125.8 7.76339 126 8.6313 126 9.6505V16.7212H123.533V9.8416C123.533 8.8224 123.278 8.07393 122.767 7.59618C122.256 7.10251 121.553 6.85568 120.659 6.85568C119.638 6.85568 118.815 7.1901 118.193 7.85894C117.586 8.52779 117.283 9.49921 117.283 10.7732V16.7212H114.816ZM0.731707 5H12.8293L16 10.0232L12.8293 15.982H6.87805L10 10.0232H3.47317L6.87805 15.982L3.45366 22L0 16.0214L3.46341 10.0133L0.731707 5Z"
			/>
		</svg>
	);
}

export default function HeaderComponent() {
	const pathname = usePathname();

	const [mobileNavOpen, setMobileNavOpen] = useState(false);

	const blockchainLinks = [
		{
			id: 0,
			label: 'Transactions',
			href: ROUTES.transactions,
		},
		{
			id: 1,
			label: 'Blocks',
			href: ROUTES.blocks,
		},
		// {
		// 	id: 2,
		// 	label: 'Nodes',
		// 	href: ROUTES.nodes,
		// },
	];

	const navigation = [
		{
			label: 'Explore',
			href: '#',
		},
		{
			label: 'Blockchain',
			href: '#',
		},
		// {
		// 	label: 'Tokens',
		// 	href: '#',
		// },
		// {
		// 	label: 'NFTs',
		// 	href: '#',
		// },
	];

	const [blockchainOpened, setBlockchainOpened] = useState<boolean>(false);

	function toggleBlockchain() {
		setBlockchainOpened(!blockchainOpened);
	}

	const toggleMobileNav = () => {
		setMobileNavOpen(!mobileNavOpen);

		const html = document.querySelector('html');

		if (mobileNavOpen) {
			html?.classList.remove('overflow-hidden');
		} else {
			html?.classList.add('overflow-hidden');
		}
	};

	// *~~*~~*~~ Theme ~~*~~*~~* //
	const themeSvc = useContext<ThemeService>(ThemeSvcContext);

	const [currentTheme, setCurrentTheme] = useState<Theme>(themeSvc.theme);

	function toggleTheme() {
		themeSvc.toggleTheme();
		setCurrentTheme(themeSvc.theme);
	}

	// *~~*~~*~~ Search bar logic ~~*~~*~~* //

	const { push } = useRouter();

	const formik = useFormik({
		initialValues: {
			search: '',
		},
		validationSchema: yup.object({
			search: yup
				.string()
				.test(
					'is-address-hash-or-number',
					'Search term must be an address, a hash, or a number',
					(value) =>
						isAddress(value || '') || isHash(value || '') || !isNaN(Number(value))
				),
		}),
		onSubmit: (values) => {
			const { search } = values;
			const address = isAddress(search);
			const hash = isHash(search);
			const number = !isNaN(Number(search));

			if (address) {
				// Navigate to the address page for 42-character input
				push(`${ROUTES.address}/${search}`);
			} else if (hash) {
				// Navigate to the transaction page for 66-character input
				push(`${ROUTES.transactions}/${search}`);
			} else if (number) {
				// Navigate to the block page for number input
				push(`${ROUTES.blocks}/${search}`);
			}

			setMobileNavOpen(false);
		},
	});

	const { values, touched, dirty, errors, handleChange, handleBlur, handleSubmit } = formik;

	return (
		<nav className="dark:bg-abrandc-dark-blackish bg-white  shadow ">
			<div className="container-2 mx-auto flex items-center justify-between h-[80px]">
				{/* brand */}
				<Link href={ROUTES.root} className="brand">
					<PwrLogo />
				</Link>

				{/* desktop menu */}
				<div className="hidden md:flex items-center gap-x-6  h-full">
					<div className="h-full grid place-items-center">
						<Link
							href={ROUTES.root}
							className={`navbar-link ${pathname === ROUTES.root ? 'active' : ''}`}
						>
							Explore
						</Link>
					</div>

					{/* dropdown */}
					<div className="navbar-dropdown relative  h-full grid place-items-center cursor-pointer">
						<button className="text-sm font-medium text-agrey-900 dark:text-white flex items-center gap-x-2 ">
							<div>Blockchain</div>
							<i className="fa-lg far fa-angle-down"></i>
						</button>
						<div
							id="dropdown"
							className="nav-dropdown-menu absolute top-full left-0 z-10  bg-white divide-y divide-gray-100 rounded-lg shadow-lg dark:bg-abrandc-dark-grey"
						>
							<ul
								className="py-2 text-sm text-gray-700 dark:text-gray-200"
								aria-labelledby="dropdownDefaultButton"
							>
								{blockchainLinks.map((a, idx) => (
									<li key={idx}>
										<Link
											href={a.href}
											className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-agrey-800 dark:hover:text-white"
										>
											{a.label}
										</Link>
									</li>
								))}
							</ul>
						</div>
					</div>

					{/* <Button className="secondary medium w-[106px]">Connect</Button> */}
					<Button
						className="blue medium w-[117px]"
						tag_type="link"
						href="https://chrome.google.com/webstore/category/extensions"
						target="_blank"
						rel="noopener noreferrer"
					>
						Get Wallet
					</Button>

					<button
						className="theme_btn text-agrey-500 dark:text-white"
						onClick={toggleTheme}
					>
						{currentTheme === 'light' ? (
							<div className="select-none">
								<Image src="/icons/sun.svg" width={16} height={16} alt="" />
							</div>
						) : (
							<div className="dark:text-white">
								<i className="fa-lf fas fa-moon" />
							</div>
						)}
						{/* <i
							className={`fa-lg fas ${
								currentTheme === 'light' ? 'fa-sun' : 'fa-moon'
							}`}
						></i> */}
					</button>
				</div>

				{/* Mobile burger icon */}
				<div className="md:hidden">
					{/* This is a simple burger icon. You can replace this with any SVG or icon library you prefer. */}
					<button
						data-collapse-toggle="navbar-sticky"
						type="button"
						className={`burger ${mobileNavOpen ? 'active' : ''}`}
						aria-controls="navbar-sticky"
						aria-expanded="true"
						onClick={toggleMobileNav}
					>
						<div className="h-line h-line1"></div>
						<div className="h-line h-line2"></div>
						<div className="h-line h-line3"></div>
					</button>
				</div>

				{/* Mobile navigation menu */}
				{mobileNavOpen && (
					<div className="fixed top-0 left-0 w-full h-full dark:bg-abrandc-dark-blackish bg-white md:hidden z-50 p-4 mt-header space-y-6">
						{/* Search */}
						<form onSubmit={handleSubmit} className="w-full lg:w-[800px]">
							<div className="field">
								{/* input contianer */}
								<div
									className={`search-bar-nav-container  ${
										errors.search ? ' !border-ared-500' : ''
									}`}
								>
									{/* Filter */}
									{/* <div className="">
									<button className="flex items-center gap-x-2 dark:bg-agrey-900 bg-abrandc-light-grey rounded-[8px] px-2 py-1 dark:text-white text-xl font-medium">
										<span>All Filters</span>
										<Image
											className="w-auto h-auto"
											src="/icons/arrow-down.svg"
											width={20}
											height={20}
											alt=""
										/>
									</button>
								</div> */}
									<input
										className="search-bar-nav-input"
										placeholder="Search by Address | Txn Hash | Block "
										// placeholder="Search by Address / Txn Hash / Block / Token / Domain Name"
										name="search"
										value={values.search}
										onChange={handleChange}
										onBlur={handleBlur}
									/>

									<button
										className="flex items-center gap-x-2"
										disabled={!dirty || !touched || !formik.isValid}
										type="submit"
									>
										<Image
											src="/media/icons/enter-arrow.svg"
											width={24}
											height={24}
											alt=""
										/>
										<div className="text-agrey-500 font-bold text-sm">
											Enter
										</div>
									</button>
								</div>
							</div>
						</form>

						{/* links */}
						<div className="space-y-2">
							<Link
								href={ROUTES.root}
								className=" font-medium text-agrey-900 dark:text-white flex items-center gap-x-2 "
							>
								<div>Explore</div>
							</Link>

							<div>
								<button
									className=" font-medium text-agrey-900 dark:text-white flex items-center gap-x-2  justify-between w-full"
									onClick={toggleBlockchain}
								>
									<div>Blockchain</div>

									<div>
										<i
											className={`fa-lg far fa-angle-${
												blockchainOpened ? 'up' : 'down'
											}`}
										></i>
									</div>
								</button>

								{blockchainOpened && (
									<ul
										className="py-2 text-sm text-gray-700 dark:text-gray-200"
										aria-labelledby="dropdownDefaultButton"
									>
										{blockchainLinks.map((a, idx) => (
											<li key={idx}>
												<Link href={a.href} className="block px-4 py-2 ">
													{a.label}
												</Link>
											</li>
										))}
									</ul>
								)}
							</div>
						</div>

						{/* buttons */}
						<div className="flex justify-between gap-4">
							{/* <Button className="secondary medium w-2/4">Connect</Button> */}
							<Button
								className="blue medium w-full"
								tag_type="link"
								href="https://chrome.google.com/webstore/category/extensions"
								target="_blank"
								rel="noopener noreferrer"
							>
								Get Wallet
							</Button>
						</div>

						{/* theme */}
						<div className="space-y-2">
							<h1 className="text-agrey-500 dark:text-agrey-600">Interface</h1>
							<div className="w-full bg-agrey-50 dark:bg-agrey-900 flex justify-between h-[52px] px-4 py-2 rounded-lg  items-center ">
								<div className=" text-agrey-500 dark:text-white">
									<i
										className={`fa-lg fas ${
											currentTheme === 'light' ? 'fa-sun' : 'fa-moon'
										}`}
									></i>
								</div>

								<div className="relative inline-block w-10 align-middle select-none transition duration-200 ease-in">
									<label className="relative items-center cursor-pointer">
										<input
											type="checkbox"
											checked={currentTheme === 'dark'}
											className="sr-only peer"
											onChange={toggleTheme}
										/>
										<div className="w-11 h-6 bg-gray-200  dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
									</label>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
}
