__d("WAWebBizAdCreationErrorModal.react", [
	"fbt",
	"WAWebFlex.react",
	"WAWebModal.react",
	"WAWebModalManager",
	"WDSButton.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = {
		container: {
			alignItems: "x6s0dn4",
			justifyContent: "xl56j7k",
			rowGap: "x1j3ira4",
			$$css: !0
		},
		headerText: {
			alignSelf: "xkh2ocl",
			textAlign: "x2b8uid",
			$$css: !0
		}
	};
	function d(e) {
		var t = e.errorMessage, n = s._(
			/*BTDS*/
			""
		), a = t != null ? t : s._(
			/*BTDS*/
			""
		);
		return u.jsx(o("WAWebModal.react").Modal, {
			actions: u.jsx(m, {}),
			type: o("WAWebModal.react").ModalTheme.BizToolsAdCreationSuccess,
			children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
				xstyle: c.container,
				children: [u.jsx(r("WDSText.react"), {
					colorName: "contentDefault",
					type: "Headline1",
					xstyle: c.headerText,
					children: n
				}), u.jsx(r("WDSText.react"), {
					colorName: "contentDeemphasized",
					textAlign: "center",
					type: "Body2",
					children: a
				})]
			})
		});
	}
	d.displayName = d.name + " [from " + i.id + "]";
	function m() {
		return u.jsx(r("WDSButton.react"), {
			label: s._(
				/*BTDS*/
				""
			),
			onPress: o("WAWebModalManager").closeModalManager,
			size: "medium",
			testid: "error-modal-try-again-button",
			variant: "filled"
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = d;
}), 226);
