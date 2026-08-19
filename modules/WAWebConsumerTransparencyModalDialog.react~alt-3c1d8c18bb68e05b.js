__d("WAWebConsumerTransparencyModalDialog.react", [
	"fbt",
	"WAWebCTWAGatingUtils",
	"WAWebConfirmPopup.react",
	"WAWebCtwaConsumerDisclosureWamEvent",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFlex.react",
	"WAWebModal.react",
	"WAWebModalManager",
	"WAWebSettingsSecurityIcon.react",
	"WAWebSingleChevronInCircleIcon.react",
	"WAWebText_DONOTUSE.react",
	"WAWebWamEnumDisclosureAction",
	"WAWebWamEnumDisclosureType",
	"WAWebWdsPictoMetaDataChevronIcon.react",
	"WDSIconIcVisibilityOff.react",
	"WDSMargins.stylex",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useEffect, d = { marginTop36: {
		marginTop: "xseo6mj",
		$$css: !0
	} }, m = {
		fullWidth: {
			width: "xh8yej3",
			$$css: !0
		},
		bulletIconColorNew: {
			color: "xhslqc4",
			$$css: !0
		}
	};
	function p() {
		o("WAWebModalManager").ModalManager.open(u.jsx(f, {}));
	}
	function _() {
		var e = u.jsx(o("WAWebSingleChevronInCircleIcon.react").SingleChevronInCircleIcon, {
			height: 24,
			width: 24,
			xstyle: m.bulletIconColorNew
		}), t = e, n = u.jsx(r("WDSIconIcVisibilityOff.react"), {
			height: 24,
			width: 24,
			xstyle: m.bulletIconColorNew
		}), a = u.jsx(o("WAWebWdsPictoMetaDataChevronIcon.react").WdsPictoMetaDataChevronIcon, {
			width: 88,
			height: 88
		}), i = s._(
			/*BTDS*/
			""
		), l = o("WAWebCTWAGatingUtils").isCTWATosFilteringEnabled() && o("WAWebCTWAGatingUtils").showCTWACCICompliantUI();
		return u.jsxs(o("WAWebFlex.react").FlexColumn, { children: [
			u.jsx(o("WAWebFlex.react").FlexRow, {
				justify: "center",
				xstyle: [m.fullWidth, o("WDSMargins.stylex").wdsMargins.marginBottom8],
				children: a
			}),
			u.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
				size: "20",
				color: "dark",
				weight: "medium",
				xstyle: o("WDSMargins.stylex").wdsMargins.marginTop12,
				children: s._(
					/*BTDS*/
					""
				)
			}),
			u.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
				size: "16",
				weight: "normal",
				color: "dark",
				xstyle: o("WDSMargins.stylex").wdsMargins.marginTop16,
				children: s._(
					/*BTDS*/
					"",
					[s._implicitParam("=m2", u.jsx(o("WAWebExternalLink.react").ExternalLink, {
						href: o("WAWebFaqUrl").getConsumerTransparencyHCAUrl(),
						children: s._(
							/*BTDS*/
							""
						)
					}))]
				)
			}),
			u.jsxs(o("WAWebFlex.react").FlexRow, {
				justify: "center",
				align: "center",
				xstyle: d.marginTop36,
				children: [n, u.jsxs(o("WAWebText_DONOTUSE.react").TextSpan, {
					size: "13",
					color: "dark",
					xstyle: o("WDSMargins.stylex").wdsMargins.marginStart24,
					children: [s._(
						/*BTDS*/
						""
					), l && "."]
				})]
			}),
			u.jsxs(o("WAWebFlex.react").FlexRow, {
				justify: "center",
				align: "center",
				xstyle: o("WDSMargins.stylex").wdsMargins.marginTop20,
				children: [t, u.jsxs(o("WAWebText_DONOTUSE.react").TextSpan, {
					size: "13",
					color: "dark",
					xstyle: o("WDSMargins.stylex").wdsMargins.marginStart24,
					children: [i, l && "."]
				})]
			}),
			u.jsxs(o("WAWebFlex.react").FlexRow, {
				justify: "center",
				align: "center",
				xstyle: o("WDSMargins.stylex").wdsMargins.marginTop20,
				children: [u.jsx(o("WAWebSettingsSecurityIcon.react").SettingsSecurityIcon, {
					height: 24,
					width: 24,
					xstyle: m.bulletIconColorNew
				}), u.jsxs(o("WAWebText_DONOTUSE.react").TextSpan, {
					size: "13",
					color: "dark",
					xstyle: o("WDSMargins.stylex").wdsMargins.marginStart24,
					children: [s._(
						/*BTDS*/
						""
					), l && u.jsxs(u.Fragment, { children: [". ", s._(
						/*BTDS*/
						""
					)] })]
				})]
			})
		] });
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f() {
		return c(function() {
			new (o("WAWebCtwaConsumerDisclosureWamEvent")).CtwaConsumerDisclosureWamEvent({
				ctwaConsumerDisclosureVersion: 1,
				disclosureAction: o("WAWebWamEnumDisclosureAction").DISCLOSURE_ACTION.SCREEN_VIEW,
				disclosureType: o("WAWebWamEnumDisclosureType").DISCLOSURE_TYPE.INFO
			}).commit();
		}, []), u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			testid: "ctwa-consumer-transparency-modal-dialog",
			type: o("WAWebModal.react").ModalTheme.UpdatedDataSharing,
			onOK: o("WAWebModalManager").closeModalManager,
			okText: s._(
				/*BTDS*/
				""
			),
			onOverlayClick: o("WAWebModalManager").closeModalManager,
			children: u.jsx(_, {})
		});
	}
	f.displayName = f.name + " [from " + i.id + "]", l.showConsumerTransparencyModalDialog = p, l.ConsumerTransparencyModalDialog = f;
}), 226);
