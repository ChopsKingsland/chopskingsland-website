function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

async function changeText() {
    for (i = 0; i < 3; i++) {
        document.getElementById("line1").innerHTML = "WEBSITE:\\> Loading page... -";
        await sleep(200);
        document.getElementById("line1").innerHTML = "WEBSITE:\\> Loading page... \\";
        await sleep(200);
        document.getElementById("line1").innerHTML = "WEBSITE:\\> Loading page... /";
        await sleep(200);
        document.getElementById("line1").innerHTML = "WEBSITE:\\> Loading page... -";
        await sleep(200);
        document.getElementById("line1").innerHTML = "WEBSITE:\\> Loading page... \\";
        await sleep(200);
        document.getElementById("line1").innerHTML = "WEBSITE:\\> Loading page... /";
        await sleep(200);
      }
      document.getElementById("line1").innerHTML = "WEBSITE:\\> Loading page... ";
      await sleep(1000);
      document.getElementById("line2").innerHTML = "WEBSITE:\\> Connection timed out";
      await sleep(1000);
      document.getElementById("line3").innerHTML = "WEBSITE:\\> ERROR 404";
      await sleep(1000);
      document.getElementById("line4").innerHTML = "WEBSITE:\\> PAGE NOT FOUND";
      await sleep(1000);
      document.getElementById("line5").innerHTML = "WEBSITE:\\> CLICK TO GO HOME";
}
function home() {
    location.replace("index.html");
}

changeText();