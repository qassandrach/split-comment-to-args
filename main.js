const core = require("@actions/core")

const main = () => {
  try {

    let command = core.getInput('comment');

    const separator = ' ';
    const parts = command.split(separator);
    const result = {};

    parts.forEach((part) => {
      const args = part.split('=');

      if (args.length > 1) {
        const flag = args[0].slice(2);
        let value = args[1];

        if (value.includes(',')) value = args[1].split(',');
  
        result[flag] = value;

      } 
      // else result[part] = part;
    });
    console.log(result)
    core.setOutput('result', result);

  } catch (error) {
    core.setFailed(error.message);
  }
};

main();
