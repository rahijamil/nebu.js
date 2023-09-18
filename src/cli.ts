import * as commander from 'commander';

const program = new commander.Command();

program
  .version('0.0.1')
  .description('NebuJS CLI');

// Define individual commands and their descriptions
program
  .command('init', 'Initialize a new project')
  .command('list', 'List available templates')
  .command('update', 'Update the CLI tool');

// Parse command-line arguments
program.parse(process.argv);