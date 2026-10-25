/*

FOR ACTUAL EVENT DAY

const startTime =
    new Date("2026-11-15T10:00:00");

const endTime =
    new Date("2026-11-16T10:00:00");

*/

// TESTING MODE
const startTime = new Date();

const endTime = new Date(
    startTime.getTime() + (24 * 60 * 60 * 1000)
);

const totalDuration = endTime - startTime;

function updateTimer() {

    const now = new Date();

    const remaining = endTime - now;

    if (remaining <= 0) {

        document.getElementById("countdown").innerHTML =
            "00:00:00";

        document.getElementById("status").innerHTML =
            "MISSION COMPLETE";

        document.getElementById("milestone").innerHTML =
            "🏆 TIME FOR JUDGING";

        document.getElementById("progress-bar").style.width =
            "100%";

        document.getElementById("progress-text").innerHTML =
            "100% COMPLETE";

        return;
    }

    const hours =
        Math.floor(remaining / (1000 * 60 * 60));

    const minutes =
        Math.floor(
            (remaining % (1000 * 60 * 60)) / (1000 * 60)
        );

    const seconds =
        Math.floor(
            (remaining % (1000 * 60)) / 1000
        );

    document.getElementById("countdown").innerHTML =
        String(hours).padStart(2, "0") + ":" +
        String(minutes).padStart(2, "0") + ":" +
        String(seconds).padStart(2, "0");

    document.getElementById("current-time").innerHTML =
        now.toLocaleTimeString();

    const elapsed = now - startTime;

    const percentage =
        (elapsed / totalDuration) * 100;

    document.getElementById("progress-bar").style.width =
        percentage + "%";

    document.getElementById("progress-text").innerHTML =
        percentage.toFixed(0) + "% COMPLETE";

    let stage = "";

    const status =
        document.getElementById("status");

    if (percentage < 33) {

        stage = "IDEATE PHASE";

        status.className =
            "status phase-ideate";

    } else if (percentage < 66) {

        stage = "INNOVATE PHASE";

        status.className =
            "status phase-innovate";

    } else {

        stage = "IMPACT PHASE";

        status.className =
            "status phase-impact";

    }

    status.innerHTML = stage;

    let milestone = "IDEATION";

    if (percentage >= 25)
        milestone = "PLANNING STAGE";

    if (percentage >= 50)
        milestone = "BUILD IN PROGRESS";

    if (percentage >= 75)
        milestone = "FINAL SUBMISSION";

    if (percentage >= 95)
        milestone = "JUDGING SOON";

    document.getElementById("milestone").innerHTML =
        milestone;
}

updateTimer();
setInterval(updateTimer, 1000);