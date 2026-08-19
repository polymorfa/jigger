__d("WAWebQueryCatalog", [
	"WALogger",
	"WAWebBackendErrors",
	"WAWebBizCatalogGatingUtils",
	"WAWebBizCatalogManagementFetchCatalog",
	"WAWebBizParseProductGraphql",
	"WAWebCatalogEventLogger",
	"WAWebGetFormattedCatalogJid",
	"WAWebGraphQLServerError",
	"WAWebMaybeThrowCatalogErrors",
	"WAWebQueryCatalogQuery.graphql",
	"WAWebRelayClient",
	"WAWebUserPrefsMeUser"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c = async function(r) {
		if (o("WAWebBizCatalogGatingUtils").commerceFeaturesDisabledBySanctions()) throw new (o("WAWebBackendErrors")).E451();
		try {
			var t, a, i, l, u = r.afterCursor, c = r.allowShopSource, d = r.catalogWid, m = r.checkmarkCollectionId, p = r.directConnectionEncryptedInfo, _ = r.height, f = r.limit, g = r.variantInfoFields, h = r.variantThumbnailHeight, y = r.variantThumbnailWidth, C = r.width, b = await o("WAWebRelayClient").fetchQuery(e !== void 0 ? e : e = n("WAWebQueryCatalogQuery.graphql"), { request: { product_catalog: {
				jid: (t = o("WAWebGetFormattedCatalogJid").getFormattedCatalogJid(d)) != null ? t : d.toString(),
				allow_shop_source: c ? "ALLOWSHOPSOURCE_TRUE" : "ALLOWSHOPSOURCE_FALSE",
				width: String(C),
				height: String(_),
				direct_connection_encrypted_info: p,
				limit: String(f),
				after: u,
				catalog_session_id: m,
				variant_info_fields: g,
				variant_thumbnail_height: h != null ? String(h) : null,
				variant_thumbnail_width: y != null ? String(y) : null
			} } }, { eventLogger: o("WAWebCatalogEventLogger").createCatalogEventLogger(o("WAWebCatalogEventLogger").GRAPHQL_CATALOG_ENDPOINT.GET_CATALOG) }), v = b == null || (a = b.xwa_product_catalog_get_product_catalog) == null ? void 0 : a.product_catalog;
			if (v == null) return {
				data: [],
				catalog_id: null,
				catalog_name: null,
				catalog_type: null,
				paging: { cursors: {
					after: "",
					before: ""
				} }
			};
			var S = v.paging, R = v.products;
			return {
				data: R.map(o("WAWebBizParseProductGraphql").parseProductGraphQL),
				catalog_id: null,
				catalog_name: null,
				catalog_type: null,
				paging: { cursors: {
					before: (i = S == null ? void 0 : S.before) != null ? i : "",
					after: (l = S == null ? void 0 : S.after) != null ? l : ""
				} }
			};
		} catch (e) {
			throw e instanceof o("WAWebGraphQLServerError").GraphQLServerError && o("WAWebMaybeThrowCatalogErrors").maybeThrowLocalErrorForCatalogQuery(e), o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose(["GraphQL: xwa_product_catalog_get_product_catalog failed"]))), new (o("WAWebBackendErrors")).CatalogUnknownError();
		}
	}, d = async function(t) {
		var e, n = t.afterCursor, r = t.allowShopSource, a = t.catalogWid, i = t.checkmarkCollectionId, l = t.directConnectionEncryptedInfo, s = l === void 0 ? null : l, c = t.height, d = t.limit, m = t.variantInfoFields, p = t.variantThumbnailHeight, _ = t.variantThumbnailWidth, f = t.width;
		if (o("WAWebBizCatalogGatingUtils").commerceFeaturesDisabledBySanctions()) throw new (o("WAWebBackendErrors")).E451();
		var g = await o("WAWebBizCatalogManagementFetchCatalog").fetchCatalog({
			product_catalog: {
				jid: (e = o("WAWebGetFormattedCatalogJid").getFormattedCatalogJid(a)) != null ? e : a.toJid(),
				after: n,
				limit: String(d),
				width: String(f),
				height: String(c),
				belongs_to: { collection_id: i },
				allow_shop_source: r,
				direct_connection_encrypted_info: s,
				variant_info_fields: m,
				variant_thumbnail_height: p != null ? String(p) : null,
				variant_thumbnail_width: _ != null ? String(_) : null
			},
			platform: "WEB"
		});
		if (g.type === "success") return g.catalog;
		throw g.type === "graphql-error" ? o("WAWebMaybeThrowCatalogErrors").maybeThrowLocalErrorForCatalogQuery(g.error, o("WAWebMaybeThrowCatalogErrors").ErrorSourceForCatalogQuery.GET_PRODUCT_CATALOG_OWNER_GRAPHQL) : g.type, g.type === "recovery-required" ? new (o("WAWebBackendErrors")).AdAccountRecoveryRequiredError(g.emailMask) : g.type === "incorrect-nonce" ? new (o("WAWebBackendErrors")).CatalogIncorrectNonceError() : (o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose(["queryCatalogGraphQLByOwner: unhandled error ", ""])), JSON.stringify(g)), new (o("WAWebBackendErrors")).CatalogUnknownError());
	}, m = function(t) {
		return o("WAWebUserPrefsMeUser").isMeAccount(t.catalogWid) ? d(t) : c(t);
	}, p = m;
	l.default = p;
}), 98);
