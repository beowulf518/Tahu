const aws_exports = {
    "aws_project_region": process.env.REACT_APP_PROJECT_REGION,
    "aws_cognito_identity_pool_id": process.env.REACT_APP_COGNITO_IDENTITY_POOL_ID,
    "aws_cognito_region": process.env.REACT_APP_COGNITO_REGION, 
    "aws_user_pools_id": process.env.REACT_APP_USER_POOLS_ID,
    "aws_user_pools_web_client_id": process.env.REACT_APP_USER_POOLS_WEB_CLIENT_ID,
    "oauth": {},
    "aws_cloud_logic_custom": [
        {
            "name": "tahuapi",
            "endpoint": process.env.REACT_APP_API_GATEWAY_ENDPOINT,
            "region":  process.env.REACT_APP_API_GATEWAY_REGION,
        }
    ]
};
export default aws_exports;
