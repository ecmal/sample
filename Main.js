System.register(['./sub/One', './sub/Two'], function(exports_1) {
    var One_1, Two_1;
    var Main;
    return {
        setters:[
            function (One_1_1) {
                One_1 = One_1_1;
            },
            function (Two_1_1) {
                Two_1 = Two_1_1;
            }],
        execute: function() {
            Main = (function () {
                function Main(config) {
                    this.one = new One_1.One();
                    this.two = new Two_1.Two();
                    console.info("Main");
                }
                Main.from = function (target) {
                    console.info('Main.from', 'Jan', target);
                };
                return Main;
            })();
            exports_1("Main", Main);
            exports_1("default",new Main("config"));
        }
    }
});
//# sourceMappingURL=Main.js.map