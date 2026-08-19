__d("WAWebNewsletterTransferOwnershipConfirmationModal.react", [
	"fbt",
	"WAWebChangeNewsletterOwnerAction",
	"WAWebContactCollection",
	"WAWebDemoteNewsletterAdminAction",
	"WAWebModalManager",
	"WAWebName.react",
	"WAWebUserConfirmationModal.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = function() {
		return s._(
			/*BTDS*/
			""
		);
	}, d = function() {
		return s._(
			/*BTDS*/
			""
		);
	}, m = function() {
		return s._(
			/*BTDS*/
			""
		);
	};
	function p(e) {
		var t = e.chat, n = e.contact, a = e.onTransferCompletion, i = e.shouldDismissSelfAsAdmin, l = [{
			action: function() {
				return o("WAWebChangeNewsletterOwnerAction").changeNewsletterOwnerAction(t, n);
			},
			onSuccess: function() {
				a();
			},
			errorMessage: s._(
				/*BTDS*/
				""
			)
		}];
		if (i) {
			var p = o("WAWebContactCollection").ContactCollection.getMeContact();
			p != null && l.push({
				action: function() {
					return o("WAWebDemoteNewsletterAdminAction").demoteNewsletterAdminAction(t, p);
				},
				errorMessage: s._(
					/*BTDS*/
					""
				)
			});
		}
		var _ = i ? s._(
			/*BTDS*/
			"",
			[s._param("new-channel-owner", u.jsx(o("WAWebName.react").ContactName, { contact: n }))]
		) : s._(
			/*BTDS*/
			"",
			[s._param("new-channel-owner", u.jsx(o("WAWebName.react").ContactName, { contact: n }))]
		);
		return u.jsx(r("WAWebUserConfirmationModal.react"), {
			actions: l,
			actionType: "primary",
			actionText: m(),
			emailContentText: d(),
			phoneContentText: c(),
			successText: _,
			onCompletion: o("WAWebModalManager").closeModalManager
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 226);
