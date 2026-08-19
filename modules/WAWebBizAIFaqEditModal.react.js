__d("WAWebBizAIFaqEditModal.react", [
	"fbt",
	"WAWebBizAILargeScreensLogEvents",
	"WAWebBizAiExampleResponseUpdateMutation",
	"WAWebBizAiSaveUtils",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebWDSRichTextField.react",
	"WDSButton.react",
	"WDSIconIcClose.react",
	"WDSText.react",
	"WDSTextField.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useEffect, p = c.useState, _ = 2e3, f = 5e3, g = { headerTitle: {
		flexGrow: "x1iyjqo2",
		$$css: !0
	} };
	function h(e) {
		var t, n, a, i, l = o("react-compiler-runtime").c(60), c = e.allFaqs, d = e.faq, h = e.onClose, b = e.onSaved, v = e.onViewKnowledge, S = d != null, R = p((t = d == null ? void 0 : d.question) != null ? t : ""), L = R[0], E = R[1], k = p((n = d == null ? void 0 : d.answer) != null ? n : ""), I = k[0], T = k[1], D = p(!1), x = D[0], $ = D[1], P = x, N;
		l[0] === Symbol.for("react.memo_cache_sentinel") ? (N = [], l[0] = N) : N = l[0], m(C, N);
		var M;
		l[1] !== v ? (M = function() {
			var e = s._(
				/*BTDS*/
				""
			);
			if (v == null) {
				o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: e }));
				return;
			}
			var t = v;
			o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, {
				msg: e,
				action: {
					actionText: s._(
						/*BTDS*/
						""
					),
					onAction: t
				}
			}));
		}, l[1] = v, l[2] = M) : M = l[2];
		var w = M, A;
		if (l[3] !== I || l[4] !== (d == null ? void 0 : d.answer) || l[5] !== (d == null ? void 0 : d.question) || l[6] !== P || l[7] !== L) {
			var F, O;
			A = L.trim().length > 0 && I.trim().length > 0 && !P && (L.trim() !== ((F = d == null ? void 0 : d.question) != null ? F : "") || I.trim() !== ((O = d == null ? void 0 : d.answer) != null ? O : "")), l[3] = I, l[4] = d == null ? void 0 : d.answer, l[5] = d == null ? void 0 : d.question, l[6] = P, l[7] = L, l[8] = A;
		} else A = l[8];
		var B = A, W;
		l[9] !== c || l[10] !== I || l[11] !== B || l[12] !== d || l[13] !== S || l[14] !== b || l[15] !== L || l[16] !== w ? (W = function() {
			if (B) {
				o("WAWebBizAILargeScreensLogEvents").logClickSaveFAQ(), $(!0);
				var e = {
					answer: I.trim(),
					id: d == null ? void 0 : d.id,
					question: L.trim()
				}, t;
				if (S && d != null) {
					var n = !1;
					t = c.map(function(t) {
						if (!n) {
							var r = d.id != null ? t.id === d.id : t.question === d.question && t.answer === d.answer;
							if (r) return n = !0, e;
						}
						return {
							answer: t.answer,
							id: t.id,
							question: t.question
						};
					}), n || t.push(e);
				} else t = [].concat(c.map(y), [e]);
				o("WAWebBizAiExampleResponseUpdateMutation").updateExampleResponses(t).then(function(e) {
					o("WAWebBizAILargeScreensLogEvents").logApiSaveFAQResult(e.isSuccess), e.isSuccess ? (S ? o("WAWebBizAiSaveUtils").showUpdatedToast() : w(), b()) : (o("WAWebBizAiSaveUtils").showErrorToast(), $(!1));
				}).catch(function() {
					o("WAWebBizAILargeScreensLogEvents").logApiSaveFAQResult(!1), o("WAWebBizAiSaveUtils").showErrorToast(), $(!1);
				});
			}
		}, l[9] = c, l[10] = I, l[11] = B, l[12] = d, l[13] = S, l[14] = b, l[15] = L, l[16] = w, l[17] = W) : W = l[17];
		var q = W, U;
		l[18] === Symbol.for("react.memo_cache_sentinel") ? (U = { className: "x1h678fw xcldk2z xv6tirj x1phvje8 x1czfd9k" }, l[18] = U) : U = l[18];
		var V;
		l[19] === Symbol.for("react.memo_cache_sentinel") ? (V = { className: "x6s0dn4 x1s70e7g x78zum5 x1nhvcw1 x1nbhmlj" }, l[19] = V) : V = l[19];
		var H;
		l[20] === Symbol.for("react.memo_cache_sentinel") ? (H = s._(
			/*BTDS*/
			""
		).toString(), l[20] = H) : H = l[20];
		var G;
		l[21] !== h ? (G = u.jsx(r("WDSButton.react"), {
			Icon: r("WDSIconIcClose.react"),
			onPress: h,
			variant: "borderless",
			size: "small",
			"aria-label": H,
			testid: "faq-edit-close-btn"
		}), l[21] = h, l[22] = G) : G = l[22];
		var z;
		l[23] !== S ? (z = u.jsx(r("WDSText.react"), {
			colorName: "contentDefault",
			type: "Body1",
			xstyle: g.headerTitle,
			children: S ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			)
		}), l[23] = S, l[24] = z) : z = l[24];
		var j;
		l[25] !== G || l[26] !== z ? (j = u.jsxs("div", babelHelpers.extends({}, V, { children: [G, z] })), l[25] = G, l[26] = z, l[27] = j) : j = l[27];
		var K;
		l[28] !== S ? (K = S ? null : u.jsx("div", {
			className: "xscbp6u x1yc453h",
			children: u.jsx(r("WDSText.react"), {
				colorName: "contentDeemphasized",
				type: "Body2",
				children: s._(
					/*BTDS*/
					""
				)
			})
		}), l[28] = S, l[29] = K) : K = l[29];
		var Q;
		l[30] === Symbol.for("react.memo_cache_sentinel") ? (Q = s._(
			/*BTDS*/
			""
		), l[30] = Q) : Q = l[30];
		var X;
		l[31] !== S || l[32] !== L ? (X = u.jsx(r("WDSTextField.react"), {
			label: Q,
			value: L,
			onValueChange: E,
			maxCharacterCount: _,
			disabled: S,
			testid: "faq-edit-question-input"
		}), l[31] = S, l[32] = L, l[33] = X) : X = l[33];
		var Y;
		l[34] === Symbol.for("react.memo_cache_sentinel") ? (Y = { className: "x1xrf6ya" }, l[34] = Y) : Y = l[34];
		var J = (a = d == null ? void 0 : d.id) != null ? a : "new", Z, ee, te;
		l[35] === Symbol.for("react.memo_cache_sentinel") ? (Z = s._(
			/*BTDS*/
			""
		), ee = s._(
			/*BTDS*/
			""
		), te = s._(
			/*BTDS*/
			""
		), l[35] = Z, l[36] = ee, l[37] = te) : (Z = l[35], ee = l[36], te = l[37]);
		var ne = (i = d == null ? void 0 : d.answer) != null ? i : "", re;
		l[38] !== J || l[39] !== ne ? (re = u.jsx("div", babelHelpers.extends({}, Y, { children: u.jsx(r("WAWebWDSRichTextField.react"), {
			bottomText: Z,
			label: ee,
			placeholder: te,
			rows: 4,
			initialText: ne,
			onValueChange: T,
			maxCharacterCount: f,
			testid: "faq-edit-answer-input"
		}, J) })), l[38] = J, l[39] = ne, l[40] = re) : re = l[40];
		var oe;
		l[41] === Symbol.for("react.memo_cache_sentinel") ? (oe = { className: "x1s70e7g x78zum5 x13a6bvl x1h678fw" }, l[41] = oe) : oe = l[41];
		var ae;
		l[42] === Symbol.for("react.memo_cache_sentinel") ? (ae = s._(
			/*BTDS*/
			""
		), l[42] = ae) : ae = l[42];
		var ie;
		l[43] !== P || l[44] !== h ? (ie = u.jsx(r("WDSButton.react"), {
			variant: "tonal",
			size: "small",
			label: ae,
			disabled: P,
			onPress: h,
			testid: "faq-edit-cancel-btn"
		}), l[43] = P, l[44] = h, l[45] = ie) : ie = l[45];
		var le;
		l[46] === Symbol.for("react.memo_cache_sentinel") ? (le = s._(
			/*BTDS*/
			""
		), l[46] = le) : le = l[46];
		var se = !B, ue;
		l[47] !== q || l[48] !== x || l[49] !== se ? (ue = u.jsx(r("WDSButton.react"), {
			variant: "filled",
			size: "small",
			label: le,
			onPress: q,
			disabled: se,
			loading: x,
			testid: "faq-edit-save-btn"
		}), l[47] = q, l[48] = x, l[49] = se, l[50] = ue) : ue = l[50];
		var ce;
		l[51] !== ie || l[52] !== ue ? (ce = u.jsxs("div", babelHelpers.extends({}, oe, { children: [ie, ue] })), l[51] = ie, l[52] = ue, l[53] = ce) : ce = l[53];
		var de;
		return l[54] !== j || l[55] !== K || l[56] !== X || l[57] !== re || l[58] !== ce ? (de = u.jsxs("div", babelHelpers.extends({}, U, {
			"data-testid": "faq-edit-modal",
			children: [
				j,
				K,
				X,
				re,
				ce
			]
		})), l[54] = j, l[55] = K, l[56] = X, l[57] = re, l[58] = ce, l[59] = de) : de = l[59], de;
	}
	function y(e) {
		return {
			answer: e.answer,
			id: e.id,
			question: e.question
		};
	}
	function C() {
		o("WAWebBizAILargeScreensLogEvents").logViewFAQEdit();
	}
	l.default = h;
}), 226);
