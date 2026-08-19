__d("WAWebVoipReactionUtils", ["WAWebDefaultReactions"], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		if (e == null) return null;
		var t = o("WAWebDefaultReactions").DEFAULT_REACTIONS.indexOf(e);
		return t >= 0 ? t : null;
	}
	function s(t) {
		return t != null && t !== "" && e(t) == null;
	}
	l.getSelectedReactionIndex = e, l.getIsMoreReactionSelected = s;
}), 98);
