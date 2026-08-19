__d("WAWebBizAIIntegrationHubMainView.react", [
	"fbt",
	"WAWebBizAIIntegrationPluginLogo.react",
	"WAWebBizAILargeScreensLogEvents",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebGroupInfoSeparator.react",
	"WAWebRow.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useEffect, m = c.useEffectEvent, p = { row: {
		borderStartStartRadius: "xlr9sxt",
		borderStartEndRadius: "xvvg52n",
		borderEndEndRadius: "xwd4zgb",
		borderEndStartRadius: "xq8v1ta",
		marginInlineStart: "x1uvdrpn",
		marginInlineEnd: "x14mko6t",
		marginLeft: null,
		marginRight: null,
		paddingTop: "x16ovd2e",
		paddingBottom: "x12xbjc7",
		paddingInlineStart: "x1iw51ew",
		paddingInlineEnd: "xde1mab",
		paddingLeft: null,
		paddingRight: null,
		":hover_backgroundColor": "x1ubxc9n",
		$$css: !0
	} };
	function _(e) {
		var t = o("react-compiler-runtime").c(31), n = e.availableApps, a = e.connectedApps, i = e.loggedViewVersionRef, l = e.onBack, c = e.onSelectPlugin, p = e.queryVersion, _ = e.ref, g = a.length > 0 || n.length > 0, h;
		t[0] !== a.length || t[1] !== i || t[2] !== p ? (h = function() {
			if (i != null && p != null) {
				if (i.current === p) return;
				i.current = p;
			}
			o("WAWebBizAILargeScreensLogEvents").logViewPartnersHub(a.length, !0);
		}, t[0] = a.length, t[1] = i, t[2] = p, t[3] = h) : h = t[3];
		var y = m(h), C;
		t[4] !== y ? (C = function() {
			y();
		}, t[4] = y, t[5] = C) : C = t[5];
		var b;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (b = [], t[6] = b) : b = t[6], d(C, b);
		var v;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (v = { className: "x78zum5 x98rzlu xdt5ytf x5yr21d x6ikm8r x10wlt62" }, t[7] = v) : v = t[7];
		var S;
		t[8] === Symbol.for("react.memo_cache_sentinel") ? (S = s._(
			/*BTDS*/
			""
		), t[8] = S) : S = t[8];
		var R;
		t[9] !== l ? (R = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			title: S,
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
			onBack: l
		}), t[9] = l, t[10] = R) : R = t[10];
		var L;
		t[11] !== g ? (L = g ? null : u.jsx("div", {
			"data-testid": "biz-ai-integration-hub-empty",
			className: "x1p57kb1 xvpt6g3 xvtqlqk xb0esv5 x1yc453h",
			children: u.jsx(r("WDSText.react"), {
				colorName: "contentDeemphasized",
				type: "Body2",
				children: s._(
					/*BTDS*/
					""
				)
			})
		}), t[11] = g, t[12] = L) : L = t[12];
		var E;
		t[13] !== a || t[14] !== c ? (E = a.length > 0 ? u.jsxs("div", {
			"data-testid": "biz-ai-integration-hub-connected-section",
			children: [u.jsx("div", {
				className: "xzpqnlu x1hyvwdk xjm9jq1 x6ikm8r x10wlt62 x10l6tqk x1i1rx1s",
				children: u.jsx(r("WDSText.react"), {
					colorName: "contentDefault",
					isSemanticHeading: !0,
					type: "Body1Emphasized",
					children: s._(
						/*BTDS*/
						""
					)
				})
			}), a.map(function(e, t) {
				return u.jsx(f, {
					onSelect: c,
					plugin: e,
					testid: "biz-ai-integration-hub-connected-item-" + t
				}, e.id);
			})]
		}) : null, t[13] = a, t[14] = c, t[15] = E) : E = t[15];
		var k;
		t[16] !== n.length || t[17] !== a.length ? (k = a.length > 0 && n.length > 0 ? u.jsx(r("WAWebGroupInfoSeparator.react"), { animation: !1 }) : null, t[16] = n.length, t[17] = a.length, t[18] = k) : k = t[18];
		var I;
		t[19] !== n || t[20] !== c ? (I = n.length > 0 ? u.jsxs("div", {
			"data-testid": "biz-ai-integration-hub-available-section",
			children: [u.jsxs("div", {
				className: "x78zum5 xdt5ytf x1b73lln x46w9ns x1nbhmlj x1xrf6ya xvtqlqk xb0esv5",
				children: [u.jsx(r("WDSText.react"), {
					colorName: "contentDefault",
					isSemanticHeading: !0,
					type: "Body1Emphasized",
					children: s._(
						/*BTDS*/
						""
					)
				}), u.jsx(r("WDSText.react"), {
					colorName: "contentDeemphasized",
					type: "Body2",
					children: s._(
						/*BTDS*/
						""
					)
				})]
			}), n.map(function(e, t) {
				return u.jsx(f, {
					onSelect: c,
					plugin: e,
					testid: "biz-ai-integration-hub-available-item-" + t
				}, e.id);
			})]
		}) : null, t[19] = n, t[20] = c, t[21] = I) : I = t[21];
		var T;
		t[22] !== I || t[23] !== L || t[24] !== E || t[25] !== k ? (T = u.jsxs(r("WAWebDrawerBody.react"), { children: [
			L,
			E,
			k,
			I
		] }), t[22] = I, t[23] = L, t[24] = E, t[25] = k, t[26] = T) : T = t[26];
		var D;
		return t[27] !== _ || t[28] !== T || t[29] !== R ? (D = u.jsxs("div", babelHelpers.extends({
			ref: _,
			"data-testid": "biz-ai-integration-hub-main"
		}, v, { children: [R, T] })), t[27] = _, t[28] = T, t[29] = R, t[30] = D) : D = t[30], D;
	}
	function f(e) {
		var t = o("react-compiler-runtime").c(22), n = e.onSelect, a = e.plugin, i = e.testid, l;
		t[0] !== n || t[1] !== a ? (l = function() {
			o("WAWebBizAILargeScreensLogEvents").logClickPartnerRow(a.id), n(a);
		}, t[0] = n, t[1] = a, t[2] = l) : l = t[2];
		var c;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (c = { className: "x6s0dn4 x78zum5 x8a3fw1 x1aj3ljl" }, t[3] = c) : c = t[3];
		var d = i + "-logo", m;
		t[4] !== a.logoUri || t[5] !== d ? (m = u.jsx(r("WAWebBizAIIntegrationPluginLogo.react"), {
			logoUri: a.logoUri,
			testid: d
		}), t[4] = a.logoUri, t[5] = d, t[6] = m) : m = t[6];
		var _;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (_ = { className: "x78zum5 x98rzlu xdt5ytf xeuugli" }, t[7] = _) : _ = t[7];
		var f;
		t[8] !== a.display_name ? (f = u.jsx(r("WDSText.react"), {
			colorName: "contentDefault",
			type: "Body1",
			maxLines: 1,
			children: a.display_name
		}), t[8] = a.display_name, t[9] = f) : f = t[9];
		var g;
		t[10] !== a.is_connected ? (g = a.is_connected ? u.jsx(r("WDSText.react"), {
			colorName: "contentDeemphasized",
			type: "Body3",
			children: s._(
				/*BTDS*/
				""
			)
		}) : null, t[10] = a.is_connected, t[11] = g) : g = t[11];
		var h;
		t[12] !== f || t[13] !== g ? (h = u.jsxs("div", babelHelpers.extends({}, _, { children: [f, g] })), t[12] = f, t[13] = g, t[14] = h) : h = t[14];
		var y;
		t[15] !== m || t[16] !== h ? (y = u.jsxs("div", babelHelpers.extends({}, c, { children: [m, h] })), t[15] = m, t[16] = h, t[17] = y) : y = t[17];
		var C;
		return t[18] !== l || t[19] !== y || t[20] !== i ? (C = u.jsx(r("WAWebRow.react"), {
			onClick: l,
			testid: i,
			xstyle: p.row,
			children: y
		}), t[18] = l, t[19] = y, t[20] = i, t[21] = C) : C = t[21], C;
	}
	l.default = _;
}), 226);
