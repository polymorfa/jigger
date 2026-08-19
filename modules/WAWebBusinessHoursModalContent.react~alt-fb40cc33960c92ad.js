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
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t, n = e.businessHoursMode, a = e.day, i = e.onAddHours, l = e.onDayToggle, c = e.onRemoveHours, d = e.onTimeChange, m = n === "specific_hours" && !a.closed && a.hours != null && a.hours.length > 0, p = function() {
			l(a.dayKey);
		}, _ = function() {
			i(a.dayKey);
		}, f = function(t) {
			c(a.dayKey, t);
		};
		return u.jsxs("div", {
			className: "x1xrf6ya xscbp6u",
			children: [u.jsx(r("WDSText.react"), {
				type: "Body1",
				colorName: "contentDefault",
				children: a.dayName
			}), m ? u.jsxs(u.Fragment, { children: [(t = a.hours) == null ? void 0 : t.map(function(e, t) {
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
						onChange: p
					}) : u.jsx(r("WDSButton.react"), {
						size: "medium",
						variant: "borderless",
						Icon: o("WAWebCloseRefreshedIcon.react").CloseRefreshedIcon,
						onPress: function() {
							return f(t);
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
					onPress: _
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
					onChange: p
				})]
			})]
		}, a.dayKey);
	}
	c.displayName = c.name + " [from " + i.id + "]";
	function d(e) {
		var t = e.businessHoursMode, n = e.days, r = e.onAddHours, o = e.onDayToggle, a = e.onRemoveHours, i = e.onTimeChange;
		return t === "specific_hours" || t === "open_24h" || t === "appointment_only" ? u.jsx("div", {
			className: "xb0esv5 xyo0t3i",
			children: n.map(function(e) {
				return u.jsx(c, {
					businessHoursMode: t,
					day: e,
					onAddHours: r,
					onDayToggle: o,
					onRemoveHours: a,
					onTimeChange: i
				}, e.dayKey);
			})
		}) : null;
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
