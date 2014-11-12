{"changed":true,"filter":false,"title":"script.js","tooltip":"/1-vandalen/guess/script.js","value":"\"use strict\";\n\nwindow.onload = function(){\n\t\n\tvar secret = Math.floor( Math.random() * 100)+1; // Detta tal behöver bytas ut mot ett slumpat tal.\n\tvar tries = 0;\n\t\n\t// I denna funktion ska du skriva koden för att hantera \"spelet\"\n\tvar guess = function(number){\n\t\tconsole.log(\"Det hemliga talet: \" + secret); // Du når den yttre variabeln secret inifrån funktionen.\n\t\tconsole.log(\"Du gissade: \" + number); // Detta nummer är det som användaren gissade på.\n\t\ttries +=1;\t\n\t\t\n\t\t// Plats för förändring.\n\tif (number < 1 || number > 100) {\n\t\treturn [false, \"Talet är utanför intervallet 0 - 100\"]\n\t}\n\telse if (number==secret) {\n\t\treturn [true, \"Grattis du vann! Det hemliga talet var \" + secret + \" och du behövde \" + tries + \" gissningar för att hitta det.\"]\n\t}\n\telse if (number < secret) {\n\t\treturn [false, \"Det hemliga talet är högre!\"]\n\t}\n\telse if (number > secret) {\n\t\treturn [false, \"Det hemliga talet är lägre!\"]\n\t}\n\t\t\n\t\t// Returnera exempelvis: \n\t\t// [true, \"Grattis du vann! Det hemliga talet var X och du behövde Y gissningar för att hitta det.\"]\n\t\t// [false, \"Det hemliga talet är högre!\"]\n\t\t// [false, \"Det hemliga talet är lägre!\"]\n\t\t// [false, \"Talet är utanför intervallet 0 - 100\"]\t\t\n\t};\n\t\n\t// ------------------------------------------------------------------------------\n\n\n\n\t// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra\n\tvar p = document.querySelector(\"#value\"); // Referens till DOM-noden med id=\"#value\"\n\tvar input = document.querySelector(\"#number\");\n\tvar submit = document.querySelector(\"#send\");\n\n\t// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.\n\tsubmit.addEventListener(\"click\", function(e){\n\t\te.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.\n\n\t\tvar answer = guess(input.value) // Läser in talet från textrutan och skickar till funktionen \"guess\"\n\t\tp.innerHTML = answer[1];\t\t// Skriver ut texten från arrayen som skapats i funktionen.\t\n\n\t\tif(answer[0] === true){\t\t\t\t// Om spelet är slut, avaktivera knappen.\n\t\t\tsubmit.disabled = true;\n\t\t}\n\t\n\t});\n};","undoManager":{"mark":96,"position":100,"stack":[[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":20,"column":6},"end":{"row":20,"column":7}},"text":"u"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":20,"column":7},"end":{"row":20,"column":8}},"text":"m"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":20,"column":8},"end":{"row":20,"column":9}},"text":"b"},{"action":"insertText","range":{"start":{"row":20,"column":9},"end":{"row":20,"column":10}},"text":"e"},{"action":"insertText","range":{"start":{"row":20,"column":10},"end":{"row":20,"column":11}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":20,"column":11},"end":{"row":20,"column":12}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":20,"column":12},"end":{"row":20,"column":13}},"text":"z"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":20,"column":12},"end":{"row":20,"column":13}},"text":"z"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":20,"column":12},"end":{"row":20,"column":13}},"text":"<"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":20,"column":13},"end":{"row":20,"column":14}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":20,"column":14},"end":{"row":20,"column":15}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":20,"column":15},"end":{"row":20,"column":16}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":20,"column":16},"end":{"row":20,"column":17}},"text":"c"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":20,"column":17},"end":{"row":20,"column":18}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":20,"column":18},"end":{"row":20,"column":19}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":20,"column":19},"end":{"row":20,"column":20}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":21,"column":2},"end":{"row":21,"column":3}},"text":"r"},{"action":"insertText","range":{"start":{"row":21,"column":3},"end":{"row":21,"column":4}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":21,"column":4},"end":{"row":21,"column":5}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":21,"column":5},"end":{"row":21,"column":6}},"text":"u"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":21,"column":6},"end":{"row":21,"column":7}},"text":"r"},{"action":"insertText","range":{"start":{"row":21,"column":7},"end":{"row":21,"column":8}},"text":"n"},{"action":"insertText","range":{"start":{"row":21,"column":8},"end":{"row":21,"column":9}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":21,"column":9},"end":{"row":21,"column":47}},"text":"[false, \"Det hemliga talet är högre!\"]"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":22,"column":2},"end":{"row":23,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":23,"column":0},"end":{"row":23,"column":1}},"text":"\t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":23,"column":1},"end":{"row":23,"column":2}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":23,"column":2},"end":{"row":23,"column":3}},"text":"f"},{"action":"insertText","range":{"start":{"row":23,"column":3},"end":{"row":23,"column":4}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":23,"column":4},"end":{"row":23,"column":5}},"text":"\t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":23,"column":5},"end":{"row":23,"column":6}},"text":"\t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":23,"column":5},"end":{"row":23,"column":6}},"text":"\t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":23,"column":4},"end":{"row":23,"column":5}},"text":"\t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":23,"column":3},"end":{"row":23,"column":4}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":23,"column":1},"end":{"row":23,"column":3}},"text":"if"},{"action":"insertText","range":{"start":{"row":23,"column":1},"end":{"row":23,"column":12}},"text":"if (true) {"},{"action":"insertText","range":{"start":{"row":23,"column":12},"end":{"row":24,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":24,"column":0},"end":{"row":25,"column":0}},"lines":["\t\t"]},{"action":"insertText","range":{"start":{"row":25,"column":0},"end":{"row":25,"column":2}},"text":"\t}"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":23,"column":5},"end":{"row":23,"column":6}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":23,"column":5},"end":{"row":23,"column":6}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":23,"column":5},"end":{"row":23,"column":6}},"text":"u"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":23,"column":5},"end":{"row":23,"column":6}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":23,"column":5},"end":{"row":23,"column":6}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":23,"column":6},"end":{"row":23,"column":7}},"text":"u"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":23,"column":7},"end":{"row":23,"column":8}},"text":"m"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":23,"column":8},"end":{"row":23,"column":9}},"text":"b"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":23,"column":9},"end":{"row":23,"column":10}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":23,"column":10},"end":{"row":23,"column":11}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":23,"column":11},"end":{"row":23,"column":12}},"text":">"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":23,"column":11},"end":{"row":23,"column":12}},"text":">"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":23,"column":11},"end":{"row":23,"column":12}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":23,"column":12},"end":{"row":23,"column":13}},"text":"<"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":23,"column":13},"end":{"row":23,"column":14}},"text":"<"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":23,"column":13},"end":{"row":23,"column":14}},"text":"<"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":23,"column":12},"end":{"row":23,"column":13}},"text":"<"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":23,"column":12},"end":{"row":23,"column":13}},"text":">"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":23,"column":13},"end":{"row":23,"column":14}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":23,"column":14},"end":{"row":23,"column":15}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":23,"column":15},"end":{"row":23,"column":16}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":23,"column":16},"end":{"row":23,"column":17}},"text":"c"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":23,"column":17},"end":{"row":23,"column":18}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":23,"column":18},"end":{"row":23,"column":19}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":23,"column":19},"end":{"row":23,"column":20}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":24,"column":2},"end":{"row":24,"column":3}},"text":"r"},{"action":"insertText","range":{"start":{"row":24,"column":3},"end":{"row":24,"column":4}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":24,"column":4},"end":{"row":24,"column":5}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":24,"column":5},"end":{"row":24,"column":6}},"text":"u"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":24,"column":6},"end":{"row":24,"column":7}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":24,"column":7},"end":{"row":24,"column":8}},"text":"n"},{"action":"insertText","range":{"start":{"row":24,"column":8},"end":{"row":24,"column":9}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":24,"column":9},"end":{"row":24,"column":47}},"text":"[false, \"Det hemliga talet är lägre!\"]"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":17,"column":1},"end":{"row":17,"column":2}},"text":"e"},{"action":"insertText","range":{"start":{"row":17,"column":2},"end":{"row":17,"column":3}},"text":"l"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":17,"column":3},"end":{"row":17,"column":4}},"text":"s"},{"action":"insertText","range":{"start":{"row":17,"column":4},"end":{"row":17,"column":5}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":17,"column":5},"end":{"row":17,"column":6}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":20,"column":1},"end":{"row":20,"column":2}},"text":"e"},{"action":"insertText","range":{"start":{"row":20,"column":2},"end":{"row":20,"column":3}},"text":"l"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":20,"column":3},"end":{"row":20,"column":4}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":20,"column":4},"end":{"row":20,"column":5}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":20,"column":5},"end":{"row":20,"column":6}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":23,"column":1},"end":{"row":23,"column":2}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":23,"column":2},"end":{"row":23,"column":3}},"text":"l"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":23,"column":3},"end":{"row":23,"column":4}},"text":"s"},{"action":"insertText","range":{"start":{"row":23,"column":4},"end":{"row":23,"column":5}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":23,"column":5},"end":{"row":23,"column":6}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":18,"column":56},"end":{"row":18,"column":57}},"text":"\""},{"action":"removeText","range":{"start":{"row":18,"column":56},"end":{"row":18,"column":57}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":18,"column":65},"end":{"row":18,"column":66}},"text":"\""}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":18,"column":80},"end":{"row":18,"column":81}},"text":"\""}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":18,"column":80},"end":{"row":18,"column":81}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":18,"column":90},"end":{"row":18,"column":91}},"text":"\""}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":18,"column":56},"end":{"row":18,"column":57}},"text":"\""}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":18,"column":57},"end":{"row":18,"column":58}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":18,"column":67},"end":{"row":18,"column":68}},"text":"+"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":18,"column":68},"end":{"row":18,"column":69}},"text":"\""}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":18,"column":68},"end":{"row":18,"column":69}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":18,"column":85},"end":{"row":18,"column":86}},"text":"\""}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":18,"column":86},"end":{"row":18,"column":87}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":18,"column":97},"end":{"row":18,"column":98}},"text":"+"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":18,"column":98},"end":{"row":18,"column":99}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":18,"column":99},"end":{"row":18,"column":100}},"text":"\""}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":18,"column":70},"end":{"row":18,"column":71}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":18,"column":101},"end":{"row":18,"column":102}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":5,"column":5},"end":{"row":5,"column":12}},"text":"guesses"},{"action":"insertText","range":{"start":{"row":5,"column":5},"end":{"row":5,"column":6}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":5,"column":6},"end":{"row":5,"column":7}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":5,"column":7},"end":{"row":5,"column":8}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":5,"column":8},"end":{"row":5,"column":9}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":5,"column":9},"end":{"row":5,"column":10}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":11,"column":2},"end":{"row":11,"column":9}},"text":"guesses"},{"action":"insertText","range":{"start":{"row":11,"column":2},"end":{"row":11,"column":3}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":11,"column":3},"end":{"row":11,"column":4}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":11,"column":4},"end":{"row":11,"column":5}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":11,"column":5},"end":{"row":11,"column":6}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":11,"column":6},"end":{"row":11,"column":7}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":18,"column":90},"end":{"row":18,"column":97}},"text":"guesses"},{"action":"insertText","range":{"start":{"row":18,"column":90},"end":{"row":18,"column":91}},"text":"t"},{"action":"insertText","range":{"start":{"row":18,"column":91},"end":{"row":18,"column":92}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":18,"column":92},"end":{"row":18,"column":93}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":18,"column":93},"end":{"row":18,"column":94}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":18,"column":94},"end":{"row":18,"column":95}},"text":"s"}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":20,"column":28},"end":{"row":20,"column":28},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1415795783884}