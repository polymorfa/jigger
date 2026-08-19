__d("MAWEndToEndEncryptionKeysDialog.react", [
	"fbt",
	"I64",
	"MAWEncryptionKeysForUserView.entrypoint",
	"MWInboxSettingsDivider.react",
	"MWPActor.react",
	"MWVerticalRhythm",
	"MWXDialogHeader.react",
	"MWXDialogPage.react",
	"MWXLink.react",
	"MWXListCellPressable.react",
	"MWXProfilePhoto.react",
	"MWXText.react",
	"MWXTextPairing.react",
	"ReQL",
	"ReQLSuspense",
	"XMessengerDotComHelpContentControllerRouteBuilder",
	"getLSMediaContactProfilePictureUrl",
	"react",
	"react-compiler-runtime",
	"usePopPage",
	"usePushPage",
	"useReStore"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d = c || (c = o("react")), m = { keysSubHeaderLink: {
		color: "xz94kzr",
		marginInlineStart: "xdwrcjd",
		$$css: !0
	} };
	function p() {
		return d.jsx("div", {
			className: "x1g2khh7 xyinxu5",
			children: d.jsxs(r("MWXText.react"), {
				color: "secondary",
				numberOfLines: 3,
				type: "body4",
				children: [s._(
					/*BTDS*/
					""
				), d.jsx(r("MWXLink.react"), {
					"aria-label": s._(
						/*BTDS*/
						""
					),
					color_DEPRECATED: "highlight",
					href: r("XMessengerDotComHelpContentControllerRouteBuilder").buildUri({ cms_id: "147596532316790" }).toString(),
					target: "_blank",
					xstyle_DEPRECATED: m.keysSubHeaderLink,
					children: s._(
						/*BTDS*/
						""
					)
				})]
			})
		});
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(t) {
		var n = o("react-compiler-runtime").c(36), a = t.onClose, l = t.threadKey, c;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (c = {}, n[0] = c) : c = n[0];
		var m = r("usePushPage")(r("MAWEncryptionKeysForUserView.entrypoint"), c), _ = m[0], f = m[1], g = f.onHoverIn, h = f.onHoverOut, y = f.onPressIn, C = (e || (e = r("useReStore")))(), b;
		n[1] !== C.tables.contacts || n[2] !== C.tables.participants || n[3] !== l ? (b = function() {
			return o("ReQL").mergeJoin(o("ReQL").fromTableAscending(C.tables.participants).getKeyRange(l), o("ReQL").fromTableAscending(C.tables.contacts));
		}, n[1] = C.tables.contacts, n[2] = C.tables.participants, n[3] = l, n[4] = b) : b = n[4];
		var v;
		n[5] !== C || n[6] !== l ? (v = [C, l], n[5] = C, n[6] = l, n[7] = v) : v = n[7];
		var S = o("ReQLSuspense").useArray(b, v, i.id + ":92"), R = o("MWPActor.react").useActor(), L, E, k, I;
		n[8] === Symbol.for("react.memo_cache_sentinel") ? (L = d.jsx(p, {}), E = d.jsx("div", {
			className: "xwqyzqf xule2z1",
			children: d.jsx(r("MWInboxSettingsDivider.react"), { marginVertical: 0 })
		}), k = d.jsx(r("MWVerticalRhythm"), { height: 24 }), I = { className: "x135b78x x11lfxj5" }, n[8] = L, n[9] = E, n[10] = k, n[11] = I) : (L = n[8], E = n[9], k = n[10], I = n[11]);
		var T, D;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (D = d.jsx("div", babelHelpers.extends({}, I, { children: d.jsx(r("MWXText.react"), {
			isSemanticHeading: !0,
			type: "headlineEmphasized4",
			children: s._(
				/*BTDS*/
				""
			)
		}) })), T = d.jsx(r("MWVerticalRhythm"), { height: 24 }), n[12] = T, n[13] = D) : (T = n[12], D = n[13]);
		var x;
		if (n[14] !== a || n[15] !== g || n[16] !== h || n[17] !== y || n[18] !== S || n[19] !== _ || n[20] !== l || n[21] !== R) {
			var $;
			n[23] !== a || n[24] !== g || n[25] !== h || n[26] !== y || n[27] !== _ || n[28] !== l || n[29] !== R ? ($ = function(t, n) {
				var e = t[1], i = (u || (u = o("I64"))).equal(e.id, R), c = i ? s._(
					/*BTDS*/
					""
				) : s._(
					/*BTDS*/
					"",
					[s._param("user_name", e.name)]
				);
				return d.jsx(r("MWXListCellPressable.react"), {
					addOnStart: d.jsx(r("MWXProfilePhoto.react"), {
						alt: "",
						shape: "circle",
						size: 36,
						source: { uri: r("getLSMediaContactProfilePictureUrl")(e) }
					}),
					content: d.jsx(r("MWXTextPairing.react"), {
						headline: c,
						headlineLineLimit: 1,
						level: 4,
						reduceEmphasis: !0
					}),
					onHoverIn: g,
					onHoverOut: h,
					onPress: function() {
						return _({
							contact: e,
							isViewer: i,
							onClose: a,
							threadKey: l,
							title: c
						});
					},
					onPressIn: y,
					testid: void 0
				}, String(n));
			}, n[23] = a, n[24] = g, n[25] = h, n[26] = y, n[27] = _, n[28] = l, n[29] = R, n[30] = $) : $ = n[30], x = S.map($), n[14] = a, n[15] = g, n[16] = h, n[17] = y, n[18] = S, n[19] = _, n[20] = l, n[21] = R, n[22] = x;
		} else x = n[22];
		var P;
		n[31] !== x ? (P = d.jsxs("div", { children: [
			k,
			D,
			T,
			x
		] }), n[31] = x, n[32] = P) : P = n[32];
		var N;
		n[33] === Symbol.for("react.memo_cache_sentinel") ? (N = d.jsx(r("MWVerticalRhythm"), { height: 24 }), n[33] = N) : N = n[33];
		var M;
		return n[34] !== P ? (M = d.jsxs(d.Fragment, { children: [
			L,
			E,
			P,
			N
		] }), n[34] = P, n[35] = M) : M = n[35], M;
	}
	function f(e) {
		var t = o("react-compiler-runtime").c(12), n = e.props, a = n.onClose, i = n.threadKey, l = r("usePopPage")(), u = l != null ? l : void 0, c;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (c = s._(
			/*BTDS*/
			""
		), t[0] = c) : c = t[0];
		var m = l != null, p;
		t[1] !== a || t[2] !== u || t[3] !== m ? (p = d.jsx(r("MWXDialogHeader.react"), {
			onBack: u,
			onClose: a,
			title: c,
			withBackButton: m,
			withCloseButton: !0
		}), t[1] = a, t[2] = u, t[3] = m, t[4] = p) : p = t[4];
		var f;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (f = { className: "x1shn012" }, t[5] = f) : f = t[5];
		var g;
		t[6] !== a || t[7] !== i ? (g = d.jsx("div", babelHelpers.extends({}, f, { children: d.jsx(_, {
			onClose: a,
			threadKey: i
		}) })), t[6] = a, t[7] = i, t[8] = g) : g = t[8];
		var h;
		return t[9] !== p || t[10] !== g ? (h = d.jsx(r("MWXDialogPage.react"), {
			footer: null,
			header: p,
			children: g
		}), t[9] = p, t[10] = g, t[11] = h) : h = t[11], h;
	}
	l.default = f;
}), 226);
