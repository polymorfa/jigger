__d("WAWebBusinessHoursModalContent.react", [
	"fbt",
	"WAWebBusinessHoursUtils",
	"WAWebBusinessProfileLabels",
	"WAWebCloseRefreshedIcon.react",
	"WAWebMinusIcon.react",
	"WDSButton.react",
	"WDSIconIcAdd.react",
	"WDSSwitch.react",
	"WDSText.react",
	"WDSTextField.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(24), n = e.businessHoursMode, a = e.day, i = e.onAddHours, l = e.onDayToggle, c = e.onRemoveHours, d = e.onTimeChange, m = n === "specific_hours" && !a.closed && a.hours != null && a.hours.length > 0, p;
		t[0] !== a.dayKey || t[1] !== l ? (p = function() {
			l(a.dayKey);
		}, t[0] = a.dayKey, t[1] = l, t[2] = p) : p = t[2];
		var _ = p, f;
		t[3] !== a.dayKey || t[4] !== i ? (f = function() {
			i(a.dayKey);
		}, t[3] = a.dayKey, t[4] = i, t[5] = f) : f = t[5];
		var g = f, h;
		t[6] !== a.dayKey || t[7] !== c ? (h = function(t) {
			c(a.dayKey, t);
		}, t[6] = a.dayKey, t[7] = c, t[8] = h) : h = t[8];
		var y = h, C = a.dayKey, b;
		t[9] === Symbol.for("react.memo_cache_sentinel") ? (b = { className: "x1xrf6ya xscbp6u" }, t[9] = b) : b = t[9];
		var v;
		t[10] !== a.dayName ? (v = u.jsx(r("WDSText.react"), {
			type: "Body1",
			colorName: "contentDefault",
			children: a.dayName
		}), t[10] = a.dayName, t[11] = v) : v = t[11];
		var S;
		if (t[12] !== n || t[13] !== a || t[14] !== g || t[15] !== y || t[16] !== _ || t[17] !== m || t[18] !== d) {
			var R;
			S = m ? u.jsxs(u.Fragment, { children: [(R = a.hours) == null ? void 0 : R.map(function(e, t) {
				var n = t === 0;
				return u.jsxs("div", babelHelpers.extends({}, {
					0: { className: "x6s0dn4 x78zum5 x1qughib x1380le5 xh8yej3" },
					1: { className: "x6s0dn4 x78zum5 x1qughib xh8yej3 x1380le5" }
				}[!n << 0], { children: [u.jsxs("div", {
					className: "x78zum5 x98rzlu xdt5ytf",
					children: [u.jsxs("div", {
						className: "x6s0dn4 xs2akgl x78zum5 x193iq5w",
						children: [
							u.jsx("div", {
								className: "x13qkkhc xeuugli x1n2onr6",
								children: u.jsx(r("WDSTextField.react"), {
									label: s._(
										/*BTDS*/
										""
									),
									testid: "biz_profile_business_hours_open_textfield",
									value: e[0],
									onValueChange: function(n) {
										return d(a.dayKey, t, "open", n);
									},
									error: !o("WAWebBusinessHoursUtils").isValidTime(e[0])
								})
							}),
							u.jsx("div", {
								className: "x6s0dn4 x78zum5 xl56j7k",
								children: u.jsx(o("WAWebMinusIcon.react").MinusIcon, {})
							}),
							u.jsx("div", {
								className: "x13qkkhc xeuugli x1n2onr6",
								children: u.jsx(r("WDSTextField.react"), {
									label: s._(
										/*BTDS*/
										""
									),
									testid: "biz_profile_business_hours_close_textfield",
									value: e[1],
									onValueChange: function(n) {
										return d(a.dayKey, t, "close", n);
									},
									error: !o("WAWebBusinessHoursUtils").isValidTime(e[1])
								})
							})
						]
					}), (!o("WAWebBusinessHoursUtils").isValidTime(e[0]) || !o("WAWebBusinessHoursUtils").isValidTime(e[1])) && u.jsx("div", {
						className: "x1380le5",
						children: u.jsx(r("WDSText.react"), {
							type: "Body3",
							colorName: "secondaryNegativeEmphasized",
							children: o("WAWebBusinessProfileLabels").getInvalidTimeErrorLabel()
						})
					})]
				}), u.jsx("div", {
					className: "x78zum5",
					children: n ? u.jsx(r("WDSSwitch.react"), {
						value: !a.closed,
						onChange: _
					}) : u.jsx(r("WDSButton.react"), {
						size: "medium",
						variant: "borderless",
						Icon: o("WAWebCloseRefreshedIcon.react").CloseRefreshedIcon,
						onPress: function() {
							return y(t);
						}
					})
				})] }), t);
			}), a.hours != null && a.hours.length < 2 ? u.jsx("div", {
				className: "x6s0dn4 x78zum5 x1qughib xh8yej3 x1380le5",
				children: u.jsx(r("WDSButton.react"), {
					size: "medium",
					variant: "borderless",
					type: "default",
					Icon: r("WDSIconIcAdd.react"),
					label: s._(
						/*BTDS*/
						""
					),
					onPress: g
				})
			}) : null] }) : u.jsxs("div", {
				className: "x6s0dn4 x78zum5 x1qughib",
				children: [(function() {
					return n === "specific_hours" && !a.closed ? u.jsx(r("WDSText.react"), {
						type: "Body2",
						colorName: "contentDeemphasized",
						children: s._(
							/*BTDS*/
							""
						)
					}) : u.jsx(r("WDSText.react"), {
						type: "Body2",
						colorName: "contentDeemphasized",
						children: o("WAWebBusinessHoursUtils").getStatusText(n, a)
					});
				})(), u.jsx(r("WDSSwitch.react"), {
					value: !a.closed,
					onChange: _
				})]
			}), t[12] = n, t[13] = a, t[14] = g, t[15] = y, t[16] = _, t[17] = m, t[18] = d, t[19] = S;
		} else S = t[19];
		var L;
		return t[20] !== a.dayKey || t[21] !== v || t[22] !== S ? (L = u.jsxs("div", babelHelpers.extends({}, b, { children: [v, S] }), C), t[20] = a.dayKey, t[21] = v, t[22] = S, t[23] = L) : L = t[23], L;
	}
	function d(e) {
		var t = o("react-compiler-runtime").c(16), n = e.businessHoursMode, r = e.days, a = e.onAddHours, i = e.onDayToggle, l = e.onRemoveHours, s = e.onTimeChange;
		if (n === "specific_hours" || n === "open_24h" || n === "appointment_only") {
			var d;
			t[0] === Symbol.for("react.memo_cache_sentinel") ? (d = { className: "xb0esv5 xyo0t3i" }, t[0] = d) : d = t[0];
			var m;
			if (t[1] !== n || t[2] !== r || t[3] !== a || t[4] !== i || t[5] !== l || t[6] !== s) {
				var p;
				t[8] !== n || t[9] !== a || t[10] !== i || t[11] !== l || t[12] !== s ? (p = function(t) {
					return u.jsx(c, {
						businessHoursMode: n,
						day: t,
						onAddHours: a,
						onDayToggle: i,
						onRemoveHours: l,
						onTimeChange: s
					}, t.dayKey);
				}, t[8] = n, t[9] = a, t[10] = i, t[11] = l, t[12] = s, t[13] = p) : p = t[13], m = r.map(p), t[1] = n, t[2] = r, t[3] = a, t[4] = i, t[5] = l, t[6] = s, t[7] = m;
			} else m = t[7];
			var _;
			return t[14] !== m ? (_ = u.jsx("div", babelHelpers.extends({}, d, { children: m })), t[14] = m, t[15] = _) : _ = t[15], _;
		}
		return null;
	}
	l.default = d;
}), 226);
