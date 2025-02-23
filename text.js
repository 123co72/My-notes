

document.addEventListener("DOMContentLoaded", function () {
    const noteText = document.getElementById("note-text");
    const saveButton = document.getElementById("save-button");
    const clearButton = document.getElementById("clear-button");
    const downloadButton = document.getElementById("download-button");
    const status = document.getElementById("status");

    // Load saved note from localStorage
    noteText.value = localStorage.getItem("savedNote") || "";

    // Auto-save on input
    noteText.addEventListener("input", function () {
        localStorage.setItem("savedNote", noteText.value);
        status.textContent = "Auto-saved!";
        setTimeout(() => (status.textContent = ""), 1000);
    });

    // Save manually
    saveButton.addEventListener("click", function () {
        localStorage.setItem("savedNote", noteText.value);
        status.textContent = "Note saved!";
        setTimeout(() => (status.textContent = ""), 1000);
    });

    // Clear text area
    clearButton.addEventListener("click", function () {
        noteText.value = "";
        localStorage.removeItem("savedNote");
        status.textContent = "Note cleared!";
        setTimeout(() => (status.textContent = ""), 1000);
    });

    // Download note as a text file
    downloadButton.addEventListener("click", function () {
        const blob = new Blob([noteText.value], { type: "text/plain" });
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = "MyNote.txt";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        status.textContent = "Note downloaded!";
        setTimeout(() => (status.textContent = ""), 1000);
    });
});


---


