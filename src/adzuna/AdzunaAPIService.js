export default class AdzunaAPIService {
    static myInstance = null;
    url = "http://api.adzuna.com/v1/api/jobs/gb/search/";
    app_id = 28179437;
    app_key = "f9dea5dad6f8a1a0f33d402572c8d3b1";

    static getInstance() {
        if (AdzunaAPIService.myInstance == null) {
            AdzunaAPIService.myInstance =
                new AdzunaAPIService();
        }
        return this.myInstance;
    }


    searchJobs = (keyword, page = 1) => {
        return fetch(`${this.url
            + page}?app_id=${this.app_id}&app_key=${this.app_key}&what=${keyword}&content-type=application/json`)
            .then(response => response.json())
    }


}
