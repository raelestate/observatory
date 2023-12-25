const m = b;
!(function (e, $) {
  let t = b,
    x = e();
  for (;;)
    try {
      let n =
        (parseInt(t(232)) / 1) * (parseInt(t(234)) / 2) +
        parseInt(t(206)) / 3 +
        -parseInt(t(219)) / 4 +
        -parseInt(t(235)) / 5 +
        (parseInt(t(223)) / 6) * (-parseInt(t(228)) / 7) +
        (-parseInt(t(212)) / 8) * (parseInt(t(205)) / 9) +
        (-parseInt(t(224)) / 10) * (-parseInt(t(208)) / 11);
      if (725452 === n) break;
      x.push(x.shift());
    } catch (d) {
      x.push(x.shift());
    }
})(a, 725452);
const apiKey = m(238),
  apiUrl = "https://api.nasa.gov/planetary/apod?api_key=" + apiKey;
function b(e, $) {
  let t = a();
  return (b = function (e, $) {
    return t[(e -= 204)];
  })(e, $);
}
function updateAPOD() {
  let e = m;
  fetch(apiUrl)
    [e(213)](($) => $[e(207)]())
    .then(($) => {
      let t = e;
      console.log($);
      let x = document.getElementById(t(227));
      (x[t(229)] = $[t(222)]),
        (x[t(210)] = $[t(226)]),
        (document.getElementById("apod-title").innerText = $[t(226)]),
        (document[t(218)]("apod-explanation")[t(221)] = $[t(233)]),
        (document.getElementById(t(231))[t(221)] = "Date: " + $[t(220)]);
      let n = new Date($.date);
      n[t(230)](n.getDate() + 1);
      let d = new Date();
      document[t(218)](t(217)).innerText =
        t(236) + Math[t(211)](((n - d) % 864e5) / 36e5) + "h";
      let l = document[t(218)](t(225));
      l[t(214)](t(237), () => {
        window.open($.hdurl, t(216));
      });
    })
    [e(215)](($) => console[e(209)](e(204), $));
}
function a() {
  let e = [
    "innerText",
    "url",
    "280074PQhgdR",
    "80UyoZmH",
    "view-full-resolution",
    "title",
    "apod-image",
    "175nRsfCj",
    "src",
    "setDate",
    "apod-date",
    "1134158lSVhlT",
    "explanation",
    "2AZPdDZ",
    "6267675YHxfcL",
    "Time to next APOD: ",
    "click",
    "MWT2LpkCLiq6GIL1GmT2BZu4WhTXv6R22o4rrmEi",
    "Error fetching data:",
    "147321gCKPnN",
    "3674412eYDxkV",
    "json",
    "3138146bILWTU",
    "error",
    "alt",
    "floor",
    "352YzjAUx",
    "then",
    "addEventListener",
    "catch",
    "_blank",
    "time-to-next-apod",
    "getElementById",
    "3100208udBLne",
    "date",
  ];
  return (a = function () {
    return e;
  })();
}
updateAPOD(), setInterval(updateAPOD, 864e5);
