const WamGraphqlCatalogRequest = 3206 // channel: private

type GraphqlCatalogRequestEvent struct {
	GraphqlCatalogEndpoint GRAPHQLCATALOGENDPOINT `wam:"graphql_catalog_endpoint"` // field 1
	GraphqlRequestResult GRAPHQLREQUESTRESULT `wam:"graphql_request_result"` // field 2
	GraphqlErrorCode int64 `wam:"graphql_error_code"` // field 3
	BusinessJid string `wam:"business_jid"` // field 4
	BusinessType BUSINESSTYPE `wam:"business_type"` // field 5
}