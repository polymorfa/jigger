__d("WAWebVoipCallShortcutsPopup.react", [
	"fbt",
	"WAWebActions",
	"WAWebConfirmPopup.react",
	"WAWebFbtCommon",
	"WAWebKeyboardShortcut.react",
	"WAWebKeyboardShortcuts",
	"WAWebModal.react",
	"WAWebUA",
	"WDSText.react",
	"react",
	"useWAWebVoipModalManager"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c(e) {
		if (o("WAWebUA").UA.os !== o("WAWebUA").OS_TYPE.MAC) return !0;
		var t = o("WAWebKeyboardShortcuts").getShortcutDisplayModifiers(e);
		return t == null || !t.includes("Option");
	}
	var d = Array.from(o("WAWebKeyboardShortcuts").CALLING_ACTIONS).filter(c);
	function m(e) {
		return String(e).toLowerCase();
	}
	function p() {
		var e = r("useWAWebVoipModalManager")(), t = e.closeModal;
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "call-keyboard-shortcuts"
			},
			onOK: t,
			okText: r("WAWebFbtCommon")("OK"),
			type: o("WAWebModal.react").ModalTheme.Flex,
			children: u.jsxs("div", {
				className: "x9f619 x78zum5 xdt5ytf xm7jadh x6ikm8r x10wlt62 xyamay9 x1l90r2v x106a9eq x1xnnf8n",
				"data-testid": "voip_call_shortcuts_popup",
				children: [u.jsx(r("WDSText.react"), {
					type: "Headline2",
					colorName: "contentDefault",
					children: s._(
						/*BTDS*/
						""
					)
				}), u.jsx("div", {
					className: "x78zum5 xdt5ytf x12lumcd x2lwn1j xw2csxc x1odjw0f x98l61r",
					"data-testid": "voip_call_shortcuts_popup_list",
					children: d.map(function(e) {
						var t = o("WAWebActions").getLabel(e);
						return t === "" ? null : u.jsxs("div", {
							className: "x78zum5 x1okw0bk x6s0dn4 x1nxh6w3 x1yrsyyn x10b6aqq x1c1uobl xyri2b",
							"data-testid": "voip_call_shortcuts_popup_row_" + m(e),
							children: [u.jsx("div", {
								className: "x1iyjqo2 x1sa5p1d x6ikm8r x10wlt62 x1f6kntn",
								title: t,
								children: t
							}), u.jsx("div", {
								className: "x1iyjqo2 xp4054r",
								children: u.jsx(o("WAWebKeyboardShortcut.react").KeyboardShortcut, {
									action: e,
									addModifiers: !0
								})
							})]
						}, String(e));
					})
				})]
			})
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 226);
