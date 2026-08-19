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
	"react-compiler-runtime",
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
		var t = o("react-compiler-runtime").c(15), n = e.callLogMsg, a = e.onWindowReady, i = e.popoutWindow, l = d(!1), u = l[0], f = l[1], g, h;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (g = [
			r("WAWebCallCollection"),
			r("WAWebCallCollection").activeCall,
			o("WAWebVoipWindowConstants").sidebarVisibilityEmitter
		], h = o("WAWebVoipEventConstants").getMultiChangeEvent(o("WAWebVoipEventConstants").VoipCallCollectionEvents.ACTIVE_CALL, o("WAWebVoipEventConstants").VoipCallModelEvents.STATE), t[0] = g, t[1] = h) : (g = t[0], h = t[1]);
		var y = r("useWAWebEventTargetValue")(g, h + " change", o("WAWebVoipWindowConstants").getEffectiveMinWindowWidth), C, b;
		t[2] !== y || t[3] !== i ? (C = function() {
			if (i) {
				var e = function() {
					f(i.outerWidth < y || i.outerHeight < o("WAWebVoipWindowConstants").MIN_WINDOW_HEIGHT);
				};
				return i.addEventListener("resize", e), e(), (function() {
					i.removeEventListener("resize", e);
				});
			}
		}, b = [i, y], t[2] = y, t[3] = i, t[4] = C, t[5] = b) : (C = t[4], b = t[5]), c(C, b);
		var v = r("useWAWebEventTargetValue")(o("WAWebVoipWindowConstants").speakerDominantTooSmallEmitter, "change", o("WAWebVoipWindowConstants").getIsSpeakerDominantTooSmall);
		r("useWAWebVoipPopoutTooltipFallback")(i);
		var S;
		t[6] !== n || t[7] !== i ? (S = i ? {
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
		} : null, t[6] = n, t[7] = i, t[8] = S) : S = t[8];
		var R = o("useWAWebVoipWindowSetup").useVoipWindowSetup(S, a), L;
		return t[9] !== n || t[10] !== R || t[11] !== u || t[12] !== v || t[13] !== i ? (L = R && o("ReactDOM").createPortal(s.jsxs(r("BaseContextualLayerAnchorRoot.react"), { children: [
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
			s.jsx(o("WAWebVoipTooSmallOverlay.react").WAWebVoipTooSmallOverlay, { isVisible: u || v })
		] }), R), t[9] = n, t[10] = R, t[11] = u, t[12] = v, t[13] = i, t[14] = L) : L = t[14], L;
	}
	l.WAWebVoipUiPopoutWindow = f;
}), 226);
