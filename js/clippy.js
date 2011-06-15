(function() {
  var Clippy;
  Clippy = (function() {
    var uniqCallback;
    uniqCallback = function() {
      var rand;
      rand = Math.floor(Math.random() * 1000001);
      return "_clippy" + rand;
    };
    function Clippy(textCB, opts) {
      var uniqCB, _ref;
      uniqCB = uniqCallback();
      window[uniqCB] = function() {
        return textCB();
      };
      opts || (opts = {});
      this.bgColor = (_ref = opts.bgColor) != null ? _ref : "white";
      this.flashParams = [];
      if (opts.label) {
        this.flashParams.push("defaultLabelText=" + opts.label);
      }
      if (opts.feedback) {
        this.flashParams.push("feedbackLabelText=" + opts.feedback);
      }
      this.flashParams.push("func=" + uniqCB);
    }
    Clippy.prototype.render = function() {
      return "<object classid='clsid:d27cdb6e-ae6d-11cf-96b8-444553540000'\n        width='110'\n        height='14'\n        id='clippy' >\n<param name='movie' value='clippy.swf'/>\n<param name='allowScriptAccess' value='always' />\n<param name='quality' value='high' />\n<param name='scale' value='noscale' />\n<param NAME='FlashVars' value='" + this.flashParams + "'>\n<param name='bgcolor' value='" + this.bgColor + "'>\n<embed src='clippy.swf'\n       width='110'\n       height='14'\n       name='clippy'\n       quality='high'\n       allowScriptAccess='always'\n       type='application/x-shockwave-flash'\n       pluginspage='http://www.macromedia.com/go/getflashplayer'\n       FlashVars='" + this.flashParams + "'\n       bgcolor='" + this.bgColor + "'\n/>";
    };
    return Clippy;
  })();
  window['Clippy'] = Clippy;
}).call(this);
