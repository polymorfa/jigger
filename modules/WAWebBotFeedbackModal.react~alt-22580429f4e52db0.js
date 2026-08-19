__d("WAWebBotFeedbackModal.react", [
	"fbt",
	"WAWebBotTypes",
	"WAWebConfirmPopup.react",
	"WAWebModalManager",
	"WAWebMsgType",
	"WAWebRadio.react",
	"WAWebText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useState;
	function d(e) {
		var t = o("react-compiler-runtime").c(19), n = e.msg, r = e.onSubmit, a = c(), i = a[0], l = a[1], d = n.type === o("WAWebMsgType").MSG_TYPE.IMAGE, p = m, _;
		t[0] !== d ? (_ = function() {
			var e = d ? [
				o("WAWebBotTypes").BotFeedbackKind.NEGATIVE_NOT_VISUALLY_APPEALING,
				o("WAWebBotTypes").BotFeedbackKind.NEGATIVE_NOT_RELEVANT_TO_TEXT,
				o("WAWebBotTypes").BotFeedbackKind.NEGATIVE_SAFE,
				o("WAWebBotTypes").BotFeedbackKind.NEGATIVE_OTHER
			] : [
				o("WAWebBotTypes").BotFeedbackKind.NEGATIVE_HELPFUL,
				o("WAWebBotTypes").BotFeedbackKind.NEGATIVE_ACCURATE,
				o("WAWebBotTypes").BotFeedbackKind.NEGATIVE_INTERESTING,
				o("WAWebBotTypes").BotFeedbackKind.NEGATIVE_SAFE,
				o("WAWebBotTypes").BotFeedbackKind.NEGATIVE_OTHER
			];
			return e.map(function(e) {
				return {
					value: e,
					label: p(e),
					onChange: function() {
						return l(e);
					}
				};
			});
		}, t[0] = d, t[1] = _) : _ = t[1];
		var f = _, g;
		t[2] !== r || t[3] !== i ? (g = async function() {
			i != null && r(i);
		}, t[2] = r, t[3] = i, t[4] = g) : g = t[4];
		var h = g, y, C;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (y = s._(
			/*BTDS*/
			""
		), C = s._(
			/*BTDS*/
			""
		), t[5] = y, t[6] = C) : (y = t[5], C = t[6]);
		var b = i == null, v;
		t[7] !== d ? (v = u.jsx(o("WAWebText.react").WAWebTextSmall, {
			color: "secondaryLighter",
			paddingTop: 4,
			paddingBottom: 12,
			children: d ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			)
		}), t[7] = d, t[8] = v) : v = t[8];
		var S = i != null ? i : null, R;
		t[9] !== f ? (R = f(), t[9] = f, t[10] = R) : R = t[10];
		var L;
		t[11] !== S || t[12] !== R ? (L = u.jsx(o("WAWebRadio.react").RadioGroup, {
			name: "feedback",
			checkedValue: S,
			options: R
		}), t[11] = S, t[12] = R, t[13] = L) : L = t[13];
		var E;
		return t[14] !== h || t[15] !== b || t[16] !== v || t[17] !== L ? (E = u.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
			title: y,
			okText: C,
			onOK: h,
			okDisabled: b,
			onCancel: o("WAWebModalManager").closeModalManager,
			testid: "bot-feedback-modal",
			children: [v, L]
		}), t[14] = h, t[15] = b, t[16] = v, t[17] = L, t[18] = E) : E = t[18], E;
	}
	function m(e) {
		switch (e) {
			case o("WAWebBotTypes").BotFeedbackKind.NEGATIVE_HELPFUL: return s._(
				/*BTDS*/
				""
			);
			case o("WAWebBotTypes").BotFeedbackKind.NEGATIVE_INTERESTING: return s._(
				/*BTDS*/
				""
			);
			case o("WAWebBotTypes").BotFeedbackKind.NEGATIVE_REFUSED: return s._(
				/*BTDS*/
				""
			);
			case o("WAWebBotTypes").BotFeedbackKind.NEGATIVE_ACCURATE: return s._(
				/*BTDS*/
				""
			);
			case o("WAWebBotTypes").BotFeedbackKind.NEGATIVE_SAFE: return s._(
				/*BTDS*/
				""
			);
			case o("WAWebBotTypes").BotFeedbackKind.NEGATIVE_OTHER: return s._(
				/*BTDS*/
				""
			);
			case o("WAWebBotTypes").BotFeedbackKind.NEGATIVE_NOT_VISUALLY_APPEALING: return s._(
				/*BTDS*/
				""
			);
			case o("WAWebBotTypes").BotFeedbackKind.NEGATIVE_NOT_RELEVANT_TO_TEXT: return s._(
				/*BTDS*/
				""
			);
			default: return "";
		}
	}
	l.default = d;
}), 226);
