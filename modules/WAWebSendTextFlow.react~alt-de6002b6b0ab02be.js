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
	"react",
	"react-compiler-runtime",
	"useWAWebFlow"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useMemo, _ = d.useRef, f = n("$InternalEnum").Mirrored(["Select", "TextMessage"]);
	function g(t) {
		var n = o("react-compiler-runtime").c(45), a = t.alwaysShowComposeModal, i = t.ariaLabel, l = t.excludeMe, u = t.linkPreview, d = t.onSend, m = t.origin, p = t.text, g = t.title, b = o("useWAWebFlow").useFlow(f.Select), v = b[0], S = b[1], R;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (R = [], n[0] = R) : R = n[0];
		var L = _(R), E;
		n[1] === Symbol.for("react.memo_cache_sentinel") ? (E = [], n[1] = E) : E = n[1];
		var k = _(E), I = C, T = y, D = h, x;
		e: {
			if (m != null && r("WAWebWid").isNewsletter(m)) {
				var $;
				n[2] !== m ? ($ = {
					surface: "channel-forward",
					extras: { channelWid: m }
				}, n[2] = m, n[3] = $) : $ = n[3], x = $;
				break e;
			}
			x = void 0;
		}
		var P = x;
		if (S.step == null) return null;
		var N;
		e: switch (S.step) {
			case f.Select: {
				var M;
				n[4] === Symbol.for("react.memo_cache_sentinel") ? (M = async function(t, n) {
					await D(t), t.active ? o("WAWebComposeBoxActions").ComposeBoxActions.paste(t, n) : (t.setComposeContents({
						text: n,
						timestamp: o("WATimeUtils").unixTime()
					}), o("WAWebCmd").Cmd.openChatFromUnread({
						chat: t,
						chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.SendMessage
					}).then(function(e) {
						e && o("WAWebComposeBoxActions").ComposeBoxActions.focus(t);
					}));
				}, n[4] = M) : M = n[4];
				var w = M, A;
				n[5] !== m ? (A = m != null && r("WAWebWid").isNewsletter(m), n[5] = m, n[6] = A) : A = n[6];
				var F = A, O;
				n[7] !== a || n[8] !== S || n[9] !== F || n[10] !== d || n[11] !== p ? (O = async function(t) {
					var e = t.selectedItems, n = e;
					if (k.current = n, n.length === 1 && !F && a !== !0) {
						var r = n[0];
						await w(r, p), S.end(), window.innerWidth <= o("WAWebFrontendConstants").LAYOUT_2COLUMNS_MAX_WIDTH && o("WAWebDrawerManager").DrawerManager.closeDrawerRight();
					} else S.push(f.TextMessage);
					d && d();
				}, n[7] = a, n[8] = S, n[9] = F, n[10] = d, n[11] = p, n[12] = O) : O = n[12];
				var B = O, W;
				n[13] === Symbol.for("react.memo_cache_sentinel") ? (W = function() {
					return L.current;
				}, n[13] = W) : W = n[13];
				var q = W, U;
				n[14] === Symbol.for("react.memo_cache_sentinel") ? (U = function(t) {
					var e = t.selectedItems;
					L.current = e;
				}, n[14] = U) : U = n[14];
				var V = U, H;
				n[15] !== g ? (H = g != null ? g : s._(
					/*BTDS*/
					""
				), n[15] = g, n[16] = H) : H = n[16];
				var G;
				n[17] !== S ? (G = function() {
					return S.end();
				}, n[17] = S, n[18] = G) : G = n[18];
				var z = l === !0 ? I : void 0, j = l === !0 ? T : void 0, K;
				n[19] !== B || n[20] !== G || n[21] !== z || n[22] !== j || n[23] !== H || n[24] !== P ? (K = c.jsx(o("WAWebSelectModal.react").SelectModal, {
					title: H,
					tsNavigationData: P,
					listType: o("WAWebSelectModal.react").ListType.ChatSelectModal,
					getInitialItems: q,
					maxItems: o("WAWebServerPropConstants").MULTICAST_LIMIT_GLOBAL,
					onConfirm: B,
					onCancel: G,
					onSelectionChanged: V,
					singleSelectionFooterType: o("WAWebSelectModalFooter.react").FooterType.NEXT,
					multipleSelectionFooterType: o("WAWebSelectModalFooter.react").FooterType.NEXT,
					chatFilter: z,
					contactFilter: j
				}), n[19] = B, n[20] = G, n[21] = z, n[22] = j, n[23] = H, n[24] = P, n[25] = K) : K = n[25], N = K;
				break e;
			}
			case f.TextMessage: {
				var Q;
				n[26] !== S || n[27] !== u ? (Q = function(n) {
					var t = n.chats, r = n.linkPreview, a = n.text;
					t.forEach(async function(t) {
						await D(t), o("WAWebUiIdleEventBus").UiIdleEventBus.once("ui_idle", function() {
							o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["handleSend inside WAWebSendTextFlow"]))), o("WAWebSendTextMsgChatAction").sendTextMsgToChat(t, a, { linkPreview: r != null ? r : u });
						});
					}), S.end();
				}, n[26] = S, n[27] = u, n[28] = Q) : Q = n[28];
				var X = Q, Y;
				n[29] !== g ? (Y = g != null ? g : s._(
					/*BTDS*/
					""
				), n[29] = g, n[30] = Y) : Y = n[30];
				var J;
				n[31] !== X ? (J = function(t, n) {
					return X({
						chats: k.current,
						linkPreview: n,
						text: t
					});
				}, n[31] = X, n[32] = J) : J = n[32];
				var Z;
				n[33] !== S ? (Z = function() {
					return S.pop();
				}, n[33] = S, n[34] = Z) : Z = n[34];
				var ee;
				n[35] !== i || n[36] !== Y || n[37] !== J || n[38] !== Z || n[39] !== p ? (ee = c.jsx(r("WAWebTextMessageModal.react"), {
					ariaLabel: i,
					defaultText: p,
					title: Y,
					onSend: J,
					onBack: Z
				}), n[35] = i, n[36] = Y, n[37] = J, n[38] = Z, n[39] = p, n[40] = ee) : ee = n[40], N = ee;
			}
		}
		var te;
		return n[41] !== v || n[42] !== N || n[43] !== S ? (te = c.jsx(v, {
			flow: S,
			children: N
		}), n[41] = v, n[42] = N, n[43] = S, n[44] = te) : te = n[44], te;
	}
	async function h(e) {
		o("WAWebChatGetters").getIsUser(e) && e.contact.isContactBlocked && await o("WAWebBlockContactAction").unblockContact(e.contact);
	}
	function y(e) {
		return !o("WAWebUserPrefsMeUser").isMeAccount(e.id);
	}
	function C(e) {
		return !o("WAWebUserPrefsMeUser").isMeAccount(e.id);
	}
	l.default = g;
}), 226);
