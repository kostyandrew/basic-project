const isProd = process.env.NODE_ENV === 'production';

module.exports = {
	'env': {
		'browser': true,
		'es2021': true
	},
	'parserOptions': {
		'sourceType': 'module'
	},
	'rules': {
		'quotes': [
			'error',
			'single'
		],
		'indent': ['error', 'tab'],
		'no-console': [
			isProd
				? 'error'
				: 'warn',
			{
				'allow': [
					'warn',
					'error',
					'info'
				]
			}
		]
	}
};
