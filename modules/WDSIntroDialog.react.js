__d("WDSIntroDialog.react", [
	"WDSBulletList.react",
	"WDSButtonGroup.react",
	"WDSDialog.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = e.bullets, n = e.description, o = e.footnote, a = e.illustration, i = e.onDismiss, l = e.onPrimary, u = e.onSecondary, c = e.open, d = e.primaryLabel, m = e.secondaryLabel, p = e.size, _ = p === void 0 ? "md" : p, f = e.title, g = s.jsx(r("WDSButtonGroup.react"), {
			footnote: o,
			orientation: "stacked",
			primaryButtonProps: {
				label: d,
				onPress: l,
				variant: "filled"
			},
			secondaryButtonProps: m != null && u != null ? {
				label: m,
				onPress: u,
				variant: "outline"
			} : void 0,
			width: "fill"
		});
		return s.jsx(r("WDSDialog.react"), {
			closeButton: !0,
			description: n,
			footer: g,
			headerMedia: a,
			headerType: "expressive",
			layoutType: "expressive",
			onDismiss: i,
			open: c,
			size: _,
			title: f,
			children: t != null && t.length > 0 ? s.jsx(r("WDSBulletList.react"), { bullets: t }) : null
		});
	}
	u.displayName = u.name + " [from " + i.id + "]", l.default = u;
}), 98);
