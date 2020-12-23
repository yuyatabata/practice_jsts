import fetch from 'node-fetch';

const getGitUsername = () => {
    const url = 'https://api.github.com/users/deatiger'

    fetch(url).then(res => res.json())
        .then(json => {
            console.log('これは非同期処理成功時のメッセージです')
            return json.login
        }).catch(error => {
            console.error('これは非同期処理失敗時のメッセージです。', error)
            return null
        })
};

const message = 'GitのユーザーIDは'
const result = getGitUsername()
console.log(message+result)