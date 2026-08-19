__d("WAWebVoipE2EInfoModal.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFbtCommon",
	"WDSText.react",
	"react",
	"useWAWebVoipModalManager"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.isCurrentUserCoex, n = e.isPeerCoex, a = r("useWAWebVoipModalManager")(), i = a.closeModal, l = n === !0 || t === !0, c = function() {
			var e = l ? o("WAWebFaqUrl").getCoexHostedFaqUrl() : o("WAWebFaqUrl").getE2EFaqUrl();
			o("WAWebExternalLink.react").openExternalLink(e), i();
		}, d = function() {
			i();
		}, m = r("WAWebFbtCommon")("OK"), p = s._(
			/*BTDS*/
			""
		);
		return n === !0 ? u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			testid: "voip-e2e-info-modal",
			onOK: d,
			okText: m,
			onCancel: c,
			cancelText: p,
			children: u.jsxs("div", {
				className: "x78zum5 xdt5ytf x6s0dn4 x2b8uid x1p57kb1 xvtqlqk xvpt6g3 xdx6fka x1qvou4u x1s70e7g",
				children: [u.jsx(r("WDSText.react"), {
					type: "Body2",
					colorName: "contentDeemphasized",
					children: s._(
						/*BTDS*/
						""
					)
				}), u.jsx(r("WDSText.react"), {
					type: "Body2",
					colorName: "contentDeemphasized",
					children: s._(
						/*BTDS*/
						""
					)
				})]
			})
		}) : t === !0 ? u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			testid: "voip-e2e-info-modal",
			onOK: d,
			okText: m,
			onCancel: c,
			cancelText: p,
			children: u.jsxs("div", {
				className: "x78zum5 xdt5ytf x6s0dn4 x2b8uid x1p57kb1 xvtqlqk xvpt6g3 xdx6fka x1qvou4u x1s70e7g",
				children: [
					u.jsx(r("WDSText.react"), {
						type: "Body2",
						colorName: "contentDeemphasized",
						children: s._(
							/*BTDS*/
							""
						)
					}),
					u.jsx(r("WDSText.react"), {
						type: "Body2",
						colorName: "contentDeemphasized",
						children: s._(
							/*BTDS*/
							""
						)
					}),
					u.jsx(r("WDSText.react"), {
						type: "Body2",
						colorName: "contentDeemphasized",
						children: s._(
							/*BTDS*/
							""
						)
					})
				]
			})
		}) : u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			testid: "voip-e2e-info-modal",
			onOK: d,
			okText: m,
			onCancel: c,
			cancelText: p,
			children: u.jsxs("div", {
				className: "x78zum5 xdt5ytf x6s0dn4 x2b8uid x1p57kb1 xvtqlqk xvpt6g3 xdx6fka x1qvou4u x1s70e7g",
				children: [u.jsx(r("WDSText.react"), {
					type: "Headline1",
					colorName: "contentDefault",
					children: s._(
						/*BTDS*/
						""
					)
				}), u.jsx(r("WDSText.react"), {
					type: "Body2",
					colorName: "contentDeemphasized",
					children: s._(
						/*BTDS*/
						""
					)
				})]
			})
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
