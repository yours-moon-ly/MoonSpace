const ACTIVITIES = {
    "Honkai: Star Rail": {
        image: "hsr.png"
    },

    "Genshin Impact": {
        image: "genshin.jpg"
    },

    "Neverness to Everness": {
        image: "NTE.jpg"
    },

    "Arknights: Endfield": {
        image: "endfield.jpg"
    },

    "Visual Studio Code": {
        image: "working.png"
    },

    "default": {
        image: "reading.gif"
    },

    "offline": {
        image: "sleep.jpeg"
    }

    }
;

const DEFAULT_ACTIVITY = {
    image: "working.png"
};

function updateActivity(discordGame) {

    const activity =
        ACTIVITIES[discordGame] || DEFAULT_ACTIVITY;

    document.getElementById("currentGame").src =
        `assets/status/${activity.image}`;

}