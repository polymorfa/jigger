__d("WAWebAddContactToGroupFlow.react", [
	"fbt",
	"$InternalEnum",
	"WAWebAddContactToGroupEligibility",
	"WAWebChatCollection",
	"WAWebChatEntryPoint",
	"WAWebCmd",
	"WAWebComposeBoxActions",
	"WAWebConfirmPopup.react",
	"WAWebContactGetters",
	"WAWebEmojiText.react",
	"WAWebFocusTracer",
	"WAWebFrontendContactGetters",
	"WAWebGroupsModal.react",
	"WAWebLidMigrationUtils",
	"WAWebModifyParticipantsGroupAction",
	"WAWebNoop",
	"fbs",
	"nullthrows",
	"react",
	"react-compiler-runtime",
	"useWAWebFlow"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useRef, m = c.useState, p = n("$InternalEnum").Mirrored(["SelectGroup", "Confirm"]);
	function _(e) {
		var t = o("react-compiler-runtime").c(40), n = e.chat, a = e.contact, i;
		t[0] !== n || t[1] !== a ? (i = n != null && o("WAWebAddContactToGroupEligibility").isContactAddableToGroup(a, n), t[0] = n, t[1] = a, t[2] = i) : i = t[2];
		var l = i, c = l ? p.Confirm : p.SelectGroup, _ = o("useWAWebFlow").useFlow(c), g = _[0], h = _[1], y = m(l ? n : void 0), C = y[0], b = y[1], v;
		t[3] !== a ? (v = function(t) {
			var e = t.groupMetadata;
			if (!o("WAWebContactGetters").getIsGroup(t) || o("WAWebContactGetters").getIsGroup(t) && !(e != null && e.participants.iAmMember())) return !1;
			var n = (e == null ? void 0 : e.isLidAddressingMode) === !0 ? o("WAWebLidMigrationUtils").toLid(a.id) : o("WAWebLidMigrationUtils").toPn(a.id);
			return n != null && e != null && e.participants.get(n) ? s._(
				/*BTDS*/
				""
			).toString() : e != null && e.participants.iAmAdmin() ? !0 : r("fbs")._(
				/*BTDS*/
				""
			).toString();
		}, t[3] = a, t[4] = v) : v = t[4];
		var S = v, R;
		t[5] !== a || t[6] !== h ? (R = function(t) {
			o("WAWebModifyParticipantsGroupAction").addParticipants(t, [a]).then(function() {
				o("WAWebCmd").Cmd.openChatFromUnread({
					chat: t,
					chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.AddContactToGroup
				}).then(function(e) {
					e && o("WAWebComposeBoxActions").ComposeBoxActions.focus(t);
				});
			}).catch(r("WAWebNoop")), h.end();
		}, t[5] = a, t[6] = h, t[7] = R) : R = t[7];
		var L = R, E = d(null), k;
		t[8] === Symbol.for("react.memo_cache_sentinel") ? (k = function() {
			if (E.current) {
				var e = E.current;
				!e || e.contains(document.activeElement) || r("WAWebFocusTracer").focus(e);
			}
		}, t[8] = k) : k = t[8];
		var I = k, T;
		t[9] !== h ? (T = function(t) {
			I(), b(t), h.push(p.Confirm);
		}, t[9] = h, t[10] = T) : T = t[10];
		var D = T;
		if (h.step == null) return null;
		var x = null;
		e: switch (h.step) {
			case p.SelectGroup: {
				var $;
				t[11] === Symbol.for("react.memo_cache_sentinel") ? ($ = o("WAWebChatCollection").ChatCollection.filter(f), t[11] = $) : $ = t[11];
				var P;
				t[12] !== h ? (P = function() {
					return h.pop();
				}, t[12] = h, t[13] = P) : P = t[13];
				var N;
				t[14] !== S || t[15] !== D || t[16] !== P ? (N = u.jsx(r("WAWebGroupsModal.react"), {
					chats: $,
					filter: S,
					onCancel: P,
					onGroup: D
				}), t[14] = S, t[15] = D, t[16] = P, t[17] = N) : N = t[17], x = N;
				break e;
			}
			case p.Confirm: {
				var M, w, A;
				t[18] === Symbol.for("react.memo_cache_sentinel") ? (M = {
					surface: "unknown",
					viewName: "add-contact-to-group"
				}, w = s._(
					/*BTDS*/
					""
				), A = s._(
					/*BTDS*/
					""
				), t[18] = M, t[19] = w, t[20] = A) : (M = t[18], w = t[19], A = t[20]);
				var F;
				t[21] !== C || t[22] !== L ? (F = function() {
					return L(r("nullthrows")(C));
				}, t[21] = C, t[22] = L, t[23] = F) : F = t[23];
				var O;
				t[24] !== l || t[25] !== h ? (O = function() {
					return l ? h.end() : h.pop();
				}, t[24] = l, t[25] = h, t[26] = O) : O = t[26];
				var B;
				t[27] !== a || t[28] !== C ? (B = s._(
					/*BTDS*/
					"",
					[s._param("participant", o("WAWebFrontendContactGetters").getFormattedName(a)), s._param("subject", r("nullthrows")(C).contact.name)]
				), t[27] = a, t[28] = C, t[29] = B) : B = t[29];
				var W;
				t[30] !== B ? (W = u.jsx(o("WAWebEmojiText.react").EmojiText, { text: B }), t[30] = B, t[31] = W) : W = t[31];
				var q;
				t[32] !== O || t[33] !== W || t[34] !== F ? (q = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
					tsNavigationData: M,
					cancelText: w,
					okText: A,
					onOK: F,
					onCancel: O,
					children: W
				}), t[32] = O, t[33] = W, t[34] = F, t[35] = q) : q = t[35], x = q;
			}
		}
		var U;
		return t[36] !== g || t[37] !== x || t[38] !== h ? (U = u.jsx(g, {
			ref: E,
			flow: h,
			children: x
		}), t[36] = g, t[37] = x, t[38] = h, t[39] = U) : U = t[39], U;
	}
	function f(e) {
		return o("WAWebContactGetters").getIsGroup(e);
	}
	l.default = _;
}), 226);
