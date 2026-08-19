__d("WAWebInAppSignupConfirmationHeader.react", [
	"WAWebInAppSignupConfirmation",
	"WAWebInAppSignupConfirmationHeaderVisual.react",
	"WAWebNoop",
	"WAWebProfilePicThumbCollection",
	"WAWebReleaseToEventLoop",
	"WAWebSignupCTAExperiment",
	"WAWebUserPrefsMeUser",
	"react",
	"useWAWebListener",
	"useWAWebUnmountSignal"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useEffect, d = u.useState;
	function m(e) {
		var t = e.msg, n = o("WAWebInAppSignupConfirmation").getInAppSignupConfirmationInfo(t), a = o("WAWebSignupCTAExperiment").getSignupCTAExperiment(), i = d(null), l = i[0], u = i[1], m = d(null), p = m[0], _ = m[1], f = r("useWAWebUnmountSignal")();
		return c(function() {
			var e = o("WAWebUserPrefsMeUser").getMeUserOrThrow();
			e != null && o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.find(e).then(function(e) {
				return o("WAWebReleaseToEventLoop").releaseToEventLoop().then(function() {
					return e;
				});
			}).then(function(e) {
				f.aborted || (_(e), u(e == null ? void 0 : e.img));
			}).catch(r("WAWebNoop"));
		}, [f]), o("useWAWebListener").useListener(p, "change:img", function(e) {
			u(e == null ? void 0 : e.img);
		}), n == null ? null : s.jsx(r("WAWebInAppSignupConfirmationHeaderVisual.react"), {
			experiment: a,
			profilePicUrl: l,
			onProfilePicError: function() {
				return u(null);
			}
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 98);
