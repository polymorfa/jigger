__d("WAWebOneOnOneIcceCallBubble.react", [
	"fbt",
	"WALogger",
	"WAWebCallCollection",
	"WAWebConfirmPopup.react",
	"WAWebFrontendChatGetters",
	"WAWebIcceBubbleActivationHandlers",
	"WAWebMessageNotificationCallLog.react",
	"WAWebPipController",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebVoipActivityTracker",
	"WAWebVoipCallStateUtils",
	"WAWebVoipEventConstants",
	"WAWebVoipStartCall",
	"WAWebWamEnumCallFromUi",
	"WAWebWamEnumLobbyEntryPointType",
	"WDSIconIcCallFilled.react",
	"WDSIconIcVideocamFilled.react",
	"asyncToGeneratorRuntime",
	"getErrorSafe",
	"react",
	"useWAWebEventTargetValue"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d, m, p = m || (m = o("react"));
	function _(t) {
		var a = t.chat, i = t.contact, l = t.displayAuthor, m = t.elRef, _ = t.forwardClickRef, f = t.isVideo, g = t.msg, h = t.ongoingCallId, y = r("useWAWebEventTargetValue")(r("WAWebCallCollection"), o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallCollectionEvents.ACTIVE_CALL), function() {
			return r("WAWebCallCollection").activeCall;
		}), C = function() {
			var t;
			(t = o("WAWebVoipActivityTracker")).startActivityTracking(), t.startUiActivityTracking(), t.trackUiActivity(t.VoipUiActivity.ICCE_BUBBLE_CLICK_1ON1), o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["voip: starting 1:1 call from ICCE confirm dialog video=", ""])), f), o("WAWebVoipStartCall").startWAWebVoipCall(a.contact.id, f, o("WAWebWamEnumCallFromUi").CALL_FROM_UI.CALL_LOG_MESSAGE_ENDED, o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.NOT_OPENED, h);
		}, b = function() {
			if (y != null && y.id === g.id.id && !y.isGroup && o("WAWebVoipCallStateUtils").isCallIncoming(y.getState())) {
				y.msg != null && (o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["voip: opening incoming 1:1 call miniplayer from ICCE"]))), r("WAWebPipController").openVoipUiPiP(y.msg));
				return;
			}
			if (y != null) {
				o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["voip: 1:1 ICCE call blocked — already in an active call"]))), o("WAWebToastManager").ToastManager.open(p.jsx(o("WAWebToast.react").Toast, { msg: s._(
					/*BTDS*/
					""
				) }));
				return;
			}
			n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var e = yield o("WAWebConfirmPopup.react").waitForConfirmPopup({
					title: s._(
						/*BTDS*/
						"",
						[s._param("name", o("WAWebFrontendChatGetters").getFormattedTitle(a))]
					),
					okText: f ? s._(
						/*BTDS*/
						""
					) : s._(
						/*BTDS*/
						""
					),
					okIcon: r(f ? "WDSIconIcVideocamFilled.react" : "WDSIconIcCallFilled.react")
				});
				e && C();
			})().catch(function(e) {
				o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose(["voip: 1:1 ICCE call confirm dialog failed"]))).catching(r("getErrorSafe")(e)).sendLogs("icce-1on1-confirm");
			});
		}, v = o("WAWebIcceBubbleActivationHandlers").getIcceBubbleActivationHandlers(b), S = v.onClick, R = v.onKeyDown;
		return p.jsx("div", {
			role: "button",
			ref: m,
			tabIndex: 0,
			"data-testid": "voip_icce_bubble_1on1_call",
			onKeyDown: R,
			onClick: S,
			children: p.jsx(r("WAWebMessageNotificationCallLog.react"), {
				ref: _,
				msg: g,
				contact: i,
				displayAuthor: l
			})
		});
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 226);
