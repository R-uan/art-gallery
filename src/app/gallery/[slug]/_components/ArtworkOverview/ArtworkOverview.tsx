import { setFocusArtwork, setError, setFetching } from "@/app/_contexts/_slices/ArtworkFocusSlice";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { useDispatch } from "react-redux";
import FailedToFetch from "../ErrorArtwork";
import LoadingArtwork from "../LoadingArtwork";
import s from "./ArtworkOverview.module.scss";
import ArtworkRequest from "@/scripts/Requests/ArtworkRequest";
import { VscLoading } from "react-icons/vsc";

export default function ArtworkOverview({ slug }: { slug: string }) {
	const setState = useDispatch();
	const query_client = useQueryClient();
	const { data, isFetching, isError, error } = useQuery({
		retry: false,
		refetchOnWindowFocus: false,
		retryDelay: 10000,
		queryKey: ["artwork"],
		queryFn: async () => await ArtworkRequest.GetArtworkBySlug(slug),
	});

	useEffect(() => {
		if (isFetching) setState(setFetching(isFetching));
		if (isError) setState(setError(isError));
		if (data) setState(setFocusArtwork(data));
	}, [isFetching, isError, data]);

	return (
		<div className={s.artwork}>
			<div>
				<div className={s.image}>
					<img src={data?.imageURL} alt="" />
				</div>
				<div className={s.right_panel}>
					{isFetching ? (
						<div className="w-full h-full flex items-center justify-center">
							<span className="h-fit w-fit">
								<VscLoading className="animate-spin" />
							</span>
						</div>
					) : error ? (
						<FailedToFetch message={error.message || "Failed to fetch artwork."} />
					) : (
						<div className={s.overview}>
							<div>
								<div>
									<div>
										<span className={s.author}>{data?.artist.name}</span>
									</div>
									<div className="flex gap-[15px]">
										<span className={s.period}>{data?.period}</span>
										<span>-</span>
										<span className={s.year}>{data?.year}</span>
									</div>
								</div>
								<span className={s.title}>{data?.title}</span>
							</div>
							<div className={s.history}>
								{data?.history.split("@").map((part, index) => {
									return <p key={index + part[0]}>{part}</p>;
								})}
							</div>
							<div></div>
						</div>
					)}
					<div className={s.share}>
						<ul className={s.icons}>
							<a href="">
								<li>
									<BsTwitter className={s.icon} />
								</li>
							</a>
							<a href="">
								<li>
									<FaFacebook className={s.icon} />
								</li>
							</a>
							<a href="">
								<li>
									<BsInstagram className={s.icon} />
								</li>
							</a>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
