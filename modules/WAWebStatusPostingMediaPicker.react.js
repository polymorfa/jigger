__d("WAWebStatusPostingMediaPicker.react", [
	"WALogger",
	"WAWebAttachMediaCollection",
	"WAWebCmd",
	"WAWebFilePicker.react",
	"WAWebLogStatusPosterActions",
	"WAWebMimeTypes",
	"WAWebModalManager",
	"WAWebStatusJidUtils",
	"WAWebStatusPosterActionsLogger",
	"WAWebStatusPostingMediaView.react",
	"WAWebWamEnumMediaPickerOriginType",
	"nullthrows",
	"react",
	"react-compiler-runtime",
	"useWAWebUIM"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c, d = c || (c = o("react")), m = c, p = m.useEffect, _ = m.useMemo;
	function f(t) {
		var n = o("react-compiler-runtime").c(22), a = t.entryPoint, i = t.isNewsletterStatus, l = t.mediaPickerRef, c = t.newsletterWid, m = t.statusPostingSessionId, _ = i === void 0 ? !1 : i, f;
		n[0] !== c || n[1] !== m ? (f = new (o("WAWebStatusPosterActionsLogger")).StatusPosterActionsLogger(m, c), n[0] = c, n[1] = m, n[2] = f) : f = n[2];
		var h = f, y, C;
		n[3] !== h ? (y = function() {
			o("WAWebCmd").Cmd.onStatusPostingFlow(), h.logMediaPickerImp(o("WAWebLogStatusPosterActions").STATUS_CREATION_ENTRY_POINT.STATUS_TAB_CAMERA);
		}, C = [h], n[3] = h, n[4] = y, n[5] = C) : (y = n[4], C = n[5]), p(y, C);
		var b = r("useWAWebUIM")(), v;
		n[6] === Symbol.for("react.memo_cache_sentinel") ? (v = o("WAWebStatusJidUtils").getStatusChat(), n[6] = v) : v = n[6];
		var S = v;
		if (S == null) return o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["StatusPostMediaPicker: chat not found"]))), null;
		var R;
		n[7] !== a || n[8] !== _ || n[9] !== h || n[10] !== c ? (R = function(t) {
			var e = t.attachments, n = function() {
				var t = S.attachMediaContents;
				if (!t) {
					o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose(["StatusPostMediaPicker: attachMediaContents uninitialized"])));
					return;
				}
				if (e && e.length > 0) t.processAttachmentsForChat(e, o("WAWebWamEnumMediaPickerOriginType").MEDIA_PICKER_ORIGIN_TYPE.STATUS_TAB_CAMERA_PHOTO_LIBRARY, S);
				else {
					o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose(["StatusPostMediaPicker: receive empty attachments"])));
					return;
				}
			};
			S.attachMediaContents || S.setAttachMediaContents(new (r("WAWebAttachMediaCollection"))({ chatParticipantCount: S.getParticipantCount() }));
			var i = r("nullthrows")(S.attachMediaContents), l = d.jsx(r("WAWebStatusPostingMediaView.react"), {
				chat: S,
				onRender: n,
				mediaCollection: i,
				statusPosterActionsLogger: h,
				entryPoint: a,
				newsletterWid: c,
				isNewsletterStatus: _
			});
			o("WAWebModalManager").ModalManager.openMedia(l, { transition: "status-modal" });
		}, n[7] = a, n[8] = _, n[9] = h, n[10] = c, n[11] = R) : R = n[11];
		var L = R, E;
		n[12] !== b ? (E = function() {
			b == null || b.requestDismiss();
		}, n[12] = b, n[13] = E) : E = n[13];
		var k = E, I;
		n[14] !== k || n[15] !== h || n[16] !== L ? (I = function(t) {
			var e;
			if (!t) {
				k();
				return;
			}
			t.stopPropagation();
			var n = Array.from((e = t.target.files) != null ? e : []);
			k(), n.length && (L({ attachments: n.map(g) }), h.logMediaPickerMediaSelected(o("WAWebLogStatusPosterActions").STATUS_CONTENT_SOURCE.GALLERY));
		}, n[14] = k, n[15] = h, n[16] = L, n[17] = I) : I = n[17];
		var T = I, D;
		n[18] === Symbol.for("react.memo_cache_sentinel") ? (D = [o("WAWebMimeTypes").IMAGE_MIMES, o("WAWebMimeTypes").VIDEO_MIMES], n[18] = D) : D = n[18];
		var x = D.join(","), $;
		return n[19] !== T || n[20] !== l ? ($ = d.jsx(r("WAWebFilePicker.react"), {
			ref: l,
			mimes: x,
			onChange: T,
			multiple: !0
		}), n[19] = T, n[20] = l, n[21] = $) : $ = n[21], $;
	}
	function g(e) {
		return { file: e };
	}
	l.default = f;
}), 98);
