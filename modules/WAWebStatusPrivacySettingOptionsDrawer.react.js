__d("WAWebStatusPrivacySettingOptionsDrawer.react", [
	"fbt",
	"WAWebAccountLinkingConstants",
	"WAWebCrosspostingAutoShareAction",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebLoadingDrawer.react",
	"WAWebPrivacyVisibilityOption.react",
	"WAWebSettingsGetters",
	"WAWebStatusGatingUtils",
	"WAWebStatusPostingUtils",
	"WAWebStatusPrivacyReshareSettings.react",
	"WAWebText.react",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebUserPrefsStatusType",
	"WDSFontTokenStyles",
	"WDSIconWdsIcLogoFacebook.react",
	"WDSIconWdsIcLogoInstagram.react",
	"WDSSwitch.react",
	"asyncToGeneratorRuntime",
	"justknobx",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useWAWebSettingsValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = {
		crosspostLabel: {
			color: "x14ug900",
			$$css: !0
		},
		crosspostFooter: {
			color: "xhslqc4",
			paddingTop: "x1p57kb1",
			$$css: !0
		}
	};
	function m(t) {
		var n = o("react-compiler-runtime").c(60), a = t.isModal, i = t.onAllowListClick, l = t.onBack, u = t.onClose, m = t.onContactClick, _ = t.onDenyListClick, g = t.ref, h = t.statusPostingPrivacyConfig, y = a === void 0 ? !1 : a, C;
		if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
			var b;
			C = [
				(b = o("WAWebSettingsGetters")).getIsFBLinked,
				b.getIsIGLinked,
				b.getLinkState,
				b.getShareToFB,
				b.getShareToIG
			], n[0] = C;
		} else C = n[0];
		var v = o("useWAWebSettingsValues").useSettingsValues(C), S = v[0], R = v[1], L = v[2], E = v[3], k = v[4], I = L === o("WAWebAccountLinkingConstants").AccountLinkState.Active, T;
		n[1] === Symbol.for("react.memo_cache_sentinel") ? (T = o("WAWebStatusGatingUtils").isStatusResharePosterSideEnabled(), n[1] = T) : T = n[1];
		var D = T, x;
		n[2] === Symbol.for("react.memo_cache_sentinel") ? (x = r("justknobx")._("2695"), n[2] = x) : x = n[2];
		var $ = x, P = f, N = p, M;
		n[3] === Symbol.for("react.memo_cache_sentinel") ? (M = s._(
			/*BTDS*/
			""
		), n[3] = M) : M = n[3];
		var w = M, A;
		n[4] === Symbol.for("react.memo_cache_sentinel") ? (A = s._(
			/*BTDS*/
			""
		), n[4] = A) : A = n[4];
		var F = A, O;
		n[5] === Symbol.for("react.memo_cache_sentinel") ? (O = s._(
			/*BTDS*/
			""
		), n[5] = O) : O = n[5];
		var B = O;
		if (!h) {
			var W;
			n[6] === Symbol.for("react.memo_cache_sentinel") ? (W = c.jsx(r("WAWebLoadingDrawer.react"), {
				title: w,
				error: !1
			}), n[6] = W) : W = n[6];
			var q;
			return n[7] !== g ? (q = c.jsx(r("WAWebDrawer.react"), {
				ref: g,
				children: W
			}), n[7] = g, n[8] = q) : q = n[8], q;
		}
		var U = h.setting, V;
		n[9] === Symbol.for("react.memo_cache_sentinel") ? (V = s._(
			/*BTDS*/
			""
		), n[9] = V) : V = n[9];
		var H = V, G;
		n[10] !== h ? (G = o("WAWebStatusPostingUtils").formatStatusSetting(h), n[10] = h, n[11] = G) : G = n[11];
		var z = G, j = o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL;
		y && (j = o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP);
		var K;
		if (l) {
			var Q;
			n[12] !== l ? (Q = { onBack: l }, n[12] = l, n[13] = Q) : Q = n[13], K = Q;
		} else if (u) {
			var X;
			n[14] !== u ? (X = { onCancel: u }, n[14] = u, n[15] = X) : X = n[15], K = X;
		}
		var Y;
		n[16] === Symbol.for("react.memo_cache_sentinel") ? (Y = { surface: "status-audience-selector" }, n[16] = Y) : Y = n[16];
		var J;
		n[17] !== j || n[18] !== K ? (J = c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, babelHelpers.extends({
			testid: "drawer-title",
			title: w,
			type: j,
			focusBackOrCancel: !0
		}, K)), n[17] = j, n[18] = K, n[19] = J) : J = n[19];
		var Z;
		n[20] === Symbol.for("react.memo_cache_sentinel") ? (Z = c.jsx(o("WAWebText.react").WAWebTextSectionTitle, {
			margin: [20, 0],
			color: "wdsContentDeemphasized",
			weight: "bold",
			children: H
		}), n[20] = Z) : Z = n[20];
		var ee, te;
		n[21] === Symbol.for("react.memo_cache_sentinel") ? (ee = s._(
			/*BTDS*/
			""
		), te = s._(
			/*BTDS*/
			""
		), n[21] = ee, n[22] = te) : (ee = n[21], te = n[22]);
		var ne = U === o("WAWebUserPrefsStatusType").StatusPrivacySettingType.Contact, re;
		n[23] !== m || n[24] !== ne ? (re = c.jsx(r("WAWebPrivacyVisibilityOption.react"), {
			text: ee,
			subText: te,
			selected: ne,
			testid: "status-contacts-everyone",
			onClick: m
		}), n[23] = m, n[24] = ne, n[25] = re) : re = n[25];
		var oe;
		n[26] === Symbol.for("react.memo_cache_sentinel") ? (oe = s._(
			/*BTDS*/
			""
		), n[26] = oe) : oe = n[26];
		var ae;
		n[27] !== U || n[28] !== z ? (ae = U === o("WAWebUserPrefsStatusType").StatusPrivacySettingType.DenyList ? z : s._(
			/*BTDS*/
			""
		), n[27] = U, n[28] = z, n[29] = ae) : ae = n[29];
		var ie = U === o("WAWebUserPrefsStatusType").StatusPrivacySettingType.DenyList, le;
		n[30] !== _ || n[31] !== ae || n[32] !== ie ? (le = c.jsx(r("WAWebPrivacyVisibilityOption.react"), {
			text: oe,
			subText: ae,
			testid: "status-contacts-except",
			selected: ie,
			onClick: _
		}), n[30] = _, n[31] = ae, n[32] = ie, n[33] = le) : le = n[33];
		var se;
		n[34] === Symbol.for("react.memo_cache_sentinel") ? (se = s._(
			/*BTDS*/
			""
		), n[34] = se) : se = n[34];
		var ue;
		n[35] !== U || n[36] !== z ? (ue = U === o("WAWebUserPrefsStatusType").StatusPrivacySettingType.AllowList ? z : s._(
			/*BTDS*/
			""
		), n[35] = U, n[36] = z, n[37] = ue) : ue = n[37];
		var ce = U === o("WAWebUserPrefsStatusType").StatusPrivacySettingType.AllowList, de;
		n[38] !== i || n[39] !== ue || n[40] !== ce ? (de = c.jsx(r("WAWebPrivacyVisibilityOption.react"), {
			text: se,
			subText: ue,
			testid: "status-contacts-share-with",
			selected: ce,
			onClick: i
		}), n[38] = i, n[39] = ue, n[40] = ce, n[41] = de) : de = n[41];
		var me;
		n[42] !== re || n[43] !== le || n[44] !== de ? (me = c.jsxs(r("WAWebDrawerSection.react"), {
			theme: "padding-no-vertical",
			animation: !1,
			children: [Z, c.jsxs("div", {
				role: "radiogroup",
				"aria-label": H,
				children: [
					re,
					le,
					de
				]
			})]
		}), n[42] = re, n[43] = le, n[44] = de, n[45] = me) : me = n[45];
		var pe;
		n[46] === Symbol.for("react.memo_cache_sentinel") ? (pe = D && c.jsx(r("WAWebStatusPrivacyReshareSettings.react"), {}), n[46] = pe) : pe = n[46];
		var _e;
		n[47] !== I || n[48] !== S || n[49] !== R || n[50] !== E || n[51] !== k ? (_e = I && (S || R) && c.jsxs(r("WAWebDrawerSection.react"), {
			theme: "padding-no-vertical",
			animation: !1,
			children: [c.jsx("div", { className: "xso031l x1q0q8m5 x120ee7l" }), c.jsxs("div", {
				className: "x1p57kb1",
				children: [
					S && c.jsxs("div", {
						className: "x78zum5 x6s0dn4 x1qughib x1xrf6ya xscbp6u x1ypdohk",
						role: "button",
						tabIndex: 0,
						onClick: function() {
							P(!E);
						},
						onKeyDown: function(t) {
							(t.key === "Enter" || t.key === " ") && (t.preventDefault(), P(!E));
						},
						"data-testid": "share-to-facebook-privacy-settings-item",
						children: [c.jsxs("div", {
							className: "x78zum5 x6s0dn4 xs2akgl",
							children: [c.jsx("div", {
								className: "x78zum5 x6s0dn4 xl56j7k xhslqc4",
								children: c.jsx(r("WDSIconWdsIcLogoFacebook.react"), {})
							}), c.jsx("span", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WDSFontTokenStyles").WDSFontTokenStyles.Body1, d.crosspostLabel), { children: F }))]
						}), c.jsx(r("WDSSwitch.react"), {
							value: E,
							"aria-label": F.toString()
						})]
					}),
					R && c.jsxs("div", {
						className: "x78zum5 x6s0dn4 x1qughib x1xrf6ya xscbp6u x1ypdohk",
						role: "button",
						tabIndex: 0,
						onClick: function() {
							N(!k);
						},
						onKeyDown: function(t) {
							(t.key === "Enter" || t.key === " ") && (t.preventDefault(), N(!k));
						},
						"data-testid": "share-to-instagram-privacy-settings-item",
						children: [c.jsxs("div", {
							className: "x78zum5 x6s0dn4 xs2akgl",
							children: [c.jsx("div", {
								className: "x78zum5 x6s0dn4 xl56j7k xhslqc4",
								children: c.jsx(r("WDSIconWdsIcLogoInstagram.react"), {})
							}), c.jsx("span", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WDSFontTokenStyles").WDSFontTokenStyles.Body1, d.crosspostLabel), { children: B }))]
						}), c.jsx(r("WDSSwitch.react"), {
							value: k,
							"aria-label": B.toString()
						})]
					}),
					c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WDSFontTokenStyles").WDSFontTokenStyles.Body2, d.crosspostFooter), { children: $ ? s._(
						/*BTDS*/
						""
					) : s._(
						/*BTDS*/
						""
					) }))
				]
			})]
		}), n[47] = I, n[48] = S, n[49] = R, n[50] = E, n[51] = k, n[52] = _e) : _e = n[52];
		var fe;
		n[53] !== me || n[54] !== _e ? (fe = c.jsxs(r("WAWebDrawerBody.react"), { children: [
			me,
			pe,
			_e
		] }), n[53] = me, n[54] = _e, n[55] = fe) : fe = n[55];
		var ge;
		return n[56] !== g || n[57] !== J || n[58] !== fe ? (ge = c.jsxs(r("WAWebDrawer.react"), {
			ref: g,
			testid: "status-privacy-settings-drawer",
			tsNavigationData: Y,
			children: [J, fe]
		}), n[56] = g, n[57] = J, n[58] = fe, n[59] = ge) : ge = n[59], ge;
	}
	function p(e) {
		return _.apply(this, arguments);
	}
	function _() {
		return _ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			try {
				yield o("WAWebCrosspostingAutoShareAction").toggleCrosspostAutoShare("ig", e);
			} catch (e) {
				o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: s._(
					/*BTDS*/
					""
				) }));
			}
		}), _.apply(this, arguments);
	}
	function f(e) {
		return g.apply(this, arguments);
	}
	function g() {
		return g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			try {
				yield o("WAWebCrosspostingAutoShareAction").toggleCrosspostAutoShare("fb", e);
			} catch (e) {
				o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: s._(
					/*BTDS*/
					""
				) }));
			}
		}), g.apply(this, arguments);
	}
	l.default = m;
}), 226);
