import UrlQueryBuilder from "../src/scripts/UrlQueryBuilder";

describe("url query builder", function () {
	it("should return query params ready for request", function () {
		const queryBuilderTest = new UrlQueryBuilder();
		queryBuilderTest.addFilter("title", "test");
		queryBuilderTest.addFilter("period", "test").addFilter("nesting", "stream");
		const test_target = queryBuilderTest.build();
		expect(test_target).toBe("title=test&period=test&nesting=stream");
	});

	it("should return null", function () {
		const queryBuilderTest = new UrlQueryBuilder();
		const test_target = queryBuilderTest.build();
		expect(test_target).toBeNull();
	});
});
