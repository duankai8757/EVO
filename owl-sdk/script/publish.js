const shell = require("shelljs");
const path = require("path");

const cwd = process.cwd();
console.log(cwd.argv);

const pwd = shell.pwd().stdout;

const publishDir = path.join(pwd, "./publish_dir");

const fromPaths = ["../package.json", "../readme.md", "../dist/"];

shell.mkdir(publishDir);

fromPaths.forEach(p => {
  let srcPath = path.join(pwd, p);
  console.log(srcPath);
  shell.cp("-R", srcPath, publishDir);
});

shell.cd(publishDir);
if (shell.exec('npm publish').code !== 0) {
    shell.echo('Error: Npm publish failed');
}

shell.cd("../")
shell.rm("-rf", publishDir);

console.log("发布成功！！！")