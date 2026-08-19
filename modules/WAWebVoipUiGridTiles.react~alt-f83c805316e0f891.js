__d("WAWebVoipUiGridTiles.react", [
	"WAWebUserPrefsMeUser",
	"WAWebVoipGroupCallAccentColor",
	"WAWebVoipUiVideoGroupCallParticipant.react",
	"WAWebVoipVideoRendererInterface",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = e.dynamicCellWidth, n = e.getPeerReconnectingState, a = e.groupCallParticipantsConnected, i = e.groupChat, l = i === void 0 ? null : i, u = e.hasPartialLastRow, d = e.isCompactLayout, m = e.isMeasured, p = e.isSelfCallLinkCreator, _ = e.isSelfScreenSharing, f = e.lastRowItemCount, g = e.lastRowStartIndex, h = e.onPinParticipant, y = e.pageParticipants, C = e.pinnedParticipantJid, b = C === void 0 ? null : C, v = e.screenSharerJid, S = v === void 0 ? null : v, R = e.shouldCenterLastRow, L = e.useHorizontalLayout, E = e.usePagination, k = m && u && f > 1, I = y.length, T = y.map(function(e, i) {
			var y = c({
				dynamicCellWidth: t,
				hasPartialLastRow: u,
				index: i,
				isMeasured: m,
				isMultiItemLastRow: k,
				lastRowItemCount: f,
				lastRowStartIndex: g,
				pageParticipantCount: I,
				shouldCenterLastRow: R,
				useHorizontalLayout: L,
				usePagination: E
			}), C = n ? n(e) : null, v = o("WAWebUserPrefsMeUser").isMeAccount(e), T = v ? o("WAWebVoipVideoRendererInterface").selfPreviewJid : e.toString(), D = r("WAWebVoipGroupCallAccentColor")(l, e, a);
			return s.jsx("div", {
				style: babelHelpers.extends({}, y.gridColumnStyle, {
					alignSelf: y.alignSelf,
					flexShrink: y.flexShrink,
					height: "100%",
					justifySelf: y.justifySelf,
					minHeight: 0,
					minWidth: 0,
					width: y.width
				}),
				children: s.jsx(r("WAWebVoipUiVideoGroupCallParticipant.react"), {
					accentColor: D,
					canRemoveParticipant: p,
					initialPeerReconnectingState: C,
					isCompactLayout: d,
					isHorizontalLayout: L,
					isPaginated: m || E,
					isScreenShareTile: S != null && e.equals(S),
					isSelfScreenSharing: _,
					isPinned: b != null && e.equals(b),
					onPinParticipant: h != null ? function() {
						return h(e);
					} : void 0,
					participantJid: e,
					peerJid: T
				})
			}, e.toString());
		});
		if (k) {
			var D = T.slice(0, g), x = T.slice(g);
			return s.jsxs(s.Fragment, { children: [D, s.jsx("div", {
				style: { gridColumn: "1 / -1" },
				className: "x1qjc9v5 x1trrmfo x78zum5 x5yr21d xl56j7k x2lwn1j",
				children: x
			})] });
		}
		return s.jsx(s.Fragment, { children: T });
	}
	u.displayName = u.name + " [from " + i.id + "]";
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
