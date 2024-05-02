"use client";
import { Suspense } from "react";
import { HeaderStyled } from "./HeaderStyled";
import Link from "next/link";

export default function Header({ transparent }: { transparent: boolean }) {
	return (
		<Suspense fallback={<div className="w-full absolute"></div>}>
			<HeaderStyled $transparent={transparent}>
				<div></div>
				<nav>
					<ul>
						<Link href="/">
							<li>Home</li>
						</Link>
						<Link href="">
							<li>Artists</li>
						</Link>
						<Link href="/gallery">
							<li>Gallery</li>
						</Link>
						<Link href="">
							<li>Museums</li>
						</Link>
						<Link href="">
							<li>About</li>
						</Link>
					</ul>
				</nav>
			</HeaderStyled>
		</Suspense>
	);
}
