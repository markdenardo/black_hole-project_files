// enter this code into console in developer tools, and it will generate QR code jpeg pointing to the page
await loadScript('https://cdnjs.cloudflare.com/ajax/libs/qrious/4.0.2/qrious.min.js')
window.downloadURI = function (uri, name) {
  var link = document.createElement("a");
  link.download = name;
  link.href = uri;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  delete link;
}
document.querySelector("#run-icon").click()
url = window.location.href
qr = new QRious()
qr.padding = 25;
qr.size = 500;
qr.value =  url;
downloadURI(qr.toDataURL('image/jpeg'),"qrcode")

