// Imported packages
import app from "./app";
import { initTutorial } from "./api/utils/terminalTutorial";

const PORT = process.env.PORT || 8023;

app.listen(PORT, initTutorial);