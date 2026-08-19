__d("useWAWebVoipPopoutTooltipFallback", [
	"WAWebUimUtils",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = (e || (e = o("react"))).useEffect, u = 1e3, c = 6, d = 4;
	function m(e) {
		var t = o("react-compiler-runtime").c(3), n, r;
		t[0] !== e ? (n = function() {
			var t;
			if (e != null) {
				var n = e, r = n.document, a = r.createElement("div");
				a.setAttribute("role", "tooltip"), a.className = "xixxii4 xpip370 xowaa7l x12w63v0 x1nzty39 x1tiyuxx x1nbhmlj xyi3aci xwf5gio x1p453bz x1suzm8a x1nxh6w3 xjb2p0i x47corl x1q2oy4v x1ncir08", a.hidden = !0, (t = r.body) == null || t.appendChild(a);
				var i = null, l = null, s = function(t) {
					var e = t.getAttribute("aria-label");
					if (!(e == null || e === "")) {
						a.textContent = e, a.hidden = !1;
						var r = t.getBoundingClientRect(), o = a.offsetWidth, i = a.offsetHeight, l = n.innerWidth, s = r.left + r.width / 2 - o / 2;
						a.style.left = Math.max(d, Math.min(s, l - o - d)) + "px";
						var u = r.top - i - c;
						a.style.top = (u >= d ? u : r.bottom + c) + "px";
					}
				}, m = function() {
					i != null && (n.clearTimeout(i), i = null), a.hidden = !0, l = null;
				}, p = function(t) {
					if (document.hidden && o("WAWebUimUtils").isTargetAnElementNode(t.target)) {
						var e = t.target.closest("[aria-label]");
						if (e == null) {
							m();
							return;
						}
						e !== l && (m(), l = e, i = n.setTimeout(function() {
							s(e);
						}, u));
					}
				}, _ = function(t) {
					l != null && (o("WAWebUimUtils").isTargetAnElementNode(t.relatedTarget) && t.relatedTarget.closest("[aria-label]") === l || m());
				};
				return r.addEventListener("pointerover", p, !0), r.addEventListener("pointerout", _, !0), (function() {
					m(), r.removeEventListener("pointerover", p, !0), r.removeEventListener("pointerout", _, !0), a.remove();
				});
			}
		}, r = [e], t[0] = e, t[1] = n, t[2] = r) : (n = t[1], r = t[2]), s(n, r);
	}
	l.default = m;
}), 98);
