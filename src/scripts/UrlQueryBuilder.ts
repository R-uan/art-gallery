export default class UrlQueryBuilder {
	private filter: string[] = [];

	addFilter(field: string, value: string): this {
		const param = `${field}=${value}`;
		this.filter.push(param);
		return this;
	}

	build(): string | null {
		if (this.filter.length == 0) return null;
		const query = this.filter.join("&");
		return query;
	}
}
