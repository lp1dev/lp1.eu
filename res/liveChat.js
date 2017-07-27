(function() {
    'use strict'
    const liveChatSocket = new WebSocket("ws://2.lp1.eu:8082");
    const storageKey = 'lp1_eu_chat_storage'
    const chatIdKey = 'lp1_eu_chat_id'
    const chatAuthorKey = 'lp1_eu_chat_author'
    var chatId = localStorage[chatIdKey]
    var _callback

    liveChatSocket.onopen = () => {
    }

    liveChatSocket.onmessage = (event) => {
        const message = JSON.parse(event.data)
        _callback(message)
    }

    function getHistory() {
        if (localStorage[storageKey]) {
            return JSON.parse(localStorage[storageKey])
        }
        return []
    }

    function getAuthor() {
        return localStorage[chatAuthorKey] || ""
    }

    function _addToHistory(message) {
        var history = []
        if (localStorage[storageKey]) {
            history = JSON.parse(localStorage[storageKey])
        }
        history.push(message)
        localStorage[storageKey] = JSON.stringify(history)
    }

    function _generateChatId(author) {
        chatId = Math.random() * 10**18
        return chatId
    }
    
    function send(message, author) {
        if (!localStorage[chatAuthorKey]) {
            localStorage[chatAuthorKey] = author
        }
        if (!localStorage[chatIdKey]) {
            localStorage[chatIdKey] = _generateChatId(author)
        }
        message = {
            message: message,
            origin: {author: author, name: 'livechat', topic: chatId}
        }
        _addToHistory(message)
        liveChatSocket.send(JSON.stringify(message))
    }

    function setOnNewMessage(callback) {
        _callback = callback
    }

    const liveChat = {
        send: send,
        getHistory: getHistory,
        getAuthor: getAuthor,
        setOnNewMessage: setOnNewMessage
    }

    window.liveChat = liveChat
})();
