__d("WAWebBusinessHoursField.react", [
	"fbt",
	"WAWebBizProfileGatingUtils",
	"WAWebBusinessHoursUtils",
	"WAWebBusinessProfileSMBUserJourneyLogger",
	"WAWebBusinessProfileTextField.react",
	"WAWebBusinessProfileTypes",
	"WAWebFlex.react",
	"WAWebModalManager",
	"WDSIconIcSchedule.react",
	"WDSText.react",
	"deferredLoadComponent",
	"react",
	"react-compiler-runtime",
	"requireDeferredForDisplay"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = r("deferredLoadComponent")(r("requireDeferredForDisplay")("WAWebBusinessHoursModal.react").__setRef("WAWebBusinessHoursField.react")), d = {
		fieldContainer: {
			alignSelf: "xkh2ocl",
			paddingTop: "x16ovd2e",
			$$css: !0
		},
		fieldContainerHover: {
			borderStartStartRadius: "xyi3aci",
			borderStartEndRadius: "xwf5gio",
			borderEndEndRadius: "x1p453bz",
			borderEndStartRadius: "x1suzm8a",
			":hover_backgroundColor": "x1n67ipk",
			$$css: !0
		},
		hoursContainer: {
			paddingBottom: "xscbp6u",
			paddingInlineStart: "xm0p2th",
			$$css: !0
		},
		hoursRow: {
			alignItems: "x1cy8zhl",
			justifyContent: "x1qughib",
			width: "x16xo58l",
			$$css: !0
		},
		timeSlot: {
			marginTop: "xav9cv8",
			$$css: !0
		}
	};
	function m(e) {
		var t = o("react-compiler-runtime").c(7), n = e.closed, a = e.hours, i = e.mode;
		if (n) {
			var l;
			return t[0] === Symbol.for("react.memo_cache_sentinel") ? (l = u.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDefault",
				children: s._(
					/*BTDS*/
					""
				)
			}), t[0] = l) : l = t[0], l;
		}
		switch (i) {
			case o("WAWebBusinessProfileTypes").BUSINESS_HOUR_MODES.SPECIFIC_HOURS: {
				var c;
				t[1] !== a ? (c = a && a.map(p), t[1] = a, t[2] = c) : c = t[2];
				var d;
				return t[3] !== c ? (d = u.jsx(o("WAWebFlex.react").FlexColumn, {
					gap: 4,
					align: "end",
					children: c
				}), t[3] = c, t[4] = d) : d = t[4], d;
			}
			case o("WAWebBusinessProfileTypes").BUSINESS_HOUR_MODES.APPOINTMENT_ONLY: {
				var m;
				return t[5] === Symbol.for("react.memo_cache_sentinel") ? (m = u.jsx(r("WDSText.react"), {
					type: "Body2",
					colorName: "contentDefault",
					children: s._(
						/*BTDS*/
						""
					)
				}), t[5] = m) : m = t[5], m;
			}
			case o("WAWebBusinessProfileTypes").BUSINESS_HOUR_MODES.OPEN_24H: {
				var _;
				return t[6] === Symbol.for("react.memo_cache_sentinel") ? (_ = u.jsx(r("WDSText.react"), {
					type: "Body2",
					colorName: "contentDefault",
					children: s._(
						/*BTDS*/
						""
					)
				}), t[6] = _) : _ = t[6], _;
			}
			default: return null;
		}
	}
	function p(e, t) {
		var n = e[0], o = e[1];
		return u.jsxs(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDefault",
			xstyle: t !== 0 && d.timeSlot,
			children: [
				n,
				" - ",
				o
			]
		}, t);
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(e) {
		var t = o("react-compiler-runtime").c(11), n = e.day, a = e.mode, i = n.closed, l = n.dayName, s = n.hours, c;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (c = { className: "x2lah0s xn80e1m" }, t[0] = c) : c = t[0];
		var p;
		t[1] !== l ? (p = u.jsx("div", babelHelpers.extends({}, c, { children: u.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDefault",
			children: l
		}) })), t[1] = l, t[2] = p) : p = t[2];
		var _;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (_ = { className: "x2lah0s xp4054r" }, t[3] = _) : _ = t[3];
		var f;
		t[4] !== i || t[5] !== s || t[6] !== a ? (f = u.jsx("div", babelHelpers.extends({}, _, { children: u.jsx(m, {
			mode: a,
			closed: i,
			hours: s
		}) })), t[4] = i, t[5] = s, t[6] = a, t[7] = f) : f = t[7];
		var g;
		return t[8] !== p || t[9] !== f ? (g = u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "start",
			gap: 12,
			xstyle: d.hoursRow,
			children: [p, f]
		}), t[8] = p, t[9] = f, t[10] = g) : g = t[10], g;
	}
	function f(e) {
		var t = o("react-compiler-runtime").c(29), n = e.businessHours, a = e.label, i = e.saveBusinessProfile, l = e.saveBusinessProfileGraphQL, s;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (s = o("WAWebBizProfileGatingUtils").businessProfileRefreshV2Enabled(), t[0] = s) : s = t[0];
		var m = s, p;
		t[1] !== n || t[2] !== i || t[3] !== l ? (p = function() {
			var e = (n == null ? void 0 : n.mode) != null && (n == null ? void 0 : n.days) != null;
			o("WAWebBusinessProfileSMBUserJourneyLogger").BusinessProfileUserJourneyLogger.clickBusinessHours(e), o("WAWebModalManager").ModalManager.open(u.jsx(c, {
				businessHours: n,
				saveBusinessProfile: i,
				saveBusinessProfileGraphQL: l
			}));
		}, t[1] = n, t[2] = i, t[3] = l, t[4] = p) : p = t[4];
		var f = p;
		if ((n == null ? void 0 : n.mode) == null || (n == null ? void 0 : n.days) == null) {
			var g;
			t[5] === Symbol.for("react.memo_cache_sentinel") ? (g = u.jsx(r("WDSIconIcSchedule.react"), {}), t[5] = g) : g = t[5];
			var h;
			t[6] !== a ? (h = a.toString(), t[6] = a, t[7] = h) : h = t[7];
			var y;
			return t[8] !== f || t[9] !== h ? (y = u.jsx(r("WAWebBusinessProfileTextField.react"), {
				editable: !1,
				icon: g,
				label: "",
				onEditClick: f,
				testid: "biz_profile_business_hours_textfield",
				value: h
			}), t[8] = f, t[9] = h, t[10] = y) : y = t[10], y;
		}
		var C = n.days, b = n.mode, v;
		t[11] === Symbol.for("react.memo_cache_sentinel") ? (v = [d.fieldContainer, m && d.fieldContainerHover], t[11] = v) : v = t[11];
		var S;
		t[12] === Symbol.for("react.memo_cache_sentinel") ? (S = u.jsx(r("WDSIconIcSchedule.react"), {}), t[12] = S) : S = t[12];
		var R;
		t[13] !== b ? (R = o("WAWebBusinessHoursUtils").getModeDisplayName(b).toString(), t[13] = b, t[14] = R) : R = t[14];
		var L;
		t[15] !== f || t[16] !== a || t[17] !== R ? (L = u.jsx(r("WAWebBusinessProfileTextField.react"), {
			editable: !1,
			icon: S,
			label: a,
			onEditClick: f,
			testid: "biz_profile_business_hours_textfield",
			value: R
		}), t[15] = f, t[16] = a, t[17] = R, t[18] = L) : L = t[18];
		var E;
		if (t[19] !== C || t[20] !== b) {
			var k;
			t[22] !== b ? (k = function(t) {
				return u.jsx(_, {
					day: t,
					mode: b
				}, t.dayKey);
			}, t[22] = b, t[23] = k) : k = t[23], E = C.map(k), t[19] = C, t[20] = b, t[21] = E;
		} else E = t[21];
		var I;
		t[24] !== E ? (I = u.jsx(o("WAWebFlex.react").FlexColumn, {
			gap: 12,
			xstyle: d.hoursContainer,
			children: E
		}), t[24] = E, t[25] = I) : I = t[25];
		var T;
		return t[26] !== L || t[27] !== I ? (T = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: v,
			children: [L, I]
		}), t[26] = L, t[27] = I, t[28] = T) : T = t[28], T;
	}
	l.default = f;
}), 226);
