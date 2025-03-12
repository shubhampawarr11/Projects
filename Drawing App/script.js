const canvas = document.getElementById("drawing-board");
const ctx = canvas.getContext("2d");
const colorPicker = document.getElementById("color");
const brushSize = document.getElementById("brush-size");
const clearBtn = document.getElementById("clear-btn");
const undoBtn = document.getElementById("undo-btn");
const redoBtn = document.getElementById("redo-btn");

// Set canvas size
canvas.width = window.innerWidth * 0.8;
canvas.height = window.innerHeight * 0.6;

// Drawing state
let isDrawing = false;
let paths = []; // Stores all drawing paths
let currentPath = []; // Stores the current drawing path
let history = []; // Stores the history for undo/redo

// Start drawing
canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  currentPath = []; // Start a new path
  currentPath.push({
    x: e.offsetX,
    y: e.offsetY,
    color: colorPicker.value,
    size: brushSize.value,
  });
});

// Draw
canvas.addEventListener("mousemove", (e) => {
  if (isDrawing) {
    currentPath.push({
      x: e.offsetX,
      y: e.offsetY,
      color: colorPicker.value,
      size: brushSize.value,
    });
    drawPath(currentPath); // Draw the current path
  }
});

// Stop drawing
canvas.addEventListener("mouseup", () => {
  if (isDrawing) {
    isDrawing = false;
    paths.push([...currentPath]); // Save the current path
    history = []; // Clear redo history
    updateButtons();
  }
});

// Clear canvas
clearBtn.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  paths = []; // Clear all paths
  history = []; // Clear history
  updateButtons();
});

// Undo last action
undoBtn.addEventListener("click", () => {
  if (paths.length > 0) {
    history.push(paths.pop()); // Move last path to history
    redrawCanvas(); // Redraw the canvas
    updateButtons();
  }
});

// Redo last undone action
redoBtn.addEventListener("click", () => {
  if (history.length > 0) {
    paths.push(history.pop()); // Move last undone path back to paths
    redrawCanvas(); // Redraw the canvas
    updateButtons();
  }
});

// Draw a single path
function drawPath(path) {
  ctx.beginPath();
  ctx.moveTo(path[0].x, path[0].y);
  for (let i = 1; i < path.length; i++) {
    ctx.strokeStyle = path[i].color;
    ctx.lineWidth = path[i].size;
    ctx.lineTo(path[i].x, path[i].y);
    ctx.stroke();
  }
}

// Redraw the entire canvas
function redrawCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  paths.forEach((path) => drawPath(path));
}

// Update undo/redo button states
function updateButtons() {
  undoBtn.disabled = paths.length === 0;
  redoBtn.disabled = history.length === 0;
}

// Initialize button states
updateButtons();
