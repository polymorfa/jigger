__d("WAWebInternDogfoodingModal.react", [
	"WATimeUtils",
	"WAWebABProps",
	"WAWebConfirmPopup.react",
	"WAWebEnvironment",
	"WAWebExternalLink.react",
	"WAWebLocalStorage",
	"WAWebUserPrefsKeys",
	"WDSIconIcCampaignMegaphone.react",
	"gkx",
	"nullthrows",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useState, c = { chatIcon: {
		display: "x78zum5",
		justifyContent: "xl56j7k",
		$$css: !0
	} };
	function d() {
		var e = u(!0), t = e[0], n = e[1];
		if (!t || !r("gkx")("26258") || !o("WAWebABProps").getABPropConfigValue("web_intern_dogfooding_upsell_enabled") || r("WAWebEnvironment").isWindows) return;
		var a = f();
		if (a != null && a > o("WATimeUtils").unixTime()) return;
		var i = o("WAWebABProps").getABPropConfigValue("web_intern_dogfooding_upsell_content"), l = JSON.parse(i);
		if (l.title == null || l.web_link == null || l.ok_text == null || l.cancel_text == null) return;
		var d = async function() {
			window.location.replace(l.web_link);
		}, m = function() {
			var e = o("WAWebABProps").getABPropConfigValue("web_intern_dogfooding_upsell_snooze_duration");
			_(o("WATimeUtils").unixTime() + e), n(!1);
		}, p = s.jsx("div", {
			className: "xh8yej3 xpyat2d x1f6kntn x1fc57z9 x1yc453h xlese2p xviac27",
			children: s.jsxs("div", { children: [
				"Help us with dogfooding by moving to the ",
				s.jsx(o("WAWebExternalLink.react").ExternalLink, {
					href: l.web_link,
					className: "x117nqv4",
					children: "internal version"
				}),
				" ",
				"of the web client. Share your feedback/bugs on the ",
				s.jsx(o("WAWebExternalLink.react").ExternalLink, {
					href: l.group_link,
					className: "x117nqv4",
					children: "WhatsApp Web Feedback"
				}),
				" on Workplace."
			] })
		});
		return s.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
			onOK: d,
			onOverlayClick: m,
			okText: l.ok_text,
			onCancel: m,
			cancelText: l.cancel_text,
			children: [s.jsx(r("WDSIconIcCampaignMegaphone.react"), {
				width: 120,
				height: 120,
				xstyle: c.chatIcon
			}), s.jsxs("div", {
				className: "xh8yej3",
				children: [s.jsx("div", {
					className: "x1603h9y xjs9k72 x1fc57z9 x2b8uid x1p57kb1 xvtqlqk xvpt6g3 xdx6fka",
					children: s.jsx("b", { children: l.title })
				}), p]
			})]
		});
		function _(e) {
			r("nullthrows")(r("WAWebLocalStorage")).setItem(o("WAWebUserPrefsKeys").KEYS.WA_WEB_ID_UPSELL_SNOOZE_UNTIL, String(e));
		}
		function f() {
			var e = r("nullthrows")(r("WAWebLocalStorage")).getItem(o("WAWebUserPrefsKeys").KEYS.WA_WEB_ID_UPSELL_SNOOZE_UNTIL);
			return e == null ? null : Number.parseInt(e, 10);
		}
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
