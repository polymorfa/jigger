__d("useWAWebBizAIGoogleDriveFiles", [
	"CometRelay",
	"Promise",
	"WALogger",
	"WAWebBizAILargeScreensLogEvents",
	"WAWebBizAiAgentGating",
	"WAWebBizAiGoogleDriveDeleteFilesMutation",
	"WAWebBizAiGoogleDriveGetFilesMutation",
	"getErrorSafe",
	"react",
	"react-compiler-runtime",
	"useWAWebOnUnmount",
	"useWAWebStableCallback"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p = m || (m = o("react")), _ = p.useCallback, f = p.useRef, g = p.useState;
	function h() {
		var t = o("react-compiler-runtime").c(14), a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = o("WAWebBizAiAgentGating").isGoogleDriveEnabled(), t[0] = a) : a = t[0];
		var i = a, l = o("CometRelay").useMutation(o("WAWebBizAiGoogleDriveGetFilesMutation").MUTATION), m = l[0], p = o("CometRelay").useMutation(o("WAWebBizAiGoogleDriveDeleteFilesMutation").DELETE_MUTATION), _ = p[0], h;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (h = [], t[1] = h) : h = t[1];
		var y = g(h), C = y[0], b = y[1], v = g(!1), S = v[0], R = v[1], L = g(!1), E = L[0], k = L[1], I = g(!1), T = I[0], D = I[1], x = f(null), $ = f(0), P = f(!1), N;
		t[2] !== m ? (N = function() {
			var t;
			if (i) {
				(t = x.current) == null || t.dispose();
				var n = !P.current;
				n && R(!0), D(!1);
				var r = $.current = $.current + 1;
				x.current = m({
					variables: {},
					onCompleted: function(t) {
						$.current === r && (x.current = null, P.current = !0, b(o("WAWebBizAiGoogleDriveGetFilesMutation").normalizeGoogleDriveFiles(t)), R(!1), k(!0), o("WAWebBizAILargeScreensLogEvents").logApiGoogleDriveFetchFiles(!0));
					},
					onError: function(a) {
						$.current === r && (x.current = null, o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["WAWebBizAiGoogleDriveGetFilesMutation failed"]))).catching(a).sendLogs("biz-ai-gdrive-get-files-failed"), n && D(!0), R(!1), k(!0), o("WAWebBizAILargeScreensLogEvents").logApiGoogleDriveFetchFiles(!1, a.name));
					}
				});
			}
		}, t[2] = m, t[3] = N) : N = t[3];
		var M = r("useWAWebStableCallback")(N), w;
		t[4] !== _ ? (w = function(t) {
			return new (d || (d = (n("Promise"))))(function(e) {
				if (!i) {
					o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose(["WAWebBizAiGoogleDriveDeleteFilesMutation suppressed: feature disabled"]))), e({
						isSuccess: !1,
						suppressed: !0
					});
					return;
				}
				try {
					_({
						variables: { input: { google_file_ids: [t] } },
						onCompleted: function(r) {
							var n, o = (r == null || (n = r.meta_ai_biz_agent_wa_gdrive_delete_files) == null ? void 0 : n.success) === !0;
							if (o) {
								var a;
								(a = x.current) == null || a.dispose(), x.current = null, $.current = $.current + 1, b(function(e) {
									return e.filter(function(e) {
										return e.google_file_id !== t;
									});
								});
							}
							e({ isSuccess: o });
						},
						onError: function(n) {
							o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["WAWebBizAiGoogleDriveDeleteFilesMutation failed"]))).catching(n).sendLogs("biz-ai-gdrive-delete-files-failed"), e({ isSuccess: !1 });
						}
					});
				} catch (t) {
					var n = t;
					o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["WAWebBizAiGoogleDriveDeleteFilesMutation failed"]))).catching(r("getErrorSafe")(n)).sendLogs("biz-ai-gdrive-delete-files-failed"), e({ isSuccess: !1 });
				}
			});
		}, t[4] = _, t[5] = w) : w = t[5];
		var A = w, F;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (F = function() {
			var e;
			(e = x.current) == null || e.dispose();
		}, t[6] = F) : F = t[6], r("useWAWebOnUnmount")(F);
		var O;
		return t[7] !== A || t[8] !== T || t[9] !== C || t[10] !== M || t[11] !== E || t[12] !== S ? (O = {
			deleteFile: A,
			enabled: i,
			error: T,
			files: C,
			loaded: E,
			loadFiles: M,
			loading: S
		}, t[7] = A, t[8] = T, t[9] = C, t[10] = M, t[11] = E, t[12] = S, t[13] = O) : O = t[13], O;
	}
	l.default = h;
}), 98);
