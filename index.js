(() => {
  const $input = document.getElementById("js-input");
  const $output = document.getElementById("js-output");

  const typeOfLaugh1 = "ahah";
  const typeOfLaugh2 = "haha";
  const sequenceOfExclamationMark = "!!";
  let exitFromSearchLaugh = false;

  const checkUserLaugh = (value) => {
    // Search if some laugh is in the text
    if (
      (value.search(typeOfLaugh1) !== -1 ||
        value.search(typeOfLaugh2) !== -1) &&
      !exitFromSearchLaugh
    ) {
      $output.innerText = "Your are funny!";
      exitFromSearchLaugh = true;
    }
  };

  const checkUserUppercase = (value) => value === value.toUpperCase();

  const checkExclamationMark = (value) => {
    return value.endsWith(sequenceOfExclamationMark);
  };

  const checkIfUserIsAngry = (value) => {
    return checkExclamationMark(value) && checkExclamationMark(value);
  };

  $input.addEventListener("keyup", (e) => {
    checkUserLaugh(e.target.value);
    checkUserUppercase(e.target.value);

    if (checkIfUserIsAngry(e.target.value)) {
      $output.innerText = "Uh oh, you should be furious!";
    } else if (checkUserUppercase(e.target.value)) {
      $output.innerText = "You are a boomer!";
    }
  });
})();
