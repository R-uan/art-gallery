export default interface IPaginatedResponse<T> {
	items: T[];
	pageIndex: number;
	totalPages: number;
	hasNextPage: number;
	hasPreviousPage: number;
}
