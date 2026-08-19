__d("WAWebDeveloperMenuQuickPromotionDetailsModal.react", [
	"WALogger",
	"WAWebButton.react",
	"WAWebDebugQuickPromotions",
	"WAWebFbtCommon",
	"WAWebKeyboardHotKeys.react",
	"WAWebModal.react",
	"WAWebModalManager",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c = u || (u = o("react")), d = u.useState, m = "(untitled)", p = 16, _ = 8;
	function f(e) {
		return typeof e == "number" && Number.isInteger(e) && e >= 0 && e <= 255;
	}
	function g(e) {
		var t = e.slice(0, _).join(","), n = e.length > _ ? ",…" : "";
		return "<" + e.length + " bytes: " + t + n + ">";
	}
	function h(e) {
		if (e instanceof Uint8Array) return g(Array.from(e));
		if (Array.isArray(e)) {
			if (e.length >= p && e.every(f)) {
				var t = [];
				for (var n of e) typeof n == "number" && t.push(n);
				return g(t);
			}
			return e.map(h);
		}
		if (e != null && typeof e == "object") {
			var r = Object.entries(e), o = r.length >= p && r.every(function(e, t) {
				var n = e[0];
				return n === String(t);
			}) && r.every(function(e) {
				var t = e[1];
				return f(t);
			});
			if (o) {
				var a = [];
				for (var i of r) {
					var l = i[1];
					typeof l == "number" && a.push(l);
				}
				return g(a);
			}
			var s = {};
			for (var u of r) {
				var c = u[0], d = u[1];
				s[c] = h(d);
			}
			return s;
		}
		return e;
	}
	function y(e) {
		try {
			var t;
			return (t = JSON.stringify(h(e), null, 2)) != null ? t : "Unable to serialize promotion.";
		} catch (e) {
			return "Unable to serialize promotion.";
		}
	}
	function C(e) {
		var t = e.data.titleElementValue;
		return t != null && t !== "" ? t : m;
	}
	function b(t) {
		var n = t.promotion, a = d(null), i = a[0], l = a[1], u = d(!1), m = u[0], p = u[1], _ = function(n, r) {
			m || (p(!0), l("Logging " + n + "…"), r().then(function(e) {
				var t = e === "success";
				l(n + ": " + (t ? "✓" : "✗") + " " + e);
			}).catch(function(t) {
				o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[qp-manager] ", " action threw"])), n), l(n + ": ✗ threw (see console)");
			}).finally(function() {
				return p(!1);
			}));
		}, f = function() {
			m || (p(!0), l("Logging exposure…"), r("WAWebDebugQuickPromotions").logQpExposure(n.id).then(function(e) {
				var t;
				switch (e) {
					case "falco":
						t = "exposure: sent (Falco — verify in Scuba)";
						break;
					case "EventResponseSuccess":
						t = "exposure: ✓ success";
						break;
					case "EventResponseError":
						t = "exposure: ✗ EventResponseError";
						break;
					default: t = "exposure: ✗ " + e;
				}
				l(t);
			}).catch(function(e) {
				o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[qp-manager] exposure action threw"]))), l("exposure: ✗ threw (see console)");
			}).finally(function() {
				return p(!1);
			}));
		}, g = [
			{
				label: "impression",
				run: function() {
					return _("impression", function() {
						return r("WAWebDebugQuickPromotions").logQpImpression(n.id);
					});
				}
			},
			{
				label: "primary click",
				run: function() {
					return _("primary click", function() {
						return r("WAWebDebugQuickPromotions").logQpPrimaryClick(n.id);
					});
				}
			},
			{
				label: "dismiss",
				run: function() {
					return _("dismiss", function() {
						return r("WAWebDebugQuickPromotions").logQpDismiss(n.id);
					});
				}
			},
			{
				label: "exposure",
				run: f
			}
		], h = c.jsx(o("WAWebButton.react").Button, {
			type: "primary",
			onClick: o("WAWebModalManager").closeModalManager,
			children: r("WAWebFbtCommon")("Close")
		});
		return c.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
			handlers: { escape: o("WAWebModalManager").closeModalManager },
			children: c.jsx("div", { children: c.jsx(o("WAWebModal.react").Modal, {
				title: "Quick Promotion Details",
				actions: h,
				testid: "qp-manager-details-modal",
				children: c.jsxs("div", {
					className: "xw2csxc x1odjw0f x114jws4 xh8yej3",
					children: [
						c.jsxs("div", {
							className: "x78zum5 xdt5ytf x129bwdz xefnzgg",
							children: [c.jsx(r("WDSText.react"), {
								type: "Body1Emphasized",
								colorName: "contentDefault",
								children: C(n)
							}), c.jsx(r("WDSText.react"), {
								type: "Body2",
								colorName: "contentDeemphasized",
								children: n.id
							})]
						}),
						c.jsx("div", {
							className: "x78zum5 x1a02dak x129bwdz x1trrmfo xefnzgg",
							children: g.map(function(e) {
								return c.jsx(o("WAWebButton.react").Button, {
									type: "secondary",
									disabled: m,
									onClick: e.run,
									children: "Log " + e.label
								}, e.label);
							})
						}),
						i != null ? c.jsx("div", {
							className: "xefnzgg",
							children: c.jsx(r("WDSText.react"), {
								type: "Body2",
								colorName: "contentDeemphasized",
								children: i
							})
						}) : null,
						c.jsx("pre", {
							className: "x1ey7xld x1pg5gke x126k92a x13faqbe xdj266r x14z9mp xat24cr x1lziwak x14ug900",
							children: y(n)
						})
					]
				})
			}) })
		});
	}
	b.displayName = b.name + " [from " + i.id + "]", l.default = b;
}), 98);
