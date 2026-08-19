__d("WAWebSpacerText.react", [
	"WAWebABPropsSaga",
	"WAWebClassnames",
	"WAWebClock",
	"WAWebFrontendMsgGetters",
	"WAWebLidMigrationUtils",
	"WAWebMessageMeta.react",
	"WAWebMsgGetters",
	"WAWebMsgType",
	"WAWebMsgViewCount",
	"WAWebNewsletterGatingUtils",
	"WAWebQuotedMsgUtils",
	"WAWebTextSizeUtils",
	"WAWebThreadMsgUtils",
	"WAWebThreadsGating",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useWAWebIsPinnedMsg",
	"useWAWebMsgValues"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = {
		spacerContainer: {
			fontSize: "x1ncwhqj",
			display: "x3nfvp2",
			verticalAlign: "xxymvpz",
			visibility: "xlshs6z",
			height: "xqtp20y",
			paddingTop: "xexx8yu",
			paddingInlineEnd: "x1uc92m",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x181vq82",
			$$css: !0
		},
		spacerContainerWithViewIcon: {
			paddingTop: "xexx8yu",
			paddingInlineEnd: "xde1mab",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1iw51ew",
			$$css: !0
		}
	};
	function d(t) {
		var n = o("react-compiler-runtime").c(44), a = t.className, i = t.msg, l = t.xstyle, s;
		if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
			var d;
			s = [
				(d = o("WAWebMsgGetters")).getId,
				d.getBroadcast,
				d.getIsSentByMe,
				d.getStar,
				d.getType,
				d.getIsKept,
				d.getIsEdited,
				d.getIsBizBot1pResponse,
				d.getT,
				d.getIsCAPISupport
			], n[0] = s;
		} else s = n[0];
		var m = o("useWAWebMsgValues").useMsgValues(i.id, s), p = m[0], _ = m[1], f = m[2], g = m[3], h = m[4], y = m[5], C = m[6], b = m[7], v = m[8], S = m[9], R = o("WAWebMsgViewCount").useWAWebLocalizedViewCount(i.id), L = r("useWAWebIsPinnedMsg")(p), E = o("WAWebTextSizeUtils").getWAWebTextSizeStyles().metaTextStyles, k;
		n[1] !== i ? (k = o("WAWebLidMigrationUtils").getShouldShowLidDebugUIForMsg(i), n[1] = i, n[2] = k) : k = n[2];
		var I = k, T = [], D = h === o("WAWebMsgType").MSG_TYPE.REVOKED, x;
		if (n[3] !== i || n[4] !== R) {
			var $, P = o("WAWebFrontendMsgGetters").getChat(i);
			x = R != null && o("WAWebNewsletterGatingUtils").isNewsletterViewCountEnabled(P == null || ($ = P.newsletterMetadata) == null ? void 0 : $.membershipType), n[3] = i, n[4] = R, n[5] = x;
		} else x = n[5];
		var N = x, M;
		n[6] !== N ? (M = N && o("WAWebNewsletterGatingUtils").isNewsletterViewsVPVDefinitionEnabled(), n[6] = N, n[7] = M) : M = n[7];
		var w = M;
		if (N) {
			var A;
			n[8] === Symbol.for("react.memo_cache_sentinel") ? (A = { className: "x1c4vz4f x2lah0s x14mko6t" }, n[8] = A) : A = n[8];
			var F;
			n[9] === Symbol.for("react.memo_cache_sentinel") ? (F = u.jsx(o("WAWebMessageMeta.react").MetaBullet, {}), n[9] = F) : F = n[9];
			var O;
			n[10] !== A || n[11] !== R ? (O = u.jsxs("span", babelHelpers.extends({}, A, { children: [R, F] }), "viewCount"), n[10] = A, n[11] = R, n[12] = O) : O = n[12], T.push(O);
		}
		if (g && !D) {
			var B;
			n[13] === Symbol.for("react.memo_cache_sentinel") ? (B = u.jsx("span", { className: "x1c4vz4f x2lah0s x1xp8n7a" }, "star"), n[13] = B) : B = n[13], T.push(B);
		}
		if (y && !D) {
			var W;
			n[14] === Symbol.for("react.memo_cache_sentinel") ? (W = u.jsx("span", { className: "x1c4vz4f x2lah0s x1xp8n7a" }, "kic"), n[14] = W) : W = n[14], T.push(W);
		}
		if (L && !D) {
			var q;
			n[15] === Symbol.for("react.memo_cache_sentinel") ? (q = u.jsx("span", { className: "x1c4vz4f x2lah0s x1xp8n7a" }, "pin"), n[15] = q) : q = n[15], T.push(q);
		}
		var U = o("WAWebThreadMsgUtils").getMsgViewAllRepliesThread(i);
		if (U != null && o("WAWebQuotedMsgUtils").getMessagesCountByThreadId(U) >= 2 && o("WAWebThreadsGating").isFollowUpReplyEnabled()) {
			var V;
			n[16] === Symbol.for("react.memo_cache_sentinel") ? (V = u.jsx("span", { className: "x1c4vz4f x2lah0s x1xp8n7a" }, "followUpReply"), n[16] = V) : V = n[16], T.push(V);
		}
		if (_) {
			var H;
			n[17] === Symbol.for("react.memo_cache_sentinel") ? (H = u.jsx("span", { className: "x1c4vz4f x2lah0s x1xp8n7a" }, "broadcast"), n[17] = H) : H = n[17], T.push(H);
		}
		if (C && !D) {
			var G;
			n[18] === Symbol.for("react.memo_cache_sentinel") ? (G = u.jsx("span", {
				className: "x1c4vz4f x2lah0s xk50ysn x2fvf9 xwklpps",
				children: o("WAWebMessageMeta.react").getEditedLabel()
			}, "edited"), n[18] = G) : G = n[18], T.push(G);
		}
		var z;
		n[19] !== i ? (z = i.safe(), n[19] = i, n[20] = z) : z = n[20];
		var j = o("WAWebMessageMeta.react").useBizBot1pLabel(z);
		if (j != null) {
			var K;
			n[21] === Symbol.for("react.memo_cache_sentinel") ? (K = { className: "x1c4vz4f x2lah0s xk50ysn x2fvf9 xwklpps" }, n[21] = K) : K = n[21];
			var Q;
			n[22] !== j ? (Q = u.jsx("span", babelHelpers.extends({}, K, { children: j }), "bit-bot-label"), n[22] = j, n[23] = Q) : Q = n[23], T.push(Q);
			var X;
			n[24] === Symbol.for("react.memo_cache_sentinel") ? (X = u.jsx("span", { className: "x1c4vz4f x2lah0s x6jxa94" }, "biz-bot-icon"), n[24] = X) : X = n[24], T.push(X);
		}
		if (j == null && S && (b || o("WAWebMsgGetters").getIsSupportAIMessage(i)) && o("WAWebABPropsSaga").getIsSagaV1Enabled()) {
			var Y;
			n[25] === Symbol.for("react.memo_cache_sentinel") ? (Y = u.jsx("span", { className: "x1c4vz4f x2lah0s x1849jeq" }, "saga-message-marker"), n[25] = Y) : Y = n[25], T.push(Y);
		}
		if ((I || f) && !D) {
			var J = I ? "lid-debug-ui" : "checkmark", Z;
			n[26] !== I ? (Z = {
				0: { className: "x1c4vz4f x2lah0s xn6xy2s" },
				1: { className: "x1c4vz4f x2lah0s xs2mk4o" }
			}[!!I << 0], n[26] = I, n[27] = Z) : Z = n[27];
			var ee;
			n[28] !== J || n[29] !== Z ? (ee = u.jsx("span", babelHelpers.extends({}, Z), J), n[28] = J, n[29] = Z, n[30] = ee) : ee = n[30], T.push(ee);
		}
		if (I && D) {
			var te;
			n[31] === Symbol.for("react.memo_cache_sentinel") ? (te = u.jsx("span", { className: "x1c4vz4f x2lah0s xs2mk4o" }, "lid-debug-ui"), n[31] = te) : te = n[31], T.push(te);
		}
		var ne;
		n[32] === Symbol.for("react.memo_cache_sentinel") ? (ne = { className: "x1c4vz4f x2lah0s" }, n[32] = ne) : ne = n[32];
		var re;
		n[33] !== v ? (re = v != null ? o("WAWebClock").Clock.timestampStr(v) : null, n[33] = v, n[34] = re) : re = n[34];
		var oe;
		n[35] !== re ? (oe = u.jsx("span", babelHelpers.extends({}, ne, { children: re }), "timestamp"), n[35] = re, n[36] = oe) : oe = n[36], T.push(oe);
		var ae;
		n[37] !== a || n[38] !== l ? (ae = o("WAWebClassnames").classnamesConvertMeToStylexPlease(a, (e || (e = r("stylex")))(l)), n[37] = a, n[38] = l, n[39] = ae) : ae = n[39];
		var ie = T.length > 0 && u.jsx("span", babelHelpers.extends({}, (e || (e = r("stylex"))).props(c.spacerContainer, w === !0 && c.spacerContainerWithViewIcon, E), {
			"aria-hidden": !0,
			children: T
		})), le;
		return n[40] !== t.children || n[41] !== ae || n[42] !== ie ? (le = u.jsxs("span", {
			className: ae,
			children: [t.children, ie]
		}), n[40] = t.children, n[41] = ae, n[42] = ie, n[43] = le) : le = n[43], le;
	}
	l.default = d;
}), 98);
