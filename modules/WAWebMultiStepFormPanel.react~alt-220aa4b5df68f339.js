__d("WAWebMultiStepFormPanel.react", [
	"fbt",
	"WALogger",
	"WAWebFbtCommon",
	"WAWebFrontendMsgGetters",
	"WAWebMultiStepFormButton",
	"WAWebMultiStepFormResponseUtils",
	"WAWebUimUie.react",
	"WDSBaseCheckbox.react",
	"WDSBaseRadio.react",
	"WDSButton.react",
	"WDSIconIcChevronLeft.react",
	"WDSIconIcChevronRight.react",
	"WDSIconIcClose.react",
	"WDSIconIcEdit.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d = c || (c = o("react")), m = c, p = m.useRef, _ = m.useState, f = { customInputIcon: {
		color: "xhslqc4",
		flexShrink: "x2lah0s",
		$$css: !0
	} };
	function g(t) {
		var n = t.formInfo, a = t.msg, i = t.onDismiss, l = t.ref, c = n.steps, m = p(!1), f = _(0), g = f[0], y = f[1], C = _(function() {
			return c.map(function() {
				return {
					selectedIds: new Set(),
					customAnswer: ""
				};
			});
		}), b = C[0], v = C[1], S = c.length, R = c[g], L = b[g], E = g === S - 1, k = function(t) {
			var e = R.variant === o("WAWebMultiStepFormButton").A2UIChoicePickerVariant.MutuallyExclusive;
			v(function(n) {
				var r = [].concat(n);
				if (e) r[g] = babelHelpers.extends({}, r[g], {
					selectedIds: new Set([t]),
					customAnswer: ""
				});
				else {
					var o = new Set(r[g].selectedIds);
					o.has(t) ? o.delete(t) : o.add(t), r[g] = babelHelpers.extends({}, r[g], { selectedIds: o });
				}
				return r;
			});
		}, I = function(t) {
			var e = R.variant === o("WAWebMultiStepFormButton").A2UIChoicePickerVariant.MutuallyExclusive;
			v(function(n) {
				var r = [].concat(n);
				return r[g] = babelHelpers.extends({}, r[g], { customAnswer: t }, e ? { selectedIds: new Set() } : null), r;
			});
		}, T = L.selectedIds.size > 0 || L.customAnswer.trim() !== "", D = async function() {
			if (!m.current) {
				m.current = !0;
				var t = o("WAWebMultiStepFormResponseUtils").buildResponseJson(c, b), n = o("WAWebMultiStepFormResponseUtils").buildResponseBody(c, b), r = o("WAWebFrontendMsgGetters").getChat(a.unsafe());
				if (r == null) {
					o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[MultiStepFormPanel] chat not found for message"]))), i();
					return;
				}
				try {
					await o("WAWebMultiStepFormResponseUtils").sendFormResponse(r, t, n);
				} catch (e) {
					o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[MultiStepFormPanel] failed to send form response: ", ""])), e);
				}
				i();
			}
		}, x = function() {
			T && (E ? D() : y(function(e) {
				return e + 1;
			}));
		}, $ = function() {
			g > 0 && y(function(e) {
				return e - 1;
			});
		}, P = s._(
			/*BTDS*/
			"",
			[s._param("current", g + 1), s._param("total", S)]
		);
		return d.jsx(o("WAWebUimUie.react").UIE, {
			ref: l,
			displayName: "MultiStepFormPanel",
			escapable: !0,
			requestDismiss: i,
			children: d.jsxs("div", {
				className: "x78zum5 xdt5ytf xh8yej3 x3d5gib xk7ee7b xuqqiot x1lkg3h2 xcouhex x17mbzc4 xkfubxc x1o7ofs5",
				"data-testid": "multistep_form_panel",
				children: [
					d.jsxs("div", {
						className: "x78zum5 x6s0dn4 x1qughib x12w63v0 x1nzty39 x1xrf6ya xscbp6u",
						children: [d.jsxs("div", {
							className: "x78zum5 x6s0dn4 x129bwdz x1trrmfo",
							children: [
								d.jsx(r("WDSButton.react"), {
									Icon: r("WDSIconIcChevronLeft.react"),
									variant: "borderless",
									disabled: g === 0,
									onPress: $,
									"aria-label": s._(
										/*BTDS*/
										""
									)
								}),
								d.jsx(r("WDSText.react"), {
									type: "Body2",
									colorName: "contentDefault",
									children: P
								}),
								d.jsx(r("WDSButton.react"), {
									Icon: r("WDSIconIcChevronRight.react"),
									variant: "borderless",
									disabled: !T,
									onPress: x,
									"aria-label": E ? s._(
										/*BTDS*/
										""
									) : s._(
										/*BTDS*/
										""
									)
								})
							]
						}), d.jsx(r("WDSButton.react"), {
							Icon: r("WDSIconIcClose.react"),
							variant: "borderless",
							onPress: i,
							"aria-label": r("WAWebFbtCommon")("Cancel")
						})]
					}),
					d.jsx("div", {
						className: "x1phvje8 xcldk2z x12xbjc7",
						children: d.jsx(r("WDSText.react"), {
							type: "Body1Emphasized",
							colorName: "contentDefault",
							children: R.label
						})
					}),
					d.jsx("div", {
						className: "x1iyjqo2 x2lwn1j x1odjw0f x12xbjc7",
						"data-testid": "multistep_form_options",
						children: d.jsx(h, {
							step: R,
							selection: L,
							onToggle: k,
							onCustomAnswerChange: I
						})
					}),
					T && d.jsx("div", {
						className: "x1phvje8 xcldk2z xscbp6u",
						"data-testid": "multistep_form_footer",
						children: d.jsx(r("WDSButton.react"), {
							label: E ? s._(
								/*BTDS*/
								""
							) : s._(
								/*BTDS*/
								""
							),
							variant: "filled",
							onPress: x,
							widthMode: "flexible"
						})
					})
				]
			})
		});
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(e) {
		var t = e.onCustomAnswerChange, n = e.onToggle, a = e.selection, i = e.step, l = i.variant === o("WAWebMultiStepFormButton").A2UIChoicePickerVariant.MutuallyExclusive;
		return d.jsxs("fieldset", {
			className: "x1ejq31n x18oe1m7 x1sy0etr xstzfhl xexx8yu xyri2b x18d9i69 x1c1uobl xdj266r x14z9mp xat24cr x1lziwak",
			"aria-label": i.label,
			role: l ? "radiogroup" : "group",
			children: [i.options.map(function(e) {
				return d.jsxs("label", {
					className: "x78zum5 x6s0dn4 x8a3fw1 x1aj3ljl x1phvje8 xcldk2z x1xrf6ya xscbp6u x1ypdohk x1ubxc9n",
					"data-testid": "multistep_form_option_row",
					children: [l ? d.jsx(r("WDSBaseRadio.react"), {
						name: i.id,
						value: e.id,
						checked: a.selectedIds.has(e.id),
						onChange: n
					}) : d.jsx(r("WDSBaseCheckbox.react"), {
						value: a.selectedIds.has(e.id),
						onChange: function() {
							return n(e.id);
						}
					}), d.jsx(r("WDSText.react"), {
						type: "Body1",
						colorName: "contentDefault",
						children: e.title
					})]
				}, e.id);
			}), i.allow_custom_answer === !0 && d.jsxs(d.Fragment, { children: [d.jsx("div", { className: "x6pxu1d xd6izgl x178xt8z x13fuv20 xx42vgk" }), d.jsxs("div", {
				className: "x78zum5 x6s0dn4 x8a3fw1 x1aj3ljl x1phvje8 xcldk2z x1xrf6ya xscbp6u",
				children: [d.jsx(r("WDSIconIcEdit.react"), { xstyle: f.customInputIcon }), d.jsx("input", {
					className: "x1iyjqo2 x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1t137rt x1md70p1 xln7xf2 x1qlqyl8 x14ug900 xexx8yu xyri2b x18d9i69 x1c1uobl x1hcheoe",
					type: "text",
					"aria-label": s._(
						/*BTDS*/
						""
					),
					placeholder: s._(
						/*BTDS*/
						""
					),
					value: a.customAnswer,
					onChange: function(n) {
						return t(n.target.value);
					},
					"data-testid": "multistep_form_custom_input"
				})]
			})] })]
		});
	}
	h.displayName = h.name + " [from " + i.id + "]", l.default = g;
}), 226);
