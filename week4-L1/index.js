const fs = require(`fs`);
const { Command } = require('commander');
const program = new Command();

program
  .name('count-words')
  .description('CLI to some JavaScript file word count')
  .version('0.8.0');

program.command('count')
  .description('count the number of words from a file')
  .argument('<file>', 'file to count')
  .option('--first', 'display just the first substring')
  .option('-s, --separator [char]', 'separator character', ',')
  .action((file) => {
    fs.readFile(file, `utf8`, (err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            const lines = data.split(" ").length;
            console.log(`There are ${lines} words in ${file}`);
        }
    })
  });

program.parse();
