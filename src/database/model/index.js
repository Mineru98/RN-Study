export const UserInfoSchema = {
	name: 'UserInfo',
	properties: {
		name: 'string',
		picture: { type: 'data', optional: true }
	}
};

export const TestInfoSchema = {
	name: 'TestInfo',
	properties: {
		test1: 'string',
		test2: 'string',
		test3: 'string'
	}
};
