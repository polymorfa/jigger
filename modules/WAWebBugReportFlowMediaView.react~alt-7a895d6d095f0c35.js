__d("WAWebBugReportFlowMediaView.react", [
	"WALogger",
	"WAWebMediaEditorEnumsThemes",
	"WAWebMediaEditorLoadable.react",
	"WAWebModalManager",
	"WAWebNoop",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c = u || (u = o("react")), d = u.useCallback;
	function m(t) {
		var n = t.customCloseMediaModal, a = t.maxItems, i = t.mediaCollection, l = t.mediaMimeTypes, u = t.onRender, m = t.onSend, _ = t.suportedMediaTypes, f = d(function() {
			n != null ? n() : o("WAWebModalManager").ModalManager.closeMedia();
		}, [n]), g = d(function(t) {
			if (!t || t.length === 0) return o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["GalaxyFlowMediaView: No media provided for sending"]))), !1;
			var n = null, r = t.every(function(e, t) {
				return !e || !e.media ? (n = t, !1) : !0;
			});
			return n != null && o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["GalaxyFlowMediaView: Invalid media item at index ", ""])), n), r;
		}, []), h = d(async function(e) {
			if (g(e)) return (async function() {
				m(e.map(function(e) {
					return e.media;
				})).finally(r("WAWebNoop")), n != null ? n() : o("WAWebModalManager").ModalManager.closeMedia();
			})();
		}, [
			g,
			m,
			n
		]), y = function(t) {
			return i.processAttachments(t, void 0, _, a);
		};
		return c.jsx("div", {
			className: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x78zum5 xoz0ns6",
			children: c.jsx(o("WAWebMediaEditorLoadable.react").MediaEditorLoadable, {
				theme: o("WAWebMediaEditorEnumsThemes").MediaTheme.GALAXY_FLOW,
				onClose: f,
				onRender: u,
				initCaption: null,
				mimes: l,
				onSendMedia: h,
				mediaCollection: i,
				sendAsSticker: !1,
				onDropText: r("WAWebNoop"),
				canViewOnce: !1,
				hdEligible: !1,
				isSendHQPhotoEnabled: !1,
				maxNumberOfMedia: a,
				renderCaptionInput: p,
				onProcessAttachments: y,
				tsNavigationData: { surface: "bug-reporting-composer-media" }
			})
		});
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p() {
		return c.jsx(c.Fragment, {});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = m;
}), 98);
