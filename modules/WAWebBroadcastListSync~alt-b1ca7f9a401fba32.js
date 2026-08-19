__d("WAWebBroadcastListSync", [
	"WALogger",
	"WAWebAudienceExpressionTypes",
	"WAWebBroadcastListStorageUtils",
	"WAWebProtobufsServerSync.pb",
	"WAWebSyncdAction",
	"WAWebSyncdActionUtils",
	"WAWebSyncdConst",
	"WAWebSyncdIndexUtils",
	"WAWebUserPrefsMeUser"
], (function(t, n, r, o, a, i, l) {
	var e, s = (function(t) {
		function n() {
			for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
			return e = t.call.apply(t, [this].concat(r)) || this, e.collectionName = o("WAWebSyncdConst").CollectionName.Regular, babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
		}
		babelHelpers.inheritsLoose(n, t);
		var r = n.prototype;
		return r.getVersion = function() {
			return 1;
		}, r.getAction = function() {
			return o("WAWebSyncdConst").Actions.BusinessBroadcastList;
		}, r.applyMutations = async function(n) {
			var t = this, r = 0, a = await Promise.all(n.map(async function(e) {
				try {
					var n = e.indexParts, a = n[1];
					if (!a) return t.malformedActionIndex();
					e: {
						var i = e;
						if ((typeof i == "object" && i !== null || typeof i == "function") && i.operation === "set" && "value" in i) {
							var l = i.value, s = l.businessBroadcastListAction;
							if (!s) return r++, o("WAWebSyncdIndexUtils").malformedActionValue(t.collectionName);
							var u = s.audienceExpression, c = s.labelIds, d = s.listName, m = s.participants, p = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow().toString(), _ = (m != null ? m : []).filter(function(e) {
								return e.lidJid !== p;
							}), f = u != null ? o("WAWebAudienceExpressionTypes").parseAudienceExpressionJson(u) : null, g = f != null ? f : (c != null ? c : []).length > 0 ? o("WAWebAudienceExpressionTypes").createLabelPredicateExpression(c != null ? c : []) : o("WAWebAudienceExpressionTypes").createExplicitExpression(_.map(function(e) {
								return e.lidJid;
							}));
							return await o("WAWebBroadcastListStorageUtils").updateBroadcastListStorage({
								audienceExpression: g,
								id: a,
								listName: d != null ? d : ""
							}), { actionState: o("WAWebSyncdConst").SyncActionState.Success };
							break e;
						}
						if ((typeof i == "object" && i !== null || typeof i == "function") && i.operation === "remove") {
							return await o("WAWebBroadcastListStorageUtils").removeBroadcastListStorage(a), { actionState: o("WAWebSyncdConst").SyncActionState.Success };
							break e;
						}
						throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + i);
					}
				} catch (e) {
					return { actionState: o("WAWebSyncdConst").SyncActionState.Failed };
				}
			}));
			return r > 0 && o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["broadcast list sync: ", " malformed mutations"])), r), a;
		}, r.getBroadcastListMutation = function(t) {
			var e = t.expression, n = t.id, r = t.listName, a = t.participants, i = t.timestamp, l = { businessBroadcastListAction: {
				participants: a,
				listName: r,
				labelIds: [],
				audienceExpression: o("WAWebAudienceExpressionTypes").serializeAudienceExpression(e)
			} };
			return o("WAWebSyncdActionUtils").buildPendingMutation({
				action: this.getAction(),
				indexArgs: [n],
				collection: this.collectionName,
				value: l,
				version: this.getVersion(),
				operation: o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET,
				timestamp: i
			});
		}, r.getDeleteBroadcastListMutation = function(t, n) {
			return o("WAWebSyncdActionUtils").buildPendingMutation({
				action: this.getAction(),
				indexArgs: [t],
				collection: this.collectionName,
				value: {},
				version: this.getVersion(),
				operation: o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.REMOVE,
				timestamp: n
			});
		}, n;
	})(o("WAWebSyncdAction").AccountSyncdActionBase), u = new s();
	l.default = u;
}), 98);
