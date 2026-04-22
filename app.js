import { spawn } from "child_process";

spawn("npm", ["start"], {
  stdio: "inherit",
  shell: true
});