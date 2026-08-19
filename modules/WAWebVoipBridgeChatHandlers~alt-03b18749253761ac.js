__d("WAWebVoipBridgeChatHandlers", [
	"WALogger",
	"WAWebCallCollection",
	"WAWebCallLogUtils",
	"WAWebChatCollection",
	"WAWebContactCollection",
	"WAWebFrontendContactGetters",
	"WAWebVoipEventConstants",
	"WAWebWidFactory"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d = {
		getTcToken: async function(n) {
			var t = n.wid;
			if (!t.isUser()) return o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["voip: getTcToken: wid is not a user wid, wid domain: ", ""])), t.server), { tcToken: null };
			try {
				var r = o("WAWebWidFactory").asUserWidOrThrow(t), a = await o("WAWebCallLogUtils").get1x1CallLidOrPnDestination({ callDestinationWid: r }), i = o("WAWebChatCollection").ChatCollection.get(a);
				return i == null && o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose(["voip: getTcToken: chat not found, chat domain: ", ""])), t.server), { tcToken: i == null ? void 0 : i.tcToken };
			} catch (e) {
				return o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose(["voip: getTcToken: get1x1CallLidOrPnDestination failed, error: ", ""])), e), { tcToken: null };
			}
		},
		handleMutedByOthers: function(t) {
			var e = t.muterJid;
			o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["voip: handleMutedByOthers muterJid=", ""])), String(e));
			var n = "";
			if (e != null) {
				var a = o("WAWebContactCollection").ContactCollection.get(e);
				a != null && (n = o("WAWebFrontendContactGetters").getFormattedShortName(a));
			}
			r("WAWebCallCollection").trigger(o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallCollectionEvents.MUTED_BY_OTHERS), { name: n });
		}
	};
	l.VoipBridgeChatHandlers = d;
}), 98);
