__d("MAWViewArchivedOpenThreadMenuItem", [
	"fbt",
	"I64",
	"LSMessagingThreadTypeUtil",
	"MAWThreadCutover",
	"MWXIconMenuItemBox",
	"MWXMenuItem.react",
	"react",
	"react-compiler-runtime",
	"requireDeferred",
	"useMWEntrypoint",
	"useMWRedirectToOpenThreadOfDualThread"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = e || (e = o("react")), d = r("requireDeferred")("MessageThreadEventsFalcoEvent").__setRef("MAWViewArchivedOpenThreadMenuItem");
	function m(e) {
		var t = o("react-compiler-runtime").c(10), n = e.thread, a = n.threadKey, i = n.threadType, l = o("MAWThreadCutover").useIsCutoverSecureThread(a), m = r("useMWRedirectToOpenThreadOfDualThread")(a), p = r("useMWEntrypoint")(), _;
		t[0] !== i ? (_ = o("LSMessagingThreadTypeUtil").isArmadilloSecure(i), t[0] = i, t[1] = _) : _ = t[1];
		var f = _, g = o("MAWThreadCutover").useIsDualThreadCutoverSecureThread(n.threadKey), h = o("MAWThreadCutover").useOpenThreadIfExistsFromCutoverThread(n.threadKey) == null, y = g && !h, C;
		return t[2] !== p || t[3] !== l || t[4] !== f || t[5] !== m || t[6] !== y || t[7] !== a || t[8] !== i ? (C = y && c.jsx(r("MWXMenuItem.react"), {
			icon: r("MWXIconMenuItemBox"),
			onClick: function() {
				d.onReady(function(e) {
					return e.log(function() {
						return {
							entry_point: p,
							event_type: "secret_conversation_post_cutover_thread_detail_entry_point_click_event",
							is_cutover: l,
							thread_id: (u || (u = o("I64"))).to_string(a),
							thread_type: u.to_string(i),
							transport_type: f ? "ACT" : "MI"
						};
					});
				}), m();
			},
			primaryText: s._(
				/*BTDS*/
				""
			)
		}), t[2] = p, t[3] = l, t[4] = f, t[5] = m, t[6] = y, t[7] = a, t[8] = i, t[9] = C) : C = t[9], C;
	}
	l.default = m;
}), 226);
