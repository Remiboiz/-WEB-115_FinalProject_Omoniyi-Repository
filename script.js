class Player {
    constructor() {
        this.stress = 0;
        this.academics = 5;
        this.athletics = 5;
    }
}

const scenes = {
    start: {
        text: "You have a big test tommorow, but you team has practice and your friend wants to hang out",
        choices : [
            {
                text: "Study for the test",
                effects: {academics: +2, stress: +1},
                next: "practice"
            },
            {
                text: "Go to practice",
                effects: {athletics: +2, stress: +1},
                next: "friend"
            },
            {
                text: "Hang out with friend",
                effects: {relationships: +2, stress: -1},
                next: "testDay"
            }
        ]
    },

    practice: {
        text: "Practice went well, but you're tired.",
        choices: [
            {
                text: "Sleep early",
                effects: { stress: -2},
                next: "testDay"
            }
        ]
    },

    friend: {
        text: "You had fun, but didn't study",
        choices: [
            {
                text: "Go gome",
                effects: { academics: -1},
                next: "testDay"
            }
        ]
    },

    testDay: {
        text:"It's test day...",
        choices:[
            {
                text: "See results",
                effects: {},
                next: "ending"
            }
        ]
    },

    ending: {
        text: "Final results based on your stats",
        choices: []
    }
};

const sceneEl = document.getElementById("scene");
const choiceEl = document.getElementById("choices");
const statsEl = document.getElementById("stats");
const restartBtn = document.getElementById("restart");

const player = new player();
let currentScene = "start";

function renderStats() {
    statsEl.innerHTML = `
    Stress: ${player.stress} |
    Academics: ${player.academics} |
    Athletics: ${player.athletics}
    Relationships: ${player.relationships}
    `;
}

function renderScene() {
    const scene = scenes[currentScene];

    sceneEl.textContent = scene.text;
    choicesEl.innerHTML = "";

    scene.choices.forEach(choice => {
        const btn = document.createElement("button");
        btn.textContent = choice.text;

        btn.addEventListener("click", ()=> {
            applyEffects(choice.effects);
            currentScene = choice.next;
            renderGame();
        })

        choicesEl.appendChild(btn);
    });

    //Ending logic
    if(currentScene === "ending") {
        showEnding();
    }
}

function applyEffects(effects){
    for (let key in effects) {
        player[key] += effects[key];
    }
}

function showEnding() {
    if (player.stress > 7) {
        sceneEl.textContent = "You burned out from too much stress";
    } else if (player.academics > 7){
        sceneEl.textContent = "You suceeded academically!";
    } else if (player.athletics > 7){
        sceneEl.textContent= "You became a start athlete!";
    }else {
        sceneEl.textContent = "You survived, but life is still unbalanced";
    }

    choicesEl.innerHTML = "";
}
function renderGame() {
    renderStats();
    renderScene();
}

restartBtn.addEventListener("click", () => {
    location.reload();
});

renderGame();
