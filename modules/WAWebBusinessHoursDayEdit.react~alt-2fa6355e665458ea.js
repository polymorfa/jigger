__d("WAWebBusinessHoursDayEdit.react", [
	"fbt",
	"$InternalEnum",
	"WAWebBusinessHoursUtils",
	"WAWebBusinessProfileTypes",
	"WAWebCheckBox.react",
	"WAWebChipButton.react",
	"WAWebRichTextField.react",
	"WAWebSmbUtilsTimeUtils",
	"WAWebStatusClockIcon.react",
	"WAWebXAltIcon.react",
	"WDSButton.react",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = {
		hoursAnd: {
			color: "x1164gpu",
			$$css: !0
		},
		timeWrapper: {
			display: "x1rg5ohu",
			$$css: !0
		}
	}, m = n("$InternalEnum").Mirrored(["START", "END"]), p = 2, _ = " ", f = function(t) {
		var e = t.dayKey;
		return e + "_business_hours";
	};
	function g(t) {
		var n = t.day, a = t.onChange, i = n.closed, l = f(n);
		return c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WDSPaddings.stylex").wdsPaddings.paddingVer20, o("WDSPaddings.stylex").wdsPaddings.paddingHor24), { children: c.jsx(o("WAWebCheckBox.react").CheckBox, {
			id: l,
			checked: !i,
			onChange: a
		}) }));
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(t) {
		var n = t.onClick;
		return c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props([d.timeWrapper, o("WDSMargins.stylex").wdsMargins.marginStart20]), { children: c.jsx(r("WDSButton.react"), {
			"aria-label": s._(
				/*BTDS*/
				""
			),
			Icon: o("WAWebXAltIcon.react").XAltIcon,
			onPress: n,
			variant: "borderless"
		}) }));
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y(t) {
		var n = t.onClick;
		return c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props([d.timeWrapper, o("WDSMargins.stylex").wdsMargins.marginStart20]), { children: c.jsx(r("WAWebChipButton.react"), {
			"aria-label": s._(
				/*BTDS*/
				""
			),
			label: s._(
				/*BTDS*/
				""
			),
			onClick: n,
			PrefixIcon: o("WAWebStatusClockIcon.react").StatusClockIcon,
			iconTheme: "padded-svg"
		}) }));
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C(t) {
		var n = t.isFirst, a = t.onBlur, i = t.onChange, l = t.value, s = o("WAWebBusinessHoursUtils").isValidTime(l) ? null : _;
		return c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props([
			d.timeWrapper,
			o("WDSMargins.stylex").wdsMargins.marginStart20,
			n === !0 && o("WDSMargins.stylex").wdsMargins.marginStart0
		]), { children: c.jsx(o("WAWebRichTextField.react").RichTextField, {
			managed: !0,
			value: l,
			theme: "small",
			maxLength: 15,
			customStyleThemes: [o("WAWebRichTextField.react").TextInputCustomStyleThemes.Desaturated, o("WAWebRichTextField.react").TextInputCustomStyleThemes.NoErrorInfo],
			error: s,
			onChange: function(t) {
				var e = t.text;
				i(e);
			},
			onBlur: a
		}) }));
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b(t) {
		var n = t.hours, a = t.onHoursChange, i = function(t) {
			var e = t.intervalIndex, r = t.type, o = t.value, a = [].concat(n), i = r === m.START ? 0 : 1, l = [].concat(a[e]);
			return l[i] = o, a[e] = l, a;
		}, l = function(t, r) {
			var e = [].concat(n), a = o("WAWebSmbUtilsTimeUtils").timeStringToMinutes(t[0]), i = o("WAWebSmbUtilsTimeUtils").timeStringToMinutes(t[1]);
			return e[r] = [a !== void 0 ? o("WAWebSmbUtilsTimeUtils").minutesToTime(a) : e[r][0], i !== void 0 ? o("WAWebSmbUtilsTimeUtils").minutesToTime(i) : e[r][1]], e;
		}, u = function(t, r) {
			var e = [].concat(n), a = [].concat(e[t]), i = o("WAWebSmbUtilsTimeUtils").timeStringToMinutes(a[0]), s = o("WAWebSmbUtilsTimeUtils").timeStringToMinutes(a[1]);
			if (i !== void 0 && s !== void 0 && i > s) {
				var u = r === m.START ? 0 : 1, c = r === m.START ? 1 : 0;
				a[c] = a[u];
			}
			return e[t] = a, l(e[t], t);
		}, _ = function() {
			return [].concat(n, [o("WAWebBusinessHoursUtils").getDefaultHoursPair()]);
		}, f = function() {
			return n.slice(0, -1);
		}, g = [], b = n.length >= p ? c.jsx(h, { onClick: function() {
			a(f());
		} }) : c.jsx(y, { onClick: function() {
			a(_());
		} });
		return n.forEach(function(t, n) {
			var l = t[0], p = t[1];
			n > 0 && g.push(c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(d.hoursAnd, o("WDSMargins.stylex").wdsMargins.marginHor20), { children: s._(
				/*BTDS*/
				""
			) }), "AND-" + n)), g.push(c.jsx(C, {
				value: l,
				onChange: function(t) {
					a(i({
						intervalIndex: n,
						type: m.START,
						value: t
					}));
				},
				onBlur: function() {
					var e = u(n, m.START);
					e && a(e);
				},
				isFirst: !0
			}, m.START + "-" + n), c.jsx(C, {
				value: p,
				onChange: function(t) {
					a(i({
						intervalIndex: n,
						type: m.END,
						value: t
					}));
				},
				onBlur: function() {
					var e = u(n, m.END);
					e && a(e);
				}
			}, m.END + "-" + n));
		}), c.jsxs("div", {
			className: "x6s0dn4 x78zum5",
			children: [g, b]
		});
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v(e) {
		var t = e.textContent;
		return c.jsx("div", {
			className: "xhslqc4",
			children: t
		});
	}
	v.displayName = v.name + " [from " + i.id + "]";
	function S(e) {
		var t = e.day, n = e.mode, r = e.onHoursChange, a = t.closed, i = t.hours;
		return a ? c.jsx(v, { textContent: s._(
			/*BTDS*/
			""
		) }) : n === o("WAWebBusinessProfileTypes").BUSINESS_HOUR_MODES.APPOINTMENT_ONLY ? c.jsx(v, { textContent: s._(
			/*BTDS*/
			""
		) }) : n === o("WAWebBusinessProfileTypes").BUSINESS_HOUR_MODES.OPEN_24H ? c.jsx(v, { textContent: s._(
			/*BTDS*/
			""
		) }) : o("WAWebBusinessProfileTypes").BUSINESS_HOUR_MODES.SPECIFIC_HOURS && !a ? c.jsx(b, {
			hours: i,
			onHoursChange: r
		}) : null;
	}
	S.displayName = S.name + " [from " + i.id + "]";
	function R(e) {
		var t = e.day, n = e.mode, r = e.updateDayValue, o = t.closed, a = t.dayKey, i = t.dayName, l = f(t);
		return c.jsxs("div", {
			className: "x78zum5",
			children: [c.jsx(g, {
				day: t,
				onChange: function() {
					r({ closed: !o });
				}
			}), c.jsxs("div", {
				className: "x1iyjqo2 x1d0ri9u x1ug4tga",
				children: [c.jsx("label", {
					htmlFor: l,
					children: i
				}), c.jsx(S, {
					day: t,
					mode: n,
					onHoursChange: function(t) {
						r({ hours: t });
					}
				})]
			})]
		}, "day-" + a);
	}
	R.displayName = R.name + " [from " + i.id + "]", l.default = R;
}), 226);
