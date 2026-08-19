__d("WAWebSendTextFlow.react", [
	"fbt",
	"$InternalEnum",
	"WALogger",
	"WATimeUtils",
	"WAWebBlockContactAction",
	"WAWebChatEntryPoint",
	"WAWebChatGetters",
	"WAWebCmd",
	"WAWebComposeBoxActions",
	"WAWebDrawerManager",
	"WAWebFrontendConstants",
	"WAWebSelectModal.react",
	"WAWebSelectModalFooter.react",
	"WAWebSendTextMsgChatAction",
	"WAWebServerPropConstants",
	"WAWebTextMessageModal.react",
	"WAWebUiIdleEventBus",
	"WAWebUserPrefsMeUser",
	"WAWebWid",
	"asyncToGeneratorRuntime",
	"react",
	"react-compiler-runtime",
	"useWAWebFlow"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useMemo, _ = d.useRef, f = n("$InternalEnum").Mirrored(["Select", "TextMessage"]);
	function g(t) {
		var a = o("react-compiler-runtime").c(45), i = t.alwaysShowComposeModal, l = t.ariaLabel, u = t.excludeMe, d = t.linkPreview, m = t.onSend, p = t.origin, g = t.text, y = t.title, v = o("useWAWebFlow").useFlow(f.Select), S = v[0], R = v[1], L;
		a[0] === Symbol.for("react.memo_cache_sentinel") ? (L = [], a[0] = L) : L = a[0];
		var E = _(L), k;
		a[1] === Symbol.for("react.memo_cache_sentinel") ? (k = [], a[1] = k) : k = a[1];
		var I = _(k), T = b, D = C, x = h, $;
		e: {
			if (p != null && r("WAWebWid").isNewsletter(p)) {
				var P;
				a[2] !== p ? (P = {
					surface: "channel-forward",
					extras: { channelWid: p }
				}, a[2] = p, a[3] = P) : P = a[3], $ = P;
				break e;
			}
			$ = void 0;
		}
		var N = $;
		if (R.step == null) return null;
		var M;
		e: switch (R.step) {
			case f.Select: {
				var w;
				a[4] === Symbol.for("react.memo_cache_sentinel") ? (w = (function() {
					var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
						yield x(e), e.active ? o("WAWebComposeBoxActions").ComposeBoxActions.paste(e, t) : (e.setComposeContents({
							text: t,
							timestamp: o("WATimeUtils").unixTime()
						}), o("WAWebCmd").Cmd.openChatFromUnread({
							chat: e,
							chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.SendMessage
						}).then(function(t) {
							t && o("WAWebComposeBoxActions").ComposeBoxActions.focus(e);
						}));
					});
					return function(n, r) {
						return e.apply(this, arguments);
					};
				})(), a[4] = w) : w = a[4];
				var A = w, F;
				a[5] !== p ? (F = p != null && r("WAWebWid").isNewsletter(p), a[5] = p, a[6] = F) : F = a[6];
				var O = F, B;
				a[7] !== i || a[8] !== R || a[9] !== O || a[10] !== m || a[11] !== g ? (B = (function() {
					var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
						var t = e.selectedItems, n = t;
						if (I.current = n, n.length === 1 && !O && i !== !0) {
							var r = n[0];
							yield A(r, g), R.end(), window.innerWidth <= o("WAWebFrontendConstants").LAYOUT_2COLUMNS_MAX_WIDTH && o("WAWebDrawerManager").DrawerManager.closeDrawerRight();
						} else R.push(f.TextMessage);
						m && m();
					});
					return function(n) {
						return e.apply(this, arguments);
					};
				})(), a[7] = i, a[8] = R, a[9] = O, a[10] = m, a[11] = g, a[12] = B) : B = a[12];
				var W = B, q;
				a[13] === Symbol.for("react.memo_cache_sentinel") ? (q = function() {
					return E.current;
				}, a[13] = q) : q = a[13];
				var U = q, V;
				a[14] === Symbol.for("react.memo_cache_sentinel") ? (V = function(t) {
					var e = t.selectedItems;
					E.current = e;
				}, a[14] = V) : V = a[14];
				var H = V, G;
				a[15] !== y ? (G = y != null ? y : s._(
					/*BTDS*/
					""
				), a[15] = y, a[16] = G) : G = a[16];
				var z;
				a[17] !== R ? (z = function() {
					return R.end();
				}, a[17] = R, a[18] = z) : z = a[18];
				var j = u === !0 ? T : void 0, K = u === !0 ? D : void 0, Q;
				a[19] !== W || a[20] !== z || a[21] !== j || a[22] !== K || a[23] !== G || a[24] !== N ? (Q = c.jsx(o("WAWebSelectModal.react").SelectModal, {
					title: G,
					tsNavigationData: N,
					listType: o("WAWebSelectModal.react").ListType.ChatSelectModal,
					getInitialItems: U,
					maxItems: o("WAWebServerPropConstants").MULTICAST_LIMIT_GLOBAL,
					onConfirm: W,
					onCancel: z,
					onSelectionChanged: H,
					singleSelectionFooterType: o("WAWebSelectModalFooter.react").FooterType.NEXT,
					multipleSelectionFooterType: o("WAWebSelectModalFooter.react").FooterType.NEXT,
					chatFilter: j,
					contactFilter: K
				}), a[19] = W, a[20] = z, a[21] = j, a[22] = K, a[23] = G, a[24] = N, a[25] = Q) : Q = a[25], M = Q;
				break e;
			}
			case f.TextMessage: {
				var X;
				a[26] !== R || a[27] !== d ? (X = function(r) {
					var t = r.chats, a = r.linkPreview, i = r.text;
					t.forEach((function() {
						var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
							yield x(t), o("WAWebUiIdleEventBus").UiIdleEventBus.once("ui_idle", function() {
								o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["handleSend inside WAWebSendTextFlow"]))), o("WAWebSendTextMsgChatAction").sendTextMsgToChat(t, i, { linkPreview: a != null ? a : d });
							});
						});
						return function(e) {
							return t.apply(this, arguments);
						};
					})()), R.end();
				}, a[26] = R, a[27] = d, a[28] = X) : X = a[28];
				var Y = X, J;
				a[29] !== y ? (J = y != null ? y : s._(
					/*BTDS*/
					""
				), a[29] = y, a[30] = J) : J = a[30];
				var Z;
				a[31] !== Y ? (Z = function(t, n) {
					return Y({
						chats: I.current,
						linkPreview: n,
						text: t
					});
				}, a[31] = Y, a[32] = Z) : Z = a[32];
				var ee;
				a[33] !== R ? (ee = function() {
					return R.pop();
				}, a[33] = R, a[34] = ee) : ee = a[34];
				var te;
				a[35] !== l || a[36] !== J || a[37] !== Z || a[38] !== ee || a[39] !== g ? (te = c.jsx(r("WAWebTextMessageModal.react"), {
					ariaLabel: l,
					defaultText: g,
					title: J,
					onSend: Z,
					onBack: ee
				}), a[35] = l, a[36] = J, a[37] = Z, a[38] = ee, a[39] = g, a[40] = te) : te = a[40], M = te;
			}
		}
		var ne;
		return a[41] !== S || a[42] !== M || a[43] !== R ? (ne = c.jsx(S, {
			flow: R,
			children: M
		}), a[41] = S, a[42] = M, a[43] = R, a[44] = ne) : ne = a[44], ne;
	}
	function h(e) {
		return y.apply(this, arguments);
	}
	function y() {
		return y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			o("WAWebChatGetters").getIsUser(e) && e.contact.isContactBlocked && (yield o("WAWebBlockContactAction").unblockContact(e.contact));
		}), y.apply(this, arguments);
	}
	function C(e) {
		return !o("WAWebUserPrefsMeUser").isMeAccount(e.id);
	}
	function b(e) {
		return !o("WAWebUserPrefsMeUser").isMeAccount(e.id);
	}
	l.default = g;
}), 226);
