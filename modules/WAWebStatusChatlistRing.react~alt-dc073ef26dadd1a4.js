__d("WAWebStatusChatlistRing.react", [
	"WAWebABProps",
	"WAWebStatusCollection",
	"WAWebStatusProfilePhotoRingWrapper.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useState;
	function c(e) {
		var t = e.contact, n = e.isHoveredOrActive, a = n === void 0 ? !1 : n, i = e.photoSize, l = e.rowIndex, c = e.rowSection, d = e.waitIdle, m = u(function() {
			return o("WAWebStatusCollection").StatusCollection.get(t.id);
		}), p = m[0], _ = m[1], f = u(t.id), g = f[0], h = f[1];
		return t.id !== g && (_(o("WAWebStatusCollection").StatusCollection.get(t.id)), h(t.id)), s.jsx(r("WAWebStatusProfilePhotoRingWrapper.react"), {
			contact: t,
			photoSize: i,
			waitIdle: d,
			hideWhenNoUnreadStatuses: !o("WAWebABProps").getABPropConfigValue("wa_web_show_status_ring_for_no_unread"),
			rowSection: c,
			rowIndex: l,
			isHoveredOrActive: a,
			logPogImpression: !0
		}, t.id.toString());
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);
