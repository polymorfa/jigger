__d("WAWebVoipUiPopoutWindow.react", [
	"BaseContextualLayerAnchorRoot.react",
	"ReactDOM",
	"WAWebCallCollection",
	"WAWebChatCollection",
	"WAWebContextMenuManager.react",
	"WAWebVoipEventConstants",
	"WAWebVoipPopoutKeyboardShortcutsHotkey.react",
	"WAWebVoipPopoutModalManagerWrapper.react",
	"WAWebVoipTooSmallOverlay.react",
	"WAWebVoipUiLoadable",
	"WAWebVoipUiPopoutWindowPortalContainer.react",
	"WAWebVoipWindowConstants",
	"fbs",
	"react",
	"useWAWebEventTargetValue",
	"useWAWebVoipPopoutTooltipFallback",
	"useWAWebVoipWindowSetup"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useEffect, d = u.useState;
	function m() {
		o("WAWebVoipUiPopoutWindowPortalContainer.react").WAWebVoipUiPopoutWindowEventEmitter.trigger("closePopoutWindow", { callEnded: !1 });
	}
	function p(e) {
		if (e != null) {
			var t, n = (t = e.id) == null ? void 0 : t.remote;
			if (n != null) {
				var a = o("WAWebChatCollection").ChatCollection.get(n);
				if (a != null && a.id.isGroup()) {
					var i = a.name || a.formattedTitle;
					if (i != null && i !== "") return String(r("fbs")._(
						/*BTDS*/
						"",
						[r("fbs")._param("group_name", i)]
					));
				}
			}
		}
		return String(r("fbs")._(
			/*BTDS*/
			""
		));
	}
	function _() {
		var e = r("WAWebCallCollection").activeCall;
		if (e != null && e.isCallLink && e.callLinkToken != null) {
			var t = e.isVideo ? "video" : "voice";
			return window.location.origin + "/call/" + t + "/" + e.callLinkToken;
		}
		return window.location.origin;
	}
	function f(e) {
		var t, n = e.callLogMsg, a = e.onWindowReady, i = e.popoutWindow, l = d(!1), u = l[0], f = l[1], g = r("useWAWebEventTargetValue")([
			r("WAWebCallCollection"),
			r("WAWebCallCollection").activeCall,
			(t = o("WAWebVoipWindowConstants")).sidebarVisibilityEmitter
		], o("WAWebVoipEventConstants").getMultiChangeEvent(o("WAWebVoipEventConstants").VoipCallCollectionEvents.ACTIVE_CALL, o("WAWebVoipEventConstants").VoipCallModelEvents.STATE) + " change", t.getEffectiveMinWindowWidth);
		c(function() {
			if (i) {
				var e = function() {
					f(i.outerWidth < g || i.outerHeight < o("WAWebVoipWindowConstants").MIN_WINDOW_HEIGHT);
				};
				return i.addEventListener("resize", e), e(), function() {
					i.removeEventListener("resize", e);
				};
			}
		}, [i, g]);
		var h = r("useWAWebEventTargetValue")(t.speakerDominantTooSmallEmitter, "change", t.getIsSpeakerDominantTooSmall);
		r("useWAWebVoipPopoutTooltipFallback")(i);
		var y = o("useWAWebVoipWindowSetup").useVoipWindowSetup(i ? {
			targetWindow: i,
			popoverPortalId: o("WAWebVoipUiPopoutWindowPortalContainer.react").VOIP_POPOUT_POPOVER_PORTAL_ID,
			logContext: "popout window",
			onBeforeUnload: m,
			onPageHide: m,
			setDocumentTitle: function(t) {
				t.title = p(n);
			},
			preventPageRefresh: !0,
			replaceUrl: _()
		} : null, a);
		return y && o("ReactDOM").createPortal(s.jsxs(r("BaseContextualLayerAnchorRoot.react"), { children: [
			s.jsx(o("WAWebVoipPopoutModalManagerWrapper.react").VoipPopoutModalManagerWrapper, { type: o("WAWebVoipPopoutModalManagerWrapper.react").ModalType }),
			s.jsx(o("WAWebVoipPopoutModalManagerWrapper.react").VoipPopoutModalManagerWrapper, { type: o("WAWebVoipPopoutModalManagerWrapper.react").SupportType }),
			s.jsx(o("WAWebVoipPopoutModalManagerWrapper.react").VoipPopoutModalManagerWrapper, { type: o("WAWebVoipPopoutModalManagerWrapper.react").MediaType }),
			s.jsx(r("WAWebVoipPopoutKeyboardShortcutsHotkey.react"), {}),
			s.jsx(o("WAWebContextMenuManager.react").ContextMenuManager, {
				type: o("WAWebContextMenuManager.react").Type.TOOLTIP,
				windowEl: i,
				documentEl: i == null ? void 0 : i.document
			}),
			s.jsx(o("WAWebVoipUiLoadable").WAWebVoipUiLoadable, { callLogMsg: n }),
			s.jsx(o("WAWebVoipTooSmallOverlay.react").WAWebVoipTooSmallOverlay, { isVisible: u || h })
		] }), y);
	}
	f.displayName = f.name + " [from " + i.id + "]", l.WAWebVoipUiPopoutWindow = f;
}), 226);
