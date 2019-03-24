let qiitaUrl = location.pathname.split('/');
let addTagLinkHtml = '';

if (qiitaUrl[1] !== '' && typeof qiitaUrl[2] === "undefined") {
    window.onload = function() {
        let userTagElem = document.getElementsByClassName('c3-legend-item');
        addTagLinkHtml = '<div id="qiita-tag-search-link">';

        if (userTagElem.length > 0 && qiitaUrl[1] !== '') {
            addTagLinkHtml += '<ul style="text-align:center;"><li style="display: inline-block; width: 5%;">タグ：</li>';
            for (var i = 0; i < userTagElem.length; i++) {
                if (typeof userTagElem[i] !== "undefined" && userTagElem[i].textContent != '' && userTagElem[i].textContent != 'Others') {
                    addTagLinkHtml += '<li style="display: inline-block; width: 10%;"><a href="https://qiita.com/search?utf8=%E2%9C%93&sort=&q=user%3A' + qiitaUrl[1] + '+tag%3A' + userTagElem[i].textContent + '" style="color:#337ab7;">' + userTagElem[i].textContent + '</a></li>';
                }
            }
            addTagLinkHtml += '</ul></div>';

            document.getElementById('main').insertAdjacentHTML('afterbegin', addTagLinkHtml);
        }
    };
}