__d("getLSMediaContactProfilePictureUrl", ["LSMediaUrlUtils"], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		var t = e.profilePictureUrlExpirationTimestampMs;
		if (t != null && o("LSMediaUrlUtils").isTimestampExpired(t) || e.profilePictureUrl === "") {
			var n;
			return (n = e.profilePictureFallbackUrl) != null ? n : e.profilePictureUrl;
		} else return e.profilePictureUrl;
	}
	l.default = e;
}), 98);
