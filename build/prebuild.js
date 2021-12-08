const fs = require("fs");

const readFile = (filePath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, (err, data) => {
            if (err) {
                reject(err);
                return;
            }

            resolve(data.toString());
        });
    });
};

const writeFile = (filePath, content) => {
    return new Promise((resolve, reject) =>
        fs.writeFile(filePath, content, () => resolve()));
}

// Updates version printed in console window
const updateVersion = async () => {
    const filePath = "src/utils.ts";
    const pkg = require("./../package.json");
    const utils = await readFile(filePath);
    const updatedUtils = utils.replace(/%c [0-9]+.[0-9]+.[0-9]+"/gm, `%c ${pkg.version}"`);
    if (utils !== updatedUtils) {
        await writeFile(filePath, updatedUtils);
    }
}

updateVersion();