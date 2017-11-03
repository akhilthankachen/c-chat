var length = 0;
var user = [{ username: "",
            sock: {},
            pair: {}
}];

module.exports = function(){ return {
    addToList: function(username,socket){
        var len = this.length++;
        this.user[len].username = username;
        this.user[len].sock = socket;
        console.log('user added ' + username);
    }
}
}