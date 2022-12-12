// function findStartOfPacketMarker(datastreamBuffer) {
//   let lastFourCharacters = "";
//   for (let i = 0; i < datastreamBuffer.length; i++) {
//     if (lastFourCharacters.length > 4) {
//       // remove the first character in the buffer
//       lastFourCharacters = lastFourCharacters.substring(1);
//     }
//     lastFourCharacters += datastreamBuffer[i];
//   }

//   if (new Set(lastFourCharacters).size === 4) {
//     // we found the start of the packet marker
//     for (let j = 0; j < 4; j++) {
//       if (!lastFourCharacters.includes(lastFourCharacters.charAt(j))) {
//         console.log(lastFourCharacters);
//       }
//       console.log(lastFourCharacters);
//       console.log(datastreamBuffer.indexOf(lastFourCharacters.charAt(j)));
//     }
//   }

//   return -1;
// }

function count(word) {
  let letters = {};
  for (let chr of word) {
    letters[chr] = letters.hasOwnProperty(chr) ? letters[chr] + 1 : 1;
  }

  return letters;
}

function findStartOfPacketMarker(datastreamBuffer) {
  let lastFourCharacters = "";
  console.log("datastreamBuffer", datastreamBuffer);
  for (let i = 0; i < datastreamBuffer.length; i++) {
    lastFourCharacters = datastreamBuffer.slice(i, i + 4);
    let letterCount = count(lastFourCharacters);
    // console.log(Object.keys(letterCount).length);

    if (Object.keys(letterCount).length > 3) {
      console.log(count(lastFourCharacters));
      console.log(i + 4);
      console.log("found it sucker");
      return;
    }

    // for (let j = 0; j < 4; j++) {
    //   console.log(
    //     "j",
    //     j,
    //     lastFourCharacters.charAt(j),
    //     lastFourCharacters,
    //     lastFourCharacters.includes(lastFourCharacters.charAt(j))
    //   );
    //   if (!lastFourCharacters.includes(lastFourCharacters.charAt(j))) {
    //     console.log("lastFourCharacters");
    //   }
    // }
    // console.log(lastFourCharacters);
  }

  // // we found the start of the packet marker
  // for (let j = 0; j < 4; j++) {
  //   if (!lastFourCharacters.includes(lastFourCharacters.charAt(j))) {
  //     // console.log(lastFourCharacters);
  //   }
  //   console.log(lastFourCharacters);
  //   //console.log(datastreamBuffer.indexOf(lastFourCharacters.charAt(j)));
  // }

  return -1;
}

// findStartOfPacketMarker("mjqjpqmgbljsphdztnvjfqwrcgsmlb");

