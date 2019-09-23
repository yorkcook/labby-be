exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("people_groups")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("people_groups").insert([
        { id: 1, people_groups: "Wavexv  d albatross" },
        { id: 2, people_groups: "Kor vvfdbi bustard" },
        { id: 3, people_groups: "Quailfdfgrg, gambel's" },
        { id: 4, people_groups: "Black anwewed white colobus" },
        { id: 5, people_groups: "Africafgfdn snake (unidentified)" },
        { id: 6, people_groups: "Urikyukal" },
        { id: 7, people_groups: "Genet, smbgbdfgall-spotted" },
        { id: 8, people_groups: "Snake-neckedbfgbfsb turtle" },
        { id: 9, people_groups: "Squirrel, bdfdsbeastern fox" },
        { id: 10, people_groups: "Phalarobfsbfpe, northern" },
        { id: 11, people_groups: "Possum, commobbfn brushtail" },
        { id: 12, people_groups: "Racer snabfdbdke" },
        { id: 13, people_groups: "Frogmouth, tawny" },
        { id: 14, people_groups: "Black-capped chickadee" },
        { id: 15, people_groups: "Stork,bfstj european" },
        { id: 16, people_groups: "Fox, crab-ejtjating" },
        { id: 17, people_groups: "Fox, north amerjytjican red" },
        { id: 18, people_groups: "Capuchin, whiwefaefte-fronted" },
        { id: 19, people_groups: "Grenagfdshjydier, common" },
        { id: 20, people_groups: "Rainbjtrjnfgow lory" },
        { id: 21, people_groups: "Gray langngnyreur" },
        { id: 22, people_groups: "Elanduyrunb, common" },
        { id: 23, people_groups: "Waterbubdbfbck, common" },
        { id: 24, people_groups: "Eastern dwarf trbssrdbmongoose" },
        { id: 25, people_groups: "Avocet, ndbetybpied" },
        { id: 26, people_groups: "Fowl, helmeted regtgrwtguinea" },
        { id: 27, people_groups: "Gray lanthrehyhngur" },
        { id: 28, people_groups: "Bontebyjhtbtok" },
        { id: 29, people_groups: "Gray rbterbehea" },
        { id: 30, people_groups: "Cormotehbrant, pied" },
        { id: 31, people_groups: "Ibis, htdbfglossy" },
        { id: 32, people_groups: "Oceloewrfewrt" },
        { id: 33, people_groups: "Curve-erfbgyujbilled thrasher" },
        { id: 34, people_groups: "Southern tgredvfhlapwing" },
        { id: 35, people_groups: "Burmese brown mhdgbdrteountain tortoise" },
        { id: 36, people_groups: "Goose, knobgfdbgmb-nosed" },
        { id: 37, people_groups: "Bird, black-thnhgfngfhneroated butcher" },
        { id: 38, people_groups: "American nggfnfgnmarten" },
        { id: 39, people_groups: "Canada gogffdgbtyose" },
        { id: 40, people_groups: "Cormoranbgfdbt, pied" },
        { id: 41, people_groups: "Maskefbdbdd booby" },
        { id: 42, people_groups: "Crane, wabgfdbdfgbttled" },
        { id: 43, people_groups: "Dove, mourninbgdfhterg collared" },
        { id: 44, people_groups: "Snake, buttetherhtnrmilk" },
        { id: 45, people_groups: "Small-clawengetrgred otter" },
        { id: 46, people_groups: "Racer, amerregyetyican" },
        { id: 47, people_groups: "Rose-ringed sfdzfparakeet" },
        { id: 48, people_groups: "Cougabjytjr" },
        { id: 49, people_groups: "Puna jhrjryibis" },
        { id: 50, people_groups: "Pickle Rick" }
      ]);
    });
};
