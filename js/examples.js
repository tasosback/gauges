

var clock = jQuery("#multi").radialMultiProgress("init", {
  'fill': 25,
  'font-size': 14,
  'data': [
    {'color': "#2DB1E4", 'range': [0, 12]},
    {'color': "#9CCA13", 'range': [0, 59]},
    {'color': "#A4075E", 'range': [0, 100]}
  ]
});

var startClock = function() {
  var dh, dm, ds;
  setInterval(function() {
    var date = new Date(),
        h = date.getHours() % 12,
        m = date.getMinutes(),
        s = date.getSeconds();
    if (dh !== h) { clock.radialMultiProgress("to", {
      "index": 0, 'perc': h, 'time': (h ? 100 : 10)
    }); dh = h; }
    if (dm !== m) { clock.radialMultiProgress("to", {
      "index": 1, 'perc': m, 'time': (m ? 100 : 10)
    }); dm = m; }
    if (ds !== s) { clock.radialMultiProgress("to", {
      "index": 2, 'perc': s, 'time': (s ? 100 : 10)
    }); ds = s; }
  }, 1000);
};

startClock();