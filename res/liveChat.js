
(function() {
    const liveChatSocket = new WebSocket("wss://lp1.eu/livechat");
    const storageKey = 'lp1_eu_chat_storage'
    const chatIdKey = 'lp1_eu_chat_id'
    const chatAuthorKey = 'lp1_eu_chat_author'
    var chatId = localStorage[chatIdKey]
    var _callback
    var _notifications = false

    liveChatSocket.onopen = function() {
    }

    liveChatSocket.onmessage = function(event) {
        const message = JSON.parse(event.data)
        _addToHistory(message)
        _callback(message)
        _buildNotification()
    }

    function _buildNotification() {
        if (_notifications) {
            var notification = new Notification('Jeremie sent you a message', {
                icon: 'https://avatars4.githubusercontent.com/u/4246023'
            })
            notification.onclick = function() {
                window.open('https://lp1.eu')
            }
        }
    }

    function requestNotifications() {
        if (window.Notification) {
            if (Notification.permission !== 'granted') {
                Notification.requestPermission()
                    .then(function(status) {
                        if (status === 'granted') {
                            _notifications = true
                        }
                    })
            }
            else {
                _notifications = true
            }
        }
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
        chatId = Math.random() * Math.pow(10, 18)
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
        setOnNewMessage: setOnNewMessage,
        requestNotifications: requestNotifications
    }

    window.liveChat = liveChat
})();
