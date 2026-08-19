__d("WAFlowsSelectOptionList.react", [
	"WAFlowsComponentConstants",
	"WAFlowsEnvContext.react",
	"WAFlowsFormContext",
	"WAFlowsGet",
	"WAFlowsGroupComponentLabel.react",
	"WAFlowsInstanceIdContext.react",
	"WAFlowsLabel.react",
	"WAFlowsLabelHeader.react",
	"WAFlowsSelectOptionListOption.react",
	"WAFlowsStateProvider.react",
	"WAFlowsUseSelectOptionListTracker",
	"WDNativeImageComponentConstant",
	"getStyleValue",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = s, d = c.useCallback, m = c.useEffect, p = c.useRef, _ = c.useState, f = {
		headerDescription: {
			marginBottom: "xat24cr",
			$$css: !0
		},
		headerLabelTruncationImprovementsEnabled: {
			color: "x1heor9g",
			$$css: !0
		},
		listPadding: {
			paddingTop: "x1b58sdr",
			paddingInlineEnd: "xqfkjy8",
			paddingBottom: "xmnamis",
			paddingInlineStart: "x1rgrh6f",
			$$css: !0
		}
	}, g = {
		header: {
			paddingTop: "xexx8yu",
			paddingInlineEnd: "xv54qhq",
			paddingBottom: "x10b6aqq",
			paddingInlineStart: "xf7dkkf",
			$$css: !0
		},
		headerLabel: {
			textTransform: "xtvhhri",
			color: "xorj6pj",
			$$css: !0
		},
		headerDescription: {
			color: "xorj6pj",
			$$css: !0
		},
		blockContainerOptions: {
			backgroundColor: "x16w0wmm",
			borderStartStartRadius: "x1oe9cf5",
			borderStartEndRadius: "x1ofsvvn",
			borderEndEndRadius: "x1xi8z3d",
			borderEndStartRadius: "xlwhlzo",
			":focus_outline": "x1uvtmcs",
			$$css: !0
		},
		blockContainerOptionsNew: {
			backgroundColor: "x16w0wmm",
			borderStartStartRadius: "x1oe9cf5",
			borderStartEndRadius: "x1ofsvvn",
			borderEndEndRadius: "x1xi8z3d",
			borderEndStartRadius: "xlwhlzo",
			":focus_outline": "x1uvtmcs",
			$$css: !0
		}
	}, h = {
		header: {
			paddingTop: "x1q57ora",
			paddingBottom: "xsaxbkt",
			$$css: !0
		},
		headerLastElement: {
			paddingBottom: "x18d9i69",
			paddingTop: "x1q57ora",
			$$css: !0
		},
		headerDescription: {
			color: "xorj6pj",
			$$css: !0
		},
		headerLabel: {
			color: "xorj6pj",
			$$css: !0
		},
		blockContainerOptions: {
			backgroundColor: "x16w0wmm",
			borderStartStartRadius: "x1oe9cf5",
			borderStartEndRadius: "x1ofsvvn",
			borderEndEndRadius: "x1xi8z3d",
			borderEndStartRadius: "xlwhlzo",
			":focus_outline": "x1uvtmcs",
			$$css: !0
		}
	}, y = {
		header: {
			paddingTop: "x1q57ora",
			paddingBottom: "xsaxbkt",
			$$css: !0
		},
		headerLastElement: {
			paddingBottom: "x18d9i69",
			paddingTop: "x1q57ora",
			$$css: !0
		},
		headerDescription: {
			color: "xorj6pj",
			$$css: !0
		},
		headerLabel: {
			color: "xorj6pj",
			$$css: !0
		},
		blockContainerOptions: {
			backgroundColor: "x1280gxy",
			borderStartStartRadius: "x1oe9cf5",
			borderStartEndRadius: "x1ofsvvn",
			borderEndEndRadius: "x1xi8z3d",
			borderEndStartRadius: "xlwhlzo",
			":focus_outline": "x1uvtmcs",
			$$css: !0
		}
	}, C = {
		android: h,
		ios: g,
		wa_web: y
	}, b = {
		ArrowDown: 1,
		ArrowUp: -1
	}, v = [];
	function S(e) {
		var t, n, o, a = e.dataSourceHasColor, i = e.dataSourceHasImage, l = e.disabledOptions, s = e.enabled, c = e.handleKeyDown, d = e.idx, m = e.isContextualMenu, p = e.isDropdownList, _ = e.isMultilineMeta, f = e.isScrolling, g = e.lastDataSourceIndex, h = e.mediaSize, y = e.minPressedDuration, C = e.multiple, b = e.name, v = e.onChange, S = e.option, R = e.selectedValue, L = e.setHasUserInteracted, E = e.setIsMultilineMeta, k = e.showSelectedTickIcon, I = e.version, T = Array.isArray(R) ? [] : "", D = s ? S.enabled !== !1 && !(l != null && l.includes(S.id)) : !0;
		return u.jsx(r("WAFlowsSelectOptionListOption.react"), babelHelpers.extends({
			name: b,
			selectedValue: R != null ? R : T,
			multiple: C,
			onChange: function() {
				v == null || v(S.id), L(!0);
			},
			showSelectedTickIcon: k,
			onKeyDown: c,
			isContextualMenu: m,
			isDropdownList: p,
			minPressedDuration: y,
			isScrolling: f,
			iconId: S.iconID,
			image: i ? (t = S.image) != null ? t : "" : void 0,
			color: a ? (n = S.color) != null ? n : "" : void 0,
			altText: (o = r("WAFlowsGet")(S, "alt-text")) != null ? o : S.title,
			mediaSize: h,
			isMultilineMeta: _,
			setIsMultilineMeta: E,
			version: I
		}, S, {
			enabled: D,
			isLastOption: d === g
		}), S.id + "_" + d);
	}
	S.displayName = S.name + " [from " + i.id + "]";
	function R(t) {
		var n, a = t.description, i = t.enabled, l = t.enableGroupComponentsLabelImprovements, s = t.errorMessage, c = t.isDropdownList, d = t.isLastChild, m = t.label, p = t.platform, _ = t.platformStyles, g = t.required, h = t.showHeader, y = t.validationString;
		return l && !c ? u.jsx(o("WAFlowsGroupComponentLabel.react").WAFlowsGroupComponentLabel, {
			label: m != null ? m : void 0,
			description: a == null ? void 0 : a.toString(),
			validationString: y != null ? y : void 0,
			required: g,
			enabled: i,
			errorMessage: s
		}) : h ? u.jsxs("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(d ? _.headerLastElement : _.header), { children: [m != null && m.length > 0 && u.jsx(o("WAFlowsLabelHeader.react").WAFlowsLabelHeader, {
			enabled: i,
			label: m,
			isSmallLabel: !0,
			labelXStyle: f.headerLabelTruncationImprovementsEnabled,
			required: g,
			wrapperXStyle: _.headerLabel,
			fontWeight: p === "android" ? "medium" : void 0
		}), a !== void 0 && u.jsx(o("WAFlowsLabel.react").WAFlowsLabelSmall, {
			text: (n = a == null ? void 0 : a.toString()) != null ? n : "",
			xstyle: [f.headerDescription, _.headerDescription],
			enabled: i,
			maxLines: o("WAFlowsComponentConstants").LABEL_LINES_MAX.SELECT_LIST_GROUP_DESCRIPTION
		})] })) : null;
	}
	R.displayName = R.name + " [from " + i.id + "]";
	function L(t) {
		var n, a = t.ariaExpanded, i = a === void 0 ? !0 : a, l = t.dataSource, s = l === void 0 ? v : l, c = t.description, g = t.disabledOptions, h = t.disableSelectOptionTracker, y = h === void 0 ? !1 : h, L = t.enabled, E = L === void 0 ? !0 : L, k = t.errorMessage, I = t.isContextualMenu, T = I === void 0 ? !1 : I, D = t.isDropdownList, x = D === void 0 ? !1 : D, $ = t.isShoppingFlow, P = $ === void 0 ? !1 : $, N = t.label, M = t.mediaSize, w = M === void 0 ? o("WDNativeImageComponentConstant").WDSNativeImageMediaSizeType.REGULAR : M, A = t.multiple, F = t.name, O = t.onChange, B = t.required, W = t.showSelectedTickIcon, q = W === void 0 ? !0 : W, U = t.ulXstyle, V = t.validationString, H = t.value, G = t.version, z = t.xstyle, j = o("WAFlowsEnvContext.react").useWAFlowsEnv(), K = j.env, Q = o("WAFlowsInstanceIdContext.react").useWAFlowsInstance(), X = Q.flowInstanceId, Y = _(0), J = Y[0], Z = Y[1], ee = _(0), te = ee[0], ne = ee[1], re = o("WAFlowsFormContext").useWAFlowsForm(), oe = re.isLastChild, ae = p(null), ie = K.platform === "ios", le = s.some(function(e) {
			var t = e.image;
			return t != null;
		}), se = s.some(function(e) {
			var t = e.color;
			return t != null;
		}), ue = C[K.platform], ce = G != null && parseInt(G, 10) >= 400 || P, de = d(function(e) {
			if (E) {
				var t = b[e.key];
				if (t != null) {
					var n = (J + t + s.length) % s.length;
					n !== J && Z(n);
				} else e.key === "Enter" && (O == null || O(s[J].id));
			}
		}, [
			E,
			J,
			s,
			O
		]);
		m(function() {
			if (!(H !== null && H !== "")) {
				var e = s.findIndex(function(e) {
					var t = e.id;
					return t === H;
				});
				Z(e >= 0 ? e : 0);
			}
		}, [s, H]), m(function() {
			var e;
			(e = ae.current) == null || (e = e.querySelectorAll("li")) == null || (e = e[J]) == null || e.focus(), te || ne(parseInt(o("getStyleValue").getStyleValue("--waf-wds-animation-duration", ae.current), 10));
		}, [J, te]);
		var me = ((n = N == null ? void 0 : N.length) != null ? n : 0) > 0 || c !== void 0, pe = o("WAFlowsStateProvider.react").useWAFlowsState(), _e = pe.internal.scrollConfig, fe = _(!1), ge = fe[0], he = fe[1], ye = _(!1), Ce = ye[0], be = ye[1];
		o("WAFlowsUseSelectOptionListTracker").useSelectOptionListTracker({
			selectedValue: H,
			dataSource: s,
			isDisabled: y,
			hasUserInteracted: Ce,
			version: G
		});
		var ve = R({
			enableGroupComponentsLabelImprovements: ce,
			isDropdownList: x,
			label: N,
			description: c,
			validationString: V,
			required: B != null ? B : !1,
			enabled: E,
			errorMessage: k,
			showHeader: me,
			isLastChild: oe(F),
			platformStyles: ue,
			platform: K.platform
		}), Se = s.length - 1;
		return u.jsxs("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(z), {
			"data-testid": void 0,
			children: [ve, u.jsx("ul", babelHelpers.extends({}, e.props(T && ie ? ue.blockContainerOptionsNew : ue.blockContainerOptions, K.platform === "wa_web" && T && f.listPadding, U), {
				role: "listbox",
				id: X(F),
				tabIndex: 0,
				"aria-activedescendant": typeof H == "string" ? H : void 0,
				"aria-expanded": i,
				"aria-labelledby": F,
				onKeyDown: de,
				ref: ae,
				children: s.map(function(e, t) {
					return S({
						option: e,
						idx: t,
						lastDataSourceIndex: Se,
						name: F,
						selectedValue: H,
						multiple: A,
						enabled: E,
						disabledOptions: g,
						showSelectedTickIcon: q,
						isContextualMenu: T,
						isDropdownList: x,
						minPressedDuration: te,
						isScrolling: _e == null ? void 0 : _e.isScrolling,
						dataSourceHasImage: le,
						dataSourceHasColor: se,
						mediaSize: w,
						isMultilineMeta: ge,
						setIsMultilineMeta: he,
						version: G,
						onChange: O,
						setHasUserInteracted: be,
						handleKeyDown: de
					});
				})
			}))]
		}));
	}
	L.displayName = L.name + " [from " + i.id + "]", l.default = L;
}), 98);
