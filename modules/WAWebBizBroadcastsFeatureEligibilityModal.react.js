__d("WAWebBizBroadcastsFeatureEligibilityModal.react", [
	"fbt",
	"WAWebBizBroadcastsModalWarningIcon.react",
	"WAWebModal.react",
	"WDSButton.react",
	"WDSText.react",
	"WDSTextualLink.react",
	"formatDate",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = { controlsStyle: {
		paddingInlineEnd: "xyri2b",
		paddingInlineStart: "x1c1uobl",
		paddingTop: "xl7twdi",
		$$css: !0
	} };
	function d(e) {
		var t = o("react-compiler-runtime").c(2), n = e.eligibility, r;
		return t[0] !== n.status ? (r = n.status === "FAIL" || n.status === "PAUSED" ? s._(
			/*BTDS*/
			""
		) : n.status === "WARNING" ? s._(
			/*BTDS*/
			""
		) : null, t[0] = n.status, t[1] = r) : r = t[1], r;
	}
	function m(e) {
		var t = o("react-compiler-runtime").c(5), n = e.eligibility, a = n.expiration, i;
		t[0] !== a ? (i = a == null ? null : r("formatDate")(a, r("formatDate").DEFAULT_FORMAT), t[0] = a, t[1] = i) : i = t[1];
		var l = i, c;
		return t[2] !== n.status || t[3] !== l ? (c = n.status === "FAIL" ? u.jsx(r("WDSText.react"), {
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
		}) : n.status === "WARNING" ? u.jsxs(u.Fragment, { children: [
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
		] }) : n.status === "PAUSED" ? u.jsxs(u.Fragment, { children: [
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
			l != null && u.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDeemphasized",
				children: s._(
					/*BTDS*/
					"",
					[s._param("expiration_date", l)]
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
		] }) : null, t[2] = n.status, t[3] = l, t[4] = c) : c = t[4], c;
	}
	function p(e) {
		var t = o("react-compiler-runtime").c(11), n = e.eligibility, a = e.onCancel, i;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = s._(
			/*BTDS*/
			""
		), t[0] = i) : i = t[0];
		var l;
		t[1] !== a ? (l = u.jsx(r("WDSButton.react"), {
			label: i,
			variant: "filled",
			onPress: a,
			testid: "biz-broadcasts-feature-eligibility-modal-ok-button"
		}), t[1] = a, t[2] = l) : l = t[2];
		var p, _;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (p = { className: "x78zum5 xdt5ytf x1f0uite xh8yej3" }, _ = u.jsx(r("WAWebBizBroadcastsModalWarningIcon.react"), {}), t[3] = p, t[4] = _) : (p = t[3], _ = t[4]);
		var f;
		t[5] !== n ? (f = u.jsxs("div", babelHelpers.extends({}, p, { children: [
			_,
			u.jsx(r("WDSText.react"), {
				type: "Headline2",
				colorName: "contentDefault",
				textAlign: "center",
				children: u.jsx(d, { eligibility: n })
			}),
			u.jsx(m, { eligibility: n })
		] })), t[5] = n, t[6] = f) : f = t[6];
		var g;
		return t[7] !== a || t[8] !== l || t[9] !== f ? (g = u.jsx(o("WAWebModal.react").Modal, {
			type: o("WAWebModal.react").ModalTheme.BusinessBroadcastUploadModal,
			actions: l,
			onOverlayClick: a,
			testid: "biz-broadcasts-feature-eligibility-modal",
			controlsStyle: c.controlsStyle,
			children: f
		}), t[7] = a, t[8] = l, t[9] = f, t[10] = g) : g = t[10], g;
	}
	l.WAWebBizBroadcastsFeatureEligibilityModal = p;
}), 226);
