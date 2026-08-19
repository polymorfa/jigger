__d("WAWebBizBroadcastsFeatureEligibilityModal.react", [
	"fbt",
	"WAWebBizBroadcastsModalWarningIcon.react",
	"WAWebModal.react",
	"WDSButton.react",
	"WDSText.react",
	"WDSTextualLink.react",
	"formatDate",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = { controlsStyle: {
		paddingInlineEnd: "xyri2b",
		paddingInlineStart: "x1c1uobl",
		paddingTop: "xl7twdi",
		$$css: !0
	} };
	function d(e) {
		var t = e.eligibility;
		return t.status === "FAIL" || t.status === "PAUSED" ? s._(
			/*BTDS*/
			""
		) : t.status === "WARNING" ? s._(
			/*BTDS*/
			""
		) : null;
	}
	d.displayName = d.name + " [from " + i.id + "]";
	function m(e) {
		var t = e.eligibility, n = t.expiration, o = n == null ? null : r("formatDate")(n, r("formatDate").DEFAULT_FORMAT);
		return t.status === "FAIL" ? u.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDeemphasized",
			children: s._(
				/*BTDS*/
				"",
				[s._implicitParam("=m1", u.jsx(r("WDSTextualLink.react"), {
					href: "https://www.facebook.com/legal/business-broadcasts",
					children: s._(
						/*BTDS*/
						""
					)
				}))]
			)
		}) : t.status === "WARNING" ? u.jsxs(u.Fragment, { children: [
			u.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDeemphasized",
				children: s._(
					/*BTDS*/
					"",
					[s._implicitParam("=m1", u.jsx(r("WDSTextualLink.react"), {
						href: "https://www.facebook.com/legal/business-broadcasts",
						children: s._(
							/*BTDS*/
							""
						)
					}))]
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
					"",
					[s._implicitParam("=m1", u.jsx(r("WDSTextualLink.react"), {
						href: "https://business.whatsapp.com/policy",
						children: s._(
							/*BTDS*/
							""
						)
					}))]
				)
			})
		] }) : t.status === "PAUSED" ? u.jsxs(u.Fragment, { children: [
			u.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDeemphasized",
				children: s._(
					/*BTDS*/
					"",
					[s._implicitParam("=m1", u.jsx(r("WDSTextualLink.react"), {
						href: "https://www.facebook.com/legal/business-broadcasts",
						children: s._(
							/*BTDS*/
							""
						)
					}))]
				)
			}),
			o != null && u.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDeemphasized",
				children: s._(
					/*BTDS*/
					"",
					[s._param("expiration_date", o)]
				)
			}),
			u.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDeemphasized",
				children: s._(
					/*BTDS*/
					"",
					[s._implicitParam("=m1", u.jsx(r("WDSTextualLink.react"), {
						href: "https://business.whatsapp.com/policy",
						children: s._(
							/*BTDS*/
							""
						)
					}))]
				)
			})
		] }) : null;
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p(e) {
		var t = e.eligibility, n = e.onCancel;
		return u.jsx(o("WAWebModal.react").Modal, {
			type: o("WAWebModal.react").ModalTheme.BusinessBroadcastUploadModal,
			actions: u.jsx(r("WDSButton.react"), {
				label: s._(
					/*BTDS*/
					""
				),
				variant: "filled",
				onPress: n,
				testid: "biz-broadcasts-feature-eligibility-modal-ok-button"
			}),
			onOverlayClick: n,
			testid: "biz-broadcasts-feature-eligibility-modal",
			controlsStyle: c.controlsStyle,
			children: u.jsxs("div", {
				className: "x78zum5 xdt5ytf x1f0uite xh8yej3",
				children: [
					u.jsx(r("WAWebBizBroadcastsModalWarningIcon.react"), {}),
					u.jsx(r("WDSText.react"), {
						type: "Headline2",
						colorName: "contentDefault",
						textAlign: "center",
						children: u.jsx(d, { eligibility: t })
					}),
					u.jsx(m, { eligibility: t })
				]
			})
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.WAWebBizBroadcastsFeatureEligibilityModal = p;
}), 226);
