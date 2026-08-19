__d("WAWebMessageMultiVcard.react", [
	"fbt",
	"Promise",
	"WADeepEquals",
	"WALogger",
	"WAMemoizeOne",
	"WAWebConfirmPopup.react",
	"WAWebContactEditUtils",
	"WAWebContactLogging",
	"WAWebDisplayType",
	"WAWebEmojiText.react",
	"WAWebFrontendMsgGetters",
	"WAWebL10N",
	"WAWebMessageAuthor.react",
	"WAWebMessageBubbleActions.react",
	"WAWebMessageComponentContext.react",
	"WAWebMessageMeta.react",
	"WAWebModalManager",
	"WAWebMsgGetters",
	"WAWebMultiVcardModalLoadable.react",
	"WAWebProfileImage.react",
	"WAWebProfilePicThumbCollection",
	"WAWebQueryExistsJob",
	"WAWebReleaseToEventLoop",
	"WAWebUsernameGatingUtils",
	"WAWebVcardParsingUtils",
	"WAWebVcardUtils",
	"compactMap",
	"err",
	"react",
	"useLazyRef",
	"useWAWebMsgValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d = c || (c = o("react")), m = c, p = m.useCallback, _ = m.useContext, f = m.useEffect, g = m.useRef, h = m.useState, y = {
		name: {
			color: "x14ug900",
			fontSize: "x1f6kntn",
			fontWeight: "x1s688f",
			lineHeight: "x16h55sf",
			textAlign: "x1yc453h",
			$$css: !0
		},
		emoji: {
			verticalAlign: "xg49k01",
			$$css: !0
		}
	}, C = 3;
	function b(t) {
		var a, i = t.msg, l = o("useWAWebMsgValues").useMsgValues(t.msg.id, [
			(a = o("WAWebFrontendMsgGetters")).getRtl,
			a.getDir,
			a.getSenderObj,
			o("WAWebMsgGetters").getIsSentByMe,
			o("WAWebMsgGetters").getIsGroupMsg
		]), c = l[0], m = l[1], b = l[2], v = l[3], L = l[4], E = a.getChat(i.unsafe()), k = h(!0), I = k[0], T = k[1], D = h(null), x = D[0], $ = D[1], P = h(t.vcardList), N = P[0], M = P[1], w = _(o("WAWebMessageComponentContext.react").MessageComponentContext), A = w.onSaveContact;
		o("WADeepEquals").deepEqual(N, t.vcardList) || (M(t.vcardList), T(!0), $(null));
		var F = function(t) {
			A ? A(t) : o("WAWebContactEditUtils").openContactEditDrawer(t, o("WAWebContactLogging").ContactSourceType.VCard);
		}, O = function() {
			if (N) {
				var t = N.map(function(e) {
					return e.parsedVcard;
				});
				if (o("WAWebUsernameGatingUtils").usernameContactUiVcardEnabled()) {
					var a = r("compactMap")(t, function(e) {
						var t;
						return (t = o("WAWebVcardParsingUtils").vcardLidWid(e)) != null ? t : o("WAWebVcardParsingUtils").vcardPhoneNumberWids(e)[0];
					});
					(u || (u = n("Promise"))).all(a.map(function(e) {
						var t = e.isLid() ? o("WAWebQueryExistsJob").queryWidUsernameExists(e) : o("WAWebQueryExistsJob").queryWidExists(e);
						return t.then(function(t) {
							return {
								wid: e,
								result: t
							};
						});
					})).then(function(e) {
						var n = new Map(), r = !1;
						e.forEach(function(e) {
							var t = e.result, o = e.wid, a = t == null ? void 0 : t.username;
							a != null ? n.set(o.toString(), a) : o.isLid() && (r = !0);
						}), r ? R() : o("WAWebModalManager").ModalManager.open(d.jsx(o("WAWebMultiVcardModalLoadable.react").WAWebMultiVcardModalLoadable, {
							vcards: t,
							onSaveContact: F,
							usernames: n
						}));
					}).catch(function(t) {
						o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[WAWebMessageMultiVcard] usync query failed"]))).catching(t instanceof Error ? t : r("err")(String(t))).sendLogs("multi-vcard-username-query-failed", { sampling: .01 }), R();
					});
				} else o("WAWebModalManager").ModalManager.open(d.jsx(o("WAWebMultiVcardModalLoadable.react").WAWebMultiVcardModalLoadable, {
					vcards: t,
					onSaveContact: F
				}));
			}
		}, B = r("useLazyRef")(function() {
			return r("WAMemoizeOne")(function(e) {
				return e.vcardList.map(function(e) {
					var t = e.displayName, n = e.parsedVcard, r = o("WAWebVcardParsingUtils").vcardAllWids(n), a = o("WAWebVcardParsingUtils").vcardThumbnail(n);
					return {
						displayName: t,
						wids: r,
						thumbnail: a
					};
				});
			});
		}), W = p(function() {
			var e = B.current;
			return e({ vcardList: N });
		}, [B, N]), q = g(N);
		q.current = N, f(function() {
			var e, t = N, r = W(), a = (e = []).concat.apply(e, r.map(function(e) {
				var t = e.wids;
				return t;
			})).slice(0, 10);
			(u || (u = n("Promise"))).all(a.map(function(e) {
				return o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.find(e);
			})).then(function() {
				return o("WAWebReleaseToEventLoop").releaseToEventLoop();
			}).then(function() {
				q.current === t && (T(!1), $(S(r)));
			});
		}, [W, N]);
		for (var U = o("WAWebDisplayType").isWideDisplay(t.displayType), V = t.displayAuthor ? d.jsx("div", babelHelpers.extends({}, {
			0: { className: "xso031l x1q0q8m5 x120ee7l xzueoph xs9asl8" },
			1: { className: "xso031l x120ee7l xs9asl8 x1sy0etr xat24cr" }
		}[!!t.quotedMsg << 0], { children: d.jsx(r("WAWebMessageAuthor.react"), {
			msg: i,
			contact: b,
			displayType: t.displayType
		}) })) : null, H = x || W(), G = H.map(function(e) {
			var t = e.displayName;
			return t;
		}), z = o("WAWebVcardUtils").getNameStringFromNames(G), j = Math.min(H.length, C), K = [], Q = 0; Q < j; Q++) {
			var X = H[Q], Y = X.thumbnail, J = X.wids, Z = o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.findThumbnailWid(J), ee = {
				0: "x1n2onr6 x11uqc5h x1rg5ohu",
				2: "x1n2onr6 x1rg5ohu xeut3pp x14437wl",
				1: "x1n2onr6 x1rg5ohu xqqomq6 x14437wl",
				3: "x1n2onr6 x1rg5ohu xqqomq6 x14437wl"
			}[(Q === 1) << 1 | (Q === 2) << 0];
			!I && (Z || Y) ? K.push(d.jsx("div", {
				className: ee,
				children: d.jsx(r("WAWebProfileImage.react"), {
					wid: Z,
					thumb: Y,
					size: 39,
					border: !0
				})
			}, "profile-pic-" + Q)) : K.push(d.jsx("div", {
				className: ee,
				children: d.jsx(r("WAWebProfileImage.react"), {
					size: 39,
					border: !0
				})
			}, "default-pic-" + Q));
		}
		var te = N || E.isTrusted(), ne = t.quotedMsg ? d.jsx("div", babelHelpers.extends({}, {
			0: { className: "x1198e8h x1lxpwgx xwoyzhm xw01apr" },
			1: { className: "x1lxpwgx xwoyzhm xw01apr xdj266r" }
		}[!!V << 0], { children: t.quotedMsg })) : null, re = {
			0: "x9f619 x1yrsyyn x1bjonze xwib8y2 x7coems x3orp4s",
			4: "x9f619 x1yrsyyn x1bjonze xwib8y2 x7coems x13nahy2 xh8yej3",
			2: "x9f619 x1yrsyyn x1bjonze xwib8y2 x7coems x1yuel0x",
			6: "x9f619 x1yrsyyn x1bjonze xwib8y2 x7coems x13nahy2 x1yuel0x",
			1: "x9f619 x1yrsyyn x1bjonze xwib8y2 x7coems x13nahy2 xh8yej3",
			5: "x9f619 x1yrsyyn x1bjonze xwib8y2 x7coems x13nahy2 xh8yej3",
			3: "x9f619 x1yrsyyn x1bjonze xwib8y2 x7coems x13nahy2 xh8yej3",
			7: "x9f619 x1yrsyyn x1bjonze xwib8y2 x7coems x13nahy2 xh8yej3"
		}[(t.displayType === o("WAWebDisplayType").DISPLAY_TYPE.MSG_INFO) << 2 | !!U << 1 | (t.displayType === o("WAWebDisplayType").DISPLAY_TYPE.STARRED_MSGS || t.displayType === o("WAWebDisplayType").DISPLAY_TYPE.GALLERY || t.displayType === o("WAWebDisplayType").DISPLAY_TYPE.CONTACT_CARD) << 0];
		return d.jsxs("div", {
			className: re,
			children: [
				V,
				ne,
				d.jsxs("div", {
					className: "x1n2onr6 x78zum5 x6s0dn4 xng8ra xdzw4kq xqf2s3x",
					role: te ? "button" : null,
					title: z,
					onClick: O,
					children: [
						d.jsx("div", {
							className: "x2lah0s x1c4vz4f xdl72j9 x1g6eq07",
							children: K
						}),
						d.jsx("div", {
							className: "xs83m0k x1iyjqo2 xdl72j9 x18wx58x x6ikm8r x10wlt62",
							children: d.jsx(o("WAWebEmojiText.react").EmojiText, {
								text: z,
								element: "div",
								xstyle: y.name,
								emojiXstyle: y.emoji,
								dirMismatch: c !== r("WAWebL10N").isRTL(),
								direction: m,
								wbr: 15
							})
						}),
						d.jsx("div", {
							className: "x1o583il x10l6tqk x13niomq",
							children: d.jsx(o("WAWebMessageMeta.react").Meta, { msg: i })
						})
					]
				}),
				d.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, { items: [{
					label: s._(
						/*BTDS*/
						""
					),
					onClick: O
				}] })
			]
		});
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v(e) {
		return !!(o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.findThumbnailWid(e.wids) || e.thumbnail);
	}
	function S(e) {
		return e.toSorted(function(e, t) {
			var n = v(e), r = v(t);
			return n && !r ? -1 : !n && r ? 1 : e.displayName.toString() < t.displayName.toString() ? -1 : e.displayName.toString() > t.displayName.toString() ? 1 : 0;
		});
	}
	var R = function() {
		o("WAWebModalManager").ModalManager.open(d.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "multi-vcard"
			},
			onOK: function() {
				return o("WAWebModalManager").ModalManager.close();
			},
			children: s._(
				/*BTDS*/
				""
			)
		}));
	};
	l.default = b;
}), 226);
