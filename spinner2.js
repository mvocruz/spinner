const bars = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r| \n']
let interval = 0;
for (let bar of bars) {
setTimeout(() => {
  process.stdout.write(bar);
}, interval);
interval += 200;
}
