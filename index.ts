function findStartOfPacketMarker(datastreamBuffer) {
  let lastFourCharacters = "";
  for (let i = 0; i < datastreamBuffer.length; i++) {
    if (lastFourCharacters.length > 4) {
      // remove the first character in the buffer
      lastFourCharacters = lastFourCharacters.substring(1);
    }
    lastFourCharacters += datastreamBuffer[i];
    if (new Set(lastFourCharacters).size === 4) {
      // we found the start of the packet marker
      for (let j = 0; j < 4; j++) {
        if (!lastFourCharacters.includes(lastFourCharacters.charAt(j))) {
          console.log(lastFourCharacters);
        }
        console.log(lastFourCharacters);
        console.log(datastreamBuffer.indexOf(lastFourCharacters.charAt(j)));
      }
    }
  }
  return -1;
}

findStartOfPacketMarker("mjqjpqmgbljsphdztnvjfqwrcgsmlb");
