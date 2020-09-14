export async function getArticles(category = 'general') {

    const articles_url = 'https://newsapi.org/v2/top-headlines';
    const country_code = 'in';
    //const category = 'general';
    const _api_key = '024e65a7f55042f4ba5d6f5670467467';

    try {
        let articles = await fetch(`${articles_url}?country=${country_code}&category=${category}`, {
            headers: {
                'X-API-KEY': _api_key
            }
        });

        let result = await articles.json();
        articles = null;

        return result.articles;
    } catch (error) {
        throw error;
    }
}