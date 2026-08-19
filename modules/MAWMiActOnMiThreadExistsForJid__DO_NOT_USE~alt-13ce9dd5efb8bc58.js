__d("MAWMiActOnMiThreadExistsForJid__DO_NOT_USE", ["MAWThreadLoadingState", "MWFBLogger"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = o("MWFBLogger").MWLogger().tags([
		"MiActMapping",
		"UIActions",
		"ThreadReady"
	]);
	async function c(t, n, r, a) {
		var i = await o("MAWThreadLoadingState").getThreadKeyIfMiThreadNotMissing(t, n);
		if (i == null) throw u.mustfixThrow("Missing thread key or MI mapping for jid: %s, thread action: %s, MI mapping state %s", r, n);
		return u.DEBUG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
			"Executing ",
			", jid: ",
			""
		])), r, n), a(t, i);
	}
	async function d(e, t, n, r) {
		var a = await o("MAWThreadLoadingState").getThreadKeyIfMiThreadNotMissing(e, t);
		if (a != null) return u.DEBUG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
			"Executing ",
			", jid: ",
			""
		])), n, t), r(e, a);
	}
	l.onMiThreadExistsForJid__DO_NOT_USE = c, l.onMiThreadExistsForJidNoThrow__DO_NOT_USE = d;
}), 98);
