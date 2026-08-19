__d("WAWebProfilePicThumbCollection", [
	"WAComms",
	"WAFilteredCatch",
	"WALogger",
	"WATimeUtils",
	"WAWebApiContact",
	"WAWebBackendErrors",
	"WAWebBaseCachePolicy",
	"WAWebBizAiAssetResolver",
	"WAWebBotUtils",
	"WAWebChatCollection",
	"WAWebChatGetters",
	"WAWebContactCollection",
	"WAWebContactProfilePicThumbBridge",
	"WAWebGroupType",
	"WAWebNewsletterCollection",
	"WAWebNewsletterMetadataCollection",
	"WAWebProfilePicThumbModel",
	"WAWebSocketConstants",
	"WAWebSocketModel",
	"WAWebStaleBaseCollection",
	"WAWebUnjoinedSubgroupMetadataCollection",
	"WAWebUserPrefsKeys",
	"WAWebUserPrefsMeUser",
	"WAWebVcardParsingUtils",
	"WAWebVoipGatingUtils",
	"WAWebWid",
	"WAWebWindowsHybridBridgeInitiator",
	"cr:17219",
	"err",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c, d, m, p, _ = new Set(), f = (function(t) {
		function a() {
			var a, i;
			i = t.call(this) || this, i.findImpl = function(t) {
				var n, a, i, l;
				if (!(t instanceof r("WAWebWid"))) return o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["ProfilePicThumbCollection.findImpl non-WAWebWid id"]))).sendLogs("profile-pic-find-invalid-id"), Promise.reject(r("err")("ProfilePicThumbCollection.findImpl called with a non-WAWebWid id"));
				var s = t.isNewsletter() ? r("WAWebNewsletterCollection") : o("WAWebChatCollection").ChatCollection, u = s.get(t), c = (u == null || (n = u.groupMetadata) == null ? void 0 : n.groupType) === o("WAWebGroupType").GroupType.COMMUNITY, d = r("WAWebUnjoinedSubgroupMetadataCollection").get(t.toString());
				if (u != null && u.isReadOnly && !c && !(u != null && o("WAWebChatGetters").getIsNewsletter(u)) && d == null || u != null && (a = u.groupMetadata) != null && a.terminated || u != null && (i = u.newsletterMetadata) != null && i.terminated || u != null && (l = u.newsletterMetadata) != null && l.isPreview) return Promise.resolve({
					id: t,
					stale: !0
				});
				if (t.isAiHub() || o("WAWebBotUtils").isBotChannelFBID(t) || o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(t)) return Promise.resolve({ id: t });
				if ((r("WAWebWid").isUser(t) || r("WAWebWid").isGroup(t) || r("WAWebWid").isNewsletter(t)) && !r("WAWebWid").isPSA(t)) {
					var m, p = c ? t : u == null || (m = u.groupMetadata) == null ? void 0 : m.parentGroup;
					d != null && (p = d.parentGroupId);
					var _ = o("WAWebSocketModel").Socket.stream !== o("WAWebSocketConstants").SOCKET_STREAM.DISCONNECTED || o("WAWebVoipGatingUtils").isGuestViewer() && o("WAComms").isSocketConnected();
					if (_) {
						var f;
						if (r("WAWebWid").isUser(t)) {
							var g, h = o("WAWebContactCollection").ContactCollection.get(t), y = o("WAWebChatCollection").ChatCollection.get(t);
							return o("WAWebContactProfilePicThumbBridge").requestProfilePicFromServer({
								id: t,
								parentGroupId: p,
								tcToken: y == null ? void 0 : y.tcToken,
								commonGid: (y == null ? void 0 : y.tcToken) == null ? h == null || (g = h.maybeCommonGroupChatModel) == null ? void 0 : g.id : null
							});
						}
						return o("WAWebContactProfilePicThumbBridge").requestProfilePicFromServer({
							id: t,
							parentGroupId: p,
							newsletterRole: t.isNewsletter() ? (f = r("WAWebNewsletterMetadataCollection").get(t)) == null ? void 0 : f.membershipType : void 0
						});
					}
					return Promise.resolve({
						id: t,
						stale: !0
					});
				}
				return Promise.resolve({
					id: t,
					tag: null
				});
			}, i._getUpdatedProfilePicModel = function(e) {
				return {
					tag: e.tag,
					raw: void 0,
					stale: !1,
					eurl: e.eurl,
					eurlStale: !1,
					previewEurl: e.previewEurl,
					previewDirectPath: e.previewDirectPath,
					fullDirectPath: e.fullDirectPath,
					filehash: e.filehash,
					timestamp: Date.now()
				};
			};
			var l = (a = n("cr:17219")) == null ? void 0 : a.getWindowsBridge(r("WAWebWindowsHybridBridgeInitiator").WAWebProfilePicThumbCollection);
			return l && i.listenTo(i, "add remove change:timestamp", function(e, t, n) {
				var r;
				(r = l.pictures) == null || r.notifyUpdate(e);
			}), i.listenTo(i, "add change", function(e) {
				i._mirrorMeRow(e);
			}), i;
		}
		babelHelpers.inheritsLoose(a, t);
		var i = a.prototype;
		return i._mirrorMeRow = function(t) {
			if (o("WAWebUserPrefsMeUser").isMeAccount(t.id)) {
				var e = t.id.toString();
				if (!_.has(e)) {
					var n = o("WAWebApiContact").getMeUserWids();
					if (!(n.length < 2)) {
						var r = {
							tag: t.tag,
							eurl: t.eurl,
							previewEurl: t.previewEurl,
							fullDirectPath: t.fullDirectPath,
							previewDirectPath: t.previewDirectPath,
							filehash: t.filehash,
							timestamp: t.timestamp,
							stale: t.stale,
							eurlStale: t.eurlStale
						};
						for (var a of n) if (!a.equals(t.id)) {
							var i = a.toString();
							_.add(i);
							try {
								var l = this.gadd(a);
								l.set(r);
							} finally {
								_.delete(i);
							}
						}
					}
				}
			}
		}, i.get = function(n) {
			var e = t.prototype.get.call(this, n);
			return this.isProfilePicRefreshNeeded(e == null ? void 0 : e.timestamp, e == null ? void 0 : e.eurlStale) && (e == null || e.markStale({ eurl: !0 })), this.modelClass.prototype.isIdType(n), e;
		}, i.resyncPicturesByWid = async function(t) {
			var e = this;
			try {
				var n = await o("WAWebContactProfilePicThumbBridge").profilePicResync(t.map(function(e) {
					if (e.isRegularUser()) {
						var t, n = o("WAWebContactCollection").ContactCollection.get(e), r = o("WAWebChatCollection").ChatCollection.get(e);
						return {
							id: e,
							tcToken: r == null ? void 0 : r.tcToken,
							commonGid: (r == null ? void 0 : r.tcToken) == null ? n == null || (t = n.maybeCommonGroupChatModel) == null ? void 0 : t.id : null
						};
					}
					return { id: e };
				}));
				o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["ProfilePicThumbStore:resyncPictures success"]))), n.forEach(function(t) {
					var n = e._getUpdatedProfilePicModel(t), r = e.get(t.id);
					r ? r.set(n) : e.add(babelHelpers.extends({ id: t.id }, n));
				});
			} catch (e) {
				o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose(["ProfilePicThumbStore:resyncMyProfilePicture failed: ", ""])), e);
			}
		}, i.resyncPictures = function(t) {
			var e = this;
			return t.length === 0 ? Promise.resolve() : o("WAWebContactProfilePicThumbBridge").profilePicResync(t.map(function(e) {
				if (e.id.isRegularUser()) {
					var t, n = o("WAWebContactCollection").ContactCollection.get(e.id), r = o("WAWebChatCollection").ChatCollection.get(e.id);
					return {
						id: e.id,
						tag: e.tag,
						tcToken: r == null ? void 0 : r.tcToken,
						commonGid: (r == null ? void 0 : r.tcToken) == null ? n == null || (t = n.maybeCommonGroupChatModel) == null ? void 0 : t.id : null
					};
				}
				return {
					id: e.id,
					tag: e.tag
				};
			})).then(function(n) {
				o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["ProfilePicThumbStore:resyncPictures success"]))), n.forEach(function(t) {
					var n = e.get(t.id);
					n && n.set(e._getUpdatedProfilePicModel(t));
				}), t.forEach(function(t) {
					t.eurlStale && e.update(t.id), t.stale = !1;
				});
			}).catch(o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").ServerStatusCodeError, function(e) {
				e.status === 423 || e.status === 429 ? o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose(["ProfilePicThumbStore:resyncPictures blocked ", ""])), e.status) : e.status >= 400 && o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose(["ProfilePicThumbStore:resyncPictures dropped: ", ""])), String(e));
			})).catch(function(e) {
				o("WALogger").WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose(["ProfilePicThumbStore:resyncPictures dropped"]))).catching(r("getErrorSafe")(e));
			});
		}, i.findThumbnailWid = function(t) {
			var e = this;
			return t.find(function(t) {
				var n;
				return (n = e.get(t)) == null ? void 0 : n.img;
			});
		}, i.getThumbnailWidFromVcard = function(t) {
			if (!t) return null;
			var e = o("WAWebVcardParsingUtils").vcardPhoneNumberWids(t).map(function(e) {
				return e;
			});
			if (e.length > 0) {
				var n;
				return (n = this.findThumbnailWid(e)) != null ? n : e[0];
			}
			var r = o("WAWebVcardParsingUtils").vcardLidWid(t);
			return r != null ? r : null;
		}, i.isProfilePicRefreshNeeded = function(t, n) {
			if (n === void 0 && (n = !1), t == null || n) return !0;
			var e = Date.now() - t;
			return e > o("WATimeUtils").WEEK_MILLISECONDS;
		}, a;
	})(o("WAWebStaleBaseCollection").StaleBaseCollection);
	f.model = o("WAWebProfilePicThumbModel").ProfilePicThumb, f.cachePolicy = {
		id: o("WAWebUserPrefsKeys").COLLECTIONS_KEYS.PROFILE_PIC_THUMB_COLLECTION,
		trigger: "change:tag",
		policy: o("WAWebBaseCachePolicy").CACHE_POLICY.NONE,
		delay: 5e3
	};
	function g() {
		var e = new f();
		return o("WAWebBizAiAssetResolver").registerAiHubProfileThemeChangeHandler(function(t) {
			e.getModelsArray().forEach(function(e) {
				e.id.isAiHub() && e.set({ aiHubProfileIsDarkTheme: t });
			});
		}), e;
	}
	var h = g();
	l.ProfilePicThumbCollection = h;
}), 98);
