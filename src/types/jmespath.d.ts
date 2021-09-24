declare module "jmespath" {
	function search(data: JSONValue, path: string): JSONValue;
}
