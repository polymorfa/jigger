__d("WAWebVoipUiGridTiles.react", [
	"WAWebUserPrefsMeUser",
	"WAWebVoipGroupCallAccentColor",
	"WAWebVoipUiVideoGroupCallParticipant.react",
	"WAWebVoipVideoRendererInterface",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(51), n = e.dynamicCellWidth, a = e.getPeerReconnectingState, i = e.groupCallParticipantsConnected, l = e.groupChat, u = e.hasPartialLastRow, d = e.isCompactLayout, m = e.isMeasured, p = e.isSelfCallLinkCreator, _ = e.isSelfScreenSharing, f = e.lastRowItemCount, g = e.lastRowStartIndex, h = e.onPinParticipant, y = e.pageParticipants, C = e.pinnedParticipantJid, b = e.screenSharerJid, v = e.shouldCenterLastRow, S = e.useHorizontalLayout, R = e.usePagination, L = l === void 0 ? null : l, E = C === void 0 ? null : C, k = b === void 0 ? null : b, I = m && u && f > 1, T = y.length, D, x;
		if (t[0] !== n || t[1] !== a || t[2] !== i || t[3] !== L || t[4] !== u || t[5] !== d || t[6] !== m || t[7] !== I || t[8] !== p || t[9] !== _ || t[10] !== f || t[11] !== g || t[12] !== h || t[13] !== T || t[14] !== y || t[15] !== E || t[16] !== k || t[17] !== v || t[18] !== S || t[19] !== R) {
			D = Symbol.for("react.early_return_sentinel");
			e: {
				var $;
				if (t[22] !== n || t[23] !== a || t[24] !== i || t[25] !== L || t[26] !== u || t[27] !== d || t[28] !== m || t[29] !== I || t[30] !== p || t[31] !== _ || t[32] !== f || t[33] !== g || t[34] !== h || t[35] !== T || t[36] !== E || t[37] !== k || t[38] !== v || t[39] !== S || t[40] !== R ? ($ = function(t, l) {
					var e = c({
						dynamicCellWidth: n,
						hasPartialLastRow: u,
						index: l,
						isMeasured: m,
						isMultiItemLastRow: I,
						lastRowItemCount: f,
						lastRowStartIndex: g,
						pageParticipantCount: T,
						shouldCenterLastRow: v,
						useHorizontalLayout: S,
						usePagination: R
					}), y = a ? a(t) : null, C = o("WAWebUserPrefsMeUser").isMeAccount(t), b = C ? o("WAWebVoipVideoRendererInterface").selfPreviewJid : t.toString(), D = r("WAWebVoipGroupCallAccentColor")(L, t, i);
					return s.jsx("div", {
						style: babelHelpers.extends({}, e.gridColumnStyle, {
							alignSelf: e.alignSelf,
							flexShrink: e.flexShrink,
							height: "100%",
							justifySelf: e.justifySelf,
							minHeight: 0,
							minWidth: 0,
							width: e.width
						}),
						children: s.jsx(r("WAWebVoipUiVideoGroupCallParticipant.react"), {
							accentColor: D,
							canRemoveParticipant: p,
							initialPeerReconnectingState: y,
							isCompactLayout: d,
							isHorizontalLayout: S,
							isPaginated: m || R,
							isScreenShareTile: k != null && t.equals(k),
							isSelfScreenSharing: _,
							isPinned: E != null && t.equals(E),
							onPinParticipant: h != null ? function() {
								return h(t);
							} : void 0,
							participantJid: t,
							peerJid: b
						})
					}, t.toString());
				}, t[22] = n, t[23] = a, t[24] = i, t[25] = L, t[26] = u, t[27] = d, t[28] = m, t[29] = I, t[30] = p, t[31] = _, t[32] = f, t[33] = g, t[34] = h, t[35] = T, t[36] = E, t[37] = k, t[38] = v, t[39] = S, t[40] = R, t[41] = $) : $ = t[41], x = y.map($), I) {
					var P = x.slice(0, g), N = x.slice(g), M, w;
					t[42] === Symbol.for("react.memo_cache_sentinel") ? (M = { gridColumn: "1 / -1" }, w = { className: "x1qjc9v5 x1trrmfo x78zum5 x5yr21d xl56j7k x2lwn1j" }, t[42] = M, t[43] = w) : (M = t[42], w = t[43]);
					var A;
					t[44] !== N ? (A = s.jsx("div", babelHelpers.extends({ style: M }, w, { children: N })), t[44] = N, t[45] = A) : A = t[45];
					var F;
					t[46] !== P || t[47] !== A ? (F = s.jsxs(s.Fragment, { children: [P, A] }), t[46] = P, t[47] = A, t[48] = F) : F = t[48], D = F;
					break e;
				}
			}
			t[0] = n, t[1] = a, t[2] = i, t[3] = L, t[4] = u, t[5] = d, t[6] = m, t[7] = I, t[8] = p, t[9] = _, t[10] = f, t[11] = g, t[12] = h, t[13] = T, t[14] = y, t[15] = E, t[16] = k, t[17] = v, t[18] = S, t[19] = R, t[20] = D, t[21] = x;
		} else D = t[20], x = t[21];
		if (D !== Symbol.for("react.early_return_sentinel")) return D;
		var O;
		return t[49] !== x ? (O = s.jsx(s.Fragment, { children: x }), t[49] = x, t[50] = O) : O = t[50], O;
	}
	function c(e) {
		var t = e.dynamicCellWidth, n = e.hasPartialLastRow, r = e.index, o = e.isMeasured, a = e.isMultiItemLastRow, i = e.lastRowItemCount, l = e.lastRowStartIndex, s = e.pageParticipantCount, u = e.shouldCenterLastRow, c = e.useHorizontalLayout, d = e.usePagination, m = a && r >= l;
		if (m) return {
			alignSelf: "stretch",
			flexShrink: 0,
			gridColumnStyle: {},
			justifySelf: void 0,
			width: t + "px"
		};
		var p = o && n && i === 1 && r === l, _ = {}, f = !1;
		p ? (_ = { gridColumn: "1 / -1" }, f = !0) : !o && !c && !d && (s === 3 && r === 2 ? (_ = { gridColumn: "1 / span 2" }, f = !0) : s === 7 && r === 6 && (_ = { gridColumn: "1 / span 3" }, f = !0));
		var g = "100%";
		return p ? g = t + "px" : u && f && (g = "50%"), {
			alignSelf: o || d ? "stretch" : "center",
			flexShrink: void 0,
			gridColumnStyle: _,
			justifySelf: (o || d) && !p ? "stretch" : "center",
			width: g
		};
	}
	l.default = u;
}), 98);
