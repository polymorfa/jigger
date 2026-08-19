__d("useMAWVisibilityRestoreGapUIController", [
	"FBLogger",
	"MAWEncryptedBackupsRestoreDialog.entrypoint",
	"MAWVisibilityRestoreGapUIEligibility",
	"MWChatEncryptedBackupsQPLEvents",
	"MWChatEncryptedBackupsQPLSource.enum",
	"MWEBEntrypointsKillswitch.enum",
	"MWEBODSCategory",
	"MWEncryptedBackupsRetrieveQplLoggingAnnotations",
	"ODS",
	"QPLUserFlow",
	"getErrorSafe",
	"react",
	"react-compiler-runtime",
	"requireDeferred",
	"useAsyncReStore",
	"useLabyrinthLogging",
	"useMWEBBackupState",
	"useMWEBGetUpsellState",
	"useMWXEntryPointDialog",
	"useVisibilityObserver"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useEffect, p = c.useRef, _ = r("requireDeferred")("mwEBCheckIfEBKeysExistInDisk").__setRef("useMAWVisibilityRestoreGapUIController");
	function f() {
		var e = o("react-compiler-runtime").c(23), t = r("useAsyncReStore")(), n;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (n = { entrypoint: r("MWEBEntrypointsKillswitch.enum").IN_THREAD_GAP_UI }, e[0] = n) : n = e[0];
		var a = r("useMWEBBackupState")(n), i;
		e[1] === Symbol.for("react.memo_cache_sentinel") ? (i = {}, e[1] = i) : i = e[1];
		var l = r("useMWXEntryPointDialog")(r("MAWEncryptedBackupsRestoreDialog.entrypoint"), i), u = l[0], c = o("useLabyrinthLogging").useLabyrinthLoggingFlow(), d = c.startFlow, f = r("useMWEBGetUpsellState")(), y = f.isRestoreUpsellsDismissed, C = r("MWChatEncryptedBackupsQPLSource.enum").IN_THREAD_VISIBILITY_RESTORE_CARD, b = p(!1), v = p(!1), S = p(!1), R = p(!1), L = p(!1), E;
		e[2] !== t || e[3] !== d ? (E = function(n) {
			t.then(function(e) {
				o("MWEncryptedBackupsRetrieveQplLoggingAnnotations").encryptedBackupsRetrieveQplLoggingAnnotations({
					db: e,
					onFetch: function(t) {
						var e = t.ebsmWiped, a = t.firstUpsellTime, i = t.hasEbKeysLocally, l = t.hasEBSM, s = t.hasPDB, u = t.hasUserRestoredBefore, c = t.hasUserRestoredBeforeTemp;
						d({
							additionalAnnotations: {
								eb_session_identifier: a,
								ebsm_wiped: e,
								has_eb_keys_locally: i,
								has_ebsm: l,
								has_pdb: s,
								has_user_restored_before: u,
								has_user_restored_before_temp: c,
								restore_upsell_first_impression_time: a
							},
							event: o("MWChatEncryptedBackupsQPLEvents").restoreQplEvent,
							source: C
						}), r("QPLUserFlow").addPoint(o("MWChatEncryptedBackupsQPLEvents").restoreQplEvent, n), r("QPLUserFlow").addAnnotations(o("MWChatEncryptedBackupsQPLEvents").restoreQplEvent, { string: { attempted_restore_type: "not_yet_selected" } }), L.current === !1 && (L.current = !0, _.load().then(function(e) {
							return e(i);
						}).catch(h));
					}
				});
			}).catch(g);
		}, e[2] = t, e[3] = d, e[4] = E) : E = e[4];
		var k = E, I;
		e[5] !== k ? (I = { onVisible: function() {
			v.current = !0, R.current === !1 && (R.current = !0, (s || (s = o("ODS"))).bumpEntityKey(r("MWEBODSCategory"), "maw_eb_tmv_visibility_placeholder", "restore_card.visible_impression.total")), k("RESTORE_IN_THREAD_MISSING_MESSAGE_GAP_UI_IMPRESSION");
		} }, e[5] = k, e[6] = I) : I = e[6];
		var T = r("useVisibilityObserver")(I), D;
		e[7] !== a || e[8] !== y ? (D = o("MAWVisibilityRestoreGapUIEligibility").shouldShowRestoreGapUIForBackupState(a) && !y, e[7] = a, e[8] = y, e[9] = D) : D = e[9];
		var x = D, $, P;
		e[10] !== x || e[11] !== k ? ($ = function() {
			b.current === !1 && x && (b.current = !0, (s || (s = o("ODS"))).bumpEntityKey(r("MWEBODSCategory"), "maw_eb_tmv_visibility_placeholder", "restore_card.mount.total"), k("RESTORE_IN_THREAD_MISSING_MESSAGE_GAP_UI_MOUNT"));
		}, P = [x, k], e[10] = x, e[11] = k, e[12] = $, e[13] = P) : ($ = e[12], P = e[13]), m($, P);
		var N, M;
		e[14] === Symbol.for("react.memo_cache_sentinel") ? (N = function() {
			return (function() {
				v.current && !S.current && (s || (s = o("ODS"))).bumpEntityKey(r("MWEBODSCategory"), "maw_eb_tmv_visibility_placeholder", "restore_card.visible_unmount_no_click.total");
			});
		}, M = [], e[14] = N, e[15] = M) : (N = e[14], M = e[15]), m(N, M);
		var w;
		e[16] !== u || e[17] !== k ? (w = function() {
			S.current = !0, (s || (s = o("ODS"))).bumpEntityKey(r("MWEBODSCategory"), "maw_eb_tmv_visibility_placeholder", "restore_card.cta_click.total"), k("RESTORE_IN_THREAD_GAP_UI_CTA_CLICK"), u({ source: C });
		}, e[16] = u, e[17] = k, e[18] = w) : w = e[18];
		var A = w, F;
		return e[19] !== A || e[20] !== T || e[21] !== x ? (F = {
			onOpenRestoreDialog: A,
			ref: T,
			shouldShowGapUI: x
		}, e[19] = A, e[20] = T, e[21] = x, e[22] = F) : F = e[22], F;
	}
	function g(e) {
		r("FBLogger")("messenger_web").catching(r("getErrorSafe")(e)).warn("Unable to prepare visibility restore gap UI logging");
	}
	function h(e) {
		r("FBLogger")("messenger_web").catching(r("getErrorSafe")(e)).warn("Unable to check EB keys for visibility restore gap UI");
	}
	l.default = f;
}), 98);
