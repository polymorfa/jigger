__d("WAWebContactManagerEmptyState.react", [
	"fbt",
	"WAWebContactManagerSMBUserJourneyLogger",
	"WAWebEmptyStateActionTile.react",
	"WAWebLabelOutlineIcon.react",
	"WAWebListPeopleRefreshedIcon.react",
	"WAWebListsGatingUtils",
	"WAWebWdsPictoUserCheckFeedbackPositiveIcon.react",
	"WDSButton.react",
	"WDSFlex.stylex",
	"WDSIconIcPersonAdd.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = {
		wrapper: {
			backgroundColor: "x6egj2d",
			width: "xh8yej3",
			height: "x5yr21d",
			textAlign: "x2b8uid",
			$$css: !0
		},
		titleCard: {
			maxWidth: "x1rjt51p",
			backgroundColor: "x16w0wmm",
			borderStartStartRadius: "x1g83kfv",
			borderStartEndRadius: "x3qq2k7",
			borderEndEndRadius: "x2x8art",
			borderEndStartRadius: "x1qor8vf",
			paddingTop: "xl7twdi",
			paddingInlineEnd: "xyo0t3i",
			paddingBottom: "xvg22vi",
			paddingInlineStart: "xb0esv5",
			marginTop: "x98l61r",
			marginInlineEnd: "xviac27",
			marginBottom: "x1ua1l7f",
			marginInlineStart: "xlese2p",
			rowGap: "x1j3ira4",
			boxSizing: "x9f619",
			height: "xg7h5cd",
			$$css: !0
		},
		textGroup: {
			rowGap: "x1qvou4u",
			$$css: !0
		}
	};
	function m(t) {
		var n = o("react-compiler-runtime").c(26), a = t.onAddCustomer, i = t.onLearnMore, l = t.onManageLabels, u;
		n[0] !== a ? (u = function() {
			o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.clickEmptyStateAddCustomer("no_customers"), a == null || a();
		}, n[0] = a, n[1] = u) : u = n[1];
		var m = u, _;
		n[2] !== l ? (_ = function() {
			o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.clickEmptyStateManageLabels(), l == null || l();
		}, n[2] = l, n[3] = _) : _ = n[3];
		var f = _, g, h;
		n[4] === Symbol.for("react.memo_cache_sentinel") ? (g = (e || (e = r("stylex"))).props(d.wrapper, o("WDSFlex.stylex").wdsFlex.flexCenter, o("WDSFlex.stylex").wdsFlex.flexColumn), h = e.props(d.titleCard, o("WDSFlex.stylex").wdsFlex.flexColumn, o("WDSFlex.stylex").wdsFlex.alignCenter), n[4] = g, n[5] = h) : (g = n[4], h = n[5]);
		var y, C;
		n[6] === Symbol.for("react.memo_cache_sentinel") ? (y = c.jsx("span", {
			"aria-hidden": !0,
			children: c.jsx(o("WAWebWdsPictoUserCheckFeedbackPositiveIcon.react").WdsPictoUserCheckFeedbackPositiveIcon, {})
		}), C = (e || (e = r("stylex"))).props(o("WDSFlex.stylex").wdsFlex.flexColumn, d.textGroup), n[6] = y, n[7] = C) : (y = n[6], C = n[7]);
		var b;
		n[8] === Symbol.for("react.memo_cache_sentinel") ? (b = c.jsx("div", {
			role: "heading",
			"aria-level": 2,
			children: c.jsx(r("WDSText.react"), {
				colorName: "contentDefault",
				type: "Headline2",
				children: s._(
					/*BTDS*/
					""
				)
			})
		}), n[8] = b) : b = n[8];
		var v;
		n[9] === Symbol.for("react.memo_cache_sentinel") ? (v = c.jsxs("div", babelHelpers.extends({}, C, { children: [b, c.jsx(r("WDSText.react"), {
			colorName: "contentDeemphasized",
			type: "Body2",
			children: s._(
				/*BTDS*/
				""
			)
		})] })), n[9] = v) : v = n[9];
		var S;
		n[10] === Symbol.for("react.memo_cache_sentinel") ? (S = s._(
			/*BTDS*/
			""
		), n[10] = S) : S = n[10];
		var R = i != null ? i : p, L;
		n[11] !== R ? (L = c.jsxs("div", babelHelpers.extends({}, h, { children: [
			y,
			v,
			c.jsx(r("WDSButton.react"), {
				type: "default",
				variant: "tonal",
				size: "small",
				label: S,
				onPress: R,
				testid: "customer-manager-empty-learn-more"
			})
		] })), n[11] = R, n[12] = L) : L = n[12];
		var E;
		n[13] === Symbol.for("react.memo_cache_sentinel") ? (E = (e || (e = r("stylex"))).props(o("WDSFlex.stylex").wdsFlex.flex), n[13] = E) : E = n[13];
		var k;
		n[14] === Symbol.for("react.memo_cache_sentinel") ? (k = s._(
			/*BTDS*/
			""
		), n[14] = k) : k = n[14];
		var I;
		n[15] !== m ? (I = c.jsx(r("WAWebEmptyStateActionTile.react"), {
			Icon: r("WDSIconIcPersonAdd.react"),
			title: k,
			clickHandler: m,
			testid: "customer-manager-empty-add-customer"
		}), n[15] = m, n[16] = I) : I = n[16];
		var T;
		n[17] === Symbol.for("react.memo_cache_sentinel") ? (T = o("WAWebListsGatingUtils").isListsEnabled() ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), n[17] = T) : T = n[17];
		var D;
		n[18] !== f ? (D = c.jsx(r("WAWebEmptyStateActionTile.react"), {
			Icon: o("WAWebListsGatingUtils").isListsEnabled() ? o("WAWebListPeopleRefreshedIcon.react").ListPeopleRefreshedIcon : o("WAWebLabelOutlineIcon.react").LabelOutlineIcon,
			title: T,
			clickHandler: f,
			testid: "customer-manager-empty-manage-labels"
		}), n[18] = f, n[19] = D) : D = n[19];
		var x;
		n[20] !== I || n[21] !== D ? (x = c.jsxs("div", babelHelpers.extends({}, E, { children: [I, D] })), n[20] = I, n[21] = D, n[22] = x) : x = n[22];
		var $;
		return n[23] !== L || n[24] !== x ? ($ = c.jsxs("section", babelHelpers.extends({ "data-testid": "customer-manager-empty-state" }, g, { children: [L, x] })), n[23] = L, n[24] = x, n[25] = $) : $ = n[25], $;
	}
	function p() {}
	l.default = m;
}), 226);
