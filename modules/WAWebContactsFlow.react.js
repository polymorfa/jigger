__d("WAWebContactsFlow.react", [
	"$InternalEnum",
	"WAWebContactCollection",
	"WAWebContactEditDrawer.react",
	"WAWebContactLogging",
	"WAWebDrawerViewType",
	"WAWebFindChatAction",
	"isStringNullOrEmpty",
	"react",
	"react-compiler-runtime",
	"useWAWebFlow"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e.useRef, c = n("$InternalEnum").Mirrored(["NewContactFlow"]);
	function d(e) {
		var t = o("react-compiler-runtime").c(20), n = e.onEnd, a = e.ref, i = e.viewType;
		o("WAWebContactCollection").ContactCollection.ensureSorted();
		var l = u(), d;
		t[0] !== n ? (d = {
			transitions: o("useWAWebFlow").FlowTransitions.DrawerRight,
			onEnd: n
		}, t[0] = n, t[1] = d) : d = t[1];
		var m = o("useWAWebFlow").useFlow(c.NewContactFlow, d), p = m[0], _ = m[1], f;
		t[2] !== _ ? (f = function(t) {
			o("WAWebFindChatAction").findOrCreateLatestChat(t.id, "createContact", {}).then(function() {
				_.end();
			});
		}, t[2] = _, t[3] = f) : f = t[3];
		var g = f, h;
		t[4] !== _ || t[5] !== g ? (h = function(t) {
			var e = t.contactId, n = t.firstName, a = t.lastName, i = t.username, l = !r("isStringNullOrEmpty")(n) && !r("isStringNullOrEmpty")(a) ? n + " " + a : n != null ? n : a, s = o("WAWebContactCollection").ContactCollection.gadd({
				id: e,
				name: l,
				shortName: a,
				username: i
			}, { merge: !0 });
			g(s), _.end();
		}, t[4] = _, t[5] = g, t[6] = h) : h = t[6];
		var y = h, C;
		t[7] !== _ ? (C = function() {
			if (_.step === c.NewContactFlow) {
				var e;
				(e = l.current) == null || e.handleDismiss();
			}
			_.pop();
		}, t[7] = _, t[8] = C) : C = t[8];
		var b = C;
		if (_.step == null) return null;
		var v;
		t[9] !== _.pop || t[10] !== _.step || t[11] !== y || t[12] !== i ? (v = _.step === c.NewContactFlow ? s.jsx(r("WAWebContactEditDrawer.react"), {
			ref: l,
			origin: o("WAWebContactLogging").ContactSourceType.ContactInfo,
			onSave: y,
			onBack: _.pop,
			viewType: i != null ? i : r("WAWebDrawerViewType").DRAWER
		}) : null, t[9] = _.pop, t[10] = _.step, t[11] = y, t[12] = i, t[13] = v) : v = t[13];
		var S = v, R;
		return t[14] !== p || t[15] !== S || t[16] !== _ || t[17] !== b || t[18] !== a ? (R = s.jsx(p, {
			ref: a,
			flow: _,
			requestDismiss: b,
			children: S
		}), t[14] = p, t[15] = S, t[16] = _, t[17] = b, t[18] = a, t[19] = R) : R = t[19], R;
	}
	l.WAWebContactsFlow = d;
}), 98);
