__d("WAWebBlockContactDialogV2.react", [
	"fbt",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebName.react",
	"WDSBaseCheckbox.react",
	"WDSConfirmDialog.react",
	"WDSDialogBridge",
	"WDSText.react",
	"react",
	"useWAWebToggle"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = {
		marginTop18: {
			marginTop: "xhrpt6u",
			$$css: !0
		},
		marginTop6: {
			marginTop: "x1k70j0n",
			$$css: !0
		}
	};
	function d(e) {
		var t = e.contact, n = e.isReportPreChecked, a = e.onBlock, i = e.onCancel, l = e.onReportSpamBlock, d = r("useWAWebToggle")(n), m = d[0], p = d[1], _ = u.jsx(o("WAWebName.react").Name, {
			contact: t,
			breakWord: !0
		}), f = s._(
			/*BTDS*/
			"",
			[s._param("contact", _)]
		), g = s._(
			/*BTDS*/
			""
		), h = s._(
			/*BTDS*/
			""
		), y = u.jsx(o("WAWebExternalLink.react").ExternalLink, {
			href: o("WAWebFaqUrl").getBlockingReportingFaqUrl(),
			testid: "learn-more-link",
			children: r("WAWebFbtCommon")("Learn more")
		}), C = s._(
			/*BTDS*/
			"",
			[s._param("link to learn more", y)]
		), b = u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "start",
			columnGap: 8,
			xstyle: c.marginTop18,
			children: [u.jsx(r("WDSBaseCheckbox.react"), {
				value: m,
				onChange: p,
				id: "menu-icon-block",
				testid: "report-contact-checkbox"
			}), u.jsxs(o("WAWebFlex.react").FlexColumn, { children: [u.jsx(r("WDSText.react"), {
				type: "Body2Emphasized",
				colorName: "contentDefault",
				testid: "report-contact-title",
				children: h
			}), u.jsx(r("WDSText.react"), {
				type: "Body3",
				colorName: "contentDeemphasized",
				xstyle: c.marginTop6,
				testid: "report-contact-subtext",
				children: C
			})] })]
		}), v = u.jsxs(o("WAWebFlex.react").FlexColumn, { children: [g, b] }), S = s._(
			/*BTDS*/
			"",
			[s._param("content", v)]
		), R = function() {
			m ? l() : a(), o("WDSDialogBridge").closeWDSDialog();
		}, L = function() {
			o("WDSDialogBridge").closeWDSDialog(), i();
		};
		return u.jsx(r("WDSConfirmDialog.react"), {
			title: f,
			description: S,
			confirmLabel: r("WAWebFbtCommon")("Block"),
			destructive: !0,
			onConfirm: R,
			onDismiss: L,
			open: !0
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
