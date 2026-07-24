const USER_ID = "611836539521073171";

async function updateDiscordStatus() {
    try {
        const response = await fetch(
            `https://api.lanyard.rest/v1/users/${USER_ID}`
        );

        const result = await response.json();

        if (!result.success) {
            console.error("Couldn't fetch Discord status.");
            updateActivity("default");
            return;
        }

        const data = result.data;

        // Find the current game/activity
        const game = data.activities.find(activity => activity.type === 0);

        if (game) {
            updateActivity(game.name);
        }
        else if (data.discord_status === "offline") {
            updateActivity("offline");
        }
        else {
            // Online / Idle / DND but no tracked activity
            updateActivity("default");
        }

    } catch (err) {
        console.error(err);
        updateActivity("default");
    }
}

// Run immediately
updateDiscordStatus();

// Refresh every 15 seconds
setInterval(updateDiscordStatus, 15000);