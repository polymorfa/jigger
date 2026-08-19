__d("WAWebBugReportFlowMediaPicker.react", [
	"WAWebAttachMediaCollection",
	"WAWebBugReportFlowMediaView.react",
	"WAWebFilePicker.react",
	"WAWebKeyboardTabUtils",
	"WAWebMimeTypes",
	"WAWebModalManager",
	"WAWebMsgType",
	"react",
	"react-compiler-runtime",
	"useWAWebUIM"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useEffect, m = u.useRef, p = 30, _ = [o("WAWebMimeTypes").IMAGE_MIMES, o("WAWebMimeTypes").VIDEO_MIMES].join(","), f = new Set([o("WAWebMsgType").MSG_TYPE.IMAGE, o("WAWebMsgType").MSG_TYPE.VIDEO]);
	function g(e) {
		var t, n = o("react-compiler-runtime").c(14), a = e.customCloseMediaModal, i = e.customOpenMediaModal, l = e.mediaPayload, u = e.onSend, c = r("useWAWebUIM")(), g = m(), y = (t = l.maxItems) != null ? t : p, C;
		n[0] !== a || n[1] !== i || n[2] !== y || n[3] !== u ? (C = function(t) {
			var e = t.attachments, n = new (r("WAWebAttachMediaCollection"))({ chatParticipantCount: 1 }), l = function() {
				n.processAttachments(e, void 0, f, y);
			}, c = s.jsx(r("WAWebBugReportFlowMediaView.react"), {
				onRender: l,
				mediaCollection: n,
				suportedMediaTypes: f,
				mediaMimeTypes: _,
				maxItems: y,
				onSend: u,
				customCloseMediaModal: a
			}), d = {
				transition: "status-modal",
				blockClose: !0,
				focusType: { type: o("WAWebKeyboardTabUtils").FocusType.TABBABLE }
			};
			i != null ? i(c, d) : o("WAWebModalManager").ModalManager.openMedia(c, d);
		}, n[0] = a, n[1] = i, n[2] = y, n[3] = u, n[4] = C) : C = n[4];
		var b = C, v;
		n[5] !== c ? (v = function() {
			c == null || c.requestDismiss();
		}, n[5] = c, n[6] = v) : v = n[6];
		var S = v, R;
		n[7] !== S || n[8] !== b ? (R = function(t) {
			var e;
			if (!t) {
				S();
				return;
			}
			t.stopPropagation();
			var n = Array.from((e = t.target.files) != null ? e : []);
			S(), n.length && b({ attachments: n.map(h) });
		}, n[7] = S, n[8] = b, n[9] = R) : R = n[9];
		var L = R, E, k;
		n[10] === Symbol.for("react.memo_cache_sentinel") ? (E = function() {
			var e;
			(e = g.current) == null || e.open();
		}, k = [], n[10] = E, n[11] = k) : (E = n[10], k = n[11]), d(E, k);
		var I;
		return n[12] !== L ? (I = s.jsx(r("WAWebFilePicker.react"), {
			ref: g,
			mimes: _,
			onChange: L,
			multiple: !0
		}), n[12] = L, n[13] = I) : I = n[13], I;
	}
	function h(e) {
		return { file: e };
	}
	l.default = g;
}), 98);
