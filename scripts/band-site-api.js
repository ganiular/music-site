class BandSiteApi {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com";
    }

    async postComment(comment) {
        const url = this.baseUrl + '/comments?api_key=' + this.apiKey;
        const header = { 'Content-Type': 'application/json' };
        const res = await axios.post(url, comment, { header });
        return res.data;
    }

    async getComments() {
        const url = this.baseUrl + '/comments?api_key=' + this.apiKey;
        const res = await axios.get(url);
        return res.data;
    }

    async getShows() {
        const url = this.baseUrl + '/showdates?api_key=' + this.apiKey;
        const res = await axios.get(url);
        return res.data;
    }
}

var siteApi = new BandSiteApi("8e872c0e-e398-49b6-9f4b-a3a332c4211c");