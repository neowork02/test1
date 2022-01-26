export default {
	User: [
		{
			user_id: 1,
			name: '이름01',
			created_at: '2019-01-01 13:11:42'
		},
		{
			user_id: 2,
			name: '이름02',
			created_at: '2019-01-02 13:11:42'
		},
		{
			user_id: 3,
			name: '이름03',
			created_at: '2019-01-03 13:11:42'
		}
	],
	Content: [
		{
			content_id: 1,
			user_id: 1,
			title: '타이틀01',
			content: '내용01',
			created_at: '2019-01-01 13:11:42',
			updated_at: null
		},
		{
			content_id: 2,
			user_id: 3,
			title: '타이틀02',
			content: '내용02',
			created_at: '2019-01-02 13:11:42',
			updated_at: null
		},
		{
			content_id: 3,
			user_id: 2,
			title: '타이틀03',
			content: '내용03',
			created_at: '2019-03-03 13:11:42',
			updated_at: null
		}
	]
}