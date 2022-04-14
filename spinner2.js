let delay = 200;
const printNewLine = () => process.stdout.write("\n");
const spinnerChars = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"];
spinnerChars.forEach((char, index) => {
  setTimeout(() => {
    process.stdout.write("\r" + char + "   ");
  }, delay);
  delay += 200;
});
setTimeout(printNewLine, 2000);
