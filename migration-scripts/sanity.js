const sanityClient = require("@sanity/client");
const token = require("./sanityToken");

module.exports = sanityClient({
  projectId: "qjr2zbvq",
  dataset: "production",
  useCdn: true,
  token: token
});
