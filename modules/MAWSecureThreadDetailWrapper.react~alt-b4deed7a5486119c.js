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
	"useAsyncReStore",
	"useMAWMaybeInsertDualThreadCutoverAdminMessage",
	"useMAWMaybeResetEphemeralSettings"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c = e || (e = o("react")), d = e, m = d.useCallback, p = d.useEffect, _ = d.useRef, f = d.useState;
	function g(e, t) {
		var n = (s || (s = o("I64"))).to_int32(e);
		o("Int64Hooks").useEffectInt64(function() {
			r("QPLUserFlow").start(r("qpl")._(25306607, "1883"), {
				annotations: { string: {
					entryPoint: t,
					thread_id: (s || (s = o("I64"))).to_string(e)
				} },
				instanceKey: n
			});
		}, [
			t,
			n,
			e
		]);
		var a = m(function(e) {
			r("QPLUserFlow").addPoint(r("qpl")._(25306607, "1883"), e, { instanceKey: n });
		}, [n]), i = m(function(e) {
			r("QPLUserFlow").endSuccess(r("qpl")._(25306607, "1883"), {
				annotations: { string: { is_cutover: String(e) } },
				instanceKey: n
			});
		}, [n]), l = m(function(e) {
			r("QPLUserFlow").addAnnotations(r("qpl")._(25306607, "1883"), { string: e }, { instanceKey: n });
		}, [n]), u = m(function(e) {
			r("QPLUserFlow").addAnnotations(r("qpl")._(25306607, "1883"), { int: e }, { instanceKey: n });
		}, [n]), c = m(function(e, t) {
			r("QPLUserFlow").endFailure(r("qpl")._(25306607, "1883"), e, {
				annotations: { string: { is_cutover: String(t) } },
				instanceKey: n
			});
		}, [n]);
		return {
			addQplAnnotations: l,
			addQPLAnnotationsInt: u,
			addQplPoint: a,
			qplEndFailure: c,
			qplEndSuccess: i
		};
	}
	function h(e, t, n) {
		return n != null ? "show_od_cutover" : e == null ? "not_cutover_thread" : t != null ? e.showOpenMessageHistory === !1 ? "dual_thread_cutover" : "show" : "loading";
	}
	function y(e) {
		var t = e.entryPoint, n = e.mawSecureThreadQPContainerQueryRef, a = e.messageListRef, l = e.thread, d = g(l.threadKey, t), y = d.addQplAnnotations, C = d.addQPLAnnotationsInt, b = d.addQplPoint, v = d.qplEndFailure, S = d.qplEndSuccess;
		r("useMAWMaybeResetEphemeralSettings")(l.threadKey), r("useMAWMaybeInsertDualThreadCutoverAdminMessage")(l.threadKey, l.threadType);
		var R = _(""), L = m(function(t) {
			switch (t) {
				case "loading": return;
				case "show":
				case "show_od_cutover":
					y({ showOpenHistory: "show" }), S(!0);
					return;
				case "not_cutover_thread":
					S(!1);
					return;
				case "dual_thread_cutover":
					S(!1);
					return;
				case "error":
					v(R.current, !0);
					return;
				default: throw r("FBLogger")("messenger_web_entrypoints").mustfixThrow("[MiActMapping] Unreachable showOpenMsgHistoryState: %s", t);
			}
		}, [
			y,
			v,
			S
		]), E = r("useAsyncReStore")(), k = m(function(e, t) {
			return E.then(function(n) {
				return n.runInTransaction(function(n) {
					return r("LSInitiateThreadMigrationStoredProcedure")(r("LSFactory")(n), {
						armadilloThreadKey: t,
						openMessageThreadKey: e,
						shouldCopyMessages: !1,
						traceId: o("WARandomHex").randomHex(8)
					});
				}, "readwrite", void 0, void 0, i.id + ":267");
			});
		}, [E]), I = o("MAWThreadCutover").useGetCutoverMapping(l.threadKey), T = o("MAWThreadCutover").useCutoverOpenThread(l.threadKey);
		o("MWEnsureCutoverOpenThreadExists").useMWEnsureCutoverOpenThreadExists(l.threadKey);
		var D = o("MAWThreadCutover").useODCutoverEligibleOpenOneToOneThread(l.threadKey), x = f(h(I, T, D)), $ = x[0], P = x[1];
		o("Int64Hooks").useEffectInt64(function() {
			if (L($), !($ === "show" || $ === "dual_thread_cutover")) {
				if (D != null) return P("show_od_cutover");
				if (I != null) return T == null ? P("loading") : I.showOpenMessageHistory !== !1 ? P("show") : P("dual_thread_cutover");
			}
		}, [
			I,
			T,
			L,
			D,
			$
		]);
		var N = _(!1), M = (s || (s = o("I64"))).ge(l.authorityLevel, (u || (u = o("LSIntEnum"))).ofNumber(r("LSAuthorityLevel").AUTHORITATIVE)), w = M ? n != null ? c.jsx(r("MAWSecureThreadQPContainer.react"), { mawSecureThreadQPContainerQueryRef: n }) : c.jsx(r("MAWSecureThreadQPContainerLazyLoaded.react"), {}) : null;
		p(function() {
			if (!((I == null ? void 0 : I.armadilloThreadId) == null || (I == null ? void 0 : I.openThreadId) == null) && N.current !== !0) {
				N.current = !0, b("thread_migration_initiating_start");
				var e = o("MemoryUtils").getCurrentMemory(), t = e.usedJSHeapSize;
				C({ usedJSHeapSizeStart: t }), y(), k(I.openThreadId, I.armadilloThreadId).then(function() {
					N.current = !1, b("thread_migration_initiating_end");
					var e = o("MemoryUtils").getCurrentMemory(), t = e.usedJSHeapSize;
					C({ usedJSHeapSizeEnd: t });
				}).catch(function(e) {
					N.current = !1, R.current = "fail_to_init_thread_migration", P("error"), r("FBLogger")("messenger_web_entrypoints").catching(e).mustfix("fail_to_init_thread_migration"), v(R.current, !0);
				});
			}
		}, [
			C,
			y,
			b,
			I == null ? void 0 : I.armadilloThreadId,
			I == null ? void 0 : I.openThreadId,
			k,
			v,
			S
		]);
		var A = T != null;
		return o("Int64Hooks").useEffectInt64(function() {
			var e;
			R.current !== "" && (r("logMessengerWebFalcoEvent")({
				threadKey: l.threadKey,
				threadType: l.threadType
			}, "no_open_messages_in_cutover_thread", t, {
				cutoverThreadKey: (s || (s = o("I64"))).to_string((e = I == null ? void 0 : I.openThreadId) != null ? e : (s || (s = o("I64"))).neg_one),
				hasCutoverOpenThread: A.toString(),
				reason: R.current,
				showOpenMsgHistoryState: $
			}), L($));
		}, [
			I,
			t,
			$,
			A,
			l.threadKey,
			l.threadType,
			L
		]), c.jsx(r("MWThreadErrorBoundary.react"), {
			message: "Error while loading secure thread messages",
			threadKey: l.threadKey,
			children: c.jsxs(c.Fragment, { children: [w, c.jsx(r("MAWSecureThreadDetail.react"), {
				cutoverOpenThread: $ === "show_od_cutover" ? D : $ === "show" ? T : void 0,
				entryPoint: t,
				messageListRef: a,
				thread: l
			})] })
		});
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C(e) {
		var t = e.entryPoint, n = e.mawSecureThreadQPContainerQueryRef, r = e.messageListRef, a = e.thread;
		return c.jsx(o("CometPageletWithDiv.react").Div, {
			className: "x78zum5 xdt5ytf x1iyjqo2 x5yr21d",
			name: "MAWSecureThreadDetailWrapper",
			children: c.jsx(y, {
				entryPoint: t,
				mawSecureThreadQPContainerQueryRef: n,
				messageListRef: r,
				thread: a
			})
		});
	}
	C.displayName = C.name + " [from " + i.id + "]", l.default = C;
}), 98);
