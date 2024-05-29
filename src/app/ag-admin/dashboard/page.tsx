"use client";
import Link from "next/link";
import { useState } from "react";
import { Provider } from "react-redux";
import styled from "styled-components";
import ArtistPanel from "./_components/Artist/ArtistPanel";
import { GalleryStore } from "@/app/_contexts/GalleryStore";
import ArtworkPanel from "./_components/Artwork/ArtworkPanel";

const MainStyled = styled.main`
	width: 100%;
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	background-color: #050a0e;
`;

const HeaderStyled = styled.header`
	width: 100%;
	height: 100px;
	display: flex;
	padding: 5px 50px;
	align-items: center;
	background-color: #050a0e;
	justify-content: space-between;

	& > div:first-child {
		width: 100px;
		height: 100%;
		outline: 2px solid red;
	}

	& > nav {
		display: flex;
		align-items: center;
		width: fit-content;
		height: fit-content;

		& > ul {
			gap: 25px;
			width: 100%;
			display: flex;

			li {
				color: #decfd3;
				line-height: 1;
				font-size: 1.75rem;
				transition: transform ease-in-out 0.2s;
			}

			li:hover {
				transform: scale(1.2);
				transition: transform ease-in-out 0.2s;
			}
		}
	}
`;

export default function Dashboard() {
	const [choice, setChoice] = useState<{ name: string; component: React.ReactNode }>({ name: "Artwork", component: <ArtworkPanel /> });
	return (
		<Provider store={GalleryStore}>
			<HeaderStyled>
				<div>
					<Link href={"/"}>
						<span>Home</span>
					</Link>
				</div>
				<nav>
					<ul>
						<li>
							<button
								onClick={() => {
									setChoice({
										name: "Artist",
										component: <ArtistPanel />,
									});
								}}>
								Artist
							</button>
						</li>
						<li>
							<button
								onClick={() => {
									setChoice({
										name: "Artist",
										component: <ArtworkPanel />,
									});
								}}>
								Artwork
							</button>
						</li>
						<li>
							<button>Museum</button>
						</li>
					</ul>
				</nav>
				<nav>
					<ul>
						<Link href="/">
							<li>Home</li>
						</Link>
						<Link href="">
							<li>About</li>
						</Link>
					</ul>
				</nav>
			</HeaderStyled>
			<MainStyled>{choice.component}</MainStyled>
		</Provider>
	);
}
