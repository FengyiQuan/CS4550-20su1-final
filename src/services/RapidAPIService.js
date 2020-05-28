export default class RapidAPIService {
    static myInstance = null;
    static url = "https://jobs.github.com/";

    static getInstance() {
        if (RapidAPIService.myInstance == null) {
            RapidAPIService.myInstance =
                new RapidAPIService();
        }
        return this.myInstance;
    }

    static searchMovie = (keyword) =>
        fetch(`this.url/position?description=${keyword}`).then(response => response.json)

    // createWidget = widget => {
    //     widgets.push(widget)
    // }
    // findAllWidgets = () =>
    //     widgets
    //
    // findWidgetById = widgetId => {
    //     return widgets.find(widget => widget.id == widgetId)
    // }
    // deleteWidget = widgetId => {
    //     widgets = widgets.filter(widget => widget.id !== widgetId)
    // }
    // udpateWidget = (widgetId, newwidget) => {
    //     widgets = widgets.map(widget => {
    //         if (widget.id != widgetId) {
    //             return widget;
    //         } else {
    //             return newwidget;
    //         }
    //     })
    // }
}
