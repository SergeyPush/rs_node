const argv = require("minimist")(process.argv.slice(2));
const fs = require("fs");
const prompt = require("prompt-sync")();
const { encrypt, decrypt } = require("./cypher");

let shift = 0;
let action = "";
data_string = "";
let input = "";
let output = "";

console.log(argv);

async function readableToString(readable) {
  const str = await getStream(readable);
  return str;
}

if ("s" in argv || "shift" in argv) {
  shift = Number(argv["s"] || argv["shift"]);
}
if ("a" in argv || "action" in argv) {
  action = argv["a"] || argv["action"];
}
if ("i" in argv || "input" in argv) {
  input = argv["i"] || argv["input"];
}

if ("o" in argv || "output" in argv) {
  output = argv["o"] || argv["output"];
}

if (!shift || !action) {
  process.stderr.write("Provide shift and action parameters" + "\n");
  process.exit(1);
}
if (input) {
  data_string = fs.readFileSync(input, "utf8", (err, data) => {});
} else {
  data_string = prompt("> ");
}

const data = [];
for (let item of data_string) {
  if (item.match(/^[\w.-]+$/)) {
    if (action === "encode") {
      data.push(encrypt(item, shift));
    } else if (action === "decode ") {
      data.push(decrypt(item, shift));
    }
  } else {
    data.push(item);
  }
}

if (output) {
  fs.writeFileSync(output, data.join(""));
} else {
  process.stdout.write(data.join("") + "\n");
}
