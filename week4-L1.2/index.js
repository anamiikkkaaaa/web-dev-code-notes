const fs = require("fs");
const {command} = require("commander");
const program = new command();

program.name("to-do")
.description("to-do app that add, delete and update tasks")
.version('1.0.0');

program.command("add")
.description("adds a task")
.argument('<file>', '<task>', )
.action(
    
);

program.command("update")
.description("updates a task")

program.command("delete")
.description("deletes a task")