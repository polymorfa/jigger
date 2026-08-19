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
		var t = e.hasText, n = e.iconWidth, a = e.onClickSend, i = e.onStartRecording, l = e.recordingSession, u = e.supportsPtt, d = !!(o("WAGetUserMedia").getUserMedia && window.AudioContext), m = !t && d && u;
		if (m) return c.jsx(r("WAWebPttStartRecordingButton.react"), {
			disabled: l != null,
			onConfirm: i
		});
		var p = n == null || n ? 20 : void 0;
		return c.jsx("button", {
			"data-testid": "compose-btn-send",
			"data-tab": o("WAWebTabOrder").TAB_ORDER.SEND_BUTTON,
			"aria-label": s._(
				/*BTDS*/
				""
			),
			className: "x1c4vz4f x2lah0s xdl72j9 xhslqc4 x1iy03kw x1lfpgzf",
			onClick: a,
			disabled: !t,
			children: c.jsx(o("WAWebWdsIcSendFilledIcon.react").WdsIcSendFilledIcon, {
				directional: !0,
				width: p
			})
		});
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(t) {
		var n = t.buttonVariant, a = n === void 0 ? "filled" : n, i = t.hasTextState, l = t.isMessageToBot, u = t.onClickSend, p = t.onStartRecording, _ = t.recordingSession, f = t.supportsPtt, g = !!(o("WAGetUserMedia").getUserMedia && window.AudioContext), h = !i && g && f, y = !i, C = s._(
			/*BTDS*/
			""
		), b = [
			m.childPaddingRefresh,
			m.sendButtonContainerRefresh,
			d.marginInlineStart5
		];
		if (y && !h && b.push(m.sendButtonBgDisabled), h) return c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(b), { children: c.jsx(r("WAWebPttStartRecordingButton.react"), {
			disabled: _ != null,
			onConfirm: p
		}) }));
		var v = o("WAWebWdsIcSendFilledIcon.react").WdsIcSendFilledIcon;
		return l && (v = y ? o("WAWebSendAiIcon.react").SendAiIcon : o("WAWebSendAiFilledIcon.react").SendAiFilledIcon), c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(b), { children: c.jsx(r("WDSMenuBarItem.react"), {
			icon: v,
			title: C,
			onClick: u,
			tabOrder: o("WAWebTabOrder").TAB_ORDER.SEND_BUTTON,
			testid: "compose-btn-send",
			disabled: y,
			buttonSize: "medium",
			buttonVariant: a,
			buttonType: "default"
		}) }));
	}
	_.displayName = _.name + " [from " + i.id + "]", l.SendButton = p, l.SendButtonRefresh = _;
}), 226);
