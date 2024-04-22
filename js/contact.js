const greeting2 = ["Contactez nous !"];
let currentGreetingIndex2 = 0;
let currentCharacterIndex2 = 0;
let isDeleting2 = false;
let isPaused2 = false;
let pauseEnd2 = 0;

function typeWriterEffectContact() {
  const greetingElement2 = document.getElementById("TitreContact");

  if (isPaused2 && Date.now() > pauseEnd2) {
    isPaused2 = false;
    if (isDeleting2) {
      currentGreetingIndex2 = (currentGreetingIndex2 + 1) % greeting2.length;
      isDeleting2 = false;
    } else {
      isDeleting2 = true;
    }
  }

  if (
    !isPaused2 &&
    !isDeleting2 &&
    currentCharacterIndex2 === greeting2[currentGreetingIndex2].length
  ) {
    isPaused2 = true;
    pauseEnd2 = Date.now() + 800;
    return setTimeout(typeWriterEffectContact, 50);
  }

  if (!isPaused2 && isDeleting2 && currentCharacterIndex2 === 0) {
    isPaused2 = true;
    pauseEnd2 = Date.now() + 200;
    return setTimeout(typeWriterEffectContact, 50);
  }

  const timeout = isDeleting2 ? 100 : 200;
  greetingElement2.innerText = greeting2[currentGreetingIndex2].substring(
    0,
    currentCharacterIndex2
  );
  currentCharacterIndex2 = isDeleting2
    ? currentCharacterIndex2 - 1
    : currentCharacterIndex2 + 1;
  setTimeout(typeWriterEffectContact, timeout);
}
window.addEventListener("load", function() {
  // Votre code JavaScript ici
  typeWriterEffectContact();
});
