

export default class APIService {
    static updateArticle(article_id, body, token) {

        return fetch(`/api/articles/${article_id}/`, {
            'method': 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}` 
              },
              body: JSON.stringify(body)

        }).then(resp => resp.json())

    }

    static insertArticle(body, token) {
        return fetch ('/api/articles/', {
            'method' : "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}` 
              },
              body: JSON.stringify(body)

        }).then(resp => resp.json())
    }

    static deleteArticle(article_id, token){

        return fetch(`/api/articles/${article_id}/`, {
            'method': 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}` 
              },
              

        })
    }

    static LoginUser(body) {
        return fetch ('/auth/', {
            'method' : "POST",
            headers: {
                'Content-Type': 'application/json',
                
              },
              body: JSON.stringify(body)

        }).then(resp => resp.json())
    }

    static RegisterUser(body) {
        return fetch ('/api/users/', {
            'method' : "POST",
            headers: {
                'Content-Type': 'application/json',
                
              },
              body: JSON.stringify(body)

        }).then(resp => resp.json())
    }
}