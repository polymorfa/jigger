__d("WAWebCommunityTransferOwnershipConfirmationDrawer.react", [
	"fbt",
	"WAWebButton.react",
	"WAWebCmd",
	"WAWebCommunityInformationCell.react",
	"WAWebDetailImage.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerManager",
	"WAWebDrawerSection.react",
	"WAWebEmojiText.react",
	"WAWebFlex.react",
	"WAWebFrontendContactGetters",
	"WAWebNetworkStatus",
	"WAWebSpinner.react",
	"WAWebText.react",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebTransferCommunityOwnershipAction",
	"WAWebUserShieldIcon.react",
	"WAWebWarningIcon.react",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"asyncToGeneratorRuntime",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useRef, m = c.useState, p = {
		paddingInline48: {
			paddingInlineStart: "x1oiqv2n",
			paddingInlineEnd: "x15zmtp0",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		paddingBottom48: {
			paddingBottom: "x1sgudl8",
			$$css: !0
		}
	}, _ = {
		container: {
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			alignItems: "x6s0dn4",
			justifyContent: "xl56j7k",
			$$css: !0
		},
		buttonContainer: {
			textAlign: "x2b8uid",
			$$css: !0
		},
		header: {
			textAlign: "x2b8uid",
			lineHeight: "x1evy7pa",
			$$css: !0
		}
	};
	function f(e) {
		var t = o("react-compiler-runtime").c(33), a = e.chat, i = e.newOwner, l = e.onBack, c = e.ref, f = d(), h = m(!1), y = h[0], C = h[1], b;
		if (t[0] !== i) {
			var v = o("WAWebFrontendContactGetters").getFormattedName(i), S;
			t[2] !== v ? (S = u.jsx(o("WAWebEmojiText.react").EmojiText, { text: v }), t[2] = v, t[3] = S) : S = t[3], b = s._(
				/*BTDS*/
				"",
				[s._param("contact_name", S)]
			), t[0] = i, t[1] = b;
		} else b = t[1];
		var R = b, L;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (L = [{
			title: s._(
				/*BTDS*/
				""
			),
			description: s._(
				/*BTDS*/
				""
			),
			Icon: o("WAWebWarningIcon.react").WarningIcon,
			key: "no-longer-owner"
		}, {
			title: s._(
				/*BTDS*/
				""
			),
			description: s._(
				/*BTDS*/
				""
			),
			Icon: o("WAWebUserShieldIcon.react").UserShieldIcon,
			key: "remain-admin"
		}], t[4] = L) : L = t[4];
		var E = L, k;
		t[5] !== y ? (k = y ? u.jsx(o("WAWebSpinner.react").Spinner, { size: 18 }) : s._(
			/*BTDS*/
			""
		), t[5] = y, t[6] = k) : k = t[6];
		var I = k, T;
		t[7] !== a || t[8] !== i ? (T = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				if (!r("WAWebNetworkStatus").online) {
					o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: s._(
						/*BTDS*/
						""
					) }));
					return;
				}
				C(!0), o("WAWebTransferCommunityOwnershipAction").transferCommunityOwnershipAction(a, i).then(function() {
					o("WAWebCmd").Cmd.openCommunityTabbedInfo(a.id, void 0, !1, !0);
				}).catch(function() {
					C(!1), o("WAWebDrawerManager").DrawerManager.closeDrawerRight();
				});
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), t[7] = a, t[8] = i, t[9] = T) : T = t[9];
		var D = T, x;
		t[10] === Symbol.for("react.memo_cache_sentinel") ? (x = {
			surface: "unknown",
			viewName: "community-transfer-confirmation"
		}, t[10] = x) : x = t[10];
		var $;
		t[11] === Symbol.for("react.memo_cache_sentinel") ? ($ = s._(
			/*BTDS*/
			""
		), t[11] = $) : $ = t[11];
		var P;
		t[12] !== l ? (P = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			title: $,
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
			onBack: l
		}), t[12] = l, t[13] = P) : P = t[13];
		var N;
		t[14] === Symbol.for("react.memo_cache_sentinel") ? (N = [
			_.container,
			o("WDSPaddings.stylex").wdsPaddings.paddingTop32,
			p.paddingInline48,
			p.paddingBottom48
		], t[14] = N) : N = t[14];
		var M;
		t[15] !== a.id ? (M = u.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "center",
			children: u.jsx(o("WAWebDetailImage.react").DetailImage, {
				id: a.id,
				size: 104,
				quality: o("WAWebDetailImage.react").DetailImageQuality.High,
				shape: o("WAWebDetailImage.react").DetailImageShape.Squircle
			})
		}), t[15] = a.id, t[16] = M) : M = t[16];
		var w;
		t[17] === Symbol.for("react.memo_cache_sentinel") ? (w = [_.header, o("WDSMargins.stylex").wdsMargins.marginVer16], t[17] = w) : w = t[17];
		var A;
		t[18] !== R ? (A = u.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "center",
			children: u.jsx(o("WAWebText.react").WAWebTextLarge, {
				weight: "bold",
				xstyle: w,
				children: R
			})
		}), t[18] = R, t[19] = A) : A = t[19];
		var F;
		t[20] === Symbol.for("react.memo_cache_sentinel") ? (F = E.map(g), t[20] = F) : F = t[20];
		var O;
		t[21] === Symbol.for("react.memo_cache_sentinel") ? (O = [_.buttonContainer, o("WDSMargins.stylex").wdsMargins.marginTop16], t[21] = O) : O = t[21];
		var B;
		t[22] !== I || t[23] !== D ? (B = u.jsx(o("WAWebFlex.react").FlexRow, {
			xstyle: O,
			children: u.jsx(o("WAWebButton.react").Button, {
				testid: "transfer-community-ownership-button",
				type: "primary",
				onClick: D,
				children: I
			})
		}), t[22] = I, t[23] = D, t[24] = B) : B = t[24];
		var W;
		t[25] !== A || t[26] !== B || t[27] !== M ? (W = u.jsx(r("WAWebDrawerBody.react"), {
			ref: f,
			tabIndex: "-1",
			children: u.jsxs(r("WAWebDrawerSection.react"), {
				animation: !1,
				xstyle: N,
				children: [
					M,
					A,
					F,
					B
				]
			})
		}), t[25] = A, t[26] = B, t[27] = M, t[28] = W) : W = t[28];
		var q;
		return t[29] !== c || t[30] !== W || t[31] !== P ? (q = u.jsxs(r("WAWebDrawer.react"), {
			ref: c,
			testid: "community-assign-new-owner-drawer",
			tsNavigationData: x,
			children: [P, W]
		}), t[29] = c, t[30] = W, t[31] = P, t[32] = q) : q = t[32], q;
	}
	function g(e) {
		var t = e.Icon, n = e.description, o = e.key, a = e.title;
		return u.jsx(r("WAWebCommunityInformationCell.react"), {
			Icon: t,
			title: a,
			description: n
		}, o);
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = f;
}), 226);
