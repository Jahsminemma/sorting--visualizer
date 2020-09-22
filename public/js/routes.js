function checkRoute(query)
{
    const routes = {
        "LINEAR SEARCH": "https://anandman03.github.io/sorting-and-searching-visualizer/views/linear-search.html",
        "BINARY SEARCH": "https://anandman03.github.io/sorting-and-searching-visualizer/views/binary-search.html",
        "BUBBLE SORT": "https://anandman03.github.io/sorting-and-searching-visualizer/views/bubble-sort.html",
        "INSERTION SORT": "https://anandman03.github.io/sorting-and-searching-visualizer/views/insertion-sort.html",
        "SELECTION SORT": "https://anandman03.github.io/sorting-and-searching-visualizer/views/selection-sort.html",
        "MERGE SORT": "https://anandman03.github.io/sorting-and-searching-visualizer/views/merge-sort.html",
        "QUICK SORT": "https://anandman03.github.io/sorting-and-searching-visualizer/views/quick-sort.html",
        "CREATOR": "https://www.linkedin.com/in/mansimar-anand/",
    };
    
    let flag = false;
    for(const key of Object.keys(routes)) {
        if(query.reduced == key) flag = true;
    }

    if(flag) {
        window.location = routes[String(query.reduced)];
        return true;
    }
    return false;
}