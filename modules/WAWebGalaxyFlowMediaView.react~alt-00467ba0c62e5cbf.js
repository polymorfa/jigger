__d("WAWebGalaxyFlowMediaView.react", [
	"WALogger",
	"WAWebAttachMediaModel",
	"WAWebGalaxyFlowAttachMediaUtils",
	"WAWebMediaEditorEnumsThemes",
	"WAWebMediaEditorLoadable.react",
	"WAWebModalManager",
	"WAWebNoop",
	"WAWebUiIdleEventBus",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c, d = c || (c = o("react")), m = c.useCallback, p = function() {
		o("WAWebModalManager").ModalManager.closeMedia();
	};
	function _(t) {
		var n = t.allowMultipleMedia, a = t.maxFileSizeBytes, i = t.maxItems, l = t.mediaCollection, c = t.mediaMimeTypes, _ = t.mediaPayload.collectionId, g = t.onRender, h = t.suportedMediaTypes, y = m(function(t) {
			return !t || t.length === 0 ? (o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["GalaxyFlowMediaView: No media provided for sending"]))), !1) : t.every(function(e, t) {
				return !e || !e.media ? (o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["GalaxyFlowMediaView: Invalid media item at index ", ""])), t), !1) : !0;
			});
		}, []), C = m(async function(e) {
			if (y(e)) return (async function() {
				_ != null && o("WAWebUiIdleEventBus").UiIdleEventBus.once("ui_idle", function() {
					var t = [];
					e.forEach(function(e) {
						var n = e.media, r = {};
						r.type = n.type, r.caption = n.caption, r.isMediaCryptoExpectedForChat = !0, r.addEvenWhilePreparing = n.previewable && n.state === o("WAWebAttachMediaModel").ATTACH_MEDIA_STATE.PROCESSING, t.length < 3 && t.push(n.type), o("WAWebGalaxyFlowAttachMediaUtils").sendGalaxyMediaMsg(_, n, r, a);
					}), e.length > 0 && o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
						"GalaxyFlowMediaView: sent ",
						" items, types: ",
						""
					])), e.length, t);
				}), o("WAWebModalManager").ModalManager.closeMedia();
			})();
		}, [
			y,
			_,
			a
		]), b = function(t) {
			return l.processAttachments(t, void 0, h, i);
		};
		return d.jsx("div", {
			className: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x78zum5 xbpklzw",
			children: d.jsx(o("WAWebMediaEditorLoadable.react").MediaEditorLoadable, {
				theme: o("WAWebMediaEditorEnumsThemes").MediaTheme.GALAXY_FLOW,
				onClose: p,
				onRender: g,
				initCaption: null,
				mimes: c,
				onSendMedia: C,
				mediaCollection: l,
				sendAsSticker: !1,
				onDropText: r("WAWebNoop"),
				canViewOnce: !1,
				hdEligible: !0,
				maxNumberOfMedia: i,
				renderCaptionInput: f,
				allowMultipleMedia: n,
				onProcessAttachments: b,
				tsNavigationData: { surface: "status-composer-media" }
			})
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f() {
		return d.jsx(d.Fragment, {});
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = _;
}), 98);
