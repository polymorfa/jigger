__d("useWAWebVoipGroupCallOrdering", [
	"WAWebCallCollection",
	"WAWebUserPrefsMeUser",
	"WAWebVoipEventConstants",
	"WAWebVoipParticipantOrdering",
	"react",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = s.useCallback, c = s.useMemo, d = s.useState;
	function m(e, t, n, r, o, a) {
		var i = t != null && a.some(function(e) {
			return e.equals(t);
		}), l = r != null, s = t !== n && i, u = r !== o && l, c = e;
		return s && (c = "pin"), u && (c = "screen"), c === "pin" && !i && (c = l ? "screen" : null), c === "screen" && !l && (c = i ? "pin" : null), e == null && c == null && (i ? c = "pin" : l && (c = "screen")), c;
	}
	function p(e, t, n, a, i, l, s, p, _, f) {
		var g = d({
			pages: [],
			dominantSpeakers: []
		}), h = g[0], y = g[1], C = c(function() {
			if (n) {
				var e;
				return (e = i.find(function(e) {
					return o("WAWebUserPrefsMeUser").isMeAccount(e);
				})) != null ? e : null;
			}
			return _ != null ? _ : null;
		}, [
			n,
			i,
			_
		]), b = d(function() {
			var e, t = r("WAWebCallCollection").activeCall;
			return (e = t == null ? void 0 : t.groupCallParticipantGridRanks) != null ? e : null;
		}), v = b[0], S = b[1], R = u(function() {
			var e, t = r("WAWebCallCollection").activeCall;
			S((e = t == null ? void 0 : t.groupCallParticipantGridRanks) != null ? e : null);
		}, []);
		o("useWAWebListener").useListener(r("WAWebCallCollection").activeCall, o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.GROUP_CALL_PARTICIPANT_STATES), R);
		var L = d(0), E = L[0], k = L[1], I = u(function() {
			k(function(e) {
				return e + 1;
			});
		}, []);
		o("useWAWebListener").useListener(r("WAWebCallCollection").activeCall, "participantVideoStateChange", I), o("useWAWebListener").useListener(r("WAWebCallCollection").activeCall, "participantMicStateChange", I);
		var T = c(function() {
			var e = r("WAWebCallCollection").activeCall;
			if (e == null) return null;
			var t = new Map();
			for (var n of i) {
				var o = n.toString();
				t.set(o, {
					isPinned: p != null && n.equals(p),
					isScreenSharing: C != null && n.equals(C),
					isVideoEnabled: !e.isParticipantVideoMuted(n),
					isMicEnabled: !e.isParticipantMicMuted(n)
				});
			}
			return t;
		}, [
			i,
			p,
			C,
			E
		]), D = d(function() {
			return {
				dominantSpeaker: null,
				stripParticipants: []
			};
		}), x = D[0], $ = D[1], P = d(function() {
			return {
				gridRanks: v,
				layoutMode: a,
				participantsConnected: t,
				participantsPerPage: s,
				participantStateVersion: -1,
				pinnedParticipantJid: p,
				screenSharerJid: C,
				stripVisibleCount: f
			};
		}), N = P[0], M = P[1];
		if (t !== N.participantsConnected || v !== N.gridRanks || a !== N.layoutMode || C !== N.screenSharerJid || p !== N.pinnedParticipantJid || E !== N.participantStateVersion || s !== N.participantsPerPage || f !== N.stripVisibleCount) {
			M({
				gridRanks: v,
				layoutMode: a,
				participantsConnected: t,
				participantsPerPage: s,
				participantStateVersion: E,
				pinnedParticipantJid: p,
				screenSharerJid: C,
				stripVisibleCount: f
			});
			var w = m(e, p, N.pinnedParticipantJid, C, N.screenSharerJid, i);
			if (w !== e && (l == null || l(w)), a === "speaker") {
				var A = null;
				w === "pin" ? A = p : w === "screen" && (A = C);
				var F = o("WAWebVoipParticipantOrdering").computeSpeakerModeOrder(i, v, x, T, f, A);
				$(F);
			} else {
				x.dominantSpeaker != null && $({
					dominantSpeaker: null,
					stripParticipants: []
				});
				var O = o("WAWebVoipParticipantOrdering").computePagedParticipantsWithMinimalMovement(i, s, v, T, h.pages.length > 0 ? h : null);
				y(O);
			}
		}
		return {
			currentDominantSpeaker: x.dominantSpeaker,
			nonDominantSpeakers: x.stripParticipants,
			pagedParticipants: h,
			screenSharerJid: C
		};
	}
	l.default = p;
}), 98);
