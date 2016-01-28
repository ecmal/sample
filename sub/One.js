System.register(['../Main'], function(exports_1) {
    var Main_1;
    var One;
    return {
        setters:[
            function (Main_1_1) {
                Main_1 = Main_1_1;
            }],
        execute: function() {
            One = (function () {
                function One() {
                    Main_1.Main.from('One');
                }
                return One;
            })();
            exports_1("One", One);
        }
    }
});
//# sourceMappingURL=One.js.map