__d("WAWebDeveloperMenuQuickPromotionFetchResultModal.react", [
	"WAWebButton.react",
	"WAWebFbtCommon",
	"WAWebKeyboardHotKeys.react",
	"WAWebModal.react",
	"WAWebModalManager",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = e.lines, n = e.title, a = s.jsx(o("WAWebButton.react").Button, {
			type: "primary",
			onClick: o("WAWebModalManager").closeModalManager,
			children: r("WAWebFbtCommon")("Close")
		});
		return s.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
			handlers: { escape: o("WAWebModalManager").closeModalManager },
			children: s.jsx("div", { children: s.jsx(o("WAWebModal.react").Modal, {
				title: n,
				actions: a,
				testid: "qp-manager-fetch-result-modal",
				children: s.jsx("div", {
					className: "x78zum5 xdt5ytf x129bwdz xw2csxc x1odjw0f x114jws4 xh8yej3",
					children: t.map(function(e, t) {
						return s.jsx(r("WDSText.react"), {
							type: "Body2",
							colorName: "contentDefault",
							children: e
						}, t);
					})
				})
			}) })
		});
	}
	u.displayName = u.name + " [from " + i.id + "]", l.default = u;
}), 98);
