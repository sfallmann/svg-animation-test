window.onload=function() {
  
  var ad = document.getElementById('hmfse');
  var svgDoc = ad.contentDocument;

  svgDoc.onclick = function(){
    window.open(clickTag);
  } 

  var splitgear = svgDoc.getElementById('splitgear');
  var gears = svgDoc.getElementsByClassName('grey-gear')
  var textFrame1 = svgDoc.getElementById('text-frame-1');
  var textFrame2 = svgDoc.getElementById('text-frame-2');
  var textFrame3 = svgDoc.getElementById('text-frame-3');
  var oneOfAKind = svgDoc.querySelectorAll('#one-of-a-kind path');
  
  TweenMax.to(gears, 2, {rotation:"360", transformOrigin:"center center", ease:Linear.easeNone, repeat:-1});
  TweenMax.to(splitgear, 2.5, {rotation:"360", transformOrigin:"center center", ease:Linear.easeNone, repeat:-1, repeatDelay:2.5, yoyo:true});

  var tlMsgs = new TimelineMax({repeat:-1, repeatDelay:2});
  tlMsgs.add(TweenMax.to(textFrame1, 2, {css: {'fill-opacity': 1}, delay:1}));
  tlMsgs.add(TweenMax.to(textFrame1, 2, {css: {'fill-opacity': 0}, delay:1}));
  tlMsgs.add(TweenMax.to(textFrame2, 2, {css: {'fill-opacity': 1}, delay:1}));
  tlMsgs.add(TweenMax.to(oneOfAKind, 2, {fill: '#ffff66'}));
  tlMsgs.add(TweenMax.to(oneOfAKind, 2, {attr: {filter: "url(#glow)"}}),-.5);        
  tlMsgs.add(TweenMax.to("#glow", 8, {attr:{stdDeviation: 0}}),-3.5);      
  tlMsgs.add(TweenMax.to(textFrame2, 2, {css: {'fill-opacity': 0}, delay:1}));
  tlMsgs.add(TweenMax.to(textFrame3, 2, {css: {'fill-opacity': 1}, delay:1}));
  tlMsgs.add(TweenMax.to(textFrame3, 2, {css: {'fill-opacity': 0}, delay:1}));

};  