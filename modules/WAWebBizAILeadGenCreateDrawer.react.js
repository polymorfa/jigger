__d("WAWebBizAILeadGenCreateDrawer.react", [
	"fbt",
	"WAWebBizAILargeScreensLogEvents",
	"WAWebBizAILeadGenAddFieldView.react",
	"WAWebBizAILeadGenAddMoreInfoButton.react",
	"WAWebBizAiLeadGenCreateMutation",
	"WAWebToast.react",
	"WAWebToastManager",
	"WDSBaseCheckbox.react",
	"WDSBaseRadio.react",
	"WDSButton.react",
	"WDSIconIcArrowBack.react",
	"WDSIconIcClose.react",
	"WDSText.react",
	"WDSTextField.react",
	"countWhere",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useEffect, p = c.useMemo, _ = c.useState, f = 100;
	function g() {
		return [
			{
				label: s._(
					/*BTDS*/
					""
				),
				singleUse: !0,
				value: "READY_TO_BUY"
			},
			{
				label: s._(
					/*BTDS*/
					""
				),
				singleUse: !0,
				value: "NEW_CHAT_BEGINS"
			},
			{
				label: s._(
					/*BTDS*/
					""
				),
				singleUse: !1,
				value: "CUSTOM_MOMENT"
			}
		];
	}
	function h() {
		return {
			CUSTOM_MOMENT: ["Name", "Product or Service"],
			NEW_CHAT_BEGINS: [
				"Name",
				"Address",
				"Product or Service"
			],
			READY_TO_BUY: [
				"Name",
				"Delivery Address",
				"Product or Service"
			]
		};
	}
	function y() {
		return {
			CUSTOM_MOMENT: s._(
				/*BTDS*/
				""
			),
			NEW_CHAT_BEGINS: s._(
				/*BTDS*/
				""
			),
			READY_TO_BUY: s._(
				/*BTDS*/
				""
			)
		};
	}
	function C(e) {
		var t = o("react-compiler-runtime").c(65), n = e.existingFlows, a = e.onBack, i = e.onSaved, l;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (l = g(), t[0] = l) : l = t[0];
		var c = l, d;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (d = y(), t[1] = d) : d = t[1];
		var p = d, C = _(""), S = C[0], R = C[1], L = _(""), E = L[0], k = L[1], I;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (I = {}, t[2] = I) : I = t[2];
		var T = _(I), D = T[0], x = T[1], $ = _(!1), P = $[0], N = $[1], M = _("moment"), w = M[0], A = M[1], F;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (F = [], t[3] = F) : F = t[3], m(v, F);
		var O;
		t[4] !== n ? (O = new Set(n.flatMap(b)), t[4] = n, t[5] = O) : O = t[5];
		var B = O, W;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (W = function(t) {
			var e;
			R(t);
			var n = h(), r = (e = n[t]) != null ? e : [], o = {};
			for (var a of r) o[a] = !0;
			x(o);
		}, t[6] = W) : W = t[6];
		var q = W, U;
		t[7] !== E || t[8] !== S ? (U = S === "CUSTOM_MOMENT" && (E.trim() === "" || E.trim().length > f), t[7] = E, t[8] = S, t[9] = U) : U = t[9];
		var V = U, H;
		t[10] !== V || t[11] !== S ? (H = function() {
			S === "" || V || (o("WAWebBizAILargeScreensLogEvents").logViewLeadGenFieldSelection(), A("fields"));
		}, t[10] = V, t[11] = S, t[12] = H) : H = t[12];
		var G = H, z;
		t[13] === Symbol.for("react.memo_cache_sentinel") ? (z = function(t) {
			x(function(e) {
				var n;
				return babelHelpers.extends({}, e, (n = {}, n[t] = !e[t], n));
			});
		}, t[13] = z) : z = t[13];
		var j = z, K;
		t[14] === Symbol.for("react.memo_cache_sentinel") ? (K = function() {
			A("addField");
		}, t[14] = K) : K = t[14];
		var Q = K, X;
		t[15] !== D ? (X = function(t) {
			var e = t.toLowerCase();
			if (Object.keys(D).some(function(t) {
				return t.toLowerCase() === e;
			})) {
				o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: s._(
					/*BTDS*/
					""
				) }));
				return;
			}
			x(function(e) {
				var n;
				return babelHelpers.extends({}, e, (n = {}, n[t] = !0, n));
			}), A("fields");
		}, t[15] = D, t[16] = X) : X = t[16];
		var Y = X, J;
		t[17] === Symbol.for("react.memo_cache_sentinel") ? (J = function() {
			A("fields");
		}, t[17] = J) : J = t[17];
		var Z = J, ee;
		t[18] !== D ? (ee = r("countWhere")(Object.values(D), Boolean), t[18] = D, t[19] = ee) : ee = t[19];
		var te = ee, ne = te > 0, re;
		t[20] !== E || t[21] !== D || t[22] !== ne || t[23] !== P || t[24] !== S || t[25] !== i ? (re = function() {
			if (!(P || !ne)) {
				o("WAWebBizAILargeScreensLogEvents").logClickSaveLeadGenForm(), N(!0);
				var e = Object.keys(D).map(function(e) {
					return {
						is_enabled: D[e] === !0,
						label: e
					};
				});
				o("WAWebBizAiLeadGenCreateMutation").createLeadGenFlow({
					custom_moment: S === "CUSTOM_MOMENT" ? E.trim() : null,
					fields: e,
					moment_type: S
				}).then(function(e) {
					o("WAWebBizAILargeScreensLogEvents").logApiSaveLeadGenFormResult(e.isSuccess), e.isSuccess ? i() : (o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: s._(
						/*BTDS*/
						""
					) })), N(!1));
				}).catch(function() {
					o("WAWebBizAILargeScreensLogEvents").logApiSaveLeadGenFormResult(!1), o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: s._(
						/*BTDS*/
						""
					) })), N(!1);
				});
			}
		}, t[20] = E, t[21] = D, t[22] = ne, t[23] = P, t[24] = S, t[25] = i, t[26] = re) : re = t[26];
		var oe = re;
		if (w === "addField") {
			var ae;
			return t[27] !== Y ? (ae = u.jsx(r("WAWebBizAILeadGenAddFieldView.react"), {
				onBack: Z,
				onSave: Y,
				testid: "biz-ai-lead-gen-create-add-field"
			}), t[27] = Y, t[28] = ae) : ae = t[28], ae;
		}
		var ie;
		if (t[29] !== S || t[30] !== w) {
			var le;
			ie = w === "moment" ? s._(
				/*BTDS*/
				""
			) : (le = p[S]) != null ? le : s._(
				/*BTDS*/
				""
			), t[29] = S, t[30] = w, t[31] = ie;
		} else ie = t[31];
		var se = ie, ue;
		t[32] !== a || t[33] !== w ? (ue = w === "fields" ? function() {
			return A("moment");
		} : a, t[32] = a, t[33] = w, t[34] = ue) : ue = t[34];
		var ce = ue, de;
		t[35] !== E || t[36] !== V || t[37] !== te || t[38] !== D || t[39] !== G || t[40] !== oe || t[41] !== ne || t[42] !== P || t[43] !== S || t[44] !== a || t[45] !== w || t[46] !== B ? (de = u.jsx(u.Fragment, { children: w === "moment" ? u.jsxs(u.Fragment, { children: [
			u.jsx("div", {
				className: "x1xrf6ya xscbp6u x1iw51ew xde1mab",
				children: u.jsx(r("WDSText.react"), {
					colorName: "contentDeemphasized",
					type: "Body2",
					children: s._(
						/*BTDS*/
						""
					)
				})
			}),
			u.jsx("div", {
				"aria-label": s._(
					/*BTDS*/
					""
				),
				role: "radiogroup",
				children: c.filter(function(e) {
					return !e.singleUse || !B.has(e.value);
				}).map(function(e) {
					return u.jsxs("label", {
						"data-testid": "moment-type-" + e.value,
						className: "x6s0dn4 xyi3aci xwf5gio x1p453bz x1suzm8a x1ypdohk x78zum5 x8a3fw1 x1aj3ljl x889kno x1a8lsjc x1iw51ew xde1mab",
						children: [u.jsx(r("WDSBaseRadio.react"), {
							checked: S === e.value,
							name: "moment-type",
							onChange: function() {
								return q(e.value);
							},
							value: e.value
						}), u.jsx(r("WDSText.react"), {
							colorName: "contentDefault",
							type: "Body1",
							children: e.label
						})]
					}, e.value);
				})
			}),
			S === "CUSTOM_MOMENT" ? u.jsx("div", {
				className: "x1xrf6ya",
				children: u.jsx(r("WDSTextField.react"), {
					value: E,
					label: s._(
						/*BTDS*/
						""
					),
					maxCharacterCount: f,
					onValueChange: function(t) {
						return k(t.slice(0, f));
					},
					testid: "custom-moment-input"
				})
			}) : null,
			u.jsxs("div", {
				className: "x78zum5 x1qvou4u x1s70e7g x13a6bvl x1xrf6ya xscbp6u x1iw51ew xde1mab",
				children: [u.jsx(r("WDSButton.react"), {
					variant: "tonal",
					size: "small",
					label: s._(
						/*BTDS*/
						""
					),
					onPress: a,
					testid: "lead-gen-cancel-btn"
				}), u.jsx(r("WDSButton.react"), {
					variant: "filled",
					size: "small",
					label: s._(
						/*BTDS*/
						""
					),
					onPress: G,
					disabled: S === "" || V,
					testid: "lead-gen-next-btn"
				})]
			})
		] }) : u.jsxs(u.Fragment, { children: [
			u.jsx("div", {
				className: "x1xrf6ya xscbp6u x1iw51ew xde1mab",
				children: u.jsx(r("WDSText.react"), {
					colorName: "contentDeemphasized",
					type: "Body2",
					children: s._(
						/*BTDS*/
						""
					)
				})
			}),
			Object.keys(D).map(function(e) {
				var t = D[e] === !0;
				return u.jsxs("div", {
					role: "button",
					tabIndex: 0,
					onClick: function() {
						return j(e);
					},
					onKeyDown: function(n) {
						(n.key === "Enter" || n.key === " ") && (n.preventDefault(), j(e));
					},
					className: "x6s0dn4 xyi3aci xwf5gio x1p453bz x1suzm8a x1ypdohk x78zum5 x8a3fw1 x1aj3ljl x889kno x1a8lsjc x1iw51ew xde1mab x1ubxc9n",
					"data-testid": "field-toggle-" + e,
					children: [u.jsx(r("WDSBaseCheckbox.react"), { value: t }), u.jsx(r("WDSText.react"), {
						colorName: "contentDefault",
						type: "Body1",
						children: e
					})]
				}, e);
			}),
			u.jsx(r("WAWebBizAILeadGenAddMoreInfoButton.react"), {
				onPress: Q,
				testid: "lead-gen-create-add-more-info-btn"
			}),
			te >= 4 ? u.jsxs("div", {
				className: "x1h3rtpe xyi3aci xwf5gio x1p453bz x1suzm8a x1380le5 xefnzgg x1uvdrpn x14mko6t x16ovd2e x12xbjc7 x1iw51ew xde1mab",
				children: [u.jsx(r("WDSText.react"), {
					colorName: "contentDefault",
					type: "Body2Emphasized",
					children: s._(
						/*BTDS*/
						""
					)
				}), u.jsx(r("WDSText.react"), {
					colorName: "contentDeemphasized",
					type: "Body2",
					children: s._(
						/*BTDS*/
						""
					)
				})]
			}) : null,
			u.jsxs("div", {
				className: "x78zum5 x1qvou4u x1s70e7g x13a6bvl x1xrf6ya xscbp6u x1iw51ew xde1mab",
				children: [u.jsx(r("WDSButton.react"), {
					variant: "tonal",
					size: "small",
					label: s._(
						/*BTDS*/
						""
					),
					disabled: P,
					onPress: a,
					testid: "lead-gen-cancel-btn"
				}), u.jsx(r("WDSButton.react"), {
					variant: "filled",
					size: "small",
					label: s._(
						/*BTDS*/
						""
					),
					onPress: oe,
					disabled: !ne,
					loading: P,
					testid: "lead-gen-save-btn"
				})]
			})
		] }) }), t[35] = E, t[36] = V, t[37] = te, t[38] = D, t[39] = G, t[40] = oe, t[41] = ne, t[42] = P, t[43] = S, t[44] = a, t[45] = w, t[46] = B, t[47] = de) : de = t[47];
		var me = de, pe;
		t[48] === Symbol.for("react.memo_cache_sentinel") ? (pe = { className: "x1h678fw xcldk2z xv6tirj x1phvje8 x1czfd9k" }, t[48] = pe) : pe = t[48];
		var _e;
		t[49] === Symbol.for("react.memo_cache_sentinel") ? (_e = { className: "x6s0dn4 x78zum5 x1qvou4u x1s70e7g x1nhvcw1 x12xbjc7" }, t[49] = _e) : _e = t[49];
		var fe = r(w === "fields" ? "WDSIconIcArrowBack.react" : "WDSIconIcClose.react"), ge;
		t[50] !== w ? (ge = w === "fields" ? s._(
			/*BTDS*/
			""
		).toString() : s._(
			/*BTDS*/
			""
		).toString(), t[50] = w, t[51] = ge) : ge = t[51];
		var he = w === "fields" ? "lead-gen-create-back-btn" : "lead-gen-create-close-btn", ye;
		t[52] !== ce || t[53] !== fe || t[54] !== ge || t[55] !== he ? (ye = u.jsx(r("WDSButton.react"), {
			Icon: fe,
			onPress: ce,
			variant: "borderless",
			size: "small",
			"aria-label": ge,
			testid: he
		}), t[52] = ce, t[53] = fe, t[54] = ge, t[55] = he, t[56] = ye) : ye = t[56];
		var Ce;
		t[57] !== se ? (Ce = u.jsx(r("WDSText.react"), {
			colorName: "contentDefault",
			type: "Body1",
			children: se
		}), t[57] = se, t[58] = Ce) : Ce = t[58];
		var be;
		t[59] !== ye || t[60] !== Ce ? (be = u.jsxs("div", babelHelpers.extends({}, _e, { children: [ye, Ce] })), t[59] = ye, t[60] = Ce, t[61] = be) : be = t[61];
		var ve;
		return t[62] !== me || t[63] !== be ? (ve = u.jsxs("div", babelHelpers.extends({}, pe, {
			"data-testid": "biz-ai-lead-gen-create-modal",
			children: [be, me]
		})), t[62] = me, t[63] = be, t[64] = ve) : ve = t[64], ve;
	}
	function b(e) {
		return e.moment_type === "NEW_CHAT_BEGINS" ? ["NEW_CHAT_BEGINS"] : e.moment_type === "READY_TO_BUY" ? ["READY_TO_BUY"] : [];
	}
	function v() {
		o("WAWebBizAILargeScreensLogEvents").logViewLeadGenTypeSelection();
	}
	l.default = C;
}), 226);
