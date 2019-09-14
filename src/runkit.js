// Based off embed.runkit.com. All credit goes to them.

(function (global) {
  (function (entrypoint, files, compilations, implicitRequires) {
    function cachedRequire(index) {
      const module = Module._cache[index] || new Module(index);

      return module.exports;
    }

    function Module(index) {
      Module._cache[index] = this;

      const file = files[index];
      const filename = file[0];

      const precompiled = compilations[file[1]];
      const references = file[2];

      this.exports = {};
      this.__dirname = filename.split("/").slice(0, -1).join("/");
      this.__filename = filename;
      this.require = function require(index) {
        if (typeof index !== "number")
          throw TypeError("Expected index require");

        const reference = references[index];

        if (typeof reference !== "number")
          throw TypeError("Could not find file referenced at " + index);

        return cachedRequire(reference);
      }

      precompiled.call(
        this.exports, /*this*/
        this.exports,
        this.require,
        this,
        this.__filename,
        this.__dirname);
    }

    Module._cache = {};

    if (implicitRequires)
      implicitRequires(cachedRequire);

    cachedRequire(entrypoint);
  })
    (0, [["/app/embed.runkit.com/embed.runkit.com.js", 0, [1, 3,]], ["/app/embed.runkit.com/get-current-script-tag.js", 1, []], ["/app/embed.runkit.com/notebook.js", 2, []], ["/app/embed.runkit.com/public-api.js", 3, [2,]],], [(function (t, e) {
      window.RunKit || window.Tonic || (window.RunKit = window.Tonic = e(1))
      var a, n = e(0)
      function i(t) { return /^data-env-/.test(t.name) } function o(t) { return t.name.replace("data-env-", "").toLowerCase() + "=" + t.value } a = function () {
        var t = n.getAttribute("data-element-id"), e = n.getAttribute("data-notebook-url"), a = n.getAttribute("data-load-callback"), r = n.getAttribute("data-node-version"), d = n.getAttribute("data-title"), u = n.getAttribute("data-preamble"), l = n.getAttribute("data-mode"), m = n.getAttribute("data-min-height"), b = n.getAttribute("data-package-timestamp"), c = n.getAttribute("data-tab-width"), g = (n.getAttribute("data-syntax-theme") || "").replace(/-syntax$/, ""), s = n.getAttribute("data-ui-theme"), w = n.getAttribute("data-theme") || "", A = n.getAttribute("data-gutter-style"), v = n.getAttribute("data-evaluate-on-load"), h = [].filter.call(n.attributes, i).map(o)
        if (t || e) {
          var p = t && document.getElementById(t), y = n.hasAttribute("data-read-only")
          if (p) {
            var f = RunKit.sourceFromElement(p)
            p.innerHTML = ""
          } else (p = document.createElement("div")).className = "runkit-notebook-container", n.parentNode.replaceChild(p, n)
          RunKit.createNotebook({ element: p, source: f, preamble: u, notebookURL: e, readOnly: y, env: h, mode: l, nodeVersion: r, title: d, onLoad: a && function () { window[a] && window[a]() }, packageTimestamp: b, tabSize: c, syntaxTheme: g, uiTheme: s, theme: w, gutterStyle: A, minHeight: m, evaluateOnLoad: v })
        }
      }, "complete" === document.readyState ? a() : window.addEventListener("load", a)
    })
      , (function (t, e, n) {
        var c
        n.exports = document.currentScript || (c = document.getElementsByTagName("script"))[c.length - 1]
      })
      , (function (e, t, n) {
        var o = "https://runkit.com", s = 0, i = 1, a = {}
        function r(e) { return !!e } function m(e) { return "env=" + encodeURIComponent(e) } function h(e) {
          var t = this.name = "runkit-embed-" + (s++).toString()
          window.RunKit["$" + t] = this
          var n = e.element, i = (e.source || "").trim(), h = e.readOnly, c = e.mode, u = e.nodeVersion, l = e.title, g = e.packageTimestamp, y = parseInt(e.minHeight, 10) + 30 || 124.25, f = e.preamble, _ = e.tabSize && parseInt(e.tabSize, 10), v = e.minHeight, b = e.theme, S = e.syntaxTheme && e.syntaxTheme.replace(/-syntax$/, ""), T = e.uiTheme, w = "inside" === e.gutterStyle ? "inside" : "outside", M = e.evaluateOnLoad, x = []
          if (["syntaxTheme", "uiTheme", "uiStyles", "styles"].forEach(function (t) { e[t] && (x.push(t), p("option", t, "theme", "https://runkit.com/docs/theme-maker")) }), "" !== i && (y = Math.max(18.75 * i.split("\n").length + 49.25, y)), g) {
            var k = new Date(parseInt(g, 10))
            isNaN(k) && (console.error("Ignoring invalid provided timestamp ('".concat(g, "'). Expected a UTC timestamp in milliseconds (e.g. '").concat((new Date).getTime(), "').")), g = null)
          } var U = { name: t, preamble: (f || "").trim(), location: window.location.toString(), readOnly: h, mode: c, nodeVersion: u, minHeight: v || "", title: l, packageTimestamp: g, tabSize: _, theme: b, syntaxTheme: S, uiTheme: T, gutterStyle: w, evaluateOnLoad: M, usedDeprecatedOptions: JSON.stringify(x) }
          i && window.btoa ? U.base64source = window.btoa(unescape(encodeURIComponent(i.trim()))) : U.source = (i || "").trim()
          var L = "?" + Object.keys(U).map(function (e) { if (void 0 !== U[e] && null !== U[e]) return e + "=" + encodeURIComponent(U[e]) }).filter(r).join("&")
          Array.isArray(e.env) && (L += "&" + e.env.map(m).join("&"))
          var I = document.createElement("iframe")
          I.setAttribute("scrolling", "no")
          I.style.overflow = "hidden"
          this.iframe = I
          if (I.src = o + "/e" + L, I.style.height = y + "px", I.style.width = "100%", I.style.padding = "0px", I.style.overflow = "hidden", I.style.margin = "0px", I.style.border = "0px", I.style.backgroundColor = "transparent", I.frameBorder = "0", I.allowTransparency = "true", I.name = t, d(I, U.gutterStyle), !n instanceof Element) throw Error("You must provide a valid parent element for the embedded notebook.\nSee https://runkit.com/docs/embed for documentation.")
          n.appendChild(I), this.handleMessage = function (n) {
            try {
              if (n.origin !== o) return
              var s = n.data
              if (s.name === t) switch (s.event) {
                case "height": I.style.height = s.height + "px"
                  break
                case "loaded": e.onLoad && e.onLoad(this)
                  break
                case "url": this.URL = s.shareableURL, this.endpointURL = s.endpointURL, e.onURLChanged && e.onURLChanged(this)
                  break
                case "evaluate": e.onEvaluate && e.onEvaluate()
                  break
                case "callback": var i = a[s.message_id]
                  delete a[s.message_id], i(s.message)
              }
            } catch (e) { console.error('Exception in event "' + s.event + '": ' + e.message, e.stack) }
          }.bind(this), window.addEventListener("message", this.handleMessage)
        } function d(e, t) { e.style.width = "outside" === t ? "calc(100% + 200px)" : "100%", e.style.marginLeft = "outside" === t ? "calc(-100px)" : "0px" } function p(e, t, n, o) { console.error("The " + e + " '" + t + "' has been deprecated in favor of '" + n + "'. Check out " + o + " for more information.") } function c(e) { return function () { !function (e, t, n) { p("method", e, t, n) }(e, "theme", "https://runkit.com/docs/theme-maker") } } n.exports = h, h.prototype._sendMessage = function (e, t) {
          var n = i++
          a[n] = t
          var s = { name: this.name, message_id: n, message: e }
          this.iframe.contentWindow.postMessage(s, o)
        }, h.prototype.getSource = function (e) { this._sendMessage({ method: "get_source" }, e) }, h.prototype.setSource = function (e, t) { this._sendMessage({ method: "set_source", source: e }, t) }, h.prototype.setMode = function (e, t) { this._sendMessage({ method: "set_mode", mode: e }, t) }, h.prototype.setMinHeight = function (e, t) { this._sendMessage({ method: "set_min_height", minHeight: e }, t) }, h.prototype.setNodeVersion = function (e, t) { this._sendMessage({ method: "set_node_version", nodeVersion: e }, t) }, h.prototype.setPreamble = function (e, t) { this._sendMessage({ method: "set_preamble", preamble: e }, t) }, h.prototype.getPreamble = function (e) { this._sendMessage({ method: "get_preamble" }, e) }, h.prototype.getTheme = function (e, t) { this._sendMessage({ method: "get_theme", theme: e }, t) }, h.prototype.setTheme = function (e, t) { this._sendMessage({ method: "set_theme", theme: e }, t) }, h.prototype.setSyntaxTheme = h.prototype.setTheme, h.prototype.setUITheme = function (e, t) { this._sendMessage({ method: "set_ui_theme", uiTheme: e }, t) }, h.prototype.setGutterStyle = function (e, t) { d(this.iframe, e), this._sendMessage({ method: "set_gutter_style", gutterStyle: e }, t) }, h.prototype.evaluate = function (e) { this._sendMessage({ method: "evaluate" }, e) }, h.prototype.destroy = function () { this.iframe.remove(), window.removeEventListener("message", this.handleMessage), delete window.RunKit["$" + this.name] }, h.prototype.getShareableURL = function (e) { this._sendMessage({ method: "get_shareable_url" }, e) }, h.prototype.setSyntaxTheme = c("setSyntaxTheme"), h.prototype.setUITheme = c("setUITheme"), h.prototype.setUIStyles = c("setUIStyles"), h.prototype.setStyles = c("setStyles")
      })
      , (function (n, t, e) {
        var r = t(0)
        e.exports = {
          createNotebook: function (n) { return new r(n) }, sourceFromElement: function (n) {
            for (var t = n.textContent || n.innerText || "", e = (t = (t = t.replace(/\r\n/g, "\n")).replace(/\r/g, "\n")).split("\n"); e.length && 0 === e[0].trim().length;)e.shift()
            var r = e.length > 0 && e[0].length - e[0].replace(/^\s+/, "").length
            return e.map(function (n) { return n.substring(0, r).match(/[^\s]/) ? n : n.substring(r) }).join("\n")
          }
        }
      })
      ,])
})(window)
