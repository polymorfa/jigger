__d("MAWEphemeralSettingsDialog.react", [
	"fbt",
	"MWDialogText.react",
	"MWVerticalRhythm",
	"MWXColumn.react",
	"MWXColumnItem.react",
	"MWXDialog.react",
	"MWXDialogFooter.react",
	"MWXDialogHeader.react",
	"MWXLink.react",
	"MWXRadio.react",
	"MWXScrollableArea.react",
	"QPLUserFlow",
	"XMessengerDotComHelpContentControllerRouteBuilder",
	"getMAWEphemeralSettingsOptionsWithTitle",
	"promiseDone",
	"qpl",
	"react",
	"react-compiler-runtime",
	"updateEphemeralDuration",
	"useMAWEphemeralDurationInSec"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useMemo, m = c.useState, p = { scrollableArea: {
		maxHeight: "xq3t0pi",
		$$css: !0
	} }, _ = s._(
		/*BTDS*/
		""
	);
	function f(e) {
		var t = o("react-compiler-runtime").c(68), n = e.getThreadJid, a = e.onClose, i = e.threadKey, l = m(!1), c = l[0], d = l[1], f = r("useMAWEphemeralDurationInSec")(n, i), g = f.ephemeralDurationInSec, h = f.initialDuration, y = f.isLoadingEphemeralDuration, C = f.setEphemeralDurationInSec, b;
		t[0] !== h ? (b = r("getMAWEphemeralSettingsOptionsWithTitle")(h), t[0] = h, t[1] = b) : b = t[1];
		var v = b, S, R, L, E, k, I, T, D, x, $, P, N, M, w, A, F, O, B, W, q, U;
		if (t[2] !== v || t[3] !== g || t[4] !== n || t[5] !== h || t[6] !== c || t[7] !== y || t[8] !== a || t[9] !== C || t[10] !== i) {
			var V = r("qpl")._(1056845690, "2034"), H = function() {
				d(!1), r("QPLUserFlow").endSuccess(V, {}), a();
			}, G = function() {
				d(!1), r("QPLUserFlow").endFailure(V, "Failure setting ephemeral duration", {}), C(h);
			};
			k = r("MWXDialog.react"), D = u.jsx(r("MWXDialogFooter.react"), {
				callToActionGroupDirection: "backward",
				primaryCallToAction: {
					disabled: g === h || c,
					label: s._(
						/*BTDS*/
						""
					),
					loading: c,
					onPress: function() {
						var e;
						r("QPLUserFlow").addPoint(V, "confirm_button_click", {}), d(!0), r("promiseDone")(r("updateEphemeralDuration")((e = n()) != null ? e : void 0, g, !1, H, G, i));
					},
					testid: "maw-ephemeral-messages-settings-dialog_submit"
				},
				secondaryCallToAction: {
					label: s._(
						/*BTDS*/
						""
					),
					onPress: function() {
						r("QPLUserFlow").endCancel(V), a();
					}
				}
			}), x = !1, t[32] !== a ? ($ = u.jsx(r("MWXDialogHeader.react"), {
				onClose: a,
				title: _,
				withCloseButton: !0
			}), P = function() {
				r("QPLUserFlow").endCancel(r("qpl")._(1056845690, "2034"), {}), a();
			}, t[32] = a, t[33] = $, t[34] = P) : ($ = t[33], P = t[34]), N = "small", M = "maw-ephemeral-messages-settings-dialog", E = r("MWXColumn.react"), T = 4, L = r("MWXColumnItem.react"), t[35] === Symbol.for("react.memo_cache_sentinel") ? (U = u.jsx(r("MWDialogText.react"), {
				align: "center",
				color: "secondary",
				numberOfLines: 3,
				type: "body",
				children: s._(
					/*BTDS*/
					"",
					[s._param("learn_more_link", u.jsx(r("MWXLink.react"), {
						"aria-label": s._(
							/*BTDS*/
							""
						),
						href: r("XMessengerDotComHelpContentControllerRouteBuilder").buildUri({ cms_id: "1039542879410863" }).toString(),
						target: "_blank",
						children: s._(
							/*BTDS*/
							""
						)
					}))]
				)
			}), I = u.jsx(r("MWVerticalRhythm"), { height: 8 }), t[35] = I, t[36] = U) : (I = t[35], U = t[36]), R = r("MWXScrollableArea.react"), W = !1, q = p.scrollableArea, S = r("MWXColumn.react"), t[37] === Symbol.for("react.memo_cache_sentinel") ? (w = s._(
				/*BTDS*/
				""
			), t[37] = w) : w = t[37], A = 16, F = 8, O = "radiogroup", B = v.map(function(e) {
				return u.jsx(r("MWXColumnItem.react"), { children: u.jsx(r("MWXRadio.react"), {
					checked: g === e.timeInSeconds,
					disabled: y,
					label: e.title,
					name: e.title.toString(),
					onChange: function() {
						r("QPLUserFlow").addPoint(V, "duration_selected", { data: { string: { selected_duration: e.title.toString() } } }), C(e.timeInSeconds);
					},
					reduceEmphasis: g !== e.timeInSeconds,
					size: "medium",
					value: e.timeInSeconds
				}) }, String(e.timeInSeconds));
			}), t[2] = v, t[3] = g, t[4] = n, t[5] = h, t[6] = c, t[7] = y, t[8] = a, t[9] = C, t[10] = i, t[11] = S, t[12] = R, t[13] = L, t[14] = E, t[15] = k, t[16] = I, t[17] = T, t[18] = D, t[19] = x, t[20] = $, t[21] = P, t[22] = N, t[23] = M, t[24] = w, t[25] = A, t[26] = F, t[27] = O, t[28] = B, t[29] = W, t[30] = q, t[31] = U;
		} else S = t[11], R = t[12], L = t[13], E = t[14], k = t[15], I = t[16], T = t[17], D = t[18], x = t[19], $ = t[20], P = t[21], N = t[22], M = t[23], w = t[24], A = t[25], F = t[26], O = t[27], B = t[28], W = t[29], q = t[30], U = t[31];
		var z;
		t[38] !== S || t[39] !== w || t[40] !== A || t[41] !== F || t[42] !== O || t[43] !== B ? (z = u.jsx(S, {
			"aria-label": w,
			paddingHorizontal: A,
			paddingVertical: F,
			role: O,
			children: B
		}), t[38] = S, t[39] = w, t[40] = A, t[41] = F, t[42] = O, t[43] = B, t[44] = z) : z = t[44];
		var j;
		t[45] !== R || t[46] !== z || t[47] !== W || t[48] !== q ? (j = u.jsx(R, {
			horizontal: W,
			xstyle: q,
			children: z
		}), t[45] = R, t[46] = z, t[47] = W, t[48] = q, t[49] = j) : j = t[49];
		var K;
		t[50] !== L || t[51] !== I || t[52] !== j || t[53] !== U ? (K = u.jsxs(L, { children: [
			U,
			I,
			j
		] }), t[50] = L, t[51] = I, t[52] = j, t[53] = U, t[54] = K) : K = t[54];
		var Q;
		t[55] !== E || t[56] !== T || t[57] !== K ? (Q = u.jsx(E, {
			paddingTop: T,
			children: K
		}), t[55] = E, t[56] = T, t[57] = K, t[58] = Q) : Q = t[58];
		var X;
		return t[59] !== k || t[60] !== D || t[61] !== x || t[62] !== $ || t[63] !== P || t[64] !== N || t[65] !== M || t[66] !== Q ? (X = u.jsx(k, {
			footer: D,
			hasTextOnlyContent: x,
			header: $,
			onClose: P,
			size: N,
			testid: void 0,
			children: Q
		}), t[59] = k, t[60] = D, t[61] = x, t[62] = $, t[63] = P, t[64] = N, t[65] = M, t[66] = Q, t[67] = X) : X = t[67], X;
	}
	l.default = f;
}), 226);
