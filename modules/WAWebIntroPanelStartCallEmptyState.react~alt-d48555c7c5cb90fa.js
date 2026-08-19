__d("WAWebIntroPanelStartCallEmptyState.react", [
	"fbt",
	"JSResourceForInteraction",
	"WALogger",
	"WAWebCallCollection",
	"WAWebEmptyStateModule.react",
	"WAWebEnvironment",
	"WAWebIntroPanelStartCallUtil",
	"WAWebWamEnumLobbyEntryPointType",
	"WDSIconIcVideoCall.react",
	"WDSToast.react",
	"getErrorSafe",
	"react",
	"useWAWebEventTargetValue",
	"useWAWebVoipIsCallingEnabledAndInited"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = u.useState;
	function m(t) {
		var n = t.baseActions, a = t.metaAiTile, i = t.titleCard, l = d(!1), u = l[0], m = l[1], p = o("WDSToast.react").useWDSToast(), _ = p.showToast, f = r("useWAWebEventTargetValue")(r("WAWebCallCollection"), "change:activeCall", function() {
			return r("WAWebCallCollection").activeCall != null;
		}), g = o("useWAWebVoipIsCallingEnabledAndInited").useWAWebVoipIsCallingEnabledAndInited(), h = g.inited, y = g.initErrored;
		f && u && m(!1);
		function C() {
			if (!(u || r("WAWebCallCollection").activeCall != null)) {
				m(!0);
				var t = r("JSResourceForInteraction")("WAWebVoipStartEmptyCall").__setRef("WAWebIntroPanelStartCallEmptyState.react").load().then(function(e) {
					return e.startEmptyCall(o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.CHAT_EMPTY_STATE);
				});
				_({
					type: "loading",
					align: "start",
					message: function() {
						return s._(
							/*BTDS*/
							""
						);
					},
					process: o("WAWebIntroPanelStartCallUtil").waitForStartingCallToSettle(t)
				}), t.then(function(e) {
					e !== !0 && m(!1);
				}).catch(function(t) {
					o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[WAWebIntroPanelStartCallEmptyState] startEmptyCall from empty state failed"]))).catching(r("getErrorSafe")(t)).sendLogs("start-empty-call-failed"), _({
						type: "default",
						align: "start",
						message: s._(
							/*BTDS*/
							""
						)
					}), m(!1);
				});
			}
		}
		var b = {
			title: s._(
				/*BTDS*/
				""
			),
			Icon: r("WDSIconIcVideoCall.react"),
			clickHandler: C,
			testid: "start-call-tile",
			actionId: "start_call",
			disabled: u || f || r("WAWebEnvironment").isWeb && y && !h
		}, v = a != null ? [].concat(n, [b, a]) : [].concat(n, [b]);
		return c.jsx(r("WAWebEmptyStateModule.react"), {
			titleCard: i,
			wdsActions: v
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);
