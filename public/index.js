/** @typedef {{load: (Promise<unknown>); flags: (unknown)}} ElmPagesInit */

/** @type ElmPagesInit */
export default {
  load: async function (elmLoaded) {
    const app = await elmLoaded;
    var twt = document.getElementById('twitter-injection-site');
    if (twt) {
        var sc = document.createElement('script');
        sc.src = 'https://platform.twitter.com/widgets.js';
        sc.setAttribute('async', true);
        sc.setAttribute('charset', 'utf-8');
        twt.appendChild(sc);
    }

    sc = document.createElement('script');
    sc.setAttribute('src', "https://www.googletagmanager.com/gtag/js?id=G-BT86QN3RMP')
    sc.setAttribute('async', true);
    document.getElementById('google-injection-site').appendChild(sc);

    sc = document.createElement('script');
    sc.setAttribute('src', "https://badge.dimensions.ai/badge.js");
    sc.setAttribute('async', true);
    document.getElementById('google-injection-site').appendChild(sc);

    sc = document.createElement('script');

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-BT86QN3RMP');

    gtag('send', 'pageview');
    app.ports.updatePath.subscribe(function(path) {
        gtag('set', 'page', '/'+path);
        gtag('send', 'pageview');
    });
  },
  flags: function () {
    return "You can decode this in Shared.elm using Json.Decode.string!";
  },
};
