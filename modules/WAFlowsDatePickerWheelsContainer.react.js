__d("WAFlowsDatePickerWheelsContainer.react", [
	"fbt",
	"WAFlowsContainerElementIDs",
	"WAFlowsDatePickerUtils",
	"WAFlowsDatePickerWheel.react",
	"WAFlowsEmbeddedLink.react",
	"WAFlowsEnvContext.react",
	"WAFlowsInstanceIdContext.react",
	"WAFlowsLabel.react",
	"WAFlowsLocalization",
	"WAFlowsPanelAnimation.react",
	"WAFlowsReactPortal.react",
	"react",
	"stylex",
	"useForceUpdate"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useEffect, _ = d.useRef, f = d.useState, g = {
		ios: !1,
		android: !0,
		wa_web: !0
	}, h = {
		position: "absolute",
		zIndex: 1,
		top: 0,
		left: 0,
		width: "100%",
		height: "100%"
	}, y = {
		content: "\"\"",
		position: "absolute",
		zIndex: 1,
		backgroundColor: "var(--WDS-lines-divider)",
		left: 0,
		width: "100%"
	}, C = {
		wheelsContainer: {
			paddingBottom: "x117aka2",
			$$css: !0
		},
		wheelsContent: {
			position: "x1n2onr6",
			"::before_content": "x1cpjm7i",
			"::before_position": "x1hmns74",
			"::before_zIndex": "x12maryy",
			"::before_backgroundColor": "x9smzgn",
			"::before_left": "x1wlytlt",
			"::before_insetInlineStart": null,
			"::before_insetInlineEnd": null,
			"::before_width": "x1rmj1tg",
			"::before_height": "x191tdue",
			"::before_top": "x1knuo7r",
			"::before_marginTop": "x1h5t567",
			"::after_content": "x1s928wv",
			"::after_position": "x1j6awrg",
			"::after_zIndex": "xitxdhh",
			"::after_backgroundColor": "x1dwy1gy",
			"::after_left": "x17cx49",
			"::after_insetInlineStart": null,
			"::after_insetInlineEnd": null,
			"::after_width": "x4eaejv",
			"::after_height": "xex3w2j",
			"::after_bottom": "x160sa2e",
			"::after_marginBottom": "x14w1fgk",
			$$css: !0
		},
		wheelContainer: {
			paddingTop: "x128v7jw",
			paddingInlineEnd: "x183qbbg",
			paddingBottom: "x17r0vjz",
			paddingInlineStart: "x1n4bvi3",
			fontSize: "xrv4cvt",
			display: "x78zum5",
			$$css: !0
		},
		wheelContainerFirst: {
			flexGrow: "x1iyjqo2",
			justifyContent: "x13a6bvl",
			$$css: !0
		},
		wheelContainerLast: {
			flexGrow: "x1iyjqo2",
			justifyContent: "x1nhvcw1",
			$$css: !0
		},
		wheelsContentContainer: {
			backgroundColor: "xs1q97v",
			$$css: !0
		}
	}, b = {
		wheelsOverlay: {
			backgroundColor: "x1wel3ma",
			position: "x10l6tqk",
			zIndex: "x1vjfegm",
			top: "x13vifvy",
			left: "xu96u03",
			insetInlineStart: null,
			insetInlineEnd: null,
			width: "xh8yej3",
			height: "x5yr21d",
			$$css: !0
		},
		wheelsContainer: {
			position: "x10l6tqk",
			zIndex: "x1vjfegm",
			top: "x13vifvy",
			left: "xu96u03",
			insetInlineStart: null,
			insetInlineEnd: null,
			width: "xh8yej3",
			height: "x5yr21d",
			$$css: !0
		},
		wheelsContent: {
			paddingTop: "x128v7jw",
			paddingInlineEnd: "x4r0ibd",
			paddingBottom: "x17r0vjz",
			paddingInlineStart: "x1u8vmz4",
			$$css: !0
		},
		wheelsContentContainer: {
			position: "x10l6tqk",
			zIndex: "xhtitgo",
			top: "xwa60dl",
			left: "x1nrll8i",
			insetInlineStart: null,
			insetInlineEnd: null,
			transform: "x11lhmoz",
			backgroundColor: "x16w0wmm",
			boxShadow: "x1199m1v",
			$$css: !0
		},
		wheelContainer: {
			fontSize: "xh88k37",
			position: "x1n2onr6",
			paddingInlineStart: "x15uhtdb",
			paddingInlineEnd: "xdeeoxi",
			paddingLeft: null,
			paddingRight: null,
			marginInlineStart: "x1j9pc4w",
			marginInlineEnd: "xowauwy",
			marginLeft: null,
			marginRight: null,
			"::before_content": "x1cpjm7i",
			"::before_position": "x1hmns74",
			"::before_zIndex": "x12maryy",
			"::before_backgroundColor": "x9smzgn",
			"::before_left": "x1wlytlt",
			"::before_insetInlineStart": null,
			"::before_insetInlineEnd": null,
			"::before_width": "x1rmj1tg",
			"::before_height": "xuuc98b",
			"::before_top": "x1knuo7r",
			"::before_marginTop": "x1b0a9kw",
			"::after_content": "x1s928wv",
			"::after_position": "x1j6awrg",
			"::after_zIndex": "xitxdhh",
			"::after_backgroundColor": "x1dwy1gy",
			"::after_left": "x17cx49",
			"::after_insetInlineStart": null,
			"::after_insetInlineEnd": null,
			"::after_width": "x4eaejv",
			"::after_height": "x3cntg4",
			"::after_bottom": "x160sa2e",
			"::after_marginBottom": "xnumnwo",
			$$css: !0
		}
	}, v = {
		wheelsOverlay: {
			backgroundColor: "x1honnu5",
			position: "x10l6tqk",
			zIndex: "x1vjfegm",
			top: "x13vifvy",
			left: "xu96u03",
			insetInlineStart: null,
			insetInlineEnd: null,
			width: "xh8yej3",
			height: "x5yr21d",
			$$css: !0
		},
		wheelsContainer: {
			position: "x10l6tqk",
			zIndex: "x1vjfegm",
			top: "x13vifvy",
			left: "xu96u03",
			insetInlineStart: null,
			insetInlineEnd: null,
			width: "xh8yej3",
			height: "x5yr21d",
			$$css: !0
		},
		wheelsContent: {
			paddingTop: "xexx8yu",
			paddingInlineEnd: "xjzynba",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1d25ldl",
			$$css: !0
		},
		wheelsContentContainer: {
			position: "x10l6tqk",
			zIndex: "xhtitgo",
			top: "xwa60dl",
			left: "x1nrll8i",
			insetInlineStart: null,
			insetInlineEnd: null,
			transform: "x11lhmoz",
			backgroundColor: "x16w0wmm",
			boxShadow: "x1199m1v",
			borderStartStartRadius: "x1mvgw25",
			borderStartEndRadius: "x1yfjhkk",
			borderEndEndRadius: "x1jy34x5",
			borderEndStartRadius: "xfpl1co",
			$$css: !0
		},
		wheelContainer: {
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			fontSize: "xh88k37",
			position: "x1n2onr6",
			paddingInlineStart: "x15uhtdb",
			paddingInlineEnd: "xdeeoxi",
			paddingLeft: null,
			paddingRight: null,
			marginInlineStart: "x1j9pc4w",
			marginInlineEnd: "xowauwy",
			marginLeft: null,
			marginRight: null,
			"::before_content": "x1cpjm7i",
			"::before_position": "x1hmns74",
			"::before_zIndex": "x12maryy",
			"::before_backgroundColor": "x9smzgn",
			"::before_left": "x1wlytlt",
			"::before_insetInlineStart": null,
			"::before_insetInlineEnd": null,
			"::before_width": "x1rmj1tg",
			"::before_height": "xuuc98b",
			"::before_top": "x1knuo7r",
			"::before_marginTop": "x1b0a9kw",
			"::after_content": "x1s928wv",
			"::after_position": "x1j6awrg",
			"::after_zIndex": "xitxdhh",
			"::after_backgroundColor": "x1dwy1gy",
			"::after_left": "x17cx49",
			"::after_insetInlineStart": null,
			"::after_insetInlineEnd": null,
			"::after_width": "x4eaejv",
			"::after_height": "x3cntg4",
			"::after_bottom": "x160sa2e",
			"::after_marginBottom": "xnumnwo",
			":focus-visible_outline": "x1cnw5ml",
			":focus-visible_borderStartStartRadius": "x1idgcdk",
			":focus-visible_borderStartEndRadius": "x16vvyj1",
			":focus-visible_borderEndEndRadius": "x1bjxwfi",
			":focus-visible_borderEndStartRadius": "x19zx1z0",
			$$css: !0
		},
		label: {
			fontFeatureSettings: "x1cc3yi2",
			fontStyle: "x1j61x8r",
			fontSize: "x10zwkt6",
			fontWeight: "x1xq4eza",
			letterSpacing: "x1g4lutg",
			lineHeight: "xx66zjs",
			paddingTop: "x12t3zde",
			paddingInlineEnd: "x167vaf5",
			paddingBottom: "xmnamis",
			paddingInlineStart: "x8945me",
			$$css: !0
		},
		wheelsButton: {
			textTransform: "x6mezaz",
			lineHeight: "x1qfl8hi",
			letterSpacing: "x1g4lutg",
			minWidth: "x4m7ku4",
			backgroundColor: "xjbqb8w",
			marginTop: "xdj266r",
			marginInlineEnd: "x14z9mp",
			marginBottom: "xat24cr",
			marginInlineStart: "x1lziwak",
			borderStartStartRadius: "x1iwo8zk",
			borderStartEndRadius: "x1033uif",
			borderEndEndRadius: "x179ill4",
			borderEndStartRadius: "x1b60jn0",
			":hover_backgroundColor": "xm38lk9",
			":hover_textDecoration": "x1lku1pv",
			":focus_backgroundColor": "x1owl5b1",
			":focus_textDecoration": "x190264o",
			":focus_color": "x16ef2s3",
			$$css: !0
		},
		wheelsButtons: {
			paddingTop: "x12t3zde",
			paddingInlineEnd: "x167vaf5",
			paddingBottom: "x2yie3v",
			paddingInlineStart: "x8945me",
			columnGap: "x4prdry",
			$$css: !0
		}
	}, S = {
		wheelsContainer: {
			transitionProperty: "x19991ni",
			transitionDuration: "xq7dr57",
			willChange: "x1larqbn",
			$$css: !0
		},
		wheelsContainerDisabled: {
			opacity: "x1cvbfqh",
			pointerEvents: "x47corl",
			$$css: !0
		},
		wheelsContent: {
			display: "x78zum5",
			justifyContent: "xl56j7k",
			$$css: !0
		},
		wheelsButtons: {
			display: "x78zum5",
			justifyContent: "x13a6bvl",
			paddingTop: "x1y1aw1k",
			paddingInlineEnd: "xv54qhq",
			paddingBottom: "xwib8y2",
			paddingInlineStart: "xf7dkkf",
			$$css: !0
		},
		wheelsButton: {
			textTransform: "xtvhhri",
			paddingTop: "x14trrlu",
			paddingInlineEnd: "x1nwc9yf",
			paddingBottom: "x1d65tqu",
			paddingInlineStart: "xi1jawo",
			$$css: !0
		}
	};
	function R(t) {
		var n = t.enabled, a = n === void 0 ? !0 : n, i = t.inputEl, l = t.isPanelVisible, u = t.maxDateValue, d = t.minDateValue, h = t.onAnimatingChange, y = t.onChange, C = t.onClose, b = t.ref, v = t.value, R = t.xstyle, k = o("WAFlowsEnvContext.react").useWAFlowsEnv(), I = k.env, T = o("WAFlowsInstanceIdContext.react").useWAFlowsInstance(), D = T.flowInstanceId, x = E(I.platform), $ = m(function() {
			if (v !== void 0) return new Date(v);
			var e = new Date();
			e.setHours(0, 0, 0, 0);
			var t = e.getTime();
			return t = Math.max(t, d != null ? d : t), t = Math.min(t, u != null ? u : t), new Date(t);
		}, [
			v,
			d,
			u
		]), P = f(g[I.platform] ? null : $()), N = P[0], M = P[1], w = r("useForceUpdate")(), A = _(null), F = _({
			realTimeDate: $(),
			pendingActions: {
				save: !1,
				change: {
					day: !1,
					month: !1,
					year: !1
				}
			}
		}), O = function() {
			return F.current.realTimeDate.getDate();
		}, B = function() {
			return F.current.realTimeDate.getMonth();
		}, W = function() {
			return F.current.realTimeDate.getFullYear();
		}, q = O(), U = B(), V = W(), H = f(o("WAFlowsDatePickerUtils").getDays({
			month: U,
			year: V,
			minDateValue: d,
			maxDateValue: u,
			locale: I.locale
		})), G = H[0], z = H[1], j = f(o("WAFlowsDatePickerUtils").getMonths({
			year: V,
			minDateValue: d,
			maxDateValue: u
		})), K = j[0], Q = j[1], X = o("WAFlowsDatePickerUtils").getYears({
			minDateValue: d,
			maxDateValue: u,
			locale: I.locale
		}), Y = m(function() {
			y(v !== void 0 ? String(v) : void 0), C();
		}, [
			v,
			y,
			C
		]), J = m(function() {
			var e = F.current.pendingActions;
			if (Object.values(e.change).some(Boolean)) e.save = !0;
			else {
				var t = F.current.realTimeDate.getTime(), n = new Date(t);
				M(n), y(String(n.getTime())), g[I.platform] && C(), e.save = !1;
			}
		}, [
			I.platform,
			y,
			C
		]), Z = m(function(e) {
			var t = e.newDay, n = t === void 0 ? O() : t, r = e.newMonth, a = r === void 0 ? B() : r, i = e.newYear, l = i === void 0 ? W() : i, s = F.current, u = s.pendingActions, c = s.realTimeDate;
			c.setDate(o("WAFlowsDatePickerUtils").getClosestValidDay(n, a, l)), c.setMonth(a), c.setFullYear(l), (!g[I.platform] || u.save) && J(), w();
		}, [
			J,
			I.platform,
			w
		]), ee = function(t, n) {
			F.current.pendingActions.change[t] = n;
		}, te = m(function(e) {
			ee("day", !1), Z({ newDay: e });
		}, [Z]), ne = m(function(e) {
			ee("month", !1), Z({ newMonth: e });
		}, [Z]), re = m(function(e) {
			ee("year", !1), Z({ newYear: e });
		}, [Z]);
		p(function() {
			if (l && v == null && !g[I.platform]) {
				var e = $().getTime();
				y(String(e));
			}
		}, [l]), p(function() {
			var e = $();
			F.current.realTimeDate = new Date(e.getTime());
		}, [$]), p(function() {
			z(o("WAFlowsDatePickerUtils").getDays({
				month: U,
				year: V,
				minDateValue: d,
				maxDateValue: u
			})), Q(o("WAFlowsDatePickerUtils").getMonths({
				year: V,
				minDateValue: d,
				maxDateValue: u
			}));
		}, [
			N,
			U,
			V,
			d,
			u
		]), p(function() {
			L(G, q, te), L(K, U, ne);
		}, [
			q,
			U,
			G,
			K,
			te,
			ne
		]);
		var oe = m(function(e) {
			var t, n = e.target;
			n instanceof Node && !((t = A.current) != null && t.contains(n)) && !(i != null && i.contains(n)) && Y();
		}, [i, Y]);
		p(function() {
			return window.addEventListener("mousedown", oe), window.addEventListener("touchstart", oe), function() {
				window.removeEventListener("mousedown", oe), window.removeEventListener("touchstart", oe);
			};
		}, [oe]);
		var ae = {
			day: {
				options: G,
				value: q,
				onChange: te,
				testId: "waf-date-picker-wheels-day"
			},
			month: {
				options: K,
				value: U,
				onChange: ne,
				testId: "waf-date-picker-wheels-month"
			},
			year: {
				options: X,
				value: V,
				onChange: re,
				testId: "waf-date-picker-wheels-year"
			}
		}, ie = o("WAFlowsDatePickerUtils").getDatePartsForLocale(I.locale), le = ie.map(function(e, t) {
			var n = [
				x.wheelContainer,
				t === 0 && x.wheelContainerFirst,
				t === ie.length - 1 && x.wheelContainerLast
			], o = ae[e];
			return c.jsx(r("WAFlowsDatePickerWheel.react"), {
				options: o.options,
				value: o.value,
				onChangeRequest: function() {
					return ee(e, !0);
				},
				onChange: o.onChange,
				xstyle: n,
				"data-testid": void 0
			}, t);
		});
		return c.jsx(o("WAFlowsReactPortal.react").WAFlowsReactPortal, {
			targetId: r("WAFlowsContainerElementIDs").DATEPICKER_WHEEL_PORTAL_CONTAINER_ID,
			ref: A,
			children: c.jsx(r("WAFlowsPanelAnimation.react"), {
				isPanelVisible: l,
				enabled: I.platform === "ios",
				onAnimatingChange: h,
				children: c.jsxs("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(S.wheelsContainer, x.wheelsContainer, !a && S.wheelsContainerDisabled, R), {
					ref: b,
					children: [c.jsx("div", babelHelpers.extends({}, e.props(x.wheelsOverlay), {
						onClick: C,
						role: "none"
					})), c.jsxs("div", babelHelpers.extends({}, e.props(x.wheelsContentContainer), {
						"data-testid": void 0,
						children: [
							I.platform === "wa_web" && c.jsx(o("WAFlowsLabel.react").WAFlowsLabelSmall, {
								enabled: a,
								text: o("WAFlowsLocalization").getSelectDate(),
								xstyle: x.label,
								dataTestId: "waf-date-picker-wheels-label"
							}),
							c.jsx("div", babelHelpers.extends({ id: D(r("WAFlowsContainerElementIDs").DATEPICKER_WHEELS_WRAPPER_ID) }, e.props(S.wheelsContent, x.wheelsContent), { children: le })),
							g[I.platform] && c.jsxs("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props([S.wheelsButtons, x.wheelsButtons]), { children: [c.jsx(o("WAFlowsEmbeddedLink.react").WAFlowsEmbeddedLink, {
								text: s._(
									/*BTDS*/
									""
								),
								xstyle: [S.wheelsButton, x.wheelsButton],
								onClick: Y
							}), c.jsx(o("WAFlowsEmbeddedLink.react").WAFlowsEmbeddedLink, {
								text: s._(
									/*BTDS*/
									""
								),
								xstyle: [S.wheelsButton, x.wheelsButton],
								onClick: J
							})] }))
						]
					}))]
				}))
			})
		});
	}
	R.displayName = R.name + " [from " + i.id + "]";
	function L(e, t, n) {
		e.length > 0 && !e.find(function(e) {
			var n = e.value;
			return n === t;
		}) && n(t < e[0].value ? e[0].value : e[e.length - 1].value);
	}
	function E(e) {
		var t = {
			android: b,
			ios: C,
			wa_web: v
		};
		return t[e];
	}
	l.default = R;
}), 226);
