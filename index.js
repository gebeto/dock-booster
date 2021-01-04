const fs = require("fs");
const { execSync } = require("child_process");


const DATABASE_PATH_FIND = "/private/var/folders/*/*/0/com.apple.dock.launchpad/db/db";
const DATABASE_PATH = execSync(`ls ${DATABASE_PATH_FIND}`).toString().trim();




console.log(DATABASE_PATH);


// const data = fs.readSync(DATABASE_PATH);
// console.log(data);