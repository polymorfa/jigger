__d("WAWebTosModal.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebConnModel",
	"WAWebModalManager",
	"WAWebSocketModel",
	"react",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c() {
		o("WAWebConnModel").Conn.tos === 0 && o("WAWebModalManager").ModalManager.close();
	}
	function d() {
		o("WAWebModalManager").ModalManager.close(), o("WAWebSocketModel").Socket.logout();
	}
	function m() {
		var e, t, n;
		switch (o("useWAWebListener").useListener(o("WAWebConnModel").Conn, "change:tos", c), o("WAWebConnModel").Conn.tos) {
			default:
			case 1:
				e = s._(
					/*BTDS*/
					""
				), t = s._(
					/*BTDS*/
					""
				), n = function() {
					return o("WAWebModalManager").ModalManager.close();
				};
				break;
			case 2:
				e = s._(
					/*BTDS*/
					""
				), t = s._(
					/*BTDS*/
					""
				), n = d;
				break;
		}
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "tos-accept"
			},
			onOK: n,
			okText: t,
			children: e
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);
