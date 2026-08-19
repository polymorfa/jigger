__d("MAWViewArchivedOpenThreadMenuItem", [
	"fbt",
	"I64",
	"LSMessagingThreadTypeUtil",
	"MAWThreadCutover",
	"MWXIconMenuItemBox",
	"MWXMenuItem.react",
	"react",
	"requireDeferred",
	"useMWEntrypoint",
	"useMWRedirectToOpenThreadOfDualThread"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = e || (e = o("react")), d = r("requireDeferred")("MessageThreadEventsFalcoEvent").__setRef("MAWViewArchivedOpenThreadMenuItem");
	function m(e) {
		var t = e.thread, n = t.threadKey, a = t.threadType, i = o("MAWThreadCutover").useIsCutoverSecureThread(n), l = r("useMWRedirectToOpenThreadOfDualThread")(n), m = r("useMWEntrypoint")(), p = o("LSMessagingThreadTypeUtil").isArmadilloSecure(a), _ = o("MAWThreadCutover").useIsDualThreadCutoverSecureThread(t.threadKey), f = o("MAWThreadCutover").useOpenThreadIfExistsFromCutoverThread(t.threadKey) == null, g = _ && !f;
		return g && c.jsx(r("MWXMenuItem.react"), {
			icon: r("MWXIconMenuItemBox"),
			onClick: function() {
				d.onReady(function(e) {
					return e.log(function() {
						return {
							entry_point: m,
							event_type: "secret_conversation_post_cutover_thread_detail_entry_point_click_event",
							is_cutover: i,
							thread_id: (u || (u = o("I64"))).to_string(n),
							thread_type: u.to_string(a),
							transport_type: p ? "ACT" : "MI"
						};
					});
				}), l();
			},
			primaryText: s._(
				/*BTDS*/
				""
			)
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);
