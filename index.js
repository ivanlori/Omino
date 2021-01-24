(() => {
  const $input = document.getElementById("js-input");
  const $emoticonOutput = document.getElementById("js-emoticon");
  const $textOutput = document.getElementById("js-text");
  const typeOfLaughs = [
    "ahah",
    "haha",
    "LOL",
    "lol",
    "ROTFL",
    "rotfl",
    "LMAO",
    "lmao",
  ];
  const sequenceOfExclamationMark = "!!";
  const sequenceOfDots = "....";
  const emoticons = {
    grinningFace: "😁",
    wearyFace: "😩",
    slightlySmiling: "🙂",
    faceTearsJoy: "😂",
    laughingFaceFloor: "🤣",
  };

  const setEmoticon = (value) => {
    $emoticonOutput.innerHTML = value;
  };

  const setText = (value) => {
    $textOutput.innerHTML = value;
  };

  // Check user laughs
  const checkUserLaugh = (value) => {
    typeOfLaughs.find((laugh) => {
      // No match
      if (value.search(laugh) === -1) return;

      if (
        typeOfLaughs.indexOf(laugh) === 0 ||
        typeOfLaughs.indexOf(laugh) === 1
      ) {
        setEmoticon(emoticons.faceTearsJoy);
      } else {
        setEmoticon(emoticons.laughingFaceFloor);
      }
    });
  };

  const checkUserUppercase = (value) => value === value.toUpperCase();

  // Check when a word has more than !! at the end
  const checkExclamationMark = (value) => {
    return value.endsWith(sequenceOfExclamationMark);
  };

  // Check phrases like this: I AM ANGRY!!!!!
  const checkIfUserIsAngry = (value) => {
    return checkExclamationMark(value) && checkUserUppercase(value);
  };

  const setDefaultState = () => {
    setEmoticon(emoticons.slightlySmiling);
    $textOutput.innerHTML = "";
  };

  // Magic happens here :)
  const setOutput = (e) => {
    const text = e.target.value;

    // if empty returns to the default state
    if (!text || text === " ") {
      setDefaultState();
      return;
    }

    checkUserLaugh(text);

    if (checkIfUserIsAngry(text)) {
      setText("Why are you angry?");
      setEmoticon(emoticons.wearyFace);
    } else if (checkUserUppercase(text)) {
      setText("You are a boomer!");
      setEmoticon(emoticons.grinningFace);
    }
  };

  // Set default emoticon on start
  setDefaultState();

  $input.addEventListener("keyup", (e) => {
    setOutput(e);
  });
})();