// findStartOfPacketMarker("bvwbjplbgvbhsrlpgdmjqwftvncz");
findStartOfPacketMarker(
  "srlsrsnnwhwwmddwfddgldlglppcnpptftzzchzhbhmmvwmvwvvjsjnjbbvbmvmnmqmfmjfjjmllzddrvrrnsncnznndwwqrqjjsfsjsjsvsvzvtvfvrvhhbwwltttbhhvphhtqqnffsppdqqrmmfrmfrrwvrvrsvrsrzssrqqrfqrfrttqntnpttvrrcncnfftjfjwwfwjwpwwltlwwwvnvcnvvdgvddqlddnllrggqvgvzzjddfgdfdgfffsbfsffjmffprrmgmtmqqgzzlwldlbbgjjnfjnnvlnnlbbnjnzngglmggwtgwttnvtnvndndmnmdmcddzbdbbspbpwbpplvpvnnmtmqqwnwgglhghdhbhqbhhqrqhqcqmmmrwwlvvfnvfnnpddbfbgfgqglgddrggbgbqqfwfjfdjfflzldlbbsbbtftccgqggzgdglglzljjzbzfbzffgftfvtfvvvjmjzjmjfjqqccpcjppzfpzzsvvzjvvfgfmgffzhhdphdpdwdwmdwwlqljjzffzvfzfwzfzcztctssdpssndssvbbtbstbtnngjjspplttpffjggbbqsqnqcncscpcmccbmbdbtbcbbgqgwgwqgwgwsszqznzvvntvvmlvlvqqvgvwgwlldbblclqcqggtqqlsqlsqlqcczzqgghmgmrgmrggljlbjbsbsmmnlmmdppnpfnnvhnnzggchgggbwwvtvpptgpplsljjshhnphhblbnbpbgppfllhsllbtlbtllrprqrvvfgvgpgcpcdddjjplpssjrjqjggncnzccqdqfqpffvddhlhdllgzzrtrztrztzptztwwbjbnjnsjsfsbfbdbccnhnmhnhrhwhfhbbtzbtztzrttrzrfrcrtctqqrlrsshphwphwpwwcmczzpqzqztqqvzzshhddrvdrrztrrqcqbcqbbhnnpfnpfnnmcnmnccnmmhccjjwzwcwbwcwnngtnngrngnsnzzcvvvtnvvtpvtpvtvvhffbsfsnsdsmmzbbrqbqpbpcpdppzmzbmmtdmttvgvrvlrvvhddjgdjdbbthtjhjdjhdjjmssdldjllwppvbvnbnlbbbszbblpbpfbpblbzzszvssbcbgcghgbbcpbbqrrdjdnnjcjddjcdjjcqqhggflftftfhttvlttgdtdrttwppwvvrzzbggrjjmssrjsjmssdtttdbdvddpllpgllthhvfvhvddrhhnznwznwzzpbblvvpmvpmpddjvdvcddvsshfhrrghgnhghmhhmhffrsfrflrfrjrddzgzsggchcfhhsbbsrszzgjggnrrgfffhthdthtnhtntllsjjjwqqsbsttbtzbttlfttczzbfbwfwvvhllltjjsqsdqqspqsszqzhhdrrhccgbcgggcbggnvgvmmwcmmpqmqccshsnnnwrwfrrwrllvhvlvmlvljjgrgvrvddfqfwqfqlfqqqppvmvrmrfrvrwrqrjqrrvmrvmrrvffmtffsfdfdrdwrwjrrcgcwwcdwdrdnrnzztqzzzgdzgdgldltdtvtnnhllrtltbtrbbttgssdhsssrmsscnssmtmqqtssmzzjqzqddfrdrtdrdpdzzppwggsrrfvfnvvmgvgmmdnnbwnntlnntncchcmcjmmvzzzngznnbgbnbnvbvzzfqqmtmrmcmqmvmbmbmcmscsjcsshswsjsvswshwwlnnsslmslmmzgmgsmssrwwmjwmwllvbvppplmmwgmgzgzdgzdgzztrtzzchcssbppdbbmvmqmmzhztzdtzdznnqhhmcmnnncbnngjnjmjnmmqqsnqsnslnlqlppvbvwwvtwtfwtfmzsbdjfvhzcflstpbtprpzmwcwwgzshfssnjdgflcsfglhbvvdctfrccfmwgfvjtvqfqpzzmqtlbvrjqwlwclfzhfzcmwsvprdhzcrghdscprrnqgdgmhhwbcfcfzrcgrwvbstpwbcvcnpmftwwthnsjznzslfdfqhtpsgmjsddmhlhtlzfsnhlcbgnqpqbzppnbcgtzvwdpmgftgsmrwjqwsdnjrrmwrmlcvlqgwldnvmsgnwccwzmdzwdhpmpqffgbnrrrvzqhtlnvqfhgwbbwsghwbrjzjcjmjmsspcmnfbbpmwffbdqffqfwsvtcrghbnldspdhjhjvtdhgmvrzqqlhvnwbdhfprwqdtzswfdzdwhzvfzsfqlzcflhbsvjhnjnthrdrgmjrrbftflpvrmrvvsgnjhrhjffvznmbjtshwgjmcqbfqjlptsrcgzvrhctwsdclrstmsbsbpqpjcvftmvmsmpwmmphlwmljhvllhrmfcncdprrwfmqrlllmsrvrwtbsqddbmblhvqqlcbbtjbslggrshflrddsphbvzhprcvbpmfldnmwtchddbdwhwpgbmjqptsbdzhrbqfwgfltchsggjlbqbhmzbjdncnvsqjvftpwrpdcjzsrvrlzwqfptwzssqpltjhdmtmmgvjzzqswwrsqrqfpdllgzsdlvhfdnzlrmlqdclwhqqbtwdqcrlfdjphjvcfzpwwgphmrldnwjpnmsjnqpwtwglcbthmcbnvpmjbdhmjglgccsmrmbvbqphdlbrrgnbljlhqvgqbctmthvmsfzflwvctwmdgmrlhnmwnsjtzndlwfttcvtslppjwsgbzhztlpzhmjlrbtzfnblwwlddzwqvzbjmffbflvmvnsgjlqwjqvrcrtwbhfzbzzmtwsndqmtnbjbsqjpnwhzqgwwltwgrqfbhjtpzrqvvhgjsbzqmfdsmzjdnplvblvqlrtzsbjgdptdhgvvrblbjppnnhhnvqtmjgwqzwtmjglrjlwsrfdjfmzlsszzzpbwvjbwpcwlplhcmhgpclztjcrmcntnqbnlrmcnhcnhnmjggtqbtvcfmcbdpqhdrvspbrgcwhgjhggwpvjbplhdsnnvgbzhmcrjqvqlwsdvrrnntmwdgdqdvzznjflctlfmfzsdfbpftsscnbtnqcsvtltvnsqpghzcwtjctvwqqnvnddlzbftwrdqzltpczrbmvsmlpfjzphtpnngzdfrjqrtbppbvztsddblspbltsnrtdftmwbblgdqvmscjqpwfvdzphwqgrbpdfcvtvmddgjjpswrqnwjfghtzwzbhtjnwjsrnwhjwcwnrtwrmbmqjhrbmbsslnvtsqnlbzlfdjvmnlhccpzmvpmrnttnshdjsswjlbtpwdwgmzqcthbczngwnfpzbmmrdffqsbrmsgzrtpsstfmdgbclwthflfbzvtptdfpzznvdwncqzvjwsmczwcnwgjpffcbhrtmtnbtjgcvtwdjtrftjwgvzmlfvgdjjjgsftzctplmjjmqfdzzwrtfmwqhwzglwbvsdvtgphsmngvppvlfdjdrzhhzsrvqgfwjbqdqlrwbgdmrglzrchvgwlhhwbvhfszntbrhshvqdznfvngdmhctjnlfhsmchqbqhdtmlntsnpvdzrvwjcjflfqgnprcpscfcmlgbwzmbnfdfnbwngrrbpnvbcdfgcpgtwmtbzptsdvjhwnzpsffglnqlczgsrdzshrfpqtqbmsrgzwwjvqhzjfzldcggvfhtcvzsgfspnlgtjfglwcnbprvssdfbtzqbblzjzmtftfcfprlwsvswjvtpzcpfphvmdnbczzjbjjrpwrncdszrtqjvznvgzcwdvpfvfcqlsdmhsswpnfsvtffnjhstcznwghlpmmqbnhqtddbjdrpvfhgdwjcnfgggmwnqhmsvgzsssbfcfrmbwpfqhrmtdvhbpwzggdvfjnlrgmvjjbqhjmbvszfzdcwrcjhfdczbhmcrwngmrgrldvbjjdgddhbbvqvwztfstfzqnqwvmmdzhzqtrmnqfrhmtdfhrgfqclpqdwthrbgsprccwcsvdbnclglgflhtqstvpwrmnsvflpplrgftlvjwttmdcqwjnbttjqqlwsntplmfrncqzplwgrjpzljtmnwsqfqnzgnrbtscbfzqwnqttnghcgl"
);
