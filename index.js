(() => {
  const $input = document.getElementById("js-input");
  const $emoticonOutput = document.getElementById("js-emoticon");
  const $textOutput = document.getElementById("js-text");

  const sequenceOfExclamationMark = "!!";
  const ANGRY = "angry";
  const HAPPY = "happy";
  const emoticons = {
    happy: "😁",
    sad: "😩",
    smile: "🙂",
  };
  let exitFromSearchLaugh = false;

  const setEmoticon = (value) => {
    $emoticonOutput.innerHTML = value;
  };

  const setText = (value) => {
    $textOutput.innerHTML = value;
  };

  // Check two types of laugh
  const checkUserLaugh = (value) => {
    const typeOfLaugh1 = "ahah";
    const typeOfLaugh2 = "haha";

    if (
      (value.search(typeOfLaugh1) !== -1 ||
        value.search(typeOfLaugh2) !== -1) &&
      !exitFromSearchLaugh
    ) {
      exitFromSearchLaugh = true;
      return true;
    }
  };

  const checkUserUppercase = (value) => value === value.toUpperCase();

  // When a word has more than !! at the end
  const checkExclamationMark = (value) => {
    return value.endsWith(sequenceOfExclamationMark);
  };

  // For phrases like this: I AM ANGRY!!!!!
  const checkIfUserIsAngry = (value) => {
    return checkExclamationMark(value) && checkUserUppercase(value);
  };

  const setDefaultState = () => {
    setEmoticon(emoticons.smile);
    $textOutput.innerHTML = "";
  };

  // Magic happens here :)
  const setOutput = (e) => {
    const value = e.target.value;

    // if empty returns to the default state
    if (!value) {
      setDefaultState();
    } else if (checkUserLaugh(value)) {
      setText("Your are funny!");
      setEmoticon(emoticons.happy);
    } else if (checkIfUserIsAngry(value)) {
      setText("Why are you angry?");
      setEmoticon(emoticons.sad);
    } else if (checkUserUppercase(value)) {
      setText("You are a boomer!");
      setEmoticon(emoticons.happy);
    }
  };

  // Set default emoticon on start
  setEmoticon(emoticons.smile);

  $input.addEventListener("keyup", (e) => {
    setOutput(e);
  });
})();
