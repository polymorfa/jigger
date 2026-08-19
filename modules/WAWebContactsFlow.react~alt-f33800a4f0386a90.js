__d("WAWebContactsFlow.react", [
	"$InternalEnum",
	"WAWebContactCollection",
	"WAWebContactEditDrawer.react",
	"WAWebContactLogging",
	"WAWebDrawerViewType",
	"WAWebFindChatAction",
	"isStringNullOrEmpty",
	"react",
	"useWAWebFlow"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e.useRef, c = n("$InternalEnum").Mirrored(["NewContactFlow"]);
	function d(e) {
		var t = e.onEnd, n = e.ref, a = e.viewType;
		o("WAWebContactCollection").ContactCollection.ensureSorted();
		var i = u(), l = o("useWAWebFlow").useFlow(c.NewContactFlow, {
			transitions: o("useWAWebFlow").FlowTransitions.DrawerRight,
			onEnd: t
		}), d = l[0], m = l[1], p = function(t) {
			o("WAWebFindChatAction").findOrCreateLatestChat(t.id, "createContact", {}).then(function() {
				m.end();
			});
		}, _ = function(t) {
			var e = t.contactId, n = t.firstName, a = t.lastName, i = t.username, l = !r("isStringNullOrEmpty")(n) && !r("isStringNullOrEmpty")(a) ? n + " " + a : n != null ? n : a, s = o("WAWebContactCollection").ContactCollection.gadd({
				id: e,
				name: l,
				shortName: a,
				username: i
			}, { merge: !0 });
			p(s), m.end();
		}, f = function() {
			if (m.step === c.NewContactFlow) {
				var e;
				(e = i.current) == null || e.handleDismiss();
			}
			m.pop();
		};
		if (m.step == null) return null;
		var g = m.step === c.NewContactFlow ? s.jsx(r("WAWebContactEditDrawer.react"), {
			ref: i,
			origin: o("WAWebContactLogging").ContactSourceType.ContactInfo,
			onSave: _,
			onBack: m.pop,
			viewType: a != null ? a : r("WAWebDrawerViewType").DRAWER
		}) : null;
		return s.jsx(d, {
			ref: n,
			flow: m,
			requestDismiss: f,
			children: g
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.WAWebContactsFlow = d;
}), 98);
