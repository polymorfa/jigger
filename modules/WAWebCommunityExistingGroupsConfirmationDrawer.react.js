__d("WAWebCommunityExistingGroupsConfirmationDrawer.react", [
	"fbt",
	"WAWebButton.react",
	"WAWebChat.react",
	"WAWebChatCollection",
	"WAWebCommunityAddGroupConfirmationPopup.react",
	"WAWebCommunityExistingGroupConfirmationPopup.react",
	"WAWebDetailImage.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebFlex.react",
	"WAWebFlexItem.react",
	"WAWebModalManager",
	"WAWebSettingsIcon.react",
	"WAWebText.react",
	"WAWebToastbar.react",
	"WDSMargins.stylex",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c = u || (u = o("react")), d = {
		paddingBottom30: {
			paddingBottom: "xbaz6xv",
			$$css: !0
		},
		paddingTop10: {
			paddingTop: "x889kno",
			$$css: !0
		},
		marginTop30: {
			marginTop: "x11fxgd9",
			$$css: !0
		}
	}, m = {
		header: {
			maxWidth: "x55n99s",
			textAlign: "x2b8uid",
			lineHeight: "x1evy7pa",
			$$css: !0
		},
		section: {
			maxWidth: "x13qrzjo",
			$$css: !0
		},
		disclaimerText: {
			textAlign: "x2b8uid",
			lineHeight: "x16h55sf",
			$$css: !0
		},
		toastbar: {
			position: "xixxii4",
			justifyContent: "xl56j7k",
			$$css: !0
		},
		row: {
			width: "xh8yej3",
			justifyContent: "x1qughib",
			$$css: !0
		},
		column: {
			width: "xh8yej3",
			$$css: !0
		}
	};
	function p(e) {
		var t = o("react-compiler-runtime").c(3), n = e.onClick, a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = s._(
			/*BTDS*/
			""
		), t[0] = a) : a = t[0];
		var i;
		return t[1] !== n ? (i = c.jsx(r("WAWebToastbar.react"), {
			dismissible: !1,
			wrapperXstyle: m.toastbar,
			children: c.jsx(o("WAWebButton.react").WAWebButtonPrimary, {
				onClick: n,
				testid: "add-to-community-button",
				children: a
			})
		}), t[1] = n, t[2] = i) : i = t[2], i;
	}
	function _(e) {
		var t = o("react-compiler-runtime").c(7), n = e.isCommunityAdmin, a = e.selectedGroups, i;
		if (n) {
			var l;
			t[0] !== a.length ? (l = a.length === 1 ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			), t[0] = a.length, t[1] = l) : l = t[1], i = l;
		} else {
			var u;
			t[2] !== a.length ? (u = a.length === 1 ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			), t[2] = a.length, t[3] = u) : u = t[3], i = u;
		}
		var p;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (p = [
			m.section,
			o("WDSMargins.stylex").wdsMargins.marginTop8,
			d.paddingBottom30,
			d.paddingTop10
		], t[4] = p) : p = t[4];
		var _;
		return t[5] !== i ? (_ = c.jsx(r("WAWebFlexItem.react"), {
			align: "center",
			xstyle: p,
			children: c.jsxs(o("WAWebText.react").WAWebTextSmall, {
				color: "secondary",
				xstyle: m.disclaimerText,
				children: [i, " "]
			})
		}), t[5] = i, t[6] = _) : _ = t[6], _;
	}
	function f(t) {
		var n = o("react-compiler-runtime").c(46), a, i;
		n[0] !== t ? (i = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i) : (a = n[1], i = n[2]);
		var l = a, u = l.communityName, f = l.isCommunityAdmin, g = l.isParentGroupClosed, h = l.onBack, y = l.onGroupPermissions, C = l.onSubmit, b = l.parentGroupId, v = l.selectedGroups, S;
		n[3] !== y || n[4] !== v ? (S = function() {
			return c.jsx(o("WAWebFlex.react").FlexColumn, {
				align: "start",
				xstyle: [o("WDSMargins.stylex").wdsMargins.marginBottom16, m.column],
				children: v.map(function(e) {
					return c.jsxs(o("WAWebFlex.react").FlexRow, {
						xstyle: m.row,
						align: "center",
						children: [c.jsx(r("WAWebFlexItem.react"), {
							grow: 0,
							children: c.jsx(o("WAWebChat.react").ChatOrContact, {
								theme: "plain",
								chat: o("WAWebChatCollection").ChatCollection.assertGet(e.id),
								mode: o("WAWebChat.react").Mode.INFO,
								noContext: !0,
								doNotBoldUnread: !0
							})
						}), c.jsx(o("WAWebButton.react").WAWebButtonPlainWhite, {
							icon: o("WAWebSettingsIcon.react").SettingsIcon,
							onClick: function() {
								return y(e.id);
							},
							ariaLabel: s._(
								/*BTDS*/
								""
							)
						})]
					}, e.id.toString());
				})
			});
		}, n[3] = y, n[4] = v, n[5] = S) : S = n[5];
		var R = S, L;
		n[6] !== C || n[7] !== v ? (L = function() {
			C(v);
		}, n[6] = C, n[7] = v, n[8] = L) : L = n[8];
		var E = L, k;
		n[9] !== u || n[10] !== E || n[11] !== f || n[12] !== g || n[13] !== v ? (k = function() {
			f ? g ? E() : o("WAWebModalManager").ModalManager.open(c.jsx(r("WAWebCommunityExistingGroupConfirmationPopup.react"), {
				onContinue: E,
				communityName: u,
				groupCount: v.length
			})) : o("WAWebModalManager").ModalManager.open(c.jsx(r("WAWebCommunityAddGroupConfirmationPopup.react"), {
				selectedGroups: v,
				onOK: function() {
					o("WAWebModalManager").ModalManager.close(), E();
				},
				onCancel: o("WAWebModalManager").closeModalManager
			}));
		}, n[9] = u, n[10] = E, n[11] = f, n[12] = g, n[13] = v, n[14] = k) : k = n[14];
		var I = k, T;
		n[15] !== u || n[16] !== v.length ? (T = s._(
			/*BTDS*/
			"",
			[s._plural(v.length, "group-count"), s._param("community-name", u)]
		), n[15] = u, n[16] = v.length, n[17] = T) : T = n[17];
		var D = T, x;
		n[18] === Symbol.for("react.memo_cache_sentinel") ? (x = {
			surface: "unknown",
			viewName: "community-existing-groups-confirmation"
		}, n[18] = x) : x = n[18];
		var $;
		n[19] !== h ? ($ = c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
			onBack: h
		}), n[19] = h, n[20] = $) : $ = n[20];
		var P;
		n[21] === Symbol.for("react.memo_cache_sentinel") ? (P = [o("WDSMargins.stylex").wdsMargins.marginHor40, o("WDSMargins.stylex").wdsMargins.marginBottom40], n[21] = P) : P = n[21];
		var N;
		n[22] !== b ? (N = c.jsx(r("WAWebFlexItem.react"), {
			align: "center",
			xstyle: d.marginTop30,
			children: c.jsx(o("WAWebDetailImage.react").DetailImage, {
				id: b,
				size: 104,
				quality: o("WAWebDetailImage.react").DetailImageQuality.High,
				shape: o("WAWebDetailImage.react").DetailImageShape.Squircle
			})
		}), n[22] = b, n[23] = N) : N = n[23];
		var M;
		n[24] === Symbol.for("react.memo_cache_sentinel") ? (M = [
			o("WDSMargins.stylex").wdsMargins.marginTop20,
			o("WDSMargins.stylex").wdsMargins.marginHorAuto,
			o("WDSMargins.stylex").wdsMargins.marginBottom0,
			m.header
		], n[24] = M) : M = n[24];
		var w;
		n[25] !== D ? (w = c.jsx(o("WAWebText.react").WAWebTextLarge, {
			xstyle: M,
			children: D
		}), n[25] = D, n[26] = w) : w = n[26];
		var A;
		n[27] !== f || n[28] !== v ? (A = c.jsx(_, {
			isCommunityAdmin: f,
			selectedGroups: v
		}), n[27] = f, n[28] = v, n[29] = A) : A = n[29];
		var F;
		n[30] !== R ? (F = R(), n[30] = R, n[31] = F) : F = n[31];
		var O;
		n[32] !== w || n[33] !== A || n[34] !== F || n[35] !== N ? (O = c.jsx(r("WAWebDrawerSection.react"), {
			animation: !1,
			theme: "full-height",
			children: c.jsxs(o("WAWebFlex.react").FlexColumn, {
				xstyle: P,
				children: [
					N,
					w,
					A,
					F
				]
			})
		}), n[32] = w, n[33] = A, n[34] = F, n[35] = N, n[36] = O) : O = n[36];
		var B;
		n[37] !== i || n[38] !== O ? (B = c.jsx(r("WAWebDrawerBody.react"), {
			ref: i,
			children: O
		}), n[37] = i, n[38] = O, n[39] = B) : B = n[39];
		var W;
		n[40] !== I ? (W = c.jsx(p, { onClick: I }), n[40] = I, n[41] = W) : W = n[41];
		var q;
		return n[42] !== B || n[43] !== W || n[44] !== $ ? (q = c.jsxs(r("WAWebDrawer.react"), {
			tsNavigationData: x,
			children: [
				$,
				B,
				W
			]
		}), n[42] = B, n[43] = W, n[44] = $, n[45] = q) : q = n[45], q;
	}
	l.default = f;
}), 226);
