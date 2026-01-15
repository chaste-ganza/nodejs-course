const express = require("express");
const app = express()
const fs = require("fs");
const { dirname } = require("path");

fs.writeFile(dirname,"text.txt")