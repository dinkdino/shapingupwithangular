
(function() {

    var app = angular.module('store', []);

    app.controller('StoreController', function() {
        this.products = gems;
    });

    app.controller('PanelController', function() {
        this.tab = 1;

        this.selectTab = function(tab) {
            this.tab = tab;
        };

        this.isSelected = function(tab) {
            return tab == this.tab;
        };
    });

    var gems = [
        {
        name: "Ruby",
        price: 2,
        description: "this is a gem",
        canPurchase: true,
        soldOut: false
    },
    {
        name: "Opal",
        price: 3.95,
        description: "thisasdd is a opal",
        canPurchase: true,
        soldOut: false
    }];


})();


