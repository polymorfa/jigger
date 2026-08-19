__d("WAWebComposeBoxSendButton.react", [
	"fbt",
	"WAGetUserMedia",
	"WAWebPttStartRecordingButton.react",
	"WAWebSendAiFilledIcon.react",
	"WAWebSendAiIcon.react",
	"WAWebTabOrder",
	"WAWebWdsIcSendFilledIcon.react",
	"WDSMenuBarItem.react",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = { marginInlineStart5: {
		marginInlineStart: "xpcyujq",
		$$css: !0
	} }, m = {
		childPaddingRefresh: {
			boxSizing: "x9f619",
			display: "x78zum5",
			alignItems: "x6s0dn4",
			justifyContent: "xl56j7k",
			alignSelf: "xpvyfi4",
			$$css: !0
		},
		sendButtonContainerRefresh: {
			flexShrink: "x2lah0s",
			flexGrow: "x1c4vz4f",
			minWidth: "x1fns5xo",
			minHeight: "x1ba4aug",
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			color: "x1pse0pq",
			$$css: !0
		},
		sendButtonBgDisabled: {
			color: "x18cpw0e",
			cursor: "x1h6gzvc",
			$$css: !0
		}
	};
	function p(e) {
		var t = o("react-compiler-runtime").c(11), n = e.hasText, a = e.iconWidth, i = e.onClickSend, l = e.onStartRecording, u = e.recordingSession, d = e.supportsPtt, m = !!(o("WAGetUserMedia").getUserMedia && window.AudioContext), p = !n && m && d;
		if (p) {
			var _ = u != null, f;
			return t[0] !== l || t[1] !== _ ? (f = c.jsx(r("WAWebPttStartRecordingButton.react"), {
				disabled: _,
				onConfirm: l
			}), t[0] = l, t[1] = _, t[2] = f) : f = t[2], f;
		}
		var g = a == null || a ? 20 : void 0, h, y;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (h = s._(
			/*BTDS*/
			""
		), y = { className: "x1c4vz4f x2lah0s xdl72j9 xhslqc4 x1iy03kw x1lfpgzf" }, t[3] = h, t[4] = y) : (h = t[3], y = t[4]);
		var C = !n, b;
		t[5] !== g ? (b = c.jsx(o("WAWebWdsIcSendFilledIcon.react").WdsIcSendFilledIcon, {
			directional: !0,
			width: g
		}), t[5] = g, t[6] = b) : b = t[6];
		var v;
		return t[7] !== i || t[8] !== C || t[9] !== b ? (v = c.jsx("button", babelHelpers.extends({
			"data-testid": "compose-btn-send",
			"data-tab": o("WAWebTabOrder").TAB_ORDER.SEND_BUTTON,
			"aria-label": h
		}, y, {
			onClick: i,
			disabled: C,
			children: b
		})), t[7] = i, t[8] = C, t[9] = b, t[10] = v) : v = t[10], v;
	}
	function _(t) {
		var n = o("react-compiler-runtime").c(20), a = t.buttonVariant, i = t.hasTextState, l = t.isMessageToBot, u = t.onClickSend, p = t.onStartRecording, _ = t.recordingSession, f = t.supportsPtt, g = a === void 0 ? "filled" : a, h = !!(o("WAGetUserMedia").getUserMedia && window.AudioContext), y = !i && h && f, C = !i, b;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (b = s._(
			/*BTDS*/
			""
		), n[0] = b) : b = n[0];
		var v = b, S, R, L;
		if (n[1] !== C || n[2] !== l || n[3] !== p || n[4] !== _ || n[5] !== y) {
			L = Symbol.for("react.early_return_sentinel");
			e: {
				var E = [
					m.childPaddingRefresh,
					m.sendButtonContainerRefresh,
					d.marginInlineStart5
				];
				if (C && !y && E.push(m.sendButtonBgDisabled), y) {
					var k = _ != null, I;
					n[9] !== p || n[10] !== k ? (I = c.jsx(r("WAWebPttStartRecordingButton.react"), {
						disabled: k,
						onConfirm: p
					}), n[9] = p, n[10] = k, n[11] = I) : I = n[11], L = c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(E), { children: I }));
					break e;
				}
				S = o("WAWebWdsIcSendFilledIcon.react").WdsIcSendFilledIcon, l && (S = C ? o("WAWebSendAiIcon.react").SendAiIcon : o("WAWebSendAiFilledIcon.react").SendAiFilledIcon), R = (e || (e = r("stylex"))).props(E);
			}
			n[1] = C, n[2] = l, n[3] = p, n[4] = _, n[5] = y, n[6] = S, n[7] = R, n[8] = L;
		} else S = n[6], R = n[7], L = n[8];
		if (L !== Symbol.for("react.early_return_sentinel")) return L;
		var T;
		n[12] !== g || n[13] !== C || n[14] !== S || n[15] !== u ? (T = c.jsx(r("WDSMenuBarItem.react"), {
			icon: S,
			title: v,
			onClick: u,
			tabOrder: o("WAWebTabOrder").TAB_ORDER.SEND_BUTTON,
			testid: "compose-btn-send",
			disabled: C,
			buttonSize: "medium",
			buttonVariant: g,
			buttonType: "default"
		}), n[12] = g, n[13] = C, n[14] = S, n[15] = u, n[16] = T) : T = n[16];
		var D;
		return n[17] !== R || n[18] !== T ? (D = c.jsx("div", babelHelpers.extends({}, R, { children: T })), n[17] = R, n[18] = T, n[19] = D) : D = n[19], D;
	}
	l.SendButton = p, l.SendButtonRefresh = _;
}), 226);
