angular.module('frenemy').controller('assessment', function ($scope) {
    var deck = null;
    Traitify.setPublicKey("s7agspmnf4147ld53fmmekan42");
    Traitify.setHost("https://api-sandbox.traitify.com");
    Traitify.setVersion("v1");
    Traitify.get("/decks/f5bc482e-8a2a-45c1-a7d4-8574625396b9", function (deck_info) {
        deck = deck_info;
    });
    var HeroSides = {
        "Storm": "Marvel",
        "Spiderman": "Marvel",
        "Flash": "DC",
        "Green Lantern": "DC",
        "Iron Man": "Marvel",
        "Cyborg": "DC",
        "Wolverine": "Marvel",
        "Black Widow": "Marvel",
        "Green Arrow": "DC",
        "Dr. Manhattan": "DC",
        "Professor X": "Marvel",
        "Scarlet Witch": "Marvel",
        "Hawk Girl ": "DC",
        "Hulk": "Marvel",
        "Thor": "Marvel",
        "Wonder Woman": "DC",
        "Captain America": "Marvel",
        "Superman": "DC",
        "Batman": "DC",
        "Black Panther": "Marvel",
        "Rorschach": "DC"
    };

    function doAssessment(assessId) {
        Traitify.ui.slideDeck(assessId, ".tf-assessment", function (data) {
            Traitify.ui.resultsProp(assessId, ".tf-assessment", {showTraits: true});
        });
    }

    function start() {
        var xhr = new XmlHttpRequest();
        xhr.onreadystatechange = function (e) {
            if (e.readyState == 4) {
                var id = JSON.parse(e.responseText).id;
                doAssessment(id);
            }
        }
        xhr.open("GET", "http://frenemy.laet.us/assessment/create");
        xhr.send();
    }

    start();
});
