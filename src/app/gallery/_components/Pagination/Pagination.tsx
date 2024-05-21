import { useRouter } from "next/navigation";
import { useArtworkQuery } from "../../_contexts/ArtworkFilterContext";
import s from "./Pagination.module.scss";
export default function Pagination() {
	const { data, setDataState } = useArtworkQuery();
	const router = useRouter();
	if (data) {
		const pages: number[] = Array.from({ length: data.totalPages }, (_, i) => i + 1);
		return (
			<div className={s.pagination}>
				<div className={s.back}>
					<div onClick={() => router.push("/gallery?page=5")}>
						<span>{"<"}</span>
					</div>
					<div>
						<span>{"<<"}</span>
					</div>
				</div>
				<div className={s.pages}>
					{pages.map((page) => {
						if (page == data.pageIndex) {
							return (
								<div key={page} className={s.current}>
									<span>{page}</span>
								</div>
							);
						} else {
							return (
								<div key={page}>
									<span>{page}</span>
								</div>
							);
						}
					})}
				</div>
				<div className={s.forward}>
					<div>
						<span>{">"}</span>
					</div>
					<div>
						<span>{">>"}</span>
					</div>
				</div>
			</div>
		);
	}
	return null;
}
