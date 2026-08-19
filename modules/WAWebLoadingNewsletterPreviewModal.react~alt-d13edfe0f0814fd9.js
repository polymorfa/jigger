__d("WAWebLoadingNewsletterPreviewModal.react", [
	"fbt",
	"WALogger",
	"WAWebActionToast.react",
	"WAWebCommonNewsletterIntegrityStrings",
	"WAWebEmptyState.react",
	"WAWebLoadNewsletterPreviewChatAction",
	"WAWebModal.react",
	"WAWebModalManager",
	"WAWebToast.react",
	"WAWebToastManager",
	"err",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d = c || (c = o("react")), m = c, p = m.useEffect, _ = m.useState;
	function f(t) {
		var n = t.chatEntryPoint, a = t.identifier, i = t.onFailure, l = t.onSuccess, c = t.qpl, m = _(!0), f = m[0], g = m[1], h = _(null), y = h[0], C = h[1], b = _(null), v = b[0], S = b[1];
		p(function() {
			o("WAWebLoadNewsletterPreviewChatAction").loadNewsletterPreviewChat(a, c).then(function(e) {
				if (e == null) throw r("err")("Chat not found");
				C(e);
			}).catch(function(t) {
				o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[LoadingNewsletterPreviewModal] Failed to load preview for ", ""])), a), S(t);
			}).finally(function() {
				g(!1);
			});
		}, []);
		async function R() {
			var e = await o("WAWebCommonNewsletterIntegrityStrings").getGeosuspendedInYourCountryString();
			o("WAWebToastManager").ToastManager.open(d.jsx(o("WAWebToast.react").Toast, {
				msg: e,
				id: L
			}));
		}
		if (f) return d.jsx(o("WAWebModal.react").Modal, { children: d.jsx(o("WAWebEmptyState.react").Loading, { description: "Loading Newsletter Preview Modal" }) });
		if (y != null) {
			o("WAWebModalManager").ModalManager.close(), l(y);
			return;
		}
		o("WAWebModalManager").ModalManager.close(), o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[openNewsletterPreviewChat] Failed to load preview for ", ""])), a), i == null || i();
		var L = o("WAWebActionToast.react").genId();
		(v == null ? void 0 : v.status) === 405 ? o("WAWebToastManager").ToastManager.open(d.jsx(o("WAWebToast.react").Toast, {
			msg: s._(
				/*BTDS*/
				""
			),
			id: L
		})) : (v == null ? void 0 : v.status) === 451 ? R() : o("WAWebToastManager").ToastManager.open(d.jsx(o("WAWebToast.react").Toast, {
			msg: s._(
				/*BTDS*/
				""
			),
			id: L
		}));
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = f;
}), 226);
