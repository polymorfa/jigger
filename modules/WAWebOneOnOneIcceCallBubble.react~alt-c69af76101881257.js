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
	"getErrorSafe",
	"react",
	"useWAWebEventTargetValue"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d, m, p = m || (m = o("react"));
	function _(t) {
		var n = t.chat, a = t.contact, i = t.displayAuthor, l = t.elRef, m = t.forwardClickRef, _ = t.isVideo, f = t.msg, g = t.ongoingCallId, h = r("useWAWebEventTargetValue")(r("WAWebCallCollection"), o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallCollectionEvents.ACTIVE_CALL), function() {
			return r("WAWebCallCollection").activeCall;
		}), y = function() {
			var t;
			(t = o("WAWebVoipActivityTracker")).startActivityTracking(), t.startUiActivityTracking(), t.trackUiActivity(t.VoipUiActivity.ICCE_BUBBLE_CLICK_1ON1), o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["voip: starting 1:1 call from ICCE confirm dialog video=", ""])), _), o("WAWebVoipStartCall").startWAWebVoipCall(n.contact.id, _, o("WAWebWamEnumCallFromUi").CALL_FROM_UI.CALL_LOG_MESSAGE_ENDED, o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.NOT_OPENED, g);
		}, C = function() {
			if (h != null && h.id === f.id.id && !h.isGroup && o("WAWebVoipCallStateUtils").isCallIncoming(h.getState())) {
				h.msg != null && (o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["voip: opening incoming 1:1 call miniplayer from ICCE"]))), r("WAWebPipController").openVoipUiPiP(h.msg));
				return;
			}
			if (h != null) {
				o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["voip: 1:1 ICCE call blocked — already in an active call"]))), o("WAWebToastManager").ToastManager.open(p.jsx(o("WAWebToast.react").Toast, { msg: s._(
					/*BTDS*/
					""
				) }));
				return;
			}
			(async function() {
				var e = await o("WAWebConfirmPopup.react").waitForConfirmPopup({
					title: s._(
						/*BTDS*/
						"",
						[s._param("name", o("WAWebFrontendChatGetters").getFormattedTitle(n))]
					),
					okText: _ ? s._(
						/*BTDS*/
						""
					) : s._(
						/*BTDS*/
						""
					),
					okIcon: r(_ ? "WDSIconIcVideocamFilled.react" : "WDSIconIcCallFilled.react")
				});
				e && y();
			})().catch(function(e) {
				o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose(["voip: 1:1 ICCE call confirm dialog failed"]))).catching(r("getErrorSafe")(e)).sendLogs("icce-1on1-confirm");
			});
		}, b = o("WAWebIcceBubbleActivationHandlers").getIcceBubbleActivationHandlers(C), v = b.onClick, S = b.onKeyDown;
		return p.jsx("div", {
			role: "button",
			ref: l,
			tabIndex: 0,
			"data-testid": "voip_icce_bubble_1on1_call",
			onKeyDown: S,
			onClick: v,
			children: p.jsx(r("WAWebMessageNotificationCallLog.react"), {
				ref: m,
				msg: f,
				contact: a,
				displayAuthor: i
			})
		});
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 226);
