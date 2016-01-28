System.register(['../Main'], function(exports_1) {
    var Main_1;
    var Two;
    return {
        setters:[
            function (Main_1_1) {
                Main_1 = Main_1_1;
            }],
        execute: function() {
            Two = (function () {
                function Two() {
                    Main_1.Main.from('Two');
                }
                return Two;
            })();
            exports_1("Two", Two);
        }
    }
});
//# sourceMappingURL=Two.js.map