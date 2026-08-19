__d("WAWebBizAILeadGenEditFieldsModal.react", [
	"fbt",
	"CometRelay",
	"WAWebBizAILargeScreensLogEvents",
	"WAWebBizAILeadGenAddFieldView.react",
	"WAWebBizAILeadGenAddMoreInfoButton.react",
	"WAWebBizAILeadGenEditFieldsModal_flow.graphql",
	"WAWebBizAiLeadGenUpdateMutation",
	"WAWebToast.react",
	"WAWebToastManager",
	"WDSBaseCheckbox.react",
	"WDSButton.react",
	"WDSIconIcClose.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useEffect, _ = d.useMemo, f = d.useState;
	function g(e) {
		return e === "READY_TO_BUY" ? s._(
			/*BTDS*/
			""
		) : e === "NEW_CHAT_BEGINS" ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		);
	}
	function h(e) {
		return e == null ? [] : e.filter(Boolean).map(function(e) {
			var t;
			return {
				is_enabled: e.is_enabled === !0,
				label: (t = e.label) != null ? t : ""
			};
		}).filter(function(e) {
			return e.label !== "";
		});
	}
	function y(t) {
		var a = o("react-compiler-runtime").c(65), i = t.flowRef, l = t.onBack, u = t.onSaved, d = o("CometRelay").useFragment(e !== void 0 ? e : e = n("WAWebBizAILeadGenEditFieldsModal_flow.graphql"), i), m;
		a[0] === Symbol.for("react.memo_cache_sentinel") ? (m = [], a[0] = m) : m = a[0], p(v, m);
		var _;
		a[1] !== d.fields ? (_ = h(d.fields), a[1] = d.fields, a[2] = _) : _ = a[2];
		var y = _, S;
		a[3] !== y ? (S = function() {
			return y;
		}, a[3] = y, a[4] = S) : S = a[4];
		var R = f(S), L = R[0], E = R[1], k = f(!1), I = k[0], T = k[1], D = f(!1), x = D[0], $ = D[1], P;
		a[5] === Symbol.for("react.memo_cache_sentinel") ? (P = function(t) {
			E(function(e) {
				return e.map(function(e, n) {
					return n === t ? {
						is_enabled: !e.is_enabled,
						label: e.label
					} : e;
				});
			});
		}, a[5] = P) : P = a[5];
		var N = P, M;
		a[6] === Symbol.for("react.memo_cache_sentinel") ? (M = function(t) {
			E(function(e) {
				return [].concat(e, [{
					is_enabled: !0,
					label: t
				}]);
			});
		}, a[6] = M) : M = a[6];
		var w = M, A;
		a[7] === Symbol.for("react.memo_cache_sentinel") ? (A = function() {
			$(!0);
		}, a[7] = A) : A = a[7];
		var F = A, O;
		a[8] !== L ? (O = function(t) {
			var e = t.toLowerCase();
			if (L.some(function(t) {
				return t.label.toLowerCase() === e;
			})) {
				o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: s._(
					/*BTDS*/
					""
				) }));
				return;
			}
			w(t), $(!1);
		}, a[8] = L, a[9] = O) : O = a[9];
		var B = O, W;
		a[10] === Symbol.for("react.memo_cache_sentinel") ? (W = function() {
			$(!1);
		}, a[10] = W) : W = a[10];
		var q = W, U;
		a[11] !== L ? (U = L.some(b), a[11] = L, a[12] = U) : U = a[12];
		var V = U, H;
		a[13] !== L || a[14] !== y ? (H = L.length !== y.length || L.some(function(e, t) {
			return t >= y.length || e.is_enabled !== y[t].is_enabled || e.label !== y[t].label;
		}), a[13] = L, a[14] = y, a[15] = H) : H = a[15];
		var G = H, z;
		a[16] !== L || a[17] !== d.custom_moment || a[18] !== d.id || a[19] !== d.moment_type || a[20] !== V || a[21] !== G || a[22] !== I || a[23] !== u ? (z = function() {
			if (!(I || !V || !G)) {
				var e = d.id;
				if (e != null) {
					o("WAWebBizAILargeScreensLogEvents").logClickSaveLeadGenForm(), T(!0);
					var t = L.map(C);
					o("WAWebBizAiLeadGenUpdateMutation").updateLeadGenFlow({
						custom_moment: d.moment_type === "CUSTOM_MOMENT" ? d.custom_moment : null,
						fields: t,
						flow_id: e
					}).then(function(e) {
						o("WAWebBizAILargeScreensLogEvents").logApiSaveLeadGenFormResult(e.isSuccess), e.isSuccess ? u() : (o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: s._(
							/*BTDS*/
							""
						) })), T(!1));
					}).catch(function() {
						o("WAWebBizAILargeScreensLogEvents").logApiSaveLeadGenFormResult(!1), o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: s._(
							/*BTDS*/
							""
						) })), T(!1);
					});
				}
			}
		}, a[16] = L, a[17] = d.custom_moment, a[18] = d.id, a[19] = d.moment_type, a[20] = V, a[21] = G, a[22] = I, a[23] = u, a[24] = z) : z = a[24];
		var j = z;
		if (x) {
			var K;
			return a[25] !== B ? (K = c.jsx(r("WAWebBizAILeadGenAddFieldView.react"), {
				onBack: q,
				onSave: B,
				testid: "lead-gen-edit-add-field"
			}), a[25] = B, a[26] = K) : K = a[26], K;
		}
		var Q;
		a[27] === Symbol.for("react.memo_cache_sentinel") ? (Q = { className: "x1h678fw xcldk2z xv6tirj x1phvje8 x1czfd9k" }, a[27] = Q) : Q = a[27];
		var X;
		a[28] === Symbol.for("react.memo_cache_sentinel") ? (X = { className: "x6s0dn4 x1s70e7g x78zum5 x1nhvcw1 x12xbjc7" }, a[28] = X) : X = a[28];
		var Y;
		a[29] === Symbol.for("react.memo_cache_sentinel") ? (Y = s._(
			/*BTDS*/
			""
		).toString(), a[29] = Y) : Y = a[29];
		var J;
		a[30] !== l || a[31] !== Y ? (J = c.jsx(r("WDSButton.react"), {
			Icon: r("WDSIconIcClose.react"),
			onPress: l,
			variant: "borderless",
			size: "small",
			"aria-label": Y,
			testid: "lead-gen-edit-close-btn"
		}), a[30] = l, a[31] = Y, a[32] = J) : J = a[32];
		var Z;
		a[33] !== d.moment_type ? (Z = g(d.moment_type), a[33] = d.moment_type, a[34] = Z) : Z = a[34];
		var ee;
		a[35] !== Z ? (ee = c.jsx(r("WDSText.react"), {
			colorName: "contentDefault",
			type: "Body1",
			children: Z
		}), a[35] = Z, a[36] = ee) : ee = a[36];
		var te;
		a[37] !== J || a[38] !== ee ? (te = c.jsxs("div", babelHelpers.extends({}, X, { children: [J, ee] })), a[37] = J, a[38] = ee, a[39] = te) : te = a[39];
		var ne;
		a[40] === Symbol.for("react.memo_cache_sentinel") ? (ne = { className: "xvpt6g3 x1phvje8 xcldk2z" }, a[40] = ne) : ne = a[40];
		var re;
		a[41] === Symbol.for("react.memo_cache_sentinel") ? (re = c.jsx("div", babelHelpers.extends({}, ne, { children: c.jsx(r("WDSText.react"), {
			colorName: "contentDeemphasized",
			type: "Body2",
			children: s._(
				/*BTDS*/
				""
			)
		}) })), a[41] = re) : re = a[41];
		var oe;
		if (a[42] !== L) {
			var ae;
			a[44] === Symbol.for("react.memo_cache_sentinel") ? (ae = function(t, n) {
				return c.jsxs("div", {
					"data-testid": "edit-field-toggle-" + n,
					onClick: function() {
						return N(n);
					},
					onKeyDown: function(t) {
						(t.key === "Enter" || t.key === " ") && (t.preventDefault(), N(n));
					},
					role: "button",
					tabIndex: 0,
					className: "x6s0dn4 xyi3aci xwf5gio x1p453bz x1suzm8a xs2akgl x1ypdohk x78zum5 xqf2s3x x1uvdrpn x16ovd2e x12xbjc7 x1nzty39 x1iw51ew x1ubxc9n",
					children: [c.jsx(r("WDSBaseCheckbox.react"), { value: t.is_enabled }), c.jsx(r("WDSText.react"), {
						colorName: "contentDefault",
						type: "Body1",
						children: t.label
					})]
				}, n + "-" + t.label);
			}, a[44] = ae) : ae = a[44], oe = L.map(ae), a[42] = L, a[43] = oe;
		} else oe = a[43];
		var ie, le;
		a[45] === Symbol.for("react.memo_cache_sentinel") ? (ie = c.jsx(r("WAWebBizAILeadGenAddMoreInfoButton.react"), {
			onPress: F,
			testid: "lead-gen-add-more-info-btn"
		}), le = { className: "xqf2s3x x1uvdrpn x1tiyuxx x1nbhmlj x1nzty39 x1iw51ew" }, a[45] = ie, a[46] = le) : (ie = a[45], le = a[46]);
		var se, ue;
		a[47] === Symbol.for("react.memo_cache_sentinel") ? (se = c.jsx("div", babelHelpers.extends({}, le, { children: c.jsx(r("WDSText.react"), {
			colorName: "contentDeemphasized",
			type: "Body3",
			children: s._(
				/*BTDS*/
				""
			)
		}) })), ue = { className: "x1amjocr x78zum5 x13a6bvl x1h678fw" }, a[47] = se, a[48] = ue) : (se = a[47], ue = a[48]);
		var ce;
		a[49] === Symbol.for("react.memo_cache_sentinel") ? (ce = s._(
			/*BTDS*/
			""
		), a[49] = ce) : ce = a[49];
		var de;
		a[50] !== I || a[51] !== l ? (de = c.jsx(r("WDSButton.react"), {
			variant: "tonal",
			size: "small",
			label: ce,
			disabled: I,
			onPress: l,
			testid: "lead-gen-edit-cancel-btn"
		}), a[50] = I, a[51] = l, a[52] = de) : de = a[52];
		var me;
		a[53] === Symbol.for("react.memo_cache_sentinel") ? (me = s._(
			/*BTDS*/
			""
		), a[53] = me) : me = a[53];
		var pe = !V || !G, _e;
		a[54] !== j || a[55] !== I || a[56] !== pe ? (_e = c.jsx(r("WDSButton.react"), {
			variant: "filled",
			size: "small",
			label: me,
			onPress: j,
			disabled: pe,
			loading: I,
			testid: "lead-gen-edit-save-btn"
		}), a[54] = j, a[55] = I, a[56] = pe, a[57] = _e) : _e = a[57];
		var fe;
		a[58] !== de || a[59] !== _e ? (fe = c.jsxs("div", babelHelpers.extends({}, ue, { children: [de, _e] })), a[58] = de, a[59] = _e, a[60] = fe) : fe = a[60];
		var ge;
		return a[61] !== te || a[62] !== oe || a[63] !== fe ? (ge = c.jsxs("div", babelHelpers.extends({}, Q, {
			"data-testid": "biz-ai-lead-gen-edit-fields-modal",
			children: [
				te,
				re,
				oe,
				ie,
				se,
				fe
			]
		})), a[61] = te, a[62] = oe, a[63] = fe, a[64] = ge) : ge = a[64], ge;
	}
	function C(e) {
		return {
			is_enabled: e.is_enabled,
			label: e.label
		};
	}
	function b(e) {
		return e.is_enabled;
	}
	function v() {
		o("WAWebBizAILargeScreensLogEvents").logViewLeadGenFieldSelection();
	}
	l.default = y;
}), 226);
