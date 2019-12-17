const inquirer = require("inquirer");
const shell = require("shelljs");
// Node colorful always

const questions = [
  {
    name: "conf",
    message: "加入版本修改内容，最少20字。系统自动加入readme.md",
    validate: str => Boolean(str.length >= 20),
    when: res => !Boolean(res.conf)
  }
];

inquirer.prompt(questions).then(({ conf }) => {
  shell.exec("build.sh",conf);
});
