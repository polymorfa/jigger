__d("WAWebLocaleManualUpdateButterbar.react", [
	"fbt",
	"WALogger",
	"WAWebBuildConstants",
	"WAWebL10N",
	"WDSBanner.react",
	"react",
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
		var t = e.locale, n = r("useWAWebAsync")(function() {
			return _(t);
		}, [t]), a = r("useWAWebPrevious")(n.value), i;
		if (n.loading) if (a != null) i = a;
		else return null;
		else n.error ? i = p() : i = n.value;
		return m.jsx("div", {
			dir: i.dir,
			className: "x1380le5 x14mko6t xefnzgg x1uvdrpn",
			children: m.jsx(r("WDSBanner.react"), {
				type: "warning",
				title: i.strings.title,
				body: i.strings.text,
				actionText: i.strings.action_text,
				onAction: function() {
					o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[reload] LocaleManualUpdateButterbar.onAction"]))), self.location.reload();
				}
			})
		});
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = f;
}), 226);
