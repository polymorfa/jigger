__d("WAWebVoipNackHandlers", [
	"fbt",
	"WALogger",
	"WAWebCallCollection",
	"WAWebConfirmPopup.react",
	"WAWebContactCollection",
	"WAWebCoreActionsODS",
	"WAWebFrontendContactGetters",
	"WAWebModalManager",
	"WAWebName.react",
	"WAWebNoop",
	"WAWebUserPrefsMeUser",
	"WAWebVoipEventConstants",
	"WAWebVoipSignalingEnums",
	"WAWebVoipStackInterface",
	"WAWebVoipUiManager",
	"WAWebWidFactory",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d, m, p, _, f, g, h, y, C = y || (y = o("react")), b = {
		NackCallerCountry: 401,
		NackCallerNotEnabled: 403,
		NackCalleeCountry: 405,
		NackCalleePlatform: 406,
		NackUnknownReason: 409,
		NackDuplicateLinkedGroupCall: 411,
		NackCalleeAppVersion: 426,
		NackGroupCallNotEnabled: 427,
		NackGroupCallMaximumLimit: 428,
		NackGroupCallCapacityFull: 434,
		NackCalleeOSVersion: 460,
		NackUnavailable: 473
	};
	function v(e, t, n) {
		o("WAWebModalManager").ModalManager.open(C.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			onOK: function() {
				o("WAWebModalManager").ModalManager.close(), t == null || t();
			},
			okText: s._(
				/*BTDS*/
				""
			),
			title: n,
			children: C.jsx(r("WDSText.react"), {
				type: "Body1",
				colorName: "contentDefault",
				children: e
			})
		}));
	}
	async function S() {
		var e = await o("WAWebVoipStackInterface").getVoipStackInterface();
		e != null && e.type === "web" ? await e.endCall(o("WAWebVoipSignalingEnums").EndCallReason.Self, !0) : (r("WAWebCallCollection").setActiveCall(null), r("WAWebCallCollection").setIsInConnectedCall(!1));
	}
	function R(t) {
		var n = t != null && o("WAWebUserPrefsMeUser").isMeAccount(t);
		if (n) {
			o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["voip: handleCallOfferNacked: Self nacked for NackGroupCallNotEnabled (427)"]))), v(s._(
				/*BTDS*/
				""
			), r("WAWebNoop"));
			return;
		}
		o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["voip: handleCallOfferNacked: Showing dialog for NackGroupCallNotEnabled (427) for peer"])));
		var a = t != null ? o("WAWebContactCollection").ContactCollection.gadd(t, { silent: !0 }) : null;
		v(a != null ? s._(
			/*BTDS*/
			"",
			[s._param("name", C.jsx(o("WAWebName.react").Name, { contact: a }))]
		) : s._(
			/*BTDS*/
			""
		));
	}
	function L(e) {
		var t = r("WAWebCallCollection").activeCall;
		if (t) {
			for (var n of e.errors) switch (n.errorCode) {
				case b.NackUnknownReason:
				case b.NackUnavailable:
					o("WAWebCoreActionsODS").logCallErrorTerminal();
					break;
				case b.NackCallerCountry:
				case b.NackCallerNotEnabled:
				case b.NackCalleeCountry:
				case b.NackCalleePlatform:
				case b.NackCalleeAppVersion:
				case b.NackCalleeOSVersion: break;
				case b.NackGroupCallMaximumLimit:
				case b.NackGroupCallCapacityFull: break;
				default: break;
			}
			for (var a of e.errors) switch (a.errorCode) {
				case b.NackDuplicateLinkedGroupCall:
					o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["voip: handleCallOfferNacked: NackDuplicateLinkedGroupCall (411)"]))), v(s._(
						/*BTDS*/
						""
					), r("WAWebNoop"), s._(
						/*BTDS*/
						""
					));
					break;
				case b.NackGroupCallNotEnabled: {
					R(a.errorJid);
					break;
				}
				default: break;
			}
			if (e.isFatalNack) {
				o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["voip: Fatal offer nack received, ending call"]))), S();
				return;
			}
			o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose(["voip: Offer nack received, call continuing"])));
		}
	}
	var E = {
		BadRequest: 400,
		DoesNotExist: 404,
		UnsupportedAppVersion: 427,
		CallFull: 428,
		NotCompatible: 432,
		ServiceUnavailable: 503
	};
	function k(e) {
		o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose(["voip: handleCallLinkNacked: nackCode=", ""])), e);
		var t = I(e);
		v(t);
	}
	function I(e) {
		switch (e) {
			case E.DoesNotExist: return s._(
				/*BTDS*/
				""
			);
			case E.CallFull: return s._(
				/*BTDS*/
				""
			);
			case E.UnsupportedAppVersion: return s._(
				/*BTDS*/
				""
			);
			case E.ServiceUnavailable: return s._(
				/*BTDS*/
				""
			);
			default: return s._(
				/*BTDS*/
				""
			);
		}
	}
	I.displayName = I.name + " [from " + i.id + "]";
	async function T() {
		o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["voip: handleLobbyNacked: ending call"])));
		var e = await o("WAWebVoipStackInterface").getVoipStackInterface();
		e != null && e.type === "web" ? await e.endCall(o("WAWebVoipSignalingEnums").EndCallReason.Unknown, !0) : (r("WAWebCallCollection").setActiveCall(null), r("WAWebCallCollection").setIsInConnectedCall(!1)), o("WAWebVoipUiManager").closeAllVoipWindows({
			callEnded: !0,
			surveyInteracted: !1
		}), v(s._(
			/*BTDS*/
			""
		));
	}
	async function D() {
		o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose(["voip: handleLobbyTimeout: ending call"])));
		var e = await o("WAWebVoipStackInterface").getVoipStackInterface();
		e != null && e.type === "web" ? await e.endCall(o("WAWebVoipSignalingEnums").EndCallReason.Unknown, !0) : (r("WAWebCallCollection").setActiveCall(null), r("WAWebCallCollection").setIsInConnectedCall(!1)), o("WAWebVoipUiManager").closeAllVoipWindows({
			callEnded: !0,
			surveyInteracted: !1
		}), v(s._(
			/*BTDS*/
			""
		));
	}
	function x(e) {
		o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose(["voip: showUserRemovedDialog: removerJid=", ""])), e != null ? e : "null");
		var t = "";
		if (e != null && e !== "") {
			var n = o("WAWebContactCollection").ContactCollection.get(e);
			n != null && (t = o("WAWebFrontendContactGetters").getDisplayName(n)), t === "" && (t = e);
		}
		var r = t !== "" ? s._(
			/*BTDS*/
			"",
			[s._param("name", t)]
		) : s._(
			/*BTDS*/
			""
		);
		v(r, function() {
			o("WAWebVoipUiManager").closeAllVoipWindows({
				callEnded: !0,
				surveyInteracted: !1
			});
		}, s._(
			/*BTDS*/
			""
		));
	}
	function $(e) {
		var t;
		try {
			t = o("WAWebWidFactory").createWid(e);
		} catch (t) {
			o("WALogger").WARN(h || (h = babelHelpers.taggedTemplateLiteralLoose(["voip: showParticipantRemovedToast: invalid jid ", ""])), e);
			return;
		}
		r("WAWebCallCollection").trigger(o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallCollectionEvents.PARTICIPANT_REMOVED), { jid: t });
	}
	l.showErrorDialog = v, l.handleCallOfferNacked = L, l.handleCallLinkNacked = k, l.handleLobbyNacked = T, l.handleLobbyTimeout = D, l.showUserRemovedDialog = x, l.showParticipantRemovedToast = $;
}), 226);
