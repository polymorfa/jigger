__d("WAWebLocaleManualUpdateButterbar.react", [
	"fbt",
	"WALogger",
	"WAWebBuildConstants",
	"WAWebL10N",
	"WDSBanner.react",
	"react",
	"react-compiler-runtime",
	"useWAWebAsync",
	"useWAWebPrevious"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d, m = d || (d = o("react")), p = function() {
		return {
			dir: r("WAWebL10N").isRTL() ? "rtl" : "ltr",
			strings: {
				title: s._(
					/*BTDS*/
					""
				).toString(),
				text: s._(
					/*BTDS*/
					""
				).toString(),
				action_text: s._(
					/*BTDS*/
					""
				).toString()
			}
		};
	};
	async function _(t) {
		if (t == null || t === "") return p();
		try {
			o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["locale_change: requesting translated strings in ", ""])), t);
			var n = await self.fetch(o("WAWebBuildConstants").DYN_ORIGIN + "locale_change/?locale=" + t), r = await n.json();
			if (r && typeof r == "object") return r;
		} catch (e) {
			return o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["locale_change: Unable to get translated strings"]))).tags("non-sad"), p();
		}
		return p();
	}
	function f(e) {
		var t = o("react-compiler-runtime").c(12), n = e.locale, a, i;
		t[0] !== n ? (a = function() {
			return _(n);
		}, i = [n], t[0] = n, t[1] = a, t[2] = i) : (a = t[1], i = t[2]);
		var l = r("useWAWebAsync")(a, i), s = r("useWAWebPrevious")(l.value), u;
		if (l.loading) if (s != null) u = s;
		else return null;
		else if (l.error) {
			var c;
			t[3] === Symbol.for("react.memo_cache_sentinel") ? (c = p(), t[3] = c) : c = t[3], u = c;
		} else u = l.value;
		var d = u.dir, f;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (f = { className: "x1380le5 x14mko6t xefnzgg x1uvdrpn" }, t[4] = f) : f = t[4];
		var h;
		t[5] !== u.strings.action_text || t[6] !== u.strings.text || t[7] !== u.strings.title ? (h = m.jsx(r("WDSBanner.react"), {
			type: "warning",
			title: u.strings.title,
			body: u.strings.text,
			actionText: u.strings.action_text,
			onAction: g
		}), t[5] = u.strings.action_text, t[6] = u.strings.text, t[7] = u.strings.title, t[8] = h) : h = t[8];
		var y;
		return t[9] !== h || t[10] !== u.dir ? (y = m.jsx("div", babelHelpers.extends({ dir: d }, f, { children: h })), t[9] = h, t[10] = u.dir, t[11] = y) : y = t[11], y;
	}
	function g() {
		o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[reload] LocaleManualUpdateButterbar.onAction"]))), self.location.reload();
	}
	l.default = f;
}), 226);
