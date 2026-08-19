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
		var n, a = t.ref, i = babelHelpers.objectWithoutPropertiesLoose(t, e), l = i.children, c = i.focusBackOrCancel, m = c === void 0 ? !1 : c, v = i.focusTitle, S = v === void 0 ? !1 : v, R = i.menu, L = i.onBack, E = i.onCancel, k = i.rightActionElement, I = k === void 0 ? null : k, T = i.spinner, D = T === void 0 ? !1 : T, x = i.title, $ = i.type, P = g(null), N = g(null), M = o("useWAWebTimeout").useManualTimeout(function() {
			r("WAWebFocusTracer").focus(P.current);
		}), w = M[0];
		_(function() {
			m === !0 && P.current != null && w(C);
		}, [m, w]);
		var A = o("useWAWebTimeout").useManualTimeout(function() {
			r("WAWebFocusTracer").focus(N.current);
		}), F = A[0];
		_(function() {
			S === !0 && N.current != null && F(C);
		}, [S, F]);
		var O = f(function() {
			if (!(E && $ !== h.MODAL || !L)) return d.jsx(r("WDSMenuBarItem.react"), {
				tabOrder: o("WAWebTabOrder").TAB_ORDER.CHATLIST_HEADER,
				testid: "btn-closer-drawer",
				onClick: L,
				title: s._(
					/*BTDS*/
					""
				),
				ref: P,
				icon: r("WDSIconIcArrowBack.react")
			});
		}, [
			E,
			$,
			L
		]), B = p(r("WAWebAdaptiveLayoutContext.react")), W = B.mode, q = f(function() {
			if (E) return d.jsx(r("WDSMenuBarItem.react"), {
				testid: "btn-closer-drawer",
				tabOrder: o("WAWebTabOrder").TAB_ORDER.CHATLIST_HEADER,
				onClick: E,
				title: s._(
					/*BTDS*/
					""
				),
				ref: P,
				icon: r(W === "wide" ? "WDSIconIcClose.react" : "WDSIconIcArrowBack.react")
			});
		}, [E, W]), U = [
			h.SMALL,
			h.TAB,
			h.SUBHEADER
		].includes($), V = R != null ? d.jsx("span", {
			className: "x1okw0bk",
			children: d.jsx(o("WAWebMenuBar.react").MenuBar, {
				theme: U ? null : "inverse",
				children: R
			}, "drawer-header")
		}) : null, H = $ === h.OFFSET || $ === h.POPUP, G = x !== "" && x != null, z = G && l != null ? d.jsx("div", {
			className: "x78zum5 x1okw0bk x6s0dn4 xdwrcjd",
			children: l
		}) : null, j = f(function() {
			return $ === h.TAB || $ === h.SUBHEADER ? null : d.jsxs("div", babelHelpers.extends({}, {
				0: { className: "x1okw0bk" },
				1: { className: "x1okw0bk x14qfxbe x1ks1olk" }
			}[!!H << 0], { children: [O, $ !== h.MODAL && q] }));
		}, [
			O,
			q,
			H,
			$
		]), K = f(function() {
			return I != null ? I : $ !== h.MODAL ? null : d.jsx("div", {
				className: "x1okw0bk xpqajaz xvy4d1p",
				children: q
			});
		}, [
			q,
			$,
			I
		]), Q = $ === h.FLYOUT || $ === h.MODAL, X = (u || (u = r("stylex")))(b && y.headerWindows, y.headerPwa, U && [y.headerSmallRefreshed, y.paddingAll10], H && [y.headerOffset, y.paddingVert0Start10End20], $ === h.POPUP && [y.headerPopup, y.paddingVert0Start10End20], $ === h.TAB && y.paddingHoriz20, $ === h.SUBHEADER && [y.paddingHoriz20, y.subHeaderHeader], Q && y.paddingFlyoutOrModal), Y = {
			0: "x78zum5 x1okw0bk x6s0dn4 xh8yej3 x14wi4xw xexx8yu xyri2b x18d9i69 x1c1uobl",
			2: "x78zum5 x1okw0bk x6s0dn4 xh8yej3 x14wi4xw xo1l8bm x14ug900 xexx8yu xyri2b x18d9i69 x1c1uobl",
			1: "x78zum5 x1okw0bk x6s0dn4 xh8yej3 x14wi4xw xexx8yu xyri2b x18d9i69 x1c1uobl x1603h9y x1s688f",
			3: "x78zum5 x1okw0bk x6s0dn4 xh8yej3 x14wi4xw x14ug900 xexx8yu xyri2b x18d9i69 x1c1uobl x1603h9y x1s688f"
		}[($ === h.SMALL) << 1 | !!Q << 0], J = [
			y.titleBodyRefreshed,
			$ === h.SMALL && y.titleBodyDrawerSmallRefreshed,
			!1,
			H && y.fontWeight500,
			H && o("WAWebStylesEnv").isOSMac && y.fontSmoothing,
			S && y.focusableTitle
		], Z = G ? x : l, ee = $ === h.TAB ? d.jsx(r("WDSText.react"), {
			type: "Headline2",
			maxLines: 1,
			isSemanticHeading: !0,
			colorName: "contentDefault",
			children: Z
		}) : $ === h.SUBHEADER ? d.jsx(r("WDSText.react"), {
			type: "Body1Emphasized",
			maxLines: 1,
			isSemanticHeading: !0,
			colorName: "contentDefault",
			children: Z
		}) : d.jsxs(d.Fragment, { children: [d.jsx(r("WDSText.react"), {
			type: "Body1",
			maxLines: 1,
			isSemanticHeading: !0,
			xstyle: y.marginStart8,
			colorName: "contentDefault",
			children: Z
		}), D ? d.jsx("span", {
			className: "x13fj5qh",
			children: d.jsx(o("WAWebSpinner.react").Spinner, { size: 16 })
		}) : null] });
		return d.jsx("header", {
			ref: a,
			className: X,
			children: d.jsxs("div", {
				className: Y,
				children: [
					j,
					d.jsx("div", babelHelpers.extends({
						"data-testid": (n = i.testid) != null ? n : "drawer-title-body",
						ref: N,
						tabIndex: S ? -1 : void 0
					}, u.props(J), { children: ee })),
					z,
					V,
					K
				]
			})
		});
	}
	v.displayName = v.name + " [from " + i.id + "]", l.DRAWER_HEADER_TYPE = h, l.DrawerHeader = v;
}), 226);
