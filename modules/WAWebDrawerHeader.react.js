__d("WAWebDrawerHeader.react", [
	"fbt",
	"WAWebAdaptiveLayoutContext.react",
	"WAWebFocusTracer",
	"WAWebMenuBar.react",
	"WAWebSpinner.react",
	"WAWebStylesEnv",
	"WAWebTabOrder",
	"WDSIconIcArrowBack.react",
	"WDSIconIcClose.react",
	"WDSMenuBarItem.react",
	"WDSText.react",
	"cr:23046",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useWAWebTimeout"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c, d = c || (c = o("react")), m = c, p = m.useContext, _ = m.useEffect, f = m.useMemo, g = m.useRef, h = {
		SMALL: "small",
		POPUP: "popup",
		OFFSET: "offset",
		TAB: "tab",
		FLYOUT: "flyout",
		MODAL: "modal",
		SUBHEADER: "subheader"
	}, y = {
		titleBodyRefreshed: {
			flexGrow: "x1iyjqo2",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			overflowWrap: "x1mzt3pk",
			$$css: !0
		},
		titleBodyDrawerSmallRefreshed: {
			fontSize: "x6prxxf",
			lineHeight: "x1o2sk6j",
			$$css: !0
		},
		fontSmoothing: {
			"-webkit-font-smoothing": "xvmahel",
			"-moz-osx-font-smoothing": "xlh3980",
			$$css: !0
		},
		fontWeight500: {
			fontWeight: "xk50ysn",
			$$css: !0
		},
		headerPwa: {
			"@media (display-mode: standalone)_borderStartStartRadius": "x570efc",
			$$css: !0
		},
		headerWindows: {
			borderStartStartRadius: "xyi3aci",
			$$css: !0
		},
		headerSmallRefreshed: {
			boxSizing: "x9f619",
			display: "x78zum5",
			flex: "x1okw0bk",
			alignItems: "x6s0dn4",
			height: "x1peatla",
			color: "x14ug900",
			backgroundColor: "x1280gxy",
			$$css: !0
		},
		headerOffset: {
			boxSizing: "x9f619",
			display: "x78zum5",
			flex: "x1okw0bk",
			alignItems: "x6s0dn4",
			height: "xdj0cbh",
			color: "x14ug900",
			backgroundColor: "x1280gxy",
			$$css: !0
		},
		headerPopup: {
			boxSizing: "x9f619",
			display: "x78zum5",
			flex: "x1okw0bk",
			alignItems: "x6s0dn4",
			height: "xdiz9cm",
			color: "x14ug900",
			backgroundColor: "x1280gxy",
			borderStartStartRadius: "x1fqc64z",
			borderStartEndRadius: "xs83zq4",
			$$css: !0
		},
		subHeaderHeader: {
			height: "xzpcc6d",
			$$css: !0
		},
		focusableTitle: {
			outline: "x1a2a7pz",
			$$css: !0
		},
		marginStart8: {
			marginInlineStart: "x13fj5qh",
			$$css: !0
		},
		paddingAll10: {
			paddingTop: "x889kno",
			paddingInlineEnd: "x2vl965",
			paddingBottom: "x1a8lsjc",
			paddingInlineStart: "xe2zdcy",
			$$css: !0
		},
		paddingHoriz20: {
			paddingInlineStart: "x106a9eq",
			paddingInlineEnd: "x1xnnf8n",
			$$css: !0
		},
		paddingVert0Start10End20: {
			paddingTop: "xexx8yu",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "xe2zdcy",
			paddingInlineEnd: "x1xnnf8n",
			$$css: !0
		},
		paddingFlyoutOrModal: {
			paddingTop: "x1d0ri9u",
			paddingBottom: "x1ug4tga",
			paddingInlineStart: "xe2zdcy",
			paddingInlineEnd: "xziim83",
			$$css: !0
		}
	}, C = 500, b = (n("cr:23046") == null ? void 0 : n("cr:23046").isWindowsHybridEnabled()) === !0;
	function v(t) {
		var n = o("react-compiler-runtime").c(89), a, i;
		n[0] !== t ? (i = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i) : (a = n[1], i = n[2]);
		var l = a, c = l.children, m = l.focusBackOrCancel, f = l.focusTitle, v = l.menu, S = l.onBack, R = l.onCancel, L = l.rightActionElement, E = l.spinner, k = l.title, I = l.type, T = m === void 0 ? !1 : m, D = f === void 0 ? !1 : f, x = L === void 0 ? null : L, $ = E === void 0 ? !1 : E, P = g(null), N = g(null), M;
		n[3] === Symbol.for("react.memo_cache_sentinel") ? (M = function() {
			r("WAWebFocusTracer").focus(P.current);
		}, n[3] = M) : M = n[3];
		var w = o("useWAWebTimeout").useManualTimeout(M), A = w[0], F, O;
		n[4] !== T || n[5] !== A ? (F = function() {
			T === !0 && P.current != null && A(C);
		}, O = [T, A], n[4] = T, n[5] = A, n[6] = F, n[7] = O) : (F = n[6], O = n[7]), _(F, O);
		var B;
		n[8] === Symbol.for("react.memo_cache_sentinel") ? (B = function() {
			r("WAWebFocusTracer").focus(N.current);
		}, n[8] = B) : B = n[8];
		var W = o("useWAWebTimeout").useManualTimeout(B), q = W[0], U, V;
		n[9] !== D || n[10] !== q ? (V = function() {
			D === !0 && N.current != null && q(C);
		}, U = [D, q], n[9] = D, n[10] = q, n[11] = U, n[12] = V) : (U = n[11], V = n[12]), _(V, U);
		var H;
		e: {
			if (R && I !== h.MODAL || !S) {
				H = void 0;
				break e;
			}
			var G;
			n[13] === Symbol.for("react.memo_cache_sentinel") ? (G = s._(
				/*BTDS*/
				""
			), n[13] = G) : G = n[13];
			var z;
			n[14] !== S ? (z = d.jsx(r("WDSMenuBarItem.react"), {
				tabOrder: o("WAWebTabOrder").TAB_ORDER.CHATLIST_HEADER,
				testid: "btn-closer-drawer",
				onClick: S,
				title: G,
				ref: P,
				icon: r("WDSIconIcArrowBack.react")
			}), n[14] = S, n[15] = z) : z = n[15], H = z;
		}
		var j = H, K = p(r("WAWebAdaptiveLayoutContext.react")), Q = K.mode, X;
		e: {
			if (!R) {
				X = void 0;
				break e;
			}
			var Y;
			n[16] === Symbol.for("react.memo_cache_sentinel") ? (Y = s._(
				/*BTDS*/
				""
			), n[16] = Y) : Y = n[16];
			var J = r(Q === "wide" ? "WDSIconIcClose.react" : "WDSIconIcArrowBack.react"), Z;
			n[17] !== R || n[18] !== J ? (Z = d.jsx(r("WDSMenuBarItem.react"), {
				testid: "btn-closer-drawer",
				tabOrder: o("WAWebTabOrder").TAB_ORDER.CHATLIST_HEADER,
				onClick: R,
				title: Y,
				ref: P,
				icon: J
			}), n[17] = R, n[18] = J, n[19] = Z) : Z = n[19], X = Z;
		}
		var ee = X, te;
		n[20] === Symbol.for("react.memo_cache_sentinel") ? (te = [
			h.SMALL,
			h.TAB,
			h.SUBHEADER
		], n[20] = te) : te = n[20];
		var ne = te.includes(I), re;
		n[21] !== ne || n[22] !== v ? (re = v != null ? d.jsx("span", {
			className: "x1okw0bk",
			children: d.jsx(o("WAWebMenuBar.react").MenuBar, {
				theme: ne ? null : "inverse",
				children: v
			}, "drawer-header")
		}) : null, n[21] = ne, n[22] = v, n[23] = re) : re = n[23];
		var oe = re, ae = I === h.OFFSET || I === h.POPUP, ie = k !== "" && k != null, le;
		n[24] !== c || n[25] !== ie ? (le = ie && c != null ? d.jsx("div", {
			className: "x78zum5 x1okw0bk x6s0dn4 xdwrcjd",
			children: c
		}) : null, n[24] = c, n[25] = ie, n[26] = le) : le = n[26];
		var se = le, ue;
		e: {
			if (I === h.TAB || I === h.SUBHEADER) {
				ue = null;
				break e;
			}
			var ce;
			n[27] !== ae ? (ce = {
				0: { className: "x1okw0bk" },
				1: { className: "x1okw0bk x14qfxbe x1ks1olk" }
			}[!!ae << 0], n[27] = ae, n[28] = ce) : ce = n[28];
			var de = I !== h.MODAL && ee, me;
			n[29] !== j || n[30] !== ce || n[31] !== de ? (me = d.jsxs("div", babelHelpers.extends({}, ce, { children: [j, de] })), n[29] = j, n[30] = ce, n[31] = de, n[32] = me) : me = n[32], ue = me;
		}
		var pe = ue, _e;
		e: {
			if (x != null) {
				_e = x;
				break e;
			}
			if (I !== h.MODAL) {
				_e = null;
				break e;
			}
			var fe;
			n[33] === Symbol.for("react.memo_cache_sentinel") ? (fe = { className: "x1okw0bk xpqajaz xvy4d1p" }, n[33] = fe) : fe = n[33];
			var ge;
			n[34] !== ee ? (ge = d.jsx("div", babelHelpers.extends({}, fe, { children: ee })), n[34] = ee, n[35] = ge) : ge = n[35], _e = ge;
		}
		var he = _e, ye = I === h.FLYOUT || I === h.MODAL, Ce;
		n[36] !== ae || n[37] !== ye || n[38] !== ne || n[39] !== I ? (Ce = (u || (u = r("stylex")))(b && y.headerWindows, y.headerPwa, ne && [y.headerSmallRefreshed, y.paddingAll10], ae && [y.headerOffset, y.paddingVert0Start10End20], I === h.POPUP && [y.headerPopup, y.paddingVert0Start10End20], I === h.TAB && y.paddingHoriz20, I === h.SUBHEADER && [y.paddingHoriz20, y.subHeaderHeader], ye && y.paddingFlyoutOrModal), n[36] = ae, n[37] = ye, n[38] = ne, n[39] = I, n[40] = Ce) : Ce = n[40];
		var be = Ce, ve;
		n[41] !== ye || n[42] !== I ? (ve = {
			0: "x78zum5 x1okw0bk x6s0dn4 xh8yej3 x14wi4xw xexx8yu xyri2b x18d9i69 x1c1uobl",
			2: "x78zum5 x1okw0bk x6s0dn4 xh8yej3 x14wi4xw xo1l8bm x14ug900 xexx8yu xyri2b x18d9i69 x1c1uobl",
			1: "x78zum5 x1okw0bk x6s0dn4 xh8yej3 x14wi4xw xexx8yu xyri2b x18d9i69 x1c1uobl x1603h9y x1s688f",
			3: "x78zum5 x1okw0bk x6s0dn4 xh8yej3 x14wi4xw x14ug900 xexx8yu xyri2b x18d9i69 x1c1uobl x1603h9y x1s688f"
		}[(I === h.SMALL) << 1 | !!ye << 0], n[41] = ye, n[42] = I, n[43] = ve) : ve = n[43];
		var Se = ve, Re = I === h.SMALL && y.titleBodyDrawerSmallRefreshed, Le = ae && y.fontWeight500, Ee = ae && o("WAWebStylesEnv").isOSMac && y.fontSmoothing, ke = D && y.focusableTitle, Ie, Te, De, xe, $e, Pe, Ne, Me, we;
		if (n[44] !== c || n[45] !== D || n[46] !== be || n[47] !== ie || n[48] !== a.testid || n[49] !== i || n[50] !== $ || n[51] !== Re || n[52] !== Le || n[53] !== Ee || n[54] !== ke || n[55] !== k || n[56] !== Se || n[57] !== pe || n[58] !== I) {
			var Ae, Fe = [
				y.titleBodyRefreshed,
				Re,
				!1,
				Le,
				Ee,
				ke
			], Oe = ie ? k : c, Be;
			n[68] !== $ || n[69] !== Oe || n[70] !== I ? (Be = I === h.TAB ? d.jsx(r("WDSText.react"), {
				type: "Headline2",
				maxLines: 1,
				isSemanticHeading: !0,
				colorName: "contentDefault",
				children: Oe
			}) : I === h.SUBHEADER ? d.jsx(r("WDSText.react"), {
				type: "Body1Emphasized",
				maxLines: 1,
				isSemanticHeading: !0,
				colorName: "contentDefault",
				children: Oe
			}) : d.jsxs(d.Fragment, { children: [d.jsx(r("WDSText.react"), {
				type: "Body1",
				maxLines: 1,
				isSemanticHeading: !0,
				xstyle: y.marginStart8,
				colorName: "contentDefault",
				children: Oe
			}), $ ? d.jsx("span", {
				className: "x13fj5qh",
				children: d.jsx(o("WAWebSpinner.react").Spinner, { size: 16 })
			}) : null] }), n[68] = $, n[69] = Oe, n[70] = I, n[71] = Be) : Be = n[71], we = Be, Ne = i, Me = be, $e = Se, Pe = pe, Ie = (Ae = a.testid) != null ? Ae : "drawer-title-body", Te = N, De = D ? -1 : void 0, xe = (u || (u = r("stylex"))).props(Fe), n[44] = c, n[45] = D, n[46] = be, n[47] = ie, n[48] = a.testid, n[49] = i, n[50] = $, n[51] = Re, n[52] = Le, n[53] = Ee, n[54] = ke, n[55] = k, n[56] = Se, n[57] = pe, n[58] = I, n[59] = Ie, n[60] = Te, n[61] = De, n[62] = xe, n[63] = $e, n[64] = Pe, n[65] = Ne, n[66] = Me, n[67] = we;
		} else Ie = n[59], Te = n[60], De = n[61], xe = n[62], $e = n[63], Pe = n[64], Ne = n[65], Me = n[66], we = n[67];
		var We;
		n[72] !== Ie || n[73] !== Te || n[74] !== De || n[75] !== xe || n[76] !== we ? (We = d.jsx("div", babelHelpers.extends({
			"data-testid": Ie,
			ref: Te,
			tabIndex: De
		}, xe, { children: we })), n[72] = Ie, n[73] = Te, n[74] = De, n[75] = xe, n[76] = we, n[77] = We) : We = n[77];
		var qe;
		n[78] !== se || n[79] !== oe || n[80] !== $e || n[81] !== Pe || n[82] !== We || n[83] !== he ? (qe = d.jsxs("div", {
			className: $e,
			children: [
				Pe,
				We,
				se,
				oe,
				he
			]
		}), n[78] = se, n[79] = oe, n[80] = $e, n[81] = Pe, n[82] = We, n[83] = he, n[84] = qe) : qe = n[84];
		var Ue;
		return n[85] !== Ne || n[86] !== Me || n[87] !== qe ? (Ue = d.jsx("header", {
			ref: Ne,
			className: Me,
			children: qe
		}), n[85] = Ne, n[86] = Me, n[87] = qe, n[88] = Ue) : Ue = n[88], Ue;
	}
	l.DRAWER_HEADER_TYPE = h, l.DrawerHeader = v;
}), 226);
