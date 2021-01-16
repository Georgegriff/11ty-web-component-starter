module.exports = {
    getPath: (assetName) => {
        if (process.env.NODE_ENV === "production") {
            const assets = require("../_includes/manifest.json");
            const modulePath = assets[assetName];
            if(!modulePath) {
              throw new Error(`error with getAsset, ${assetName} does not exist in manifest.json`);
            }
            return `${modulePath}`;
        } else {
            return `/src/scripts/${assetName}`;
        }
    },
    getInlinePath: (assetName) => {
        if (process.env.NODE_ENV === "production") {
            const assets = require("../_includes/manifest.json");
            const modulePath = assets[assetName];
            if(!modulePath) {
              throw new Error(`error with getAsset, ${assetName} does not exist in manifest.json`);
            }
            return `build/${modulePath}`;
        } else {
            return `scripts/${assetName}`;
        }
    }
}