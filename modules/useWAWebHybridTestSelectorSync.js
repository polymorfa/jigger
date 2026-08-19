__d("useWAWebHybridTestSelectorSync", [
	"gkx",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = (e || (e = o("react"))).useEffect;
	function u() {
		var e = o("react-compiler-runtime").c(1), t;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = [], e[0] = t) : t = e[0], s(c, t);
	}
	function c() {
		if (!(!r("gkx")("3457") || !r("gkx")("4112") || r("gkx")("26258"))) {
			var e = d;
			e();
			var t = new MutationObserver(function(t) {
				var n = !1;
				for (var r of t) {
					if (r.addedNodes.length > 0) {
						n = !0;
						break;
					}
					if (r.type === "attributes" && r.attributeName === "data-testid") {
						n = !0;
						break;
					}
				}
				n && e();
			});
			return t.observe(document.body, {
				attributes: !0,
				attributeFilter: ["data-testid"],
				childList: !0,
				subtree: !0
			}), function() {
				t.disconnect();
			};
		}
	}
	function d() {
		var e = document.querySelectorAll("[data-testid]");
		e.forEach(m);
	}
	function m(e) {
		var t, n, r = (t = (n = e.getAttribute("data-testid")) == null ? void 0 : n.split(" ")) != null ? t : [], o = r[0], a = e.getAttribute("id"), i = e.getAttribute("aria-label");
		if (o != null && a == null && e.setAttribute("id", o), o != null && i == null) {
			var l, s = (l = e.textContent) == null ? void 0 : l.trim(), u = s != null && s !== "" ? s : o;
			e.setAttribute("aria-label", u);
		}
	}
	l.useHybridTestSelectorSync = u;
}), 98);
