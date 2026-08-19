__d("WAWebMessageHistoryBundleMessage.react", [
	"fbt",
	"WALogger",
	"WAWebChatEntryPoint",
	"WAWebCmd",
	"WAWebDownloadHistoryBundleAction",
	"WAWebFormatMessageHistoryBundleBody",
	"WAWebFrontendMsgGetters",
	"WAWebGroupHistoryMsgData.flow",
	"WAWebGroupHistoryReceiverUserJourneyLogger",
	"WAWebMsgGetters",
	"WAWebMsgModelPropUtils",
	"WAWebSystemMessageWithSingleCTA.react",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebWamEnumWebcRmrReasonCode",
	"WDSIconIcError.react",
	"WDSSpinner.react",
	"fbs",
	"react",
	"react-compiler-runtime",
	"useWAWebMsgValues"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = u.useEffect, m = {
		messageBody: {
			display: "x78zum5",
			flexWrap: "x1a02dak",
			paddingTop: "x1gxa6cn",
			paddingBottom: "xa0aww2",
			columnGap: "x1trrmfo",
			justifyContent: "xl56j7k",
			$$css: !0
		},
		error: {
			color: "xqnyt8g",
			$$css: !0
		},
		cta: {
			display: "x78zum5",
			alignItems: "x6s0dn4",
			$$css: !0
		}
	};
	function p(e) {
		var t = o("react-compiler-runtime").c(26), n = e.msg, a = e.ref, i;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = [o("WAWebMsgGetters").getGroupHistoryBundleMetadata], t[0] = i) : i = t[0];
		var l = o("useWAWebMsgValues").useMsgValues(n.id, i), s = l[0], u = s == null ? void 0 : s.processState, p, f;
		t[1] !== n || t[2] !== u ? (p = function() {
			var e;
			u !== o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState.NONE || !o("WAWebMsgModelPropUtils").isTrusted(n.unsafe()) || (e = n.id) != null && e.fromMe || r("WAWebDownloadHistoryBundleAction")(n, u, {
				downloadEvenIfExpensive: !1,
				rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE.MSG_RENDER,
				isUserInitiated: !1
			});
		}, f = [n, u], t[1] = n, t[2] = u, t[3] = p, t[4] = f) : (p = t[3], f = t[4]), d(p, f);
		var g = n.id.fromMe || u === o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState.DEDUPED, C = u === o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState.FAILED && m.error, b;
		t[5] !== C ? (b = [m.messageBody, C], t[5] = C, t[6] = b) : b = t[6];
		var v;
		t[7] !== n || t[8] !== u ? (v = o("WAWebFormatMessageHistoryBundleBody").formatMessageHistoryBundleBody(n, u), t[7] = n, t[8] = u, t[9] = v) : v = t[9];
		var S;
		t[10] !== n.id.fromMe || t[11] !== u ? (S = h(u, n.id.fromMe), t[10] = n.id.fromMe, t[11] = u, t[12] = S) : S = t[12];
		var R;
		t[13] !== u ? (R = y(u), t[13] = u, t[14] = R) : R = t[14];
		var L;
		t[15] !== g || t[16] !== n || t[17] !== u ? (L = g ? null : function() {
			_(n, u);
		}, t[15] = g, t[16] = n, t[17] = u, t[18] = L) : L = t[18];
		var E;
		return t[19] !== a || t[20] !== b || t[21] !== v || t[22] !== S || t[23] !== R || t[24] !== L ? (E = c.jsx(o("WAWebSystemMessageWithSingleCTA.react").SystemMessageWithSingleCTA, {
			xstyle: b,
			bodyText: v,
			ctaText: S,
			ctaXstyle: m.cta,
			icon: R,
			onClick: L,
			onclickRef: a,
			testid: "message-history-bundle-message"
		}), t[19] = a, t[20] = b, t[21] = v, t[22] = S, t[23] = R, t[24] = L, t[25] = E) : E = t[25], E;
	}
	function _(e, t) {
		return t === o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState.NONE || t === o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState.FAILED ? f(e, t) : t === o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState.INJECTED || t === o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState.INJECTED_PARTIAL ? g(e) : null;
	}
	function f(e, t) {
		o("WAWebGroupHistoryReceiverUserJourneyLogger").GroupHistoryReceiverUserJourneyLogger.downloadButtonClicked(e.id.remote.toJid()), r("WAWebDownloadHistoryBundleAction")(e, t, {
			downloadEvenIfExpensive: !0,
			rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE.MSG_CLICK,
			isUserInitiated: !0
		});
	}
	function g(t) {
		o("WAWebGroupHistoryReceiverUserJourneyLogger").GroupHistoryReceiverUserJourneyLogger.viewButtonClicked(t.id.remote.toJid());
		var n = o("WAWebFrontendMsgGetters").getChat(t.unsafe()), r = n.msgs.findFirst(function(e) {
			var n = o("WAWebMsgGetters").getGroupHistoryBundleMessageKey(e);
			return n != null && n.id === t.id.id;
		});
		r ? o("WAWebCmd").Cmd.openChatAt({
			chat: n,
			chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.MessageHistoryBundle,
			msgContext: {
				collection: r.getMsgChunk() || n.msgs,
				msg: r,
				key: r.id,
				highlightMsg: !0
			}
		}).catch(function() {
			o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[group-history] open chat at first bundle msg failed"])));
		}) : o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: s._(
			/*BTDS*/
			""
		) }));
	}
	function h(e, t) {
		return t ? null : e === o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState.NONE ? r("fbs")._(
			/*BTDS*/
			""
		) : e === o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState.INJECTED || e === o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState.INJECTED_PARTIAL ? r("fbs")._(
			/*BTDS*/
			""
		) : e === o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState.FAILED ? r("fbs")._(
			/*BTDS*/
			""
		) : null;
	}
	function y(e) {
		return e === o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState.DOWNLOADING || e === o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState.PROCESSING ? c.jsx(r("WDSSpinner.react"), { size: 16 }) : e === o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState.FAILED ? c.jsx(r("WDSIconIcError.react"), { height: 16 }) : null;
	}
	l.default = p;
}), 226);
