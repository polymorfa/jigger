__d("MAWVisibilityRestoreChatTabBanner.react", [
	"fbt",
	"BaseTextContext",
	"FBLogger",
	"MAWEncryptedBackupsRestoreDialog.entrypoint",
	"MWChatEncryptedBackupsQPLEvents",
	"MWChatEncryptedBackupsQPLSource.enum",
	"MWEBEntrypointsKillswitch.enum",
	"MWEBODSCategory",
	"MWEncryptedBackupsRetrieveQplLoggingAnnotations",
	"MWLSThreadDisplayContext",
	"MWXLink.react",
	"MWXText.react",
	"ODS",
	"QPLUserFlow",
	"getErrorSafe",
	"react",
	"requireDeferred",
	"useAsyncReStore",
	"useLabyrinthLogging",
	"useMWEBBackupState",
	"useMWEBGetUpsellState",
	"useMWXEntryPointDialog",
	"useVisibilityObserver"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = e || (e = o("react")), d = e, m = d.useCallback, p = d.useRef, _ = r("requireDeferred")("mwEBCheckIfEBKeysExistInDisk").__setRef("MAWVisibilityRestoreChatTabBanner.react");
	function f() {
		return c.jsxs("svg", {
			"aria-hidden": "true",
			className: "xi81zsa x1lliihq x2lah0s",
			fill: "none",
			focusable: "false",
			height: "16",
			viewBox: "0 0 40 40",
			width: "16",
			xmlns: "http://www.w3.org/2000/svg",
			children: [c.jsx("path", {
				d: "M10.483 9.52989C11.0041 10.3487 12.1434 10.4802 12.9378 9.92265C14.9369 8.51965 17.3723 7.69615 20 7.69615C26.6684 7.69615 32.0982 12.9994 32.3018 19.6184C32.3083 19.8307 32.1355 20.0038 31.9231 20.0038H29.7457C28.734 20.0038 28.1209 21.1207 28.6641 21.9742L33.1491 29.0222C33.6529 29.8139 34.8086 29.8139 35.3124 29.0222L39.7975 21.9742C40.3406 21.1207 39.7275 20.0038 38.7159 20.0038H36.5385C36.326 20.0038 36.1543 19.8304 36.1493 19.6181C35.9444 10.8748 28.7926 3.85 20 3.85C16.4166 3.85 13.1057 5.01679 10.4265 6.99118C9.81395 7.4426 9.69628 8.29358 10.1048 8.93555L10.483 9.52989Z",
				fill: "currentColor"
			}), c.jsx("path", {
				d: "M29.517 30.4778C28.9959 29.659 27.8566 29.5275 27.0622 30.085C25.0631 31.488 22.6277 32.3115 20 32.3115C13.3316 32.3115 7.90184 27.0083 7.69823 20.3893C7.69169 20.177 7.8645 20.0038 8.07692 20.0038H10.2543C11.266 20.0038 11.8791 18.887 11.3359 18.0335L6.85086 10.9855C6.34707 10.1938 5.1914 10.1938 4.6876 10.9855L0.202517 18.0335C-0.340622 18.887 0.272479 20.0038 1.28414 20.0038H3.46154C3.67395 20.0038 3.84569 20.1773 3.85067 20.3896C4.05558 29.1329 11.2074 36.1577 20 36.1577C23.5834 36.1577 26.8943 34.9909 29.5735 33.0165C30.1861 32.5651 30.3037 31.7141 29.8952 31.0721L29.517 30.4778Z",
				fill: "currentColor"
			})]
		});
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(e) {
		var t = e.isShown, n = r("useMWEBGetUpsellState")(), a = n.isRestoreUpsellsDismissed, i = r("useMWEBBackupState")({ entrypoint: r("MWEBEntrypointsKillswitch.enum").IN_THREAD_SCROLL_BANNER }), l = o("MWLSThreadDisplayContext").useMWLSThreadDisplayContext(), d = r("useAsyncReStore")(), g = r("useMWXEntryPointDialog")(r("MAWEncryptedBackupsRestoreDialog.entrypoint"), {}), h = g[0], y = o("useLabyrinthLogging").useLabyrinthLoggingFlow(), C = y.startFlow, b = p(!1), v = p(!1), S = r("MWChatEncryptedBackupsQPLSource.enum").CHAT_TAB_SCROLL_BANNER, R = m(function(e) {
			d.then(function(t) {
				o("MWEncryptedBackupsRetrieveQplLoggingAnnotations").encryptedBackupsRetrieveQplLoggingAnnotations({
					db: t,
					onFetch: function(n) {
						var t = n.ebsmWiped, a = n.firstUpsellTime, i = n.hasEbKeysLocally, l = n.hasEBSM, s = n.hasPDB, u = n.hasUserRestoredBefore, c = n.hasUserRestoredBeforeTemp;
						C({
							additionalAnnotations: {
								eb_session_identifier: a,
								ebsm_wiped: t,
								has_eb_keys_locally: i,
								has_ebsm: l,
								has_pdb: s,
								has_user_restored_before: u,
								has_user_restored_before_temp: c,
								restore_upsell_first_impression_time: a
							},
							event: o("MWChatEncryptedBackupsQPLEvents").restoreQplEvent,
							source: S
						}), r("QPLUserFlow").addPoint(o("MWChatEncryptedBackupsQPLEvents").restoreQplEvent, e), r("QPLUserFlow").addAnnotations(o("MWChatEncryptedBackupsQPLEvents").restoreQplEvent, { string: { attempted_restore_type: "not_yet_selected" } }), b.current === !1 && (b.current = !0, _.load().then(function(e) {
							return e(i);
						}));
					}
				});
			}).catch(function(e) {
				r("FBLogger")("messenger_web").catching(r("getErrorSafe")(e)).warn("Unable to prepare visibility restore chat tab banner logging");
			});
		}, [
			d,
			S,
			C
		]), L = r("useVisibilityObserver")({ onVisible: function() {
			v.current === !1 && (v.current = !0, (u || (u = o("ODS"))).bumpEntityKey(r("MWEBODSCategory"), "maw_eb_tmv_visibility_placeholder", "scroll_banner.visible_impression.chat_tab")), R("RESTORE_CHAT_TAB_SCROLL_BANNER_IMPRESSION");
		} });
		return !t || l !== "ChatTab" || i !== 4 || a ? null : c.jsxs(c.Fragment, { children: [c.jsxs("div", {
			className: "x6s0dn4 xkh2ocl xfpmyvw x9f619 x17zd0t2 x78zum5 x1q0g3np x2lah0s x10w6t97 xl56j7k x1g0dm76 xpdmqnj xh8yej3",
			ref: L,
			children: [c.jsx(f, {}), c.jsx(o("BaseTextContext").BaseTextContextProvider, {
				nested: !0,
				children: c.jsxs(r("MWXText.react"), {
					color: "secondary",
					type: "meta4",
					children: [
						s._(
							/*BTDS*/
							""
						),
						" ",
						c.jsx("span", {
							className: "xt0psk2",
							children: c.jsx(r("MWXLink.react"), {
								onClick: function() {
									(u || (u = o("ODS"))).bumpEntityKey(r("MWEBODSCategory"), "maw_eb_tmv_visibility_placeholder", "scroll_banner.cta_click.chat_tab"), R("RESTORE_CHAT_TAB_SCROLL_BANNER_CTA_CLICKED"), h({ source: S });
								},
								target: "_blank",
								testid: void 0,
								children: c.jsx(r("MWXText.react"), {
									color: "blueLink",
									type: "bodyLink4",
									children: s._(
										/*BTDS*/
										""
									)
								})
							})
						})
					]
				})
			})]
		}), c.jsx("div", { className: "xkh2ocl x14nfmen x2lah0s xjm9jq1 xh8yej3" })] });
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = g;
}), 226);
