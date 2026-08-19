__d("MAWSecureThreadDetailWrapper.react", [
	"CometPageletWithDiv.react",
	"FBLogger",
	"I64",
	"Int64Hooks",
	"LSAuthorityLevel",
	"LSFactory",
	"LSInitiateThreadMigrationStoredProcedure",
	"LSIntEnum",
	"MAWSecureThreadDetail.react",
	"MAWSecureThreadQPContainer.react",
	"MAWSecureThreadQPContainerLazyLoaded.react",
	"MAWThreadCutover",
	"MWEnsureCutoverOpenThreadExists",
	"MWThreadErrorBoundary.react",
	"MemoryUtils",
	"QPLUserFlow",
	"WARandomHex",
	"logMessengerWebFalcoEvent",
	"qpl",
	"react",
	"react-compiler-runtime",
	"useAsyncReStore",
	"useMAWMaybeInsertDualThreadCutoverAdminMessage",
	"useMAWMaybeResetEphemeralSettings"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c = e || (e = o("react")), d = e, m = d.useCallback, p = d.useEffect, _ = d.useRef, f = d.useState;
	function g(e, t) {
		var n = o("react-compiler-runtime").c(23), a;
		n[0] !== e ? (a = (s || (s = o("I64"))).to_int32(e), n[0] = e, n[1] = a) : a = n[1];
		var i = a, l, u;
		n[2] !== t || n[3] !== i || n[4] !== e ? (l = function() {
			r("QPLUserFlow").start(r("qpl")._(25306607, "1883"), {
				annotations: { string: {
					entryPoint: t,
					thread_id: (s || (s = o("I64"))).to_string(e)
				} },
				instanceKey: i
			});
		}, u = [
			t,
			i,
			e
		], n[2] = t, n[3] = i, n[4] = e, n[5] = l, n[6] = u) : (l = n[5], u = n[6]), o("Int64Hooks").useEffectInt64(l, u);
		var c;
		n[7] !== i ? (c = function(t) {
			r("QPLUserFlow").addPoint(r("qpl")._(25306607, "1883"), t, { instanceKey: i });
		}, n[7] = i, n[8] = c) : c = n[8];
		var d = c, m;
		n[9] !== i ? (m = function(t) {
			r("QPLUserFlow").endSuccess(r("qpl")._(25306607, "1883"), {
				annotations: { string: { is_cutover: String(t) } },
				instanceKey: i
			});
		}, n[9] = i, n[10] = m) : m = n[10];
		var p = m, _;
		n[11] !== i ? (_ = function(t) {
			r("QPLUserFlow").addAnnotations(r("qpl")._(25306607, "1883"), { string: t }, { instanceKey: i });
		}, n[11] = i, n[12] = _) : _ = n[12];
		var f = _, g;
		n[13] !== i ? (g = function(t) {
			r("QPLUserFlow").addAnnotations(r("qpl")._(25306607, "1883"), { int: t }, { instanceKey: i });
		}, n[13] = i, n[14] = g) : g = n[14];
		var h = g, y;
		n[15] !== i ? (y = function(t, n) {
			r("QPLUserFlow").endFailure(r("qpl")._(25306607, "1883"), t, {
				annotations: { string: { is_cutover: String(n) } },
				instanceKey: i
			});
		}, n[15] = i, n[16] = y) : y = n[16];
		var C = y, b;
		return n[17] !== h || n[18] !== f || n[19] !== d || n[20] !== C || n[21] !== p ? (b = {
			addQplAnnotations: f,
			addQPLAnnotationsInt: h,
			addQplPoint: d,
			qplEndFailure: C,
			qplEndSuccess: p
		}, n[17] = h, n[18] = f, n[19] = d, n[20] = C, n[21] = p, n[22] = b) : b = n[22], b;
	}
	function h(e, t, n) {
		return n != null ? "show_od_cutover" : e == null ? "not_cutover_thread" : t != null ? e.showOpenMessageHistory === !1 ? "dual_thread_cutover" : "show" : "loading";
	}
	function y(e) {
		var t = o("react-compiler-runtime").c(65), n = e.entryPoint, a = e.mawSecureThreadQPContainerQueryRef, l = e.messageListRef, d = e.thread, m = g(d.threadKey, n), y = m.addQplAnnotations, C = m.addQPLAnnotationsInt, b = m.addQplPoint, v = m.qplEndFailure, S = m.qplEndSuccess;
		r("useMAWMaybeResetEphemeralSettings")(d.threadKey), r("useMAWMaybeInsertDualThreadCutoverAdminMessage")(d.threadKey, d.threadType);
		var R = _(""), L;
		t[0] !== y || t[1] !== v || t[2] !== S ? (L = function(t) {
			switch (t) {
				case "loading": return;
				case "show":
				case "show_od_cutover": {
					y({ showOpenHistory: "show" }), S(!0);
					return;
				}
				case "not_cutover_thread": {
					S(!1);
					return;
				}
				case "dual_thread_cutover": {
					S(!1);
					return;
				}
				case "error": {
					v(R.current, !0);
					return;
				}
				default: throw r("FBLogger")("messenger_web_entrypoints").mustfixThrow("[MiActMapping] Unreachable showOpenMsgHistoryState: %s", t);
			}
		}, t[0] = y, t[1] = v, t[2] = S, t[3] = L) : L = t[3];
		var E = L, k = r("useAsyncReStore")(), I;
		t[4] !== k ? (I = function(t, n) {
			return k.then(function(e) {
				return e.runInTransaction(function(e) {
					return r("LSInitiateThreadMigrationStoredProcedure")(r("LSFactory")(e), {
						armadilloThreadKey: n,
						openMessageThreadKey: t,
						shouldCopyMessages: !1,
						traceId: o("WARandomHex").randomHex(8)
					});
				}, "readwrite", void 0, void 0, i.id + ":267");
			});
		}, t[4] = k, t[5] = I) : I = t[5];
		var T = I, D = o("MAWThreadCutover").useGetCutoverMapping(d.threadKey), x = o("MAWThreadCutover").useCutoverOpenThread(d.threadKey);
		o("MWEnsureCutoverOpenThreadExists").useMWEnsureCutoverOpenThreadExists(d.threadKey);
		var $ = o("MAWThreadCutover").useODCutoverEligibleOpenOneToOneThread(d.threadKey), P;
		t[6] !== D || t[7] !== x || t[8] !== $ ? (P = h(D, x, $), t[6] = D, t[7] = x, t[8] = $, t[9] = P) : P = t[9];
		var N = f(P), M = N[0], w = N[1], A, F;
		t[10] !== D || t[11] !== x || t[12] !== E || t[13] !== $ || t[14] !== M ? (A = function() {
			if (E(M), !(M === "show" || M === "dual_thread_cutover")) {
				if ($ != null) return w("show_od_cutover");
				if (D != null) return x == null ? w("loading") : D.showOpenMessageHistory !== !1 ? w("show") : w("dual_thread_cutover");
			}
		}, F = [
			D,
			x,
			E,
			$,
			M
		], t[10] = D, t[11] = x, t[12] = E, t[13] = $, t[14] = M, t[15] = A, t[16] = F) : (A = t[15], F = t[16]), o("Int64Hooks").useEffectInt64(A, F);
		var O = _(!1), B;
		t[17] !== d.authorityLevel ? (B = (s || (s = o("I64"))).ge(d.authorityLevel, (u || (u = o("LSIntEnum"))).ofNumber(r("LSAuthorityLevel").AUTHORITATIVE)), t[17] = d.authorityLevel, t[18] = B) : B = t[18];
		var W = B, q;
		t[19] !== W || t[20] !== a ? (q = W ? a != null ? c.jsx(r("MAWSecureThreadQPContainer.react"), { mawSecureThreadQPContainerQueryRef: a }) : c.jsx(r("MAWSecureThreadQPContainerLazyLoaded.react"), {}) : null, t[19] = W, t[20] = a, t[21] = q) : q = t[21];
		var U = q, V;
		t[22] !== C || t[23] !== y || t[24] !== b || t[25] !== D || t[26] !== T || t[27] !== v ? (V = function() {
			if (!((D == null ? void 0 : D.armadilloThreadId) == null || (D == null ? void 0 : D.openThreadId) == null) && O.current !== !0) {
				O.current = !0, b("thread_migration_initiating_start");
				var e = o("MemoryUtils").getCurrentMemory(), t = e.usedJSHeapSize;
				C({ usedJSHeapSizeStart: t }), y(), T(D.openThreadId, D.armadilloThreadId).then(function() {
					O.current = !1, b("thread_migration_initiating_end");
					var e = o("MemoryUtils").getCurrentMemory(), t = e.usedJSHeapSize;
					C({ usedJSHeapSizeEnd: t });
				}).catch(function(e) {
					O.current = !1, R.current = "fail_to_init_thread_migration", w("error"), r("FBLogger")("messenger_web_entrypoints").catching(e).mustfix("fail_to_init_thread_migration"), v(R.current, !0);
				});
			}
		}, t[22] = C, t[23] = y, t[24] = b, t[25] = D, t[26] = T, t[27] = v, t[28] = V) : V = t[28];
		var H = D == null ? void 0 : D.armadilloThreadId, G = D == null ? void 0 : D.openThreadId, z;
		t[29] !== C || t[30] !== y || t[31] !== b || t[32] !== T || t[33] !== v || t[34] !== S || t[35] !== G || t[36] !== H ? (z = [
			C,
			y,
			b,
			H,
			G,
			T,
			v,
			S
		], t[29] = C, t[30] = y, t[31] = b, t[32] = T, t[33] = v, t[34] = S, t[35] = G, t[36] = H, t[37] = z) : z = t[37], p(V, z);
		var j = x != null, K;
		t[38] !== (D == null ? void 0 : D.openThreadId) || t[39] !== n || t[40] !== j || t[41] !== E || t[42] !== M || t[43] !== d.threadKey || t[44] !== d.threadType ? (K = function() {
			var e;
			R.current !== "" && (r("logMessengerWebFalcoEvent")({
				threadKey: d.threadKey,
				threadType: d.threadType
			}, "no_open_messages_in_cutover_thread", n, {
				cutoverThreadKey: (s || (s = o("I64"))).to_string((e = D == null ? void 0 : D.openThreadId) != null ? e : (s || (s = o("I64"))).neg_one),
				hasCutoverOpenThread: j.toString(),
				reason: R.current,
				showOpenMsgHistoryState: M
			}), E(M));
		}, t[38] = D == null ? void 0 : D.openThreadId, t[39] = n, t[40] = j, t[41] = E, t[42] = M, t[43] = d.threadKey, t[44] = d.threadType, t[45] = K) : K = t[45];
		var Q;
		t[46] !== D || t[47] !== n || t[48] !== j || t[49] !== E || t[50] !== M || t[51] !== d.threadKey || t[52] !== d.threadType ? (Q = [
			D,
			n,
			M,
			j,
			d.threadKey,
			d.threadType,
			E
		], t[46] = D, t[47] = n, t[48] = j, t[49] = E, t[50] = M, t[51] = d.threadKey, t[52] = d.threadType, t[53] = Q) : Q = t[53], o("Int64Hooks").useEffectInt64(K, Q);
		var X = M === "show_od_cutover" ? $ : M === "show" ? x : void 0, Y;
		t[54] !== n || t[55] !== l || t[56] !== X || t[57] !== d ? (Y = c.jsx(r("MAWSecureThreadDetail.react"), {
			cutoverOpenThread: X,
			entryPoint: n,
			messageListRef: l,
			thread: d
		}), t[54] = n, t[55] = l, t[56] = X, t[57] = d, t[58] = Y) : Y = t[58];
		var J;
		t[59] !== U || t[60] !== Y ? (J = c.jsxs(c.Fragment, { children: [U, Y] }), t[59] = U, t[60] = Y, t[61] = J) : J = t[61];
		var Z;
		return t[62] !== J || t[63] !== d.threadKey ? (Z = c.jsx(r("MWThreadErrorBoundary.react"), {
			message: "Error while loading secure thread messages",
			threadKey: d.threadKey,
			children: J
		}), t[62] = J, t[63] = d.threadKey, t[64] = Z) : Z = t[64], Z;
	}
	function C(e) {
		var t = o("react-compiler-runtime").c(6), n = e.entryPoint, r = e.mawSecureThreadQPContainerQueryRef, a = e.messageListRef, i = e.thread, l;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (l = "x78zum5 xdt5ytf x1iyjqo2 x5yr21d", t[0] = l) : l = t[0];
		var s;
		return t[1] !== n || t[2] !== r || t[3] !== a || t[4] !== i ? (s = c.jsx(o("CometPageletWithDiv.react").Div, {
			className: l,
			name: "MAWSecureThreadDetailWrapper",
			children: c.jsx(y, {
				entryPoint: n,
				mawSecureThreadQPContainerQueryRef: r,
				messageListRef: a,
				thread: i
			})
		}), t[1] = n, t[2] = r, t[3] = a, t[4] = i, t[5] = s) : s = t[5], s;
	}
	l.default = C;
}), 98);
