const fillers = {
    bestiaryintro: ["Excerpt from $funnylastname's $bestiarytitle:", "Section recovered from an ancient text entitled $bestiarytitle."],
    beasttitle: ["The $beastname", "$adjective-$bodyparted $beastname"],
    beastappearance: ["The $creature appears $adjective and has $adjective $bodypartplural.", "Researchers have noted the $creature's $adjective $bodypartsingle and $adjective $bodypartsingle.", "To identify the $creature, take note of its $adjective $bodypartsingle and $adjective $bodypartplural."],
    beastbehavior: ["They are known to enjoy $verbingphrase.", "The $creature can be found in $habitat.", "It has been encountered $verbingphrase."],
    
    funnylastname: ["$funnylastnamepart1", "$funnylastnamepart1$funnylastnamepart", "$funnylastnamepart1$funnylastnamepart$funnylastnamepart"],
    funnylastnamepart1: ["Able", "Aster", "Bot", "Bisk", "Clue", "Chum", "Dust", "Dump", "Eber", "Erg", "Fart", "Fibble", "Gruff", "Grom", "Higgle", "Hard", "Ick", "Imp", "Juice", "Jump", "Kiff", "Kindly", "Lick", "Lump", "Man", "Mean", "Nice", "Nort", "Oogle", "Oops", "Pond", "Pum", "Quibble", "Quax", "Rum", "Riddle", "Seed", "Song", "Tub", "Trick", "Umber", "Ugg", "Vig", "Very", "Wax", "Wig", "Xylo", "X-", "Young", "Yellow", "Zoo", "Zit"],
    funnylastnamepart: ["apple", "ander", "and", "bat", "bert", "bottle", "crop", "coddle", "cap", "door", "drip", "desk", "ever", "end", "egg", "fast", "fort", "frib", "ghost", "green", "gift", "hide", "hunt", "hand", "ing", "ist", "illy", "jest", "jump", "jop", "kind", "krabbs", "kept", "lift", "letter", "land", "musk", "mid", "madd", "nord", "neat", "nestle", "orft", "ont", "orb", "press", "pund", "piss", "quact", "quilt", "quid", "ract", "roar", "rund", "sack", "scum", "script", "table", "tact", "trip", "ump", "ubius", "um", "vest", "vid", "vert", "wist", "wick", "wonder", "xed", "xorius", "xes", "yee", "yum", "yack", "zip", "zors", "zed"],
	
    bestiarytitle: ["$Booktype of $Creatureplural", "$Adjective $Creatureplural", "$Booktype of $Adjective $Creatureplural"],
    Booktype: ["Tome", "List", "Bestiary", "Compendium", "Pamphlet", "Tablet", "Collection", "Book"],
    Adjective: ["Fantastic", "Wondrous", "Inspiring", "Barely-Imagined", "Fascinating", "Fantastic", "Exotic", "Unseen", "Everyday", "Common", "Uncommon", "Wild", "Domewstic", "Inhuman", "Funny", "Weird"],
	
    adjective: ["odd", "tall", "red", "orange", "yellow", "blue", "purple", "brown", "black", "white", "skittish", "uncontrolled", "cold", "slow", "fast", "furry", "quilted", "tireless", "skinny", "rounded", "sharp", "rough", "smooth", "hard", "soft", "slimy", "oily", "dry", "salted", "long", "wide", "bubbly"],
    verbingphrase: ["$intransitiveverbing", "$transitiveverbing $pluralnoun"],
    intransitiveverbing: ["sleeping peacefully", "wrestling", "stampeding", "drinking", "partying", "crying", "whistling", "buffaloing", "panicking"],
    transitiveverbing: ["eating", "hiding from", "running from", "decorating", "wearing", "singing about", "climbing atop", "adorning themselves with", "talking about", "stomping on", "serenading", "peeing on"],
    pluralnoun: ["logs", "pumpkins", "researchers", "tiny huts", "bees", "nothing in particular", "cream puffs", "apples", "trees", "humans", "other members of the species", "rocks", "honey", "their greatest fears", "boy bands", "the concept of private ownership", "chihuahuas", "watermelons"],
    
    bodypartsingle: ["eye", "nose", "torso", "stomach", "heart", "face", "tongue", "head", "belly button", "mouth", "skin", "fur", "hair", "nervous system", "brain", "bottom", "thorax"],
    bodypartplural: ["legs", "arms", "paws", "hooves", "scales", "feet", "eyes", "teeth", "claws", "bones", "shoulders", "hands", "eyelashes", "nails", "pores", "kidneys", "patches"],
    bodyparted: ["eyed", "nosed", "torsoed", "stomached", "hearted", "faced", "tongued", "headed", "mouthed", "skinned", "furred", "haired", "brained", "bottomed", "thoraxed", "legged", "armed", "pawed", "hooved", "scaled", "footed", "toothed", "clawed", "boned", "shouldered", "handed", "eyelashed", "nailed", "pored", "kidneyed", "patched"],
    
    beastname: ["$beast1$beast2$beast3", "$beast1$beast3"],
    beast1: ["Ach", "Ansy", "Bark", "Bitter", "Cradle", "Cesio", "Dong", "Destro", "Egg", "End", "Fip", "Fyr", "Grob", "Ghast", "Higg", "Hydro", "Indle", "Ichthy", "Jam", "Jett", "Jump", "Juli", "Kwip", "Krackle", "Long", "Ledo", "Map", "Metro", "Noodle", "Nigh", "Odd", "Ortho", "Pom", "Ped", "Quib", "Quark", "Rack", "Retro", "Stoma", "Stratus", "Tach", "Tree", "Under", "Uvula", "Vasy", "Vesuvi", "Wan", "Wet", "Xeder", "Xanthy", "Yan", "Yatto", "Zombo", "Zeter"],
    beast2: ["astic", "astro", "bit", "beta", "ceda", "cicada", "drago", "data", "evero", "endo", "fangle", "fondle", "goro", "gender", "hadri", "happy", "inckle", "iddle", "jopolo", "just", "kandy", "kappa", "lapro", "little", "mando", "muddy", "nipper", "no", "oper", "o", "panda", "pity", "quizzle", "quack", "ready", "riddle", "sandy", "super", "tetra", "trig", "ugly", "uvula", "vitro", "vita", "wetter", "waisto", "xray", "-x-", "yatta", "yoda", "zeta", "zumps"],
    beast3: ["osaur", "saurus", "us", "is", "diner", "dactyl", "ped", "pede", "raptor", "dong", "-doodle"],
    
    Creature: ["Creature", "Beast", "Being", "Existence", "Animal", "Bug", "Mammal", "Reptile", "Amphibian", "Dog", "Monster", "Abomination"],
	Creatureplural: ["Creatures", "Beasts", "Beings", "Existences", "Animals", "Bugs", "Mammals", "Reptiles", "Amphibians", "Dogs", "Monsters", "Abominations"],
    creature: ["creature", "beast", "being", "existence", "animal", "bug", "mammal", "reptile", "amphibian", "dog", "monster", "abomination"],
    
    habitat: ["$adjective $biomes", "$biomes"],
    biomes: ["grassland", "desert", "fungusland", "taiga", "tundra", "marshland", "rivers", "deep-sea vents", "lake beds", "public pools", "bedrooms", "catamcombs", "theme parks", "plains", "jungles", "petting zoos"]
	
};

   const template = `$bestiaryintro
   $beasttitle
   $beastappearance
   $beastbehavior
   `;
  
  // STUDENTS: You don't need to edit code below this line.
  
  const slotPattern = /\$(\w+)/;
  
  function replacer(match, name) {
    let options = fillers[name];
    if (options) {
      return options[Math.floor(Math.random() * options.length)];
    } else {
      return `<UNKNOWN:${name}>`;
    }
  }
  
  function generate() {
    let story = template;
    while (story.match(slotPattern)) {
      story = story.replace(slotPattern, replacer);
    }
  
    /* global box */
    box.innerText = story;
  }
  
  /* global clicker */
  clicker.onclick = generate;
  
  generate();
