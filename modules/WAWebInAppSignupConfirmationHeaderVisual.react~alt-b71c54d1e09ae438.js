__d("WAWebInAppSignupConfirmationHeaderVisual.react", [
	"fbt",
	"WAWebDefaultProfilePicture.react",
	"WAWebSignupCTAExperiment",
	"WDSFlex.stylex",
	"WDSIconIcCheck.react",
	"WDSText.react",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = {
		wrapper: {
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			borderStartStartRadius: "xyi3aci",
			borderStartEndRadius: "xwf5gio",
			borderEndEndRadius: "x1p453bz",
			borderEndStartRadius: "x1suzm8a",
			paddingTop: "x16ovd2e",
			paddingInlineEnd: "x1nzty39",
			paddingBottom: "x12xbjc7",
			paddingInlineStart: "x12w63v0",
			backgroundColor: "x1bu39yj",
			$$css: !0
		},
		badgeIcon: {
			color: "x1pse0pq",
			$$css: !0
		},
		contentWrapper: {
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			$$css: !0
		},
		fallbackPhotoBackground: {
			backgroundColor: "x16w0wmm",
			$$css: !0
		}
	};
	function m(t) {
		var n = t.experiment, a = t.onProfilePicError, i = t.profilePicUrl;
		return c.jsx("div", babelHelpers.extends({ "data-testid": "inapp-signup-confirmation-header" }, (e || (e = r("stylex"))).props(o("WDSFlex.stylex").wdsFlex.flexColumn, d.wrapper), { children: c.jsxs("div", babelHelpers.extends({}, e.props(o("WDSFlex.stylex").wdsFlex.flexRowCenter, o("WDSFlex.stylex").wdsFlex.columnGapSingle), { children: [c.jsxs("div", {
			className: "x1n2onr6 x1useyqa xsdox4t x2lah0s",
			children: [i != null ? c.jsx("img", {
				className: "x1useyqa xsdox4t x1c9tyrk xeusxvb x1pahc9y x1ertn4p xl1xv1r",
				src: i,
				alt: "",
				onError: a
			}) : c.jsx(r("WAWebDefaultProfilePicture.react"), {
				type: "1-1",
				size: 48,
				backgroundStyles: d.fallbackPhotoBackground
			}), c.jsx("div", {
				className: "x10l6tqk x1me21xl x1l195vm x1xvr5cs x1nqnulx x1c9tyrk xeusxvb x1pahc9y x1ertn4p xfn3atn x78zum5 x6s0dn4 xl56j7k x1ktv7sr x142x0oa xv7zg05 x12dgle5 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1y9zq84 xt9xd2u x3tsejo x1ahzpo1",
				children: c.jsx(r("WDSIconIcCheck.react"), {
					width: 16,
					height: 16,
					iconXstyle: d.badgeIcon
				})
			})]
		}), c.jsxs("div", babelHelpers.extends({}, e.props(o("WDSFlex.stylex").wdsFlex.flexColumn, o("WDSFlex.stylex").wdsFlex.flexGrow1, o("WDSFlex.stylex").wdsFlex.justifyCenter, d.contentWrapper), { children: [c.jsx(r("WDSText.react"), {
			type: "Body2Emphasized",
			colorName: "contentDefault",
			testid: "inapp-signup-confirmation-header-title",
			children: n === o("WAWebSignupCTAExperiment").SignupCTAExperiment.GetOffers ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			)
		}), c.jsx(r("WDSText.react"), {
			type: "Body3",
			colorName: "contentDeemphasized",
			testid: "inapp-signup-confirmation-header-subtitle",
			children: s._(
				/*BTDS*/
				""
			)
		})] }))] })) }));
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);
