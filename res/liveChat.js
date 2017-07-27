(function() {
    'use strict'
    const liveChatSocket = new WebSocket("ws://2.lp1.eu:8082");
    const storageKey = 'lp1_eu_chat_storage'
    var chat_id = localStorage['lp1_eu_chat_id']
    window.liveChat = {}

    if (undefined === chat_id) {
        localStorage['lp1_eu_chat_id'] = Math.random()
        chat_id = localStorage['lp1_eu_chat_id']
    }
   
    liveChatSocket.onopen = () => {
        var message = {type: "connection", chat_id: chat_id}
        liveChatSocket.send(JSON.stringify(message))
    }

    liveChatSocket.onmessage = (event) => {
        console.log(event)
    }

    function getHistory() {
        if (localStorage[storageKey]) {
            return JSON.parse(localStorage[storageKey])
        }
        return []
    }

    function addToHistory(message) {
        var history = []
        if (localStorage[storageKey]) {
            history = JSON.parse(localStorage[storageKey])
        }
        history.push(message)
        localStorage[storageKey] = JSON.stringify(history)
    }

    function send(message) {
        message['origin'] = {author: message.author}
        liveChatSocket.send(JSON.stringify(message))
    }

    liveChat = {
        send: send,
        getHistory: getHistory,
        addToHistory: addToHistory
    }

    window.liveChat = liveChat
    console.log('livechat initialised')
})();
