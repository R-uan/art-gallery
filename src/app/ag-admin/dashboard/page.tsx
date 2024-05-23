"use client";
import { ArtworkStore } from "@/app/_contexts/ArtworkStore";
import { Provider } from "react-redux";
import styled from "styled-components";
import ArtworkPanel from "./_components/Artwork/ArtworkPanel/ArtworkPanel";
import DashboardHeader from "./_components/DashboardHeader/DashboardHeader";
import UpdateArtworkProvider from "@/app/_contexts/UpdateArtworkContext";

const MainStyled = styled.main`
	width: 100%;
	height: 100vh;
	display: flex;
	position: relative;
	flex-direction: column;
	background-color: #050a0e;
`;
export default function Dashboard() {
	return (
		<Provider store={ArtworkStore}>
			<UpdateArtworkProvider>
				<MainStyled>
					<DashboardHeader />
					<ArtworkPanel />
				</MainStyled>
			</UpdateArtworkProvider>
		</Provider>
	);
}
