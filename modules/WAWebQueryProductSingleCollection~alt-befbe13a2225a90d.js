__d("WAWebQueryProductSingleCollection", [
	"WALogger",
	"WAWebBackendErrors",
	"WAWebBizCatalogGatingUtils",
	"WAWebBizCatalogManagementFetchSingleCollection",
	"WAWebBizParseProductGraphql",
	"WAWebCatalogEventLogger",
	"WAWebGetFormattedCatalogJid",
	"WAWebGraphQLServerError",
	"WAWebMaybeThrowCatalogErrors",
	"WAWebProductTypes",
	"WAWebQueryProductSingleCollectionQuery.graphql",
	"WAWebRelayClient",
	"WAWebUserPrefsMeUser"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c = async function(r) {
		if (o("WAWebBizCatalogGatingUtils").commerceFeaturesDisabledBySanctions()) throw new (o("WAWebBackendErrors")).E451();
		try {
			var t, a, i = r.afterCursor, l = r.catalogWid, u = r.collectionId, c = r.directConnectionEncryptedInfo, d = r.height, m = r.limit, p = r.variantInfoFields, _ = r.variantThumbnailHeight, f = r.variantThumbnailWidth, g = r.width, h = await o("WAWebRelayClient").fetchQuery(e !== void 0 ? e : e = n("WAWebQueryProductSingleCollectionQuery.graphql"), { request: { collection: {
				biz_jid: (t = o("WAWebGetFormattedCatalogJid").getFormattedCatalogJid(l)) != null ? t : l.toString(),
				id: u,
				limit: String(m),
				after: i,
				width: String(g),
				height: String(d),
				direct_connection_encrypted_info: c,
				variant_info_fields: p,
				variant_thumbnail_height: _ != null ? String(_) : null,
				variant_thumbnail_width: f != null ? String(f) : null
			} } }, { eventLogger: o("WAWebCatalogEventLogger").createCatalogEventLogger(o("WAWebCatalogEventLogger").GRAPHQL_CATALOG_ENDPOINT.GET_SINGLE_COLLECTION) }), y = (h == null ? void 0 : h.xwa_product_catalog_get_single_collection) || {}, C = y.collection, b = y.paging, v = C || {}, S = v.id, R = v.name, L = v.products, E = v.status_info, k = E == null ? void 0 : E.status, I = (a = k != null ? o("WAWebProductTypes").asProductReviewType(k) : void 0) != null ? a : "APPROVED";
			return {
				afterCursor: (b == null ? void 0 : b.after) || "",
				catalog_type: null,
				collections: [{
					id: S || "",
					name: R || "",
					canAppeal: (E == null ? void 0 : E.can_appeal) === "true",
					isHidden: !1,
					reviewStatus: I,
					totalItemsCount: 0,
					products: L != null ? L.map(o("WAWebBizParseProductGraphql").parseProductGraphQL) : [],
					rejectReason: E == null ? void 0 : E.reject_reason,
					commerceUrl: E == null ? void 0 : E.commerce_url
				}]
			};
		} catch (e) {
			throw e instanceof o("WAWebGraphQLServerError").GraphQLServerError && o("WAWebMaybeThrowCatalogErrors").maybeThrowLocalErrorForCatalogQuery(e), o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose(["GraphQL: get_single_collection fetch failed"]))), new (o("WAWebBackendErrors")).CatalogUnknownError();
		}
	}, d = async function(t) {
		var e;
		if (o("WAWebBizCatalogGatingUtils").commerceFeaturesDisabledBySanctions()) throw new (o("WAWebBackendErrors")).E451();
		var n = t.afterCursor, r = t.catalogWid, a = t.collectionId, i = t.directConnectionEncryptedInfo, l = t.height, s = t.limit, c = t.variantInfoFields, d = t.variantThumbnailHeight, m = t.variantThumbnailWidth, p = t.width, _ = await o("WAWebBizCatalogManagementFetchSingleCollection").fetchSingleCollection({ collection: {
			biz_jid: (e = o("WAWebGetFormattedCatalogJid").getFormattedCatalogJid(r)) != null ? e : r.toJid(),
			id: a,
			limit: String(s),
			after: n,
			width: String(p),
			height: String(l),
			direct_connection_encrypted_info: i,
			variant_info_fields: c,
			variant_thumbnail_height: d != null ? String(d) : null,
			variant_thumbnail_width: m != null ? String(m) : null
		} });
		if (_.type === "success") return _.collectionsResult;
		throw _.type === "graphql-error" ? o("WAWebMaybeThrowCatalogErrors").maybeThrowLocalErrorForCatalogQuery(_.error) : _.type, o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose(["queryProductSingleCollectionGraphQLByOwner: unhandled err ", ""])), JSON.stringify(_)), new (o("WAWebBackendErrors")).CatalogUnknownError();
	}, m = function(t) {
		return o("WAWebUserPrefsMeUser").isMeAccount(t.catalogWid) ? d(t) : c(t);
	}, p = m;
	l.default = p;
}), 98);
