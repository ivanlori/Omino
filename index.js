(() => {
  const $input = document.getElementById("js-input");
  const $emoticonOutput = document.getElementById("js-emoticon");
  const $textOutput = document.getElementById("js-text");
  let timeout = 0;
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
    angryFace: "😡",
    slightlySmiling: "🙂",
    faceTearsJoy: "😂",
    laughingFaceFloor: "🤣",
  };

  const setEmoticon = (value) => {
    $emoticonOutput.innerHTML = value;
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
    return (
      (checkExclamationMark(value) && checkUserUppercase(value)) ||
      checkExclamationMark(value)
    );
  };

  const setDefaultState = () => {
    setEmoticon(emoticons.slightlySmiling);
    $textOutput.style.display = "none";
  };

  // Magic happens here :)
  const setOutput = (e) => {
    const text = e.target.value;

    // if empty returns to the default state
    if (!text || text === " ") {
      setDefaultState();
      return;
    }

    $textOutput.style.display = "block";

    checkUserLaugh(text);

    if (checkIfUserIsAngry(text)) {
      setEmoticon(emoticons.angryFace);
    } else if (checkUserUppercase(text)) {
      setEmoticon(emoticons.grinningFace);
    }
  };

  // Set default emoticon on start
  setDefaultState();

  $input.addEventListener("keyup", (e) => {
    clearTimeout(timeout);
    // Check sentences when user stops typing
    timeout = setTimeout(() => {
      setOutput(e);
    }, 800);
  });
})();
