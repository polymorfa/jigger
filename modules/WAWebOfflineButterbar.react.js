__d("WAWebOfflineButterbar.react", [
	"fbt",
	"WAShiftTimer",
	"WAWebSocketModel",
	"WAWebWamEnumWebcButterbarActionType",
	"WAWebWamEnumWebcButterbarBbType",
	"WAWebWebcButterbarEventWamEvent",
	"WDSBanner.react",
	"react",
	"useLazyRef"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useEffect, m = c.useState, p = 3e3;
	function _() {
		var e = m(!0), t = e[0], n = e[1], a = r("useLazyRef")(function() {
			return new (o("WAShiftTimer")).ShiftTimer(function() {
				n(!0);
			});
		});
		d(function() {
			return function() {
				a.current.cancel();
			};
		}, []);
		var i = function() {
			o("WAWebSocketModel").Socket.reconnect(), n(!1), a.current.onOrAfter(p);
		}, l, c, _, f;
		return t ? (_ = s._(
			/*BTDS*/
			""
		), f = function() {
			new (o("WAWebWebcButterbarEventWamEvent")).WebcButterbarEventWamEvent({
				webcButterbarType: o("WAWebWamEnumWebcButterbarBbType").WEBC_BUTTERBAR_BB_TYPE.OFFLINE,
				webcButterbarAction: o("WAWebWamEnumWebcButterbarActionType").WEBC_BUTTERBAR_ACTION_TYPE.CLICK_CTA
			}).commit(), i();
		}, l = s._(
			/*BTDS*/
			""
		), c = s._(
			/*BTDS*/
			""
		)) : (l = void 0, c = s._(
			/*BTDS*/
			""
		)), u.jsx("div", {
			className: "x1380le5 x14mko6t xefnzgg x1uvdrpn",
			children: u.jsx(r("WDSBanner.react"), {
				type: "warning",
				title: l == null ? null : c,
				body: l == null ? c : l,
				actionText: _,
				onAction: f,
				testid: "chat-butterbar-offline"
			})
		});
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 226);
