__d("WAWebSendContactsModal.react", [
	"fbt",
	"WAWebABProps",
	"WAWebModalManager",
	"WAWebSelectModal.react",
	"WAWebSendContactsAction",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(10), n = e.contacts, a = e.maxItems, i = e.onContactsSent, l;
		if (t[0] !== n || t[1] !== i) {
			var c = function(t) {
				for (var e of t) r("WAWebSendContactsAction")({
					chat: e,
					contacts: n
				}), e.composeQuotedMsg = null;
				i(t[0]), o("WAWebModalManager").ModalManager.close();
			};
			l = function(t) {
				var e = t.selectedItems, n = e;
				n.length === 0 && o("WAWebModalManager").ModalManager.close(), c(n);
			}, t[0] = n, t[1] = i, t[2] = l;
		} else l = t[2];
		var d = l, m;
		t[3] !== a ? (m = a == null ? o("WAWebABProps").getABPropConfigValue("group_size_limit") : a, t[3] = a, t[4] = m) : m = t[4];
		var p = m, _;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (_ = s._(
			/*BTDS*/
			""
		), t[5] = _) : _ = t[5];
		var f;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (f = {
			surface: "send-contacts",
			viewName: "send-contacts"
		}, t[6] = f) : f = t[6];
		var g;
		return t[7] !== d || t[8] !== p ? (g = u.jsx(o("WAWebSelectModal.react").SelectModal, {
			onConfirm: d,
			maxItems: p,
			title: _,
			listType: o("WAWebSelectModal.react").ListType.ChatSelectModal,
			onCancel: o("WAWebModalManager").closeModalManager,
			tsNavigationData: f
		}), t[7] = d, t[8] = p, t[9] = g) : g = t[9], g;
	}
	l.default = c;
}), 226);
