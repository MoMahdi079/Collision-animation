const block1 = document.getElementById("block1");
const block2 = document.getElementById("block2");
const collisionCounter = document.getElementById("collisionCounter");
const containerWidth = 800;
const blockWidth = 100;

let pos1 = 0;
let pos2 = containerWidth - blockWidth;

let v1 = 0.5;
let v2 = -2;

let m1 = 100;
let m2 = 1;

let collisions = 0;

function updatePositions() {
  pos1 += v1;
  pos2 += v2;

  if (pos1 <= 0) {
    v1 = Math.abs(v1);
  }

  if (pos2 + blockWidth >= containerWidth) {
    v2 = -Math.abs(v2);
  }

  if (pos1 + blockWidth >= pos2) {
    let newV1 = ((m1 - m2) * v1 + 2 * m2 * v2) / (m1 + m2);
    let newV2 = ((m2 - m1) * v2 + 2 * m1 * v1) / (m1 + m2);

    v1 = newV1;
    v2 = newV2;

    collisions++;
    collisionCounter.innerText = `Collisions: ${collisions}`;

    if (collisions >= 10 && v1 < 0) {
      v1 = -Math.abs(v1);
    }
  }

  if (pos1 <= 0) {
    v1 = Math.abs(v1);
  }
  if (pos2 + blockWidth >= containerWidth) {
    v2 = -Math.abs(v2);
  }

  block1.style.left = pos1 + "px";
  block2.style.left = pos2 + "px";

  requestAnimationFrame(updatePositions);
}

updatePositions();
