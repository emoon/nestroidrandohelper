(function(window) {
    'use strict';

    var beam = 0;

    window.bosses = {
        kraid: false,
        ridley: false
    };

    window.ammo = {
        missile: 0,
    };

    window.items = {
        charge: false,
        ice1: false,
        ice2: false,
        long_beam: false,
        wave: false,
        varia: false,
        morph: false,
        bombs: false,
        screw: false,
        tank0: false,
        tank1: false,
        tank2: false,
        tank3: false,
        tank4: false,
        tank5: false,
        tank6: false,
        tank7: false,
        'hi-jump': false,
    };

    window.display_ammo = function(type) {
        var amount = pad(ammo[type], type === 'missile' ? 3 : 2);
        document.querySelectorAll('#'+type+' [class*="digit-"]')
            .forEach(function(digit, i) { digit.className = 'digit-'+amount[i]; });
    };

    // increments Missile, Super, or Power Bomb count
    window.inc_ammo = function(type, amount) {
        ammo[type] += amount;
        if (ammo[type] < 0) ammo[type] = 0;
        if (type === 'missile' && ammo[type] > 995) ammo[type] = 995;
        if (type !== 'missile' && ammo[type] > 95) ammo[type] = 95;
        display_ammo(type);
    };

    // Toggles items on the tracker (besides ammo)
    window.toggle = function(x) {
        items[x] = !items[x];
        document.getElementById(x).className = items[x] ? 'item active' : 'item';
    };

    window.toggle_tank = function(x) {
        items[x] = !items[x];
        document.getElementById(x).className = items[x] ? 'etank active' : 'etank';
    };

    function pad(x, n) { return ('' + (1000 + x)).substring(4-n, x.length); }

    // Toggles the Golden Statues
    window.toggle_boss = function(x) {
        bosses[x] = !bosses[x];

        if (bosses[x]) {
        	ammo["missile"] += 75;
        } else {
        	ammo["missile"] -= 75;
        }

        display_ammo("missile");

        document.getElementById(x).className = bosses[x] ? 'boss defeated' : 'boss';
    };
}(window));
