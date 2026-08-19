__d("WAWebSupportBotNegativeFeedbackModal", [
	"fbt",
	"WAWebCheckBox.react",
	"WAWebConfirmPopup.react",
	"WAWebModalManager",
	"WAWebSupportAiSessionWamEvent",
	"WAWebSupportBotFeedbackKind",
	"WAWebText.react",
	"WAWebWamEnumSupportAiEventType",
	"WDSMargins.stylex",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useEffect, p = d.useState, _ = { option: {
		display: "x78zum5",
		fontSize: "x1f6kntn",
		lineHeight: "x1fc57z9",
		$$css: !0
	} };
	function f(t) {
		var n = o("react-compiler-runtime").c(20), a = t.msgKey, i = t.onSubmit, l;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (l = [], n[0] = l) : l = n[0];
		var u = p(l), d = u[0], f = u[1], C;
		n[1] === Symbol.for("react.memo_cache_sentinel") ? (C = [], n[1] = C) : C = n[1], m(y, C);
		var b = h, v;
		n[2] === Symbol.for("react.memo_cache_sentinel") ? (v = function() {
			return o("WAWebSupportBotFeedbackKind").getNegativeSupportFeedbackKinds().map(function(e) {
				return {
					value: e,
					label: b(e)
				};
			});
		}, n[2] = v) : v = n[2];
		var S = v, R;
		n[3] !== d ? (R = function(t) {
			d.includes(t) ? f(d.filter(function(e) {
				return e !== t;
			})) : f([].concat(d, [t]));
		}, n[3] = d, n[4] = R) : R = n[4];
		var L = R, E;
		n[5] !== a || n[6] !== i || n[7] !== d ? (E = async function() {
			d.length > 0 && await i(a, d);
		}, n[5] = a, n[6] = i, n[7] = d, n[8] = E) : E = n[8];
		var k = E, I, T, D;
		n[9] === Symbol.for("react.memo_cache_sentinel") ? (I = {
			surface: "unknown",
			viewName: "support-negative-feedback"
		}, T = s._(
			/*BTDS*/
			""
		), D = s._(
			/*BTDS*/
			""
		), n[9] = I, n[10] = T, n[11] = D) : (I = n[9], T = n[10], D = n[11]);
		var x = d.length < 1, $;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? ($ = c.jsx(o("WAWebText.react").WAWebTextSmall, {
			paddingBottom: 12,
			children: s._(
				/*BTDS*/
				""
			)
		}), n[12] = $) : $ = n[12];
		var P;
		n[13] !== L || n[14] !== d ? (P = S().map(function(t, n) {
			return c.jsxs("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(_.option, o("WDSMargins.stylex").wdsMargins.marginTop12, o("WDSMargins.stylex").wdsMargins.marginEnd0), { children: [c.jsx("div", {
				className: "x1rg5ohu xxymvpz x1sa5p1d",
				children: c.jsx(o("WAWebCheckBox.react").CheckBox, {
					checked: d.includes(t.value),
					onChange: function() {
						return L(t.value);
					},
					testid: "feedback-option-" + n
				}, t.value)
			}), c.jsx("label", { children: t.label })] }), t.value);
		}), n[13] = L, n[14] = d, n[15] = P) : P = n[15];
		var N;
		return n[16] !== k || n[17] !== P || n[18] !== x ? (N = c.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: I,
			title: T,
			okText: D,
			onOK: k,
			okDisabled: x,
			onCancel: g,
			children: [$, P]
		}), n[16] = k, n[17] = P, n[18] = x, n[19] = N) : N = n[19], N;
	}
	function g() {
		new (o("WAWebSupportAiSessionWamEvent")).SupportAiSessionWamEvent({ supportAiEventType: o("WAWebWamEnumSupportAiEventType").SUPPORT_AI_EVENT_TYPE.NEGATIVE_FEEDBACK_OPTIONS_SCREEN_CANCELLED }).commit(), o("WAWebModalManager").ModalManager.close();
	}
	function h(e) {
		switch (e) {
			case "negative_irrelevant": return s._(
				/*BTDS*/
				""
			);
			case "negative_inaccurate": return s._(
				/*BTDS*/
				""
			);
			case "negative_repetitive": return s._(
				/*BTDS*/
				""
			);
			case "negative_harmful": return s._(
				/*BTDS*/
				""
			);
			case "negative_other": return s._(
				/*BTDS*/
				""
			);
			default: return "";
		}
	}
	function y() {
		new (o("WAWebSupportAiSessionWamEvent")).SupportAiSessionWamEvent({ supportAiEventType: o("WAWebWamEnumSupportAiEventType").SUPPORT_AI_EVENT_TYPE.NEGATIVE_FEEDBACK_OPTIONS_SCREEN_SHOWN }).commit();
	}
	l.default = f;
}), 226);
