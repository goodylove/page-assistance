var recorder = null;

function onAccessApproved(stream) {
  recorder = new MediaRecorder(stream);

  recorder.start();

  recorder.onstop = function () {
    stream.getTracks().forEach(function (track) {
      if (track.readyState === "live") {
        track.stop();
      }
    });
  };

  recorder.ondataavailable = function (event) {
    let recordBlob = event.data;
    console.log(recordBlob);
    let url = URL.createObjectURL(recordBlob);

    let a = document.createElement("a");
    a.style.display = "none";
    a.href = url;
    a.download = "screen-recording-webm";

    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
}

// listen for a message

chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
  if (message.action === "request_recording") {
    console.log("request_recording");
    sendResponse(`processed: ${message.action}`);

    //   grant permssion

    const response = await navigator.mediaDevices.getDisplayMedia({
      audio: true,
      video: {
        width: 99999999,
        height: 9999999,
      },
    });
    onAccessApproved(response);
  }

  if (message.action === "stopvideo") {
    console.log("stopvideo");
    sendResponse(`processed: ${message.action}`);
    if (!recorder) return console.log("no recorder");
    recorder.stop();
  }
});
