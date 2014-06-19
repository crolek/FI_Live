angular.module('frenemy').controller('assessment', function ($scope, $http) {
    var deck = null;
    Traitify.setPublicKey("s7agspmnf4147ld53fmmekan42");
    Traitify.setHost("https://api-sandbox.traitify.com");
    Traitify.setVersion("v1");

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
            //Traitify.ui.resultsProp(assessId, ".tf-assessment", {showTraits: true});
            Traitify.getPersonalityTypes(assessId, function(data){
              var HeroName = data.personality_types[0].personality_type.name
              var HeroSide = HeroSides[HeroName];
              window.location = "http://frenemy.laet.us/results?name=" +
                encodeURIComponent(HeroName) + "&side=" +
                encodeURIComponent(HeroSide);
            });
        });
    }

    function start() {
        $http.get('/assessment/create')
            .success(function(data) {
                doAssessment(data.id);
            });
    }

    start();
});
