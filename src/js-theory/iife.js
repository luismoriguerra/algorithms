
color = 'red'

var myCar = {
    color: 'blue',
    logColor: function () {
        var self = this;
        // let self = this;
        // const self = this;
        console.log(this.color);
        console.log(self.color);
        (function () {
            console.log(this.color);
            console.log(self.color); 
        })()
    }
}


myCar.logColor()



