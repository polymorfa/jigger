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
	"asyncToGeneratorRuntime",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d = c || (c = o("react")), m = c, p = m.useRef, _ = m.useState, f = { customInputIcon: {
		color: "xhslqc4",
		flexShrink: "x2lah0s",
		$$css: !0
	} };
	function g(t) {
		var a = t.formInfo, i = t.msg, l = t.onDismiss, c = t.ref, m = a.steps, f = p(!1), g = _(0), y = g[0], C = g[1], b = _(function() {
			return m.map(function() {
				return {
					selectedIds: new Set(),
					customAnswer: ""
				};
			});
		}), v = b[0], S = b[1], R = m.length, L = m[y], E = v[y], k = y === R - 1, I = function(t) {
			var e = L.variant === o("WAWebMultiStepFormButton").A2UIChoicePickerVariant.MutuallyExclusive;
			S(function(n) {
				var r = [].concat(n);
				if (e) r[y] = babelHelpers.extends({}, r[y], {
					selectedIds: new Set([t]),
					customAnswer: ""
				});
				else {
					var o = new Set(r[y].selectedIds);
					o.has(t) ? o.delete(t) : o.add(t), r[y] = babelHelpers.extends({}, r[y], { selectedIds: o });
				}
				return r;
			});
		}, T = function(t) {
			var e = L.variant === o("WAWebMultiStepFormButton").A2UIChoicePickerVariant.MutuallyExclusive;
			S(function(n) {
				var r = [].concat(n);
				return r[y] = babelHelpers.extends({}, r[y], { customAnswer: t }, e ? { selectedIds: new Set() } : null), r;
			});
		}, D = E.selectedIds.size > 0 || E.customAnswer.trim() !== "", x = (function() {
			var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				if (!f.current) {
					f.current = !0;
					var t = o("WAWebMultiStepFormResponseUtils").buildResponseJson(m, v), n = o("WAWebMultiStepFormResponseUtils").buildResponseBody(m, v), r = o("WAWebFrontendMsgGetters").getChat(i.unsafe());
					if (r == null) {
						o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[MultiStepFormPanel] chat not found for message"]))), l();
						return;
					}
					try {
						yield o("WAWebMultiStepFormResponseUtils").sendFormResponse(r, t, n);
					} catch (e) {
						o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[MultiStepFormPanel] failed to send form response: ", ""])), e);
					}
					l();
				}
			});
			return function() {
				return t.apply(this, arguments);
			};
		})(), $ = function() {
			D && (k ? x() : C(function(e) {
				return e + 1;
			}));
		}, P = function() {
			y > 0 && C(function(e) {
				return e - 1;
			});
		}, N = s._(
			/*BTDS*/
			"",
			[s._param("current", y + 1), s._param("total", R)]
		);
		return d.jsx(o("WAWebUimUie.react").UIE, {
			ref: c,
			displayName: "MultiStepFormPanel",
			escapable: !0,
			requestDismiss: l,
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
									disabled: y === 0,
									onPress: P,
									"aria-label": s._(
										/*BTDS*/
										""
									)
								}),
								d.jsx(r("WDSText.react"), {
									type: "Body2",
									colorName: "contentDefault",
									children: N
								}),
								d.jsx(r("WDSButton.react"), {
									Icon: r("WDSIconIcChevronRight.react"),
									variant: "borderless",
									disabled: !D,
									onPress: $,
									"aria-label": k ? s._(
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
							onPress: l,
							"aria-label": r("WAWebFbtCommon")("Cancel")
						})]
					}),
					d.jsx("div", {
						className: "x1phvje8 xcldk2z x12xbjc7",
						children: d.jsx(r("WDSText.react"), {
							type: "Body1Emphasized",
							colorName: "contentDefault",
							children: L.label
						})
					}),
					d.jsx("div", {
						className: "x1iyjqo2 x2lwn1j x1odjw0f x12xbjc7",
						"data-testid": "multistep_form_options",
						children: d.jsx(h, {
							step: L,
							selection: E,
							onToggle: I,
							onCustomAnswerChange: T
						})
					}),
					D && d.jsx("div", {
						className: "x1phvje8 xcldk2z xscbp6u",
						"data-testid": "multistep_form_footer",
						children: d.jsx(r("WDSButton.react"), {
							label: k ? s._(
								/*BTDS*/
								""
							) : s._(
								/*BTDS*/
								""
							),
							variant: "filled",
							onPress: $,
							widthMode: "flexible"
						})
					})
				]
			})
		});
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(e) {
		var t = o("react-compiler-runtime").c(21), n = e.onCustomAnswerChange, a = e.onToggle, i = e.selection, l = e.step, u = l.variant === o("WAWebMultiStepFormButton").A2UIChoicePickerVariant.MutuallyExclusive, c;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (c = { className: "x1ejq31n x18oe1m7 x1sy0etr xstzfhl xexx8yu xyri2b x18d9i69 x1c1uobl xdj266r x14z9mp xat24cr x1lziwak" }, t[0] = c) : c = t[0];
		var m = l.label, p = u ? "radiogroup" : "group", _;
		if (t[1] !== u || t[2] !== a || t[3] !== i || t[4] !== l.id || t[5] !== l.options) {
			var g;
			t[7] !== u || t[8] !== a || t[9] !== i || t[10] !== l.id ? (g = function(t) {
				return d.jsxs("label", {
					className: "x78zum5 x6s0dn4 x8a3fw1 x1aj3ljl x1phvje8 xcldk2z x1xrf6ya xscbp6u x1ypdohk x1ubxc9n",
					"data-testid": "multistep_form_option_row",
					children: [u ? d.jsx(r("WDSBaseRadio.react"), {
						name: l.id,
						value: t.id,
						checked: i.selectedIds.has(t.id),
						onChange: a
					}) : d.jsx(r("WDSBaseCheckbox.react"), {
						value: i.selectedIds.has(t.id),
						onChange: function() {
							return a(t.id);
						}
					}), d.jsx(r("WDSText.react"), {
						type: "Body1",
						colorName: "contentDefault",
						children: t.title
					})]
				}, t.id);
			}, t[7] = u, t[8] = a, t[9] = i, t[10] = l.id, t[11] = g) : g = t[11], _ = l.options.map(g), t[1] = u, t[2] = a, t[3] = i, t[4] = l.id, t[5] = l.options, t[6] = _;
		} else _ = t[6];
		var h;
		t[12] !== n || t[13] !== i || t[14] !== l.allow_custom_answer ? (h = l.allow_custom_answer === !0 && d.jsxs(d.Fragment, { children: [d.jsx("div", { className: "x6pxu1d xd6izgl x178xt8z x13fuv20 xx42vgk" }), d.jsxs("div", {
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
				value: i.customAnswer,
				onChange: function(t) {
					return n(t.target.value);
				},
				"data-testid": "multistep_form_custom_input"
			})]
		})] }), t[12] = n, t[13] = i, t[14] = l.allow_custom_answer, t[15] = h) : h = t[15];
		var y;
		return t[16] !== l.label || t[17] !== p || t[18] !== _ || t[19] !== h ? (y = d.jsxs("fieldset", babelHelpers.extends({}, c, {
			"aria-label": m,
			role: p,
			children: [_, h]
		})), t[16] = l.label, t[17] = p, t[18] = _, t[19] = h, t[20] = y) : y = t[20], y;
	}
	l.default = g;
}), 226);
