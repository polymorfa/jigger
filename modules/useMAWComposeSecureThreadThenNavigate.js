__d("useMAWComposeSecureThreadThenNavigate", [
	"MWChatSearchTypeaheadDataEntry",
	"MWInboxRouteBuilder",
	"MWLSThreadDisplayContext",
	"MWThreadListNewMessageState.react",
	"MWThreadListNewMessageStateReducer",
	"react",
	"react-compiler-runtime",
	"useCometRouterDispatcher",
	"useMWChatOpenNewTab"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = (e || (e = o("react"))).useCallback;
	function u() {
		var e = o("react-compiler-runtime").c(5), t = o("MWLSThreadDisplayContext").useMWLSThreadDisplayContext(), n = t === "Inbox" ? "inboxNewMessage" : "jewelNewMessage", a = r("useMWChatOpenNewTab")(n), i = o("MWThreadListNewMessageState.react").useDispatchIfStateExists(), l = r("useCometRouterDispatcher")(), s;
		return e[0] !== l || e[1] !== i || e[2] !== n || e[3] !== a ? (s = function(t, r, s) {
			if (n === "jewelNewMessage") a(!0, t);
			else if (l != null) {
				var e = r.length > 0 ? r : t.map(o("MWChatSearchTypeaheadDataEntry").convertContactToSearchTypeaheadDataEntry);
				i == null || i({
					entries: e,
					initialOpenChatSearchTypeahead: s,
					type: o("MWThreadListNewMessageStateReducer").MWThreadListNewMessageStateActionType.SetEntries
				});
				var u = o("MWInboxRouteBuilder").buildNewThreadURL({ initial_e2ee_toggle_position: !0 });
				l.go(u, {});
			}
		}, e[0] = l, e[1] = i, e[2] = n, e[3] = a, e[4] = s) : s = e[4], s;
	}
	l.default = u;
}), 98);
