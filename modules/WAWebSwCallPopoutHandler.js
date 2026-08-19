__d("WAWebSwCallPopoutHandler", [
	"WALogger",
	"WAWebEnvironment",
	"WAWebSwFeature",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c = "call/popout", d = (function(t) {
		function a() {
			for (var a, i = arguments.length, l = new Array(i), d = 0; d < i; d++) l[d] = arguments[d];
			return a = t.call.apply(t, [this].concat(l)) || this, a.matchFetch = function(t) {
				var n = t.request;
				if (n.mode !== "navigate") return !1;
				var r = new URL(n.url).origin;
				if (r !== self.location.origin) return !1;
				var a = o("WAWebSwFeature").SWFeature.parseUrl(n.url), i = (a == null ? void 0 : a.relativePath) === c;
				return i && o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
					"[sw] popout: matchFetch hit, mode=",
					", url=",
					""
				])), n.mode, n.url), i;
			}, a.onFetch = (function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
					var t = new Headers({ "Content-Type": "text/html; charset=utf-8" });
					try {
						var n = yield self.fetch("/", {
							method: "HEAD",
							credentials: "same-origin"
						}), a = [
							"cross-origin-embedder-policy",
							"cross-origin-opener-policy",
							"cross-origin-resource-policy",
							"document-isolation-policy"
						];
						for (var i of a) {
							var l = n.headers.get(i);
							l != null && (i === "cross-origin-opener-policy" && (l = l.split(";")[0].trim()), t.set(i, l));
						}
					} catch (e) {
						o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[sw] popout: HEAD / failed, COOP/COEP fallback: ", ""])), String(e)), t.set("Cross-Origin-Embedder-Policy", "require-corp"), t.set("Cross-Origin-Opener-Policy", "same-origin"), t.set("Cross-Origin-Resource-Policy", "cross-origin");
					}
					o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[sw] popout: serving synthetic HTML, headers=", ""])), [].concat(Array.from(t.keys())).join(","));
					var c = r("WAWebEnvironment").getEnvironment() !== "prod" ? "console.log('[popout shell] script executing, opener=', !!window.opener);" : "";
					return new Response("<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\">\n  </head>\n  <body>\n    <script>\n      " + c + "\n      if (window.opener) {\n        window.opener.postMessage('voipPopoutReady', window.location.origin);\n      }\n    <\/script>\n  </body>\n</html>", {
						status: 200,
						headers: t
					});
				});
				return function(t) {
					return e.apply(this, arguments);
				};
			})(), babelHelpers.assertThisInitialized(a) || babelHelpers.assertThisInitialized(a);
		}
		return babelHelpers.inheritsLoose(a, t), a;
	})(o("WAWebSwFeature").SWFeature);
	l.default = d;
}), 98);
